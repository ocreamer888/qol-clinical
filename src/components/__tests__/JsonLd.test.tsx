import { render } from "@testing-library/react";
import { JsonLd } from "../JsonLd";

describe("JsonLd", () => {
  it("renders a script tag with application/ld+json type", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
  });

  it("contains valid JSON with schema.org context", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    const data = JSON.parse(script.innerHTML);
    expect(data["@context"]).toBe("https://schema.org");
  });

  it("includes MedicalOrganization in @graph", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    const data = JSON.parse(script.innerHTML);
    const types = data["@graph"].map((node: { "@type": string }) => node["@type"]);
    expect(types).toContain("MedicalOrganization");
  });

  it("includes LocalBusiness in @graph", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    const data = JSON.parse(script.innerHTML);
    const types = data["@graph"].map((node: { "@type": string }) => node["@type"]);
    expect(types).toContain("LocalBusiness");
  });

  it("includes WebSite in @graph", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    const data = JSON.parse(script.innerHTML);
    const types = data["@graph"].map((node: { "@type": string }) => node["@type"]);
    expect(types).toContain("WebSite");
  });

  it("includes Person (physician) in @graph", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    const data = JSON.parse(script.innerHTML);
    const types = data["@graph"].map((node: { "@type": string }) => node["@type"]);
    expect(types).toContain("Person");
  });

  it("includes the clinic phone number", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    expect(script.innerHTML).toContain("+50686036047");
  });

  it("includes Costa Rica address", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    expect(script.innerHTML).toContain("San José");
    expect(script.innerHTML).toContain('"addressCountry":"CR"');
  });
});
