import { describe, expect, it } from "vitest";
import { qrPresets } from "./qrPresets";

describe("QR presets", () => {
  it("includes required professional presets", () => {
    expect(qrPresets.map((preset) => preset.name)).toEqual(expect.arrayContaining(["Classic", "Rounded", "Dotted", "Gradient Blue", "Colorful"]));
  });

  it("can update style, corners, colors, and gradients", () => {
    expect(qrPresets.some((preset) => preset.patch.dotStyle)).toBe(true);
    expect(qrPresets.some((preset) => preset.patch.cornerSquareStyle)).toBe(true);
    expect(qrPresets.some((preset) => preset.patch.foregroundColor)).toBe(true);
    expect(qrPresets.some((preset) => preset.patch.gradient?.enabled)).toBe(true);
  });
});
