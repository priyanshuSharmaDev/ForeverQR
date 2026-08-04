import type { ReactNode } from "react";

export function Tabs<T extends string>({
  tabs,
  active,
  onChange
}: {
  tabs: { id: T; label: string; panel: ReactNode }[];
  active: T;
  onChange: (tab: T) => void;
}) {
  return (
    <div>
      <div role="tablist" aria-label="QR settings" className="grid grid-cols-3 gap-2 rounded-lg bg-surface-muted p-1 md:grid-cols-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`min-h-10 rounded-md px-2 text-sm font-semibold ${active === tab.id ? "bg-white text-primary shadow-sm" : "text-text-secondary"}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div key={tab.id} role="tabpanel" hidden={active !== tab.id} className="pt-5">
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
