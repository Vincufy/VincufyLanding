/**
 * Cliente Meta CAPI server-side.
 *
 * Cuando el pixel client-side (`metaPixel.js`) se bloquea por adblocker,
 * Meta no recibe el evento. Para no perder esos signals para el algoritmo,
 * acá disparamos el MISMO evento a un endpoint del SuperAdmin backend que
 * lo reenvía via Conversions API.
 *
 * Importante:
 * - Generamos un `event_id` único y lo pasamos a AMBOS (pixel + CAPI).
 *   Meta deduplica usando ese ID. Si ambos llegan, cuenta como 1.
 * - Fail silently: si el CAPI falla, no rompemos el flow del usuario
 *   (es analytics, no transactional).
 * - Fire-and-forget con timeout corto para no bloquear navegación.
 */

const CAPI_TIMEOUT_MS = 4000;

/** Devuelve un event_id único y compartible con el pixel. */
export function makeEventId(prefix = "vincufy") {
  const ts = Date.now();
  const rand = Math.random().toString(36).slice(2, 10);
  return `${prefix}-${ts}-${rand}`;
}

/** Lee el cookie `_fbp` (Facebook browser ID) si existe. */
export function readFbp() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)_fbp=([^;]+)/);
  return match ? match[1] : null;
}

/** Lee el `fbclid` del URL actual (o vacío). */
export function readFbclid() {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get("fbclid") || null;
}

/**
 * Envía un evento de conversion al backend del SuperAdmin para que lo
 * reenvíe a Meta CAPI. Fire-and-forget; resuelve con `{sent: boolean}`.
 *
 * @param {{
 *   event_name: "InitiateCheckout" | "Lead" | string,
 *   event_id: string,
 *   email?: string,
 *   phone?: string,
 *   currency?: string,
 *   value?: number,
 *   content_category?: string,
 *   tier?: string,
 *   campaign_slug: string,
 * }} params
 */
export async function trackConversionViaCapi(params) {
  const apiUrl = import.meta.env.VITE_SUPERADMIN_API_URL;
  if (!apiUrl) {
    if (!import.meta.env.PROD) {
      console.log("[meta-capi] no VITE_SUPERADMIN_API_URL, skipping");
    }
    return { sent: false, reason: "no_api_url" };
  }

  const fbclid = readFbclid();
  const fbp = readFbp();
  const body = {
    event_name: params.event_name,
    event_id: params.event_id,
    email: params.email || null,
    phone: params.phone || null,
    fbclid,
    // Usamos el momento actual como aproximación del click — Meta solo
    // pide que el fbc tenga un timestamp razonablemente cercano al click.
    fbclid_timestamp_ms: fbclid ? Date.now() : null,
    fbp,
    currency: params.currency || "USD",
    value: params.value ?? null,
    content_category: params.content_category || null,
    tier: params.tier || null,
    campaign_slug: params.campaign_slug,
    event_source_url:
      typeof window !== "undefined" ? window.location.href : "",
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), CAPI_TIMEOUT_MS);
    const response = await fetch(`${apiUrl}/api/campaigns/track-meta-conversion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true, // crítico para que el request sobreviva navegación
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!response.ok) {
      if (!import.meta.env.PROD) {
        console.warn("[meta-capi] non-200:", response.status);
      }
      return { sent: false, reason: `http_${response.status}` };
    }
    const data = await response.json().catch(() => ({}));
    if (!import.meta.env.PROD) {
      console.log("[meta-capi] OK", data);
    }
    return { sent: true, ...data };
  } catch (err) {
    if (!import.meta.env.PROD) {
      console.warn("[meta-capi] error:", err);
    }
    return { sent: false, reason: "network_error" };
  }
}
