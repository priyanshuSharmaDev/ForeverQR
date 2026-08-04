import { Copy } from "lucide-react";
import { Button } from "./Button";
import { copyText } from "../../utils/download";
import { useToast } from "../../hooks/useToast";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const { showToast } = useToast();
  return (
    <Button
      type="button"
      variant="secondary"
      icon={<Copy className="h-4 w-4" />}
      onClick={async () => showToast((await copyText(text)) ? "Copied to clipboard." : "Clipboard copy is not supported here.")}
    >
      {label}
    </Button>
  );
}
