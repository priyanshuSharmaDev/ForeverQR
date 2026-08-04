import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("mobile menu", () => {
  it("opens navigation", async () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    await userEvent.click(screen.getByLabelText(/open menu/i));
    expect(screen.getByRole("navigation", { name: /mobile/i })).toBeInTheDocument();
  });
});
