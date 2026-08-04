import { Sparkles } from "lucide-react";
import { qrPresets } from "../../constants/qrPresets";
import type { QRConfig } from "../../types/qr";
import { Button } from "../common/Button";
import { useToast } from "../../hooks/useToast";

export function QRPresets({ onApply }: { onApply: (patch: Partial<QRConfig>) => void }) {
  const { showToast } = useToast();
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {qrPresets.map((preset) => (
        <Button
          key={preset.name}
          type="button"
          variant="secondary"
          icon={<Sparkles className="h-4 w-4" />}
          onClick={() => {
            onApply(preset.patch);
            showToast(`${preset.name} preset applied.`);
          }}
        >
          {preset.name}
        </Button>
      ))}
    </div>
  );
}
