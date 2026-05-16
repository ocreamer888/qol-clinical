import { render, screen } from "@testing-library/react";
import { Features } from "../sections/Features";

describe("Features", () => {
  it("renders all three feature cards", () => {
    render(<Features />);
    expect(screen.getByText("Segunda Opinión")).toBeInTheDocument();
    expect(screen.getByText("Tratamiento")).toBeInTheDocument();
    expect(screen.getByText("Teleconsulta")).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    render(<Features />);
    expect(
      screen.getByText(/Claridad sobre tu diagnóstico y tratamiento actual/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Revisión profesional de tus medicamentos/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Atención clínica de calidad desde tu casa/i)
    ).toBeInTheDocument();
  });

  it("renders CTA buttons for each feature", () => {
    render(<Features />);
    const buttons = screen.getAllByText("Consulta");
    expect(buttons).toHaveLength(3);
  });

  it("has correct section id", () => {
    const { container } = render(<Features />);
    const section = container.querySelector("section#features");
    expect(section).toBeInTheDocument();
  });

  it("renders icons for each feature", () => {
    render(<Features />);
    // Each feature has an Image component (mocked as img)
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(3);
  });
});
