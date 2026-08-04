import { AdDisclosure } from "./AdDisclosure";
import { twMerge } from "tailwind-merge";

export function AdSlot({
  placement,
  format = "auto",
  minHeight = 120,
  responsive = true,
  testMode = true,
  className
}: {
  placement: string;
  format?: string;
  minHeight?: number;
  responsive?: boolean;
  testMode?: boolean;
  className?: string;
}) {
  const enabled = import.meta.env.VITE_ADSENSE_ENABLED === "true";
  return (
    <aside
      aria-label={`${placement} advertisement`}
      className={twMerge("my-8 rounded-lg border border-dashed border-border bg-white p-4 text-center", className)}
      style={{ minHeight }}
      data-ad-format={format}
      data-responsive={responsive}
    >
      <AdDisclosure />
      {enabled && !testMode ? (
        <div data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID}>AdSense code loads here after consent.</div>
      ) : (
        <div className="flex min-h-20 items-center justify-center text-sm text-text-muted">Reserved ad space</div>
      )}
    </aside>
  );
}
