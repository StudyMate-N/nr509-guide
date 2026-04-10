# NR509 Final Exam Guide

Interactive exam prep guide for NR509 Advanced Physical Assessment — Chamberlain University FNP Track.

## Project Structure

```
nr509-guide/
├── index.html              ← Home page / system selector
├── system-1.html           ← Abdominal Assessment (COMPLETE)
├── system-2.html           ← Musculoskeletal (stub)
├── system-3.html           ← Neurological (stub)
├── system-4.html           ← Genitourinary & Obstetric (stub)
├── system-5.html           ← Special Populations (stub)
├── system-6.html           ← Breast Assessment (stub)
├── system-7.html           ← Cross-System Topics (stub)
├── css/
│   └── guide.css           ← SHARED design system (edit once, applies everywhere)
├── js/
│   ├── core.js             ← Exam date, countdown, progress tracking, guide questions
│   ├── drill.js            ← Drill engine + performance view (data-driven)
│   └── system-render.js    ← Page renderer (reads SYSTEM_DATA, builds DOM)
├── data/
│   ├── system-1.js         ← System 1 content (COMPLETE — use as template)
│   ├── system-2.js         ← System 2 content (stub)
│   └── ...
├── components/
│   └── nav.js              ← Navigation injected into every page
└── vercel.json             ← Vercel deployment config
```

## How Pages Work

Every system page is identical HTML — just a shell that loads:
1. `data/system-X.js` — defines `SYSTEM_DATA` and `DRILL_QUESTIONS`
2. `js/system-render.js` — reads the data and builds the full DOM

**To build a new system: fill in `data/system-X.js`. That's it.**

## Building Systems 2–7 with Claude Code

From your project directory, run:

```bash
# Build System 2 (Musculoskeletal)
claude "Read data/system-1.js as the content template and js/system-render.js 
to understand the data schema. Then read the NR509 MSK content spec below and 
build data/system-2.js with all 6 concepts, questions, drill questions, and SVG 
illustrations for the Musculoskeletal system."
```

### System Build Specs

**System 2 — Musculoskeletal** (Bates' Ch. 22, Week 6)
- Concepts: RA vs Gout vs OA vs AS comparison · Torticollis + scapular winging (trapezius) · Anterior drawer test + knee ligaments · Spine exam (erector spinae, SCM, sacrospinalis) · Lateral epicondylitis + cauda equina · Surface anatomy landmarks (acromion, coracoid, greater tubercle)
- SVGs: Joint classification diagram · Knee ligament anatomy
- iHuman: Kathleen Parks (Week 7)

**System 3 — Neurological** (Bates' Ch. 24, Week 6)
- Concepts: Kernig's + Brudzinski's signs · All 12 cranial nerves map · Subarachnoid hemorrhage red flags · Increased ICP signs · Romberg + gait assessment · Pain/temp/touch pathways (spinothalamic)
- SVGs: Cranial nerve brain diagram · Spinal cord pathway cross-section
- iHuman: Perry Soloman (Week 6)

**System 4 — Genitourinary & Obstetric** (Bates' Ch. 19–21, Week 7)
- Concepts: Naegele's Rule (exact calculation steps) · Pap smear when/where/when NOT · Cervix in pregnancy + emergency signs · Ectopic pregnancy + uterine fibroids · BPH + prostate exam + testicular cancer · BV + condylomata + proctitis
- SVGs: Female reproductive anatomy · Male GU anatomy
- HIGH PRIORITY: Naegele's Rule calculation question is ★★★★★

**System 5 — Special Populations** (Bates' Ch. 25–26, Weeks 7–8)
- Concepts: Tanner Stages I–V (Stage IV = exam target) · Infant assessment (undescended testes + cardiac feeding sign >30 min) · Normal aging "select all that apply" items · Actinic purpura + miliaria rubra · USPSTF 2024 mammography (age 40, not 50) · Pediatric vs adult exam differences
- SVGs: Tanner staging visual · Age-related changes diagram
- HIGHEST Quizlet frequency of any system

**System 6 — Breast Assessment** (Bates' Ch. 10/18, Weeks 4 & 8)
- Concepts: Vertical strip technique (hand position, pattern, medial breast) · Benign vs. malignant mass characteristics · Lymph node drainage of the breast · USPSTF screening by age (2024 update: start at 40) · Pectoral fascia test (serratus anterior) · Nipple discharge assessment
- SVGs: Breast anatomy + lymph drainage · Vertical strip pattern

**System 7 — High-Yield Cross-System** (All weeks, Final exam)
- Concepts: Cotton-wool spots — ALL 13 conditions (gap in every competitor guide) · USPSTF prevention screening table by age/sex · IBD vs IBS final distinction table · Colon cancer risk factors · 5 As smoking cessation model · Positive predictive value calculation
- SVGs: Cotton-wool spot fundoscopic view · USPSTF screening summary
- CRITICAL GAP: No existing NR509 guide covers all 13 cotton-wool spot conditions

## Deployment

### GitHub
```bash
git init
git add .
git commit -m "Initial skeleton — System 1 complete"
git remote add origin https://github.com/YOUR_USERNAME/nr509-guide.git
git push -u origin main
```

### Vercel
1. Go to vercel.com → New Project → Import from GitHub
2. Select `nr509-guide` repo
3. Framework: Other (static HTML)
4. Root directory: `/`
5. Deploy — done. Auto-deploys on every push.

## Content Sources
- `Bates' Guide to Physical Examination, 8th Edition` — primary source
- NR509 Final Exam High-Yield Guide v2 (`NR509_Final_HighYield_Guide_v2.pdf`)
- Quizlet intelligence from 20+ NR509 student decks
- Bates' extracted text (`bates_full_extracted.txt`) — 60,669 lines

## Design System
All visual tokens are in `css/guide.css` under `:root`. Colors:
- `--navy` #0F1F3D — headers, nav, drill background
- `--teal` #0D7377 — concept cards, links, highlights  
- `--amber` #E8A020 — frequency stars
- `--coral` #C9432A — exam traps
- `--purple` #5B4FCF — most missed items
