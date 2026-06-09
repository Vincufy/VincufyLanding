import ReactPixel from "react-facebook-pixel";

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
  ReactPixel.init(pixelId, undefined, {
    autoConfig: true,
    debug: !import.meta.env.PROD,
  });
  ReactPixel.pageView();
  initialized = true;
}

export function pixelPageView() {
  if (!initialized) return;
  ReactPixel.pageView();
}

export function pixelTrack(event, params) {
  if (!initialized) return;
  ReactPixel.track(event, params);
}

export function pixelTrackCustom(event, params) {
  if (!initialized) return;
  ReactPixel.trackCustom(event, params);
}
