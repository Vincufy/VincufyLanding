const QUEUE_KEY = "vincufy_lead_queue";

function generateClientEventId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function queueLead(payload) {
  try {
    const existing = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
    existing.push({ ...payload, queued_at: new Date().toISOString() });
    localStorage.setItem(QUEUE_KEY, JSON.stringify(existing));
    return true;
  } catch {
    return false;
  }
}

function readUTMs() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
    (k) => {
      const v = params.get(k);
      if (v) utms[k] = v;
    }
  );
  return utms;
}

function readCookie(name) {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : null;
}

export async function submitLead(input) {
  const payload = {
    email: input.email,
    segment: input.segment,
    tier: input.tier,
    tier_price_ars: input.tier_price_ars,
    event_text: input.event_text || null,
    funnel_slug: input.funnel_slug || "eventos",
    utm: readUTMs(),
    fbclid: new URLSearchParams(window.location.search).get("fbclid"),
    fbc: readCookie("_fbc"),
    fbp: readCookie("_fbp"),
    user_agent: navigator.userAgent,
    client_event_id: generateClientEventId(),
    submitted_at: new Date().toISOString(),
  };

  if (!import.meta.env.PROD) {
    console.log("[leadSink] payload", payload);
  }

  const backendUrl = import.meta.env.VITE_LEAD_BACKEND_URL;
  if (!backendUrl) {
    return { ok: true, delivered: false, reason: "no_backend_configured" };
  }

  try {
    const res = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`backend returned ${res.status}`);
    return { ok: true, delivered: true };
  } catch (err) {
    const queued = queueLead(payload);
    if (!import.meta.env.PROD) {
      console.warn("[leadSink] backend failed, queued", err);
    }
    return { ok: true, delivered: false, queued, error: String(err) };
  }
}
