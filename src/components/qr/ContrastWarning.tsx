import { AlertTriangle } from "lucide-react";
import type { QRConfig } from "../../types/qr";
import { getContrastWarning } from "../../utils/colorContrast";

export function getScanWarnings(config: QRConfig): string[] {
  const warnings: string[] = [];
  if (!config.transparentBackground) {
    const contrast = getContrastWarning(config.foregroundColor, config.backgroundColor);
    if (contrast) warnings.push(contrast);
  }
  if (config.logo.enabled && config.logo.size > 0.25) warnings.push("Large logos can hide important QR modules.");
  if (config.margin < 8) warnings.push("Small margins may make printed QR codes harder to scan.");
  if (["dots", "classy"].includes(config.dotStyle)) warnings.push("Decorative dot styles should be scan-tested before printing.");
  return warnings;
}

export function ContrastWarning({ config }: { config: QRConfig }) {
  const warnings = getScanWarnings(config);
  if (!warnings.length) return <p className="text-sm font-semibold text-success">Scan quality looks good. Test before printing.</p>;
  return (
    <div className="grid gap-2 rounded-lg border border-warning/30 bg-orange-50 p-3 text-sm text-text-secondary">
      {warnings.map((warning) => (
        <p key={warning} className="flex gap-2"><AlertTriangle className="h-4 w-4 shrink-0 text-warning" />{warning}</p>
      ))}
    </div>
  );
}
