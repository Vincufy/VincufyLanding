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

/**
 * Igual que pixelTrack pero pasa un `eventID` al pixel para deduplicación
 * con CAPI. Usar el MISMO eventID al disparar trackConversionViaCapi(),
 * así Meta cuenta como 1 evento aunque lleguen los dos.
 *
 * Implementado con window.fbq directo porque react-facebook-pixel.track
 * no expone la opción `{eventID}`.
 */
export function pixelTrackWithEventId(event, params, eventID) {
  if (!initialized) return;
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params, { eventID });
  } else {
    // Fallback: si fbq no está disponible (poco probable post-init),
    // usamos el track normal sin dedupe.
    ReactPixel.track(event, params);
  }
}

export function pixelTrackCustom(event, params) {
  if (!initialized) return;
  ReactPixel.trackCustom(event, params);
}
