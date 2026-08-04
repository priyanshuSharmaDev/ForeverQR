import type { QRConfig } from "../../types/qr";
import { ColorPicker } from "../common/ColorPicker";
import { FormField } from "../common/FormField";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Slider } from "../common/Slider";

export function QRFrameControls({ config, onConfig }: { config: QRConfig; onConfig: (patch: Partial<QRConfig>) => void }) {
  const frame = config.frame;
  const update = (patch: Partial<QRConfig["frame"]>) => onConfig({ frame: { ...frame, ...patch, enabled: patch.style ? patch.style !== "none" : frame.enabled } });
  return (
    <div className="grid gap-4">
      <FormField label="Frame style"><Select value={frame.style} onChange={(e) => update({ style: e.target.value as QRConfig["frame"]["style"] })}><option value="none">No frame</option><option value="simple">Simple border</option><option value="rounded-card">Rounded card</option><option value="top-label">Top label</option><option value="bottom-label">Bottom label</option></Select></FormField>
      <FormField label="Label"><Input value={frame.label} list="frame-labels" onChange={(e) => update({ label: e.target.value })} /><datalist id="frame-labels"><option value="Scan Me" /><option value="Open Form" /><option value="Register Now" /><option value="View Details" /><option value="Visit Website" /></datalist></FormField>
      <ColorPicker label="Label color" value={frame.labelColor} onChange={(v) => update({ labelColor: v })} onReset={() => update({ labelColor: "#101828" })} />
      <ColorPicker label="Frame color" value={frame.frameColor} onChange={(v) => update({ frameColor: v })} onReset={() => update({ frameColor: "#155EEF" })} />
      <label className="text-sm font-medium">Font size <Slider min={18} max={80} value={frame.fontSize} onChange={(e) => update({ fontSize: Number(e.target.value) })} /></label>
      <label className="text-sm font-medium">Border radius <Slider min={0} max={80} value={frame.borderRadius} onChange={(e) => update({ borderRadius: Number(e.target.value) })} /></label>
    </div>
  );
}
