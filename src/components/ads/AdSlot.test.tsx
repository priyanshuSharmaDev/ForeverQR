import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AdSlot } from "./AdSlot";

describe("ad slot", () => {
  it("reserves labeled ad space", () => {
    render(<AdSlot placement="Test placement" minHeight={160} />);
    expect(screen.getByLabelText(/test placement advertisement/i)).toHaveStyle({ minHeight: "160px" });
    expect(screen.getByText(/advertisement/i)).toBeInTheDocument();
  });
});
