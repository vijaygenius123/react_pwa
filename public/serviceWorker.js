const CACHE_NAME = "version-1"
const urlsTocache = ["index.html", "offline.html"]

const self = this;


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache');
                return cache.addAll(urlsTocache);
            }))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => { caches.match('offline.html') })
            })
    )
})