const CACHE_NAME = 'dietrich-cache-v1.0.5'; // Subimos a 1.0.5 para testear
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

// 1. Instalación
self.addEventListener('install', event => {
  // Fuerza a este SW a convertirse en el activo sin esperar a que cierres la app
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// 2. Activación: AQUÍ ESTÁ LA SOLUCIÓN
// Este bloque borra los cachés viejos (v1.0.2, v1.0.3, etc.) automáticamente
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. Respuesta
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});