import { useState } from "react";
import type { QRConfig, WiFiConfig } from "../../types/qr";
import { ColorPicker } from "../common/ColorPicker";
import { FormField } from "../common/FormField";
import { Select } from "../common/Select";
import { Slider } from "../common/Slider";
import { Tabs } from "../common/Tabs";
import { QRContentControls } from "./QRContentControls";
import { QRExportControls } from "./QRExportControls";
import { QRFrameControls } from "./QRFrameControls";
import { QRLogoControls } from "./QRLogoControls";
import { QRPresets } from "./QRPresets";
import { QRStyleControls } from "./QRStyleControls";
import { Button } from "../common/Button";

export function QRControls({
  config,
  wifi,
  error,
  data,
  onConfig,
  onWifi,
  onReset
}: {
  config: QRConfig;
  wifi: WiFiConfig;
  error: string | null;
  data: string;
  onConfig: (patch: Partial<QRConfig>) => void;
  onWifi: (patch: Partial<WiFiConfig>) => void;
  onReset: () => void;
}) {
  const [tab, setTab] = useState("content");
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-soft">
      <Tabs
        active={tab}
        onChange={setTab}
        tabs={[
          { id: "content", label: "Content", panel: <QRContentControls config={config} wifi={wifi} error={error} onConfig={onConfig} onWifi={onWifi} /> },
          { id: "style", label: "Style", panel: <><QRPresets onApply={onConfig} /><div className="mt-5"><QRStyleControls config={config} onConfig={onConfig} /></div></> },
          {
            id: "colors",
            label: "Colors",
            panel: (
              <div className="grid gap-5">
                <ColorPicker label="Foreground color" value={config.foregroundColor} onChange={(v) => onConfig({ foregroundColor: v })} onReset={() => onConfig({ foregroundColor: "#101828" })} />
                <ColorPicker label="Background color" value={config.backgroundColor} onChange={(v) => onConfig({ backgroundColor: v })} onReset={() => onConfig({ backgroundColor: "#FFFFFF" })} />
                <label className="flex gap-2 text-sm"><input type="checkbox" checked={config.transparentBackground} onChange={(e) => onConfig({ transparentBackground: e.target.checked })} /> Transparent background</label>
                <label className="flex gap-2 text-sm"><input type="checkbox" checked={config.gradient.enabled} onChange={(e) => onConfig({ gradient: { ...config.gradient, enabled: e.target.checked } })} /> Enable gradient</label>
                {config.gradient.enabled ? (
                  <>
                    <FormField label="Gradient type"><Select value={config.gradient.type} onChange={(e) => onConfig({ gradient: { ...config.gradient, type: e.target.value as QRConfig["gradient"]["type"] } })}><option value="linear">Linear</option><option value="radial">Radial</option></Select></FormField>
                    <ColorPicker label="Gradient start" value={config.gradient.startColor} onChange={(v) => onConfig({ gradient: { ...config.gradient, startColor: v } })} onReset={() => onConfig({ gradient: { ...config.gradient, startColor: "#155EEF" } })} />
                    <ColorPicker label="Gradient end" value={config.gradient.endColor} onChange={(v) => onConfig({ gradient: { ...config.gradient, endColor: v } })} onReset={() => onConfig({ gradient: { ...config.gradient, endColor: "#7C3AED" } })} />
                    <label className="text-sm font-medium">Rotation <Slider min={0} max={360} value={config.gradient.rotation} onChange={(e) => onConfig({ gradient: { ...config.gradient, rotation: Number(e.target.value) } })} /></label>
                  </>
                ) : null}
              </div>
            )
          },
          { id: "logo", label: "Logo", panel: <QRLogoControls config={config} onConfig={onConfig} /> },
          { id: "frame", label: "Frame", panel: <QRFrameControls config={config} onConfig={onConfig} /> },
          {
            id: "export",
            label: "Export",
            panel: (
              <div className="grid gap-4">
                <FormField label="Export size"><Select value={config.width} onChange={(e) => onConfig({ width: Number(e.target.value), height: Number(e.target.value) })}>{[256, 512, 1024, 2048].map((size) => <option key={size} value={size}>{size} x {size}</option>)}</Select></FormField>
                <QRExportControls config={config} data={data} disabled={!data || Boolean(error)} />
                <Button type="button" variant="secondary" onClick={onReset}>Reset settings</Button>
              </div>
            )
          }
        ]}
      />
    </div>
  );
}
