// Service worker: cachea el juego para poder jugar sin conexión.
// Subí el número de CACHE cada vez que cambien los archivos del juego.
const CACHE = 'quimica-quest-v8';

const ASSETS = [
  '.',
  'index.html',
  'styles.css',
  'manifest.webmanifest',
  'js/app.js',
  'js/storage.js',
  'js/sfx.js',
  'data/levels.js',
  'data/teoria.js',
  'data/figuras.js',
  'icons/icon.svg',
  'icons/icon-maskable.svg',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first para el HTML (así se actualiza al haber señal),
// cache-first para el resto de los recursos.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) =>
      hit ||
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
    )
  );
});
