import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HudFrame from "../hud-frame";

describe("HudFrame", () => {
  it("renders its children", () => {
    render(
      <HudFrame>
        <span>Panel content</span>
      </HudFrame>
    );
    expect(screen.getByText("Panel content")).toBeInTheDocument();
  });

  it("renders four corner bracket elements", () => {
    const { container } = render(
      <HudFrame>
        <span>content</span>
      </HudFrame>
    );
    // root wrapper + 4 corner divs = 5 absolute/relative divs total
    const divs = container.querySelectorAll("div");
    expect(divs.length).toBeGreaterThanOrEqual(5);

    // Each corner div should carry a 1px border in the default color
    const cornerDivs = Array.from(divs).slice(1, 5);
    cornerDivs.forEach((corner) => {
      expect((corner as HTMLElement).style.border).toContain("1px solid");
      expect((corner as HTMLElement).style.border).toContain("#00FFD133");
    });
  });

  it("applies the default size to corner elements", () => {
    const { container } = render(
      <HudFrame>
        <span>content</span>
      </HudFrame>
    );
    const divs = container.querySelectorAll("div");
    const firstCorner = divs[1] as HTMLElement;
    expect(firstCorner.style.width).toBe("14px");
    expect(firstCorner.style.height).toBe("14px");
  });

  it("respects a custom color and size prop", () => {
    const { container } = render(
      <HudFrame color="#FF0000" size={24}>
        <span>content</span>
      </HudFrame>
    );
    const divs = container.querySelectorAll("div");
    const firstCorner = divs[1] as HTMLElement;
    expect(firstCorner.style.width).toBe("24px");
    expect(firstCorner.style.height).toBe("24px");
    expect(firstCorner.style.border).toContain("#FF0000");
  });

  it("applies custom style to the root wrapper", () => {
    const { container } = render(
      <HudFrame style={{ padding: "10px" }}>
        <span>content</span>
      </HudFrame>
    );
    const root = container.firstElementChild as HTMLElement;
    expect(root.style.padding).toBe("10px");
    expect(root.style.position).toBe("relative");
  });

  it("positions each corner on the correct side", () => {
    const { container } = render(
      <HudFrame>
        <span>content</span>
      </HudFrame>
    );
    const [, topLeft, topRight, bottomLeft, bottomRight] =
      container.querySelectorAll("div");

    expect((topLeft as HTMLElement).style.top).toBe("0px");
    expect((topLeft as HTMLElement).style.left).toBe("0px");

    expect((topRight as HTMLElement).style.top).toBe("0px");
    expect((topRight as HTMLElement).style.right).toBe("0px");

    expect((bottomLeft as HTMLElement).style.bottom).toBe("0px");
    expect((bottomLeft as HTMLElement).style.left).toBe("0px");

    expect((bottomRight as HTMLElement).style.bottom).toBe("0px");
    expect((bottomRight as HTMLElement).style.right).toBe("0px");
  });
});