const CACHE_NAME = 'prayer-times-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/data/bangladesh.json',
  '/data/bangladesh_locations.json',
  '/data/malaysia.json',
  '/data/canada.json',
  '/data/ramadan_curr.json',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/assets/bgimg.jpg',
  '/assets/font.otf',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
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