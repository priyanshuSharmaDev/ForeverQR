import QRCodeStyling from "qr-code-styling";
import { RotateCcw, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { QRConfig } from "../../types/qr";
import { Button } from "../common/Button";
import { ContrastWarning } from "./ContrastWarning";

const previewSize = 320;

export function createQROptions(config: QRConfig, data: string) {
  return {
    width: config.width,
    height: config.height,
    data,
    margin: config.margin,
    qrOptions: { errorCorrectionLevel: config.logo.enabled ? "H" : config.errorCorrectionLevel },
    image: config.logo.enabled ? config.logo.dataUrl : undefined,
    imageOptions: {
      crossOrigin: "anonymous",
      margin: config.logo.margin,
      imageSize: config.logo.size,
      hideBackgroundDots: config.logo.hideBackgroundDots
    },
    dotsOptions: {
      type: config.dotStyle,
      color: config.foregroundColor,
      gradient: config.gradient.enabled
        ? { type: config.gradient.type, rotation: config.gradient.rotation, colorStops: [{ offset: 0, color: config.gradient.startColor }, { offset: 1, color: config.gradient.endColor }] }
        : undefined
    },
    cornersSquareOptions: { type: config.cornerSquareStyle, color: config.foregroundColor },
    cornersDotOptions: { type: config.cornerDotStyle, color: config.foregroundColor },
    backgroundOptions: { color: config.transparentBackground ? "transparent" : config.backgroundColor }
  } as const;
}

export function QRPreview({ config, data }: { config: QRConfig; data: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const qr = useRef<QRCodeStyling>();
  const [zoom, setZoom] = useState(1);
  const options = useMemo(() => createQROptions(config, data || "https://example.com"), [config, data]);
  const previewOptions = useMemo(
    () => ({
      ...options,
      width: previewSize,
      height: previewSize
    }),
    [options]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.innerHTML = "";
    qr.current = new QRCodeStyling(previewOptions);
    qr.current.append(element);
    return () => {
      element.innerHTML = "";
    };
  }, [previewOptions]);

  return (
    <section aria-label="QR preview" className="grid min-w-0 gap-4 rounded-lg border border-border bg-white p-4 shadow-soft lg:sticky lg:top-24">
      <div className={`grid min-w-0 place-items-center overflow-hidden rounded-lg p-4 ${config.transparentBackground ? "checkerboard" : "bg-surface-muted"}`}>
        <div className="aspect-square w-full max-w-80">
          <div ref={ref} aria-label="Generated QR code" className="qr-preview-output h-full w-full" style={{ transform: `scale(${zoom})`, transformOrigin: "center" }} />
        </div>
      </div>
      {config.frame.enabled ? (
        <div className="rounded-lg border p-3 text-center" style={{ borderColor: config.frame.frameColor, background: config.frame.backgroundColor, borderRadius: config.frame.borderRadius / 4 }}>
          {config.frame.style === "top-label" ? <p style={{ color: config.frame.labelColor, fontSize: 16 }}>{config.frame.label}</p> : null}
          <p className="text-xs text-text-muted">Frame will be included in framed PNG export.</p>
          {config.frame.style === "bottom-label" || config.frame.style === "rounded-card" || config.frame.style === "simple" ? <p style={{ color: config.frame.labelColor, fontSize: 16 }}>{config.frame.label}</p> : null}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="secondary" onClick={() => setZoom((z) => Math.min(1.4, z + 0.1))} icon={<Search className="h-4 w-4" />}>Zoom</Button>
        <Button type="button" variant="secondary" onClick={() => setZoom(1)} icon={<RotateCcw className="h-4 w-4" />}>Reset</Button>
      </div>
      <p className="truncate text-sm text-text-muted">{data || "Enter valid content to activate downloads."}</p>
      <ContrastWarning config={config} />
    </section>
  );
}
