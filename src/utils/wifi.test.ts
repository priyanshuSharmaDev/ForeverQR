import { describe, expect, it } from "vitest";
import { encodeWifiQR } from "./wifi";

describe("Wi-Fi QR encoding", () => {
  it("creates valid WPA content", () => {
    expect(encodeWifiQR({ ssid: "Cafe", password: "secret", security: "WPA", hidden: false })).toBe("WIFI:T:WPA;S:Cafe;P:secret;H:false;;");
  });

  it("escapes reserved characters", () => {
    expect(encodeWifiQR({ ssid: "A;B", password: "p,1", security: "WEP", hidden: true })).toContain("S:A\\;B;P:p\\,1;");
  });
});
