# Anand Education Center — Brand System & Design Foundation
**Document Version:** 1.0.0  
**Status:** Canonical Source of Truth (Approved)  
**Scope:** Institutional Identity, Visual Language & Future Component System

---

## 1. Executive Identity & Institutional Profile

| Attribute | Canonical Value |
| :--- | :--- |
| **Institute Name** | **ANAND EDUCATION CENTER** |
| **Founders** | **Ajay Kumar** (*Founder*)<br>**Brajmala Kumari** (*Co-Founder*) |
| **Headquarters / Campus** | **Bidupur, Vaishali, Bihar, India** |
| **Primary Contact Numbers** | **+91 7766959980**<br>**+91 9905871193** |
| **Examination Focus** | **UPSC, BPSC, SSC, Railway, Banking** |
| **Brand Positioning** | Premium Civil Services & Competitive Examination Preparation Institute |

> [!IMPORTANT]
> **Zero Geographic Drift:** The institute is strictly rooted in **Bidupur, Vaishali, Bihar, India**. Under no circumstances should locations such as Phagwara, Punjab, Lovely Professional University (LPU), or mixed Punjab/Bihar addresses appear anywhere in the codebase, metadata, documentation, or copy.

---

## 2. Brand Personality & Tone of Voice

Anand Education Center is a real family-founded institution dedicated to guiding aspirants toward public service and national examination excellence. The brand aesthetic must balance academic gravity, aspirational warmth, and modern civic integrity.

### 2.1 Core Pillars
- **Academic Seriousness:** Quiet, authoritative rigor over hyperactive marketing.
- **Trust & Integrity:** Complete transparency, grounded realism, and respect for student effort.
- **Discipline & Guidance:** Clear, structured pathways through India's most challenging syllabi.
- **Aspirational Growth:** Inspiring confidence without making reckless or exaggerated promises.
- **Accessibility & Humility:** Welcoming to rural and district aspirants while maintaining elite standards.

### 2.2 Visual Archetype: The Serious Editorial Academic Institution
The visual presentation should reflect:
$$\text{Premium Editorial Education Publication} + \text{Civil Services Preparation Institute} + \text{Modern Indian Institution}$$

### 2.3 Strict Anti-Patterns (What Anand Education Center Must NOT Look Like)
- **NOT a generic school or kindergarten website:** No bright pastels, cartoon illustrations, playful rounded blobs, or juvenile badges.
- **NOT a venture-backed ed-tech startup:** No loud neon accents, hyper-saturated gradients, floating gamified coin counters, aggressive countdown timers, or pushy pop-up modals.
- **NOT a commercial coaching factory:** No loud billboard slogans, star-burst price stickers, or sensationalist claims.
- **NOT a flashy UI/UX showcase:** No gratuitous 3D elements, excessive glassmorphism, heavy drop-shadows, or scroll-jacking effects.

---

## 3. Color System & Design Tokens

The color palette is derived directly from the master **Anand Education Center** brand identity. Deep Navy commands authority and focus, Gold adds restrained academic distinction, and Warm White guarantees clarity and readability.

### 3.1 Core Palette Tokens

```css
:root {
  /* Brand Authority */
  --color-primary-navy: #0B1F3A;        /* Master Navy: Headers, Hero Backgrounds, Primary Buttons */
  --color-primary-navy-dark: #071527;   /* Deep Shade: Deep footers, high-contrast states */
  --color-primary-navy-light: #163259;  /* Soft Shade: Interactive hover, selected borders */
  
  /* Academic Accent */
  --color-accent-gold: #C9A227;         /* Master Gold: Crest accents, focused badges, key highlights */
  --color-accent-gold-dark: #A6841C;    /* Active gold states, high-contrast borders */
  --color-accent-gold-light: #F3E7C4;   /* Soft gold tint: subtle badge fills, highlight boxes */
  --color-accent-gold-wash: #FBF8EE;    /* Minimal gold background tint */

  /* Neutral Canvas */
  --color-bg-canvas: #FAFAF7;           /* Warm White: Global body background */
  --color-bg-surface: #FFFFFF;          /* Pure White: Content cards, dropdowns, modal windows */
  --color-bg-subtle: #F3F4F1;           /* Tinted Neutral: Alternate sections, table stripes */
  --color-bg-navy-wash: #F0F4F8;        /* Soft navy tint: Resource blocks, callouts */

  /* Typography & Readability */
  --color-text-primary: #172033;        /* Deep Charcoal: Headings, body text, primary values */
  --color-text-secondary: #475467;      /* Neutral Slate: Explanatory copy, metadata, captions */
  --color-text-muted: #667085;          /* Muted Slate: Sub-labels, timestamps, breadcrumbs */
  --color-text-inverse: #FFFFFF;        /* Contrast White: Text on Navy backgrounds */
  --color-text-inverse-muted: #CBD5E1;  /* Slate Tint: Secondary text on Navy backgrounds */

  /* Structural Dividers & Borders */
  --color-border-subtle: #EBECE9;       /* Delicate Warm Border: Cards, dividers, list items */
  --color-border-default: #D0D5DD;      /* Standard Neutral Border: Inputs, button outlines */
  --color-border-strong: #98A2B3;       /* Active / Focus boundary */
  --color-border-gold: #E5C973;         /* Accent boundary: Highlighted badges or notice strips */

  /* Functional Semantic Status (Restrained Academic Tone) */
  --color-success: #1E6B47;             /* Dark Sage Green */
  --color-success-bg: #EDF7F1;
  --color-warning: #935B00;             /* Amber Ochre */
  --color-warning-bg: #FEF7EC;
  --color-error: #9B2C2C;               /* Crimson Brick */
  --color-error-bg: #FDF2F2;
  --color-info: #1B4965;                /* Muted Cyan Navy */
  --color-info-bg: #F0F7FB;
}
```

### 3.2 Usage Rules & Ratios
1. **60-30-10 Distribution Rule:**
   - **~60% Background:** Warm White (`#FAFAF7`) and White (`#FFFFFF`).
   - **~30% Structural Authority:** Deep Charcoal text (`#172033`) and Deep Navy (`#0B1F3A`) blocks (navigation header, key section blocks, footer).
   - **~10% Accent:** Gold (`#C9A227`) reserved strictly for crest accents, active states, key badge tags, and primary CTAs where appropriate.
2. **Never Over-Gold:** The site must never look yellow, gilded, or ornate. Gold is a punctuate marker of distinction, not a flood fill.
3. **Contrast Compliance:** All text tokens against their respective backgrounds must strictly satisfy **WCAG 2.1 AA** (minimum 4.5:1 for body copy, 3:1 for large display text). Gold must not be used for small body copy on white backgrounds; instead, use Deep Navy or Deep Charcoal.

---

## 4. Typography Hierarchy & Guidelines

The typography establishes an authoritative editorial tone: an elegant, serious serif for titles and institutional headers paired with a clean, functional sans-serif for reading comfort, tables, and navigation.

### 4.1 Recommended Typefaces
- **Primary Display & Headings:** `Source Serif 4` or `Merriweather` (Fallback: `Libre Baskerville`, `Georgia`, serif)
  - *Rationale:* Conveys academic discipline, literary depth, and government commission gravitas.
- **Interface, Body & Navigation:** `Inter` or `Plus Jakarta Sans` (Fallback: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, sans-serif)
  - *Rationale:* Outstanding legibility at micro-sizes, neutral geometric balance, optimal tabular figure alignment for exam schedules and syllabus outlines.

### 4.2 Type Scale (Base: 16px, Scale Factor: Major Third ~1.25)

| Token | Size (Desktop) | Size (Mobile) | Line Height | Weight | Font Family | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-1` | `2.75rem` (44px) | `2.125rem` (34px) | 1.15 | 600 / SemiBold | Serif | Main Hero Statement |
| `h1` | `2.25rem` (36px) | `1.75rem` (28px) | 1.2 | 600 / SemiBold | Serif | Primary Page Title |
| `h2` | `1.75rem` (28px) | `1.5rem` (24px) | 1.25 | 600 / SemiBold | Serif | Major Section Headers |
| `h3` | `1.375rem` (22px) | `1.25rem` (20px) | 1.3 | 600 / SemiBold | Serif | Course Titles, Feature Headings |
| `h4` | `1.125rem` (18px) | `1.125rem` (18px) | 1.35 | 600 / SemiBold | Sans-Serif | Sub-sections, Card Headings |
| `eyebrow` | `0.75rem` (12px) | `0.75rem` (12px) | 1.4 | 700 / Bold | Sans-Serif | All-caps Section Category Label |
| `body-large`| `1.125rem` (18px) | `1.0rem` (16px) | 1.6 | 400 / Regular | Sans-Serif | Lead Paragraphs, Introductions |
| `body-base` | `1.0rem` (16px) | `0.9375rem` (15px)| 1.6 | 400 / Regular | Sans-Serif | Standard Editorial Paragraphs |
| `body-small`| `0.875rem` (14px) | `0.875rem` (14px)| 1.5 | 400 / Regular | Sans-Serif | Meta info, Form Labels, Table Text |
| `caption` | `0.75rem` (12px) | `0.75rem` (12px) | 1.4 | 500 / Medium | Sans-Serif | Photo captions, fine print, tags |

### 4.3 Typography Rules
- **No Startup Heading Sizes:** Avoid gigantic, oversized 72px–96px headlines.
- **Letter Spacing:** Apply generous tracking (`letter-spacing: 0.08em; text-transform: uppercase`) exclusively to `eyebrow` labels and section trackers. Use natural or slightly tight tracking (`-0.015em`) on large serif titles.
- **Restrained Italics:** Do not write entire paragraphs in italic. Reserve italics solely for Latin/legal references, book citations, or precise founder dedications.

---

## 5. Spacing & Layout Grid System

The spatial framework is based on a strict 8-point grid (with a 4-point half-step for micro-alignment).

### 5.1 Spacing Scale

```css
:root {
  --space-1: 0.25rem;   /* 4px  - Micro gap, badge padding */
  --space-2: 0.5rem;    /* 8px  - Tight element spacing, icon gaps */
  --space-3: 0.75rem;   /* 12px - Form input padding, small card gap */
  --space-4: 1.0rem;    /* 16px - Standard component padding */
  --space-5: 1.25rem;   /* 20px - Medium container gap */
  --space-6: 1.5rem;    /* 24px - Standard card padding */
  --space-8: 2.0rem;    /* 32px - Between related sub-groups */
  --space-10: 2.5rem;   /* 40px - Medium section spacing */
  --space-12: 3.0rem;   /* 48px - Large element separation */
  --space-16: 4.0rem;   /* 64px - Standard desktop section gap */
  --space-20: 5.0rem;   /* 80px - Major editorial break */
  --space-24: 6.0rem;   /* 96px - Desktop Hero & Landmark margins */
}
```

### 5.2 Container Widths & Page Margins
- **Max Content Width:** `1200px` (Main editorial content container).
- **Narrow Editorial Width:** `800px` (Detailed syllabus readouts, founder profiles, institutional statement).
- **Mobile Margins:** `16px` (320px–414px viewports).
- **Tablet Margins:** `32px` (768px–1024px viewports).
- **Desktop Margins:** Auto-centered with minimum `48px` gutter.

---

## 6. Border & Radius System

Clean, crisp boundaries preserve a disciplined academic character. Avoid bubble-like or heavily pill-shaped components.

### 6.1 Radius Tokens
```css
:root {
  --radius-none: 0px;      /* Sharp, crisp formal borders */
  --radius-sm: 2px;        /* Micro badges, checkboxes, small tags */
  --radius-md: 4px;        /* Buttons, inputs, standard cards */
  --radius-lg: 6px;        /* Modal containers, highlighted notice boxes */
  --radius-full: 9999px;   /* Reserved strictly for small indicator pills */
}
```
*Note: The default card and container radius is `--radius-md` (4px). Avoid `12px` or `16px` oversized bubbly radii.*

### 6.2 Border Widths & Outlines
- Standard structural line: `1px solid var(--color-border-subtle)` (`#EBECE9`).
- Active / Form Field line: `1px solid var(--color-border-default)` (`#D0D5DD`).
- Active focus ring: `2px solid var(--color-primary-navy)` with `2px` offset.
- Key highlight banner line: `2px solid var(--color-accent-gold)`.

---

## 7. Button & Interactive Element Hierarchy

Buttons must look tactile, dignified, and decisive.

### 7.1 Button Variants

#### Primary Button (Institutional Action)
- **Background:** Deep Navy (`#0B1F3A`)
- **Text:** White (`#FFFFFF`), `font-weight: 500`, Sans-Serif
- **Border:** `1px solid #0B1F3A`
- **Hover:** Background `#163259`, slight upward lift (`transform: translateY(-1px)`)
- **Active:** Background `#071527`, flat
- **Usage:** "Inquire for Admission", "Submit Application", "Download Syllabus"

#### Secondary Button (Academic Accent)
- **Background:** Warm White (`#FAFAF7`)
- **Text:** Deep Navy (`#0B1F3A`), `font-weight: 500`
- **Border:** `1px solid var(--color-border-default)` (`#D0D5DD`)
- **Hover:** Background `#FFFFFF`, Border color `#0B1F3A`
- **Usage:** "View Examination Structure", "Explore BPSC Overview"

#### Accent Button (Selective Milestone Action)
- **Background:** Gold (`#C9A227`)
- **Text:** Deep Navy (`#0B1F3A`), `font-weight: 600`
- **Border:** `1px solid #B5901F`
- **Hover:** Background `#B5901F`, Text `#0B1F3A`
- **Usage:** High-priority admissions announcement or key prospectus link.

#### Text / Link Button (Editorial Link)
- **Background:** Transparent
- **Text:** Deep Navy (`#0B1F3A`) with subtle underline
- **Hover:** Gold (`#C9A227`) with underline transition
- **Usage:** "Read Founder's Note", "View All Modules"

### 7.2 Button Sizing
- **Small:** Height `36px`, padding `0 14px`, font size `14px`.
- **Medium (Default):** Height `42px`, padding `0 20px`, font size `15px`.
- **Large:** Height `48px`, padding `0 28px`, font size `16px`.

---

## 8. Navigation & Header Principles

The navigation represents an authoritative gateway to the institute's academic programs and services.

### 8.1 Top Utility Strip (Institutional Bar)
- Displays official contact information (`+91 7766959980` / `+91 9905871193`) and location indicator (`Bidupur, Vaishali, Bihar`).
- High-contrast, clean micro-text (`13px`), understated Navy or Warm White background.

### 8.2 Primary Desktop Navigation
- Clean horizontal layout with the **Anand Education Center** brand logo prominently positioned at the left.
- Clear, uncrowded menu items:
  1. **Home**
  2. **About Institute**
  3. **Courses (UPSC, BPSC, SSC, Railway, Banking)**
  4. **Founders & Mentors**
  5. **Admissions & Batches**
  6. **Contact & Location**
- Action CTA on right: Understated primary button (`Admissions Inquiry` or `Contact Desk`).

### 8.3 Mobile Navigation
- Dedicated mobile header bar with balanced logo lockup and accessible burger toggle.
- Clean slide-over or full-height overlay with generous tap targets (minimum `44px` height).
- Prominent direct-dial call buttons for immediate rural/mobile accessibility.

---

## 9. Logo Usage & Master Brand Asset Rules

The finalized Anand Education Center logo is the inviolable core mark of the institution.

### 9.1 Integrity Rules
1. **Never Redesign or Recreate:** Do not alter the emblem, type font, layout, or crest components inside web code.
2. **Never Re-color:** Use the logo strictly in its authentic colors (or approved single-color monochrome reverse on solid Navy).
3. **No Distortion or Scaling Flaws:** Maintain strict aspect-ratio locks (`1:1` or exact original proportions).
4. **No Artificial Filter Effects:** Never apply drop shadows, glows, bevels, 3D extrusions, or animated spins to the logo.

### 9.2 Safe Space & Clear Space
- Provide an isolation zone equal to at least the height of the central crest shield / letter mark around the perimeter of the logo on all sides.
- Maintain a minimum rendered height of:
  - `40px` on desktop header navigation.
  - `32px` on mobile header navigation.
  - `48px` on admission documents, certificates, and institutional letterheads.

### 9.3 Multi-Surface Application Matrix

| Surface | Presentation Mode | Background Requirement |
| :--- | :--- | :--- |
| **Desktop Header** | Primary Full Logo Lockup | Light (`#FAFAF7` / `#FFFFFF`) or Clean Navy (`#0B1F3A`) |
| **Mobile Header** | Compact Full Lockup / Crest Mark | Light or Clean Navy |
| **Footer** | Prominent Primary Lockup with institutional address | Deep Navy (`#0B1F3A`) with high legibility |
| **Admission Form / Prospectus**| Formal Centered Header Lockup | Pure White (`#FFFFFF`) with official serial code |
| **Student / Admin Portal** | Persistent Dashboard Sidebar / Header Mark | Sidebar Background with crisp padding |
| **Certificates & ID Cards** | Formal Institutional Seal Position | High-resolution print vector asset with zero artifacts |

---

## 10. Photography & Visual Asset Direction

### 10.1 Founder Photography: Ajay Kumar & Brajmala Kumari
- **Authenticity Above All:** Real photographs of founders Ajay Kumar (Founder) and Brajmala Kumari (Co-Founder) will be utilized.
- **Natural Treatment:** Do not over-retouch, skin-smooth, AI-alter, or distort faces. Preserve their natural appearance and dignity.
- **Dedicated Founder Section:** Do **NOT** place founder photographs in the top Hero section. The hero is reserved for institutional mission, typography, and course domains. Founders must be presented in their own dedicated "Founders & Academic Mentorship" section.
- **No Fabricated Titles:** Present them purely as founders and mentors. Do not invent fictitious degrees, university positions, or governmental titles that have not been provided.

### 10.2 Academic Imagery & Supporting Photography
- Focus on real classroom environments, study desks, library reading rooms, notebooks, and authentic examination materials.
- Avoid generic stock photography showing American/European university campuses, models in graduation gowns, or unrealistic high-tech futuristic holographic classrooms.

---

## 11. Responsive Grid & Viewport Standards

Development must proceed **Mobile-First**. The layout must gracefully scale across standard screen widths without horizontal overflow or awkward wrapping.

### 11.1 Target Viewport Matrix
- `320px`: Extra-compact mobile (feature phones, older smartphones) — single column, comfortable 16px margins, no clipped badges.
- `360px` – `390px`: Standard modern mobile (Android & iPhone standard) — clear typography, single-column cards.
- `414px` – `480px`: Large mobile viewports — optimized card spacing, readable syllabi.
- `768px` – `834px`: Tablets (portrait) — 2-column course listings, compact side navigation if applicable.
- `1024px` – `1200px`: Small desktop & tablet landscape — 3-column course cards, full top navigation.
- `1280px` – `1440px+`: Full desktop displays — bounded 1200px container, centered, generous white space.

### 11.2 Core Responsive Invariants
- **Zero Horizontal Scrollbar (`overflow-x: hidden` on root containers).**
- **Touch Targets:** All interactive links, buttons, and form inputs must measure at least `44px × 44px` on mobile viewports.
- **Table Handling:** Exam syllabus outlines and batch timelines must feature responsive card-transforms or horizontal scroll wrappers with clear visual cues.

---

## 12. Animation & Motion Choreography

All motion must feel calm, intentional, and dignified.

### 12.1 Permitted Transitions
- **Hover Micro-interactions:** `150ms–200ms` `cubic-bezier(0.16, 1, 0.3, 1)` ease-out for button backgrounds and card border color changes.
- **Section Reveals (Scroll-triggered):** Subtle upward fade (`opacity: 0 -> 1`, `translateY: 12px -> 0px`) over `400ms`.
- **Navigation Drawer / Dropdown:** Clean slide-down or opacity fade over `200ms`.

### 12.2 Prohibited Animation Patterns
- No continuous spinning or rotating badges.
- No parallax scrolling that disrupts reading speed.
- No bouncing or pulsating call-to-action buttons.
- No animated counter tickers rolling up unverified numbers.
- No particle effects, floating geometric shapes, or animated canvas backdrops.
- Respect `prefers-reduced-motion: reduce` across all CSS definitions.

---

## 13. Institutional Content & Integrity Standards (Zero-Fabrication Mandate)

Because Anand Education Center is a real family institution rooted in Vaishali, Bihar, accuracy and ethical communication are paramount.

### 13.1 Strict List of Prohibited Inventions
Under no conditions may any developer, designer, or copywriter add:
- ❌ **Fictitious Student Statistics:** e.g., "50,000+ Students Mentored", "10,000 Selections".
- ❌ **Fabricated Success Percentages:** e.g., "99.8% Success Rate".
- ❌ **Invented Longevity:** e.g., "Serving students for over 25 years" (unless verified).
- ❌ **Fabricated Results & Rank Lists:** e.g., "AIR 1, AIR 4 in UPSC 2023" without official documentation.
- ❌ **Fake Testimonials / Reviews:** Generic placeholder student names with made-up quotes.
- ❌ **Unverified Faculty Counts:** e.g., "50+ Ex-Civil Servants on Faculty".
- ❌ **False Government Affiliations:** e.g., "Recognized by UPSC / BPSC" (exam boards do not recognize private coaching institutes).
- ❌ **Superlative Marketing Cliches:** e.g., "No. 1 Coaching Institute in Bihar", "Best UPSC Institute in India".

### 13.2 Verified Placeholder Architecture
When building UI for sections requiring future data (such as batch dates, specific fees, or student results), use an honest, dignified placeholder pattern:
- *"Admissions open for upcoming session. Contact the institute desk directly at +91 7766959980 for current batch details and seat availability."*
- *"Detailed syllabus breakdown and study material lists are issued directly at the Bidupur center upon registration."*
- *"Result registry and mentor credentials are verified and updated directly by institute administration."*

---

## 14. Conceptual Information Architecture (Roadmap)

The web platform is structured into clear phases:

### Phase 1: Public Institutional Website
1. **01 — Home:** Academic identity, competitive exam categories, core mentorship philosophy, direct contact inquiry.
2. **02 — About Institute:** History, educational mission in Vaishali, focus on disciplined preparation.
3. **03 — Courses & Examinations:** Comprehensive guide to preparation tracks:
   - **UPSC** (Union Public Service Commission — Civil Services Exam)
   - **BPSC** (Bihar Public Service Commission — State Administrative Services)
   - **SSC** (Staff Selection Commission — CGL, CHSL, GD, CPO)
   - **Railway** (RRB NTPC, Group D, ALP, Technical grades)
   - **Banking** (IBPS PO/Clerk, SBI PO/Clerk, RBI)
4. **04 — Founders & Mentorship:** Profiles of Ajay Kumar (Founder) and Brajmala Kumari (Co-Founder).
5. **05 — Results & Verification:** Documented student milestones and verified achievements as verified by administration.
6. **06 — Admissions & Counseling:** Application process, walk-in counseling at Bidupur center, batch announcements.
7. **07 — Contact & Campus:** Exact location in Bidupur, Vaishali, Bihar, official phone lines (`7766959980`, `9905871193`), inquiry form.

### Phase 2: Future Integrated Application Modules (Not implemented in Step 1)
8. **08 — Student Portal:** Attendance tracking, syllabus progress, test series notices.
9. **09 — Parent Desk:** Attendance alerts, performance summaries, fee receipts.
10. **10 — Administrative Dashboard:** Batch creation, fee management, inquiry desk tracking.

---

## 15. Future Component Design Foundation

Every UI component built in subsequent steps must adhere to these structural primitives:

```
[Institutional Bar: Phone + Bidupur Location]
       │
[Main Navigation: Logo Lockup + Primary Links + Contact CTA]
       │
[Hero: Academic Title + Exam Track Highlights + Inquiry Action]
       │
[Core Examination Tracks: Clean Grid (UPSC, BPSC, SSC, Railway, Banking)]
       │
[Institutional Philosophy / Editorial Section]
       │
[Founders Section: Ajay Kumar & Brajmala Kumari]
       │
[Admissions & Walk-In Desk: Bidupur, Vaishali Center Details]
       │
[Formal Footer: Brand Seal, Address, Phone Lines, Non-Commercial Disclaimers]
```

### 15.1 Card Structure
- Crisp 1px border (`#EBECE9`), subtle 4px radius, white background (`#FFFFFF`).
- Minimal hover lift (border shifts to `#D0D5DD` or subtle navy tint).
- Strict hierarchy: Eyebrow label -> Serif Title -> Descriptive summary -> Direct text link or secondary button.

### 15.2 Form Fields
- 1px border (`#D0D5DD`), 4px radius, 14px padding.
- Clear label above field in `body-small` (`#172033`).
- Clean Navy focus ring with zero default browser outline glow.

### 15.3 Badges & Category Labels
- Uppercase, 12px, `font-weight: 700`, `letter-spacing: 0.08em`.
- Muted background (`#F0F4F8`) with Navy text (`#0B1F3A`) or Soft Gold tint (`#FBF8EE`) with Ochre/Gold text (`#A6841C`).

---

*This document is the sole visual and architectural source of truth for all subsequent development phases of Anand Education Center.*
