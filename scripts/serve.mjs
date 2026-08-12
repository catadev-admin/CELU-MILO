#!/usr/bin/env node
// Servidor estático mínimo para desarrollo (los módulos ES no andan con file://).
// Uso directo:  node scripts/serve.mjs [puerto]   ·   node --run serve

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webmanifest': 'application/manifest+json',
  '.json': 'application/json',
};

export function serve(port = 0, host = '127.0.0.1') {
  const server = createServer(async (req, res) => {
    let path = decodeURIComponent(req.url.split('?')[0]);
    if (path.endsWith('/')) path += 'index.html';
    const file = join(ROOT, normalize(path).replace(/^(\.\.[/\\])+/, ''));
    try {
      const body = await readFile(file);
      res.writeHead(200, {
        'content-type': MIME[extname(file)] || 'application/octet-stream',
        'cache-control': 'no-store',
      });
      res.end(body);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('404');
    }
  });
  return new Promise((ok) => server.listen(port, host, () => ok(server)));
}

// Ejecutado directamente (no importado)
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.argv[2]) || 8080;
  const server = await serve(port, '0.0.0.0');
  const { port: p } = server.address();
  console.log(`Química Quest en http://localhost:${p}/  (Ctrl+C para parar)`);
}
