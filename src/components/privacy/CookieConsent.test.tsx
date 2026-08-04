import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, beforeEach } from "vitest";
import { CookieConsent } from "./CookieConsent";

describe("cookie consent", () => {
  beforeEach(() => localStorage.clear());

  it("stores a reject choice locally", async () => {
    render(<CookieConsent />);
    await userEvent.click(screen.getByRole("button", { name: /reject/i }));
    expect(localStorage.getItem("forever-qr-consent")).toBe("reject");
  });
});
