import { RotateCcw } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";

export function ColorPicker({
  label,
  value,
  onChange,
  onReset,
  swatches = ["#101828", "#155EEF", "#7C3AED", "#039855", "#D92D20", "#FFFFFF"]
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
  swatches?: string[];
}) {
  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex gap-2">
        <input aria-label={`${label} picker`} type="color" value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-12 rounded border border-border" />
        <Input aria-label={`${label} hex`} value={value} onChange={(event) => onChange(event.target.value)} pattern="^#[0-9A-Fa-f]{6}$" />
        <Button type="button" variant="secondary" aria-label={`Reset ${label}`} icon={<RotateCcw className="h-4 w-4" />} onClick={onReset} />
      </div>
      <div className="flex flex-wrap gap-2">
        {swatches.map((swatch) => (
          <button
            key={swatch}
            type="button"
            aria-label={`Use ${swatch}`}
            className="h-7 w-7 rounded-full border border-border"
            style={{ background: swatch }}
            onClick={() => onChange(swatch)}
          />
        ))}
      </div>
    </div>
  );
}
