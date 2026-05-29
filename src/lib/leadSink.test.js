import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("submitLead", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("returns ok=true when no backend URL is configured", async () => {
    vi.stubEnv("VITE_LEAD_BACKEND_URL", "");
    const { submitLead } = await import("./leadSink");
    const result = await submitLead({
      email: "user@example.com",
      segment: "boliches",
      tier: "pro",
    });
    expect(result.ok).toBe(true);
    expect(result.delivered).toBe(false);
  });

  it("POSTs to backend URL when configured", async () => {
    vi.stubEnv("VITE_LEAD_BACKEND_URL", "https://api.example.com/leads");
    const fetchMock = vi.fn(() =>
      Promise.resolve({ ok: true, status: 200 })
    );
    vi.stubGlobal("fetch", fetchMock);

    const { submitLead } = await import("./leadSink");
    const result = await submitLead({
      email: "user@example.com",
      segment: "boliches",
      tier: "pro",
    });

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, opts] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.example.com/leads");
    expect(opts.method).toBe("POST");
    const body = JSON.parse(opts.body);
    expect(body.email).toBe("user@example.com");
    expect(body.segment).toBe("boliches");
    expect(body.tier).toBe("pro");
    expect(body.client_event_id).toMatch(/^[0-9a-f-]{36}$/);
    expect(result.ok).toBe(true);
    expect(result.delivered).toBe(true);
  });

  it("queues to localStorage when fetch fails", async () => {
    vi.stubEnv("VITE_LEAD_BACKEND_URL", "https://api.example.com/leads");
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("network down")))
    );

    const { submitLead } = await import("./leadSink");
    const result = await submitLead({
      email: "user@example.com",
      segment: "boliches",
      tier: "pro",
    });

    expect(result.ok).toBe(true);
    expect(result.delivered).toBe(false);
    expect(result.queued).toBe(true);

    const queue = JSON.parse(localStorage.getItem("vincufy_lead_queue") || "[]");
    expect(queue).toHaveLength(1);
    expect(queue[0].email).toBe("user@example.com");
  });
});
