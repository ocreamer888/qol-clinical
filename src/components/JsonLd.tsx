import { siteConfig } from "@/lib/seo";

export function JsonLd() {
  const graph = [
    {
      "@type": "MedicalOrganization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logos/qol-logo.svg`,
      telephone: siteConfig.phone,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        addressCountry: siteConfig.address.addressCountry,
      },
      medicalSpecialty: [
        "Rheumatology",
        "Neurology",
        "Oncology",
        "Cardiology",
        "Endocrinology",
        "Rare diseases",
        "Reproductive medicine",
        "Aesthetic medicine",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        addressCountry: siteConfig.address.addressCountry,
      },
      priceRange: "$$",
      currenciesAccepted: "CRC, USD",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#doctor`,
      name: siteConfig.doctor.name,
      jobTitle: siteConfig.doctor.jobTitle,
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      url: siteConfig.url,
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
