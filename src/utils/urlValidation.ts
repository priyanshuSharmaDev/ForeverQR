const unsafeProtocols = new Set(["javascript:", "data:", "file:", "blob:", "ftp:"]);

export type UrlValidationResult =
  | { valid: true; url: string; isGoogleForm: boolean }
  | { valid: false; error: string };

export function normalizeUrl(input: string): string {
  const value = input.trim();
  if (!value) return "";
  if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(value)) return value;
  return `https://${value}`;
}

export function validateUrl(input: string): UrlValidationResult {
  const normalized = normalizeUrl(input);
  if (!normalized) return { valid: false, error: "Enter a destination URL." };

  try {
    const parsed = new URL(normalized);
    if (unsafeProtocols.has(parsed.protocol)) {
      return { valid: false, error: "Only HTTP and HTTPS links are supported." };
    }
    if (!["http:", "https:"].includes(parsed.protocol) || !parsed.hostname.includes(".")) {
      return { valid: false, error: "Enter a valid HTTP or HTTPS URL." };
    }
    return {
      valid: true,
      url: parsed.toString(),
      isGoogleForm: parsed.hostname === "forms.gle" || parsed.hostname.endsWith("docs.google.com")
    };
  } catch {
    return { valid: false, error: "Enter a valid URL." };
  }
}
