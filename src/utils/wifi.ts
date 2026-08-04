import type { WiFiConfig } from "../types/qr";

function escapeWifi(value: string): string {
  return value.replace(/([\\;,":])/g, "\\$1");
}

export function encodeWifiQR({ ssid, password, security, hidden }: WiFiConfig): string {
  const type = security === "nopass" ? "nopass" : security;
  const passwordPart = security === "nopass" ? "" : `P:${escapeWifi(password)};`;
  return `WIFI:T:${type};S:${escapeWifi(ssid)};${passwordPart}H:${hidden ? "true" : "false"};;`;
}
