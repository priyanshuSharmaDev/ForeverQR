const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === "true";

export function trackEvent(name: "generator_opened" | "qr_generated" | "qr_downloaded" | "preset_selected") {
  if (!analyticsEnabled) return;
  window.dispatchEvent(new CustomEvent("forever-qr-analytics", { detail: { name } }));
}
