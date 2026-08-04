import { describe, expect, it } from "vitest";
import { getContrastRatio, getContrastWarning } from "./colorContrast";

describe("contrast utilities", () => {
  it("reports high contrast", () => {
    expect(getContrastRatio("#000000", "#FFFFFF")).toBeGreaterThan(10);
  });

  it("warns for similar colors", () => {
    expect(getContrastWarning("#FFFFFF", "#F8FAFC")).toMatch(/contrast/);
  });
});
