const CACHE_NAME = 'dietrich-unificado-V26.04.2026.22.30'; // Nueva versión unificada

const assets = [
  // --- ARCHIVOS SIMULADOR (RAÍZ) ---
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
  './img/bancos.jpeg',
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
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',

  // --- ARCHIVOS COMPETITIVO (SUB-CARPETA) ---
  './competitivo/index.html',
  './competitivo/style.css',
  './competitivo/app.js',
  './competitivo/base.js',
  './competitivo/logos/dietrich.png',
  './competitivo/logos/santander.png',
  './competitivo/logos/icbc.png',
  './competitivo/logos/galicia.png',
  './competitivo/logos/volkswagen.png',
  './competitivo/logos/ford.png',
  './competitivo/logos/audi.png',
  './competitivo/logos/kia.png',
  './competitivo/logos/byd.png',
  './competitivo/fondos/audi.jpg',
  './competitivo/fondos/ford.jpg',
  './competitivo/fondos/kia.jpg',
  './competitivo/fondos/volkswagen.jpg',
  './competitivo/fondos/byd.jpg'
];

// 1. Instalación: Guarda todo (Simulador + Competitivo)
self.addEventListener('install', event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// 2. Activación: Borra cachés viejos de ambas apps
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim(); 
});

// 3. Estrategia: NETWORK FIRST (Prioriza internet para ver cambios del CEO)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => caches.match(event.request)) // Si no hay internet, usa el caché
  );
});