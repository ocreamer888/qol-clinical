# QOL Clinical — Production Readiness Plan

## Context

Next.js 15 / React 19 / Tailwind 4 marketing site. One initial commit. Multiple issues block a safe production deploy: a logo path bug that will 404 on Vercel, a non-functional contact form, placeholder legal copy, English content in a Spanish site, and missing SEO infrastructure.

**Decisions locked in:**
- Contact form → WhatsApp redirect (no Supabase backend)
- Partners + Membership → remove unused imports (intentionally off-page)
- Legal pages → user will paste final copy when ready

---

## Phase 1 — Critical Fixes

### 1. Fix logo file path case
**Files:** `src/components/sections/NavBar.tsx:14`, `src/components/sections/Footer.tsx:76`

Change `src="/logos/group 8.svg"` → `src="/logos/Group 8.svg"` in both files.
macOS is case-insensitive and masks this; Vercel/Linux will 404 the logo without the fix.

### 2. Fix logo alt text (same files)
Change `alt= "jaje"` → `alt="QOL Clinical"` in both NavBar and Footer.

---

## Phase 2 — Page Composition & Contact Form

### 3. Clean up page.tsx imports
**File:** `src/app/page.tsx`

Remove unused imports `Partners` and `Membership` (intentionally off-page). Fixes three build warnings. `ContactForm` stays until it is wired in step 4, then restored.

### 4. Wire ContactForm to WhatsApp
**Files:** `src/components/sections/ContactForm.tsx`, `src/lib/whatsapp.ts`

Add helper in `whatsapp.ts`:
```ts
export function waContactForm(
  nombre: string, apellido: string, email: string,
  telefono: string, pais: string, mensaje: string
): string {
  return (
    `Hola, vengo desde ${ORIGIN}.\n` +
    `Nombre: ${nombre} ${apellido}\n` +
    `Email: ${email}\n` +
    `Teléfono: ${telefono}\n` +
    `País: ${pais}\n` +
    `Mensaje: ${mensaje}`
  );
}
```

In `ContactForm.tsx`:
- Add `useState` for each field (`nombre`, `apellido`, `email`, `telefono`, `pais`, `mensaje`)
- Validate on submit: `nombre`, `email`, `telefono` are required — show inline error messages
- `onSubmit` handler: build message via `waContactForm`, call `buildWhatsAppHref`, open via `window.open(..., '_blank')`
- Remove unused `Image` import (clears remaining build warning)

### 5. Restore ContactForm to page.tsx
Add `<ContactForm />` between `<CTAsection />` and `<Footer />`.

---

## Phase 3 — Content & Copy

### 6. Fix Membership English copy
**File:** `src/components/sections/Membership.tsx`

Translate feature list items to Spanish. Change "Get Started" → "Comenzar". Component is off-page now but must be production-ready for when it is re-enabled.

### 7. Fix copyright year
**File:** `src/components/sections/Footer.tsx`

Change static `© 2016 QOL.` → `© {new Date().getFullYear()} QOL Clinical.`

### 8. Restore nav links
**File:** `src/components/sections/NavBar.tsx`

Uncomment the nav links block. Update hrefs to match actual section IDs on the page: `#about`, `#treatments`, `#doctors`, `#contact`. Remove links to sections not currently rendered.

---

## Phase 4 — SEO & Metadata

### 9. Add OpenGraph metadata
**File:** `src/app/layout.tsx`

Expand the `metadata` export:
- `metadataBase`: read from `NEXT_PUBLIC_SITE_URL` env var
- `openGraph`: title, description, siteName, locale `es_CR`, type `website`
- `twitter`: card `summary_large_image`

### 10. Create robots.txt
**File:** `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://qolclinical.com/sitemap.xml
```

### 11. Create sitemap
**File:** `src/app/sitemap.ts`

Use Next.js `MetadataRoute.Sitemap`. Include: `/`, `/legal/privacidad`, `/legal/terminos`, `/legal/licencia`.

---

## Phase 5 — Legal Pages

### 12. Structure legal pages for final copy
**Files:** `src/app/legal/privacidad/page.tsx`, `terminos/page.tsx`, `licencia/page.tsx`

Add clear section headings and structured layout ready to receive real copy. Mark each top-level section with `[PENDIENTE DE REVISIÓN LEGAL]` until the user pastes final content.

---

## Phase 6 — Infrastructure

### 13. Create .gitignore
**File:** `.gitignore` (project root)

Cover: `.DS_Store`, `.next/`, `node_modules/`, `.env*.local`, `.vercel`.

### 14. Add site URL env var
**File:** `.env`

Add `NEXT_PUBLIC_SITE_URL=https://qolclinical.com` — used by sitemap and OG `metadataBase`.

---

## Phase 7 — Polish

### 15. Custom 404 page
**File:** `src/app/not-found.tsx`

Branded page in site palette (`#28574e` teal). Headline in Spanish, link home, WhatsApp CTA.

### 16. Fix Doctors section duplicate map
**File:** `src/components/sections/Doctors.tsx:38-45`

The description renders by mapping `doctors` twice. Collapse into a single two-column grid pass.

### 17. Remove large unused asset
Grep for `DHIT Logo` across `src/`. If unreferenced, delete `public/logos/DHIT Logo 010721 Full Color 1800px.png`.

---

## Files Touched

| File | Change |
|---|---|
| `src/components/sections/NavBar.tsx` | Logo path, alt text, restore nav links |
| `src/components/sections/Footer.tsx` | Logo path, alt text, dynamic copyright |
| `src/components/sections/ContactForm.tsx` | Wire to WhatsApp, state + validation |
| `src/lib/whatsapp.ts` | Add `waContactForm` helper |
| `src/app/page.tsx` | Remove Partners/Membership imports, restore ContactForm |
| `src/components/sections/Membership.tsx` | Translate English copy |
| `src/app/layout.tsx` | Full OG + Twitter metadata |
| `src/app/sitemap.ts` | New — sitemap generation |
| `public/robots.txt` | New |
| `src/app/not-found.tsx` | New — branded 404 |
| `src/app/legal/privacidad/page.tsx` | Structure for final legal copy |
| `src/app/legal/terminos/page.tsx` | Structure for final legal copy |
| `src/app/legal/licencia/page.tsx` | Structure for final legal copy |
| `.gitignore` | New |
| `.env` | Add `NEXT_PUBLIC_SITE_URL` |
| `src/components/sections/Doctors.tsx` | Fix duplicate map |

---

## Verification Checklist

- [ ] `npm run build` — zero warnings, zero errors
- [ ] `npm run lint` — passes clean
- [ ] Logo visible in NavBar and Footer on `localhost:3000`
- [ ] Nav links scroll to correct sections
- [ ] Contact form: fill all fields → Enviar → WhatsApp opens with prefilled message
- [ ] Contact form: submit empty → inline validation errors, WhatsApp does NOT open
- [ ] `/legal/privacidad`, `/legal/terminos`, `/legal/licencia` render with proper structure
- [ ] `/robots.txt` accessible
- [ ] `/sitemap.xml` returns valid XML with all four routes
- [ ] Navigate to `/nonexistent` → branded 404 page renders
- [ ] DevTools `<head>`: `og:title`, `og:description` meta tags present
