// Service worker : permet d'ouvrir l'appli sans connexion.
// Pense à changer le numéro de version après chaque mise à jour du site.
const CACHE = "carnet-muscu-v3";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./exos/ab_wheel.jpg",
  "./exos/arm_circles.jpg",
  "./exos/bench.jpg",
  "./exos/bike_int.jpg",
  "./exos/bulgarian.jpg",
  "./exos/bw_squat.jpg",
  "./exos/cable_crunch.jpg",
  "./exos/cable_fly.jpg",
  "./exos/cable_row.jpg",
  "./exos/calf_seated.jpg",
  "./exos/calf_stand.jpg",
  "./exos/cat_cow.jpg",
  "./exos/chair_dips.jpg",
  "./exos/chest_press.jpg",
  "./exos/child.jpg",
  "./exos/crunch.jpg",
  "./exos/db_bench.jpg",
  "./exos/db_curl.jpg",
  "./exos/db_press.jpg",
  "./exos/db_row.jpg",
  "./exos/dead_bug.jpg",
  "./exos/deadlift.jpg",
  "./exos/dips.jpg",
  "./exos/ez_curl.jpg",
  "./exos/face_pull.jpg",
  "./exos/foam.jpg",
  "./exos/glute_bridge_sl.jpg",
  "./exos/hammer.jpg",
  "./exos/hamstring.jpg",
  "./exos/hanging_raise.jpg",
  "./exos/hip_flexor.jpg",
  "./exos/hip_thrust.jpg",
  "./exos/incline_db.jpg",
  "./exos/inv_row.jpg",
  "./exos/jump_squat.jpg",
  "./exos/lat_pd.jpg",
  "./exos/lat_raise.jpg",
  "./exos/leg_curl.jpg",
  "./exos/leg_ext.jpg",
  "./exos/leg_press.jpg",
  "./exos/lunges.jpg",
  "./exos/machine_crunch.jpg",
  "./exos/machine_press.jpg",
  "./exos/machine_row.jpg",
  "./exos/mountain.jpg",
  "./exos/ohp.jpg",
  "./exos/pallof.jpg",
  "./exos/pec_deck.jpg",
  "./exos/plank.jpg",
  "./exos/pullup.jpg",
  "./exos/pushdown.jpg",
  "./exos/pushup.jpg",
  "./exos/rdl.jpg",
  "./exos/rear_delt.jpg",
  "./exos/row.jpg",
  "./exos/side_plank.jpg",
  "./exos/skull.jpg",
  "./exos/squat.jpg",
  "./exos/steady.jpg",
  "./exos/walking_lunge.jpg"
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
  const req = e.request;
  if (req.method !== "GET") return;
  // Page : réseau d'abord (pour recevoir les mises à jour), cache si hors ligne
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((res) => {
      const copy = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copy));
      return res;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  // Icônes, polices : cache d'abord
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
