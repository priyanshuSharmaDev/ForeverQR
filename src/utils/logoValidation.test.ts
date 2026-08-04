import { describe, expect, it } from "vitest";
import { validateLogoFile } from "./logoValidation";

describe("logo validation", () => {
  it("accepts browser-safe image files under 2 MB", () => {
    expect(validateLogoFile(new File(["x"], "logo.png", { type: "image/png" }))).toBeNull();
  });

  it("rejects SVG files", () => {
    expect(validateLogoFile(new File(["x"], "logo.svg", { type: "image/svg+xml" }))).toMatch(/SVG/);
  });

  it("rejects oversized logos", () => {
    expect(validateLogoFile(new File([new Uint8Array(2 * 1024 * 1024 + 1)], "logo.webp", { type: "image/webp" }))).toMatch(/2 MB/);
  });
});
