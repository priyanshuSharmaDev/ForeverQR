import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={twMerge(
        "min-h-11 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-muted",
        className
      )}
      {...props}
    />
  );
}
