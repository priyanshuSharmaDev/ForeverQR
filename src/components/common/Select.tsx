import type { SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={twMerge("min-h-11 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm", className)}
      {...props}
    />
  );
}
