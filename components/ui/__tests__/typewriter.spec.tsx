import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypeWriter from "../typewriter";

describe("TypeWriter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders the cursor immediately, before any characters are typed", () => {
    const { container } = render(<TypeWriter strings={["Hello"]} />);
    expect(container.textContent).toBe("█");
  });

  it("types out the given string character by character", () => {
    const { container } = render(<TypeWriter strings={["Hi"]} speed={10} />);

    act(() => {
      jest.advanceTimersByTime(10); // "H"
    });
    expect(container.textContent).toBe("H█");

    act(() => {
      jest.advanceTimersByTime(10); // "Hi"
    });
    expect(container.textContent).toBe("Hi█");
  });

  it("pauses on the full string, then starts deleting", () => {
    const { container } = render(
      <TypeWriter strings={["Hi"]} speed={10} pause={50} />
    );

    // Type "H", "i", then the final tick that completes charIdx > length
    act(() => {
      jest.advanceTimersByTime(30);
    });
    expect(container.textContent).toBe("Hi█");

    // Wait out the pause, then begin deleting one character
    act(() => {
      jest.advanceTimersByTime(50); // pause elapses
      jest.advanceTimersByTime(5); // one delete tick (speed / 2)
    });
    expect(container.textContent).toBe("H█");
  });

  it("cycles to the next string after fully deleting the previous one", () => {
    const { container } = render(
      <TypeWriter strings={["Hi", "Yo"]} speed={10} pause={20} />
    );

    // Type "Hi" fully (2 chars + 1 boundary tick)
    act(() => {
      jest.advanceTimersByTime(30);
    });
    expect(container.textContent).toBe("Hi█");

    // Pause, then delete both characters down to empty, then swap word
    act(() => {
      jest.advanceTimersByTime(20); // pause
      jest.advanceTimersByTime(5); // delete "i" -> "H"
      jest.advanceTimersByTime(5); // delete "H" -> ""
      jest.advanceTimersByTime(5); // reset to next string
    });

    // Next tick begins typing "Yo"
    act(() => {
      jest.advanceTimersByTime(10);
    });
    expect(container.textContent).toBe("Y█");
  });

  it("falls back to the first string via modulo when idx exceeds array bounds is not needed externally", () => {
    // Sanity check: a single-item array should just keep re-typing the same word
    const { container } = render(<TypeWriter strings={["Ok"]} speed={5} pause={10} />);
    act(() => {
      jest.advanceTimersByTime(15);
    });
    expect(container.textContent).toBe("Ok█");
  });
});