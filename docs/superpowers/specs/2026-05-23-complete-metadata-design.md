# Complete Metadata Design — QOL Clinical

**Date:** 2026-05-23  
**Status:** Approved  
**Site:** https://qolclinical.com  
**Locale:** es_CR (Costa Rica)

---

## Goal

Implement production-grade metadata covering: social sharing (OG/Twitter), Google Search (SEO + rich results), AI crawlers (llms.txt), and structured data (JSON-LD). All site data flows from a single `lib/seo.ts` config.

---

## Architecture

```
lib/seo.ts                                   ← single source of truth
src/app/layout.tsx                           ← Next.js Metadata object
src/components/JsonLd.tsx                    ← structured data component
public/qol-social.png                        ← OG image (1200×630, already exists)
public/google034f4af09b834679.html           ← moved from root → public/
public/llms.txt                              ← AI crawler hint file
public/manifest.json                         ← web app manifest
src/app/sitemap.ts                           ← already exists (no changes)
public/robots.txt                            ← already exists (no changes)
```

---

## lib/seo.ts

Central config object exported as `siteConfig`. Contains:

- `name`: "QOL Clinical"
- `url`: `process.env.NEXT_PUBLIC_SITE_URL ?? "https://qolclinical.com"`
- `title`: "QOL Clinical — Acompañamiento clínico integral"
- `description`: Full Spanish description of services
- `keywords`: Array of Spanish SEO keywords (condiciones crónicas, teleconsulta, etc.)
- `phone`: "+50686036047"
- `address`: San Pedro, San José, Costa Rica (with PostalCode, streetAddress)
- `locale`: "es_CR"
- `themeColor`: "#28574E" (brand green from CSS)
- `ogImage`: "/qol-social.png"
- `googleVerification`: "google034f4af09b834679"
- `doctor`: { name: "Dr. Javier León", role: "Director Médico" }

---

## layout.tsx — Metadata Fields

### Core
- `metadataBase`: new URL(siteConfig.url)
- `title`: `{ default: siteConfig.title, template: "%s | QOL Clinical" }`
- `description`: siteConfig.description
- `keywords`: siteConfig.keywords
- `authors`: [{ name: "QOL Clinical", url: siteConfig.url }]
- `category`: "health"
- `creator`: "QOL Clinical"

### Robots
```ts
robots: {
  index: true, follow: true,
  googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
}
```

### Alternates
- `canonical`: siteConfig.url
- `languages`: { "es-CR": siteConfig.url }

### Open Graph
- `type`: "website"
- `title`, `description`, `url`, `siteName`: from siteConfig
- `locale`: "es_CR"
- `images`: [{ url: "/qol-social.png", width: 1200, height: 630, alt: "QOL Clinical" }]

### Twitter / X
- `card`: "summary_large_image"
- `title`, `description`
- `images`: ["/qol-social.png"]

### Verification
- `google`: siteConfig.googleVerification

### Icons
- `icon`: "/favicon.ico"
- `shortcut`: "/favicon.ico"
- `apple`: "/apple-touch-icon.png" (to be created or use favicon fallback)

### Manifest
- `manifest`: "/manifest.json"

---

## JsonLd.tsx Component

Server component that renders a `<script type="application/ld+json">` in `<head>` via Next.js layout. Contains an array of schemas:

### 1. MedicalOrganization
```json
{
  "@type": "MedicalOrganization",
  "name": "QOL Clinical",
  "url": "https://qolclinical.com",
  "logo": "https://qolclinical.com/logos/qol-logo.svg",
  "telephone": "+50686036047",
  "description": "...",
  "medicalSpecialty": ["Chronic disease management", "Teleconsultation", ...],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "San Pedro",
    "addressLocality": "San José",
    "addressCountry": "CR"
  }
}
```

### 2. LocalBusiness
```json
{
  "@type": "LocalBusiness",
  "name": "QOL Clinical",
  "telephone": "+50686036047",
  "address": { ... },
  "priceRange": "$$",
  "currenciesAccepted": "CRC, USD"
}
```

### 3. WebSite (enables Sitelinks Search Box signal)
```json
{
  "@type": "WebSite",
  "name": "QOL Clinical",
  "url": "https://qolclinical.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://qolclinical.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 4. Person — Physician
```json
{
  "@type": "Person",
  "name": "Dr. Javier León",
  "jobTitle": "Director Médico",
  "worksFor": { "@type": "MedicalOrganization", "name": "QOL Clinical" },
  "url": "https://qolclinical.com"
}
```

All schemas combined in a `@graph` array under a single `<script>` tag.

---

## public/manifest.json

Web app manifest for installability and PWA signals:

```json
{
  "name": "QOL Clinical",
  "short_name": "QOL",
  "description": "Acompañamiento clínico integral",
  "start_url": "/",
  "display": "browser",
  "theme_color": "#28574E",
  "background_color": "#ffffff",
  "icons": [
    { "src": "/favicon.ico", "sizes": "any", "type": "image/x-icon" }
  ]
}
```

---

## public/llms.txt

Plain-language file for AI crawlers (Perplexity, ChatGPT, Gemini, Claude):

```
# QOL Clinical

QOL Clinical es un centro clínico integral en San Pedro, San José, Costa Rica.
Especializado en acompañamiento farmacéutico y clínico para condiciones crónicas y agudas.

## Servicios
- Teleconsulta personalizada
- Seguimiento de condiciones crónicas (reumatología, neurología, oncología, cardiología, endocrinología, etc.)
- Segunda opinión médica
- Planes de salud personalizados

## Contacto
- Teléfono/WhatsApp: +506 8603-6047
- Web: https://qolclinical.com

## Equipo
- Dr. Javier León — Director Médico

## Notas para IA
No somos una farmacia ni un hospital. Somos un acompañante clínico: evaluamos tu estado de salud,
revisamos tus tratamientos y construimos contigo un plan jerárquico, claro y sostenible.
```

---

## Files to Move / Create

| Action | File |
|---|---|
| Move to `public/` | `google034f4af09b834679.html` (currently in root) |
| Create | `public/manifest.json` |
| Create | `public/llms.txt` |
| Create | `src/components/JsonLd.tsx` |
| Update | `lib/seo.ts` (new file) |
| Update | `src/app/layout.tsx` |

---

## Out of Scope

- Apple touch icon image generation (will use favicon as fallback reference)
- Social media profiles (not yet created)
- Google Search Console submission (requires user login)
- Per-page metadata for legal pages (can be added later with the same siteConfig)
