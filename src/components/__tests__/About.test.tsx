import { render, screen } from "@testing-library/react";
import { About } from "../sections/About";

describe("About", () => {
  it("renders the headline", () => {
    render(<About />);
    expect(
      screen.getByText(/Un modelo clínico diseñado para ti, no para el sistema/i)
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<About />);
    expect(
      screen.getByText(/QOL Clinical es un centro clínico integral especializado/i)
    ).toBeInTheDocument();
  });

  it("has correct section id", () => {
    const { container } = render(<About />);
    const section = container.querySelector("section#about");
    expect(section).toBeInTheDocument();
  });

  it("uses correct heading color", () => {
    const { container } = render(<About />);
    const heading = container.querySelector("h2");
    expect(heading).toHaveClass("text-[#28574e]");
  });
});
