/* ============================================================
   data/system-7.js
   High-Yield Cross-System — all concepts, questions, drill data
   Bates' All Chapters | NR509 Final Exam
   ============================================================ */

const SYSTEM_DATA = {
  num:      7,
  title:    'High-Yield Cross-System',
  bates:    "All chapters",
  week:     'Final Exam',
  ihuman:   '',
  vignette: 'A 58-year-old woman with a 20-year history of type 2 diabetes presents for annual screening. She reports intermittent blurred vision and has not had an eye exam in three years. Her last colonoscopy was over ten years ago, and she continues to smoke half a pack daily despite prior counseling.',
  tags:     ["Bates' 8th Ed. All Chapters", 'NR509 Final Exam', '6 high-yield concepts'],

  concepts: [

    // ── CONCEPT 1: COTTON-WOOL SPOTS — ALL 13 CONDITIONS ─────
    {
      id:        'cotton_wool',
      name:      'Cotton-Wool Spots — All 13 Conditions',
      batesPage: 'p. 224–226',
      svg1: {
        label: 'Cotton-wool spot fundoscopic view',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <circle cx="160" cy="120" r="105" fill="#1A0A00" stroke="#0F1F3D" stroke-width="2"/>
  <circle cx="160" cy="120" r="100" fill="#8B2500"/>
  <radialGradient id="cw_bg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C04020"/>
    <stop offset="100%" stop-color="#6B1800"/>
  </radialGradient>
  <circle cx="160" cy="120" r="98" fill="url(#cw_bg)"/>
  <line x1="60" y1="120" x2="115" y2="120" stroke="#B03010" stroke-width="3" stroke-linecap="round"/>
  <line x1="205" y1="120" x2="260" y2="120" stroke="#B03010" stroke-width="3" stroke-linecap="round"/>
  <line x1="160" y1="25" x2="160" y2="75" stroke="#B03010" stroke-width="3" stroke-linecap="round"/>
  <line x1="160" y1="165" x2="160" y2="215" stroke="#B03010" stroke-width="3" stroke-linecap="round"/>
  <line x1="95" y1="55" x2="125" y2="85" stroke="#B03010" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="195" y1="155" x2="225" y2="185" stroke="#B03010" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="225" y1="55" x2="195" y2="85" stroke="#B03010" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="95" y1="185" x2="125" y2="155" stroke="#B03010" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="160" cy="120" r="18" fill="#E8A020" opacity=".85" stroke="#C07020" stroke-width="1.5"/>
  <text x="160" y="124" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle" font-weight="700">Optic disc</text>
  <circle cx="200" cy="115" r="6" fill="#3A0800"/>
  <text x="200" y="107" font-family="DM Sans,sans-serif" font-size="7" fill="#E8A020" text-anchor="middle">Macula</text>
  <ellipse cx="120" cy="95" rx="14" ry="8" fill="#FFFBE8" opacity=".85" stroke="#E8A020" stroke-width="1.2"/>
  <text x="120" y="98" font-family="DM Sans,sans-serif" font-size="6" fill="#0F1F3D" text-anchor="middle" font-weight="600">CWS</text>
  <ellipse cx="185" cy="80" rx="11" ry="7" fill="#FFFBE8" opacity=".75" stroke="#E8A020" stroke-width="1"/>
  <text x="185" y="83" font-family="DM Sans,sans-serif" font-size="5.5" fill="#0F1F3D" text-anchor="middle" font-weight="600">CWS</text>
  <ellipse cx="140" cy="150" rx="12" ry="6" fill="#FFFBE8" opacity=".8" stroke="#E8A020" stroke-width="1"/>
  <text x="140" y="153" font-family="DM Sans,sans-serif" font-size="5.5" fill="#0F1F3D" text-anchor="middle" font-weight="600">CWS</text>
  <rect x="15" y="15" width="95" height="18" rx="3" fill="#0F1F3D" opacity=".8"/>
  <text x="62" y="27" font-family="DM Serif Display,serif" font-size="9" fill="#FFFBE8" text-anchor="middle">Cotton-Wool Spots</text>
  <circle cx="25" cy="232" r="4" fill="#FFFBE8" opacity=".85" stroke="#E8A020" stroke-width="1"/>
  <text x="33" y="235" font-family="DM Sans,sans-serif" font-size="7.5" fill="#0F1F3D">= fluffy white retinal lesion (axonal debris)</text>
</svg>`,
        caption: 'Fundoscopic view — cotton-wool spots (CWS) appear as fluffy white patches near the optic disc, representing ischemic axonal swelling in the retinal nerve fiber layer'
      },
      svg2: null,
      prose: [
        "Cotton-wool spots are among the most clinically important fundoscopic findings because they indicate retinal ischemia and can be caused by at least 13 distinct systemic conditions. Each represents focal infarction of the retinal nerve fiber layer, producing accumulation of axoplasmic debris that appears as a small, fluffy white lesion near the optic disc.",
        "The complete list of 13 conditions associated with cotton-wool spots is: (1) diabetes mellitus, (2) hypertension, (3) HIV/AIDS, (4) systemic lupus erythematosus (SLE), (5) dermatomyositis, (6) polyarteritis nodosa, (7) severe anemia, (8) leukemia, (9) metastatic carcinoma, (10) giant cell arteritis, (11) diabetic retinopathy, (12) papilledema, and (13) radiation retinopathy. Diabetes and hypertension are by far the most common causes encountered in primary care.",
        "Clinically, cotton-wool spots signal that a systemic process is damaging small vessels. In diabetes they indicate progression toward proliferative retinopathy; in hypertension they may mark end-organ damage; in HIV/AIDS they are the most common ocular finding. In autoimmune vasculitides such as SLE, dermatomyositis, and polyarteritis nodosa, their presence suggests active disease with vascular involvement.",
        "The exam significance is high: when a question stem describes fluffy white retinal lesions and asks for the underlying cause, you must systematically consider all 13 conditions rather than defaulting only to diabetes. This is the single largest gap across competitor NR509 guides."
      ],
      snaps: [
        { label: 'Appearance',    value: 'Fluffy white patches near the optic disc on fundoscopy' },
        { label: 'Pathology',     value: 'Focal retinal nerve fiber layer infarction → axoplasmic debris accumulation' },
        { label: 'Top 2 causes',  value: '<b>Diabetes mellitus</b> and <b>hypertension</b>' },
        { label: 'Total causes',  value: '<b>13 conditions</b> — DM, HTN, HIV, SLE, dermatomyositis, PAN, severe anemia, leukemia, metastatic carcinoma, GCA, diabetic retinopathy, papilledema, radiation retinopathy' },
        { label: 'Key principle',  value: 'Cotton-wool spots = retinal ischemia = systemic small-vessel disease' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: "Appears across multiple exam systems. No competitor guide lists all 13 conditions — this is the single highest-yield gap." },
        trap:   "Assuming cotton-wool spots = diabetes only. The exam can present any of the 13 causes. SLE and HIV are popular distractors.",
        pearl:  "Cotton-wool spots in a young patient with joint pain and malar rash → SLE until proven otherwise. In an immunocompromised patient → think HIV/AIDS first.",
        missed: "Students forget the non-vascular causes: leukemia, metastatic carcinoma, and radiation retinopathy. These appear as 'unexpected' answer choices.",
        source: "\"Cotton-wool spots... result from ischemic infarction of the nerve fiber layer.\" — Bates' 8th Ed., p. 224"
      },
      questions: [
        {
          id:      'q_cotton_wool_1',
          num:     '1 of 2',
          stem:    'A <strong>34-year-old woman</strong> presents with fatigue, joint pain, and a malar rash. Fundoscopic examination reveals multiple <strong>fluffy white patches near the optic disc</strong>. Laboratory studies show positive ANA and anti-dsDNA antibodies. Which condition is the most likely cause of these retinal findings?',
          options: ['Diabetic retinopathy', 'Systemic lupus erythematosus', 'Hypertensive retinopathy', 'HIV retinopathy'],
          answer:  'B',
          rationale: '<strong>Correct: B — Systemic lupus erythematosus (SLE).</strong> Malar rash + joint pain + positive ANA/anti-dsDNA + cotton-wool spots = SLE with retinal vasculitis. Cotton-wool spots occur in SLE due to immune-complex-mediated small vessel occlusion. <div class="rat-wrong"><strong>A (diabetic retinopathy)</strong> — no history of diabetes; age and presentation do not fit. <strong>C (hypertensive retinopathy)</strong> — no mention of elevated BP; malar rash points to SLE. <strong>D (HIV retinopathy)</strong> — no risk factors or immunodeficiency mentioned; ANA/dsDNA clinches SLE.</div>'
        },
        {
          id:      'q_cotton_wool_2',
          num:     '2 of 2',
          stem:    'Which of the following is <strong>NOT</strong> a recognized cause of cotton-wool spots on fundoscopic examination?',
          options: ['Giant cell arteritis', 'Osteoarthritis', 'Leukemia', 'Polyarteritis nodosa'],
          answer:  'B',
          rationale: '<strong>Correct: B — Osteoarthritis.</strong> Osteoarthritis is a degenerative joint disease that does not involve vascular inflammation or retinal ischemia. It has no association with cotton-wool spots. <div class="rat-wrong"><strong>A (giant cell arteritis)</strong> — causes retinal ischemia via vasculitis; recognized cause. <strong>C (leukemia)</strong> — causes retinal ischemia via hyperviscosity and leukostasis; recognized cause. <strong>D (polyarteritis nodosa)</strong> — medium-vessel vasculitis that can produce retinal ischemia; recognized cause.</div>'
        }
      ]
    },

    // ── CONCEPT 2: USPSTF PREVENTION SCREENING TABLE ─────────
    {
      id:        'uspstf_screening',
      name:      'USPSTF Prevention Screening by Age/Sex',
      batesPage: 'p. 2–20',
      svg1: {
        label: 'USPSTF screening summary by age and sex',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <rect x="5" y="5" width="310" height="30" rx="4" fill="#0F1F3D"/>
  <text x="160" y="24" font-family="DM Serif Display,serif" font-size="12" fill="#FFFBE8" text-anchor="middle">USPSTF Grade A/B Screenings</text>
  <rect x="5" y="40" width="90" height="20" rx="3" fill="#0D7377"/>
  <text x="50" y="54" font-family="DM Sans,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">Screening</text>
  <rect x="100" y="40" width="50" height="20" rx="3" fill="#0D7377"/>
  <text x="125" y="54" font-family="DM Sans,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">Age</text>
  <rect x="155" y="40" width="40" height="20" rx="3" fill="#0D7377"/>
  <text x="175" y="54" font-family="DM Sans,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">Sex</text>
  <rect x="200" y="40" width="115" height="20" rx="3" fill="#0D7377"/>
  <text x="257" y="54" font-family="DM Sans,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">Interval</text>
  <rect x="5" y="64" width="310" height="19" rx="2" fill="#E8F4F5" opacity=".5"/>
  <text x="50" y="77" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Colon Ca</text>
  <text x="125" y="77" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">45–75</text>
  <text x="175" y="77" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">All</text>
  <text x="257" y="77" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Colonoscopy q10yr</text>
  <rect x="5" y="84" width="310" height="19" rx="2" fill="#FFF8F0" opacity=".5"/>
  <text x="50" y="97" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Breast Ca</text>
  <text x="125" y="97" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">40–74</text>
  <text x="175" y="97" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">F</text>
  <text x="257" y="97" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Mammography q2yr</text>
  <rect x="5" y="104" width="310" height="19" rx="2" fill="#E8F4F5" opacity=".5"/>
  <text x="50" y="117" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Cervical Ca</text>
  <text x="125" y="117" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">21–65</text>
  <text x="175" y="117" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">F</text>
  <text x="257" y="117" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Pap q3yr or HPV q5yr</text>
  <rect x="5" y="124" width="310" height="19" rx="2" fill="#FFF8F0" opacity=".5"/>
  <text x="50" y="137" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Lung Ca</text>
  <text x="125" y="137" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">50–80</text>
  <text x="175" y="137" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">All*</text>
  <text x="257" y="137" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">LDCT annually (20+pk-yr)</text>
  <rect x="5" y="144" width="310" height="19" rx="2" fill="#E8F4F5" opacity=".5"/>
  <text x="50" y="157" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">AAA</text>
  <text x="125" y="157" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">65–75</text>
  <text x="175" y="157" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">M smk</text>
  <text x="257" y="157" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">US once ever</text>
  <rect x="5" y="164" width="310" height="19" rx="2" fill="#FFF8F0" opacity=".5"/>
  <text x="50" y="177" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Osteoporosis</text>
  <text x="125" y="177" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">≥65</text>
  <text x="175" y="177" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">F</text>
  <text x="257" y="177" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">DEXA per risk</text>
  <rect x="5" y="184" width="310" height="19" rx="2" fill="#E8F4F5" opacity=".5"/>
  <text x="50" y="197" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">DM type 2</text>
  <text x="125" y="197" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">35–70</text>
  <text x="175" y="197" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">All OW</text>
  <text x="257" y="197" font-family="DM Sans,sans-serif" font-size="8" fill="#0F1F3D" text-anchor="middle">Fasting glucose/A1c q3yr</text>
  <text x="160" y="218" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">*Lung Ca: 20+ pack-year Hx, currently smoke or quit &lt;15yr</text>
  <text x="160" y="228" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">OW = overweight/obese | smk = ever-smoked</text>
</svg>`,
        caption: 'USPSTF Grade A/B screening recommendations — key screenings organized by cancer/disease type, eligible age range, sex, and interval'
      },
      svg2: null,
      prose: [
        "The USPSTF assigns letter grades (A, B, C, D, I) to preventive services. Grade A and B screenings are those with high certainty of substantial or moderate net benefit and should be offered to all eligible patients. NR509 final exams frequently test the age ranges, eligible populations, and intervals for the major screenings.",
        "Colorectal cancer screening begins at age 45 for all adults and continues through age 75 (Grade A). Colonoscopy every 10 years is the reference standard. Breast cancer screening with mammography is recommended every 2 years for women aged 40 to 74. Cervical cancer screening starts at age 21 with Pap smear every 3 years, or at age 30 with HPV co-testing every 5 years, through age 65.",
        "Lung cancer screening with low-dose CT is recommended annually for adults aged 50 to 80 who have a 20-plus pack-year smoking history and currently smoke or quit within the past 15 years. Abdominal aortic aneurysm screening with one-time ultrasound is recommended for men aged 65 to 75 who have ever smoked.",
        "Key testing pitfall: the USPSTF does not recommend routine PSA screening for prostate cancer in any age group as a blanket recommendation — it is Grade C (individual decision for ages 55–69). Students who select PSA screening as a 'recommended' screening are falling into a common exam trap."
      ],
      snaps: [
        { label: 'Colon cancer',    value: 'Age 45–75, all adults, colonoscopy q10yr (Grade A)' },
        { label: 'Breast cancer',   value: 'Age 40–74, women, mammography q2yr (Grade B)' },
        { label: 'Cervical cancer', value: 'Age 21–65, women, Pap q3yr or HPV q5yr' },
        { label: 'Lung cancer',     value: 'Age 50–80, 20+ pk-yr history, LDCT annually (Grade B)' },
        { label: 'Common trap',     value: 'PSA is Grade C (shared decision 55–69) — <b>not</b> a routine Grade A/B recommendation' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: "Age cutoffs and intervals are tested heavily. Knowing the PSA trap alone is worth a question." },
        trap:   "Selecting PSA screening as a Grade A/B recommendation. It is Grade C — individual decision only.",
        pearl:  "Lung cancer LDCT screening requires both criteria: 20+ pack-year history AND currently smoking or quit within 15 years. Missing either criterion = not eligible.",
        missed: "AAA screening is only for men who have ever smoked, ages 65–75. Students forget the sex-specific and smoking-specific eligibility.",
        source: "\"The periodic health examination should include age- and sex-appropriate screening...\" — Bates' 8th Ed., p. 4"
      },
      questions: [
        {
          id:      'q_uspstf_1',
          num:     '1 of 2',
          stem:    'A <strong>48-year-old woman</strong> with no significant medical history presents for a well-woman visit. She has never had a colonoscopy. According to current USPSTF Grade A recommendations, which screening should you recommend?',
          options: ['Colonoscopy', 'Low-dose CT of the chest', 'DEXA scan', 'Abdominal ultrasound for AAA'],
          answer:  'A',
          rationale: '<strong>Correct: A — Colonoscopy.</strong> USPSTF recommends colorectal cancer screening for all adults beginning at age 45. At 48, she is overdue. Colonoscopy every 10 years is the reference standard. <div class="rat-wrong"><strong>B (LDCT)</strong> — requires 20+ pack-year smoking history; no smoking history given. <strong>C (DEXA)</strong> — osteoporosis screening recommended for women ≥65 or younger with risk factors. <strong>D (AAA US)</strong> — recommended only for men aged 65–75 who have ever smoked.</div>'
        },
        {
          id:      'q_uspstf_2',
          num:     '2 of 2',
          stem:    'A <strong>62-year-old male</strong> with a 30-pack-year smoking history who quit 5 years ago asks about cancer screening. Which combination is <strong>most appropriate</strong> per USPSTF guidelines?',
          options: ['Colonoscopy + PSA + LDCT', 'Colonoscopy + LDCT', 'LDCT + DEXA + AAA ultrasound', 'Colonoscopy + mammography + LDCT'],
          answer:  'B',
          rationale: '<strong>Correct: B — Colonoscopy + LDCT.</strong> At 62 with 30 pack-years and quit 5 years ago, he meets criteria for both colorectal cancer screening (age 45–75) and lung cancer screening (age 50–80, 20+ pk-yr, quit <15 yr ago). <div class="rat-wrong"><strong>A</strong> — PSA is Grade C (shared decision), not a routine recommendation. <strong>C</strong> — DEXA is recommended for women ≥65; AAA screening is for ages 65–75 (he is 62). <strong>D</strong> — mammography is for women.</div>'
        }
      ]
    },

    // ── CONCEPT 3: IBD VS IBS DISTINCTION TABLE ──────────────
    {
      id:        'ibd_vs_ibs',
      name:      'IBD vs IBS Final Distinction Table',
      batesPage: 'p. 370–375',
      svg1: null,
      svg2: null,
      prose: [
        "Inflammatory bowel disease (IBD) and irritable bowel syndrome (IBS) are frequently confused on exams despite being fundamentally different conditions. IBD (Crohn disease and ulcerative colitis) involves structural inflammation visible on endoscopy and biopsy. IBS is a functional disorder diagnosed by symptom criteria (Rome IV) with no identifiable structural pathology.",
        "Key distinguishing features: IBD produces alarm symptoms — bloody diarrhea, weight loss, fever, anemia, elevated inflammatory markers (ESR, CRP, fecal calprotectin). IBS does not produce bloody stool, weight loss, or elevated inflammatory markers. IBS pain improves with defecation and is associated with changes in stool frequency or form.",
        "Crohn disease can affect any part of the GI tract (mouth to anus) with skip lesions, transmural inflammation, fistulas, and non-caseating granulomas. Ulcerative colitis is limited to the colon and rectum with continuous mucosal inflammation starting at the rectum and extending proximally. Crypt abscesses are characteristic of UC.",
        "The exam trap: a question stem describing abdominal pain that improves with defecation, alternating diarrhea and constipation, and normal labs = IBS. Adding any alarm feature (bloody stool, weight loss, fever, anemia) shifts the answer to IBD. Students must read the stem carefully for alarm features."
      ],
      snaps: [
        { label: 'IBD — nature',       value: '<b>Structural</b> inflammatory disease — visible on endoscopy/biopsy' },
        { label: 'IBS — nature',       value: '<b>Functional</b> disorder — no structural pathology, Rome IV criteria' },
        { label: 'Alarm features',     value: 'Bloody diarrhea, weight loss, fever, anemia, elevated ESR/CRP → <b>IBD</b>' },
        { label: 'IBS hallmark',       value: 'Pain improves with defecation + altered stool frequency/form + <b>normal labs</b>' },
        { label: 'Crohn vs UC',        value: 'Crohn = skip lesions, transmural, fistulas; UC = continuous, mucosal, starts at rectum' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: "Tested in at least 4 Quizlet decks. Alarm features vs. functional symptoms is the pivot." },
        trap:   "Confusing IBS with IBD when the stem shows normal inflammatory markers. Normal labs + pain relieved by defecation = IBS, not IBD.",
        pearl:  "Fecal calprotectin is the most useful non-invasive test to distinguish IBD from IBS. Elevated = IBD. Normal = IBS.",
        missed: "Crohn disease causes perianal fistulas; UC does not. This distinction is a common question differentiator.",
        source: "\"Inflammatory bowel disease... must be distinguished from irritable bowel syndrome, a functional disorder.\" — Bates' 8th Ed., p. 372"
      },
      questions: [
        {
          id:      'q_ibd_ibs_1',
          num:     '1 of 2',
          stem:    'A <strong>28-year-old woman</strong> presents with 6 months of crampy abdominal pain that <strong>improves after bowel movements</strong>, alternating constipation and diarrhea, and bloating. She denies weight loss, fever, or bloody stools. CBC, ESR, and CRP are <strong>normal</strong>. Which diagnosis is most likely?',
          options: ['Crohn disease', 'Ulcerative colitis', 'Irritable bowel syndrome', 'Celiac disease'],
          answer:  'C',
          rationale: '<strong>Correct: C — Irritable bowel syndrome.</strong> Pain improves with defecation + alternating stool pattern + no alarm features + normal inflammatory markers = IBS by Rome IV criteria. <div class="rat-wrong"><strong>A (Crohn)</strong> — would expect weight loss, elevated ESR/CRP, possible bloody stool or fistula. <strong>B (UC)</strong> — would expect bloody diarrhea and elevated inflammatory markers. <strong>D (celiac)</strong> — possible but would expect diarrhea, weight loss, and positive anti-tTG; this presentation is classic IBS.</div>'
        },
        {
          id:      'q_ibd_ibs_2',
          num:     '2 of 2',
          stem:    'A <strong>32-year-old male</strong> presents with 3 months of <strong>bloody diarrhea</strong>, 8-lb weight loss, and lower abdominal cramping. Labs show <strong>elevated ESR and fecal calprotectin</strong>. Colonoscopy reveals <strong>continuous mucosal inflammation from the rectum to the splenic flexure</strong>. Which diagnosis is most likely?',
          options: ['Irritable bowel syndrome', 'Crohn disease', 'Ulcerative colitis', 'Infectious colitis'],
          answer:  'C',
          rationale: '<strong>Correct: C — Ulcerative colitis.</strong> Bloody diarrhea + weight loss + elevated ESR/fecal calprotectin + continuous mucosal inflammation starting at the rectum = classic UC. <div class="rat-wrong"><strong>A (IBS)</strong> — IBS does not cause bloody diarrhea or elevated inflammatory markers. <strong>B (Crohn)</strong> — Crohn produces skip lesions and transmural (not continuous mucosal) inflammation. <strong>D (infectious colitis)</strong> — possible acutely, but 3-month duration and continuous pattern favor UC.</div>'
        }
      ]
    },

    // ── CONCEPT 4: COLON CANCER RISK FACTORS ─────────────────
    {
      id:        'colon_ca_risk',
      name:      'Colon Cancer Risk Factors',
      batesPage: 'p. 375–378',
      svg1: null,
      svg2: null,
      prose: [
        "Colorectal cancer is the third most common cancer in the United States and one of the most preventable through screening and risk factor modification. Understanding risk factors is essential for determining screening intervals and patient counseling.",
        "Non-modifiable risk factors include: age over 45, personal history of colorectal polyps or cancer, family history of colorectal cancer (especially first-degree relative diagnosed before age 60), inflammatory bowel disease (especially ulcerative colitis with pancolitis for more than 8 years), and hereditary syndromes including familial adenomatous polyposis (FAP) and hereditary nonpolyposis colorectal cancer (Lynch syndrome/HNPCC).",
        "Modifiable risk factors include: high consumption of red and processed meats, low dietary fiber intake, physical inactivity, obesity (BMI ≥30), heavy alcohol use (more than 2 drinks per day), and tobacco use. The combination of multiple modifiable risk factors is synergistic rather than simply additive.",
        "Clinical exam application: patients with first-degree relatives diagnosed with colorectal cancer before age 60 should begin screening 10 years before the age of the relative's diagnosis, or by age 40, whichever is earlier. Patients with IBD (especially UC with pancolitis) should begin surveillance colonoscopy 8 years after diagnosis. These modified screening intervals are tested frequently."
      ],
      snaps: [
        { label: 'Non-modifiable',   value: 'Age >45, FHx (1st degree <60), personal Hx polyps, IBD, FAP, Lynch syndrome' },
        { label: 'Modifiable',       value: 'Red/processed meat, low fiber, inactivity, obesity, alcohol >2/day, tobacco' },
        { label: 'FHx rule',         value: 'Start screening 10 years before relative\'s diagnosis age, or age 40 (whichever earlier)' },
        { label: 'IBD rule',         value: 'Surveillance colonoscopy 8 years after IBD (UC pancolitis) diagnosis' },
        { label: 'Hereditary',       value: 'FAP = hundreds of polyps by teens; Lynch = HNPCC, early-onset, right-sided' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: "Family history screening rules and IBD surveillance timing are high-yield. Tested across multiple systems." },
        trap:   "Forgetting that first-degree family history changes the screening START AGE, not just the interval.",
        pearl:  "Lynch syndrome (HNPCC) accounts for about 3% of all colorectal cancers and is the most common hereditary colorectal cancer syndrome. It is also associated with endometrial, ovarian, and urinary tract cancers.",
        missed: "UC pancolitis of 8+ years duration requires colonoscopic surveillance even in young patients. Students forget IBD is a risk factor.",
        source: "\"Factors that increase the risk of colon cancer include family history, inflammatory bowel disease, and dietary patterns.\" — Bates' 8th Ed., p. 376"
      },
      questions: [
        {
          id:      'q_colon_ca_1',
          num:     '1 of 2',
          stem:    'A <strong>35-year-old man</strong> reports that his father was diagnosed with colon cancer at <strong>age 48</strong>. He has no personal history of polyps and is otherwise healthy. When should this patient begin colorectal cancer screening?',
          options: ['Age 45, per standard USPSTF guidelines', 'Age 38', 'Age 40', 'Now (age 35)'],
          answer:  'B',
          rationale: '<strong>Correct: B — Age 38.</strong> With a first-degree relative diagnosed at age 48, screening should begin 10 years before the relative\'s diagnosis age (48 − 10 = 38) or at age 40, whichever is earlier. Age 38 is earlier than 40, so screening starts at 38. <div class="rat-wrong"><strong>A (age 45)</strong> — standard screening age does not apply when FHx is positive with diagnosis before age 60. <strong>C (age 40)</strong> — the 10-year-before rule gives age 38, which is earlier. <strong>D (now)</strong> — he is not yet 38; immediate screening is not indicated without additional risk factors.</div>'
        },
        {
          id:      'q_colon_ca_2',
          num:     '2 of 2',
          stem:    'A <strong>30-year-old woman</strong> was diagnosed with <strong>ulcerative colitis with pancolitis</strong> at age 20. She has been in clinical remission for 4 years. When should surveillance colonoscopy begin?',
          options: ['Immediately, given her UC history', 'At age 28 (8 years after diagnosis)', 'At age 45, per standard screening guidelines', 'Only if symptoms recur'],
          answer:  'B',
          rationale: '<strong>Correct: B — At age 28 (8 years after diagnosis).</strong> UC pancolitis patients should begin surveillance colonoscopy 8 years after disease onset, regardless of symptom status. Diagnosed at 20 → surveillance at 28. She is now 30, so she is already overdue. <div class="rat-wrong"><strong>A (immediately at diagnosis)</strong> — surveillance begins at 8 years, not at diagnosis. <strong>C (age 45)</strong> — standard screening rules do not apply; IBD pancolitis requires earlier surveillance. <strong>D (only if symptoms recur)</strong> — surveillance is required even in remission; cancer risk is cumulative.</div>'
        }
      ]
    },

    // ── CONCEPT 5: 5 As SMOKING CESSATION MODEL ──────────────
    {
      id:        'five_as_smoking',
      name:      '5 As Smoking Cessation Model',
      batesPage: 'p. 14–16',
      svg1: null,
      svg2: null,
      prose: [
        "The 5 As model is the USPSTF-endorsed framework for smoking cessation counseling in primary care. Every patient encounter should include tobacco use assessment, and clinicians are expected to implement this structured approach for all smokers.",
        "The five steps are: (1) Ask — systematically identify all tobacco users at every visit. (2) Advise — strongly urge all tobacco users to quit in a clear, personalized manner. (3) Assess — determine the patient's willingness to make a quit attempt at this time. (4) Assist — for patients willing to quit, offer medication (varenicline, bupropion, NRT) and counseling resources. (5) Arrange — schedule follow-up contact within one week of the quit date.",
        "The order matters: you must Ask before you can Advise, you must Assess readiness before deciding whether to Assist with pharmacotherapy. For patients not ready to quit, the appropriate response is motivational interviewing (not pharmacotherapy). Pressing medications on an unready patient violates the 5 As sequence.",
        "Pharmacotherapy options: varenicline (Chantix) is the most effective single agent for smoking cessation. Combination NRT (patch plus short-acting form such as gum or lozenge) is also highly effective. Bupropion is an alternative that also addresses depression. All three are first-line options per USPSTF."
      ],
      snaps: [
        { label: '1. Ask',     value: 'Identify tobacco use at <b>every</b> visit — systematic screening' },
        { label: '2. Advise',  value: 'Strongly urge quitting — clear, strong, <b>personalized</b> message' },
        { label: '3. Assess',  value: 'Determine willingness to quit — readiness is key decision point' },
        { label: '4. Assist',  value: 'If ready: offer <b>varenicline, bupropion, or NRT</b> + counseling' },
        { label: '5. Arrange', value: 'Schedule follow-up <b>within 1 week</b> of quit date' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: "Tested as both a recall question (name the 5 As) and an application question (what comes next in the sequence)." },
        trap:   "Jumping to pharmacotherapy (Assist) before assessing readiness (Assess). The 5 As must be followed in order.",
        pearl:  "Varenicline is the most effective single agent. Combination NRT (patch + gum/lozenge) is comparably effective. Know both options.",
        missed: "Arrange = follow-up within 1 WEEK of quit date. Students often forget the specific timeframe or confuse it with 1 month.",
        source: "\"The clinician should Ask about tobacco use, Advise cessation, Assess willingness to quit, Assist with treatment, and Arrange follow-up.\" — Bates' 8th Ed., p. 15"
      },
      questions: [
        {
          id:      'q_five_as_1',
          num:     '1 of 2',
          stem:    'A <strong>45-year-old male smoker</strong> tells you he is <strong>not interested in quitting</strong> at this time. You have already Asked about tobacco use, Advised him to quit, and Assessed his readiness. What is the <strong>most appropriate next step</strong>?',
          options: ['Prescribe varenicline and schedule follow-up', 'Use motivational interviewing to explore ambivalence', 'Skip to Arrange and schedule a follow-up in one week', 'Document refusal and do not address smoking again'],
          answer:  'B',
          rationale: '<strong>Correct: B — Use motivational interviewing to explore ambivalence.</strong> When a patient is not ready to quit (Assess = not willing), the 5 As model recommends motivational interviewing rather than pharmacotherapy. Medications are reserved for patients who are ready to make a quit attempt. <div class="rat-wrong"><strong>A</strong> — prescribing varenicline before readiness is inappropriate; Assist comes after a willing Assess. <strong>C</strong> — Arrange follows Assist; without a quit attempt, there is nothing to follow up on. <strong>D</strong> — tobacco use should be addressed at every visit; never abandon the conversation permanently.</div>'
        },
        {
          id:      'q_five_as_2',
          num:     '2 of 2',
          stem:    'A <strong>52-year-old woman</strong> with a 25-pack-year history tells you she is <strong>ready to quit smoking</strong>. She has a history of depression currently managed with an SSRI. Which smoking cessation medication is the <strong>most effective single agent</strong>?',
          options: ['Nicotine patch alone', 'Bupropion', 'Varenicline', 'Nicotine gum alone'],
          answer:  'C',
          rationale: '<strong>Correct: C — Varenicline.</strong> Varenicline (Chantix) is the most effective single agent for smoking cessation per USPSTF and clinical evidence. It is a partial nicotine receptor agonist that reduces cravings and withdrawal symptoms. <div class="rat-wrong"><strong>A (nicotine patch alone)</strong> — effective but less so than varenicline as monotherapy; combination NRT (patch + short-acting) approaches varenicline efficacy. <strong>B (bupropion)</strong> — a good option especially with comorbid depression, but less effective than varenicline as a single agent. <strong>D (nicotine gum alone)</strong> — least effective of the options as a standalone therapy.</div>'
        }
      ]
    },

    // ── CONCEPT 6: POSITIVE PREDICTIVE VALUE ─────────────────
    {
      id:        'ppv_calculation',
      name:      'Positive Predictive Value Calculation',
      batesPage: 'p. 36–38',
      svg1: null,
      svg2: null,
      prose: [
        "Positive predictive value (PPV) answers the clinical question: if my test is positive, what is the probability that my patient actually has the disease? It is calculated as PPV = true positives / (true positives + false positives). Unlike sensitivity and specificity, PPV is heavily influenced by disease prevalence.",
        "The 2×2 table is essential: rows represent test results (positive/negative), columns represent disease status (present/absent). True positives (TP) are in the upper-left cell, false positives (FP) in the upper-right, false negatives (FN) in the lower-left, and true negatives (TN) in the lower-right. PPV = TP / (TP + FP). NPV = TN / (TN + FN).",
        "The critical relationship: as disease prevalence decreases, PPV drops dramatically even with a highly sensitive and specific test. This is why screening for rare diseases in low-prevalence populations produces many false positives. Conversely, when prevalence is high, PPV increases — a positive test in a high-risk patient is much more meaningful than in a low-risk patient.",
        "Exam application: questions typically provide a 2×2 table or give you sensitivity, specificity, and prevalence, then ask you to calculate PPV. The most common error is confusing PPV with sensitivity. Sensitivity asks: of those WITH disease, how many test positive? PPV asks: of those who TEST POSITIVE, how many have disease? The denominator changes."
      ],
      snaps: [
        { label: 'PPV formula',      value: '<b>TP / (TP + FP)</b> — among all positive tests, how many are true?' },
        { label: 'NPV formula',      value: '<b>TN / (TN + FN)</b> — among all negative tests, how many are true?' },
        { label: 'Sensitivity',      value: 'TP / (TP + FN) — among those WITH disease, how many test positive?' },
        { label: 'Specificity',      value: 'TN / (TN + FP) — among those WITHOUT disease, how many test negative?' },
        { label: 'Prevalence effect', value: 'Low prevalence → <b>low PPV</b> even with excellent sensitivity/specificity' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: "Calculation questions appear on nearly every NR509 final. Know the 2×2 table cold." },
        trap:   "Confusing PPV with sensitivity. The denominators are different: PPV = TP/(TP+FP); Sensitivity = TP/(TP+FN).",
        pearl:  "SpIN and SnOUT: a highly Specific test, when Positive, rules IN disease. A highly Sensitive test, when Negative, rules OUT disease.",
        missed: "PPV changes with prevalence; sensitivity and specificity do not. A positive test means more in a high-prevalence population.",
        source: "\"Positive predictive value is the probability of disease in a patient with a positive test.\" — Bates' 8th Ed., p. 37"
      },
      questions: [
        {
          id:      'q_ppv_1',
          num:     '1 of 2',
          stem:    'A screening test for disease X has the following results in a population of 1,000 patients: <strong>80 true positives, 20 false positives, 10 false negatives, and 890 true negatives</strong>. What is the <strong>positive predictive value</strong> of this test?',
          options: ['80%', '89%', '88%', '90%'],
          answer:  'A',
          rationale: '<strong>Correct: A — 80%.</strong> PPV = TP / (TP + FP) = 80 / (80 + 20) = 80/100 = 0.80 = 80%. Of all patients who tested positive, 80% actually have the disease. <div class="rat-wrong"><strong>B (89%)</strong> — this is the sensitivity: TP/(TP+FN) = 80/(80+10) = 88.9%, not PPV. <strong>C (88%)</strong> — does not correspond to any correct calculation from this table. <strong>D (90%)</strong> — this is the prevalence (90/1000) or a confusion of values.</div>'
        },
        {
          id:      'q_ppv_2',
          num:     '2 of 2',
          stem:    'A highly sensitive and specific test for a rare disease is applied to a <strong>low-prevalence population</strong>. Which of the following is the <strong>most likely</strong> consequence?',
          options: ['High positive predictive value', 'Low positive predictive value', 'Decreased sensitivity', 'Decreased specificity'],
          answer:  'B',
          rationale: '<strong>Correct: B — Low positive predictive value.</strong> In a low-prevalence population, even a highly sensitive and specific test will produce many false positives relative to true positives, resulting in a low PPV. This is the fundamental limitation of screening in low-prevalence populations. <div class="rat-wrong"><strong>A (high PPV)</strong> — opposite; low prevalence decreases PPV. <strong>C (decreased sensitivity)</strong> — sensitivity is an intrinsic test property and does not change with prevalence. <strong>D (decreased specificity)</strong> — specificity is also intrinsic to the test and does not change with prevalence.</div>'
        }
      ]
    }

  ],

  nextSystem: null   // last system, no next
};


/* ============================================================
   DRILL QUESTIONS
   5 rapid-fire questions covering cross-system high-yield topics
   ============================================================ */

const DRILL_QUESTIONS = [
  {
    concept:   'Cotton-Wool Spots',
    stem:      'Cotton-wool spots on fundoscopic examination represent which underlying pathological process?',
    options:   ['Retinal hemorrhage from ruptured microaneurysms', 'Focal infarction of the retinal nerve fiber layer', 'Cholesterol emboli lodged at arteriolar bifurcations', 'Proliferative neovascularization of the retina'],
    answer:    1,
    rationale: 'Cotton-wool spots result from focal ischemic infarction of the retinal nerve fiber layer, causing accumulation of axoplasmic debris. They are not hemorrhages (A), cholesterol emboli/Hollenhorst plaques (C), or neovascularization (D).'
  },
  {
    concept:   'USPSTF Screening',
    stem:      'According to USPSTF, which screening receives a Grade C (individual decision) rather than a Grade A or B recommendation?',
    options:   ['Colonoscopy for adults aged 45–75', 'PSA screening for men aged 55–69', 'Mammography for women aged 40–74', 'LDCT for adults with 20+ pack-year smoking history'],
    answer:    1,
    rationale: 'PSA screening for prostate cancer is Grade C — recommended as an individual decision for men aged 55–69 after shared decision-making, not a blanket recommendation. Colonoscopy (A), mammography (C), and LDCT (D) are all Grade A or B.'
  },
  {
    concept:   'IBD vs IBS',
    stem:      'Which laboratory finding best distinguishes inflammatory bowel disease from irritable bowel syndrome?',
    options:   ['Positive stool guaiac', 'Elevated fecal calprotectin', 'Elevated serum albumin', 'Positive anti-nuclear antibody'],
    answer:    1,
    rationale: 'Fecal calprotectin is the most useful non-invasive marker to distinguish IBD from IBS. Elevated levels indicate intestinal inflammation (IBD). Stool guaiac (A) detects blood but is less specific. Serum albumin (C) may be low in IBD but is not a distinguishing test. ANA (D) is for autoimmune conditions, not IBD vs IBS.'
  },
  {
    concept:   '5 As Smoking Cessation',
    stem:      'In the 5 As smoking cessation model, which step must be completed before offering pharmacotherapy?',
    options:   ['Ask', 'Advise', 'Assess', 'Arrange'],
    answer:    2,
    rationale: 'Assess (determining willingness to quit) must be completed before Assist (offering pharmacotherapy). Medications are only appropriate for patients who are ready to make a quit attempt. Offering medications before assessing readiness violates the 5 As sequence.'
  },
  {
    concept:   'Positive Predictive Value',
    stem:      'Which factor most significantly affects positive predictive value while leaving sensitivity and specificity unchanged?',
    options:   ['Test operator skill', 'Sample size', 'Disease prevalence', 'Patient age'],
    answer:    2,
    rationale: 'Disease prevalence is the primary factor affecting PPV independently of sensitivity and specificity. As prevalence decreases, PPV drops because the proportion of false positives relative to true positives increases, even with an excellent test. Sensitivity and specificity are intrinsic test characteristics unaffected by prevalence.'
  }
];
