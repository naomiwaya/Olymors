<div align="center">
  <img src="public/images/logo.svg" alt="Olymors Investment Limited" width="320" />
  <br /><br />
  <p><strong>Engineering Value. Delivering Excellence.</strong></p>

  <p>
    <a href="https://olymors.com">🌐 Website</a> ·
    <a href="#getting-started">🚀 Get Started</a> ·
    <a href="CONTRIBUTING.md">🤝 Contribute</a> ·
    <a href="SECURITY.md">🔒 Security</a>
  </p>

  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-ff69b4?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-Ready-000?logo=vercel&logoColor=white" alt="Vercel Ready" />
</div>

---

## About

This is the official corporate website for **Olymors Investment Limited** — a Nigerian engineering and construction company based in Ikorodu, Lagos State.

The site showcases the company's services, portfolio of projects, mission, values, and contact information, built to the highest standard of performance, accessibility, and visual quality.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React, React Icons |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| Fonts | Manrope, Inter (Google Fonts) |
| Deployment | Vercel |

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About, Services, Why Us, Mission/Vision, Values, Projects, Contact CTA |
| About | `/about` | Full company story, milestones, team stats |
| Services | `/services` | Detailed breakdown of all four service lines |
| Projects | `/projects` | Filterable portfolio grid |
| Contact | `/contact` | Validated contact form with EmailJS |
| Privacy Policy | `/privacy-policy` | Legal privacy information |
| 404 | `/_not-found` | Custom branded not-found page |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/olymors-investment-limited.git
cd olymors-investment-limited

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and fill in your EmailJS credentials

# 4. Start the development server
npm run dev
```

The site will be available at **http://localhost:3000**.

---

## Environment Variables

Copy `.env.example` to `.env.local` and set the following:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

> **Note:** The contact form degrades gracefully if EmailJS is not configured — it will display an error state without crashing.

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── contact/
│   ├── privacy-policy/
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/             # Navbar, Footer, Providers
│   ├── sections/           # Page section components
│   └── ui/                 # Reusable UI components
├── data/                   # Static content data
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and validation schemas
├── public/
│   ├── backgrounds/        # SVG background graphics
│   ├── images/             # Logo and image assets
│   └── icons/              # Favicon and app icons
├── styles/                 # Global CSS
├── types/                  # TypeScript type definitions
└── utils/                  # Animation variants and helpers
```

---

## Deployment

This project is optimised for **Vercel**.

```bash
# Production build
npm run build

# Deploy via Vercel CLI
npx vercel --prod
```

Or connect the GitHub repository directly to Vercel for automatic deployments on every push to `main`.

---

## Contact

**Olymors Investment Limited**
- 📍 38, Oloja Road Igbe, Ikorodu, Lagos State
- 📞 07077653308
- ✉️ Info@Olymors.com

---

## License

This project is proprietary software owned by **Olymors Investment Limited**. See [LICENSE](LICENSE) for details.
