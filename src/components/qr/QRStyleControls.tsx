import type { QRConfig } from "../../types/qr";
import { FormField } from "../common/FormField";
import { Select } from "../common/Select";
import { Slider } from "../common/Slider";

export function QRStyleControls({ config, onConfig }: { config: QRConfig; onConfig: (patch: Partial<QRConfig>) => void }) {
  return (
    <div className="grid gap-4">
      <FormField label="Dot style"><Select value={config.dotStyle} onChange={(e) => onConfig({ dotStyle: e.target.value as QRConfig["dotStyle"] })}>{["square", "dots", "rounded", "extra-rounded", "classy", "classy-rounded"].map((v) => <option key={v} value={v}>{v}</option>)}</Select></FormField>
      <FormField label="Corner square style"><Select value={config.cornerSquareStyle} onChange={(e) => onConfig({ cornerSquareStyle: e.target.value as QRConfig["cornerSquareStyle"] })}>{["square", "dot", "extra-rounded"].map((v) => <option key={v} value={v}>{v}</option>)}</Select></FormField>
      <FormField label="Corner dot style"><Select value={config.cornerDotStyle} onChange={(e) => onConfig({ cornerDotStyle: e.target.value as QRConfig["cornerDotStyle"] })}>{["square", "dot"].map((v) => <option key={v} value={v}>{v}</option>)}</Select></FormField>
      <FormField label={`Margin: ${config.margin}px`}><Slider min={0} max={40} value={config.margin} onChange={(e) => onConfig({ margin: Number(e.target.value) })} /></FormField>
      <FormField label="Error correction"><Select value={config.logo.enabled ? "H" : config.errorCorrectionLevel} disabled={config.logo.enabled} onChange={(e) => onConfig({ errorCorrectionLevel: e.target.value as QRConfig["errorCorrectionLevel"] })}>{["L", "M", "Q", "H"].map((v) => <option key={v} value={v}>{v}</option>)}</Select></FormField>
    </div>
  );
}
