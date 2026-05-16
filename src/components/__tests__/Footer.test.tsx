import { render, screen } from "@testing-library/react";
import { Footer } from "../sections/Footer";

describe("Footer", () => {
  it("renders footer logo", () => {
    render(<Footer />);
    expect(screen.getByText("QOL Clinical")).toBeInTheDocument();
  });

  it("renders about section", () => {
    render(<Footer />);
    expect(screen.getByText("Sobre QOL")).toBeInTheDocument();
    expect(
      screen.getByText(/MediPocket is a cross-border care USA platform/i)
    ).toBeInTheDocument();
  });

  it("renders useful links section", () => {
    render(<Footer />);
    expect(screen.getByText("Useful Link")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Second Opinion")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("renders contact info section", () => {
    render(<Footer />);
    expect(screen.getByText("Contact Info")).toBeInTheDocument();
    expect(screen.getByText("India Office :")).toBeInTheDocument();
    expect(screen.getByText("USA Office :")).toBeInTheDocument();
    expect(screen.getByText("health@qol.com")).toBeInTheDocument();
  });

  it("renders legal section", () => {
    render(<Footer />);
    expect(screen.getByText("Legal")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policies")).toBeInTheDocument();
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
  });

  it("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2016 QOL\. Derechos Reservados\./i)).toBeInTheDocument();
  });

  it("renders social media icons", () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole("link", { name: /facebook|twitter|instagram|linkedin|youtube/i });
    expect(socialLinks).toHaveLength(5);
  });

  it("has correct background color", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("bg-[#28574e]");
  });
});
