import posthog from "posthog-js";
import { getDeviceType } from "./deviceType";

const isEnabled = () =>
  import.meta.env.PROD || import.meta.env.VITE_POSTHOG_TEST === "true";

const log = (...args) => {
  if (!import.meta.env.PROD) {
    console.log("[posthog]", ...args);
  }
};

export function initPostHog() {
  if (!isEnabled()) {
    log("disabled by env");
    return;
  }
  if (posthog.__loaded) {
    log("already loaded");
    return;
  }

  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST;

  if (!key || !host) {
    console.warn("[posthog] missing VITE_POSTHOG_KEY or VITE_POSTHOG_HOST");
    return;
  }

  posthog.init(key, {
    api_host: host,
    defaults: "2026-01-30",
    persistence: "localStorage",
    person_profiles: "identified_only",
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: true,
    enable_heatmaps: false,
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true,
    },
    loaded: () => {
      log("loaded");
      registerSuperProps();
    },
  });
}

// Atribución del primer load, guardada aparte de las super properties para poder
// reenviarla al producto (otro dominio) cuando el usuario hace click en Comprar.
// No se puede releer de la URL en ese momento: si hubo navegación interna (quiz →
// oferta) el query string ya no está.
let capturedAttribution = {};

/** UTMs + fbclid capturados al cargar la landing. */
export function getAttribution() {
  return { ...capturedAttribution };
}

/** distinct_id de PostHog: es el puente de identidad hacia el producto. */
export function getDistinctId() {
  try {
    return posthog.get_distinct_id?.() || null;
  } catch {
    return null;
  }
}

function registerSuperProps() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
    (k) => {
      const v = params.get(k);
      if (v) utms[k] = v;
    }
  );
  const fbclid = params.get("fbclid");

  capturedAttribution = { ...utms, ...(fbclid && { fbclid }) };

  posthog.register({
    app: "landing",
    funnel_slug: import.meta.env.VITE_FUNNEL_DEFAULT_SLUG || "eventos",
    platform: getDeviceType(),
    environment: import.meta.env.PROD ? "prod" : "dev",
    ...utms,
    ...(fbclid && { fbclid }),
  });
}

export function analyticEvent(name, props) {
  if (!isEnabled()) return;
  // Se llama a posthog directo, sin cola propia. posthog-js ya bufferea internamente
  // lo que se le pide antes de terminar de inicializar, asi que la cola de acá solo
  // agregaba una carrera: si `loaded` disparaba antes de que React montara, el flush
  // encontraba la cola vacia y todo lo que se encolaba despues no se enviaba nunca.
  posthog.capture(name, props);
  log(`event: ${name}`, props);
}

export function analyticIdentify(distinctId, props) {
  if (!isEnabled()) return;
  posthog.identify(distinctId, props);
  log(`identify: ${distinctId}`, props);
}

export function analyticPageview(pathname) {
  analyticEvent("$pageview", { $current_url: pathname });
}

export function analyticRegister(props) {
  if (!isEnabled()) return;
  posthog.register(props);
  log("register", props);
}

export async function hashEmail(email) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(email.toLowerCase().trim())
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
