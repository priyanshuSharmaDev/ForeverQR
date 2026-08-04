import { useCallback, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export function useLocalStorage<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) setValue(JSON.parse(stored) as T);
    } catch {
      setValue(fallback);
    }
  }, [fallback, key]);

  const save: Dispatch<SetStateAction<T>> = useCallback(
    (nextValue) => {
      setValue((current) => {
        const next = nextValue instanceof Function ? nextValue(current) : nextValue;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // localStorage may be unavailable in private browsing or locked-down contexts.
        }
        return next;
      });
    },
    [key]
  );

  return [value, save] as const;
}
