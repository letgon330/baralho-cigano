function json(res, status, data){
  res.status(status).setHeader('Content-Type','application/json; charset=utf-8');
  return res.end(JSON.stringify(data));
}
async function supaFetch(url, opts, serviceKey){
  const headers={...(opts.headers||{}),apikey:serviceKey,Authorization:`Bearer ${serviceKey}`,'Content-Type':'application/json'};
  return fetch(url,{...opts,headers});
}
module.exports = async function handler(req,res){
  if(req.method!=='POST') return json(res,405,{error:'Método não permitido.'});
  const base=process.env.SUPABASE_URL;
  const serviceKey=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!base||!serviceKey) return json(res,500,{error:'Variáveis SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY não configuradas na Vercel.'});

  const auth=(req.headers.authorization||'').replace(/^Bearer\s+/i,'').trim();
  if(!auth) return json(res,401,{error:'Sessão ausente.'});

  const userResp=await fetch(`${base}/auth/v1/user`,{
    headers:{apikey:serviceKey,Authorization:`Bearer ${auth}`}
  });
  if(!userResp.ok) return json(res,401,{error:'Sessão inválida ou expirada.'});
  const caller=await userResp.json();

  const admResp=await supaFetch(
    `${base}/rest/v1/admin_users?user_id=eq.${encodeURIComponent(caller.id)}&select=user_id`,
    {method:'GET'},
    serviceKey
  );

  if(!admResp.ok) return json(res,500,{error:'Não foi possível validar a administradora.'});

  const rows=await admResp.json();

  if(!Array.isArray(rows)||!rows.length){
    return json(res,403,{error:'Acesso restrito à administradora.'});
  }

  const body=req.body||{};
  const action=body.action;
  const adminBase=`${base}/auth/v1/admin/users`;

  if(action==='list'){
    const r=await supaFetch(
      `${adminBase}?page=1&per_page=1000`,
      {method:'GET'},
      serviceKey
    );

    const d=await r.json();

    if(!r.ok){
      return json(res,r.status,{
        error:d.msg||d.message||'Falha ao listar usuários.'
      });
    }

    const users=(d.users||[]).map(u=>({
      id:u.id,
      email:u.email||'',
      full_name:(u.user_metadata&&u.user_metadata.full_name)||'',
      created_at:u.created_at,
      last_sign_in_at:u.last_sign_in_at||null,
      banned_until:u.banned_until||null,
      email_confirmed_at:u.email_confirmed_at||null
    }));

    return json(res,200,{users});
  }

  if(action==='create'){
    const email=String(body.email||'').trim().toLowerCase();
    const password=String(body.password||'');
    const full_name=String(body.full_name||'').trim();

    if(!email||password.length<6){
      return json(res,400,{
        error:'Informe e-mail e senha temporária com pelo menos 6 caracteres.'
      });
    }

    const r=await supaFetch(
      adminBase,
      {
        method:'POST',
        body:JSON.stringify({
          email,
          password,
          email_confirm:true,
          user_metadata:{full_name}
        })
      },
      serviceKey
    );

    const d=await r.json();

    if(!r.ok){
      return json(res,r.status,{
        error:d.msg||d.message||'Falha ao criar usuário.'
      });
    }

    const approvalResp=await supaFetch(
      `${base}/rest/v1/profiles?id=eq.${encodeURIComponent(d.id)}`,
      {
        method:'PATCH',
        headers:{Prefer:'return=minimal'},
        body:JSON.stringify({
          is_approved:true
        })
      },
      serviceKey
    );

    if(!approvalResp.ok){
      return json(res,500,{
        error:'Usuário criado, mas não foi possível liberar o acesso automaticamente.'
      });
    }

    return json(res,200,{
      user:{
        id:d.id,
        email:d.email
      }
    });
  }

  const userId=String(body.user_id||'');

  if(!userId||userId===caller.id){
    return json(res,400,{
      error:'Operação não permitida para esta conta.'
    });
  }

  if(
    action==='ban'||
    action==='unban'||
    action==='reset_password'
  ){
    const patch=
      action==='ban'
        ? {ban_duration:'876000h'}
        : action==='unban'
        ? {ban_duration:'none'}
        : {password:String(body.password||'')};

    if(
      action==='reset_password' &&
      patch.password.length<6
    ){
      return json(res,400,{
        error:'A senha precisa ter pelo menos 6 caracteres.'
      });
    }

    const r=await supaFetch(
      `${adminBase}/${encodeURIComponent(userId)}`,
      {
        method:'PUT',
        body:JSON.stringify(patch)
      },
      serviceKey
    );

    const d=await r.json();

    if(!r.ok){
      return json(res,r.status,{
        error:d.msg||d.message||'Falha ao atualizar usuário.'
      });
    }

    return json(res,200,{ok:true});
  }

  if(action==='delete'){
    const r=await supaFetch(
      `${adminBase}/${encodeURIComponent(userId)}`,
      {method:'DELETE'},
      serviceKey
    );

    let d={};

    try{
      d=await r.json();
    }catch(e){}

    if(!r.ok){
      return json(res,r.status,{
        error:d.msg||d.message||'Falha ao excluir usuário.'
      });
    }

    return json(res,200,{ok:true});
  }

  return json(res,400,{
    error:'Ação inválida.'
  });
}
