# Modern Dark Scrollytelling Portfolio

A high-performance, dark-themed portfolio website inspired by [haar6.vercel.app](https://haar6.vercel.app/), featuring 3D canvas scrollytelling, glassmorphism bento grids, pulsating ambient background wireframes, an infinite tech marquee, and fluid page transitions.

Built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Architecture

- **Signature Pulsing SVG Wireframe Background**: Mathematically plotted concentric ribbon curves with subtle ambient radial glow (`#121212` background palette).
- **Apple-Style 3D Scrollytelling Hero (`HeroScrollytelling.tsx`)**:
  - Full-screen pinned canvas viewport reacting directly to scroll position.
  - Generative 3D cybernetic torus knot / particle wireframe rendered in real-time.
  - Multi-phase scroll text reveals (Welcome $\rightarrow$ Mission Statement $\rightarrow$ Engineering Philosophy).
- **Infinite Marquee Ticker (`TechMarquee.tsx`)**: Continuous smooth ticker showcasing your tech stack with subtle gradient edge fade masks.
- **Glassmorphism Bento Grid (`BentoGrid.tsx`)**: Asymmetrical cards with backdrop blur, hover glow gradients (indigo, orange, emerald), live stats, LeetCode streak counters, and certifications.
- **Selected Works Showcase (`/projects`)**: Filterable project gallery with 4:3 previews, tech tags, live demo links, and GitHub repositories.
- **Interactive Resume (`/resume`)**: Detailed education history, technical skills breakdown, certifications with verification links, and key achievements.
- **Glass Contact Form (`/contact`)**: Interactive message form, direct mail/phone pills, and social profile links.
- **Single Source of Truth (`data/portfolioData.ts`)**: Edit all personal details, stats, projects, and links in **one single file**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ How to Customize with Your Own Information

All content is centralized in [`data/portfolioData.ts`](./data/portfolioData.ts). Open this file and replace the values:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    monogram: "YN", // Shown in Navbar
    tagline: "Your brief tagline here",
    heroHeadline1: "I build impactful, intelligent applications.",
    heroHeadline2: "Turning complex problems into elegant solutions.",
    role: "Your Title (e.g. AI & Full-Stack Developer)",
    bio: [
      "Paragraph 1 about yourself...",
      "Paragraph 2 about your studies or experience...",
      "Paragraph 3 about your tech stack..."
    ],
    email: "you@example.com",
    phone: "+1 (555) 000-0000",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://x.com/yourusername",
      leetcode: "https://leetcode.com/yourusername",
      instagram: "https://instagram.com/yourusername"
    }
  },
  stats: {
    streakDays: "50+",
    projectsCompleted: "12+",
    leetcodeProblems: "150+",
    technologiesMastered: "14+"
  },
  // Add your projects, skills, education, and certifications!
};
```

---

## 🌐 Deploy to Vercel (1-Click)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push this project to your GitHub repository.
2. Go to [Vercel](https://vercel.com/new) and import your repository.
3. Keep default settings (`Framework: Next.js`) and click **Deploy**.
4. Your portfolio will be live at `https://your-portfolio.vercel.app`!
