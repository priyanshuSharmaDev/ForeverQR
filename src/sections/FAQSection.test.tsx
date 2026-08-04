import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FAQSection } from "./FAQSection";

describe("FAQ accordion", () => {
  it("toggles answers accessibly", async () => {
    render(<FAQSection faqs={[{ question: "Does it expire?", answer: "No built-in expiry date." }]} />);
    const button = screen.getByRole("button", { name: /expire/i });
    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
