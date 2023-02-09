import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./Home";
import { App } from "./App";
import { useTopBanner } from "./useTopBanner";
import { TopBanner } from "./TopBanner";

jest.mock("./TopBanner.js");
jest.mock("./useTopBanner.js");

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("when useTopBanner return value is true", () => {
  beforeEach(() => {
    useTopBanner.mockReturnValue({ visible: true });
    render(<App />);
  });
  it("sould render top banner", () => {
    expect(TopBanner).toBeCalled();
  });
});

describe("when useTopBanner return value is false", () => {
  beforeEach(() => {
    useTopBanner.mockReturnValue({ visible: false });
    render(<App />);
  });
  it("sould not render top banner", () => {
    expect(TopBanner).not.toBeCalled();
  });
});

describe("when banner-close-button is clicked", () => {
  const removeElementMock = jest.fn();
  beforeEach(() => {
    useTopBanner.mockReturnValue({
      visible: true,
      removeElement: removeElementMock,
    });
    render(<App />);
    screen.debug();
  });
  it("should remove the banner", () => {
    expect(TopBanner).toBeCalledWith({ onRemove: removeElementMock }, {});
  });
});
