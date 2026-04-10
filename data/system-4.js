/* ============================================================
   data/system-4.js
   Genitourinary & Obstetric — all concepts, questions, drill data
   Bates' Ch. 19–21 | NR509 Week 7
   ============================================================ */

const SYSTEM_DATA = {
  num:      4,
  title:    'Genitourinary & Obstetric',
  bates:    "Bates' Ch. 19–21",
  week:     'Week 7',
  ihuman:   '',
  vignette: 'A 28-year-old female presents for her first prenatal visit. Her last menstrual period began on March 10. She reports mild nausea and breast tenderness but no vaginal bleeding or abdominal pain.',
  tags:     ["Bates' 8th Ed. Ch. 19–21", 'NR509 Week 7', '6 high-yield concepts'],

  concepts: [

    // ── CONCEPT 1: NAEGELE'S RULE ──────────────────────────
    {
      id:        'naegeles',
      name:      "Naegele's Rule",
      batesPage: 'p. 899',
      svg1: {
        label: 'Female reproductive anatomy — uterus, ovaries & adnexa',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <text x="160" y="18" font-family="DM Serif Display,serif" font-size="12" fill="#0F1F3D" text-anchor="middle" font-weight="700">Female Reproductive Anatomy</text>
  <path d="M115,80 Q120,50 145,45 Q160,42 175,45 Q200,50 205,80 L210,120 Q210,155 195,175 Q180,190 160,195 Q140,190 125,175 Q110,155 110,120 Z" fill="#E8A020" opacity=".15" stroke="#C4860A" stroke-width="1.8"/>
  <text x="160" y="115" font-family="DM Serif Display,serif" font-size="14" fill="#A06800" text-anchor="middle" font-style="italic">Uterus</text>
  <path d="M160,185 L160,220" stroke="#C9432A" stroke-width="3" stroke-linecap="round"/>
  <text x="160" y="235" font-family="DM Sans,sans-serif" font-size="9" fill="#C9432A" text-anchor="middle" font-weight="600">Cervical canal</text>
  <path d="M115,80 Q95,65 70,68" fill="none" stroke="#0D7377" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M205,80 Q225,65 250,68" fill="none" stroke="#0D7377" stroke-width="2.5" stroke-linecap="round"/>
  <text x="83" y="58" font-family="DM Sans,sans-serif" font-size="8.5" fill="#0D7377" text-anchor="middle">Fallopian tube</text>
  <text x="237" y="58" font-family="DM Sans,sans-serif" font-size="8.5" fill="#0D7377" text-anchor="middle">Fallopian tube</text>
  <ellipse cx="60" cy="82" rx="16" ry="10" fill="#5B4FCF" opacity=".2" stroke="#5B4FCF" stroke-width="1.8"/>
  <text x="60" y="85" font-family="DM Sans,sans-serif" font-size="8" fill="#5B4FCF" text-anchor="middle" font-weight="600">Ovary</text>
  <ellipse cx="260" cy="82" rx="16" ry="10" fill="#5B4FCF" opacity=".2" stroke="#5B4FCF" stroke-width="1.8"/>
  <text x="260" y="85" font-family="DM Sans,sans-serif" font-size="8" fill="#5B4FCF" text-anchor="middle" font-weight="600">Ovary</text>
  <path d="M130,60 Q140,40 160,38 Q180,40 190,60" fill="none" stroke="#C4860A" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="160" y="68" font-family="DM Sans,sans-serif" font-size="8" fill="#A06800" text-anchor="middle">Fundus</text>
  <circle cx="160" cy="190" r="6" fill="#C9432A" opacity=".3" stroke="#C9432A" stroke-width="1.5"/>
  <text x="185" y="193" font-family="DM Sans,sans-serif" font-size="8" fill="#C9432A" font-weight="600">Cervix</text>
  <line x1="110" y1="135" x2="95" y2="145" stroke="#E8A020" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="60" y="150" font-family="DM Sans,sans-serif" font-size="8" fill="#A06800">Endometrium</text>
</svg>`,
        caption: 'Female reproductive anatomy showing the uterus, bilateral ovaries, fallopian tubes, fundus, and cervical canal'
      },
      svg2: null,
      prose: [
        "Naegele's Rule is the standard method for estimating the expected date of delivery (EDD). The calculation begins with the first day of the last menstrual period (LMP) and applies a simple formula: subtract 3 months, then add 7 days, then adjust the year forward by 1 if necessary.",
        "For example, if the LMP is March 10, subtract 3 months to get December 10, then add 7 days to get December 17. Since December falls in the previous calendar cycle relative to a March conception, add 1 year. The EDD is December 17 of the following year.",
        "The rule assumes a 28-day menstrual cycle with ovulation on day 14. It is less accurate for patients with irregular cycles, cycles significantly shorter or longer than 28 days, or uncertain LMP dates. In those cases, first-trimester ultrasound becomes the preferred dating method.",
        "On the NR509 exam, you will almost certainly see a Naegele's Rule calculation question. The most common error students make is forgetting to add the year when subtracting months crosses into a previous calendar year. Always verify the year after completing the month subtraction."
      ],
      snaps: [
        { label: 'Formula',      value: 'LMP − 3 months + 7 days (± 1 year)' },
        { label: 'Example',      value: 'LMP Mar 10 → Dec 10 → Dec 17 (next year)' },
        { label: 'Assumption',   value: '28-day cycle, ovulation on day 14' },
        { label: 'Limitation',   value: 'Less accurate with irregular cycles — use ultrasound' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Highest-priority calculation on the GU/OB exam. Appears in nearly every student-reported NR509 question bank.' },
        trap:   "The most common wrong answer involves forgetting to add the year when month subtraction crosses into the previous calendar year. Always check the year last.",
        pearl:  "If a patient's LMP is January 1, subtracting 3 months gives October 1 of the previous year — then adding 7 days gives October 8. The year stays the same as the original LMP year because October of the previous year + 1 = October of the LMP year.",
        missed: "Students confuse 'first day of LMP' with 'last day of LMP.' Naegele's Rule always uses the <em>first</em> day of the last menstrual period.",
        source: "\"Naegele's Rule: using the first day of the last normal menstrual period (LMP), subtract 3 months and add 7 days.\" — Bates' 8th Ed., p. 899"
      },
      questions: [
        {
          id:      'q_naegeles_1',
          num:     '1 of 2',
          stem:    'A <strong>26-year-old G1P0</strong> presents for her first prenatal visit. Her <strong>last menstrual period began on June 15</strong>. Using Naegele\'s Rule, what is her expected date of delivery?',
          options: ['March 15', 'March 22', 'March 8', 'April 22'],
          answer:  'B',
          rationale: '<strong>Correct: B — March 22.</strong> LMP June 15 → subtract 3 months = March 15 → add 7 days = March 22 (of the following year). <div class="rat-wrong"><strong>A (March 15)</strong> subtracts 3 months but forgets to add 7 days. <strong>C (March 8)</strong> subtracts 7 days instead of adding. <strong>D (April 22)</strong> subtracts only 2 months instead of 3.</div>'
        },
        {
          id:      'q_naegeles_2',
          num:     '2 of 2',
          stem:    'A <strong>31-year-old G2P1</strong> reports her LMP began on <strong>January 1</strong>. Using Naegele\'s Rule, what is her estimated date of delivery?',
          options: ['October 1', 'October 8', 'September 24', 'November 8'],
          answer:  'B',
          rationale: '<strong>Correct: B — October 8.</strong> LMP January 1 → subtract 3 months = October 1 (prior year) → add 7 days = October 8. Then add 1 year back to the LMP year = October 8 of the same year. <div class="rat-wrong"><strong>A (October 1)</strong> forgets to add 7 days. <strong>C (September 24)</strong> subtracts 7 days from October 1. <strong>D (November 8)</strong> adds 1 month instead of subtracting 3.</div>'
        }
      ]
    },

    // ── CONCEPT 2: PAP SMEAR ──────────────────────────────
    {
      id:        'pap_smear',
      name:      'Pap Smear — When, Where & When NOT',
      batesPage: 'p. 857',
      svg1: null,
      svg2: null,
      prose: [
        "The Pap smear screens for cervical dysplasia and cervical cancer by collecting cells from the transformation zone of the cervix — the junction between squamous and columnar epithelium (the squamocolumnar junction). This is the area most vulnerable to HPV-related changes.",
        "Current guidelines recommend initiating Pap smear screening at age 21 regardless of sexual history. From age 21 to 29, cytology alone is performed every 3 years. From age 30 to 65, co-testing with Pap and HPV is performed every 5 years (or cytology alone every 3 years). Screening stops at age 65 if prior results have been consistently normal.",
        "Do NOT perform a Pap smear on a patient who has had a total hysterectomy with removal of the cervix for benign indications and has no prior history of CIN 2 or higher. If the cervix was left in place (supracervical hysterectomy), screening continues.",
        "Sample collection requires that the patient has not douched, used vaginal medications, or had intercourse for 48 hours prior to the exam. Lubricant on the speculum can contaminate the sample — use warm water only. Collect cells from the transformation zone using a spatula and cytobrush (or a liquid-based collection device)."
      ],
      snaps: [
        { label: 'Start age',       value: 'Age 21 (regardless of sexual activity)' },
        { label: '21–29',           value: 'Cytology alone every 3 years' },
        { label: '30–65',           value: 'Pap + HPV co-test every 5 years (or Pap alone q3yr)' },
        { label: 'Stop screening',  value: 'Age 65 with adequate prior normal results' },
        { label: 'Skip if',         value: 'Total hysterectomy (cervix removed) for benign cause' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'High yield — screening guidelines are a common exam topic, especially the when-to-start and when-to-stop rules.' },
        trap:   "A 19-year-old sexually active patient does NOT get a Pap. Screening starts at 21 regardless of sexual history. This is a classic distractor.",
        pearl:  "Supracervical hysterectomy leaves the cervix in place — screening continues. Total hysterectomy removes the cervix — screening stops (if done for benign cause).",
        missed: "Using lubricant on the speculum instead of warm water. The exam often asks what invalidates a Pap result — lubricant, douching within 48 hours, and vaginal medications.",
        source: "\"Collect a Pap smear from the transformation zone of the cervix... Begin screening at age 21.\" — Bates' 8th Ed., p. 857"
      },
      questions: [
        {
          id:      'q_pap_1',
          num:     '1 of 2',
          stem:    'A <strong>19-year-old sexually active female</strong> presents for her annual well-woman exam. She asks about cervical cancer screening. What is the most appropriate recommendation?',
          options: ['Pap smear now since she is sexually active', 'Pap smear at age 21', 'Pap smear with HPV co-testing now', 'HPV testing alone at age 25'],
          answer:  'B',
          rationale: '<strong>Correct: B — Pap smear at age 21.</strong> Current guidelines recommend initiating cervical cancer screening at age 21 regardless of sexual history. <div class="rat-wrong"><strong>A</strong> incorrectly uses sexual activity as the trigger for screening — this was the old guideline. <strong>C</strong> HPV co-testing is not recommended until age 30. <strong>D</strong> HPV primary testing at 25 is an alternative guideline but not the standard Bates recommendation for this age.</div>'
        },
        {
          id:      'q_pap_2',
          num:     '2 of 2',
          stem:    'A <strong>55-year-old female</strong> had a <strong>total hysterectomy 5 years ago for uterine fibroids</strong>. She has no history of cervical dysplasia. What is the most appropriate cervical cancer screening recommendation?',
          options: ['Continue Pap smear every 3 years', 'Pap smear with HPV co-testing every 5 years', 'No further cervical cancer screening needed', 'Vaginal cuff Pap smear every 5 years'],
          answer:  'C',
          rationale: '<strong>Correct: C — No further screening needed.</strong> After total hysterectomy (cervix removed) for benign indications with no history of CIN 2+, cervical cancer screening is discontinued. <div class="rat-wrong"><strong>A & B</strong> would be appropriate if the cervix were still in place. <strong>D</strong> vaginal cuff Pap is not recommended after total hysterectomy for benign disease.</div>'
        }
      ]
    },

    // ── CONCEPT 3: CERVIX IN PREGNANCY + EMERGENCY SIGNS ─────
    {
      id:        'cervix_pregnancy',
      name:      'Cervix in Pregnancy & Emergency Signs',
      batesPage: 'p. 903',
      svg1: null,
      svg2: null,
      prose: [
        "During pregnancy, the cervix undergoes characteristic changes. Chadwick's sign is a bluish-violet discoloration of the cervix and vaginal mucosa caused by increased vascularity and venous congestion. It can appear as early as 6 to 8 weeks of gestation. Goodell's sign is softening of the cervix, also related to increased vascularity — the cervix changes from feeling like the tip of a nose (non-pregnant) to feeling like the softness of lips (pregnant).",
        "Hegar's sign is softening of the uterine isthmus (the junction between the cervical body and the uterine corpus), typically detectable on bimanual exam at 6 to 8 weeks. The examiner feels a compressible softness between the cervix and the fundus.",
        "Emergency signs during pregnancy that require immediate evaluation include vaginal bleeding (especially in the first trimester, raising concern for ectopic pregnancy or threatened abortion), severe abdominal or pelvic pain, leaking of amniotic fluid (premature rupture of membranes), decreased fetal movement in the third trimester, and signs of preeclampsia — headache, visual changes, RUQ pain, and severe edema with blood pressure at or above 140/90.",
        "Preeclampsia classically presents after 20 weeks of gestation with hypertension and proteinuria. The triad of headache, visual disturbances, and RUQ or epigastric pain suggests severe preeclampsia and warrants emergent evaluation to prevent progression to eclampsia (seizures)."
      ],
      snaps: [
        { label: "Chadwick's sign", value: 'Bluish-violet cervix/vagina — increased vascularity (6–8 wks)' },
        { label: "Goodell's sign",  value: 'Softened cervix — nose tip → lip softness' },
        { label: "Hegar's sign",    value: 'Softened uterine isthmus on bimanual (6–8 wks)' },
        { label: 'Preeclampsia',    value: 'HTN + proteinuria after 20 wks; headache + vision changes + RUQ pain = severe' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'The three signs (Chadwick, Goodell, Hegar) are a favorite multi-select target. Preeclampsia is always high yield.' },
        trap:   "Chadwick's is color (blue), Goodell's is texture (soft), Hegar's is location (isthmus). Students mix up which sign is which — the exam exploits this consistently.",
        pearl:  "Non-pregnant cervix = tip of nose. Pregnant cervix = lips. This analogy appears directly in Bates' and is testable.",
        missed: "Preeclampsia requires gestational age >20 weeks. HTN + proteinuria at 18 weeks is NOT preeclampsia — consider other causes of hypertension.",
        source: "\"The cervix feels softer during pregnancy, similar to the softness of the lips compared with the firmness of the nasal tip.\" — Bates' 8th Ed., p. 903"
      },
      questions: [
        {
          id:      'q_cervix_preg_1',
          num:     '1 of 2',
          stem:    'A <strong>24-year-old G1P0 at 7 weeks gestation</strong> presents for her first prenatal exam. On speculum exam, the cervix appears <strong>bluish-violet</strong>. What sign does this represent?',
          options: ["Goodell's sign", "Hegar's sign", "Chadwick's sign", "Chandelier sign"],
          answer:  'C',
          rationale: "<strong>Correct: C — Chadwick's sign.</strong> Bluish-violet discoloration of the cervix and vaginal mucosa from increased vascularity is Chadwick's sign, visible as early as 6–8 weeks. <div class=\"rat-wrong\"><strong>A (Goodell's)</strong> refers to cervical softening, not color change. <strong>B (Hegar's)</strong> is softening of the uterine isthmus. <strong>D (Chandelier sign)</strong> is severe cervical motion tenderness suggesting PID or ectopic pregnancy.</div>"
        },
        {
          id:      'q_cervix_preg_2',
          num:     '2 of 2',
          stem:    'A <strong>34-year-old G2P1 at 32 weeks gestation</strong> reports a <strong>severe headache, blurred vision, and RUQ pain</strong>. Blood pressure is <strong>158/102 mmHg</strong>. Urine dipstick shows 2+ protein. Which condition is most likely?',
          options: ['HELLP syndrome', 'Eclampsia', 'Severe preeclampsia', 'Gestational hypertension'],
          answer:  'C',
          rationale: '<strong>Correct: C — Severe preeclampsia.</strong> HTN (≥140/90) + proteinuria after 20 weeks = preeclampsia. The triad of headache, visual changes, and RUQ pain indicates severe features. <div class="rat-wrong"><strong>A (HELLP)</strong> requires lab confirmation of hemolysis, elevated liver enzymes, and low platelets. <strong>B (Eclampsia)</strong> requires seizures, which are not present. <strong>D (Gestational HTN)</strong> has elevated BP but no proteinuria.</div>'
        }
      ]
    },

    // ── CONCEPT 4: ECTOPIC PREGNANCY + UTERINE FIBROIDS ─────
    {
      id:        'ectopic_fibroids',
      name:      'Ectopic Pregnancy & Uterine Fibroids',
      batesPage: 'p. 870',
      svg1: null,
      svg2: null,
      prose: [
        "Ectopic pregnancy occurs when a fertilized ovum implants outside the uterine cavity, most commonly in the fallopian tube (approximately 95% of cases). Risk factors include prior ectopic pregnancy, history of PID or salpingitis, tubal surgery, IUD use, and assisted reproductive technology.",
        "The classic triad of ectopic pregnancy is amenorrhea, unilateral pelvic or lower abdominal pain, and vaginal bleeding. On exam, cervical motion tenderness (the chandelier sign) is a hallmark finding — the patient experiences such severe pain with lateral cervical displacement that she 'reaches for the chandelier.' An adnexal mass may be palpable. A ruptured ectopic is a surgical emergency with signs of hemodynamic instability.",
        "Uterine fibroids (leiomyomas) are the most common pelvic tumors in women. They are benign smooth muscle tumors that are estrogen-dependent and therefore grow during reproductive years and shrink after menopause. On bimanual exam, the uterus feels enlarged, firm, and irregularly shaped (often described as 'lumpy-bumpy').",
        "Fibroids may be asymptomatic or present with heavy menstrual bleeding (menorrhagia), pelvic pressure, urinary frequency (from bladder compression), or infertility. They are classified by location: submucosal (beneath the endometrium — most likely to cause bleeding), intramural (within the myometrium — most common), and subserosal (on the outer uterine surface — may cause pressure symptoms)."
      ],
      snaps: [
        { label: 'Ectopic triad',    value: 'Amenorrhea + unilateral pelvic pain + vaginal bleeding' },
        { label: 'Chandelier sign',  value: 'Severe pain with cervical motion → ectopic or PID' },
        { label: 'Most common site', value: 'Fallopian tube (~95%)' },
        { label: 'Fibroids on exam', value: 'Enlarged, firm, irregular ("lumpy-bumpy") uterus' },
        { label: 'Fibroid types',    value: 'Submucosal (bleeding) > intramural (most common) > subserosal (pressure)' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Ectopic pregnancy triad and chandelier sign are heavily tested. Fibroid classification by location is a favorite question topic.' },
        trap:   "Chandelier sign is NOT specific to ectopic — it also occurs in PID. The exam will present both as options and test whether you can differentiate based on pregnancy status.",
        pearl:  "Submucosal fibroids cause the most bleeding because they distort the endometrial cavity. Subserosal fibroids cause pressure symptoms. Students confuse these two.",
        missed: "IUD use is a risk factor for ectopic pregnancy — the IUD prevents intrauterine but not extrauterine implantation. This is a commonly missed association.",
        source: "\"The most common site of ectopic pregnancy is in the fallopian tube... The classic triad is amenorrhea, pelvic pain, and abnormal vaginal bleeding.\" — Bates' 8th Ed., p. 870"
      },
      questions: [
        {
          id:      'q_ectopic_1',
          num:     '1 of 2',
          stem:    'A <strong>29-year-old female</strong> with a history of PID presents with <strong>6 weeks of amenorrhea, left-sided pelvic pain, and vaginal spotting</strong>. On bimanual exam, <strong>cervical motion tenderness</strong> is present and a left adnexal mass is palpated. Urine hCG is positive. Which diagnosis is most likely?',
          options: ['Threatened abortion', 'Ectopic pregnancy', 'Ruptured ovarian cyst', 'Uterine fibroid'],
          answer:  'B',
          rationale: '<strong>Correct: B — Ectopic pregnancy.</strong> The classic triad (amenorrhea, unilateral pelvic pain, vaginal bleeding) plus positive hCG, cervical motion tenderness, adnexal mass, and history of PID all point to ectopic pregnancy. <div class="rat-wrong"><strong>A (threatened abortion)</strong> typically has an intrauterine pregnancy on ultrasound. <strong>C (ruptured cyst)</strong> would not have a positive hCG or amenorrhea. <strong>D (fibroid)</strong> presents with an enlarged, irregular uterus — not an adnexal mass.</div>'
        },
        {
          id:      'q_ectopic_2',
          num:     '2 of 2',
          stem:    'A <strong>42-year-old female</strong> presents with <strong>heavy menstrual periods and pelvic pressure</strong>. Bimanual exam reveals an <strong>enlarged, firm, irregularly shaped uterus</strong> approximately 14-week size. Which type of uterine fibroid is most likely causing her heavy menstrual bleeding?',
          options: ['Subserosal', 'Intramural', 'Submucosal', 'Pedunculated'],
          answer:  'C',
          rationale: '<strong>Correct: C — Submucosal.</strong> Submucosal fibroids lie beneath the endometrium and distort the uterine cavity, making them the most likely type to cause heavy menstrual bleeding (menorrhagia). <div class="rat-wrong"><strong>A (Subserosal)</strong> protrudes from the outer uterine surface and causes pressure symptoms, not typically bleeding. <strong>B (Intramural)</strong> is the most common type but less likely than submucosal to cause significant bleeding. <strong>D (Pedunculated)</strong> is a subtype that hangs on a stalk.</div>'
        }
      ]
    },

    // ── CONCEPT 5: BPH + PROSTATE EXAM + TESTICULAR CANCER ──
    {
      id:        'bph_prostate_testicular',
      name:      'BPH, Prostate Exam & Testicular Cancer',
      batesPage: 'p. 823',
      svg1: null,
      svg2: {
        label: 'Male GU anatomy — prostate, bladder & testes',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <text x="160" y="18" font-family="DM Serif Display,serif" font-size="12" fill="#0F1F3D" text-anchor="middle" font-weight="700">Male GU Anatomy</text>
  <path d="M95,35 Q100,25 160,22 Q220,25 225,35 L230,75 Q230,95 215,105 Q195,112 160,115 Q125,112 105,105 Q90,95 90,75 Z" fill="#5B4FCF" opacity=".12" stroke="#5B4FCF" stroke-width="1.5"/>
  <text x="160" y="65" font-family="DM Serif Display,serif" font-size="13" fill="#5B4FCF" text-anchor="middle" font-style="italic">Bladder</text>
  <path d="M160,115 L160,170" stroke="#0D7377" stroke-width="2.5" stroke-linecap="round"/>
  <text x="185" y="145" font-family="DM Sans,sans-serif" font-size="8" fill="#0D7377" font-weight="600">Urethra</text>
  <ellipse cx="160" cy="128" rx="28" ry="14" fill="#E8A020" opacity=".25" stroke="#E8A020" stroke-width="2"/>
  <text x="160" y="132" font-family="DM Sans,sans-serif" font-size="9" fill="#A06800" text-anchor="middle" font-weight="700">Prostate</text>
  <text x="200" y="128" font-family="DM Sans,sans-serif" font-size="7.5" fill="#A06800">(walnut-sized)</text>
  <path d="M130,128 L110,125 Q100,125 95,130" fill="none" stroke="#C9432A" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="68" y="128" font-family="DM Sans,sans-serif" font-size="7.5" fill="#C9432A">Seminal vesicle</text>
  <path d="M190,128 L210,125 Q220,125 225,130" fill="none" stroke="#C9432A" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="235" y="140" font-family="DM Sans,sans-serif" font-size="7.5" fill="#C9432A">Seminal vesicle</text>
  <ellipse cx="120" cy="205" rx="22" ry="16" fill="#0D7377" opacity=".12" stroke="#0D7377" stroke-width="1.5"/>
  <text x="120" y="209" font-family="DM Sans,sans-serif" font-size="9" fill="#0D7377" text-anchor="middle" font-weight="600">Testis</text>
  <ellipse cx="200" cy="205" rx="22" ry="16" fill="#0D7377" opacity=".12" stroke="#0D7377" stroke-width="1.5"/>
  <text x="200" y="209" font-family="DM Sans,sans-serif" font-size="9" fill="#0D7377" text-anchor="middle" font-weight="600">Testis</text>
  <path d="M120,189 Q120,175 140,170 Q155,168 160,170" fill="none" stroke="#0F1F3D" stroke-width="1" stroke-dasharray="2,2"/>
  <path d="M200,189 Q200,175 180,170 Q165,168 160,170" fill="none" stroke="#0F1F3D" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="135" y="178" font-family="DM Sans,sans-serif" font-size="7" fill="#0F1F3D">Vas deferens</text>
  <path d="M142" y="205" fill="none"/>
  <path d="M142,200 Q148,195 148,205 Q148,215 142,210" fill="none" stroke="#0F1F3D" stroke-width="1"/>
  <text x="149" y="225" font-family="DM Sans,sans-serif" font-size="7" fill="#0F1F3D">Epididymis</text>
  <circle cx="40" cy="230" r="4" fill="#E8A020" opacity=".8"/>
  <text x="48" y="233" font-family="DM Sans,sans-serif" font-size="8" fill="#5F5D57">Prostate (DRE target)</text>
  <circle cx="180" cy="230" r="4" fill="#0D7377" opacity=".5"/>
  <text x="188" y="233" font-family="DM Sans,sans-serif" font-size="8" fill="#5F5D57">Testis (self-exam target)</text>
</svg>`,
        caption: 'Male GU anatomy showing the bladder, prostate gland (walnut-sized, surrounding the urethra), seminal vesicles, bilateral testes, and epididymis'
      },
      prose: [
        "Benign prostatic hyperplasia (BPH) is extremely common in men over 50, with prevalence increasing with age. The prostate gland surrounds the urethra just below the bladder. As it enlarges, it compresses the urethra and produces obstructive urinary symptoms: hesitancy, weak stream, incomplete emptying, nocturia, frequency, and post-void dribbling.",
        "On digital rectal exam (DRE), a BPH prostate is symmetrically enlarged, firm, smooth, and rubbery with an intact median sulcus. The normal prostate is approximately walnut-sized (3-4 cm). In BPH, it may be 2-3 times normal size but remains smooth and non-tender. In contrast, prostate cancer produces a hard, irregular, or nodular gland — often with an obliterated median sulcus.",
        "Testicular cancer is the most common solid malignancy in males aged 15 to 35. The hallmark presentation is a painless, firm testicular mass. On exam, the mass does not transilluminate (solid vs. a hydrocele, which does transilluminate). Risk factors include cryptorchidism (undescended testis), family history, and prior testicular cancer.",
        "The testicular exam should include palpation of the epididymis (posterior and superior to the testis), spermatic cord, and assessment for inguinal hernias. Epididymitis presents with a tender, swollen epididymis — pain improves with scrotal elevation (Prehn's sign positive), helping distinguish it from testicular torsion, where elevation worsens or does not change the pain."
      ],
      snaps: [
        { label: 'BPH on DRE',       value: 'Symmetrically enlarged, firm, smooth, rubbery, intact median sulcus' },
        { label: 'Prostate cancer',   value: 'Hard, irregular, nodular, obliterated median sulcus' },
        { label: 'Testicular CA',     value: 'Painless firm mass, ages 15–35, does NOT transilluminate' },
        { label: "Prehn's sign",      value: 'Pain relief with scrotal elevation → epididymitis (not torsion)' },
        { label: 'Cryptorchidism',    value: '#1 risk factor for testicular cancer' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'BPH vs. prostate cancer on DRE is a core comparison. Testicular cancer age group and transillumination are frequently tested.' },
        trap:   "BPH = smooth and rubbery. Cancer = hard and nodular. Students mix up which is which under exam pressure. The median sulcus distinction is a reliable differentiator.",
        pearl:  "Transillumination differentiates: hydrocele (fluid) transilluminates, testicular mass (solid) does not. This single test separates benign from potentially malignant.",
        missed: "Prehn's sign: elevation relieves pain in epididymitis but NOT in torsion. Students forget the direction — elevation helps epididymitis, not torsion.",
        source: "\"A benign hyperplastic prostate is smooth, rubbery, and symmetrically enlarged... A hard irregular nodule suggests cancer.\" — Bates' 8th Ed., p. 823"
      },
      questions: [
        {
          id:      'q_bph_1',
          num:     '1 of 2',
          stem:    'A <strong>68-year-old male</strong> presents with <strong>urinary hesitancy, weak stream, and nocturia</strong>. On DRE, the prostate is <strong>symmetrically enlarged, firm, smooth, and rubbery</strong> with an <strong>intact median sulcus</strong>. Which diagnosis is most consistent?',
          options: ['Prostate cancer', 'Benign prostatic hyperplasia', 'Acute prostatitis', 'Chronic prostatitis'],
          answer:  'B',
          rationale: '<strong>Correct: B — Benign prostatic hyperplasia (BPH).</strong> Symmetric enlargement, firm-rubbery consistency, smooth surface, and intact median sulcus are classic BPH findings. Obstructive symptoms (hesitancy, weak stream, nocturia) match. <div class="rat-wrong"><strong>A (Prostate cancer)</strong> produces a hard, irregular, nodular gland with obliterated median sulcus. <strong>C (Acute prostatitis)</strong> presents with a tender, boggy, warm prostate plus systemic symptoms (fever, dysuria). <strong>D (Chronic prostatitis)</strong> may have a normal or mildly tender prostate but presents differently.</div>'
        },
        {
          id:      'q_bph_2',
          num:     '2 of 2',
          stem:    'A <strong>22-year-old male</strong> presents with a <strong>painless, firm mass</strong> in his right testicle discovered on self-exam. The mass <strong>does not transilluminate</strong>. Which is the most important risk factor for this condition?',
          options: ['Family history of prostate cancer', 'Cryptorchidism', 'HPV infection', 'Tobacco use'],
          answer:  'B',
          rationale: '<strong>Correct: B — Cryptorchidism (undescended testis).</strong> Testicular cancer is the most common solid tumor in males 15–35. A painless, firm, non-transilluminating mass is the classic presentation. Cryptorchidism is the strongest risk factor. <div class="rat-wrong"><strong>A</strong> is a risk factor for prostate cancer, not testicular cancer. <strong>C (HPV)</strong> is associated with cervical and oropharyngeal cancers. <strong>D (Tobacco)</strong> is not a major risk factor for testicular cancer.</div>'
        }
      ]
    },

    // ── CONCEPT 6: BV + CONDYLOMATA + PROCTITIS ──────────────
    {
      id:        'bv_condylomata_proctitis',
      name:      'BV, Condylomata & Proctitis',
      batesPage: 'p. 861',
      svg1: null,
      svg2: null,
      prose: [
        "Bacterial vaginosis (BV) is caused by an overgrowth of anaerobic bacteria (primarily Gardnerella vaginalis) replacing the normal lactobacilli. It is NOT a sexually transmitted infection but is the most common cause of vaginal discharge in reproductive-age women. The discharge is thin, grayish-white, homogeneous, and has a characteristic fishy odor that intensifies with the addition of KOH (positive whiff test).",
        "Diagnosis of BV uses the Amsel criteria (3 of 4 required): thin homogeneous discharge, vaginal pH greater than 4.5, positive whiff test (fishy odor with KOH), and clue cells on wet mount (epithelial cells studded with bacteria, giving a granular stippled appearance with obscured cell borders).",
        "Condylomata acuminata (genital warts) are caused by human papillomavirus (HPV), most commonly types 6 and 11. They appear as soft, flesh-colored, verrucous (cauliflower-like) growths on the vulva, vagina, cervix, perianal area, or penile shaft. Condylomata lata, by contrast, are broad, flat, moist, gray lesions caused by secondary syphilis (Treponema pallidum) — the distinction between acuminata (HPV, cauliflower) and lata (syphilis, flat/moist) is a high-yield exam point.",
        "Proctitis is inflammation of the rectal mucosa. In sexually active patients, particularly men who have sex with men, it is often caused by gonorrhea, chlamydia, HSV, or syphilis. Symptoms include rectal pain, tenesmus, mucopurulent or bloody rectal discharge, and urgency. On anoscopy, the rectal mucosa appears erythematous, friable, and may show ulceration. Non-infectious causes include inflammatory bowel disease and radiation."
      ],
      snaps: [
        { label: 'BV discharge',      value: 'Thin, gray-white, homogeneous, fishy odor (+ whiff test)' },
        { label: 'Amsel criteria',    value: 'Thin discharge + pH >4.5 + whiff test + clue cells (3 of 4)' },
        { label: 'Condylomata acuminata', value: 'HPV 6/11 — soft, flesh-colored, cauliflower-like warts' },
        { label: 'Condylomata lata',  value: 'Syphilis — broad, flat, moist, gray lesions' },
        { label: 'Proctitis causes',  value: 'GC, chlamydia, HSV, syphilis (in MSM); also IBD, radiation' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'BV diagnosis (Amsel criteria) and condylomata acuminata vs. lata are both high-frequency exam topics.' },
        trap:   "BV is NOT an STI. The exam will try to trick you into selecting an STI-based answer. BV is an overgrowth of anaerobic flora, not a transmitted pathogen.",
        pearl:  "Acuminata (HPV) = pointy, cauliflower. Lata (syphilis) = flat, moist. The Latin helps: acuminata = pointed; lata = broad/flat.",
        missed: "Clue cells are pathognomonic for BV. Students confuse clue cells with the pseudohyphae of candidiasis. Clue cells have obscured borders; pseudohyphae are branching filaments.",
        source: "\"Clue cells are epithelial cells coated with bacteria, giving them a stippled, granular appearance and obscuring their borders.\" — Bates' 8th Ed., p. 861"
      },
      questions: [
        {
          id:      'q_bv_1',
          num:     '1 of 2',
          stem:    'A <strong>30-year-old female</strong> presents with a <strong>thin, grayish-white vaginal discharge with a fishy odor</strong>. Vaginal pH is <strong>5.0</strong>. Wet mount shows <strong>epithelial cells with obscured borders and a granular, stippled appearance</strong>. Which finding confirms the diagnosis?',
          options: ['Pseudohyphae on KOH prep', 'Clue cells on wet mount', 'Motile trichomonads', 'Positive RPR'],
          answer:  'B',
          rationale: '<strong>Correct: B — Clue cells on wet mount.</strong> The description matches clue cells (epithelial cells coated with bacteria, obscured borders, stippled appearance), which are pathognomonic for BV. Combined with fishy discharge and pH >4.5, this meets Amsel criteria. <div class="rat-wrong"><strong>A (Pseudohyphae)</strong> indicates candidal vaginitis. <strong>C (Motile trichomonads)</strong> indicates trichomoniasis. <strong>D (Positive RPR)</strong> screens for syphilis, not BV.</div>'
        },
        {
          id:      'q_bv_2',
          num:     '2 of 2',
          stem:    'A <strong>25-year-old male</strong> presents with <strong>multiple soft, flesh-colored, cauliflower-like growths</strong> on the penile shaft. Which organism is responsible, and what are these lesions called?',
          options: ['Treponema pallidum — condylomata lata', 'HPV types 6 and 11 — condylomata acuminata', 'HSV-2 — genital herpes', 'Haemophilus ducreyi — chancroid'],
          answer:  'B',
          rationale: '<strong>Correct: B — HPV types 6 and 11 — condylomata acuminata.</strong> Soft, flesh-colored, cauliflower-like (verrucous) growths are genital warts caused by HPV 6/11. <div class="rat-wrong"><strong>A (Condylomata lata)</strong> are caused by syphilis and appear as broad, flat, moist, gray lesions — not cauliflower-shaped. <strong>C (Genital herpes)</strong> presents with painful grouped vesicles on an erythematous base. <strong>D (Chancroid)</strong> presents with painful, ragged ulcers.</div>'
        }
      ]
    }
  ],

  // ── NEXT CONCEPT PREVIEW ──────────────────────────────────
  nextSystem: {
    num:   5,
    title: 'Special Populations',
    href:  'system-5.html',
    preview: 'Pediatric milestones, geriatric functional assessment, and pregnant patient examination adaptations — the populations that modify everything you have learned so far...'
  }
};

// ── DRILL QUESTIONS for System 4 ─────────────────────────
const DRILL_QUESTIONS = [
  {
    concept:   "Naegele's Rule",
    stem:      "A patient's last menstrual period began on September 20. Using Naegele's Rule, what is the estimated date of delivery?",
    options:   ['June 20', 'June 27', 'July 27', 'July 20'],
    answer:    1,
    rationale: "September 20 minus 3 months = June 20. June 20 plus 7 days = June 27 of the following year. The most common error is forgetting to add 7 days after subtracting the months."
  },
  {
    concept:   'Pap Smear Screening',
    stem:      'At what age should cervical cancer screening with Pap smear begin?',
    options:   [
      'At the onset of sexual activity',
      'Age 18',
      'Age 21',
      'Age 25'
    ],
    answer:    2,
    rationale: 'Current guidelines recommend initiating Pap smear screening at age 21, regardless of sexual activity. The old guideline of screening at the onset of sexual activity is no longer followed.'
  },
  {
    concept:   'BPH vs. Prostate Cancer',
    stem:      'On digital rectal exam, which finding is most consistent with benign prostatic hyperplasia rather than prostate cancer?',
    options:   ['Hard, irregular nodule', 'Obliterated median sulcus', 'Smooth, rubbery, symmetric enlargement', 'Fixed, stony-hard mass'],
    answer:    2,
    rationale: 'BPH produces a symmetrically enlarged, smooth, firm, rubbery prostate with an intact median sulcus. Prostate cancer produces hard, irregular, nodular findings with obliteration of the median sulcus.'
  },
  {
    concept:   'Condylomata Acuminata vs. Lata',
    stem:      'A patient presents with broad, flat, moist, gray lesions in the perianal area. Which condition is most likely?',
    options:   ['Condylomata acuminata (HPV)', 'Condylomata lata (syphilis)', 'Genital herpes (HSV-2)', 'Molluscum contagiosum'],
    answer:    1,
    rationale: 'Condylomata lata are broad, flat, moist, gray lesions caused by secondary syphilis (Treponema pallidum). Condylomata acuminata (HPV) are soft, flesh-colored, cauliflower-like growths. The Latin helps: lata = broad/flat, acuminata = pointed.'
  },
  {
    concept:   'Cervical Changes in Pregnancy',
    stem:      "During a prenatal exam at 7 weeks gestation, the examiner notes that the cervix feels soft, similar to the consistency of lips rather than the tip of the nose. What sign is this?",
    options:   ["Chadwick's sign", "Goodell's sign", "Hegar's sign", "Chandelier sign"],
    answer:    1,
    rationale: "Goodell's sign is softening of the cervix during pregnancy (nose tip → lip softness). Chadwick's sign is bluish-violet discoloration. Hegar's sign is softening of the uterine isthmus. The chandelier sign is severe cervical motion tenderness (PID or ectopic)."
  }
];
