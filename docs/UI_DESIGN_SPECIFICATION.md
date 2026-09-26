# Anand Education Center — Final UI Design Specification
**Document Version:** 1.0.0  
**Status:** Approved Master Design Specification (Step 4 Complete)  
**Implementation Phase:** Architecture & Specification Only (Code Not Started)  

---

## Source Documents & Verified Assets

This specification is the authoritative visual and behavioral design contract for Anand Education Center. It synthesizes and refines all approved source documents and integrates the four canonical brand assets:

### Approved Source Documents
1. [`docs/BRAND_SYSTEM.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/BRAND_SYSTEM.md) — Master design tokens, color palette, typography guidelines, and voice.
2. [`docs/INFORMATION_ARCHITECTURE.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/INFORMATION_ARCHITECTURE.md) — 7-route sitemap, 15 entity relationships, URL taxonomy, and ERP roadmap.
3. [`docs/HOMEPAGE_WIREFRAME.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/HOMEPAGE_WIREFRAME.md) — 11-section editorial sequence, layout blueprints, and copy hierarchy.
4. [`docs/ASSET_MANIFEST.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/ASSET_MANIFEST.md) — Verified media catalog and ingestion specifications.

### Canonical Verified Brand Assets
- **Institute Master Logo:** [`public/assets/logo/anand-education-center-logo.png`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/logo/anand-education-center-logo.png) ($1024 \times 512\text{ px}$, $681.35\text{ KB}$)
- **Founder Portrait (Ajay Kumar):** [`public/assets/founders/ajay-kumar.jpg`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/founders/ajay-kumar.jpg) ($458 \times 1024\text{ px}$, $94.28\text{ KB}$)
- **Co-Founder Portrait (Brajmala Kumari):** [`public/assets/founders/brajmala-kumari.jpg`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/founders/brajmala-kumari.jpg) ($768 \times 1024\text{ px}$, $283.07\text{ KB}$)
- **Founders Seated Together:** [`public/assets/founders/founders-together.jpg`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/founders/founders-together.jpg) ($1024 \times 768\text{ px}$, $245.31\text{ KB}$)

---

## 1. Design Character

Anand Education Center is an authentic competitive-examination institute rooted in **Bidupur, Vaishali, Bihar, India**. The digital interface represents an esteemed public service mentorship center, not a commercial enterprise.

### 1.1 Core Aesthetic Traits
- **Academic:** Measured typographic hierarchy, generous leading, dignified editorial proportions.
- **Disciplined:** Precise 8-point spatial rhythm, aligned tabular data, calm layout structures without decorative disorder.
- **Trustworthy:** Grounded in factual statements, transparent contact channels, and zero promotional exaggeration.
- **Refined:** Restrained navy surfaces, subtle warm borders, and selective gold punctuation.
- **Warm & Approachable:** Respectful tone welcoming rural and district aspirants without intimidating corporate aloofness.
- **Modern:** Contemporary sans-serif interface elements, crisp rendering on mobile screens, fluid touch responsiveness.
- **Institutional:** Formal seal treatment, clear administrative signposting, structured civil service curricula.

### 1.2 Strict Anti-Patterns (What Must Be Avoided)
| Anti-Pattern | Reason for Exclusion |
| :--- | :--- |
| **Generic coaching-center templates** | Cluttered ribbons, garish starburst discount badges, and sensationalist slogans ruin credibility. |
| **Colorful ed-tech appearance** | Saturated purple/green gradients and cartoon illustrations trivialize UPSC/BPSC preparation. |
| **SaaS dashboard aesthetics** | Cold gray telemetry cards and software metrics do not reflect an educational mentorship center. |
| **Excessive gradients & neon** | High-intensity glow effects and neon buttons contradict academic discipline. |
| **Heavily rounded cards ($>12\text{px}$)** | Soft bubble cards create an informal, juvenile appearance. |
| **Glassmorphism & blur effects** | Overly decorative frosted glass impairs legibility and distracts from content. |
| **Excessive motion & scroll-jacking**| Disrupts reading flow, causes motion discomfort, and delays information retrieval. |
| **Fake luxury & gold flood** | Excessive gold creates a tacky commercial look. Gold must be an intentional accent only. |
| **Stock education imagery** | Generic international classroom photos or staged smiling models destroy local trust. |

---

## 2. Brand Colors

The color palette is strictly governed by the canonical tokens in `BRAND_SYSTEM.md`. Gold remains an accent and must never exceed 8–10% of any viewport's visual surface.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  COLOR DISTRIBUTION RULE: 60 - 30 - 10                                                 │
│                                                                                        │
│  [  60% Warm White / Pure White Canvas  ] [ 30% Deep Navy Authority ] [ 10% Gold Acc ]│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Complete Token Specification & Usage Matrix

| Token Name | Hex Code | Purpose & Where to Use | Where NOT to Use |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `#0B1F3A` | Primary brand headers, hero text/backgrounds, primary button backgrounds, major section boundaries, active states. | Never use as body text on dark backgrounds; never use as full page flood behind long-form reading passages. |
| **Dark Navy** | `#071527` | Deep institutional footer, top utility strip, high-contrast modal backdrops, terminal CTA panels. | Never use for subtle borders or decorative card fills. |
| **Light Navy** | `#163259` | Interactive hover state for Navy buttons, selected course row backgrounds, focused border outlines. | Never use for low-contrast text on white canvas. |
| **Gold** | `#C9A227` | Accent crest markers, small decorative hairlines, active category indicators, discrete focus rings. | **Never use as full section background**, never use for small body text ($<16\text{px}$) on white canvas. |
| **Dark Gold** | `#A6841C` | Text-safe gold accents on white surfaces requiring WCAG AA contrast, active gold button states. | Never use as a flood fill behind dark navy text. |
| **Gold Wash** | `#FBF8EE` | Subtle background tint for highlight callout boxes, selected syllabus modules, badge fills. | Never use on dark navy backgrounds. |
| **Warm White** | `#FAFAF7` | Global canvas background, editorial card alternates, calm negative space. | Never use for high-contrast button labels. |
| **White** | `#FFFFFF` | Content card surfaces, form input backgrounds, active modal containers, text on navy. | Never use with low-contrast borders against warm white canvas. |
| **Primary Text** | `#172033` | Primary editorial headings, body paragraphs, course titles, table header labels. | Never use on dark navy backgrounds (use `#FFFFFF`). |
| **Secondary Text** | `#475467` | Explanatory sub-paragraphs, syllabus descriptions, card summaries, metadata labels. | Do not use for small captions where contrast drops below 4.5:1. |
| **Muted Text** | `#667085` | Breadcrumb dividers, timestamp labels, field helper text, fine print notices. | Never use for primary instructions or action links. |
| **Subtle Border** | `#EBECE9` | Structural dividers between sections, delicate card borders, table row dividers. | Never use where high-contrast visibility is legally required. |
| **Default Border** | `#D0D5DD` | Form input outlines, secondary button borders, unselected tab boundaries. | Do not use as section background colors. |

---

## 3. Typography

The typographic system creates an authoritative academic balance: an expressive, classical serif for titles and institutional headers paired with a crisp, neutral sans-serif for reading comfort, tables, and navigation.

- **Primary Display Font:** `Source Serif 4` (Fallback: `Merriweather`, `Libre Baskerville`, `Georgia`, serif)
- **Interface & Body Font:** `Inter` (Fallback: `Plus Jakarta Sans`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif)

### 3.1 Typographic Scale & Hierarchy Table

| Element Role | Desktop Size | Mobile Size | Line Height | Weight | Letter Spacing | Family | Usage & Treatment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Eyebrow** | `13px` (`0.8125rem`) | `11px` (`0.6875rem`) | 1.4 | 700 | `+0.12em` | `Inter` | All-caps, Gold `#C9A227` or Light Navy `#163259` with subtle leading rule |
| **Hero Heading** | `42px` (`2.625rem`) | `28px` (`1.75rem`) | 1.18 | 600 | `-0.02em` | `Source Serif 4` | Deep Navy `#0B1F3A`, max 2–3 lines, zero artificial word wrap breaks |
| **Hero Body** | `18px` (`1.125rem`) | `15px` (`0.9375rem`) | 1.6 | 400 | `0` | `Inter` | Secondary Text `#475467`, max 640px column width |
| **Section Label** | `12px` (`0.75rem`) | `11px` (`0.6875rem`) | 1.3 | 700 | `+0.1em` | `Inter` | All-caps, Gold `#A6841C`, paired with 16px gold divider rule |
| **Section Heading** | `32px` (`2.0rem`) | `24px` (`1.5rem`) | 1.25 | 600 | `-0.015em` | `Source Serif 4` | Primary Text `#172033`, clear, dignified, academic |
| **Section Body (Lead)** | `17px` (`1.0625rem`) | `15px` (`0.9375rem`) | 1.65 | 400 | `0` | `Inter` | Introductions, about overview paragraphs |
| **Section Body (Std)** | `15px` (`0.9375rem`) | `14px` (`0.875rem`) | 1.6 | 400 | `0` | `Inter` | Standard descriptions, card paragraphs |
| **Navigation Link** | `14px` (`0.875rem`) | `16px` (`1.0rem`) | 1.2 | 500 | `+0.01em` | `Inter` | Primary Text `#172033`, hover to Light Navy `#163259` with gold dot |
| **Primary Button** | `14px` (`0.875rem`) | `14px` (`0.875rem`) | 1.0 | 600 | `+0.04em` | `Inter` | All-caps or Title-case, White text on Navy `#0B1F3A` |
| **Secondary Button** | `14px` (`0.875rem`) | `14px` (`0.875rem`) | 1.0 | 500 | `+0.02em` | `Inter` | Navy Text `#0B1F3A`, 1px border `#D0D5DD` |
| **Metadata / Badges**| `11px` (`0.6875rem`) | `10px` (`0.625rem`) | 1.2 | 600 | `+0.06em` | `Inter` | All-caps exam pills, location stamps, verification flags |
| **Course Track Title**| `22px` (`1.375rem`) | `18px` (`1.125rem`) | 1.3 | 600 | `-0.01em` | `Source Serif 4` | Program card titles (01 UPSC, 02 BPSC, etc.) |
| **Founder Name** | `24px` (`1.5rem`) | `20px` (`1.25rem`) | 1.25 | 600 | `-0.01em` | `Source Serif 4` | Ajay Kumar, Brajmala Kumari |
| **Founder Role** | `13px` (`0.8125rem`) | `12px` (`0.75rem`) | 1.4 | 600 | `+0.08em` | `Inter` | All-caps, Gold `#A6841C`, Founder / Co-Founder |
| **Footer Heading** | `12px` (`0.75rem`) | `12px` (`0.75rem`) | 1.3 | 700 | `+0.1em` | `Inter` | All-caps, White `#FFFFFF` with 2px gold underline bar |
| **Footer Link** | `13px` (`0.8125rem`) | `14px` (`0.875rem`) | 1.6 | 400 | `0` | `Inter` | Soft slate `#CBD5E1`, hover to White `#FFFFFF` |

---

## 4. Global Grid & Spatial Layout

The spatial rhythm adheres to a strict 8-point base grid (with a 4-point half-step for micro-alignment).

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  DESKTOP VIEWPORT (1440px):                                                            │
│  ├── Outer Margin: Auto ────────────────────────────────────────────────────────────┤  │
│  │   ┌──────────────────────────────────────────────────────────────────────────┐   │  │
│  │   │  MAX CONTENT CONTAINER: 1200px                                           │   │  │
│  │   │  ├── Padding Left: 32px to 48px                                          │   │  │
│  │   │  │   ┌────────────────────────────────────────────────────────────┐      │   │  │
│  │   │  │   │  EDITORIAL CONTENT COLUMN: 720px - 800px                   │      │   │  │
│  │   │  │   └────────────────────────────────────────────────────────────┘      │   │  │
│  │   │  └── Padding Right: 32px to 48px                                         │   │  │
│  │   └──────────────────────────────────────────────────────────────────────────┘   │  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Viewport Breakpoints & Container Dimensions
- **Desktop Max Container Width:** `1200px` (Auto-centered with `margin-inline: auto`).
- **Editorial Text Column Width:** `720px–800px` (Enforces 60–75 characters per line for optimal academic readability).
- **Desktop Horizontal Padding:** `48px` ($>1280\text{px}$), `32px` ($1024\text{px}–1280\text{px}$).
- **Tablet Horizontal Padding:** `24px–32px` ($768\text{px}–1023\text{px}$).
- **Mobile Horizontal Padding:** `20px` ($360\text{px}–767\text{px}$), `16px` ($320\text{px}–359\text{px}$).

### 4.2 Vertical Section Spacing Rhythm
- **Hero Top Offset:** `32px` desktop, `20px` mobile (below sticky header).
- **Standard Desktop Major Section Gap:** `80px` (`5.0rem`) padding top and bottom.
- **Compact Adjacent Section Gap:** `64px` (`4.0rem`) (e.g., between Identity Strip and Introduction).
- **Mobile Major Section Gap:** `48px` (`3.0rem`) padding top and bottom.
- **Inner Component Gaps:**
  - Between Section Label and Heading: `8px` (`0.5rem`).
  - Between Section Heading and Lead Paragraph: `16px` (`1.0rem`).
  - Between Text Header and Grid Cards: `40px` (`2.5rem`) desktop, `24px` (`1.5rem`) mobile.

---

## 5. Header Component Specification

A restrained institutional header communicating location coordinates, verified phone numbers, and primary navigation without commercial clutter.

### 5.1 Desktop Layout & Hierarchy
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ UTILITY STRIP (36px): Bidupur, Vaishali, Bihar | Tel: +91 7766959980 | +91 9905871193 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ MAIN HEADER (80px):                                                                    │
│ [AEC LOGO: 42px H]    Home  About  Courses  Faculty  Results  Admissions  Contact      │
│                                                [ ENQUIRE NOW ]   [ Student Login ]     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Top Utility Strip:**
  - Height: `36px`. Background: Dark Navy `#071527`. Border-bottom: `1px solid rgba(255,255,255,0.08)`.
  - Left content: Geometric pin icon + `Bidupur, Vaishali, Bihar, India` (`12px`, `#CBD5E1`).
  - Right content: Telephone icon + click-to-call links `+91 7766959980` and `+91 9905871193` (`12px`, Gold `#C9A227`).
- **Main Navigation Bar:**
  - Height: `80px` standard (contracts to `68px` when scrolled/sticky).
  - Background: Pure White `#FFFFFF` with `backdrop-filter: blur(8px)`.
  - Border-bottom: `1px solid var(--color-border-subtle)` (`#EBECE9`).
  - Sticky Behavior: `position: sticky; top: 0; z-index: 50;`.
  - **Logo Placement:** Left-aligned.
    - Image source: `public/assets/logo/anand-education-center-logo.png`.
    - Height: `42px` desktop. Width: Auto (maintains exact $2:1$ aspect ratio, $\approx 84\text{px}$).
    - Click target: Navigates to `/` (Homepage).
  - **Navigation Links:** Center/right-aligned.
    - 7 items: `Home`, `About`, `Courses`, `Faculty`, `Results`, `Admissions`, `Contact`.
    - Gap: `28px` between items.
    - Typography: `14px`, 500 weight, `#172033`. Active link has a `2px` gold underline or bottom dot.
  - **Header Actions:**
    - Secondary Action: `Student Login` (`13px`, `#475467`, discrete outline or text link).
    - Primary CTA: `ENQUIRE NOW` (`13px`, 600 weight, Navy `#0B1F3A` solid, White text, $4\text{px}$ radius, $10\text{px} \times 18\text{px}$ padding).

### 5.2 Mobile Header & Navigation Drawer
- Height: `64px`.
- Layout: [Logo ($32\text{px}$ height)] | [Quick Call Icon (`tel:7766959980`)] | [Hamburger Menu Button ($44\text{px} \times 44\text{px}$ touch target)].
- **Mobile Drawer Behavior:**
  - Triggered by hamburger toggle. Slides smoothly from the right ($300\text{ms}$ ease-out) covering 85% of screen width (max $360\text{px}$).
  - Background: Deep Navy `#0B1F3A` or White `#FFFFFF` with high-contrast slate backing.
  - Links: Stacked vertically with $48\text{px}$ touch heights.
  - Direct Phone Action: Prominent `Call Desk: 7766959980` tap target at bottom of drawer.
  - Zero navigation squeezing: All 7 links remain fully legible with $16\text{px}$ font size.

---

## 6. Hero Section Specification

The hero section uses an **authoritative typography-led architecture** that conveys immediate purpose, geographic grounding, and academic discipline.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                        │
│  [ EMBLEM LOGO LOCKUP: max-width 300px ]                                               │
│                                                                                        │
│  EYEBROW:       ANAND EDUCATION CENTER • BIDUPUR, VAISHALI, BIHAR                      │
│                                                                                        │
│  HEADING:       Disciplined Preparation for                                            │
│                 Competitive Examinations                                               │
│                                                                                        │
│  LEAD COPY:     Guiding aspirants through rigorous, structured preparation for         │
│                 civil services and national recruitment commissions. Grounded in       │
│                 academic integrity and dedicated classroom mentorship.                 │
│                                                                                        │
│  EXAM TRACKS:   [ UPSC ]   [ BPSC ]   [ SSC ]   [ RAILWAY ]   [ BANKING ]              │
│                                                                                        │
│  ACTIONS:       [ ENQUIRE NOW ]        [ EXPLORE COURSES  → ]                          │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.1 Hero Visual Rules
- **Strict Prohibition:** **DO NOT use founder photographs in the hero.** Founder portraits belong exclusively to Section 07 (Founders & Leadership Desk).
- **No Stock Images:** No background photographs of foreign libraries, graduation caps, or generic students.
- **Background Treatment:** Warm White `#FAFAF7` canvas with an optional hairline geometric watermark or ultra-subtle radial gradient (`radial-gradient(circle at 50% 20%, #FBF8EE 0%, #FAFAF7 70%)`).
- **Logo Treatment:**
  - Ingested asset: `public/assets/logo/anand-education-center-logo.png`.
  - Rendered width: `280px–320px` desktop, `200px–240px` mobile. Height: Auto.
  - Placed prominently above the eyebrow or integrated seamlessly at the hero apex.
- **Working Heading (Editable Content):**
  - Text: `"Disciplined Preparation for Competitive Examinations"`
  - Tag: `<h1 class="font-serif text-3xl md:text-5xl font-semibold text-primary-navy">`
  - Max line count: 2 lines desktop, 3 lines mobile.
- **Exam Track Badges:**
  - 5 monochrome or gold-accented badges: `UPSC`, `BPSC`, `SSC`, `RAILWAY`, `BANKING`.
  - Style: `1px solid #D0D5DD`, `#0B1F3A` text, $4\text{px}$ radius, $6\text{px} \times 14\text{px}$ padding.
- **Action CTAs:**
  - Primary: `ENQUIRE NOW` (Deep Navy solid fill, white text, $4\text{px}$ radius, $14\text{px} \times 28\text{px}$ padding).
  - Secondary: `EXPLORE COURSES →` (Outline button, $1\text{px}$ border `#D0D5DD`, `#0B1F3A` text).

---

## 7. Identity Strip Component

A high-density, factual horizontal ribbon positioned immediately below the hero to anchor the institute's geographic and curricular reality.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  ANAND EDUCATION CENTER  ·  BIDUPUR, VAISHALI, BIHAR  ·  UPSC · BPSC · SSC · RRB · IBPS│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Height:** `52px` desktop, auto/stacked (`72px`) mobile.
- **Background:** Soft Navy Wash `#F0F4F8` or Warm Off-White `#F3F4F1`.
- **Borders:** Top and bottom `1px solid var(--color-border-subtle)` (`#EBECE9`).
- **Content:**
  - Institution Name: `ANAND EDUCATION CENTER` (700 weight, `12px`, `#0B1F3A`, tracking `+0.08em`).
  - Dot Separator: Gold `#C9A227` bullet (`·`).
  - Location: `Bidupur, Vaishali, Bihar, India` (500 weight, `13px`, `#475467`).
  - Dot Separator: Gold `#C9A227` bullet (`·`).
  - Exam Focus: `UPSC · BPSC · SSC · RAILWAY · BANKING` (600 weight, `12px`, `#0B1F3A`).
- **Zero Statistics Mandate:** Absolutely no counters, "1000+ students", "98% success", or unverified claims.

---

## 8. About Section Specification

An editorial asymmetric two-column layout presenting the institute's mission in Vaishali district without corporate fluff or fabricated founding myths.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  SECTION LABEL: ABOUT ANAND EDUCATION CENTER                                           │
│                                                                                        │
│  [ LEFT COLUMN: 45% ]                   [ RIGHT COLUMN: 55% ]                          │
│  Large Editorial Serif Title:           Lead Narrative Paragraph (Editable):           │
│  "Dedicated to Civil Services           "Founded in Bidupur, Vaishali, Anand Education │
│  and National Examination               Center was established to provide disciplined, │
│  Excellence in Vaishali."               focused competitive examination guidance to    │
│                                         aspirants within their home district..."       │
│  [ READ ABOUT THE INSTITUTE → ]                                                        │
│                                         Secondary Institutional Context (Editable)...  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Layout Style:** Editorial asymmetry (Left column 40–45% sticky headline, Right column 55–60% narrative text).
- **Avoid:** Generic "About Us" boxed card with stock cartoon illustrations.
- **Section Label:** `ABOUT ANAND EDUCATION CENTER` (`12px`, bold, uppercase, `#A6841C`).
- **Primary Editorial Heading:** `Source Serif 4`, $28\text{px}–34\text{px}$, `#172033`.
- **Content Integrity:** All narrative text is explicitly marked as an editable content slot until verified institutional history is confirmed.
- **Image Strategy:** No fake campus photos. An optional dignified architectural texture or official emblem watermark is permitted; otherwise clean white space is preferred.
- **CTA:** `READ ABOUT THE INSTITUTE →` (Editorial text link, 600 weight, Navy `#0B1F3A` with gold arrow hover).

---

## 9. Courses Section Specification

Structured presentation of the institute's five core examination preparation tracks.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  SECTION LABEL: ACADEMIC CURRICULUM                                                    │
│  HEADING: Comprehensive Preparation Programs                                           │
│  SUB-HEADING: Structured foundation and test-series tracks tailored to syllabi.        │
│                                                                                        │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│  │ 01           │ │ 02           │ │ 03           │ │ 04           │ │ 05           │ │
│  │ UPSC         │ │ BPSC         │ │ SSC          │ │ RAILWAY      │ │ BANKING      │ │
│  │ Civil Serv.  │ │ State Serv.  │ │ CGL / CHSL   │ │ RRB NTPC     │ │ IBPS / SBI   │ │
│  │ [Short desc] │ │ [Short desc] │ │ [Short desc] │ │ [Short desc] │ │ [Short desc] │ │
│  │ View Details→│ │ View Details→│ │ View Details→│ │ View Details→│ │ View Details→│ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 9.1 Track Inventory
1. **`01 UPSC`** — Union Public Service Commission (Civil Services Examination — Prelims & Mains Foundation).
2. **`02 BPSC`** — Bihar Public Service Commission (Combined Competitive Examination & State Services).
3. **`03 SSC`** — Staff Selection Commission (Combined Graduate Level - CGL, CHSL, and General Duty).
4. **`04 RAILWAY`** — Railway Recruitment Boards (RRB NTPC, Group D, and Technical Cadres).
5. **`05 BANKING`** — Banking Personnel Selection (IBPS PO/Clerk, SBI PO/Clerk, and RBI Assistants).

### 9.2 Card Design & Responsive Layout
- **Desktop Layout:** 5 balanced vertical cards across a 5-column grid or 3-column top + 2-column centered bottom row.
- **Tablet Layout ($768\text{px}–1023\text{px}$):** 2 columns with the 5th card spanning full width.
- **Mobile Layout ($<768\text{px}$):** 1-column vertical stack.
- **Card Specifications:**
  - Background: Pure White `#FFFFFF`.
  - Border: `1px solid var(--color-border-subtle)` (`#EBECE9`).
  - Radius: `4px` (`--radius-md`).
  - Padding: `28px 24px`.
  - Monogram / Number: `01` to `05` (`13px`, font-sans, 600 weight, Gold `#C9A227`).
  - Title: `Source Serif 4`, $20\text{px}$, 600 weight, `#172033`.
  - Description: Editable syllabus summary, $14\text{px}$, line-height 1.55, `#475467`.
  - Footer Action: `View Syllabus & Track →` (`13px`, 600 weight, `#0B1F3A`).
- **Hover Interaction:** Card border transitions from `#EBECE9` to Light Navy `#163259` with a subtle top hairline in Gold (`#C9A227`), card shifts $2\text{px}$ upward (`transform: translateY(-2px)`), transition $200\text{ms}$. No bouncing or heavy shadows.

---

## 10. Academic Pillars Specification

Presents the educational methodology through an **editorial numbered list** rather than five bulky feature boxes.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [ LEFT: 35% STICKY ]                   [ RIGHT: 65% NUMBERED METHODOLOGY ]            │
│  Section Eyebrow: METHODOLOGY           01  FACULTY GUIDANCE                           │
│  Title: The Anand Education             Direct mentorship focused on conceptual        │
│         Academic Framework              clarity, syllabus depth, and disciplined study.│
│                                         ────────────────────────────────────────────── │
│  Description: Grounded teaching         02  STRUCTURED PREPARATION                     │
│  models designed for consistent,        Systematic phase-wise progression through      │
│  long-term exam readiness.              foundational concepts to advanced mastery.     │
│                                         ────────────────────────────────────────────── │
│                                         03  PRACTICE & TESTING                         │
│                                         Regular answer-writing practice and benchmark  │
│                                         evaluations mirroring commission standards.    │
│                                         ────────────────────────────────────────────── │
│                                         04  CURATED STUDY MATERIAL                     │
│                                         Concise, syllabus-aligned subject modules      │
│                                         eliminating unneeded information clutter.      │
│                                         ────────────────────────────────────────────── │
│                                         05  PERSONAL ATTENTION                         │
│                                         Individual doubt resolution ensuring no        │
│                                         aspirant is left behind in core subjects.      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Five Approved Categories:**
  1. `01 Faculty Guidance`
  2. `02 Structured Preparation`
  3. `03 Practice & Testing`
  4. `04 Curated Study Material`
  5. `05 Personal Attention`
- **Presentation Rule:** Editorial split layout. Sticky left title on desktop. Clean sequential numbered items separated by subtle dividers (`1px solid #EBECE9`).
- **Hover Behavior:** Item background gently shifts to Gold Wash `#FBF8EE` with a $2\text{px}$ left border accent in Gold `#C9A227`.

---

## 11. Founders Section Specification (Critical Module)

This section celebrates the authentic leadership and roots of Anand Education Center.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  SECTION LABEL: INSTITUTIONAL LEADERSHIP                                               │
│  HEADING: Leadership & Mentorship Desk                                                 │
│                                                                                        │
│  ┌───────────────────────────────┐           ┌───────────────────────────────┐         │
│  │ [PHOTO: ajay-kumar.jpg]       │           │ [PHOTO: brajmala-kumari.jpg]  │         │
│  │ Aspect Ratio: 4:5 Portrait    │           │ Aspect Ratio: 4:5 Portrait    │         │
│  │ Object-fit: cover (top-center)│           │ Object-fit: cover (top-center)│         │
│  │                               │           │                               │         │
│  │ AJAY KUMAR                    │           │ BRAJMALA KUMARI               │         │
│  │ Founder                       │           │ Co-Founder                    │         │
│  │                               │           │                               │         │
│  │ [Biographical narrative       │           │ [Biographical narrative       │         │
│  │  placeholder - editable]      │           │  placeholder - editable]      │         │
│  └───────────────────────────────┘           └───────────────────────────────┘         │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │ [OPTIONAL SECONDARY MODULE: founders-together.jpg]                               │  │
│  │ "Founded with a shared commitment to empowering students in Vaishali district."  │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 11.1 Authoritative Assets & Role Labels
- **Ajay Kumar:**
  - Asset: [`public/assets/founders/ajay-kumar.jpg`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/founders/ajay-kumar.jpg)
  - Title: **AJAY KUMAR**
  - Role Label: **Founder**
- **Brajmala Kumari:**
  - Asset: [`public/assets/founders/brajmala-kumari.jpg`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/founders/brajmala-kumari.jpg)
  - Title: **BRAJMALA KUMARI**
  - Role Label: **Co-Founder**
- **Founders Together (Secondary/Optional Editorial Module):**
  - Asset: [`public/assets/founders/founders-together.jpg`](file:///c:/Users/User/OneDrive/Desktop/AEC/public/assets/founders/founders-together.jpg)
  - Placement: Horizontal wide card below the individual portraits or reserved for the dedicated `/about` route.

### 11.2 Image Cropping & Rendering Safeguards
- **Zero Oval/Circular Avatars:** Never crop founders into circular thumbnail cutouts.
- **Aspect Ratio:** Render within an editorial portrait container:
  - Container aspect ratio: `4:5` (or native aspect ratio).
  - CSS rule: `object-fit: cover; object-position: center 20%; width: 100%; border-radius: 4px;`.
  - Desktop dimensions: Max width `440px`, height $\approx 550\text{px}$.
  - Mobile dimensions: Full width of mobile container, max height $420\text{px}$.
- **Facial Integrity Rule:** The top 25% of the image frame must never be cropped out, guaranteeing forehead, eyes, and expressions are fully preserved.
- **Biography Content Safeguard:** DO NOT invent degrees, years of teaching, or external qualifications. Use neutral, dignified institutional framing:
  - *Ajay Kumar:* "Guiding the academic vision and institutional discipline of Anand Education Center in Bidupur, Vaishali."
  - *Brajmala Kumari:* "Co-founder dedicated to institutional development and fostering educational opportunities for district aspirants."

---

## 12. Results Section Specification (Graceful Empty State)

Because Anand Education Center maintains strict integrity and does not publish unverified marketing numbers, this section is designed as a **dignified, transparent registry panel**.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  SECTION LABEL: ACADEMIC INTEGRITY                                                     │
│  HEADING: Verified Student Results Registry                                            │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                  │  │
│  │   [ MINIMAL VERIFICATION SHIELD ICON ]                                           │  │
│  │                                                                                  │  │
│  │   VERIFIED RESULTS REGISTRY                                                      │  │
│  │                                                                                  │  │
│  │   "Official student examination selections and roll-number records will be        │  │
│  │   published here following administrative verification."                         │  │
│  │                                                                                  │  │
│  │   Anand Education Center adheres to strict ethical verification. We do not       │  │
│  │   publish unconfirmed claims or unverified selections.                           │  │
│  │                                                                                  │  │
│  │   [ INQUIRE ABOUT SELECTION RECORDS → ]                                          │  │
│  │                                                                                  │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 12.1 Visual Rules
- **Container:** Warm White background `#FAFAF7` with subtle dashed or hairline border (`1px solid #D0D5DD`), $4\text{px}$ radius, $48\text{px}$ inner padding.
- **Copy:** Editable text confirming institutional transparency.
- **Zero Fabrication:** Zero fake topper photos, zero fake ranks (e.g., "AIR 12"), zero fake percentages.
- **Future Transition:** Once verified student achievements are logged in the admin registry, this container dynamically populates with standardized cards: `[Student Name] | [Exam Category: e.g. 68th BPSC] | [Cadre/Roll Ref] | [Year]`.

---

## 13. Admissions & Enquiry CTA Component

A high-contrast, commanding panel in Deep Navy (`#0B1F3A`) inviting aspirants to initiate contact or walk in to the Bidupur campus.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [ DEEP NAVY CONTAINER: #0B1F3A  |  1200px MAX  |  PADDING: 56px 48px ]                 │
│                                                                                        │
│  EYEBROW:       BEGIN YOUR PREPARATION                                                 │
│  TITLE:         Admissions Open for Upcoming Batches                                   │
│  SUBTITLE:      Visit the Bidupur center or speak directly with the admissions desk.   │
│                                                                                        │
│  TELEPHONE HELPLINES:                                                                  │
│  +91 7766959980   ·   +91 9905871193                                                   │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │ FUTURE ENQUIRY FORM FIELDS:                                                      │  │
│  │ [ Full Name ]   [ Mobile Number ]   [ Target Exam: UPSC/BPSC/SSC... ]            │  │
│  │ [ Optional Message / Query ]                                                     │  │
│  │ [ SUBMIT ENQUIRY ]                                                               │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Background:** Primary Navy `#0B1F3A` with subtle top hairline in Gold `#C9A227`.
- **Primary Action:** `ENQUIRE NOW` (Gold button `#C9A227`, Navy text `#071527`, 600 weight).
- **Secondary Action:** Direct phone link: `CALL ADMISSIONS DESK` (`tel:7766959980`).
- **Enquiry Form Fields (When Enabled):** Exactly 4 essential fields:
  1. `Full Name` (text input)
  2. `Mobile Number` (10-digit Indian phone validation)
  3. `Target Examination` (Select: UPSC / BPSC / SSC / Railway / Banking)
  4. `Message` (Optional query textarea)
- **Zero Bloat:** Do not ask for gender, father's name, caste, or date of birth on public lead forms.

---

## 14. Contact & Campus Desk Specification

Displays the verified physical and telephonic coordinates of Anand Education Center.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [ LEFT: CAMPUS DIRECTORY - 50% ]          [ RIGHT: ADMISSIONS DESK HOURS - 50% ]      │
│  ANAND EDUCATION CENTER                    CAMPUS ENQUIRY DESK                         │
│  Bidupur, Vaishali, Bihar, India           Monday – Saturday: 08:00 AM – 06:00 PM      │
│                                            Sunday: Morning Session Only                │
│  DIRECT TELEPHONE HELPLINES:                                                           │
│  +91 7766959980                            CONTACT CHANNELS:                           │
│  +91 9905871193                            Phone Enquiries: Available Daily            │
│                                            Walk-In Counseling: Bidupur Campus          │
│  [ MAP / LOCATION PLACEHOLDER ]            [ OFFICIAL EMAIL: PLACEHOLDER ]             │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Verified Address:** `Bidupur, Vaishali, Bihar, India`.
- **Verified Phone Lines:** `+91 7766959980` and `+91 9905871193`.
- **Prohibited Inventions:** Do not invent email addresses (e.g. `info@anand.com`), WhatsApp chat links, social media handles, or latitude/longitude coordinates. These remain clearly designated placeholder slots.

---

## 15. Footer Component Specification

A formal institutional base anchoring the platform with complete legal, academic, and navigation signposts.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [ DEEP NAVY FOOTER: #071527  |  PADDING: 64px 48px 32px 48px ]                        │
│                                                                                        │
│  COL 1 (40%):               COL 2 (20%):     COL 3 (20%):       COL 4 (20%):           │
│  [AEC LOGO: 36px H]         QUICK LINKS      EXAM TRACKS        CAMPUS DESK            │
│  ANAND EDUCATION CENTER     Home             UPSC Civil Serv.   Bidupur, Vaishali      │
│  Bidupur, Vaishali, Bihar   About Us         BPSC Combined      Bihar, India           │
│  Disciplined Competitive    Faculty & Mentors SSC (CGL / CHSL)  Tel: 7766959980        │
│  Exam Preparation.          Results          Railway (RRB)      Tel: 9905871193        │
│                             Admissions       Banking (IBPS/SBI) Student Portal         │
│                                                                                        │
│  ────────────────────────────────────────────────────────────────────────────────────  │
│  © 2026 Anand Education Center. All rights reserved.  ·  Bidupur, Vaishali, Bihar      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Background:** Dark Navy `#071527`.
- **Top Border:** `2px solid var(--color-accent-gold)` (`#C9A227`).
- **Typography:**
  - Column Headers: `12px`, all-caps, 700 weight, White `#FFFFFF`, tracking `+0.1em`.
  - Column Links: `13px`, `#CBD5E1`, line-height 1.8, hover to White `#FFFFFF`.
- **Mobile Behavior:** 4 columns stack cleanly into 1 column with $32\text{px}$ vertical separation between link groups.

---

## 16. Button & Interactive Element System

Buttons communicate decisive institutional authority through clear tactile contrast and subtle corner radii.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  BUTTON SYSTEM BLUEPRINT                                                               │
│                                                                                        │
│  [ PRIMARY: Navy #0B1F3A | White Text | 4px Radius | 12px 24px pad ]                  │
│  [ SECONDARY: Transparent | Navy Border #D0D5DD | Navy Text | 4px Radius ]             │
│  [ ACCENT CTA: Gold #C9A227 | Navy Text #071527 | 600 Weight | 4px Radius ]            │
│  [ TEXT LINK: Deep Navy #0B1F3A | Underline on hover | Gold Arrow '→' ]                │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 16.1 Button Hierarchy & States Table

| Variant | Default State | Hover State | Active / Focus State | Disabled State |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | Background: `#0B1F3A`<br>Text: `#FFFFFF`<br>Border: None<br>Radius: `4px` | Background: `#163259`<br>Transform: `translateY(-1px)` | Focus Ring: `2px solid #0B1F3A`<br>Offset: `2px`<br>Active: `#071527` | Background: `#EBECE9`<br>Text: `#98A2B3`<br>Cursor: `not-allowed` |
| **Accent Gold** | Background: `#C9A227`<br>Text: `#071527`<br>Border: None<br>Radius: `4px` | Background: `#A6841C`<br>Text: `#FFFFFF` | Focus Ring: `2px solid #C9A227`<br>Offset: `2px`<br>Active: `#8B6E14` | Background: `#FBF8EE`<br>Text: `#A6841C`<br>Opacity: `0.5` |
| **Secondary Outline** | Background: `transparent`<br>Text: `#0B1F3A`<br>Border: `1px solid #D0D5DD`<br>Radius: `4px` | Background: `#F0F4F8`<br>Border: `1px solid #0B1F3A` | Focus Ring: `2px solid #0B1F3A`<br>Offset: `2px` | Border: `1px solid #EBECE9`<br>Text: `#98A2B3` |
| **Editorial Text** | Background: `none`<br>Text: `#0B1F3A`<br>Padding: `0`<br>Weight: `600` | Text: `#163259`<br>Underline: `1px solid #C9A227` | Focus: Outline `2px dotted #0B1F3A` | Text: `#98A2B3` |
| **Phone Call Action** | Background: `#F0F4F8`<br>Text: `#0B1F3A`<br>Icon: Phone | Background: `#0B1F3A`<br>Text: `#FFFFFF`<br>Icon: Gold | Focus Ring: `2px solid #C9A227` | N/A (Direct link) |

---

## 17. Card System Specification

Cards are quiet organizational structures, not floating visual novelties.

- **Corner Radius:** Fixed `4px` (`--radius-md`). Never exceed $6\text{px}$.
- **Borders:** Crisp `1px solid var(--color-border-subtle)` (`#EBECE9`).
- **Backgrounds:** Pure White `#FFFFFF` on Warm White `#FAFAF7` canvas.
- **Padding:**
  - Compact Cards: `20px` inner padding.
  - Standard Cards: `28px` inner padding.
  - Large Feature Cards: `36px` inner padding.
- **Elevation / Shadow Policy:**
  - Default: No drop-shadow (`box-shadow: none;`).
  - Hover: Ultra-subtle academic shadow (`box-shadow: 0 4px 12px rgba(11, 31, 58, 0.05);`).
  - **Forbidden:** Heavy blurred shadows, neon outer glows, floating layered cards.

---

## 18. Icon System Specification

A unified, minimal line-icon language designed for clarity and functionality.

- **Icon Style:** Minimalist line-art with consistent `1.5px` stroke weight (e.g., Lucide Icons / Heroicons Outline).
- **Icon Sizing:**
  - Micro / Inline: `16px \times 16px`.
  - Standard Action: `20px \times 20px`.
  - Section Header: `24px \times 24px`.
- **Colors:** Primary Navy `#0B1F3A`, Gold `#C9A227`, or Secondary Slate `#475467`.
- **Functional Use Only:**
  - Phone: Telephone receiver icon for helplines.
  - Map Pin: Coordinates for Bidupur, Vaishali.
  - Arrow: Directional indicator `→` on interactive readouts.
  - Document / Book: Curriculum syllabus modules.
- **Strict Ban:** **Zero emojis** anywhere in production navigation, cards, or headings.

---

## 19. Image System & Ingestion Standards

Preserving original resolution, authentic facial proportions, and aspect ratio integrity.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  IMAGE INTEGRITY MATRIX                                                                │
│                                                                                        │
│  [ MASTER LOGO ]          Aspect: 2:1 | Object-fit: contain | Height: 36-44px          │
│  [ FOUNDER: AJAY ]        Aspect: 4:5 | Object-fit: cover   | Position: center 20%     │
│  [ FOUNDER: BRAJMALA ]    Aspect: 4:5 | Object-fit: cover   | Position: center 20%     │
│  [ FOUNDERS TOGETHER ]    Aspect: 4:3 | Object-fit: cover   | Position: center center  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 19.1 Technical Asset Rules

| Asset | Target Render Dimensions | Aspect Ratio | `object-fit` | `object-position` | Loading | Alt Text Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Institute Logo** | Desktop: $84\text{px} \times 42\text{px}$<br>Mobile: $64\text{px} \times 32\text{px}$ | $2:1$ | `contain` | `left center` | `eager` (priority) | `"Anand Education Center — Official Emblem"` |
| **Founder: Ajay Kumar** | Desktop: $400\text{px} \times 500\text{px}$<br>Mobile: $320\text{px} \times 400\text{px}$ | $4:5$ | `cover` | `center 20%` | `lazy` | `"Ajay Kumar, Founder of Anand Education Center"` |
| **Co-Founder: Brajmala Kumari**| Desktop: $400\text{px} \times 500\text{px}$<br>Mobile: $320\text{px} \times 400\text{px}$ | $4:5$ | `cover` | `center 20%` | `lazy` | `"Brajmala Kumari, Co-Founder of Anand Education Center"` |
| **Founders Together** | Desktop: $600\text{px} \times 450\text{px}$<br>Mobile: $340\text{px} \times 255\text{px}$ | $4:3$ | `cover` | `center center` | `lazy` | `"Ajay Kumar and Brajmala Kumari, Founders of Anand Education Center"` |

- **Facial Crop Protection:** The top 20–25% of both founder portraits must be protected. Container heights must adjust dynamically to prevent chin or forehead cropping.
- **Zero AI Filters:** Real user photos must be delivered verbatim without smoothing, retouching, or synthetic alteration.

---

## 20. Motion & Transition System

Micro-interactions must feel purposeful, smooth, and respectful of user focus.

### 20.1 Durations & Easings
- **Micro-Hover (Buttons, Links):** `150ms–200ms` with `ease-out`.
- **Card Focus & Transitions:** `200ms–250ms` with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Section Reveals (Scroll-triggered):** `350ms–450ms` with `ease-out`.
- **Navigation Drawer Slide:** `300ms` with `cubic-bezier(0.25, 1, 0.5, 1)`.

### 20.2 Permitted vs Forbidden Motion
- **Permitted:**
  - Opacity fade-in ($0 \rightarrow 1$).
  - Subtle upward translation ($\le 4\text{px}$ on hover, $\le 12\text{px}$ on section enter).
  - Border color shift (`#EBECE9` $\rightarrow$ `#163259`).
  - Subtle image zoom on card hover ($\le 1.02\times$).
- **Forbidden:**
  - Continuous rotating badges or spinning crests.
  - Bouncing CTA buttons or shaking phone icons.
  - Parallax image scrolling.
  - Full-page scroll hijacking.
- **Accessibility Safeguard:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 21. Responsive Design Specification

Precise behavioral contracts across 8 standard device viewports.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  VIEWPORT CONTINUUM                                                                    │
│  [ 320px ] ── [ 360px ] ── [ 390px ] ── [ 414px ] ── [ 768px ] ── [ 1024px ] ── [ 1440px│
│    Ultra       Small        Modern       Large        Tablet       Desktop      Widescreen │
│    Narrow      Mobile       Phone        Phablet                   Standard                │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 21.1 Breakpoint-by-Breakpoint Rules

| Viewport | Header & Nav | Hero Layout | Courses (Programs) | Founders Module | Footer |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`320px` (Ultra Narrow)** | $32\text{px}$ logo, call icon, menu toggle. $16\text{px}$ padding. | Logo $180\text{px}$ width. Heading $24\text{px}$ serif. Stacked CTAs. | 1 column. $16\text{px}$ padding. | 1 column. $320\text{px}$ photo height. | 1 column stacked. |
| **`360px` (Standard Small)**| $32\text{px}$ logo. $20\text{px}$ horizontal gutters. | Heading $26\text{px}$. Lead text $14\text{px}$. Full-width buttons. | 1 column. Full width. | 1 column. $360\text{px}$ photo height. | 1 column stacked. |
| **`390px` (iPhone Standard)**| $34\text{px}$ logo. $44\text{px}$ touch targets verified. | Heading $28\text{px}$. Badges wrap gracefully into 2 rows. | 1 column. $20\text{px}$ padding. | 1 column. Aspect 4:5 preserved. | 1 column stacked. |
| **`414px` (Large Mobile)** | $36\text{px}$ logo. Call action text visible. | Heading $30\text{px}$. Exam badges wrap in 1–2 rows. | 1 column. Generous card padding. | 1 column. Natural portrait scale. | 1 column stacked. |
| **`768px` (Tablet Portrait)**| 7 nav links collapse to drawer or compact row. | Heading $34\text{px}$. Side-by-side hero CTAs. | 2 columns (Cards 1–4) + 1 spanning row (Card 5). | 2 side-by-side columns ($340\text{px}$ width each). | 2 columns ($2 \times 2$ grid). |
| **`1024px` (Small Desktop)** | Full desktop nav visible ($14\text{px}$ links). Utility strip active. | Heading $38\text{px}$. Max width $960\text{px}$. | 5 columns horizontal or 3+2 grid. | 2 side-by-side columns ($420\text{px}$ width each). | 4 columns horizontal. |
| **`1280px` (Standard Desktop)**| Master 80px header. Full phone helplines visible. | Heading $42\text{px}$. Max width $1120\text{px}$. | 5 columns horizontal row. | 2 columns ($440\text{px}$ width each). | 4 columns horizontal. |
| **`1440px` (Widescreen)** | Max container locked at $1200\text{px}$ auto-centered. | Heading $44\text{px}$. Editorial text $760\text{px}$. | 5 columns balanced row. | 2 columns centered with wide margins. | 4 columns horizontal. |

- **Zero Horizontal Overflow Rule:** All containers must have `overflow-x: hidden; max-width: 100vw;`. Images must have `max-width: 100%; height: auto;`.

---

## 22. Accessibility (A11y) & Usability Standards

Designed from inception to satisfy **WCAG 2.1 Level AA** standards.

### 22.1 Core Accessibility Principles
1. **Semantic HTML5:** All landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) must be used strictly according to purpose.
2. **Heading Level Sequence:** A single `<h1>` for page identity, strictly followed by sequential `<h2>` section landmarks and `<h3>` component headers without skipping levels.
3. **Contrast Compliance Matrix:**
   - Dark Navy on White canvas: $14.2:1$ (Exceeds AAA).
   - Primary Text (`#172033`) on White: $13.5:1$ (Exceeds AAA).
   - Secondary Text (`#475467`) on White: $5.8:1$ (Exceeds AA).
   - Dark Gold (`#A6841C`) on White: $4.6:1$ (Exceeds AA for normal text).
   - Standard Gold (`#C9A227`) on Navy (`#0B1F3A`): $5.2:1$ (Exceeds AA).
4. **Touch Target Dimensions:** All interactive buttons, menu toggles, and telephone action links have a minimum clickable area of $44\text{px} \times 44\text{px}$.
5. **Keyboard Focus Rings:** Clear, high-contrast focus indicators on all inputs, links, and buttons:
   ```css
   :focus-visible {
     outline: 2px solid #0B1F3A;
     outline-offset: 2px;
   }
   ```
6. **Descriptive Image Alt Text:** Every image has meaningful alt descriptions (e.g., `"Ajay Kumar, Founder of Anand Education Center"`).
7. **Telephone Accessibility:** All phone numbers are wrapped in standard `tel:` protocols (`<a href="tel:+917766959980">`) with screen-reader accessible aria-labels.

---

## 23. Content Safety & Integrity Rules

Because Anand Education Center is a real family-run institution in Bidupur, Vaishali, all unverified marketing content is strictly prohibited.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  STRICT EXCLUSION LIST: NEVER FABRICATE ANY OF THE FOLLOWING:                          │
│                                                                                        │
│  [X] Unverified Student Selection Counts (e.g., "5,000+ Selections")                  │
│  [X] Fabricated All-India Ranks (e.g., "AIR 1, AIR 14")                               │
│  [X] Unverified Percentage Pass Rates (e.g., "99.4% Success")                         │
│  [X] Unverified Student Testimonials or Quotes                                         │
│  [X] Unverified Faculty Degrees, Teaching Experience, or Titles                       │
│  [X] Unverified Course Fee Structures or Duration Claims                             │
│  [X] Unverified Government Accreditation or Affiliation Claims                        │
│  [X] Addresses outside Bidupur, Vaishali, Bihar (No Phagwara / LPU / Punjab drift)    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Content Slot Protocol
Any information not confirmed by official documentation must be implemented as a clearly demarcated **editable content slot**:
- Format: `[Content Pending: Official Institutional Details]`
- This ensures developers and administrators can safely replace copy without altering the underlying layout architecture.

---

## 24. Design Quality Assurance (QA) Checklist

Before any visual layout is considered complete during future implementation, it must pass this 13-point inspection:

- [ ] **1. Logo Clarity & Aspect Ratio:** Master logo (`public/assets/logo/anand-education-center-logo.png`) rendered sharp at $2:1$ aspect ratio with zero squashing or stretching.
- [ ] **2. Founder Image Authenticity:** Real photos of Ajay Kumar and Brajmala Kumari displayed with zero AI filtering or face replacement.
- [ ] **3. Facial Crop Protection:** Founder faces fully visible within natural portrait containers; no chin or forehead cuts.
- [ ] **4. Typographic Rigor:** `Source Serif 4` used for titles; `Inter` used for body; no oversized ($>48\text{px}$) display text.
- [ ] **5. Contrast Compliance:** All text tokens meet or exceed WCAG AA ($4.5:1$ for body, $3.0:1$ for large text).
- [ ] **6. 8-Point Spatial Grid:** Margins, paddings, and gaps strictly align with the $8\text{px}$ scale.
- [ ] **7. Responsive Fluidity:** Clean rendering across all 8 target breakpoints ($320\text{px}$ through $1440\text{px}$) with zero horizontal scroll.
- [ ] **8. Header Integrity:** Desktop utility strip intact; mobile drawer operates smoothly with $44\text{px}$ touch targets.
- [ ] **9. Prominent Phone Helplines:** Helplines `7766959980` and `9905871193` easily accessible on mobile and desktop.
- [ ] **10. Graceful Results Empty State:** Empty state message communicates ethical verification without synthetic toppers.
- [ ] **11. Restrained Motion:** All transitions $\le 250\text{ms}$; full compliance with `prefers-reduced-motion`.
- [ ] **12. Zero Geographic Drift:** Strict Bidupur, Vaishali, Bihar coordinates across all titles, copy, and footers.
- [ ] **13. Content Safety:** Zero unverified claims, fabricated student counts, or fake testimonials.

---

IMPLEMENTATION STATUS: NOT STARTED
