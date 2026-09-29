export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 非 /api 请求，交给静态资源（CF 自动处理）
    if (url.pathname !== '/api') {
      return env.ASSETS.fetch(request);
    }

    // 密码校验
    const password = request.headers.get('x-password') || '';
    if (!env.PASSWORD || password !== env.PASSWORD) {
      return new Response('Unauthorized', { status: 401 });
    }

    if (request.method === 'GET') {
      const raw = await env.MY_KV.get('data');
      return Response.json(raw ? JSON.parse(raw) : { accounts: [] });
    }

    if (request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return new Response('Bad Request', { status: 400 });
      }
      if (!body || !Array.isArray(body.accounts)) {
        return new Response('Bad Request', { status: 400 });
      }
      await env.MY_KV.put('data', JSON.stringify(body));
      return Response.json({ ok: true });
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};