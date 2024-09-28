// Middleware - Interceptador = Uma função que vai interceptar nossa requisição com outro arquivo.
// Middleware sempre recebem como parâmetro (REQ, RES)

export async function json(req, res) {
  // Json de entrada, converte o corpo da requisição
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  // Json de saída, devolve os dados em json
  res.setHeader('Content-type', 'application/json')
}