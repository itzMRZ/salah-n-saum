const CACHE_NAME = 'prayer-times-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/ramadan2025.json',
  '/january.json',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/bmimg.jpg', // Make sure this matches the actual file name
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
  '/font.otf'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});