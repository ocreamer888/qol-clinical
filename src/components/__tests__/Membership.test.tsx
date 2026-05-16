import { render, screen } from "@testing-library/react";
import { Membership } from "../sections/Membership";

describe("Membership", () => {
  it("renders section title", () => {
    render(<Membership />);
    expect(screen.getByText("Membresía QOL")).toBeInTheDocument();
  });

  it("renders membership description", () => {
    render(<Membership />);
    expect(
      screen.getByText(/La membresía QOL Clinical te da acceso continuo/i)
    ).toBeInTheDocument();
  });

  it("renders both membership plans", () => {
    render(<Membership />);
    expect(screen.getByText("QOL Lite")).toBeInTheDocument();
    expect(screen.getByText("QOL Family")).toBeInTheDocument();
  });

  it("renders correct pricing", () => {
    render(<Membership />);
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("$45")).toBeInTheDocument();
  });

  it("renders 'Desde' label for pricing", () => {
    render(<Membership />);
    const desdeLabels = screen.getAllByText("Desde");
    expect(desdeLabels).toHaveLength(2);
  });

  it("renders Get Started buttons", () => {
    render(<Membership />);
    const buttons = screen.getAllByText("Get Started");
    expect(buttons).toHaveLength(2);
  });

  it("renders feature lists for both plans", () => {
    render(<Membership />);
    expect(screen.getAllByText(/Global Health Coverage/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/USA Health Advisor/i).length).toBeGreaterThanOrEqual(2);
  });

  it("has correct section id", () => {
    const { container } = render(<Membership />);
    const section = container.querySelector("section#membership");
    expect(section).toBeInTheDocument();
  });

  it("has correct background color", () => {
    const { container } = render(<Membership />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-[#28564d]");
  });
});
