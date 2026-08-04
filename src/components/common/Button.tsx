import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  isLoading?: boolean;
  icon?: ReactNode;
};

export function Button({ className, variant = "primary", isLoading, icon, children, ...props }: ButtonProps) {
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "border border-border bg-white text-text-primary hover:bg-surface-muted",
    ghost: "text-text-secondary hover:bg-primary-light hover:text-primary",
    danger: "border border-error/30 bg-white text-error hover:bg-red-50"
  };
  return (
    <button
      className={twMerge(
        clsx(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
          styles[variant],
          className
        )
      )}
      {...props}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : icon}
      {children}
    </button>
  );
}
