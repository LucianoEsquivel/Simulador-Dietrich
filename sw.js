const CACHE_NAME = 'dietrich-cache-V17.4.26.10.49'; // Cambia el número de versión cada vez que quieras actualizar el cache
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './img/amarok.jpeg',
  './img/raptor.jpeg',
  './img/dolphin.jpeg',
  './img/k3.jpeg',
  './img/q1.jpeg',
  './img/banco.jpeg',
  './img/todos.jpeg',
  './img/audi.png',
  './img/byd.png',
  './img/dietrich.png',
  './img/ford.png',
  './img/galicia.png',
  './img/icbc.png',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/kia.png',
  './img/santander.png',
  './img/volkswagen.png',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];
//recordatorio: agregar arriba los archivos para cachear, por ejemplo: './images/logo.png', './fonts/Roboto-Regular.ttf', etc.
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
            console.log('Borrando caché antiguo:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // <---LÍNEA CLAVE
  );
});

// 3. Respuesta
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});