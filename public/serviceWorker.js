const CACHE_NAME = "version-1"
const urlsTocache = ["index.html", "offline.html"]

const self = this;


this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache');
                return cache.addAll(urlsTocache);
            }))
})
