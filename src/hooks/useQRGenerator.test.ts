import { describe, expect, it } from "vitest";
import { defaultQRConfig } from "../constants/defaultQRConfig";
import { getQRContent } from "./useQRGenerator";

describe("QR content generation", () => {
  it("handles text QR content", () => {
    expect(getQRContent({ ...defaultQRConfig, contentType: "text", value: "hello" }).value).toBe("hello");
  });

  it("requires text content", () => {
    expect(getQRContent({ ...defaultQRConfig, contentType: "text", value: " " }).error).toMatch(/text/);
  });

  it("creates Wi-Fi content without storing credentials externally", () => {
    const result = getQRContent({ ...defaultQRConfig, contentType: "wifi" }, { ssid: "Office", password: "pw", security: "WPA", hidden: false });
    expect(result.value).toBe("WIFI:T:WPA;S:Office;P:pw;H:false;;");
  });
});
