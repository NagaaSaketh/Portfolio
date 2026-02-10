# Portfolio Upgrade Notes (React + ShadCN)

## 1) Foundation Setup

### What it does
- Moves the UI from Bootstrap-heavy styling to a ShadCN-compatible component architecture.
- Uses a Tailwind-based design system with reusable primitives and shared theme tokens.

### How it was built
- Added Tailwind through `@tailwindcss/vite` in `vite.config.js`.
- Added `components.json` for ShadCN project metadata and path aliases.
- Created reusable UI primitives in `src/components/ui`:
  - `button.jsx`
  - `card.jsx`
  - `badge.jsx`
  - `separator.jsx`
- Added `src/lib/utils.js` with a shared `cn()` helper for class merging.
- Reworked `src/index.css` with theme variables, custom fonts, global styles, and animation keyframes.

## 2) App Shell (`src/App.jsx`)

### What it does
- Composes the full one-page portfolio flow:
  - Header
  - About
  - Projects
  - Tech Stack
  - Connect
  - Footer
- Adds decorative animated background orbs.

### How it was built
- Built as a top-level layout wrapper with a max-width content rhythm.
- Uses layered positioning so background effects stay behind content.
- Preserves section ordering and anchor-based navigation behavior.

## 3) Header (`src/components/Header.jsx`)

### What it does
- Provides sticky top navigation, profile identity, and quick CTA actions.
- Supports desktop and mobile navigation variants.

### How it was built
- Uses ShadCN `Button` and `Separator` primitives.
- Desktop nav is shown on `md+`; mobile gets a scrollable pill-style nav row.
- Sticky glassmorphism header (`backdrop-blur`) keeps context visible while scrolling.
- Entry animation is handled with shared `fade-up` utilities and delay classes.

## 4) About (`src/components/About.jsx`)

### What it does
- Introduces your profile, specialization, and primary action buttons.
- Highlights your core stack and development strengths.

### How it was built
- Implemented as a responsive two-column hero (`lg:grid-cols-[1.3fr_1fr]`).
- Left column: headline, summary, stack badges, contact/resume CTAs.
- Right column: spotlight card with role and strengths.
- Uses ShadCN `Card`, `Badge`, and button variant styling.
- Includes animated reveal, glow pulse, and floating decorative element.

## 5) Projects (`src/components/Projects.jsx`)

### What it does
- Showcases project cards with image, description, tech stack, and demo/code links.

### How it was built
- Project content is stored in a structured array and rendered via `.map()`.
- Card grid adapts by breakpoint:
  - 1 column on small screens
  - 2 columns on medium
  - 3 columns on extra-large
- Uses ShadCN `Card`, `Badge`, and button variants.
- Adds hover lift/scale effects and staggered load animation delays.

## 6) Tech Stack (`src/components/TechStack.jsx`)

### What it does
- Groups tools into logical categories for quick scanning.

### How it was built
- Organized into three category cards:
  - Frontend
  - Backend
  - Tools & Platform
- Uses ShadCN `Card` + `Badge` with icon-accented headers.
- Responsive grid with animated section/card reveal.
- Added an extra statement card to communicate product-minded engineering style.

## 7) Connect (`src/components/Connect.jsx`)

### What it does
- Presents all major contact channels in one section with clear CTAs.

### How it was built
- Contact methods are data-driven and rendered as clickable cards.
- Uses responsive 2-column layout on `sm+` and single-column on mobile.
- Card hover transitions indicate interactivity.
- Includes a bottom CTA card for direct email conversation start.

## 8) Footer (`src/components/Footer.jsx`)

### What it does
- Displays copyright and learning attribution.
- Adds floating back-to-top control.

### How it was built
- Uses ShadCN `Separator` and button variants.
- Back-to-top button is fixed-position with smooth scroll behavior.
- Footer content is flex-wrapped for clean mobile behavior.

## 9) Responsiveness and Animation Strategy

### Responsiveness
- Standardized container width with `max-w-6xl` and adaptive horizontal padding.
- All major sections convert cleanly between mobile, tablet, and desktop layouts.
- Cards and nav elements use wrapping and breakpoint-aware visibility.

### Animation
- Centralized motion utilities in `src/index.css`:
  - `fade-up`
  - delay classes (`delay-1` ... `delay-4`)
  - `bg-orb` drift animation
  - `pulse-glow`
- Applied animation classes consistently at section and component levels.

## 10) Validation
- `npm run lint` passes.
- `npm run build` passes.
