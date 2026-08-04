import { Image, Trash2 } from "lucide-react";
import { validateLogoFile } from "../../utils/logoValidation";
import { Button } from "../common/Button";
import { useToast } from "../../hooks/useToast";

export function LogoUploader({ onLogo, onRemove }: { onLogo: (dataUrl: string, fileName: string) => void; onRemove: () => void }) {
  const { showToast } = useToast();
  return (
    <div className="grid gap-3">
      <label className="grid gap-2 text-sm font-medium">
        Logo image
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="block w-full rounded-lg border border-border bg-white p-3 text-sm"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const error = validateLogoFile(file);
            if (error) {
              showToast(error);
              return;
            }
            const reader = new FileReader();
            reader.onload = () => onLogo(String(reader.result), file.name);
            reader.readAsDataURL(file);
          }}
        />
      </label>
      <div className="flex gap-2">
        <Button type="button" variant="secondary" icon={<Image className="h-4 w-4" />} onClick={() => showToast("Logo files never leave this browser.")}>Privacy</Button>
        <Button type="button" variant="danger" icon={<Trash2 className="h-4 w-4" />} onClick={onRemove}>Remove logo</Button>
      </div>
    </div>
  );
}
