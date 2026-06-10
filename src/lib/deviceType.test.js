import { describe, it, expect, afterEach } from "vitest";
import { getDeviceType } from "./deviceType";

const setUserAgent = (ua) => {
  Object.defineProperty(navigator, "userAgent", {
    value: ua,
    configurable: true,
  });
};

describe("getDeviceType", () => {
  afterEach(() => {
    setUserAgent("desktop-default");
  });

  it("returns 'landing-ios' for iPhone user agent", () => {
    setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)");
    expect(getDeviceType()).toBe("landing-ios");
  });

  it("returns 'landing-ios' for iPad user agent", () => {
    setUserAgent("Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)");
    expect(getDeviceType()).toBe("landing-ios");
  });

  it("returns 'landing-android' for Android user agent", () => {
    setUserAgent("Mozilla/5.0 (Linux; Android 14; Pixel 8)");
    expect(getDeviceType()).toBe("landing-android");
  });

  it("returns 'landing-desktop' for desktop user agent", () => {
    setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36"
    );
    expect(getDeviceType()).toBe("landing-desktop");
  });
});
