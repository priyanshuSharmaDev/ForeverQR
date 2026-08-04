import { useMemo, useState } from "react";
import { defaultQRConfig } from "../constants/defaultQRConfig";
import type { QRConfig, WiFiConfig } from "../types/qr";
import { validateUrl } from "../utils/urlValidation";
import { encodeWifiQR } from "../utils/wifi";

export function getQRContent(config: QRConfig, wifi?: WiFiConfig): { value: string; error: string | null } {
  if (config.contentType === "text") {
    return config.value.trim() ? { value: config.value, error: null } : { value: "", error: "Enter text to encode." };
  }
  if (config.contentType === "wifi") {
    if (!wifi?.ssid.trim()) return { value: "", error: "Enter a network name." };
    return { value: encodeWifiQR(wifi), error: null };
  }
  const result = validateUrl(config.value);
  return result.valid ? { value: result.url, error: null } : { value: "", error: result.error };
}

export function useQRGenerator(initial?: Partial<QRConfig>) {
  const [config, setConfig] = useState<QRConfig>({ ...defaultQRConfig, ...initial });
  const [wifi, setWifi] = useState<WiFiConfig>({ ssid: "", password: "", security: "WPA", hidden: false });
  const content = useMemo(() => getQRContent(config, wifi), [config, wifi]);

  const updateConfig = (patch: Partial<QRConfig>) => {
    setConfig((current) => ({ ...current, ...patch }));
  };

  return { config, setConfig, updateConfig, wifi, setWifi, content };
}
