import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionLabel from "../section-label";

describe("SectionLabel", () => {
  it("renders the mod, sys and title text", () => {
    render(<SectionLabel mod="MOD_01" sys="SYS://CORE" title="Systems Overview" />);

    expect(screen.getByText("MOD_01")).toBeInTheDocument();
    expect(screen.getByText("SYS://CORE")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Systems Overview" })
    ).toBeInTheDocument();
  });

  it("does not render a subtitle when sub is omitted", () => {
    const { container } = render(
      <SectionLabel mod="MOD_01" sys="SYS://CORE" title="Systems Overview" />
    );
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });

  it("renders the subtitle when sub is provided", () => {
    render(
      <SectionLabel
        mod="MOD_01"
        sys="SYS://CORE"
        title="Systems Overview"
        sub="Full diagnostic sweep of all active modules."
      />
    );
    expect(
      screen.getByText("Full diagnostic sweep of all active modules.")
    ).toBeInTheDocument();
  });

  it("applies expected styling to the title", () => {
    render(<SectionLabel mod="MOD_01" sys="SYS://CORE" title="Systems Overview" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveStyle({ fontWeight: "900", color: "#C8E8FF" });
  });
});