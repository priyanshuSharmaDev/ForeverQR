export function Toast({ message }: { message: string }) {
  return (
    <div aria-live="polite" className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      {message ? <div className="rounded-lg bg-text-primary px-4 py-3 text-sm font-semibold text-white shadow-soft">{message}</div> : null}
    </div>
  );
}
