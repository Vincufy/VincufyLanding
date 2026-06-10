export function getDeviceType() {
  if (typeof navigator === "undefined") return "landing-desktop";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "landing-ios";
  if (ua.includes("android")) return "landing-android";
  return "landing-desktop";
}
