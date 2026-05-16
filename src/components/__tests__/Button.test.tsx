import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../ui/Button";

describe("Button", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders primary variant by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-[#20433d]");
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("text-[#244841]");
  });

  it("renders white variant", () => {
    render(<Button variant="white">White</Button>);
    const button = screen.getByText("White");
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("text-[#28574e]");
  });

  it("renders dark variant", () => {
    render(<Button variant="dark">Dark</Button>);
    const button = screen.getByText("Dark");
    expect(button).toHaveClass("bg-[#1e232f]");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText("Small")).toHaveClass("px-5");

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText("Medium")).toHaveClass("px-7");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText("Large")).toHaveClass("px-8");
  });

  it("accepts custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });

  it("renders as submit button when type is submit", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit");
  });
});
