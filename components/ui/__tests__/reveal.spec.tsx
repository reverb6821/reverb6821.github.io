import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reveal from "../reveal";

describe("Reveal", () => {
  let observerCallback: IntersectionObserverCallback;
  let observeMock: jest.Mock;
  let disconnectMock: jest.Mock;

  beforeEach(() => {
    observeMock = jest.fn();
    disconnectMock = jest.fn();

    // @ts-expect-error - mocking a browser-only API for jsdom
    global.IntersectionObserver = jest.fn(function (
      this: IntersectionObserver,
      callback: IntersectionObserverCallback
    ) {
      observerCallback = callback;
      this.observe = observeMock;
      this.disconnect = disconnectMock;
      this.unobserve = jest.fn();
      this.takeRecords = jest.fn().mockReturnValue([]);
    });
  });

  it("renders children", () => {
    render(
      <Reveal>
        <p>Reveal me</p>
      </Reveal>
    );
    expect(screen.getByText("Reveal me")).toBeInTheDocument();
  });

  it("starts hidden (opacity 0, translated) before intersecting", () => {
    render(
      <Reveal>
        <p>Reveal me</p>
      </Reveal>
    );
    const wrapper = screen.getByText("Reveal me").parentElement as HTMLElement;
    expect(wrapper.style.opacity).toBe("0");
    expect(wrapper.style.transform).toBe("translateY(20px)");
  });

  it("observes the wrapper element on mount", () => {
    render(
      <Reveal>
        <p>Reveal me</p>
      </Reveal>
    );
    expect(observeMock).toHaveBeenCalledTimes(1);
  });

  it("becomes visible once the IntersectionObserver reports intersection", () => {
    render(
      <Reveal>
        <p>Reveal me</p>
      </Reveal>
    );
    const wrapper = screen.getByText("Reveal me").parentElement as HTMLElement;

    observerCallback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver
    );

    expect(wrapper.style.opacity).toBe("1");
    expect(wrapper.style.transform).toBe("translateY(0px)");
  });

  it("stays hidden if the entry is not intersecting", () => {
    render(
      <Reveal>
        <p>Reveal me</p>
      </Reveal>
    );
    const wrapper = screen.getByText("Reveal me").parentElement as HTMLElement;

    observerCallback(
      [{ isIntersecting: false } as IntersectionObserverEntry],
      {} as IntersectionObserver
    );

    expect(wrapper.style.opacity).toBe("0");
  });

  it("applies the given transition delay", () => {
    render(
      <Reveal delay={250}>
        <p>Delayed</p>
      </Reveal>
    );
    const wrapper = screen.getByText("Delayed").parentElement as HTMLElement;
    expect(wrapper.style.transitionDelay).toBe("250ms");
  });

  it("disconnects the observer on unmount", () => {
    const { unmount } = render(
      <Reveal>
        <p>Reveal me</p>
      </Reveal>
    );
    unmount();
    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });
});