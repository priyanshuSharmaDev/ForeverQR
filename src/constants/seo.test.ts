import { describe, expect, it } from "vitest";
import { seoConfigs } from "./seo";

describe("SEO metadata", () => {
  it("has unique titles and descriptions", () => {
    const values = Object.values(seoConfigs);
    expect(new Set(values.map((item) => item.title)).size).toBe(values.length);
    expect(new Set(values.map((item) => item.description)).size).toBe(values.length);
  });
});
