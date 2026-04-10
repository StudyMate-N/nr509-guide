/* ============================================================
   data/system-6.js
   Breast Assessment — all concepts, questions, drill data
   Bates' Ch. 10 & 18 | NR509 Weeks 4 & 8
   ============================================================ */

const SYSTEM_DATA = {
  num:      6,
  title:    'Breast Assessment',
  bates:    "Bates' Ch. 10/18",
  week:     'Weeks 4 & 8',
  ihuman:   '',
  vignette: 'A 42-year-old woman presents for a routine well-woman exam. She reports no breast complaints but has a maternal aunt diagnosed with breast cancer at age 55. She has never had a mammogram.',
  tags:     ["Bates' 8th Ed. Ch. 10 & 18", 'NR509 Weeks 4 & 8', '6 high-yield concepts'],

  concepts: [

    // ── CONCEPT 1: VERTICAL STRIP TECHNIQUE ──────────────────
    {
      id:        'vertical_strip',
      name:      'Vertical Strip Technique',
      batesPage: 'p. 409',
      svg1: {
        label: 'Vertical strip palpation pattern',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <ellipse cx="160" cy="120" rx="95" ry="85" fill="#FFF3EE" stroke="#D4C5BE" stroke-width="1.8"/>
  <circle cx="160" cy="115" r="10" fill="#D4856A" opacity=".35" stroke="#C07055" stroke-width="1.5"/>
  <text x="160" y="119" font-family="DM Sans,sans-serif" font-size="8" fill="#A05040" text-anchor="middle" font-weight="600">Nipple</text>
  <line x1="90" y1="45" x2="90" y2="200" stroke="#0D7377" stroke-width="2" stroke-dasharray="5,3" opacity=".7"/>
  <line x1="115" y1="40" x2="115" y2="205" stroke="#0D7377" stroke-width="2" stroke-dasharray="5,3" opacity=".7"/>
  <line x1="140" y1="37" x2="140" y2="208" stroke="#0D7377" stroke-width="2" stroke-dasharray="5,3" opacity=".7"/>
  <line x1="165" y1="37" x2="165" y2="208" stroke="#0D7377" stroke-width="2" stroke-dasharray="5,3" opacity=".7"/>
  <line x1="190" y1="40" x2="190" y2="205" stroke="#0D7377" stroke-width="2" stroke-dasharray="5,3" opacity=".7"/>
  <line x1="215" y1="45" x2="215" y2="200" stroke="#0D7377" stroke-width="2" stroke-dasharray="5,3" opacity=".7"/>
  <defs><marker id="vs1" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#E8A020"/></marker></defs>
  <path d="M90,50 L90,195 M115,195 L115,45 M140,45 L140,200 M165,200 L165,42 M190,42 L190,200 M215,200 L215,50" fill="none" stroke="#E8A020" stroke-width="1.8" marker-end="url(#vs1)"/>
  <text x="72" y="125" font-family="DM Sans,sans-serif" font-size="9" fill="#0D7377" font-weight="600" transform="rotate(-90,72,125)">Medial</text>
  <text x="240" y="125" font-family="DM Sans,sans-serif" font-size="9" fill="#0D7377" font-weight="600" transform="rotate(-90,240,125)">Lateral</text>
  <text x="160" y="228" font-family="DM Serif Display,serif" font-size="11" fill="#0F1F3D" text-anchor="middle">Vertical Strip Pattern</text>
  <circle cx="52" cy="228" r="4" fill="#E8A020" opacity=".9"/>
  <text x="60" y="231" font-family="DM Sans,sans-serif" font-size="8" fill="#5F5D57">Direction of palpation</text>
</svg>`,
        caption: 'Vertical strip pattern — systematic up-and-down strips from the sternal border medially to the midaxillary line laterally, ensuring complete breast coverage'
      },
      svg2: null,
      prose: [
        "The vertical strip technique is the recommended palpation pattern for the clinical breast exam. The examiner uses the finger pads of the three middle fingers, held together flat, to palpate in small dime-sized circular motions at each point along each strip.",
        "The pattern begins at the medial border of the breast at the sternal edge and moves in vertical strips from clavicle to inframammary fold, then shifts laterally and reverses direction. Each strip overlaps the previous one to avoid missing tissue. The pattern continues until the midaxillary line is reached.",
        "At each point, three levels of pressure are applied in sequence: light (skin and subcutaneous tissue), medium (mid-level tissue), and deep (down to the chest wall and ribs). Skipping a depth level is the most common student error and can miss deep masses.",
        "The patient should be supine with the ipsilateral arm raised overhead and a small pillow or towel roll placed under the ipsilateral shoulder. This position flattens and spreads the breast tissue evenly across the chest wall, making deeper structures accessible."
      ],
      snaps: [
        { label: 'Pattern',      value: 'Vertical strips: sternal border → midaxillary line, overlapping each pass' },
        { label: 'Finger pads',  value: 'Three middle fingers flat, dime-sized circles at each point' },
        { label: 'Pressure',     value: 'Three levels at each point — light, medium, deep (to chest wall)' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Highest-yield breast exam technique question. The vertical strip method and three-pressure-depth requirement appear consistently across exam sets.' },
        trap:   "Concentric circles and wedge/spoke patterns are <em>not</em> recommended by Bates'. Only vertical strip provides overlapping coverage and reproducible thoroughness.",
        pearl:  "Position the patient supine with ipsilateral arm overhead and a roll under the shoulder. This one setup step is what makes deep palpation effective — without it, tissue bunches and deep masses hide.",
        missed: "Students forget the three depths of pressure. Light, medium, deep — at <em>every</em> palpation point. Missing the deep pass means missing chest-wall and rib-level masses.",
        source: "\"Use the pads of the 2nd, 3rd, and 4th fingers, systematically palpate the breast in small concentric circles... a vertical strip pattern is the most validated approach.\" — Bates' 8th Ed., p. 409"
      },
      questions: [
        {
          id:      'q_vertical_1',
          num:     '1 of 2',
          stem:    'A <strong>35-year-old woman</strong> presents for a clinical breast examination. You position her supine with her right arm raised overhead and a towel roll under her right shoulder. Which palpation pattern is <strong>recommended by Bates\'</strong> for completeness?',
          options: ['Concentric circles from nipple outward', 'Vertical strip from sternal border to midaxillary line', 'Wedge/spoke pattern from nipple to periphery', 'Random palpation of all four quadrants'],
          answer:  'B',
          rationale: '<strong>Correct: B — Vertical strip pattern.</strong> The vertical strip technique provides systematic overlapping coverage from the sternal border to the midaxillary line, ensuring no tissue is missed. <div class="rat-wrong"><strong>A (concentric circles)</strong> and <strong>C (wedge/spoke)</strong> are older methods that leave gaps in coverage and are not recommended by current Bates\' guidelines. <strong>D (random)</strong> has no systematic basis and guarantees missed areas.</div>'
        },
        {
          id:      'q_vertical_2',
          num:     '2 of 2',
          stem:    'During a clinical breast exam using the vertical strip technique, how many <strong>levels of pressure</strong> should be applied at each palpation point?',
          options: ['One — firm pressure only', 'Two — light and deep', 'Three — light, medium, and deep', 'Four — superficial, light, medium, and deep'],
          answer:  'C',
          rationale: '<strong>Correct: C — Three levels: light, medium, and deep.</strong> Each palpation point requires light pressure (skin/subcutaneous), medium pressure (mid-level tissue), and deep pressure (to the chest wall and ribs). <div class="rat-wrong"><strong>A</strong> misses superficial lesions. <strong>B</strong> skips the mid-level tissue. <strong>D</strong> adds a nonexistent fourth level — Bates\' specifies exactly three depths.</div>'
        }
      ]
    },

    // ── CONCEPT 2: BENIGN VS. MALIGNANT MASS ────────────────
    {
      id:        'mass_characteristics',
      name:      'Benign vs. Malignant Mass Characteristics',
      batesPage: 'p. 421',
      svg1: null,
      svg2: null,
      prose: [
        "Differentiating benign from malignant breast masses on physical exam depends on five characteristics: shape, borders, consistency, mobility, and tenderness. No single feature is diagnostic, but the pattern of findings shifts probability dramatically.",
        "Benign masses such as fibroadenomas are typically round or oval with smooth, well-defined borders. They are firm and rubbery, freely mobile (they slip away under the examining fingers — the so-called breast mouse), and may be tender, particularly with hormonal fluctuation.",
        "Malignant masses are typically irregular in shape with ill-defined or stellate borders. They are hard, stony, or gritty in consistency. They are fixed — either to the skin (producing dimpling or retraction) or to the chest wall — and usually painless. Pain does not exclude cancer, but painlessness in a hard fixed mass is the hallmark concern.",
        "Cysts present differently from solid masses. They are smooth, round, well-circumscribed, and may transilluminate. They can be tender, especially premenstrually. A dominant cyst that does not resolve after one to two menstrual cycles warrants further workup."
      ],
      snaps: [
        { label: 'Benign',     value: 'Round, smooth borders, rubbery, mobile, may be tender' },
        { label: 'Malignant',  value: 'Irregular, ill-defined borders, stony hard, fixed, usually painless' },
        { label: 'Cyst',       value: 'Smooth, round, may transilluminate, can be tender premenstrually' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'The benign-vs-malignant comparison table is the single most tested breast content item across NR509 exams.' },
        trap:   "Pain does NOT equal benign. A painless mass is more concerning for malignancy, but painful masses can also be cancer. The question tests whether you dismiss a mass because it hurts.",
        pearl:  "Fibroadenoma = \"breast mouse\" — it slips away under palpating fingers. If a mass does not move, consider fixation to skin or chest wall and think malignancy.",
        missed: "Students confuse firmness with hardness. Fibroadenomas are <em>firm and rubbery</em>. Cancers are <em>hard and stony</em>. The descriptor matters on multiple-choice questions.",
        source: "\"Hard, irregular, poorly circumscribed nodules, fixed to the skin or underlying tissues, suggest malignancy.\" — Bates' 8th Ed., p. 421"
      },
      questions: [
        {
          id:      'q_mass_1',
          num:     '1 of 2',
          stem:    'A <strong>28-year-old woman</strong> presents with a breast lump she found in the shower. On examination, the mass is <strong>round, rubbery, mobile, and mildly tender</strong>. It is 2 cm in diameter with well-defined borders. What is the most likely diagnosis?',
          options: ['Invasive ductal carcinoma', 'Fibroadenoma', 'Phyllodes tumor', 'Inflammatory breast cancer'],
          answer:  'B',
          rationale: '<strong>Correct: B — Fibroadenoma.</strong> Young woman + round + rubbery + mobile + well-defined borders + tender = classic fibroadenoma presentation (the "breast mouse"). <div class="rat-wrong"><strong>A (invasive ductal carcinoma)</strong> presents as hard, irregular, fixed, and usually painless. <strong>C (phyllodes tumor)</strong> is rare and typically larger and rapidly growing. <strong>D (inflammatory breast cancer)</strong> presents with diffuse erythema and peau d\'orange, not a discrete mobile mass.</div>'
        },
        {
          id:      'q_mass_2',
          num:     '2 of 2',
          stem:    'A <strong>58-year-old woman</strong> presents with a <strong>painless, hard, irregular mass</strong> in the upper outer quadrant that is <strong>fixed to the underlying tissue</strong>. Skin dimpling is noted over the mass. Which finding is <strong>most concerning</strong> for malignancy?',
          options: ['The mass is painless', 'The mass is in the upper outer quadrant', 'The mass is fixed with skin dimpling', 'The patient is 58 years old'],
          answer:  'C',
          rationale: '<strong>Correct: C — Fixation with skin dimpling.</strong> Fixation to skin or chest wall with dimpling/retraction indicates tumor invasion of Cooper\'s ligaments or deep tissue — the most specific physical exam finding for malignancy. <div class="rat-wrong"><strong>A (painless)</strong> is concerning but not specific. <strong>B (upper outer quadrant)</strong> is where most breast tissue exists — most masses, benign or malignant, occur there. <strong>D (age)</strong> increases risk but is not a physical exam finding.</div>'
        }
      ]
    },

    // ── CONCEPT 3: LYMPH NODE DRAINAGE ───────────────────────
    {
      id:        'lymph_drainage',
      name:      'Lymph Node Drainage of the Breast',
      batesPage: 'p. 405',
      svg1: {
        label: 'Breast anatomy and lymph drainage pathways',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <ellipse cx="155" cy="115" rx="90" ry="80" fill="#FFF3EE" stroke="#D4C5BE" stroke-width="1.5"/>
  <line x1="155" y1="35" x2="155" y2="195" stroke="#D4C5BE" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="65" y1="115" x2="245" y2="115" stroke="#D4C5BE" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="105" y="78" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">UIQ</text>
  <text x="205" y="78" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">UOQ</text>
  <text x="105" y="158" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">LIQ</text>
  <text x="205" y="158" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">LOQ</text>
  <circle cx="155" cy="112" r="8" fill="#D4856A" opacity=".35" stroke="#C07055" stroke-width="1.5"/>
  <text x="155" y="116" font-family="DM Sans,sans-serif" font-size="7" fill="#A05040" text-anchor="middle" font-weight="600">N</text>
  <path d="M200,55 Q240,45 260,35" fill="none" stroke="#5B4FCF" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="268" cy="30" rx="14" ry="8" fill="#5B4FCF" opacity=".2" stroke="#5B4FCF" stroke-width="1.5"/>
  <text x="268" y="33" font-family="DM Sans,sans-serif" font-size="6.5" fill="#5B4FCF" text-anchor="middle" font-weight="600">Central</text>
  <path d="M260,35 Q275,18 290,12" fill="none" stroke="#5B4FCF" stroke-width="1.5" stroke-linecap="round"/>
  <text x="290" y="10" font-family="DM Sans,sans-serif" font-size="6.5" fill="#5B4FCF" text-anchor="middle" font-weight="600">Infraclavicular</text>
  <path d="M240,50 Q255,35 258,20" fill="none" stroke="#0D7377" stroke-width="1.8" stroke-dasharray="3,2"/>
  <ellipse cx="258" cy="14" rx="14" ry="7" fill="#0D7377" opacity=".2" stroke="#0D7377" stroke-width="1.2"/>
  <text x="240" y="13" font-family="DM Sans,sans-serif" font-size="6.5" fill="#0D7377" text-anchor="middle" font-weight="600">Apical</text>
  <ellipse cx="250" cy="70" rx="16" ry="7" fill="#E8A020" opacity=".25" stroke="#E8A020" stroke-width="1.5"/>
  <text x="250" y="73" font-family="DM Sans,sans-serif" font-size="6.5" fill="#E8A020" text-anchor="middle" font-weight="600">Lateral</text>
  <path d="M230,85 Q248,78 250,73" fill="none" stroke="#E8A020" stroke-width="1.5" stroke-linecap="round"/>
  <ellipse cx="245" cy="105" rx="18" ry="7" fill="#C9432A" opacity=".2" stroke="#C9432A" stroke-width="1.5"/>
  <text x="245" y="108" font-family="DM Sans,sans-serif" font-size="6.5" fill="#C9432A" text-anchor="middle" font-weight="600">Subscapular</text>
  <path d="M232,95 Q242,100 245,102" fill="none" stroke="#C9432A" stroke-width="1.5" stroke-linecap="round"/>
  <ellipse cx="240" cy="135" rx="16" ry="7" fill="#0D7377" opacity=".2" stroke="#0D7377" stroke-width="1.5"/>
  <text x="240" y="138" font-family="DM Sans,sans-serif" font-size="6.5" fill="#0D7377" text-anchor="middle" font-weight="600">Pectoral</text>
  <path d="M225,125 Q238,130 240,132" fill="none" stroke="#0D7377" stroke-width="1.5" stroke-linecap="round"/>
  <text x="160" y="228" font-family="DM Serif Display,serif" font-size="11" fill="#0F1F3D" text-anchor="middle">Breast Quadrants &amp; Lymph Groups</text>
  <rect x="18" y="210" width="8" height="8" rx="2" fill="#5B4FCF" opacity=".5"/>
  <text x="30" y="217" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57">Central/Infraclavicular</text>
  <rect x="120" y="210" width="8" height="8" rx="2" fill="#E8A020" opacity=".5"/>
  <text x="132" y="217" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57">Lateral</text>
  <rect x="170" y="210" width="8" height="8" rx="2" fill="#C9432A" opacity=".5"/>
  <text x="182" y="217" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57">Subscapular</text>
  <rect x="240" y="210" width="8" height="8" rx="2" fill="#0D7377" opacity=".5"/>
  <text x="252" y="217" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57">Pectoral/Apical</text>
</svg>`,
        caption: 'Breast quadrants with axillary lymph node groups — drainage flows from pectoral (anterior) and lateral nodes through central nodes to apical (subclavicular) and infraclavicular nodes'
      },
      svg2: null,
      prose: [
        "The breast drains primarily into the axillary lymph nodes, which are organized into five groups. Understanding these groups and their anatomical positions is essential for the clinical breast exam and for interpreting lymphadenopathy.",
        "The five groups are: central (high in the axilla, against the chest wall), pectoral or anterior (along the lower border of the pectoralis major), lateral (along the upper humerus), subscapular or posterior (along the lateral border of the scapula), and apical or infraclavicular (behind the clavicle, above the pectoralis minor).",
        "Lymph drainage flows from the pectoral, lateral, and subscapular groups into the central nodes, and from the central nodes into the apical nodes. The apical nodes are the final common pathway before lymph enters the subclavian vein. Apical node involvement signals advanced disease.",
        "To palpate axillary nodes, support the patient's arm with your nondominant hand to relax the pectoral muscles. Use your dominant hand to reach high into the axilla and press against the chest wall, then slide downward. Palpate each group systematically: central first, then pectoral, lateral, subscapular, and apical."
      ],
      snaps: [
        { label: 'Groups (5)',    value: 'Central, pectoral (anterior), lateral, subscapular (posterior), apical' },
        { label: 'Flow',          value: 'Pectoral/lateral/subscapular → central → apical → subclavian vein' },
        { label: 'Exam technique', value: 'Support arm, relax pectorals, dominant hand high into axilla, slide down' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Lymph node groups and drainage direction are tested in virtually every breast exam question set. The five-group naming convention is required recall.' },
        trap:   "Central nodes are NOT the first station. Pectoral, lateral, and subscapular drain INTO central nodes. Central drains into apical. The exam tests flow direction.",
        pearl:  "Apical (infraclavicular) nodes are the final common pathway. If they are palpable, metastatic disease has progressed beyond the axilla.",
        missed: "Students forget to relax the pectorals by supporting the arm. Tense muscles block access to the axillary nodes. The exam tests technique, not just anatomy.",
        source: "\"Lymphatics from the breast drain mainly into the anterior (pectoral) and central axillary nodes... then into the apical (subclavicular) nodes.\" — Bates' 8th Ed., p. 405"
      },
      questions: [
        {
          id:      'q_lymph_1',
          num:     '1 of 2',
          stem:    'A <strong>50-year-old woman</strong> with a newly diagnosed breast mass has axillary lymphadenopathy. Which lymph node group represents the <strong>final common drainage pathway</strong> before lymph enters the subclavian vein?',
          options: ['Central nodes', 'Pectoral (anterior) nodes', 'Apical (infraclavicular) nodes', 'Lateral nodes'],
          answer:  'C',
          rationale: '<strong>Correct: C — Apical (infraclavicular) nodes.</strong> Lymph flows from pectoral, lateral, and subscapular nodes into the central nodes, and then into the apical nodes, which are the final common pathway before the subclavian vein. <div class="rat-wrong"><strong>A (central)</strong> is the second-to-last station, not the final. <strong>B (pectoral)</strong> and <strong>D (lateral)</strong> are first-order drainage nodes.</div>'
        },
        {
          id:      'q_lymph_2',
          num:     '2 of 2',
          stem:    'When palpating axillary lymph nodes, what should the examiner do with the patient\'s <strong>ipsilateral arm</strong> to improve access to the axillary contents?',
          options: ['Have the patient raise the arm overhead', 'Support the arm to relax the pectoral muscles', 'Ask the patient to press the arm against their side', 'Have the patient place the hand behind the head'],
          answer:  'B',
          rationale: '<strong>Correct: B — Support the arm to relax the pectoral muscles.</strong> Relaxing the pectorals opens the axillary space and allows the examiner\'s fingers to reach high against the chest wall. <div class="rat-wrong"><strong>A</strong> is used during breast palpation, not axillary node assessment. <strong>C</strong> contracts the pectorals, blocking access. <strong>D</strong> does not adequately relax the axillary musculature.</div>'
        }
      ]
    },

    // ── CONCEPT 4: USPSTF SCREENING GUIDELINES ──────────────
    {
      id:        'uspstf_screening',
      name:      'USPSTF Screening by Age (2024 Update)',
      batesPage: 'p. 403',
      svg1: null,
      svg2: null,
      prose: [
        "The United States Preventive Services Task Force updated its breast cancer screening recommendations in 2024. The most significant change: mammography screening now starts at age 40, not 50. This applies to all women at average risk.",
        "The current recommendation is biennial (every 2 years) screening mammography for women aged 40 to 74 years. This is a B-level recommendation — meaning there is moderate certainty of moderate net benefit. The previous starting age of 50 with individual decision-making for ages 40 to 49 has been replaced.",
        "For women aged 75 and older, the USPSTF concludes that the evidence is insufficient to assess the balance of benefits and harms (I statement). Clinical judgment and patient preference guide decisions in this age group.",
        "Risk factors that may warrant earlier or more frequent screening include first-degree relative with breast cancer, known BRCA1/BRCA2 mutations, prior chest radiation between ages 10 and 30, and high-risk lesions on prior biopsy. These patients are often managed outside the average-risk guideline."
      ],
      snaps: [
        { label: '2024 update',  value: 'Start mammography at age <b>40</b> (changed from 50)' },
        { label: 'Interval',     value: 'Biennial (every 2 years) for ages 40–74' },
        { label: '≥75 years',    value: 'Insufficient evidence (I statement) — clinical judgment' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'The USPSTF age threshold change is a high-priority update for NR509 exams. Expect questions comparing old vs. new guidelines.' },
        trap:   "The old threshold was 50 with shared decision-making at 40–49. The 2024 update makes 40 the universal start. Do not confuse old and new guidelines on the exam.",
        pearl:  "Biennial means every 2 years — not biannual (twice per year). This word-swap trick appears in distractors. Biennial screening = mammogram every 24 months.",
        missed: "Students forget the I statement for age 75+. USPSTF does not recommend for or against screening after 74 — evidence is insufficient. The answer is not 'stop at 74.'",
        source: "\"The USPSTF recommends biennial screening mammography for women aged 40 to 74 years.\" — USPSTF 2024 Final Recommendation"
      },
      questions: [
        {
          id:      'q_uspstf_1',
          num:     '1 of 2',
          stem:    'A <strong>42-year-old woman</strong> with no family history of breast cancer asks when she should begin screening mammography. Based on the <strong>2024 USPSTF guidelines</strong>, what is the correct recommendation?',
          options: ['Begin screening now with biennial mammography', 'Begin screening at age 45 with annual mammography', 'Begin screening at age 50 with biennial mammography', 'Shared decision-making — screening is optional until age 50'],
          answer:  'A',
          rationale: '<strong>Correct: A — Begin screening now with biennial mammography.</strong> The 2024 USPSTF update recommends biennial screening mammography starting at age 40 for all average-risk women. At 42, she should already be screening. <div class="rat-wrong"><strong>B</strong> reflects ACS guidelines, not USPSTF. <strong>C</strong> reflects the older USPSTF recommendation (pre-2024). <strong>D</strong> reflects the old shared decision-making approach for 40–49, which has been replaced.</div>'
        },
        {
          id:      'q_uspstf_2',
          num:     '2 of 2',
          stem:    'A <strong>76-year-old woman</strong> in good health asks whether she should continue screening mammography. According to the <strong>2024 USPSTF guidelines</strong>, what is the appropriate response?',
          options: ['Continue biennial screening — there is no upper age limit', 'Stop screening — benefit ends at age 74', 'Evidence is insufficient to recommend for or against continued screening', 'Switch to annual screening after age 74'],
          answer:  'C',
          rationale: '<strong>Correct: C — Insufficient evidence (I statement).</strong> The USPSTF concludes evidence is insufficient to assess benefits vs. harms of screening mammography in women 75 and older. This is an I statement — not a recommendation to stop. <div class="rat-wrong"><strong>A</strong> implies certainty that does not exist. <strong>B</strong> overstates the guideline — USPSTF does not say to stop, only that evidence is insufficient. <strong>D</strong> has no guideline basis.</div>'
        }
      ]
    },

    // ── CONCEPT 5: PECTORAL FASCIA TEST ─────────────────────
    {
      id:        'pectoral_fascia',
      name:      'Pectoral Fascia Test (Serratus Anterior)',
      batesPage: 'p. 411',
      svg1: null,
      svg2: null,
      prose: [
        "When a breast mass is suspected to be fixed to the chest wall, the examiner must determine whether it is truly fixed to the pectoral fascia or merely tethered to the overlying skin. This distinction has staging and prognostic implications — chest wall fixation indicates a more advanced tumor.",
        "To test for chest wall fixation, ask the patient to press her hands against her hips (or press her palms together in front of her) to contract the pectoralis major. Then palpate the mass. If the mass moves with the contracting pectoral muscle, it is fixed to the pectoral fascia or chest wall. If the mass remains freely mobile despite pectoral contraction, it is not chest-wall-fixed.",
        "Skin fixation is tested separately by observing for dimpling or retraction when the patient raises her arms overhead or when the skin over the mass is gently moved. Dimpling indicates tumor invasion of Cooper's ligaments, which tether breast parenchyma to the skin.",
        "The serratus anterior muscle is tested by asking the patient to push against a wall with arms extended. Weakness causes the medial border of the scapula to protrude — winging of the scapula — which indicates long thoracic nerve injury. While not a breast mass test, it is grouped in the breast and thorax exam and frequently tested alongside pectoral maneuvers."
      ],
      snaps: [
        { label: 'Chest wall test', value: 'Hands on hips → contract pectorals → palpate mass → does it move with the muscle?' },
        { label: 'Skin fixation',   value: 'Arms overhead → observe for dimpling/retraction (Cooper\'s ligament invasion)' },
        { label: 'Scapular winging', value: 'Push against wall → medial scapula protrudes = long thoracic nerve injury' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Chest wall fixation vs. skin fixation is a common two-part question. The scapular winging component is tested less frequently but appears in cross-system questions.' },
        trap:   "Dimpling = skin fixation (Cooper's ligaments). Reduced mobility on pectoral contraction = chest wall fixation. These are two different tests with two different mechanisms.",
        pearl:  "Scapular winging = long thoracic nerve, NOT thoracodorsal. The thoracodorsal nerve innervates the latissimus dorsi. This swap is a classic NR509 distractor.",
        missed: "Students assume that any mass that does not move is 'fixed.' You must contract the pectorals to test chest wall fixation. Without muscle contraction, you cannot distinguish deep fixation from a large mass that simply does not shift easily.",
        source: "\"To test for attachment to the pectoral muscles, ask the patient to press her hands against her hips... palpate the mass to see if it becomes more fixed.\" — Bates' 8th Ed., p. 411"
      },
      questions: [
        {
          id:      'q_pectoral_1',
          num:     '1 of 2',
          stem:    'A <strong>55-year-old woman</strong> has a breast mass that appears fixed on initial palpation. To determine whether the mass is attached to the <strong>chest wall</strong>, you should ask the patient to:',
          options: ['Raise both arms overhead', 'Press her hands firmly against her hips', 'Take a deep breath and hold it', 'Lean forward from the waist'],
          answer:  'B',
          rationale: '<strong>Correct: B — Press hands against hips.</strong> This contracts the pectoralis major. If the mass becomes more fixed or moves with the contracting muscle, it is attached to the pectoral fascia/chest wall. <div class="rat-wrong"><strong>A (arms overhead)</strong> tests for skin dimpling/retraction, not chest wall fixation. <strong>C</strong> has no role in chest wall fixation testing. <strong>D (lean forward)</strong> is used for visual inspection of breast symmetry, not fixation assessment.</div>'
        },
        {
          id:      'q_pectoral_2',
          num:     '2 of 2',
          stem:    'A patient pushes against a wall with arms extended and the <strong>medial border of the scapula protrudes</strong> prominently. Which nerve is most likely injured?',
          options: ['Thoracodorsal nerve', 'Long thoracic nerve', 'Axillary nerve', 'Suprascapular nerve'],
          answer:  'B',
          rationale: '<strong>Correct: B — Long thoracic nerve.</strong> The long thoracic nerve innervates the serratus anterior, which holds the scapula flat against the chest wall. Injury causes winging of the scapula (medial border protrusion). <div class="rat-wrong"><strong>A (thoracodorsal)</strong> innervates the latissimus dorsi — injury weakens arm adduction and extension, not scapular stabilization. <strong>C (axillary)</strong> innervates the deltoid. <strong>D (suprascapular)</strong> innervates the supraspinatus and infraspinatus.</div>'
        }
      ]
    },

    // ── CONCEPT 6: NIPPLE DISCHARGE ASSESSMENT ──────────────
    {
      id:        'nipple_discharge',
      name:      'Nipple Discharge Assessment',
      batesPage: 'p. 418',
      svg1: null,
      svg2: null,
      prose: [
        "Nipple discharge evaluation requires systematic characterization: is it spontaneous or provoked, unilateral or bilateral, from a single duct or multiple ducts, and what color is it? Each feature shifts the differential in a specific direction.",
        "Pathologic discharge is spontaneous, unilateral, from a single duct, and bloody or serosanguinous (clear and blood-tinged). This pattern requires imaging and possible surgical referral. The most common cause of bloody nipple discharge is an intraductal papilloma — a benign growth — but carcinoma must be excluded.",
        "Physiologic or benign discharge is typically bilateral, from multiple ducts, and nonspontaneous (only with manipulation). It may be milky (galactorrhea — think prolactin), green (fibrocystic changes), or yellow. Bilateral milky discharge in a nonlactating woman warrants a prolactin level and thyroid function tests.",
        "When examining discharge, compress the breast radially toward the nipple (like spokes of a wheel) from different positions around the areola to identify the triggering duct. Note the clock position of the involved duct, the color and consistency of the discharge, and whether blood is present. Always test discharge for occult blood if the color is ambiguous."
      ],
      snaps: [
        { label: 'Pathologic',   value: 'Spontaneous, unilateral, single duct, bloody/serosanguinous' },
        { label: 'Physiologic',  value: 'Bilateral, multiple ducts, provoked, milky/green/yellow' },
        { label: 'Top cause of bloody discharge', value: 'Intraductal papilloma (benign — but must exclude carcinoma)' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Nipple discharge characterization appears regularly. The pathologic vs. physiologic distinction and intraductal papilloma as the leading cause of bloody discharge are key recall items.' },
        trap:   "Bloody discharge = intraductal papilloma MOST COMMONLY, not cancer. But carcinoma must still be excluded. The question tests whether you jump to cancer or recall the most common benign cause.",
        pearl:  "Bilateral milky discharge in a nonlactating woman = galactorrhea. Check prolactin and TSH. Hypothyroidism raises TRH, which stimulates prolactin release — an unexpected connection.",
        missed: "Students forget to identify single duct vs. multiple duct origin. Single duct = more concerning. Multiple ducts = more likely physiologic. The exam tests this distinction directly.",
        source: "\"A bloody discharge from a single duct demands further evaluation... the most common cause is an intraductal papilloma.\" — Bates' 8th Ed., p. 418"
      },
      questions: [
        {
          id:      'q_nipple_1',
          num:     '1 of 2',
          stem:    'A <strong>45-year-old woman</strong> presents with <strong>spontaneous bloody discharge</strong> from the <strong>left breast only</strong>, expressed from a <strong>single duct</strong> at the 2 o\'clock position. What is the <strong>most common</strong> cause of this presentation?',
          options: ['Ductal carcinoma in situ', 'Intraductal papilloma', 'Fibrocystic changes', 'Paget disease of the nipple'],
          answer:  'B',
          rationale: '<strong>Correct: B — Intraductal papilloma.</strong> It is the most common cause of spontaneous bloody nipple discharge from a single duct. Although carcinoma must be excluded, papilloma is statistically the most frequent etiology. <div class="rat-wrong"><strong>A (DCIS)</strong> can cause bloody discharge but is less common than papilloma. <strong>C (fibrocystic)</strong> typically produces green or yellow bilateral multiduct discharge. <strong>D (Paget disease)</strong> presents with eczematoid nipple changes, not isolated discharge.</div>'
        },
        {
          id:      'q_nipple_2',
          num:     '2 of 2',
          stem:    'A <strong>32-year-old nonlactating woman</strong> presents with <strong>bilateral milky nipple discharge</strong> from multiple ducts. She also reports irregular menses. Which laboratory test should be ordered <strong>first</strong>?',
          options: ['CA-125', 'Prolactin level', 'BRCA genetic testing', 'Estrogen receptor assay'],
          answer:  'B',
          rationale: '<strong>Correct: B — Prolactin level.</strong> Bilateral milky discharge from multiple ducts in a nonlactating woman = galactorrhea. The first-line workup is a serum prolactin level. Elevated prolactin can result from pituitary adenoma, medications, or hypothyroidism. <div class="rat-wrong"><strong>A (CA-125)</strong> is an ovarian cancer marker — irrelevant here. <strong>C (BRCA)</strong> tests genetic risk, not the cause of galactorrhea. <strong>D (estrogen receptor assay)</strong> is performed on tissue specimens, not as a screening lab.</div>'
        }
      ]
    }

  ],

  nextSystem: {
    num:     7,
    title:   'High-Yield Cross-System',
    href:    'system-7.html',
    preview: 'Cross-system integration — tying together cardiac, pulmonary, abdominal, neurological, musculoskeletal, and breast findings into unified clinical reasoning for the NR509 final...'
  }
};

// ── DRILL QUESTIONS for System 6 ─────────────────────────
const DRILL_QUESTIONS = [
  {
    concept:   'Vertical Strip Technique',
    stem:      'During a clinical breast exam, you are palpating using the vertical strip technique. How should you position your fingers for each palpation point?',
    options:   ['Fingertips pressing firmly in a linear motion', 'Finger pads of three middle fingers in dime-sized circles', 'Thumb and index finger pinching the tissue', 'Palm of the hand pressing broadly over each quadrant'],
    answer:    1,
    rationale: 'The vertical strip technique uses the pads of the 2nd, 3rd, and 4th fingers held flat, making small dime-sized circular motions at each point with three levels of pressure (light, medium, deep). Fingertips miss tissue; pinching creates false masses; palmar palpation lacks sensitivity.'
  },
  {
    concept:   'Benign vs. Malignant Mass',
    stem:      'A 25-year-old woman has a 1.5 cm breast mass that is rubbery, well-circumscribed, and slips away under your fingers during palpation. What is this mass most likely?',
    options:   ['Invasive lobular carcinoma', 'Breast cyst', 'Fibroadenoma', 'Fat necrosis'],
    answer:    2,
    rationale: 'The classic "breast mouse" — a mobile, rubbery, well-circumscribed mass in a young woman — is a fibroadenoma. Carcinoma is hard and fixed. Cysts are fluctuant and may transilluminate. Fat necrosis produces an irregular firm mass with a history of trauma.'
  },
  {
    concept:   'Lymph Node Drainage',
    stem:      'Which axillary lymph node group is considered the final common pathway for lymphatic drainage of the breast before entering the subclavian vein?',
    options:   ['Central nodes', 'Pectoral (anterior) nodes', 'Subscapular (posterior) nodes', 'Apical (infraclavicular) nodes'],
    answer:    3,
    rationale: 'Lymph flows from pectoral, lateral, and subscapular nodes into the central nodes, and then from central nodes into the apical (infraclavicular) nodes — the final common pathway before the subclavian vein. Apical node involvement indicates advanced disease.'
  },
  {
    concept:   'USPSTF Screening',
    stem:      'According to the 2024 USPSTF update, at what age should average-risk women begin screening mammography?',
    options:   ['Age 35', 'Age 40', 'Age 45', 'Age 50'],
    answer:    1,
    rationale: 'The 2024 USPSTF update changed the recommended start age for biennial screening mammography from 50 to 40 for all average-risk women. This replaced the previous shared decision-making approach for women aged 40–49.'
  },
  {
    concept:   'Nipple Discharge',
    stem:      'A 48-year-old woman has spontaneous unilateral bloody discharge from a single duct. What is the most common cause?',
    options:   ['Breast carcinoma', 'Intraductal papilloma', 'Fibrocystic changes', 'Prolactinoma'],
    answer:    1,
    rationale: 'Intraductal papilloma is the most common cause of spontaneous bloody nipple discharge from a single duct. While carcinoma must be excluded, papilloma is statistically the most frequent etiology. Fibrocystic changes produce green/yellow multiduct discharge. Prolactinoma causes bilateral milky discharge.'
  }
];
