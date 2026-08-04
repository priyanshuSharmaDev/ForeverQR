import { HelmetProvider } from "react-helmet-async";
import { ToastProvider } from "../hooks/useToast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <ToastProvider>{children}</ToastProvider>
    </HelmetProvider>
  );
}
