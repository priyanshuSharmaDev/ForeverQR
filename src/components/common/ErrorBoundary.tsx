import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "./Button";

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application error", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-xl p-8">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-text-secondary">Reload the page to restore the default QR generator settings.</p>
          <Button className="mt-6" onClick={() => window.location.reload()}>Reload</Button>
        </main>
      );
    }
    return this.props.children;
  }
}
