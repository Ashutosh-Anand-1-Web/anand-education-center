# Anand Education Center — Master Asset Manifest & Specifications
**Document Version:** 1.1.0  
**Status:** Canonical Assets Ingested & Verified  
**Source of Truth References:**  
- [`docs/BRAND_SYSTEM.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/BRAND_SYSTEM.md)  
- [`docs/INFORMATION_ARCHITECTURE.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/INFORMATION_ARCHITECTURE.md)  
- [`docs/HOMEPAGE_WIREFRAME.md`](file:///c:/Users/User/OneDrive/Desktop/AEC/docs/HOMEPAGE_WIREFRAME.md)

---

## 1. Asset Directory Organization

All authentic media assets for Anand Education Center are stored in the canonical project tree:

```
c:\Users\User\OneDrive\Desktop\AEC\
└── public/
    └── assets/
        ├── logo/
        │   └── anand-education-center-logo.png  <-- Master Official Emblem & Identity Lockup
        └── founders/
            ├── ajay-kumar.jpg                   <-- Real Portrait: Ajay Kumar (Founder)
            ├── brajmala-kumari.jpg              <-- Real Portrait: Brajmala Kumari (Co-Founder)
            └── founders-together.jpg            <-- Real Portrait: Ajay Kumar & Brajmala Kumari Together
```

---

## 2. Ingested & Verified Asset Specifications

| Asset Identifier | Canonical Destination Path | Format | Verified Dimensions | File Size | Usage Surface |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Official Institute Logo** | `public/assets/logo/anand-education-center-logo.png` | PNG | $1024 \times 512\text{ px}$ | $681.35\text{ KB}$ ($697,699\text{ B}$) | Primary Navbar, Footer, Letters, Official Transcripts |
| **Founder: Ajay Kumar** | `public/assets/founders/ajay-kumar.jpg` | JPEG | $458 \times 1024\text{ px}$ | $94.28\text{ KB}$ ($96,546\text{ B}$) | Section 07 Mentorship Profile, Dedicated Faculty Bio |
| **Co-Founder: Brajmala Kumari** | `public/assets/founders/brajmala-kumari.jpg` | JPEG | $768 \times 1024\text{ px}$ | $283.07\text{ KB}$ ($289,865\text{ B}$) | Section 07 Mentorship Profile, Dedicated Faculty Bio |
| **Founders Together** | `public/assets/founders/founders-together.jpg` | JPEG | $1024 \times 768\text{ px}$ | $245.31\text{ KB}$ ($251,195\text{ B}$) | Institutional History, About Us Section, Leadership Desk |

---

## 3. Image Integrity Rules (Strict Mandate)

1. **Authentic Realism Preserved:**
   - Real photographs of **Ajay Kumar** and **Brajmala Kumari** are preserved in their original form without AI alterations, facial substitutions, or synthetic filtering.
2. **Aspect Ratio Lock:**
   - When rendered in CSS/Tailwind, images must maintain their native aspect ratio using `object-fit: cover` / `object-fit: contain` inside responsive wrappers to avoid warping or distortion.
3. **Master Logo Fidelity:**
   - The master identity lockup containing the Ashoka Lion Capitol, radiant compass/laurel wreath, gold script, and Bidupur coordinates is preserved verbatim.
