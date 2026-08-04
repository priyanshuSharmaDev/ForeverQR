import type { ReactNode } from "react";

export function FormField({
  label,
  children,
  error,
  hint
}: {
  label: string;
  children: ReactNode;
  error?: string | null;
  hint?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-text-primary">
      <span>{label}</span>
      {children}
      {hint ? <span className="text-xs font-normal text-text-muted">{hint}</span> : null}
      {error ? <span className="text-xs font-semibold text-error">{error}</span> : null}
    </label>
  );
}
