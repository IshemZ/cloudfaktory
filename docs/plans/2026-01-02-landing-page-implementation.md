# CloudFaktory Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a modern, minimal landing page for CloudFaktory with hero section, benefits, services, process timeline, use cases, stack, FAQ, and modals for Calendly integration and contact form.

**Architecture:** Single-page Next.js App Router application with reusable React components (Button, Modal, Card, Accordion). Tailwind CSS v4 for styling, Lucide React for icons, Web3Forms for contact form handling. French language content throughout.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Lucide React, Web3Forms

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install lucide-react**

```bash
npm install lucide-react
```

Expected: Package installed successfully

**Step 2: Verify installation**

```bash
npm list lucide-react
```

Expected: Shows lucide-react version

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install lucide-react for icons"
```

---

## Task 2: Create Button Component

**Files:**
- Create: `app/components/Button.tsx`

**Step 1: Create components directory**

```bash
mkdir -p app/components
```

**Step 2: Create Button component**

Create `app/components/Button.tsx`:

```typescript
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-medium transition-colors md:w-auto md:min-w-[158px]';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'border border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Step 3: Test by importing in page**

Add temporary import to `app/page.tsx` to verify no TypeScript errors:

```typescript
import { Button } from './components/Button';
```

**Step 4: Run dev server and check for errors**

```bash
npm run dev
```

Expected: No compilation errors, dev server starts successfully

**Step 5: Commit**

```bash
git add app/components/Button.tsx
git commit -m "feat: add reusable Button component with primary/secondary variants"
```

---

## Task 3: Create Modal Component

**Files:**
- Create: `app/components/Modal.tsx`

**Step 1: Create Modal component**

Create `app/components/Modal.tsx`:

```typescript
'use client';

import { X } from 'lucide-react';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-white dark:bg-zinc-900 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="ml-auto p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Run dev server and check for errors**

```bash
npm run dev
```

Expected: No compilation errors

**Step 3: Commit**

```bash
git add app/components/Modal.tsx
git commit -m "feat: add Modal component with backdrop and close functionality"
```

---

## Task 4: Create Card Component

**Files:**
- Create: `app/components/Card.tsx`

**Step 1: Create Card component**

Create `app/components/Card.tsx`:

```typescript
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'benefit' | 'service';
  className?: string;
}

export function Card({ children, variant = 'benefit', className = '' }: CardProps) {
  const baseStyles = 'rounded-lg p-6';

  const variantStyles = {
    benefit: 'border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900',
    service: 'border border-zinc-200 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-900'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
```

**Step 2: Run dev server and check for errors**

```bash
npm run dev
```

Expected: No compilation errors

**Step 3: Commit**

```bash
git add app/components/Card.tsx
git commit -m "feat: add Card component with benefit/service variants"
```

---

## Task 5: Create Accordion Component

**Files:**
- Create: `app/components/Accordion.tsx`

**Step 1: Create Accordion component**

Create `app/components/Accordion.tsx`:

```typescript
'use client';

import { ChevronDown } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-zinc-600 dark:text-zinc-400">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
```

**Step 2: Run dev server and check for errors**

```bash
npm run dev
```

Expected: No compilation errors

**Step 3: Commit**

```bash
git add app/components/Accordion.tsx
git commit -m "feat: add Accordion component with smooth animations"
```

---

## Task 6: Update Page Metadata

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update metadata in layout**

Replace the metadata export in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "CloudFaktory — Automatisation & Data pour TPE/PME",
  description: "J'automatise tes process et je rends tes données actionnables. Workflows automatiques + tableaux de bord clairs, 100% remote.",
};
```

**Step 2: Verify in browser**

```bash
npm run dev
```

Open http://localhost:3000 and check browser tab title

Expected: Shows "CloudFaktory — Automatisation & Data pour TPE/PME"

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update page metadata with CloudFaktory branding"
```

---

## Task 7: Build Hero Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace page.tsx with Hero section**

Replace entire content of `app/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            CloudFaktory — j'automatise tes process et je rends tes données actionnables.
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Tu es une TPE/PME et tu perds du temps sur des tâches répétitives, des fichiers dispersés, ou des relances manuelles ?
            <br />
            Je transforme ça en <strong>workflows automatiques</strong> + <strong>tableaux de bord clairs</strong>, <strong>100% remote</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button onClick={() => setIsCalendlyOpen(true)}>
              👉 Planifier un appel de 15 min
            </Button>
            <Button variant="secondary" onClick={() => setIsContactOpen(true)}>
              ✉️ Décrire ton besoin
            </Button>
          </div>
        </div>
      </section>

      {/* Modals - Placeholders for now */}
      <Modal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} title="Planifier un appel">
        <p>Calendly integration coming next...</p>
      </Modal>

      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Décrire ton besoin">
        <p>Contact form coming next...</p>
      </Modal>
    </div>
  );
}
```

**Step 2: Test in browser**

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- Hero section displays correctly
- Buttons open modals
- Modals close on X button and backdrop click

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: implement Hero section with CTA buttons and modal placeholders"
```

---

## Task 8: Add Calendly Modal Content

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update Calendly modal content**

Replace the Calendly Modal section in `app/page.tsx`:

```typescript
<Modal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)}>
  <iframe
    src="https://calendly.com/zerzourishem/rdv-de-15-minutes"
    width="100%"
    height="700"
    frameBorder="0"
    title="Planifier un appel de 15 minutes"
  ></iframe>
</Modal>
```

**Step 2: Test in browser**

Click "Planifier un appel de 15 min" button

Expected: Calendly embed loads in modal

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: integrate Calendly embed in modal"
```

---

## Task 9: Build Contact Form with Web3Forms

**Files:**
- Create: `app/components/ContactForm.tsx`

**Step 1: Create ContactForm component**

Create `app/components/ContactForm.tsx`:

```typescript
'use client';

import { FormEvent, useState } from 'react';
import { Button } from './Button';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms access key - PLACEHOLDER, update with real key
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Message envoyé !
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Je vous répondrai sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium mb-2">
          Nom *
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="entreprise" className="block text-sm font-medium mb-2">
          Entreprise *
        </label>
        <input
          type="text"
          id="entreprise"
          name="entreprise"
          required
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="besoin" className="block text-sm font-medium mb-2">
          Ton besoin *
        </label>
        <textarea
          id="besoin"
          name="besoin"
          required
          rows={5}
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </Button>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
        Pas de spam. Juste une réponse claire.
      </p>
    </form>
  );
}
```

**Step 2: Import ContactForm in page.tsx**

Update the contact modal in `app/page.tsx`:

```typescript
import { ContactForm } from './components/ContactForm';

// In the modal section:
<Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Décrire ton besoin">
  <ContactForm />
</Modal>
```

**Step 3: Test in browser**

Click "Décrire ton besoin" button and verify form displays

Expected: Form shows with all fields, validation works

**Step 4: Commit**

```bash
git add app/components/ContactForm.tsx app/page.tsx
git commit -m "feat: add contact form with Web3Forms integration"
```

---

## Task 10: Build Benefits Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Benefits section**

Add after Hero section in `app/page.tsx`:

```typescript
import { Clock, Shield, TrendingUp } from 'lucide-react';
import { Card } from './components/Card';

// Add after Hero section, before modals:

{/* Benefits Section */}
<section className="py-20 px-6 bg-white dark:bg-zinc-950">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Ce que tu gagnes
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <Card variant="benefit">
        <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-bold mb-2">Du temps</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Moins de copier-coller, moins de tâches manuelles
        </p>
      </Card>

      <Card variant="benefit">
        <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-bold mb-2">De la fiabilité</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Moins d'erreurs, des process reproductibles
        </p>
      </Card>

      <Card variant="benefit">
        <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-bold mb-2">De la visibilité</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Des KPI simples pour piloter sans prise de tête
        </p>
      </Card>
    </div>
  </div>
</section>
```

**Step 2: Test in browser**

Scroll down to see Benefits section

Expected: Three cards in a grid with icons

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Benefits section with three value propositions"
```

---

## Task 11: Build Services Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Services section**

Add after Benefits section:

```typescript
{/* Services Section */}
<section className="py-20 px-6 bg-zinc-50 dark:bg-black">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Services
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <Card variant="service" className="relative">
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          1
        </div>
        <h3 className="text-xl font-bold mb-4">Automatisation de process</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Relances, synchronisation d'outils, génération automatique de documents, alertes, onboarding, reporting…
        </p>
        <p className="text-sm italic text-blue-600 dark:text-blue-400">
          👉 Objectif : que ça tourne tout seul.
        </p>
      </Card>

      <Card variant="service" className="relative">
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          2
        </div>
        <h3 className="text-xl font-bold mb-4">Données & pilotage (KPI)</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Nettoyage, consolidation, KPI, dashboards, reporting automatique.
        </p>
        <p className="text-sm italic text-blue-600 dark:text-blue-400">
          👉 Objectif : des chiffres fiables pour décider vite.
        </p>
      </Card>

      <Card variant="service" className="relative">
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          3
        </div>
        <h3 className="text-xl font-bold mb-4">Solutions techniques sur mesure</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Intégrations API, scripts, connecteurs, cloud, petites apps internes.
        </p>
        <p className="text-sm italic text-blue-600 dark:text-blue-400">
          👉 Objectif : une solution simple, maintenable et documentée.
        </p>
      </Card>
    </div>
  </div>
</section>
```

**Step 2: Test in browser**

Expected: Three service cards with numbered badges and hover effects

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Services section with three offerings"
```

---

## Task 12: Build Process Timeline Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Process section**

Add after Services section:

```typescript
{/* Process Section */}
<section className="py-20 px-6 bg-white dark:bg-zinc-950">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Comment on bosse
    </h2>

    <div className="grid md:grid-cols-5 gap-4 md:gap-2">
      {[
        { num: 1, title: 'Appel découverte (15 min)', desc: 'On clarifie le besoin et le "pourquoi"' },
        { num: 2, title: 'Mini audit', desc: 'Je repère les quick wins et les contraintes' },
        { num: 3, title: 'Prototype', desc: 'Une première version rapide et testable' },
        { num: 4, title: 'Déploiement', desc: 'Sécurisation, tests, documentation' },
        { num: 5, title: 'Transfert', desc: 'Tu gardes la main (et je peux assurer le suivi si tu veux)' },
      ].map((step, index) => (
        <div key={step.num} className="relative flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4 relative z-10">
            {step.num}
          </div>
          {index < 4 && (
            <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-zinc-300 dark:bg-zinc-700" />
          )}
          <h3 className="font-bold mb-2 text-sm md:text-base">{step.title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Test in browser**

Expected: Five-step timeline with connecting lines on desktop, stacked on mobile

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Process timeline section with 5 steps"
```

---

## Task 13: Build Use Cases Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Use Cases section**

Add after Process section:

```typescript
{/* Use Cases Section */}
<section className="py-20 px-6 bg-zinc-50 dark:bg-black">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Exemples de cas d'usage (TPE/PME)
    </h2>

    <div className="space-y-4">
      {[
        'Leads → qualification → création automatique dans Notion/CRM → relance',
        'Devis / factures → génération + envoi + suivi + alertes de retard',
        'Reporting hebdo → collecte des données → mise en forme → envoi automatique',
        'Synchronisation entre outils (Notion, Google Workspace, Slack/Teams, etc.)',
        'Automatisation d\'onboarding : checklists, accès, documents, notifications',
      ].map((useCase, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-100 dark:bg-zinc-950'}`}
        >
          <p className="text-lg">{useCase}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Test in browser**

Expected: Five use cases with alternating backgrounds

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Use Cases section with 5 examples"
```

---

## Task 14: Build Stack Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Stack section**

Add after Use Cases section:

```typescript
import { Database, Workflow, Cloud, Code } from 'lucide-react';

// Add section:
{/* Stack Section */}
<section className="py-20 px-6 bg-white dark:bg-zinc-950">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      Stack & compatibilité
    </h2>

    <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-8">
      Je m'adapte à ton existant et je privilégie les solutions simples :
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {[
        { icon: Database, label: 'Notion' },
        { icon: Workflow, label: 'Make / Zapier / n8n' },
        { icon: Cloud, label: 'Solutions cloud' },
        { icon: Code, label: 'Programmation' },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full bg-white dark:bg-zinc-900"
          >
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-medium">{item.label}</span>
          </div>
        );
      })}
    </div>
  </div>
</section>
```

**Step 2: Test in browser**

Expected: Four pill badges with icons in a wrapped row

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Stack & compatibilité section with technology badges"
```

---

## Task 15: Build FAQ Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add FAQ section**

Add after Stack section:

```typescript
import { Accordion } from './components/Accordion';

// Add section:
{/* FAQ Section */}
<section className="py-20 px-6 bg-zinc-50 dark:bg-black">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      FAQ
    </h2>

    <Accordion
      items={[
        {
          question: 'Tu travailles uniquement en remote ?',
          answer: 'Oui, 100% à distance.'
        },
        {
          question: 'Tu peux reprendre une automatisation existante ?',
          answer: 'Oui : audit, correction, optimisation, documentation.'
        },
        {
          question: 'Tu fais "no-code" ou "code" ?',
          answer: 'Les deux. Je choisis l\'approche la plus simple et robuste pour ton cas.'
        },
        {
          question: 'Tu livres de la doc ?',
          answer: 'Oui. Objectif : que tu sois autonome et que ce soit maintenable.'
        }
      ]}
    />
  </div>
</section>
```

**Step 2: Test in browser**

Click FAQ items to expand/collapse

Expected: Smooth accordion animations, only one open at a time

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add FAQ section with accordion component"
```

---

## Task 16: Build Final CTA Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Final CTA section**

Add after FAQ section:

```typescript
{/* Final CTA Section */}
<section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
  <div className="max-w-3xl mx-auto text-center space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold">
      Tu veux automatiser un truc qui te fait perdre du temps chaque semaine ?
    </h2>

    <p className="text-xl opacity-90">
      Planifie un appel de 15 min ou envoie ton besoin
      <br />
      <span className="text-sm">(réponse sous 24h ouvrées)</span>
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
      <button
        onClick={() => setIsCalendlyOpen(true)}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-medium bg-white text-blue-600 hover:bg-zinc-100 transition-colors md:w-auto md:min-w-[158px]"
      >
        👉 Planifier un appel de 15 min
      </button>
      <button
        onClick={() => setIsContactOpen(true)}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-colors md:w-auto md:min-w-[158px]"
      >
        ✉️ Décrire ton besoin
      </button>
    </div>
  </div>
</section>
```

**Step 2: Test in browser**

Expected: Blue gradient section with white CTAs that open modals

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add final CTA section with gradient background"
```

---

## Task 17: Build Footer

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Footer section**

Add after Final CTA section, before modals:

```typescript
{/* Footer */}
<footer className="py-12 px-6 bg-zinc-900 text-zinc-400">
  <div className="max-w-6xl mx-auto text-center space-y-4">
    <div className="text-xl font-bold text-white mb-4">CloudFaktory</div>

    <div className="flex flex-wrap justify-center gap-6 text-sm">
      <a href="#" className="hover:text-white transition-colors">
        Mentions légales
      </a>
      <a href="#" className="hover:text-white transition-colors">
        Politique de confidentialité
      </a>
    </div>

    <p className="text-sm pt-4">
      © 2026 CloudFaktory
    </p>
  </div>
</footer>
```

**Step 2: Test in browser**

Expected: Dark footer at bottom with links and copyright

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add footer with legal links and copyright"
```

---

## Task 18: Final Polish and Testing

**Files:**
- Modify: `app/page.tsx` (if needed)

**Step 1: Full page scroll test**

Open http://localhost:3000 and scroll through entire page

Verify:
- All sections display correctly
- Mobile responsive (test with DevTools)
- Dark mode works (toggle system preference)
- All modals open/close properly
- Accordion expands/collapses smoothly

**Step 2: Fix any visual issues**

Make any necessary adjustments for spacing, alignment, or responsiveness

**Step 3: Build for production**

```bash
npm run build
```

Expected: Build completes successfully with no errors

**Step 4: Test production build**

```bash
npm start
```

Expected: Production server runs without errors

**Step 5: Final commit**

```bash
git add .
git commit -m "polish: final adjustments and production build verification"
```

---

## Task 19: Add Web3Forms Access Key Note

**Files:**
- Create: `docs/WEB3FORMS_SETUP.md`

**Step 1: Create setup documentation**

Create `docs/WEB3FORMS_SETUP.md`:

```markdown
# Web3Forms Setup

## Get Your Access Key

1. Go to https://web3forms.com
2. Sign up for a free account
3. Create a new form
4. Copy your access key

## Update the Code

Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `app/components/ContactForm.tsx` with your actual access key:

```typescript
formData.append('access_key', 'your-actual-access-key-here');
```

## Test the Form

1. Submit a test message through the contact form
2. Check your email for the submission
3. Verify all fields are being sent correctly

## Email Configuration

The form will send submissions to the email address you configured in your Web3Forms account.
```

**Step 2: Commit**

```bash
git add docs/WEB3FORMS_SETUP.md
git commit -m "docs: add Web3Forms setup instructions"
```

---

## Post-Implementation Notes

**What's Complete:**
- ✅ All sections (Hero, Benefits, Services, Process, Use Cases, Stack, FAQ, CTA, Footer)
- ✅ Reusable components (Button, Modal, Card, Accordion)
- ✅ Calendly integration
- ✅ Contact form with Web3Forms (placeholder key)
- ✅ Responsive design
- ✅ Dark mode support
- ✅ French language content

**Next Steps (User Action Required):**
1. Sign up at https://web3forms.com and get access key
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `app/components/ContactForm.tsx`
3. Test contact form submission
4. Add actual content for Mentions légales and Politique de confidentialité pages
5. Deploy to Vercel or preferred hosting

**Optional Enhancements:**
- Add smooth scroll behavior for navigation
- Add analytics (Google Analytics, Plausible, etc.)
- Add SEO metadata with Open Graph tags
- Add animations on scroll (framer-motion)
- Create separate pages for legal content
