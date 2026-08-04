import QRCodeStyling from "qr-code-styling";
import { Clipboard, Download } from "lucide-react";
import { toPng } from "html-to-image";
import type { ExportFormat, QRConfig } from "../../types/qr";
import { buildFilename } from "../../utils/filename";
import { createQROptions } from "./QRPreview";
import { Button } from "../common/Button";
import { CopyButton } from "../common/CopyButton";
import { useToast } from "../../hooks/useToast";

export function QRExportControls({ config, data, disabled }: { config: QRConfig; data: string; disabled: boolean }) {
  const { showToast } = useToast();
  const download = async (format: ExportFormat) => {
    try {
      const qr = new QRCodeStyling(createQROptions(config, data));
      await qr.download({ name: buildFilename(config.contentType, format).replace(`.${format}`, ""), extension: format });
      showToast(`${format.toUpperCase()} downloaded.`);
    } catch {
      showToast("Download failed. Try another format.");
    }
  };
  const copyImage = async () => {
    if (!navigator.clipboard || !("ClipboardItem" in window)) {
      showToast("Image clipboard is not supported in this browser.");
      return;
    }
    showToast("Use PNG download if image copy is unavailable.");
  };
  const downloadFramed = async () => {
    try {
      const node = document.createElement("div");
      node.style.position = "fixed";
      node.style.left = "-10000px";
      node.style.top = "0";
      node.style.width = `${config.width + 160}px`;
      node.style.padding = "80px";
      node.style.textAlign = "center";
      node.style.background = config.frame.backgroundColor;
      node.style.border = `8px solid ${config.frame.frameColor}`;
      node.style.borderRadius = `${config.frame.borderRadius}px`;
      const label = document.createElement("div");
      label.textContent = config.frame.label;
      label.style.color = config.frame.labelColor;
      label.style.font = `700 ${config.frame.fontSize}px system-ui, sans-serif`;
      label.style.margin = "0 0 36px";
      const qrWrap = document.createElement("div");
      qrWrap.style.display = "inline-block";
      if (config.frame.style === "top-label" || config.frame.style === "rounded-card" || config.frame.style === "simple") node.append(label);
      node.append(qrWrap);
      if (config.frame.style === "bottom-label") {
        label.style.margin = "36px 0 0";
        node.append(label);
      }
      document.body.append(node);
      new QRCodeStyling(createQROptions(config, data)).append(qrWrap);
      const url = await toPng(node, { pixelRatio: 1, cacheBust: true });
      const link = document.createElement("a");
      link.href = url;
      link.download = buildFilename(config.contentType, "png").replace(".png", "-framed.png");
      link.click();
      node.remove();
      showToast("Framed PNG downloaded.");
    } catch {
      showToast("Framed export failed. Try raw PNG or SVG.");
    }
  };
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(["png", "svg", "jpeg", "webp"] as ExportFormat[]).map((format) => (
          <Button key={format} type="button" disabled={disabled} icon={<Download className="h-4 w-4" />} onClick={() => download(format)}>
            {format.toUpperCase()}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="secondary" disabled={disabled || !config.frame.enabled} icon={<Download className="h-4 w-4" />} onClick={downloadFramed}>Framed PNG</Button>
        <Button type="button" variant="secondary" disabled={disabled} icon={<Clipboard className="h-4 w-4" />} onClick={copyImage}>Copy image</Button>
        <CopyButton text={data} label="Copy destination" />
      </div>
      <p className="text-sm text-text-muted">Downloaded static QR codes do not depend on Forever QR. They remain usable as long as the encoded destination remains active.</p>
    </div>
  );
}
