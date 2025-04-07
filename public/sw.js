// Service worker disabled to resolve chunk loading issues
self.addEventListener('install', (event) => {
  // Skip waiting to ensure the new service worker takes control immediately
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  // Clear any old caches that might interfere with chunk loading
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      })
    ])
  );
});