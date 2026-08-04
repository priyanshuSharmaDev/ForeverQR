import { describe, expect, it } from "vitest";
import { defaultQRConfig } from "../../constants/defaultQRConfig";
import { getScanWarnings } from "./ContrastWarning";

describe("scan warnings", () => {
  it("warns for low contrast, small margin, and large logos", () => {
    const warnings = getScanWarnings({
      ...defaultQRConfig,
      foregroundColor: "#FFFFFF",
      backgroundColor: "#F8FAFC",
      margin: 2,
      logo: { ...defaultQRConfig.logo, enabled: true, size: 0.3 }
    });
    expect(warnings.length).toBeGreaterThanOrEqual(3);
  });
});
