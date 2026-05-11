/* ───────────────────────────────────────────────────────────────────────────
   NR511 PODCAST DATA
   The Greenwich School  ·  Differential Diagnosis in Primary Care
   ──────────────────────────────────────────────────────────────────────────
   The renderer reads this file and builds the full /nr511/podcast page.
   To add an episode: push a new object onto PODCAST_DATA.episodes[].
   To change anchors/chapters/notes: edit in place — renderer re-derives stats.
   ─────────────────────────────────────────────────────────────────────────── */

window.PODCAST_DATA = {

  /* ── Course-level metadata ─────────────────────────────────────────────── */
  course: {
    code: 'NR511',
    title: 'NR511 Midterm Audio Walkthrough',
    subtitle: 'Differential Diagnosis · Weeks 1–4',
    parentHref: '/nr511',
    parentLabel: 'NR511 · Differential Diagnosis Guide',
    brandSub: 'NR511 · Midterm Walkthrough',
    headline: 'Listen &amp; <i>review.</i>',
    lede: 'Two audio walkthroughs covering all four weeks of midterm content. <b>Press play, then scrub through anchor cards</b> on the right — every chapter ties back to a high-yield fact you\'ll be tested on.',
    unlockKeys: ['nr511unlocked', 'nr509unlocked'],  // either key unlocks
    gateRedirect: '/nr511',
  },

  /* ── Episodes (variable length — add as many as needed) ────────────────── */
  episodes: [

    /* ═══════════════════════════════════════════════════════════════════════
       EPISODE 1 — HIV & Dermatology (Weeks 1–2)
       ═══════════════════════════════════════════════════════════════════════ */
    {
      number: 1,
      slug: 'hiv-dermatology',
      title: 'HIV &amp; Dermatology',
      subtitle: '— start with the foundations.',
      shortTitle: 'HIV & Dermatology',
      tagShort: 'Weeks 1 & 2',
      pills: ['WEEK 1 · HIV', 'WEEK 2 · DERMATOLOGY'],
      tagBadges: ['WK 1', 'WK 2'],
      desc: 'CD4 thresholds, the flexor vs. extensor distinction, herpes zoster traps. Week 2 is the heaviest block of the midterm — slow this one to 0.75× the first time through.',
      durationLabel: '16 min',
      durationSec: 16 * 60,
      yield: 'High',
      audio: '/audio/nr511/ep1-hiv-dermatology.m4a',
      color: 'navy',  // hero card color theme

      /* Chapter markers — timestamps in seconds. Renderer formats to mm:ss. */
      chapters: [
        { start:    0, title: 'Intro · what to expect', sub: 'warm-up' },
        { start:   95, title: 'Week 1 — HIV testing & the window period' },
        { start:  185, title: 'Acute HIV syndrome — the clinical picture' },
        { start:  255, title: 'CD4 thresholds — anchor one', sub: 'PCP / Toxo / MAC / Crypto' },
        { start:  395, title: 'Classic opportunistic infections' },
        { start:  555, title: 'PrEP, PEP, and U=U' },
        { start:  680, title: 'USPSTF screening + 90-90-90' },
        { start:  760, title: 'Week 2 — Lesion vocabulary' },
        { start:  870, title: 'Atopic dermatitis — anchor two', sub: 'flexor surfaces' },
        { start:  955, title: 'Herpes zoster — anchor three', sub: 'the midline trap' },
        { start: 1085, title: 'Psoriasis + drug triggers' },
        { start: 1185, title: 'Acne ladder + iPLEDGE' },
        { start: 1280, title: 'Rosacea (no topical steroids)' },
        { start: 1325, title: 'Tinea — topical vs oral' },
        { start: 1410, title: 'Melanoma ABCDE' },
        { start: 1475, title: 'Scabies — treat all contacts' },
        { start: 1530, title: 'NOT/EXCEPT mindset' },
        { start: 1605, title: 'Rapid-fire quiz · 5 questions' },
        { start: 1860, title: 'Closing & bridge to Episode 2' },
      ],

      /* Anchor cards — the high-yield facts. Variable length. */
      anchors: [
        {
          start: 255, end: 395,
          tag: 'THRESHOLDS · HIV',
          title: 'CD4 thresholds — anchor one',
          fact: '<b>200</b> PCP prophylaxis (TMP-SMX) · <b>100</b> Toxo (same drug) · <b>50</b> MAC, Crypto, CMV. NOT/EXCEPT trap: cryptococcal threshold is <b>50, not 200</b>.',
        },
        {
          start: 870, end: 955,
          tag: 'DISTRIBUTION · DERM',
          title: 'Atopic dermatitis — anchor two',
          fact: 'Children → <b>FLEXOR surfaces</b> (antecubital, popliteal). Atopic triad: asthma + allergic rhinitis + eczema. <b>Psoriasis is extensor</b> — opposite distribution.',
        },
        {
          start: 955, end: 1085,
          tag: 'TRAP · DERM',
          title: 'Herpes zoster — anchor three',
          fact: 'Single dermatome · unilateral · <b>does NOT cross the midline</b>. Prodromal pain 3–5 days before rash. Treat with valacyclovir within <b>72 hours</b>.',
        },
        {
          start: 555, end: 620,
          tag: 'PROPHYLAXIS · HIV',
          title: 'PEP timing',
          fact: 'Post-exposure prophylaxis: start within <b>72 hours</b>, ideally <2 hours. Three-drug regimen × <b>28 days</b>. Even if source is undetectable, still give PEP for needlestick.',
        },
        {
          start: 1085, end: 1185,
          tag: 'TRIGGERS · DERM',
          title: 'Psoriasis drug triggers',
          fact: 'Five drugs worsen psoriasis: <b>β-blockers, lithium, NSAIDs, antimalarials, ACE inhibitors</b>. Lithium-started bipolar patient flaring at 3 weeks → swap mood stabilizer.',
        },
        {
          start: 1325, end: 1410,
          tag: 'ROUTE · DERM',
          title: 'Tinea — when to go oral',
          fact: 'Body, foot, groin = <b>topical</b> azole. <b>Scalp (capitis) and nails (unguium) = ORAL</b>. Topicals don\'t penetrate hair follicle or nail plate. Griseofulvin or terbinafine.',
        },
        {
          start: 1475, end: 1530,
          tag: 'MANAGEMENT · DERM',
          title: 'Scabies — treat all contacts',
          fact: 'Linear burrows in web spaces. Permethrin 5% neck-to-toes × 1 night, repeat in 1 week. <b>Treat ALL household + sexual contacts simultaneously</b>, symptomatic or not.',
        },
      ],

      /* Study notes — four colored callout blocks */
      notes: {
        highYield: [
          '<b>PCP at 200, Toxo at 100, MAC/Crypto at 50</b> — memorize the ladder',
          '<b>Acute HIV</b> = mono-like syndrome + diffuse LAD + recent exposure → RNA PCR (not ELISA)',
          '<b>Atopic dermatitis</b> = flexor, <b>psoriasis</b> = extensor',
          '<b>Zoster:</b> unilateral, single dermatome, treat in 72 hours',
          '<b>Tinea capitis/unguium = ORAL</b> antifungal (others topical)',
        ],
        traps: [
          'Negative ELISA in window period doesn\'t rule out acute HIV — order RNA PCR',
          '<b>Amoxicillin in mono</b> → diffuse maculopapular rash in up to 90%',
          'Cryptococcal prophylaxis threshold is <b>50, not 200</b> (NOT/EXCEPT)',
          'Herpes zoster <b>never crosses midline</b> — single dorsal root ganglion',
          'iPLEDGE does <b>not</b> require monthly eye exams (NOT/EXCEPT)',
        ],
        confuse: [
          '<b>Tinea corporis</b> (topical, 2–4 wk) vs <b>tinea capitis</b> (oral, 6–8 wk)',
          '<b>Actinic keratosis</b> (precancerous) vs <b>seborrheic keratosis</b> (benign, waxy stuck-on)',
          '<b>Vesicle &lt;1cm</b>, <b>bulla &gt;1cm</b> — both clear fluid',
          '<b>Allergic conjunctivitis</b> = itch; <b>bacterial</b> = mucopurulent + matted lids',
        ],
        mnemonics: [
          '<b>200·100·50</b> — PCP, Toxo, MAC ladder',
          '<b>ABCDE</b> — Asymmetry, Border, Color, Diameter, Evolution',
          '<b>Flex inside, Ext outside</b> — atopic vs psoriasis distribution',
          '<b>72 / 28 / 3</b> — zoster window, PEP duration, PrEP monitoring months',
        ],
      },

      /* Related — links back into the platform */
      related: [
        {
          tag: 'GUIDE · WEEKS 1–2',
          title: 'Midterm High-Yield Guide — HIV & Dermatology',
          meta: 'Full reading · all subsections, tables, callouts',
          href: '/nr511/midterm#week1',
        },
        {
          tag: 'PRACTICE · 37 QUESTIONS',
          title: 'Midterm Simulator — HIV + Derm subset',
          meta: 'Filtered practice · timed · rationales',
          href: '/nr511/simulator',
        },
        {
          tag: 'CEA PREP · 150 QUESTIONS',
          title: 'CEA Diagnostic Exam Prep',
          meta: 'Comprehensive exam — broader scope',
          href: '/nr511/cea',
        },
        {
          tag: 'NEXT EPISODE',
          title: 'Episode 2 — HEENT & GI (Weeks 3–4)',
          meta: '~18 min · Weber/Rinne mechanism · colon screening update',
          href: '?ep=2',
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       EPISODE 2 — HEENT & GI (Weeks 3–4) — THE FINAL EPISODE
       ═══════════════════════════════════════════════════════════════════════ */
    {
      number: 2,
      slug: 'heent-gi',
      title: 'HEENT &amp; GI',
      subtitle: '— the final episode.',
      shortTitle: 'HEENT & GI',
      tagShort: 'Weeks 3 & 4',
      pills: ['WEEK 3 · HEENT', 'WEEK 4 · GI'],
      tagBadges: ['WK 3', 'WK 4'],
      desc: 'Weber/Rinne mechanism, the appendicitis sign set, colon cancer screening update. Final episode of the series — ends with the Midterm Morning Checklist.',
      durationLabel: '18 min',
      durationSec: 18 * 60,
      yield: 'High',
      audio: '/audio/nr511/ep2-heent-gi.m4a',
      color: 'teal',
      finalEpisode: true,

      chapters: [
        { start:    0, title: 'Welcome back · continuity from Ep1', sub: 'opener' },
        { start:  120, title: 'Three anchors for this episode' },
        { start:  195, title: 'Week 3 — Eye emergencies' },
        { start:  335, title: 'Funduscopy findings' },
        { start:  445, title: 'Red eye differential' },
        { start:  560, title: 'Weber & Rinne — anchor one', sub: 'with mechanism' },
        { start:  790, title: 'AOM vs AOE — pinna pull test' },
        { start:  895, title: 'Presbycusis & acoustic neuroma' },
        { start:  945, title: 'BPPV vs Ménière' },
        { start: 1040, title: 'Pharyngitis Centor + mono trap' },
        { start: 1135, title: 'Peritonsillar abscess', sub: 'uvula deviates AWAY' },
        { start: 1185, title: 'Sinusitis + Samter triad' },
        { start: 1260, title: 'Week 4 — Appendicitis signs · anchor two' },
        { start: 1370, title: 'IBS vs IBD blood-in-stool rule' },
        { start: 1465, title: 'Peptic ulcers + H. pylori' },
        { start: 1575, title: 'GERD & Barrett\'s + alarm features' },
        { start: 1655, title: 'Colon cancer — age 45, anchor three' },
        { start: 1735, title: 'Celiac, ZES, hepatic encephalopathy, SBP' },
        { start: 1845, title: 'Diverticulitis · colonoscopy trap' },
        { start: 1890, title: 'Rapid-fire quiz · 5 questions' },
        { start: 2125, title: 'Midterm Morning Checklist', sub: '4 facts' },
        { start: 2225, title: 'Send-off — you\'ve got this' },
      ],

      anchors: [
        {
          start: 560, end: 790,
          tag: 'MECHANISM · HEENT',
          title: 'Weber & Rinne — anchor one',
          fact: 'Weber to <b>BAD</b> ear = conductive · Weber to <b>GOOD</b> ear = sensorineural. Negative Rinne (BC ≥ AC) = conductive on that side. Learn the <b>mechanism</b>, not the table.',
        },
        {
          start: 1260, end: 1370,
          tag: 'SIGNS · GI',
          title: 'Appendicitis sign set — anchor two',
          fact: '<b>McBurney</b> (direct RLQ) · <b>Rovsing</b> (LLQ → RLQ pain) · <b>Psoas</b> (retrocecal) · <b>Obturator</b> (pelvic). Each tests a different anatomic position.',
        },
        {
          start: 1655, end: 1735,
          tag: 'SCREENING · GI',
          title: 'Colon cancer — anchor three',
          fact: 'USPSTF 2021 update: screening starts at <b>age 45, NOT 50</b>. Continue through 75. Colonoscopy every 10 years. Old answer is wrong — guaranteed exam question.',
        },
        {
          start: 195, end: 335,
          tag: 'EMERGENCY · EYE',
          title: 'Eye emergencies — same day',
          fact: 'Acute angle-closure: <b>do NOT dilate</b>. CRAO: cherry-red spot, 90–120 min window. Retinal detachment: floaters + flashes + shadow.',
        },
        {
          start: 1040, end: 1135,
          tag: 'TRAP · HEENT',
          title: 'Mono + amoxicillin',
          fact: '<b>Never give amoxicillin/penicillin to a monospot-positive patient</b> — causes diffuse maculopapular rash in ~90%. Use azithromycin if antibiotic coverage needed.',
        },
        {
          start: 1370, end: 1465,
          tag: 'RULE · GI',
          title: 'IBS vs IBD — the blood rule',
          fact: '<b>IBS never causes blood in the stool</b>. If you see blood, it\'s IBD until proven otherwise. Single most important distinction.',
        },
        {
          start: 1465, end: 1575,
          tag: 'PAIN PATTERN · GI',
          title: 'Duodenal vs gastric ulcer',
          fact: '<b>Duodenal</b> = pain RELIEVED by food (food buffers acid). <b>Gastric</b> = pain WORSENED by food. Duodenal wakes patient at 2–3 AM. H. pylori = 70% of duodenal.',
        },
        {
          start: 2125, end: 2225,
          tag: 'MORNING CHECKLIST',
          title: 'Walking into the exam',
          fact: 'Wk1 <b>200/100/50</b> · Wk2 <b>flex vs ext + 72hr</b> · Wk3 <b>Weber rule</b> · Wk4 <b>age 45, no IBS blood</b>. Four facts. Replay walking in.',
        },
      ],

      notes: {
        highYield: [
          '<b>Weber rule:</b> to BAD ear = conductive, to GOOD ear = sensorineural',
          '<b>Appendicitis 4:</b> McBurney, Rovsing, Psoas, Obturator',
          '<b>Colon screen age 45</b> (USPSTF 2021 update)',
          '<b>IBS = no blood</b> ever — blood means IBD',
          '<b>SBP empirical:</b> PMN ≥250 → IV cefotaxime without waiting on culture',
        ],
        traps: [
          '<b>Don\'t dilate</b> in acute angle-closure — worsens the attack',
          '<b>Amoxicillin in mono</b> → 90% rash rate',
          'Uvula deviates <b>AWAY</b> from peritonsillar abscess, not toward',
          'Ménière is <b>not</b> positional — Dix-Hallpike is NEGATIVE (NOT/EXCEPT)',
          '<b>Colonoscopy contraindicated</b> in acute diverticulitis — perforation risk',
        ],
        confuse: [
          '<b>BPPV</b> (brief, positional, no hearing loss) vs <b>Ménière</b> (20 min+, hearing loss, tinnitus)',
          '<b>AOM</b> (no pain change on pinna pull) vs <b>AOE</b> (worsens with pinna pull)',
          '<b>Duodenal</b> (food helps) vs <b>gastric</b> (food hurts) ulcer',
          '<b>Crohn</b> (skip, transmural, fistulas) vs <b>UC</b> (continuous, mucosal, rectum)',
        ],
        mnemonics: [
          '<b>"Bad Conductor"</b> — Weber to BAD ear = Conductive',
          '<b>"Away from abscess"</b> — uvula deviates AWAY in PTA',
          '<b>"45 not 50"</b> — colon screen age',
          '<b>"FROG"</b> — Food Relieves duodenal (rOG just for spacing)',
        ],
      },

      related: [
        {
          tag: 'GUIDE · WEEKS 3–4',
          title: 'Midterm High-Yield Guide — HEENT & GI',
          meta: 'Funduscopy, Weber/Rinne, appendicitis, colon screening',
          href: '/nr511/midterm#week3',
        },
        {
          tag: 'PRACTICE · 38 QUESTIONS',
          title: 'Midterm Simulator — HEENT + GI subset',
          meta: 'Filtered practice · timed · rationales',
          href: '/nr511/simulator',
        },
        {
          tag: 'PREVIOUS EPISODE',
          title: 'Episode 1 — HIV & Dermatology (Weeks 1–2)',
          meta: '~16 min · CD4 thresholds · zoster trap',
          href: '?ep=1',
        },
        {
          tag: 'DASHBOARD',
          title: 'Back to NR511 dashboard',
          meta: 'CEA prep · midterm guide · simulator',
          href: '/nr511',
        },
      ],
    },

  ], // end episodes
};

/* Helpful: total stats derived at render time, not hardcoded. */
