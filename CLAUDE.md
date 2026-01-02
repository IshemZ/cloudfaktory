# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CloudFaktory is a French-language business automation and data services website built with Next.js 16, TypeScript, and Tailwind CSS v4. The project targets TPE/PME (small/medium businesses) in France, offering automation services, data management, and custom technical solutions.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint (uses flat config with Next.js presets)
```

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS v4 (PostCSS-based)
- **Fonts**: Geist Sans and Geist Mono (loaded via next/font/google)
- **ESLint**: Flat config format with Next.js presets (core-web-vitals + TypeScript)

## Architecture

### App Router Structure
- Using Next.js App Router (`app/` directory)
- Root layout (`app/layout.tsx`) configures:
  - Geist font family variables (`--font-geist-sans`, `--font-geist-mono`)
  - Global metadata (currently placeholder)
  - HTML lang="en" (but business content is French - may need localization)

### Path Aliases
- `@/*` maps to project root (configured in tsconfig.json)
- Use for imports: `import { Component } from '@/components/...'`

### Tailwind CSS v4 Specifics
- Uses new PostCSS-based architecture (`@tailwindcss/postcss`)
- No traditional `tailwind.config.js` - configuration via PostCSS
- Dark mode classes are used (`dark:` prefix) - currently using system preference

## Important Context

### Business Domain (activite.md)
The project is for CloudFaktory, a 100% remote service offering:
- **Automation de process**: Workflow automation, relances, document generation
- **Données & pilotage**: KPI dashboards, data consolidation, reporting
- **Solutions techniques**: API integrations, scripts, cloud solutions

**Target audience**: French TPE/PME (small/medium businesses)

**Stack mentioned in business docs**: Notion, Make/Zapier/n8n, cloud solutions, programming/APIs

### Language Considerations
- **Code**: English (standard Next.js/React conventions)
- **Content**: French (business copy, UI text)
- **Current state**: Layout metadata is in English ("Create Next App") - needs French localization
- When adding UI text, use French according to business requirements

## Development Notes

### TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- Path aliases configured (`@/*`)
- JSX mode: `react-jsx` (new JSX transform)

### ESLint Configuration
- Uses new flat config format (`eslint.config.mjs`)
- Presets: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Font Loading
- Geist fonts loaded via `next/font/google` in root layout
- Provides CSS variables for use in Tailwind classes
- Fonts are optimized automatically by Next.js

### Dark Mode
- Tailwind dark mode classes already in use
- Currently no toggle mechanism implemented
- Uses system preference by default
