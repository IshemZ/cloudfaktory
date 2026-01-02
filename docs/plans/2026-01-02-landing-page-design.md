# CloudFaktory Landing Page Design

**Date:** 2026-01-02
**Status:** Approved
**Style:** Modern & Minimal

## Overview

Single-page scroll experience for CloudFaktory's automation and data services targeting TPE/PME (French small/medium businesses). Focus on clean design, clear CTAs, and building trust through simplicity.

## Design Decisions

- **Visual Style:** Modern & minimal (Stripe/Vercel aesthetic) - clean, professional, trustworthy
- **Contact Flow:** Embedded Calendly + contact form via form service (Web3Forms/Formspree)
- **Calendar:** Calendly integration at `https://calendly.com/zerzourishem/rdv-de-15-minutes`
- **Form Handling:** Third-party form service emails submissions to owner

## Page Structure

1. Hero (avec CTAs)
2. Ce que tu gagnes (benefits)
3. Services (3 cards)
4. Comment on bosse (process timeline)
5. Exemples de cas d'usage
6. Stack & compatibilité
7. FAQ (accordion)
8. Contact/CTA final
9. Footer

## Section Details

### 1. Hero Section

**Layout:** Full-height centered content, clean white/dark background

**Content:**
- Headline (text-4xl to text-6xl, Geist Sans): "CloudFaktory — j'automatise tes process et je rends tes données actionnables"
- Subheadline (text-lg/xl, zinc-600): Pain point description
- Two CTA buttons:
  - Primary (filled blue/indigo): "👉 Planifier un appel de 15 min" → opens Calendly modal
  - Secondary (outlined): "✉️ Décrire ton besoin" → opens contact form modal

**Visual:** Subtle gradient or pattern background for depth

### 2. Ce que tu gagnes (Benefits)

**Layout:** Three-column grid (stacks mobile)

**Cards:**
- Icon (clock, shield/check, chart) - simple SVG/Lucide React
- Bold title: "Du temps", "De la fiabilité", "De la visibilité"
- Supporting text (muted)
- Subtle borders/light background (zinc-50/100), generous padding

### 3. Services

**Layout:** Three-column grid with prominent cards

**Cards:**
- Number badge (1, 2, 3) in top corner
- Title: "Automatisation de process", "Données & pilotage (KPI)", "Solutions techniques sur mesure"
- Description from activite.md
- Italic "Objectif:" text highlighted (accent color or weight)
- More elevation/shadow than benefits
- Hover effect: subtle scale or shadow increase

### 4. Comment on bosse (Process)

**Layout:** Horizontal timeline/stepper (desktop), vertical stack (mobile)

**Steps (1-5):**
- Numbered circle
- Bold step name
- Description text
- Visual connector lines (gray/zinc)
- Modern stepped design (not just boxes)

### 5. Exemples de cas d'usage

**Layout:** List-based, light background section (zinc-50)

**Items:**
- Five bullet points
- Arrow (→) symbols between workflow steps
- Larger text than body copy
- Alternating row backgrounds for scanning

### 6. Stack & compatibilité

**Layout:** Badge/pill layout, wrapped row

**Content:**
- Introduction text above
- Four badges: "Notion", "Make / Zapier / n8n", "Solutions cloud", "Programmation"
- Each with icon (database, workflow, cloud, code)
- Pill-shaped with light background and border

### 7. FAQ

**Component:** Accordion

**Questions (4 total):**
- Tu travailles uniquement en remote ?
- Tu peux reprendre une automatisation existante ?
- Tu fais "no-code" ou "code" ?
- Tu livres de la doc ?

**Behavior:**
- Collapsed by default
- Smooth expand animation
- Plus/minus or chevron icon rotation
- Alternating subtle backgrounds

### 8. Final CTA Section

**Content:**
- Question: "Tu veux automatiser un truc qui te fait perdre du temps chaque semaine?"
- Same two CTA buttons as hero
- Different background (gradient/color) for attention

### 9. Footer

**Layout:** Centered, simple

**Content:**
- CloudFaktory branding
- Links: Mentions légales, Politique de confidentialité
- Copyright: "© 2026 CloudFaktory"
- Small text, muted colors

## Modals

### Calendly Modal
- Opens on "Planifier" button click
- Embeds Calendly iframe: `https://calendly.com/zerzourishem/rdv-de-15-minutes`
- Close button, backdrop click closes
- Centered, responsive width

### Contact Form Modal
- Opens on "Décrire ton besoin" button click
- Fields: Nom, Email, Entreprise, Ton besoin (textarea)
- Submit button
- Text: "Pas de spam. Juste une réponse claire."
- Form service integration (Web3Forms or Formspree)
- Client-side validation
- Success/error states

## Technical Details

- **Framework:** Next.js 16 App Router
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React (modern, minimal)
- **Font:** Geist Sans (already configured)
- **Form Service:** Web3Forms or Formspree (placeholder email, update later)
- **Components:** Reusable Button, Modal, Card, Accordion components
- **Responsive:** Mobile-first, breakpoints at sm/md/lg
- **Dark Mode:** Support existing dark mode classes

## Content Language

- All UI text in French
- Tone: Direct, friendly ("tu" form), professional
- Copy directly from activite.md where specified
