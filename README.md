# Accredian Enterprise — Landing Page Clone

A pixel-faithful, production-grade clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Demo

> Deploy to Vercel (instructions below) and paste your URL here.

---

## 📦 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS variables |
| Icons | Lucide React |
| Fonts | Sora (display) + DM Sans (body) via Google Fonts |
| API | Next.js Route Handlers (`/api/leads`) |
| Deployment | Vercel |

---

## 🗂 Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Landing page (assembles all sections)
│   ├── globals.css         # Global styles, design tokens, utilities
│   └── api/
│       └── leads/
│           └── route.ts    # POST /api/leads — lead capture endpoint
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Hero with animated badges + trust bar
│   ├── Stats.tsx           # Animated counter stats
│   ├── Platform.tsx        # 8-feature platform grid
│   ├── Programs.tsx        # Filterable program catalog
│   ├── HowItWorks.tsx      # 4-step process timeline
│   ├── Partners.tsx        # Academic + tech partner logos
│   ├── Testimonials.tsx    # 6-card testimonial grid
│   ├── ContactForm.tsx     # Lead capture form with API call
│   └── Footer.tsx          # Full footer with links
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── vercel.json
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel          # follow prompts (select Next.js, root directory = .)
vercel --prod   # promote to production
```

### Option B — GitHub Integration

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Vercel auto-detects Next.js
4. Click **Deploy** — live in ~60 seconds

---

## 🔌 API Integration

### `POST /api/leads`

Captures enterprise lead form submissions.

**Request body:**
```json
{
  "name": "Priya Sharma",
  "email": "priya@company.com",
  "company": "Acme Corp",
  "phone": "+91 98765 43210",
  "teamSize": "51–200",
  "interest": "AI & Data Science",
  "message": "We want to upskill our data team."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "id": "1718000000000"
}
```

**`GET /api/leads`** — returns all captured leads (admin use).

> In production, replace the in-memory array with a real database (Supabase, MongoDB Atlas, PlanetScale, etc.) and add authentication to the GET endpoint.

---

## 🤖 AI Usage

This project was developed with significant AI assistance. Here's a transparent breakdown:

### Where AI (Claude) Helped

| Area | AI Contribution |
|---|---|
| **Component scaffolding** | Generated initial structure for all 9 components |
| **Tailwind config** | Extended theme with custom colors, animations, keyframes |
| **Global CSS** | Design token system, glass-card, gradient-text, glow utilities |
| **Copy & content** | Hero headline, feature descriptions, testimonial quotes |
| **API route** | Initial `/api/leads` route handler boilerplate |
| **TypeScript types** | `FormData` type, prop interfaces |
| **Animations** | CSS keyframe definitions and intersection observer logic |

### What I Modified / Improved Manually

- Refined color palette and spacing to better match the original site's feel
- Tuned animation timing and delays for natural stagger effects
- Restructured the Programs filter logic for better UX state management
- Added `aria-label` attributes for accessibility on interactive elements
- Validated API error handling flow and ensured error states render correctly
- Adjusted mobile breakpoints in the Navbar and ContactForm grid
- Reviewed and corrected all TypeScript types for strict mode compliance
- Wrote production-ready README and setup instructions

---

## 🧠 Approach Taken

1. **Reference analysis** — Studied the live site to identify all sections: nav, hero, stats, features, programs, process, partners, testimonials, contact, footer.

2. **Design direction** — Chose a **dark, indigo-first** palette with glass morphism cards, which matches Accredian Enterprise's professional but modern brand.

3. **Component-first architecture** — Each section is an isolated component, making future updates and A/B testing trivial.

4. **Progressive enhancement** — Intersection Observer drives scroll-triggered animations without a heavy library dependency.

5. **API-first contact form** — The form hits a real Next.js API route, demonstrating the full-stack capability of the App Router and making the bonus requirement production-ready.

---

## ✨ Improvements With More Time

| Priority | Improvement |
|---|---|
| High | Connect `/api/leads` to Supabase or MongoDB Atlas for persistent storage |
| High | Add email notification via Resend or SendGrid on form submission |
| High | Integrate Google Analytics / Posthog for lead funnel tracking |
| Medium | Add Framer Motion for smoother page transitions and scroll animations |
| Medium | Build out individual program detail pages with dynamic routing |
| Medium | Add an admin dashboard (protected) to view/export captured leads |
| Medium | Implement a CMS (Contentful / Sanity) for programs and testimonials |
| Low | Add unit tests (Jest + React Testing Library) for form validation |
| Low | Implement OG image generation for social sharing |
| Low | Add i18n support for regional language options |

---

## 📝 Notes

- The project intentionally avoids third-party UI kit templates — all components are written from scratch.
- Fonts load from Google Fonts CDN; for full production use, consider self-hosting via `next/font`.
- The leads API uses in-memory storage — data resets on server restart. Swap with a real DB before production.

---

*Built as part of the Accredian Full Stack Developer Intern assignment.*
