import { render, screen } from "@testing-library/react";
import { Hero } from "../sections/Hero";

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Vivir con una condición crónica no significa vivir sin apoyo/i)
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByText(/En QOL Clinical te acompañamos con un equipo clínico integral/i)
    ).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Sin filas\. Sin esperas\. Solo atención que te entiende\./i)
    ).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<Hero />);
    expect(screen.getByText("Second Opinion")).toBeInTheDocument();
    expect(screen.getByText("Medical Travel")).toBeInTheDocument();
    expect(screen.getByText("Clinical Trials")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Consulta Gratis")).toBeInTheDocument();
    expect(screen.getByText("Habla con un especialista ahora")).toBeInTheDocument();
  });

  it("renders the logo", () => {
    render(<Hero />);
    expect(screen.getByText("QOL Clinical")).toBeInTheDocument();
  });

  it("renders floating cards text", () => {
    render(<Hero />);
    expect(screen.getByText(/Atención de primera y personalizada/i)).toBeInTheDocument();
    expect(screen.getByText(/Acompañamiento 24\/7/i)).toBeInTheDocument();
  });

  it("has correct background color", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-[#28574e]");
  });
});
