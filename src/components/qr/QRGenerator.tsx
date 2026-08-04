import { useEffect } from "react";
import { AdSlot } from "../ads/AdSlot";
import { defaultQRConfig } from "../../constants/defaultQRConfig";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useQRGenerator } from "../../hooks/useQRGenerator";
import { useToast } from "../../hooks/useToast";
import type { QRConfig, QRContentType } from "../../types/qr";
import { trackEvent } from "../../utils/analytics";
import { QRControls } from "./QRControls";
import { QRPreview } from "./QRPreview";
import { RecentQRList, type RecentQR } from "./RecentQRList";

export function QRGenerator({ contentType = "url" }: { contentType?: QRContentType }) {
  const { config, setConfig, updateConfig, wifi, setWifi, content } = useQRGenerator({ contentType });
  const [recent, setRecent] = useLocalStorage<RecentQR[]>("forever-qr-recent", []);
  const { showToast } = useToast();

  useEffect(() => trackEvent("generator_opened"), []);

  useEffect(() => {
    if (!content.value) return;
    const cleanConfig: QRConfig = { ...config, logo: { ...config.logo, dataUrl: undefined } };
    const timer = window.setTimeout(() => {
      setRecent((current) => [{ id: crypto.randomUUID(), config: cleanConfig, createdAt: new Date().toISOString() }, ...current].slice(0, 5));
    }, 900);
    return () => window.clearTimeout(timer);
  }, [config, content.value, setRecent]);

  return (
    <section id="generator" className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)]">
      <div className="grid min-w-0 gap-6">
        <AdSlot placement="Above QR generator on mobile" minHeight={90} className="lg:hidden" />
        <QRControls
          config={config}
          wifi={wifi}
          error={content.error}
          data={content.value}
          onConfig={updateConfig}
          onWifi={(patch) => setWifi((current) => ({ ...current, ...patch }))}
          onReset={() => {
            setConfig({ ...defaultQRConfig, contentType });
            showToast("Settings reset.");
          }}
        />
        <RecentQRList
          items={recent}
          onRestore={(item) => {
            setConfig(item);
            showToast("Recent configuration restored.");
          }}
          onDelete={(id) => setRecent(recent.filter((item) => item.id !== id))}
          onClear={() => setRecent([])}
        />
      </div>
      <div className="min-w-0">
        <QRPreview config={config} data={content.value} />
        <AdSlot placement="Right sidebar" minHeight={250} className="hidden xl:block" />
      </div>
    </section>
  );
}
