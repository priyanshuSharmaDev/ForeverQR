import { Clipboard, ExternalLink, X } from "lucide-react";
import type { QRConfig, WiFiConfig } from "../../types/qr";
import { validateUrl } from "../../utils/urlValidation";
import { Button } from "../common/Button";
import { FormField } from "../common/FormField";
import { Input } from "../common/Input";
import { Select } from "../common/Select";

export function QRContentControls({
  config,
  wifi,
  error,
  onConfig,
  onWifi
}: {
  config: QRConfig;
  wifi: WiFiConfig;
  error: string | null;
  onConfig: (patch: Partial<QRConfig>) => void;
  onWifi: (patch: Partial<WiFiConfig>) => void;
}) {
  const isUrl = config.contentType === "url" || config.contentType === "google-form";
  const validUrl = isUrl ? validateUrl(config.value) : null;
  return (
    <div className="grid gap-4">
      <FormField label="Content type">
        <Select value={config.contentType} onChange={(e) => onConfig({ contentType: e.target.value as QRConfig["contentType"], value: "" })}>
          <option value="url">URL</option>
          <option value="google-form">Google Form</option>
          <option value="text">Plain text</option>
          <option value="wifi">Wi-Fi</option>
        </Select>
      </FormField>
      {config.contentType === "wifi" ? (
        <>
          <FormField label="Network name" error={error}><Input value={wifi.ssid} onChange={(e) => onWifi({ ssid: e.target.value })} /></FormField>
          <FormField label="Security"><Select value={wifi.security} onChange={(e) => onWifi({ security: e.target.value as WiFiConfig["security"] })}><option value="WPA">WPA/WPA2</option><option value="WEP">WEP</option><option value="nopass">No password</option></Select></FormField>
          {wifi.security !== "nopass" ? <FormField label="Password"><Input type="password" value={wifi.password} onChange={(e) => onWifi({ password: e.target.value })} /></FormField> : null}
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={wifi.hidden} onChange={(e) => onWifi({ hidden: e.target.checked })} /> Hidden network</label>
        </>
      ) : (
        <FormField label={isUrl ? "Destination URL" : "Text"} error={error} hint={isUrl ? "Google Forms and any HTTP or HTTPS URL are supported. The URL is never fetched." : undefined}>
          <div className="grid gap-2">
            <textarea
              className="min-h-28 w-full rounded-lg border border-border p-3 text-sm"
              value={config.value}
              placeholder={isUrl ? "https://docs.google.com/forms/..." : "Text to encode"}
              onChange={(e) => onConfig({ value: e.target.value })}
            />
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="secondary" icon={<Clipboard className="h-4 w-4" />} onClick={async () => onConfig({ value: await navigator.clipboard.readText() })}>Paste</Button>
              <Button type="button" variant="secondary" icon={<X className="h-4 w-4" />} onClick={() => onConfig({ value: "" })}>Clear</Button>
              {isUrl && validUrl?.valid ? (
                <a className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold" href={validUrl.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Test URL
                </a>
              ) : null}
            </div>
          </div>
        </FormField>
      )}
    </div>
  );
}
