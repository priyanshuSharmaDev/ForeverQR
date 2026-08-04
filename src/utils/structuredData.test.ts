import { describe, expect, it } from "vitest";
import { faqStructuredData } from "./structuredData";

describe("structured data", () => {
  it("creates FAQPage data from visible FAQ content", () => {
    const data = faqStructuredData([{ question: "Question?", answer: "Answer." }]);
    expect(data["@type"]).toBe("FAQPage");
    expect(data.mainEntity[0].name).toBe("Question?");
  });
});
