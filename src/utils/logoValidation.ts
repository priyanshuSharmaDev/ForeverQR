const allowedMimeTypes = new Set(["image/png", "image/jpeg", "image/webp"]);
const allowedExtensions = new Set(["png", "jpg", "jpeg", "webp"]);
const maxLogoSize = 2 * 1024 * 1024;

export function validateLogoFile(file: File): string | null {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  if (!allowedMimeTypes.has(file.type) || !allowedExtensions.has(extension)) {
    return "Upload a PNG, JPEG, or WebP logo. SVG upload is disabled until sanitization is available.";
  }
  if (file.size > maxLogoSize) return "Logo files must be 2 MB or smaller.";
  return null;
}
