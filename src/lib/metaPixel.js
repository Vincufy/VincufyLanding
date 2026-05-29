let initialized = false;

export function initMetaPixel() {
  if (initialized) return;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (!pixelId) {
    if (!import.meta.env.PROD) {
      console.log("[meta-pixel] no VITE_META_PIXEL_ID, skipping");
    }
    return;
  }

  // Standard Meta Pixel snippet
  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  /* eslint-enable */

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
  initialized = true;
}

export function pixelTrack(event, params) {
  if (typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}
