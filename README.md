# RadheGroup Industrial Portal

Welcome to the official web portal for **RadheGroup** — a premium B2B engineering and manufacturing conglomerate. The group encompasses *Radhe Technocast, Flow Marshal Valves, Radhe Industries, and Radhe Alloys*.

This project is a modern, high-performance web application designed to showcase technical capabilities, industrial products, and global logistics infrastructure with interactive, highly engaging interfaces.

## 🚀 Key Features

* **Interactive 3D Product Viewers:** Embedded Three.js views for inspecting complex CAD models like Globe Valves directly in the browser.
* **Dynamic Animations:** Smooth page transitions, scroll-reveals, and micro-interactions powered by Framer Motion.
* **Fully Responsive Design:** Seamlessly works on Desktop, Tablet, and Mobile devices (including a custom mobile slide-out menu).
* **Dark/Light Mode:** First-class support for dynamic theming (Next Themes) matching system preferences or manual toggles.
* **Interactive Maps & Hotspots:** Deep-tech exploded views and interactive global distribution maps.
* **Floating RFQ Button:** A globally available Request-for-Quote slide-out sheet for immediate client inquiry capture.

## 🛠️ Tech Stack

This project is built using modern web development standards and optimized for Edge deployment:

* **Framework:** [Next.js (App Router)](https://nextjs.org/) (React 19)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) & Tailwind Animations
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/) / [Base UI](https://base-ui.com/)
* **Icons:** [Lucide React](https://lucide.dev/) & Material Symbols
* **Carousels:** [Embla Carousel](https://www.embla-carousel.com/)

## 📂 Project Structure

```text
RadheGroup/
├── src/
│   ├── app/                 # Next.js App Router Pages
│   │   ├── about/           # About Us & Company Timeline
│   │   ├── contact/         # Contact Forms & Maps
│   │   ├── industries/      # Industry specific solutions
│   │   ├── products/        # Catalog and 3D Viewers
│   │   └── globals.css      # Core Tailwind CSS & Design System
│   ├── components/
│   │   ├── features/        # Complex page-specific components
│   │   ├── layout/          # Global Header & Footer
│   │   ├── providers/       # Theme & Context Providers
│   │   ├── rfq/             # Global Floating Quote Button
│   │   └── ui/              # Reusable Shadcn UI Elements
│   └── lib/                 # Utilities and helpers (Tailwind merge)
└── public/                  # Static assets (Images, SVGs)
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application supports Hot Module Replacement (HMR) allowing real-time edits.

## 🎨 Design System

The platform utilizes a strictly enforced design system defined in `globals.css`.
- **Typography:** Uses `Space Grotesk` globally for a technical, modern look.
- **Colors:** Defined via CSS variables matching Material Design 3 principles (Surface, Primary Container, etc.) adapting automatically between dark and light themes.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

To push your latest changes to GitHub:
```bash
git add .
git commit -m "Update description"
git push origin main
```
