import { describe, expect, it } from "vitest";
import { normalizeUrl, validateUrl } from "./urlValidation";

describe("URL normalization and validation", () => {
  it("trims and prepends https for bare domains", () => {
    expect(normalizeUrl(" example.com/path ")).toBe("https://example.com/path");
  });

  it("accepts Google Forms links", () => {
    const result = validateUrl("https://docs.google.com/forms/d/e/abc/viewform");
    expect(result.valid).toBe(true);
    expect(result.valid && result.isGoogleForm).toBe(true);
  });

  it("accepts valid http and https URLs", () => {
    expect(validateUrl("http://example.com").valid).toBe(true);
    expect(validateUrl("https://example.com?q=1").valid).toBe(true);
  });

  it("rejects unsafe protocols", () => {
    expect(validateUrl("javascript:alert(1)").valid).toBe(false);
    expect(validateUrl("data:text/html,hi").valid).toBe(false);
    expect(validateUrl("ftp://example.com").valid).toBe(false);
  });

  it("rejects empty and malformed input", () => {
    expect(validateUrl("").valid).toBe(false);
    expect(validateUrl("not a url").valid).toBe(false);
  });
});
