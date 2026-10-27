// Service worker : ouverture sans connexion et notifications.
// Change le numéro de version après chaque mise à jour du site.
const CACHE = "carnet-muscu-v9";
const SHELL = [
  "./",
  "./index.html",
  "./coach.webp",
  "./coach-f.webp",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-64.png",
  "./fonts/fonts.css",
  "./fonts/inter-latin-400-normal.woff2",
  "./fonts/inter-latin-500-normal.woff2",
  "./fonts/inter-latin-600-normal.woff2",
  "./fonts/inter-latin-700-normal.woff2",
  "./fonts/poppins-latin-500-normal.woff2",
  "./fonts/poppins-latin-600-normal.woff2",
  "./fonts/poppins-latin-700-normal.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  // La carte et la recherche de salles passent toujours par le réseau
  if (url.origin !== self.location.origin) return;
  // Page : réseau d'abord (pour recevoir les mises à jour), copie locale si hors ligne
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((res) => {
      const copy = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copy));
      return res;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  // Images, polices, librairie de carte : copie locale d'abord, gardée après le premier affichage
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});

// Notifications envoyées par le serveur (phrase de motivation du jour)
self.addEventListener("push", (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch { data = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(data.title || "Hustle", {
    body: data.body || "C'est l'heure de ta séance !", icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: "cm-daily"
  }));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
    for (const c of list) if ("focus" in c) return c.focus();
    return self.clients.openWindow("./");
  }));
});
