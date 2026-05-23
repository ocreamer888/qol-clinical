import { siteConfig } from "../seo";

describe("siteConfig", () => {
  it("has a canonical URL pointing to www", () => {
    expect(siteConfig.url).toBe("https://www.qolclinical.com");
  });

  it("has a phone number in international format", () => {
    expect(siteConfig.phone).toMatch(/^\+506/);
  });

  it("has the Google verification token", () => {
    expect(siteConfig.googleVerification).toBe("google034f4af09b834679");
  });

  it("has a non-empty keywords array", () => {
    expect(Array.isArray(siteConfig.keywords)).toBe(true);
    expect(siteConfig.keywords.length).toBeGreaterThan(5);
  });

  it("has Costa Rica address", () => {
    expect(siteConfig.address.addressCountry).toBe("CR");
    expect(siteConfig.address.addressLocality).toBe("San José");
  });

  it("has doctor name and title", () => {
    expect(siteConfig.doctor.name).toBeTruthy();
    expect(siteConfig.doctor.jobTitle).toBeTruthy();
  });
});
