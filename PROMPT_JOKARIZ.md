# MASTER SPECIFICATION: JOKARIZ.FR (VIBE CODING EDITION)

**Role:** Senior Creative Frontend Developer & UX Designer
**Target Style:** Editorial Brutalism / Premium Dark Mode (Ref: Steven Bartlett, Thirdweb)
**Core Concept:** "From Goldman Sachs to Creator Economy"
**Constraint:** No video assets. High-end static imagery + Advanced Micro-interactions.

---

## 1. TECH STACK & CONFIGURATION
* **Framework:** Next.js 14+ (App Router, TypeScript).
* **Styling:** Tailwind CSS (with `clsx` & `tailwind-merge` for clean class management).
* **Animation Engine:** Framer Motion (Crucial for scroll triggers, layout transitions, kinetic typography).
* **Icons:** Lucide React.
* **Font Optimization:** `next/font` (Google Fonts).
* **State Management:** React Context (for simple global states like Menu open/close).

---

## 2. DESIGN SYSTEM & ART DIRECTION

### 2.1. Color Palette ("Rich Dark")
Avoid pure black (#000) to prevent OLED smearing and maintain depth.
* **Background Main:** `#050505` (Deepest Charcoal).
* **Surface/Cards:** `#0F0F0F` (Slightly lighter).
* **Borders:** `#27272a` (Zinc-800 - Subtle separation).
* **Text Primary:** `#ECECEC` (Off-white, high contrast).
* **Text Secondary:** `#A1A1AA` (Zinc-400).
* **Accent:** White Glow (box-shadow) or Electric Blue (`#3B82F6`) *only* on active states.

### 2.2. Typography
* **Display (Headings):** `Oswald` or `Clash Display`.
    * *Attributes:* Uppercase, Tight tracking (-0.02em), Bold/Semibold.
* **Body (Paragraphs):** `Inter` or `Satoshi`.
    * *Attributes:* High readability, relaxed line-height (1.6).

### 2.3. Global Effects (The "Vibe")
1.  **Noise Overlay:** A fixed `div` covering the viewport with a CSS noise image, `opacity: 0.04`, `pointer-events: none`. Adds film grain texture.
2.  **Spotlight Effect:** Cards should have a radial gradient glow that follows the mouse cursor.
3.  **Image Treatment:** By default, images are **Grayscale** and **High Contrast**. On hover, they transition to **Color**.

---

## 3. CONTENT STRATEGY (STRICT)
* **Titles & Headings:** MUST be contextual. Use terms like: "Jokariz", "Goldman Sachs", "Casser le Déterminisme", "Paris Creator Week", "Impact", "Vision".
* **Body Text:** Use **Lorem Ipsum** for all paragraphs, biographies, and descriptions to focus on layout structure. Vary the length of Lorem Ipsum to simulate real editorial content.

---

## 4. ARCHITECTURE (HUB & SPOKE MODEL)

### 4.1. File Structure (App Router)

/app /page.tsx (Home Hub) /story/page.tsx (Timeline) /projects/page.tsx (Projects Index) /projects/[slug]/page.tsx (Project Details: PCW, Corp, Unicorn) /impact/page.tsx (Stats & Data) /contact/page.tsx /layout.tsx (Persistent Navbar/Footer)

---

## 5. PAGE-BY-PAGE SPECIFICATIONS

### 5.1. HOME (`/`) - The Portal
* **Hero Section:**
    * Full-screen height.
    * **Visual:** High-res portrait (placeholder) on the right, blended into the dark background.
    * **Headline:** "CASSER LE / DÉTERMINISME". Use `Framer Motion` to stagger the words in.
    * **Micro-interaction:** Mouse movement causes a slight parallax effect on the background elements.
* **Navigation Grid (Bento Box):**
    * Instead of a long scroll, a featured grid links to internal pages.
    * *Card 1 (Large):* "L'Histoire" (Link to `/story`).
    * *Card 2 (Medium):* "L'Écosystème" (Link to `/projects`).
    * *Card 3 (Small):* "Impact & Data" (Link to `/impact`).

### 5.2. STORY (`/story`) - The Narrative
* **Layout:** Sticky Sidebar (Left) + Scrolling Content (Right).
* **Left Column (Sticky):** Displays the current Year (e.g., "2015"). Updates as user scrolls.
* **Right Column:**
    * **Block 1 (2015-2021):** "The Golden Cage" (Goldman Sachs, Finance). Dark, rigid aesthetic.
    * **Block 2 (2022):** "The Pivot" (Leaving finance). Glitch effect or shattered text.
    * **Block 3 (2024):** "The Rise" (PCW, Content Creation). Brighter, bolder.
* **Component:** Vertical Progress Bar connecting the timeline dots.

### 5.3. PROJECTS HUB (`/projects`) - The Portfolio
* **Layout:** A premium Grid listing the main entities.
* **Cards:**
    * **Paris Creator Week:** Event imagery (crowds).
    * **Jokariz Corp:** Corporate/Office imagery.
    * **The Unicorn:** Abstract/Futuristic imagery.
* **Transition:** Using Framer Motion `layoutId`, clicking a card should make it expand to fill the screen, transitioning seamlessly into the `/projects/[slug]` page.

### 5.4. PROJECT DETAILS (`/projects/[slug]`)
* **Header:** Huge Typography with the project name.
* **Content:** Alternating layout (Text Left/Image Right -> Image Left/Text Right).
* **Gallery:** Horizontal scroll snap gallery for images.
* **Footer Navigation:** "Next Project" link to keep the loop.

### 5.5. IMPACT (`/impact`) - The "Trading Floor"
* **Concept:** A dashboard inspired by Bloomberg Terminals but minimalist.
* **Components:**
    * **The Big Number:** Total Reach (e.g., "350K+"). Animate this number from 0 on load.
    * **Live Pulse:** A small green dot pulsing next to the stats to imply "Live Data".
    * **Charts:** Use simple SVG lines that draw themselves (pathLength animation) to show growth.
    * **Platform Breakdown:** Cards for LinkedIn, YouTube, IG with specific metrics (Engagement Rate, Watch Time).

---

## 6. IMPLEMENTATION STEPS (FOR AI)

1.  **Scaffold:** Set up Next.js 14, Tailwind, Framer Motion, and the global Layout (Navbar + Footer).
2.  **Styles:** Define the `tailwind.config.ts` with the specific colors and fonts (`Oswald`, `Inter`).
3.  **Components:** Build the "UI Kit" first (Button, Card, SectionWrapper).
4.  **Pages:**
    * Build Home (`/`) with the Kinetic Type Hero.
    * Build Impact (`/impact`) to test the animations.
    * Build Story (`/story`) with the Sticky Scroll logic.
    * Build Projects (`/projects`) with the Hub & Spoke routing.
5.  **Refinement:** Apply the Noise Overlay and "Hover to Color" logic on all images.

---

**IMPORTANT NOTE FOR DEVELOPMENT:**
Do not assume this is a template. This is a bespoke design. Focus heavily on the **transitions** between pages. The site should feel like a fluid application, not a series of static HTML pages.