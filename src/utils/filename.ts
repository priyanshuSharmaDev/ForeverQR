import type { QRContentType } from "../types/qr";

export function buildFilename(type: QRContentType, extension: string, date = new Date()): string {
  const stamp = date.toISOString().slice(0, 10);
  const prefix = type === "google-form" ? "google-form-qr" : type === "url" ? "forever-qr" : `${type}-qr`;
  return `${prefix}-${stamp}.${extension}`;
}
