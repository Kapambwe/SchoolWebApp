// Replacement service worker: clears ALL caches left by the previous broken PWA
// service worker so stale/mixed DLL versions can no longer cause Blazor startup errors.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

// No caching — always fetch from network.
self.addEventListener('fetch', () => {});
