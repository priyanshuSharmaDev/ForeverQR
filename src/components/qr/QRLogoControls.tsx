import type { QRConfig } from "../../types/qr";
import { Slider } from "../common/Slider";
import { LogoUploader } from "./LogoUploader";

export function QRLogoControls({ config, onConfig }: { config: QRConfig; onConfig: (patch: Partial<QRConfig>) => void }) {
  return (
    <div className="grid gap-4">
      <LogoUploader
        onLogo={(dataUrl, fileName) => onConfig({ logo: { ...config.logo, enabled: true, dataUrl, fileName }, errorCorrectionLevel: "H" })}
        onRemove={() => onConfig({ logo: { ...config.logo, enabled: false, dataUrl: undefined, fileName: undefined } })}
      />
      {config.logo.enabled ? <img src={config.logo.dataUrl} alt="Uploaded logo preview" className="h-16 w-16 rounded-lg border border-border object-contain" /> : null}
      <label className="text-sm font-medium">Logo size <Slider min={0.1} max={0.32} step={0.01} value={config.logo.size} onChange={(e) => onConfig({ logo: { ...config.logo, size: Number(e.target.value) } })} /></label>
      <label className="text-sm font-medium">Logo margin <Slider min={0} max={20} value={config.logo.margin} onChange={(e) => onConfig({ logo: { ...config.logo, margin: Number(e.target.value) } })} /></label>
      <label className="flex gap-2 text-sm"><input type="checkbox" checked={config.logo.hideBackgroundDots} onChange={(e) => onConfig({ logo: { ...config.logo, hideBackgroundDots: e.target.checked } })} /> Hide QR dots behind logo</label>
    </div>
  );
}
