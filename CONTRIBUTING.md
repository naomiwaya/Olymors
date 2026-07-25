# Contributing to Olymors Investment Limited Website

Thank you for your interest in contributing to this project. This document
explains how to set up the project locally and how to submit changes.

---

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/your-org/olymors-investment-limited.git
cd olymors-investment-limited
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
# Fill in your EmailJS credentials in .env.local
```

### 4. Run the Development Server

```bash
npm run dev
# Open http://localhost:3000
```

---

## Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/short-description` | `feature/add-team-section` |
| Bug fix | `fix/short-description` | `fix/mobile-navbar-overlap` |
| Content | `content/short-description` | `content/update-project-cards` |
| Chore | `chore/short-description` | `chore/upgrade-framer-motion` |

Always branch off from `main`.

---

## Making Changes

1. Create a branch from `main`
2. Make your changes following the code style below
3. Run `npm run lint` and fix any warnings
4. Run `npm run build` and ensure it passes with no errors
5. Commit with a clear, descriptive message (see below)
6. Open a Pull Request against `main`

---

## Commit Message Format

Use the following format:

```
type: short description (max 72 chars)

Optional longer description if needed.
```

**Types:**

| Type | When to use |
|------|-------------|
| `feat` | New feature or page section |
| `fix` | Bug fix |
| `style` | CSS / Tailwind changes only |
| `content` | Copy or data changes |
| `chore` | Dependency updates, config changes |
| `perf` | Performance improvements |
| `a11y` | Accessibility improvements |

**Examples:**

```
feat: add team members section to about page
fix: correct mobile menu z-index overlap with hero
content: update project portfolio with 2025 entries
```

---

## Code Style

- **TypeScript** — all new files must be `.tsx` or `.ts` with proper types
- **Tailwind CSS** — use utility classes; avoid writing custom CSS unless unavoidable
- **Components** — one component per file; use named exports
- **`"use client"`** — only add to files that need browser APIs or state; prefer Server Components
- **Accessibility** — all interactive elements need `aria-label` or visible text; images need `alt`
- **No `any`** — avoid TypeScript `any` type

---

## Pull Request Checklist

Before submitting a PR, confirm:

- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes with no warnings
- [ ] New UI components are responsive (mobile, tablet, desktop)
- [ ] All images have descriptive `alt` attributes
- [ ] Interactive elements are keyboard-navigable
- [ ] No hardcoded URLs or secrets in code
- [ ] Environment variables are documented in `.env.example`

---

## Reporting Bugs

Open a [GitHub Issue](../../issues/new?template=bug_report.md) and include:

1. Steps to reproduce
2. Expected behaviour
3. Actual behaviour
4. Browser / OS / screen size
5. Screenshots if applicable

---

## Questions

For questions about the project or business, contact:
**✉️ Info@Olymors.com**
