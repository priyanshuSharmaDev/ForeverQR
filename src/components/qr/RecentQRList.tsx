import type { QRConfig } from "../../types/qr";
import { Button } from "../common/Button";

export type RecentQR = { id: string; config: QRConfig; createdAt: string };

export function RecentQRList({ items, onRestore, onDelete, onClear }: { items: RecentQR[]; onRestore: (config: QRConfig) => void; onDelete: (id: string) => void; onClear: () => void }) {
  if (!items.length) return null;
  return (
    <section className="rounded-lg border border-border bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold">Recent QR codes</h2>
          <p className="text-sm text-text-muted">Recent QR codes are stored only in this browser.</p>
        </div>
        <Button type="button" variant="secondary" onClick={onClear}>Clear all</Button>
      </div>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-surface-muted p-3 text-sm">
            <span className="max-w-sm truncate">{item.config.value || item.config.contentType}</span>
            <span className="flex gap-2"><Button type="button" variant="secondary" onClick={() => onRestore(item.config)}>Restore</Button><Button type="button" variant="danger" onClick={() => onDelete(item.id)}>Delete</Button></span>
          </div>
        ))}
      </div>
    </section>
  );
}
