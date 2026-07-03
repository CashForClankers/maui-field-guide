const CACHE = "maui-field-guide-v6";
const scope = new URL("./", self.location.href);
const CORE = [
  "./",
  "./discover/",
  "./daily/",
  "./events/",
  "./creatures/",
  "./locals/",
  "./fruit/",
  "./rules/",
  "./manifest.webmanifest",
  "./icon.svg",
  "./creatures/honu.jpg",
  "./creatures/yellow-tang.jpg",
  "./creatures/reef-triggerfish.jpg",
  "./creatures/monk-seal.jpg",
  "./creatures/hawaiian-stilt.jpg",
].map((path) => new URL(path, scope).href);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (
          response.ok &&
          new URL(event.request.url).origin === self.location.origin
        ) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === "navigate")
            return caches.match(scope.href);
          return Response.error();
        }),
      ),
  );
});
