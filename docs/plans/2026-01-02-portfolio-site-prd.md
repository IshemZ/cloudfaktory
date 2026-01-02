# PRD : CloudFaktory - Site Portfolio Professionnel

**Date de création :** 2026-01-02
**Version :** 1.0
**Statut :** Validé

---

## Table des matières

1. [Vision Globale](#1-vision-globale)
2. [Objectifs du Produit](#2-objectifs-du-produit)
3. [Architecture du Site](#3-architecture-du-site)
4. [Spécifications par Page](#4-spécifications-par-page)
   - [4.1 Navigation & Layout Global](#41-navigation--layout-global)
   - [4.2 Page Accueil (/)](#42-page-accueil-)
   - [4.3 Page Projets (/projets)](#43-page-projets-projets)
   - [4.4 Page Qui suis-je (/qui-suis-je)](#44-page-qui-suis-je-qui-suis-je)
   - [4.5 Page Blog (/blog)](#45-page-blog-blog)
   - [4.6 Page Témoignages (/temoignages)](#46-page-témoignages-temoignages)
5. [Design System](#5-design-system)
6. [Aspects Techniques](#6-aspects-techniques)
7. [SEO & Performance](#7-seo--performance)
8. [Plan de Déploiement](#8-plan-de-déploiement)
9. [Roadmap d'Implémentation](#9-roadmap-dimplémentation)

---

## 1. Vision Globale

### Contexte

CloudFaktory évolue d'une landing page commerciale simple vers un **site portfolio professionnel complet**. L'objectif est de construire une marque personnelle forte en tant qu'expert en automatisation et data pour TPE/PME françaises.

### Problème résolu

Actuellement, le site ne montre pas :
- Les réalisations concrètes (projets passés)
- L'expertise et le parcours du fondateur
- Du contenu démontrant la maîtrise technique (blog)
- Les preuves sociales (témoignages clients)

Ces éléments sont essentiels pour :
- Établir la crédibilité
- Rassurer les prospects
- Améliorer le référencement naturel (SEO)
- Construire une audience qualifiée

### Solution

Un site multi-pages avec :
- **Landing page existante** (point d'entrée commercial)
- **Portfolio de projets** (preuves de réalisations)
- **Page personnelle** (humanisation, expertise)
- **Blog technique** (démonstration d'expertise, SEO)
- **Témoignages clients** (preuve sociale)

---

## 2. Objectifs du Produit

### Objectif principal
**Construire la marque personnelle de Shem Zerzouri** comme expert reconnu en automatisation et data pour TPE/PME.

### Objectifs secondaires
1. **Crédibilité** : Montrer des réalisations concrètes et mesurables
2. **Conversion** : Transformer plus de visiteurs en leads qualifiés
3. **SEO** : Attirer du trafic organique via contenu de qualité
4. **Autorité** : Se positionner comme référence dans le domaine
5. **Autonomie** : Système de contenu simple à maintenir (Markdown + Git)

### Métriques de succès
- Taux de conversion landing page (baseline actuel → +20%)
- Trafic organique blog (+50 visiteurs/mois après 6 mois)
- Nombre de demandes de contact qualifiées (+30%)
- Lighthouse scores > 90 (performance, SEO, accessibilité)
- Taux de rebond < 60%

---

## 3. Architecture du Site

### Structure des pages

```
/ (Home - landing page)
├── /projets (Portfolio)
├── /qui-suis-je (À propos)
├── /blog (Index articles)
│   └── /blog/[slug] (Article individuel)
├── /temoignages (Avis clients)
└── /contact (optionnel - actuellement modal)
```

### Navigation

**Header global** (toutes les pages) :
```
[Logo CloudFaktory]    Accueil • Projets • Qui suis-je • Blog • Témoignages    [Planifier un appel]
```

- Position : Sticky/fixed (reste visible au scroll)
- Responsive : Menu burger sur mobile
- Style : Transparent sur hero home, fond blanc ailleurs
- CTA persistant : "Planifier un appel" toujours accessible

**Footer global** :
- Liens sitemap : Toutes les pages
- Réseaux sociaux : LinkedIn (principal)
- Mentions légales • Politique de confidentialité
- Copyright © 2026 CloudFaktory

---

## 4. Spécifications par Page

### 4.1 Navigation & Layout Global

#### Header

**Desktop (>768px) :**
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] Accueil • Projets • Qui suis-je • Blog • Témoignages │ [Planifier un appel] │
└─────────────────────────────────────────────────────────────┘
```

**Mobile (<768px) :**
```
┌──────────────────────┐
│ [Logo]      [☰ Menu] │
└──────────────────────┘
```

**Comportement :**
- Scroll : Header devient opaque avec légère ombre
- Active state : Lien page actuelle souligné ou couleur différente
- Hover : Transition douce sur liens et bouton CTA

**Composant technique :**
```tsx
<Header>
  <Logo />
  <Navigation items={navItems} />
  <CTAButton />
  <MobileMenu />
</Header>
```

#### Footer

**Structure :**
```
┌────────────────────────────────────────┐
│          CloudFaktory Logo             │
│                                        │
│ Accueil • Projets • Qui suis-je •      │
│ Blog • Témoignages                     │
│                                        │
│ [LinkedIn icon]                        │
│                                        │
│ Mentions légales • Confidentialité     │
│                                        │
│ © 2026 CloudFaktory                    │
└────────────────────────────────────────┘
```

---

### 4.2 Page Accueil (/)

**Statut :** Déjà implémentée, conservée telle quelle.

**Rôle :** Point d'entrée commercial principal pour nouveaux visiteurs.

**Modifications mineures :**
- Ajout du header global avec navigation
- Ajout footer enrichi
- Liens internes vers `/projets` et `/qui-suis-je` dans sections appropriées

**Exemple d'ajout :**
- Section "Services" → CTA "Voir mes projets réalisés" (lien vers `/projets`)
- Section finale → CTA alternatif "En savoir plus sur mon parcours" (lien vers `/qui-suis-je`)

---

### 4.3 Page Projets (/projets)

#### Objectif
Démontrer l'expertise concrète via des réalisations tangibles et mesurables.

#### Structure visuelle

**1. Header de page**
```
┌────────────────────────────────────────────────┐
│          Projets réalisés                      │
│                                                │
│ Des automatisations et solutions data qui ont  │
│ fait gagner du temps et de l'argent à mes      │
│ clients                                        │
│                                                │
│ [Tous] [Automatisation] [Data] [Technique]    │
└────────────────────────────────────────────────┘
```

**2. Grille de projets**

Layout : Grid 2 colonnes (desktop), 1 colonne (mobile)

**Carte projet :**
```
┌─────────────────────────────────────┐
│ [Badge Catégorie]                   │
│                                     │
│ [Thumbnail image floue/stylisée]    │
│                                     │
│ Automatisation complète du          │
│ processus de facturation            │
│                                     │
│ PME e-commerce, 15 personnes        │
│                                     │
│ 💡 −12h/semaine de travail manuel   │
│                                     │
│ [Make] [Notion] [API]               │
│                                     │
│ [Voir le projet →]                  │
└─────────────────────────────────────┘
```

**Éléments de la carte :**
- **Badge catégorie** : Couleur selon type
  - Automatisation → Bleu
  - Data & KPI → Vert
  - Technique → Violet
- **Thumbnail** : Image 16:9, aspect-ratio fixe
- **Titre projet** : Font-bold, 1-2 lignes max
- **Client** : Anonymisé ou nom si autorisation
- **Résultat clé** : 1 métrique impactante avec icône
- **Stack technique** : Badges horizontaux
- **CTA** : "Voir le projet" déclenche modal

**3. Modal détail projet**

S'ouvre au clic sur carte, overlay sombre, contenu centré scrollable.

**Structure modal :**
```
┌──────────────────────────────────────────┐
│ [X Fermer]                               │
│                                          │
│ Automatisation complète du processus     │
│ de facturation                           │
│                                          │
│ [Badge Automatisation]                   │
│                                          │
│ ─────────────────────────────────────    │
│                                          │
│ 📋 Contexte                              │
│ L'entreprise générait 50+ factures/mois  │
│ manuellement dans Excel, avec relances   │
│ par email individuelles. Erreurs         │
│ fréquentes, retards de paiement...       │
│                                          │
│ 🛠️ Solution                              │
│ Workflow Make automatisé :               │
│ 1. Détection nouveau deal Notion         │
│ 2. Génération PDF facture (template)    │
│ 3. Envoi email automatique               │
│ 4. Relances J+7, J+15, J+30              │
│ 5. Mise à jour statut paiement           │
│                                          │
│ [Diagramme workflow si disponible]       │
│                                          │
│ 📊 Résultats                             │
│ • −12h/semaine de travail manuel         │
│ • Taux d'erreur : 8% → 0%                │
│ • Délai de paiement moyen : −18 jours    │
│ • ROI : 6x en 4 mois                     │
│                                          │
│ [Captures d'écran interface]             │
│                                          │
│ 💬 Témoignage client                     │
│ "Nos factures partent maintenant toutes  │
│ seules, c'est magique. On a divisé par   │
│ 2 nos retards de paiement."              │
│ — Pierre, Fondateur                      │
│                                          │
│ 🔧 Stack technique                       │
│ Make • Notion • API Stripe • SendGrid    │
│                                          │
└──────────────────────────────────────────┘
```

**Interactions :**
- Clic hors modal → Ferme
- Touche Escape → Ferme
- Scroll interne si contenu long
- Lazy loading des images

#### Format des données

**Fichier `/data/projects.ts` :**

```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'automatisation' | 'data' | 'technique';
  client: string; // Anonymisé
  resultHighlight: string; // Métrique clé
  thumbnail: string; // URL image
  stack: string[]; // ["Make", "Notion", "API"]

  // Détails (pour modal)
  context: string; // Markdown
  solution: string; // Markdown
  results: string[]; // Array de bullet points
  screenshots?: string[]; // URLs
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  diagram?: string; // URL schéma workflow
}

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'automatisation-facturation-pme',
    title: 'Automatisation complète du processus de facturation',
    category: 'automatisation',
    client: 'PME e-commerce, 15 personnes',
    resultHighlight: '−12h/semaine de travail manuel',
    thumbnail: '/images/projects/facturation-thumb.jpg',
    stack: ['Make', 'Notion', 'API Stripe', 'SendGrid'],
    context: `L'entreprise générait 50+ factures/mois manuellement...`,
    solution: `Workflow Make automatisé en 5 étapes...`,
    results: [
      '−12h/semaine de travail manuel',
      'Taux d\'erreur : 8% → 0%',
      'Délai de paiement moyen : −18 jours',
      'ROI : 6x en 4 mois'
    ],
    testimonial: {
      quote: 'Nos factures partent maintenant toutes seules...',
      author: 'Pierre',
      role: 'Fondateur'
    }
  },
  // ... autres projets
];
```

#### Filtres par catégorie

**Comportement :**
- Par défaut : Tous les projets affichés
- Clic sur "Automatisation" → Filtre projets de cette catégorie
- Badge actif : Couleur pleine, autres : outline
- Transition douce lors du filtrage (fade in/out)

**Implémentation :**
```tsx
const [filter, setFilter] = useState<Category | 'all'>('all');
const filteredProjects = filter === 'all'
  ? projects
  : projects.filter(p => p.category === filter);
```

---

### 4.4 Page Qui suis-je (/qui-suis-je)

#### Objectif
Humaniser la marque, établir la crédibilité, créer une connexion personnelle avec les prospects.

#### Structure de la page

**1. Hero personnel**

```
┌────────────────────────────────────────┐
│                                        │
│     ┌──────────┐                       │
│     │          │  Shem Zerzouri        │
│     │  Photo   │                       │
│     │          │  Expert automatisation│
│     └──────────┘  & data pour TPE/PME │
│                                        │
│ J'aide les petites entreprises à      │
│ automatiser ce qui les ralentit et à  │
│ piloter avec des données fiables.     │
│ 100% remote, 100% pragmatique.        │
│                                        │
└────────────────────────────────────────┘
```

**Éléments :**
- Photo professionnelle (portrait 400x400px, rond ou carré arrondi)
- Titre/nom : Font-bold, large
- Baseline : 2-3 lignes, ton conversationnel

**2. Parcours (storytelling)**

Section narrative divisée en 3 blocs :

```
┌─────────────────────────────────────────────┐
│ D'où je viens                               │
│ ─────────────────────────                   │
│                                             │
│ [Contenu narratif 150-200 mots]            │
│ Formation, premières expériences, comment   │
│ j'ai découvert l'automatisation...          │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Pourquoi CloudFaktory                       │
│ ─────────────────────────                   │
│                                             │
│ [Contenu narratif 150-200 mots]            │
│ Motivation à créer ce service, vision,      │
│ ce que je veux accomplir...                 │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Ce qui me différencie                       │
│ ─────────────────────────                   │
│                                             │
│ [Contenu narratif 150-200 mots]            │
│ Approche unique, valeurs (simplicité,       │
│ autonomisation client, pragmatisme)...      │
│                                             │
└─────────────────────────────────────────────┘
```

**Ton :** Conversationnel, tutoiement (cohérent avec reste du site), authentique, pas corporate.

**3. Compétences & expertise**

Grille 3 colonnes (desktop), 1 colonne (mobile) :

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [Icon Auto]  │  │ [Icon Data]  │  │ [Icon Tech]  │
│              │  │              │  │              │
│Automatisation│  │ Data & KPI   │  │   Technique  │
│              │  │              │  │              │
│ • Make       │  │ • Dashboards │  │ • APIs       │
│ • Zapier     │  │ • KPI        │  │ • Scripts    │
│ • n8n        │  │ • Reporting  │  │ • Cloud      │
│ • Workflows  │  │ • Nettoyage  │  │ • Intégrat.  │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────────────────────────────────────┐
│ Outils maîtrisés                             │
│                                              │
│ [Notion] [Make] [Zapier] [n8n]               │
│ [Google Workspace] [Cloud] [APIs]            │
└──────────────────────────────────────────────┘
```

**4. Chiffres clés**

Section compacte, 4 colonnes (2 sur mobile) :

```
┌──────────────────────────────────────────────┐
│  25+          150h+        100%       3+     │
│  Projets      Économisées  Satisf.   Ans    │
│  réalisés     /semaine     clients   d'exp.  │
└──────────────────────────────────────────────┘
```

**Note :** Chiffres à adapter selon réalité. Si pas disponibles, section optionnelle.

**5. CTA final**

```
┌────────────────────────────────────────┐
│   Envie de discuter de ton projet ?    │
│                                        │
│ [Planifier un appel] [Voir mes projets]│
└────────────────────────────────────────┘
```

#### Contenu à fournir

**Textes nécessaires :**
- Bio hero (2-3 lignes)
- Parcours "D'où je viens" (150-200 mots)
- Parcours "Pourquoi CloudFaktory" (150-200 mots)
- Parcours "Ce qui me différencie" (150-200 mots)
- Photo professionnelle (haute résolution)
- Chiffres clés (si disponibles)

---

### 4.5 Page Blog (/blog)

#### Objectif
Démontrer l'expertise, améliorer le SEO, créer une ressource utile pour TPE/PME.

#### Page index /blog

**1. Header de page**

```
┌────────────────────────────────────────┐
│        Blog & Ressources               │
│                                        │
│ Guides pratiques, retours d'expérience │
│ et astuces pour automatiser et piloter │
│ ton business                           │
│                                        │
│ [🔍 Rechercher...] (Phase 2)           │
└────────────────────────────────────────┘
```

**2. Filtres par catégorie**

```
[Tous] [Automatisation] [Data] [Notion] [Tutoriel] [Retour d'expérience]
```

**3. Grille d'articles**

Layout : Grid 3 colonnes (desktop), 2 (tablet), 1 (mobile)

**Carte article :**
```
┌──────────────────────────────────┐
│                                  │
│   [Image couverture 16:9]        │
│                                  │
│ [Badge Automatisation]           │
│                                  │
│ Comment automatiser Notion       │
│ avec Make                        │
│                                  │
│ Guide pas-à-pas pour connecter   │
│ Notion à Make et créer vos       │
│ premiers workflows automatiques  │
│                                  │
│ 15 jan 2026 • 8 min de lecture   │
│                                  │
│ [Lire l'article →]               │
└──────────────────────────────────┘
```

**Éléments :**
- Image couverture (aspect-ratio 16:9)
- Badge catégorie (couleur selon type)
- Titre (font-bold, 2 lignes max)
- Excerpt (3 lignes max, text-ellipsis)
- Métadonnées : Date (format FR) + temps de lecture
- CTA "Lire l'article"

**Tri :**
- Par défaut : Articles du plus récent au plus ancien
- Filtres : Par catégorie (même système que projets)

#### Page article /blog/[slug]

**Structure complète d'un article :**

```
┌────────────────────────────────────────────┐
│                                            │
│     [Image couverture pleine largeur]      │
│                                            │
│ [Badge Automatisation]                     │
│                                            │
│ Comment automatiser Notion avec Make       │
│                                            │
│ 15 janvier 2026 • 8 min de lecture         │
│                                            │
├────────────────────────────────────────────┤
│                                            │
│ ┌─────────────┐  ┌──────────────────────┐ │
│ │Table des    │  │ Contenu Markdown     │ │
│ │matières     │  │                      │ │
│ │             │  │ Introduction...      │ │
│ │• Intro      │  │                      │ │
│ │• Prérequis  │  │ ## Prérequis         │ │
│ │• Config     │  │                      │ │
│ │• Workflow   │  │ Avant de commencer...│ │
│ │• Conclusion │  │                      │ │
│ │             │  │ ## Configuration     │ │
│ │             │  │                      │ │
│ │(Sidebar     │  │ ```javascript        │ │
│ │ fixe)       │  │ const config = {}    │ │
│ │             │  │ ```                  │ │
│ └─────────────┘  │                      │ │
│                  │ ![Screenshot]        │ │
│                  │                      │ │
│                  │ ## Workflow Make     │ │
│                  │                      │ │
│                  │ ...contenu...        │ │
│                  │                      │ │
│                  └──────────────────────┘ │
│                                            │
├────────────────────────────────────────────┤
│                                            │
│  Un projet d'automatisation en tête ?     │
│                                            │
│  [Planifier un appel] [Me contacter]      │
│                                            │
├────────────────────────────────────────────┤
│                                            │
│  Articles similaires                       │
│                                            │
│  [Card 1]  [Card 2]  [Card 3]              │
│                                            │
└────────────────────────────────────────────┘
```

**Éléments de l'article :**

1. **Hero article** :
   - Image couverture (1200x630px min, OG-friendly)
   - Badge catégorie
   - Titre H1
   - Date publication (format "15 janvier 2026") + temps lecture

2. **Table des matières** (desktop uniquement) :
   - Sidebar fixe à gauche
   - Auto-générée depuis H2/H3
   - Liens ancres smooth scroll
   - Highlight section active au scroll

3. **Contenu Markdown** :
   - Rendu avec typographie optimisée
   - Code blocks avec syntax highlighting
   - Images responsives (next/image)
   - Citations stylisées
   - Listes à puces/numérotées
   - Liens externes (target="_blank")

4. **CTA fin d'article** :
   - Background couleur différente
   - 2 boutons CTA

5. **Articles similaires** :
   - 3 articles de même catégorie
   - Si pas assez, articles récents
   - Format card identique à page index

#### Système Markdown

**Emplacement des fichiers :**
```
/content/blog/
├── 2026-01-15-automatiser-notion-make.md
├── 2026-01-20-kpi-pme-google-sheets.md
└── 2026-02-01-integrer-api-zapier.md
```

**Frontmatter (en-tête de chaque fichier) :**

```yaml
---
title: "Comment automatiser Notion avec Make"
slug: "automatiser-notion-make"
date: "2026-01-15"
category: "Automatisation"
excerpt: "Guide pas-à-pas pour connecter Notion à Make et créer vos premiers workflows automatiques"
coverImage: "/images/blog/notion-make.jpg"
readingTime: 8
---

Contenu Markdown ici...

## Introduction

Blablabla...

## Prérequis

...
```

**Champs frontmatter :**
- `title` : Titre H1 de l'article
- `slug` : URL finale `/blog/[slug]`
- `date` : ISO format "YYYY-MM-DD"
- `category` : Une des catégories définies
- `excerpt` : Description courte pour cards
- `coverImage` : Chemin relatif à /public
- `readingTime` : Nombre de minutes (manuel ou calculé)

**Catégories possibles :**
- Automatisation
- Data
- Notion
- Tutoriel
- Retour d'expérience
- Make/Zapier/n8n (si beaucoup d'articles spécifiques)

#### Stack technique blog

**Dépendances :**
```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "react-markdown": "^9.0.1",
    "remark-gfm": "^4.0.0",
    "rehype-highlight": "^7.0.0",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.0.0"
  }
}
```

**Fonctions utilitaires :**

```typescript
// /lib/blog.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  readingTime: number;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...data,
        content,
      } as BlogPost;
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  } as BlogPost;
}
```

**Génération pages statiques :**

```typescript
// /app/blog/[slug]/page.tsx

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}
```

#### SEO par article

**Metadata dynamique :**

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [post.coverImage],
    },
  };
}
```

**Schema.org Article :**

```json
{
  "@type": "Article",
  "headline": "Comment automatiser Notion avec Make",
  "datePublished": "2026-01-15",
  "author": {
    "@type": "Person",
    "name": "Shem Zerzouri"
  },
  "image": "/images/blog/notion-make.jpg"
}
```

---

### 4.6 Page Témoignages (/temoignages)

#### Objectif
Renforcer la crédibilité via preuves sociales authentiques.

#### Structure de la page

**1. Header de page**

```
┌────────────────────────────────────────┐
│     Ce que mes clients disent          │
│                                        │
│ Des TPE/PME qui ont automatisé leurs   │
│ process et gagné en efficacité         │
└────────────────────────────────────────┘
```

**2. Section statistiques (optionnel)**

Si données disponibles :

```
┌────────────────────────────────────────────┐
│  100%          10h/semaine      3x         │
│  Satisfaction  Temps économisé  ROI moyen  │
│  client        (moyenne)        6 mois     │
└────────────────────────────────────────────┘
```

**3. Grille de témoignages**

Layout : Grid 2 colonnes (desktop), 1 colonne (mobile)

**Carte témoignage :**

```
┌──────────────────────────────────────┐
│ ⭐⭐⭐⭐⭐                             │
│                                      │
│ "CloudFaktory a transformé notre     │
│ gestion de facturation. On est passé │
│ de processus 100% manuel à tout      │
│ automatisé en 3 semaines. Le gain de │
│ temps est immense et surtout, zéro   │
│ erreur depuis."                      │
│                                      │
│ ┌────┐                               │
│ │img │ Pierre Durand                 │
│ └────┘ Fondateur, Agence Marketing   │
│        (12 personnes)                │
│                                      │
│ 📦 Projet : Automatisation factures  │
└──────────────────────────────────────┘
```

**Éléments :**
- **Étoiles** : 5/5 visuel (icônes)
- **Citation** : Témoignage principal (3-6 lignes)
- **Avatar** : Photo client ou logo entreprise (optionnel)
- **Nom** : Prénom Nom ou initiales si anonymisation
- **Entreprise/Poste** : Contexte crédibilisant
- **Lien projet** : Badge vers projet portfolio associé (si existe)

**Variantes de longueur :**
- Témoignages courts (2-3 lignes) : Grille 3 colonnes
- Témoignages longs (5-8 lignes) : Grille 2 colonnes ou pleine largeur avec expand

**4. Call-to-action témoignage**

En bas de page :

```
┌────────────────────────────────────────┐
│   Vous avez travaillé avec moi ?       │
│   Partagez votre expérience            │
│                                        │
│        [Laisser un témoignage]         │
└────────────────────────────────────────┘
```

Lien vers :
- Google Form simple
- Ou formulaire intégré (nom, entreprise, témoignage, autorisation publication)

#### Format des données

**Fichier `/data/testimonials.ts` :**

```typescript
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  avatar?: string; // URL ou null
  rating: number; // 1-5
  projectSlug?: string; // Lien vers projet
  date: string; // ISO date
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'CloudFaktory a transformé notre gestion de facturation. On est passé de processus 100% manuel à tout automatisé en 3 semaines. Le gain de temps est immense et surtout, zéro erreur depuis.',
    author: 'Pierre Durand',
    company: 'Agence Marketing (12 personnes)',
    role: 'Fondateur',
    avatar: '/images/testimonials/pierre-d.jpg',
    rating: 5,
    projectSlug: 'automatisation-facturation-pme',
    date: '2025-12-15'
  },
  // ... autres témoignages
];
```

**Ordre d'affichage :**
- Par défaut : Du plus récent au plus ancien
- Ou : Manuellement ordonné (meilleurs en premier)

---

## 5. Design System

### 5.1 Couleurs

**Palette principale :**
```
Primary Blue:   #2563eb (blue-600)
Primary Dark:   #1e40af (blue-800)
Background:     #ffffff (white)
Background Alt: #fafafa (zinc-50)
Text Primary:   #18181b (zinc-900)
Text Secondary: #3f3f46 (zinc-700)
Text Muted:     #71717a (zinc-500)
Border:         #e4e4e7 (zinc-200)
Footer BG:      #18181b (zinc-900)
```

**Couleurs catégories :**
```
Automatisation: #2563eb (blue-600)
Data & KPI:     #16a34a (green-600)
Technique:      #9333ea (purple-600)
```

**Dégradés :**
```
Hero gradient:   from-white to-zinc-50
CTA gradient:    from-blue-600 to-blue-800
```

### 5.2 Typographie

**Fonts :**
- **Sans** : Geist Sans (déjà configuré via next/font)
- **Mono** : Geist Mono (code blocks)

**Échelle :**
```
H1:     text-4xl md:text-5xl lg:text-6xl (36-60px)
H2:     text-3xl md:text-4xl (30-36px)
H3:     text-xl md:text-2xl (20-24px)
H4:     text-lg md:text-xl (18-20px)
Body:   text-base md:text-lg (16-18px)
Small:  text-sm (14px)
```

**Poids :**
```
Titres:     font-bold (700)
Body:       font-normal (400)
Emphasis:   font-medium (500)
```

**Line-height :**
```
Titres:     leading-tight (1.25)
Body:       leading-relaxed (1.625)
```

### 5.3 Composants Réutilisables

**Existants (à conserver) :**
- `<Button>` : variant primary/secondary
- `<Card>` : variant benefit/service
- `<Modal>` : Overlay + contenu centré
- `<Accordion>` : FAQ dépliable
- `<ContactForm>` : Formulaire Web3Forms

**Nouveaux (à créer) :**

**`<Badge>` :**
```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'automatisation' | 'data' | 'technique' | 'default';
}

// Usage: <Badge variant="automatisation">Automatisation</Badge>
```

**`<PageHeader>` :**
```tsx
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode; // Pour filtres, search, etc.
}

// Usage:
<PageHeader
  title="Projets réalisés"
  subtitle="Des automatisations qui ont fait gagner..."
>
  <Filters />
</PageHeader>
```

**`<ProjectCard>` :**
```tsx
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}
```

**`<TestimonialCard>` :**
```tsx
interface TestimonialCardProps {
  testimonial: Testimonial;
}
```

**`<BlogCard>` :**
```tsx
interface BlogCardProps {
  post: BlogPost;
}
```

### 5.4 Espacement & Layout

**Sections :**
```
Padding vertical: py-20 (80px)
Padding horizontal: px-6 (24px)
```

**Containers :**
```
Content max-width: max-w-6xl mx-auto (1152px)
Blog content: max-w-4xl mx-auto (896px)
```

**Grilles :**
```
3 colonnes:  grid md:grid-cols-3 gap-8
2 colonnes:  grid md:grid-cols-2 gap-8
Responsive:  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

**Cards :**
```
Border radius: rounded-lg (8px)
Shadow: shadow-md hover:shadow-lg
Padding: p-6 (24px)
```

### 5.5 Animations & Interactions

**Transitions :**
```
Standard: transition-all duration-200 ease-in-out
Hover cards: hover:shadow-lg hover:-translate-y-1
Buttons: hover:bg-blue-700 transition-colors
```

**Loading states :**
- Skeleton loaders pour images
- Fade-in pour contenu dynamique

**Scroll behavior :**
- Smooth scroll pour ancres (table des matières)
- Sticky header avec transition opacité

---

## 6. Aspects Techniques

### 6.1 Stack Technique

**Core (existant) :**
- Next.js 16.1.1 (App Router)
- React 19.2.3
- TypeScript 5.x (strict mode)
- Tailwind CSS v4 (PostCSS-based)

**Nouvelles dépendances :**

```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "react-markdown": "^9.0.1",
    "remark-gfm": "^4.0.0",
    "rehype-highlight": "^7.0.0",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.0.0",
    "date-fns": "^3.0.0"
  }
}
```

**Utilité :**
- `gray-matter` : Parse frontmatter YAML des fichiers Markdown
- `react-markdown` : Rendu React de Markdown
- `remark-gfm` : Support GitHub Flavored Markdown (tables, task lists)
- `rehype-highlight` : Syntax highlighting pour code blocks
- `rehype-slug` : Auto-génération IDs pour headings (ancres)
- `rehype-autolink-headings` : Liens cliquables sur headings
- `date-fns` : Formatage dates en français

### 6.2 Structure de Dossiers

```
/app
  /blog
    /[slug]
      page.tsx              # Article individuel
    page.tsx                # Index blog
  /projets
    page.tsx
  /qui-suis-je
    page.tsx
  /temoignages
    page.tsx
  /components
    # Existants
    Button.tsx
    Card.tsx
    Modal.tsx
    Accordion.tsx
    ContactForm.tsx

    # Nouveaux
    Badge.tsx
    PageHeader.tsx
    ProjectCard.tsx
    TestimonialCard.tsx
    BlogCard.tsx
    Header.tsx              # Navigation globale
    Footer.tsx              # Footer enrichi

  layout.tsx                # Layout global
  page.tsx                  # Landing page (/)

/content
  /blog
    2026-01-15-article-1.md
    2026-02-01-article-2.md
    ...

/data
  projects.ts               # Array de projets
  testimonials.ts           # Array de témoignages

/lib
  blog.ts                   # Fonctions utilitaires blog

/public
  /images
    /blog
      notion-make.jpg
      ...
    /projects
      facturation-thumb.jpg
      ...
    /testimonials
      pierre-d.jpg
      ...
    /team
      shem-portrait.jpg
```

### 6.3 Routing Next.js

**Routes statiques :**
- `/` → `app/page.tsx`
- `/projets` → `app/projets/page.tsx`
- `/qui-suis-je` → `app/qui-suis-je/page.tsx`
- `/temoignages` → `app/temoignages/page.tsx`
- `/blog` → `app/blog/page.tsx`

**Routes dynamiques :**
- `/blog/[slug]` → `app/blog/[slug]/page.tsx`

**Génération statique :**
```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

Toutes les pages générées au build (SSG) → Performance maximale.

### 6.4 Accessibilité (a11y)

**Standards WCAG 2.1 AA :**

1. **Sémantique HTML :**
   - `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
   - Headings hiérarchiques (H1 unique, H2→H3 structurés)
   - `<button>` vs `<a>` utilisés correctement

2. **Contraste couleurs :**
   - Texte principal (zinc-900 sur blanc) : 21:1 ✓
   - Texte secondaire (zinc-700 sur blanc) : 12:1 ✓
   - Liens bleus (blue-600) : 4.5:1 minimum ✓

3. **Navigation clavier :**
   - Tab order logique
   - Focus visible (`focus:ring-2 focus:ring-blue-500`)
   - Escape pour fermer modals
   - Skip to content link (optionnel)

4. **Alt text :**
   - Toutes images décoratives : `alt=""`
   - Images informatives : descriptions claires

5. **ARIA labels :**
   - Boutons icônes : `aria-label="Fermer"`
   - Modals : `role="dialog"`, `aria-modal="true"`
   - Navigation : `aria-current="page"` pour page active

6. **Form accessibility :**
   - Labels associés aux inputs
   - Messages d'erreur descriptifs
   - Focus sur premier champ invalide

**Testing :**
- Lighthouse Accessibility score > 95
- Tests navigation clavier complète
- Tests lecteur d'écran (VoiceOver macOS)

---

## 7. SEO & Performance

### 7.1 SEO On-Page

**Metadata globale (`app/layout.tsx`) :**

```typescript
export const metadata: Metadata = {
  title: {
    default: 'CloudFaktory — Automatisation & Data pour TPE/PME',
    template: '%s | CloudFaktory'
  },
  description: 'J\'automatise tes process et je rends tes données actionnables. Solutions d\'automatisation et data pour TPE/PME françaises, 100% remote.',
  keywords: [
    'automatisation',
    'TPE',
    'PME',
    'no-code',
    'Make',
    'Zapier',
    'n8n',
    'Notion',
    'KPI',
    'data',
    'workflow',
    'France',
    'remote'
  ],
  authors: [{ name: 'Shem Zerzouri' }],
  creator: 'Shem Zerzouri',
  publisher: 'CloudFaktory',
  metadataBase: new URL('https://cloudfaktory.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cloudfaktory.fr',
    siteName: 'CloudFaktory',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@cloudfaktory', // Si compte existe
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

**Metadata par page :**

Chaque page exporte ses propres metadata :

```typescript
// app/projets/page.tsx
export const metadata: Metadata = {
  title: 'Projets réalisés',
  description: 'Portfolio de mes automatisations et solutions data pour TPE/PME françaises. Découvrez des cas concrets avec résultats mesurables.',
};

// app/qui-suis-je/page.tsx
export const metadata: Metadata = {
  title: 'Qui suis-je',
  description: 'Shem Zerzouri, expert en automatisation et data pour TPE/PME. Mon parcours, mes valeurs, mon approche pragmatique.',
};
```

**Blog articles (dynamique) :**

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: 'Shem Zerzouri' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Shem Zerzouri'],
      images: [post.coverImage],
    },
  };
}
```

**Structured Data (Schema.org) :**

**Organization (layout global) :**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CloudFaktory",
  "url": "https://cloudfaktory.fr",
  "logo": "https://cloudfaktory.fr/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Shem Zerzouri"
  },
  "sameAs": [
    "https://www.linkedin.com/in/shem-zerzouri"
  ]
}
```

**Article (pages blog) :**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Comment automatiser Notion avec Make",
  "description": "Guide pas-à-pas...",
  "image": "/images/blog/notion-make.jpg",
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "author": {
    "@type": "Person",
    "name": "Shem Zerzouri"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CloudFaktory",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cloudfaktory.fr/logo.png"
    }
  }
}
```

**Sitemap.xml :**

Next.js génère automatiquement avec configuration :

```typescript
// app/sitemap.ts
import { getAllPosts } from '@/lib/blog';

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map(post => ({
    url: `https://cloudfaktory.fr/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://cloudfaktory.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: 'https://cloudfaktory.fr/projets',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://cloudfaktory.fr/qui-suis-je',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://cloudfaktory.fr/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://cloudfaktory.fr/temoignages',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...blogUrls,
  ];
}
```

**Robots.txt :**

```
User-agent: *
Allow: /

Sitemap: https://cloudfaktory.fr/sitemap.xml
```

### 7.2 Performance

**Stratégies de rendu :**

1. **Static Generation (SSG)** :
   - `/` (landing page)
   - `/projets`
   - `/qui-suis-je`
   - `/temoignages`
   - `/blog` (index)
   - `/blog/[slug]` (tous les articles pré-générés)

2. **Images optimisées** :
   - `next/image` pour toutes les images
   - Formats modernes (WebP, AVIF auto)
   - Lazy loading natif
   - Tailles responsives automatiques

3. **Fonts optimisées** :
   - `next/font` pour Geist (déjà configuré)
   - Auto-hébergement, pas de requêtes externes
   - Preload automatique

4. **Bundle optimization** :
   - Import sélectif Lucide-react : `import { Icon } from 'lucide-react'`
   - Code splitting automatique par route
   - Dynamic imports pour modals lourds :
     ```tsx
     const ProjectModal = dynamic(() => import('./ProjectModal'));
     ```

5. **Markdown rendering** :
   - Rendu server-side (RSC)
   - Pas de client-side parsing

**Lighthouse Targets :**

| Métrique | Target | Notes |
|----------|--------|-------|
| Performance | >90 | SSG + images optimisées |
| Accessibility | 100 | Tests WCAG AA complets |
| Best Practices | 100 | HTTPS, sécurité headers |
| SEO | 100 | Metadata complète |
| First Contentful Paint | <1.5s | Critical CSS inline |
| Largest Contentful Paint | <2.5s | Images optimisées |
| Cumulative Layout Shift | <0.1 | Aspect-ratios fixes |
| Time to Interactive | <3.5s | Code splitting |

**Cache Strategy :**

```javascript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 7.3 Analytics

**Option 1 : Google Analytics 4 (GA4)**

Installation via `next/script` :

```tsx
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Events trackés :**
- Clics CTA "Planifier un appel"
- Clics CTA "Décrire ton besoin"
- Ouverture modals projets
- Soumission formulaire contact
- Lecture articles blog (scroll depth)

**Option 2 : Plausible Analytics (Privacy-friendly)**

Alternative RGPD-compliant sans cookies :

```tsx
<Script
  defer
  data-domain="cloudfaktory.fr"
  src="https://plausible.io/js/script.js"
/>
```

**Recommandation :** Plausible pour simplicité et conformité RGPD.

---

## 8. Plan de Déploiement

### 8.1 Infrastructure

**Hébergement : Vercel (recommandé)**

**Pourquoi Vercel :**
- Optimisé pour Next.js (créateurs du framework)
- Déploiement automatique depuis Git
- HTTPS gratuit avec certificat auto
- CDN global (Edge Network)
- Preview deployments pour chaque PR
- Analytics intégré
- Free tier généreux (largement suffisant pour ce projet)

**Alternative :** Netlify (similaire, mais moins optimisé Next.js)

**Domaine :**
- `cloudfaktory.fr` (à configurer DNS)
- Configuration Vercel : Ajouter domaine custom + SSL auto

### 8.2 Environnements

**Production :**
- Branch : `main`
- URL : https://cloudfaktory.fr
- Deploy : Automatique sur push `main`

**Staging (optionnel) :**
- Branch : `develop`
- URL : https://staging.cloudfaktory.fr
- Deploy : Automatique sur push `develop`

**Preview :**
- Toute Pull Request
- URL : https://cloudfaktory-pr-123.vercel.app
- Deploy : Automatique sur ouverture PR

### 8.3 CI/CD Workflow

**GitHub Actions (optionnel, Vercel gère déjà) :**

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
```

**Workflow simplifié (recommandé) :**

1. Developer push → GitHub
2. Vercel détecte push → Build automatique
3. Preview deployment si PR, Production si `main`
4. Notification Slack/Discord (optionnel)

### 8.4 Variables d'Environnement

**Fichier `.env.local` (local dev) :**
```
NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/zerzourishem/rdv-de-15-minutes
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

**Vercel Dashboard :**
Configurer les mêmes variables dans Settings > Environment Variables

### 8.5 Monitoring

**Vercel Analytics :**
- Activé par défaut (Web Vitals)
- Dashboard temps réel
- Core Web Vitals tracking

**Error Tracking (optionnel) :**
- Sentry pour erreurs JavaScript
- Installation simple avec `@sentry/nextjs`

**Uptime Monitoring (optionnel) :**
- UptimeRobot (gratuit, 50 monitors)
- Ping toutes les 5 min
- Alertes email si down

---

## 9. Roadmap d'Implémentation

### Phase 0 : Préparation
**Durée estimée : 1 semaine**

- [x] Landing page existante fonctionnelle ✅
- [ ] Audit design system actuel
- [ ] Création structure dossiers `/content`, `/data`
- [ ] Installation dépendances Markdown
  ```bash
  npm install gray-matter react-markdown remark-gfm rehype-highlight rehype-slug rehype-autolink-headings date-fns
  ```
- [ ] Configuration SEO metadata de base
- [ ] Setup Vercel project (si pas déjà fait)
- [ ] Configuration domaine cloudfaktory.fr

**Livrables :**
- Architecture dossiers en place
- Dépendances installées
- Vercel connecté à GitHub

---

### Phase 1 : Navigation & Layout Global
**Durée estimée : 1 semaine**

**Tâches :**
- [ ] Créer composant `<Header>` avec navigation
  - [ ] Logo avec lien vers `/`
  - [ ] Menu desktop (liens vers toutes pages)
  - [ ] Bouton CTA "Planifier un appel"
  - [ ] Menu mobile burger
  - [ ] Sticky behavior au scroll
- [ ] Créer composant `<Footer>` enrichi
  - [ ] Liens sitemap
  - [ ] Icône LinkedIn
  - [ ] Mentions légales, Confidentialité
  - [ ] Copyright
- [ ] Intégrer Header/Footer dans `app/layout.tsx`
- [ ] Créer composant `<PageHeader>` réutilisable
- [ ] Setup routing pages vides :
  - [ ] `app/projets/page.tsx`
  - [ ] `app/qui-suis-je/page.tsx`
  - [ ] `app/blog/page.tsx`
  - [ ] `app/temoignages/page.tsx`

**Livrables :**
- Navigation fonctionnelle sur toutes pages
- Routing de base en place
- Layout cohérent

**Tests :**
- Navigation entre pages
- Menu mobile fonctionnel
- Sticky header au scroll

---

### Phase 2 : Page Projets
**Durée estimée : 1-2 semaines**

**Tâches :**

**2.1 Structure données (2 jours)**
- [ ] Créer `/data/projects.ts` avec interface TypeScript
- [ ] Remplir 3-5 projets exemples (avec placeholders contenu si besoin)
- [ ] Préparer images thumbnails (ou placeholders)

**2.2 Composants (3 jours)**
- [ ] Créer composant `<Badge>`
- [ ] Créer composant `<ProjectCard>`
- [ ] Adapter composant `<Modal>` pour projets (ou créer `<ProjectModal>`)

**2.3 Page projets (3 jours)**
- [ ] Layout page `/projets`
- [ ] Header page avec titre/subtitle
- [ ] Filtres par catégorie
- [ ] Grille de cards responsive
- [ ] Modal détail au clic
- [ ] Lazy loading images

**2.4 Contenu & polish (2 jours)**
- [ ] Intégrer vrais projets (ou affiner placeholders)
- [ ] Optimiser images
- [ ] Tests responsive
- [ ] Tests accessibilité

**Livrables :**
- Page `/projets` complète et fonctionnelle
- Modal détail projet
- 3-5 projets affichés

**Tests :**
- Filtres fonctionnent
- Modal s'ouvre/ferme correctement
- Responsive mobile/tablet/desktop
- Lighthouse score >90

---

### Phase 3 : Page Qui suis-je
**Durée estimée : 1 semaine**

**Tâches :**

**3.1 Contenu (3 jours)** ⚠️ **ACTION REQUISE UTILISATEUR**
- [ ] Rédiger bio hero (2-3 lignes)
- [ ] Rédiger section "D'où je viens" (150-200 mots)
- [ ] Rédiger section "Pourquoi CloudFaktory" (150-200 mots)
- [ ] Rédiger section "Ce qui me différencie" (150-200 mots)
- [ ] Photo professionnelle (haute résolution)
- [ ] Compiler chiffres clés (si disponibles)

**3.2 Développement (4 jours)**
- [ ] Layout page `/qui-suis-je`
- [ ] Hero avec photo + headline
- [ ] Sections storytelling (3 blocs)
- [ ] Grille compétences avec icônes
- [ ] Section chiffres clés
- [ ] CTA final

**Livrables :**
- Page `/qui-suis-je` complète
- Contenu intégré
- Design cohérent avec reste du site

**Tests :**
- Responsive
- Accessibilité (alt text photo, headings)
- Lighthouse >90

---

### Phase 4 : Blog Infrastructure
**Durée estimée : 1-2 semaines**

**Tâches :**

**4.1 Système Markdown (3 jours)**
- [ ] Créer `/lib/blog.ts` avec fonctions :
  - [ ] `getAllPosts()`
  - [ ] `getPostBySlug()`
  - [ ] `getPostsByCategory()`
- [ ] Setup rendering Markdown (react-markdown + plugins)
- [ ] Configuration syntax highlighting
- [ ] Setup table des matières auto

**4.2 Page index blog (2 jours)**
- [ ] Layout `/blog`
- [ ] Header page
- [ ] Filtres catégories
- [ ] Créer composant `<BlogCard>`
- [ ] Grille articles responsive

**4.3 Template article (3 jours)**
- [ ] Layout `/blog/[slug]`
- [ ] Hero article (image, titre, meta)
- [ ] Table des matières (sidebar desktop)
- [ ] Rendu contenu Markdown
- [ ] CTA fin d'article
- [ ] Section "Articles similaires"
- [ ] SEO metadata dynamique

**4.4 Contenu test (2 jours)** ⚠️ **ACTION REQUISE UTILISATEUR**
- [ ] Créer 2-3 articles placeholder Markdown
  - [ ] Article 1 : Tutoriel Notion/Make (exemple)
  - [ ] Article 2 : Retour d'expérience (exemple)
- [ ] Images de couverture
- [ ] Screenshots si applicable

**Livrables :**
- Système blog fonctionnel
- Page index + template article
- 2-3 articles de démonstration
- SEO optimisé

**Tests :**
- Navigation entre articles
- Table des matières smooth scroll
- Code highlighting fonctionne
- Metadata OpenGraph valide
- Lighthouse >90

---

### Phase 5 : Page Témoignages
**Durée estimée : 3-5 jours**

**Tâches :**

**5.1 Structure données (1 jour)**
- [ ] Créer `/data/testimonials.ts` avec interface
- [ ] Remplir 3-5 témoignages exemples (ou placeholders)

**5.2 Développement (2 jours)**
- [ ] Créer composant `<TestimonialCard>`
- [ ] Layout page `/temoignages`
- [ ] Header page
- [ ] Section stats (optionnel si données dispo)
- [ ] Grille témoignages responsive
- [ ] CTA "Laisser un témoignage" (lien Google Form)

**5.3 Contenu (1-2 jours)** ⚠️ **ACTION REQUISE UTILISATEUR**
- [ ] Collecter témoignages réels clients
- [ ] Photos/avatars (si autorisation)
- [ ] Anonymisation si nécessaire

**Livrables :**
- Page `/temoignages` complète
- 3-5 témoignages affichés
- Formulaire collecte témoignages (Google Form ou équivalent)

**Tests :**
- Responsive
- Lien vers projets associés fonctionne
- Lighthouse >90

---

### Phase 6 : SEO & Performance
**Durée estimée : 1 semaine**

**Tâches :**

**6.1 SEO (3 jours)**
- [ ] Metadata complète toutes pages
- [ ] Génération `sitemap.xml` automatique
- [ ] `robots.txt`
- [ ] Schema.org markup (Organization, Article)
- [ ] Open Graph images (1200x630px) pour toutes pages
- [ ] Test Google Search Console

**6.2 Performance (2 jours)**
- [ ] Audit Lighthouse toutes pages
- [ ] Optimisation images (compression, formats)
- [ ] Code splitting si nécessaire
- [ ] Lazy loading modals/composants lourds
- [ ] Cache headers optimisés

**6.3 Accessibilité (2 jours)**
- [ ] Tests navigation clavier complète
- [ ] Alt text toutes images
- [ ] ARIA labels
- [ ] Contraste couleurs validation
- [ ] Tests lecteur d'écran (VoiceOver)
- [ ] Focus states visibles

**Livrables :**
- Lighthouse scores >90 toutes pages
- Sitemap soumis Google
- Accessibilité WCAG AA compliant

**Tests :**
- Lighthouse CI
- PageSpeed Insights
- aXe DevTools (accessibilité)
- Manual keyboard navigation

---

### Phase 7 : Analytics & Launch Prep
**Durée estimée : 3-5 jours**

**Tâches :**

**7.1 Analytics (1 jour)**
- [ ] Installation Plausible (ou GA4)
- [ ] Configuration events tracking
- [ ] Tests tracking fonctionnel

**7.2 Contenu final (2-3 jours)** ⚠️ **ACTION REQUISE UTILISATEUR**
- [ ] Remplacer tous placeholders par contenu réel :
  - [ ] Projets finalisés (descriptions, images)
  - [ ] Bio complète page "Qui suis-je"
  - [ ] Articles blog (minimum 3-5 pour lancement)
  - [ ] Témoignages réels
- [ ] Relecture complète français
- [ ] Validation liens externes (Calendly, LinkedIn)

**7.3 Tests finaux (1 jour)**
- [ ] Tests cross-browser (Chrome, Firefox, Safari)
- [ ] Tests mobile (iOS, Android)
- [ ] Tests formulaire contact (Web3Forms)
- [ ] Tests Calendly embed
- [ ] Validation RGPD mentions légales

**Livrables :**
- Site 100% prêt pour production
- Contenu réel intégré
- Analytics fonctionnel
- Tests complets validés

---

### Phase 8 : Go Live 🚀
**Durée estimée : 1 jour**

**Tâches :**

**Pré-launch checklist :**
- [ ] Backup base de code
- [ ] DNS configuré (cloudfaktory.fr → Vercel)
- [ ] SSL certificat actif
- [ ] Variables d'environnement production OK
- [ ] Monitoring uptime configuré

**Launch :**
- [ ] Merge `develop` → `main`
- [ ] Deploy automatique production Vercel
- [ ] Validation site live
- [ ] Tests production (formulaire, analytics)

**Post-launch (24h) :**
- [ ] Monitoring erreurs/analytics
- [ ] Soumission sitemap Google Search Console
- [ ] Annonce LinkedIn (optionnel)
- [ ] Partage réseaux (optionnel)

**Livrables :**
- Site CloudFaktory live sur cloudfaktory.fr
- Toutes fonctionnalités opérationnelles
- Monitoring actif

---

### Post-Launch : Maintenance & Contenu
**Ongoing**

**Hebdomadaire :**
- [ ] Monitoring analytics (trafic, conversions)
- [ ] Réponse formulaires contact

**Mensuel :**
- [ ] Publication 1-2 nouveaux articles blog
- [ ] Ajout nouveaux projets portfolio (après missions)
- [ ] Collection nouveaux témoignages

**Trimestriel :**
- [ ] Audit SEO (positions Google)
- [ ] Audit performance (Lighthouse)
- [ ] Mise à jour dépendances Next.js/React

**Backlog évolutions futures :**
- [ ] Newsletter intégrée
- [ ] Recherche full-text blog
- [ ] Mode sombre (dark mode)
- [ ] i18n anglais
- [ ] Espace client privé
- [ ] Booking intégré (alternative Calendly)

---

## 10. Résumé Exécutif

### Vision
Transformer CloudFaktory d'une landing page en un site portfolio professionnel complet qui établit Shem Zerzouri comme expert reconnu en automatisation et data pour TPE/PME françaises.

### Objectifs clés
1. **Crédibilité** : Portfolio projets + témoignages
2. **Expertise** : Blog technique démontrant la maîtrise
3. **Connexion** : Page personnelle humanisant la marque
4. **Performance** : Site ultra-rapide (Lighthouse >90)
5. **SEO** : Contenu optimisé pour trafic organique

### Livrables
- 5 pages principales (Home, Projets, Qui suis-je, Blog, Témoignages)
- Système blog Markdown (autonome, simple)
- Portfolio projets avec modals détaillés
- Design system cohérent et accessible
- SEO & performance optimisés
- Déploiement Vercel avec CI/CD

### Timeline globale
**8-12 semaines** de développement (selon disponibilité contenu)

| Phase | Durée | Dépendances |
|-------|-------|-------------|
| Phase 0 : Préparation | 1 semaine | - |
| Phase 1 : Navigation | 1 semaine | Phase 0 |
| Phase 2 : Projets | 1-2 semaines | Phase 1, contenu projets |
| Phase 3 : Qui suis-je | 1 semaine | Phase 1, contenu bio |
| Phase 4 : Blog | 1-2 semaines | Phase 1, articles |
| Phase 5 : Témoignages | 3-5 jours | Phase 1, témoignages |
| Phase 6 : SEO/Performance | 1 semaine | Toutes pages complètes |
| Phase 7 : Launch prep | 3-5 jours | Contenu final |
| Phase 8 : Go Live | 1 jour | Toutes phases |

### Actions utilisateur requises
1. **Contenu projets** : Descriptions, images, résultats (Phase 2)
2. **Contenu bio** : Parcours, photo, compétences (Phase 3)
3. **Articles blog** : 3-5 articles initiaux (Phase 4)
4. **Témoignages** : Collection avis clients (Phase 5)
5. **Relecture finale** : Validation contenu français (Phase 7)

### Critères de succès
- ✅ Lighthouse scores >90 (performance, SEO, a11y)
- ✅ Minimum 10 projets portfolio
- ✅ Minimum 5 articles blog publiés
- ✅ Minimum 5 témoignages clients
- ✅ Temps de chargement <2s
- ✅ Site 100% responsive (mobile-first)
- ✅ WCAG AA compliant

---

**Prochaines étapes :**
1. Validation PRD par Shem
2. Setup repository structure (Phase 0)
3. Début Phase 1 : Navigation & Layout

---

**Fin du PRD**

**Document créé le :** 2026-01-02
**Auteur :** Claude Code + Shem Zerzouri
**Version :** 1.0
