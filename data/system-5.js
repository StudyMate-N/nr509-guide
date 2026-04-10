const SYSTEM_DATA = {
  num: 5,
  title: 'Special Populations',
  bates: "Bates' Ch. 25–26",
  week: 'Weeks 7–8',
  ihuman: '',
  vignette: 'A 4-year-old boy is brought in for a well-child visit. His mother reports he has been healthy but asks about a "lump" she noticed in his groin during bath time. On exam you note an empty right hemiscrotum with a palpable testis in the inguinal canal that can be manually guided into the scrotum but retracts when released. The left testis is descended and normal. You also see a 78-year-old woman for her annual exam; she reports mild memory changes and asks whether her purple forearm blotches are dangerous.',
  tags: ["Bates' 8th Ed. Ch. 25–26", 'NR509 Weeks 7–8', '6 high-yield concepts'],
  concepts: [
    {
      id: 'tanner_stages',
      name: 'Tanner Stages I–V',
      batesPage: 'p. 877–880',
      svg1: {
        label: 'Tanner Staging Visual',
        markup: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="background:#FAFAF8" role="img" aria-label="Tanner Stages I through V progression"><style>text{font-family:\'DM Sans\',sans-serif;fill:#0F1F3D}.hdr{font-family:\'DM Serif Display\',serif;font-size:13px;fill:#0F1F3D}.stage{font-size:9px;fill:#0F1F3D}.lbl{font-size:7.5px;fill:#555}.hi{fill:#0D7377;font-weight:700}.target{fill:#E8A020}</style><text class="hdr" x="160" y="20" text-anchor="middle">Tanner Stages of Sexual Maturity</text><line x1="30" y1="32" x2="290" y2="32" stroke="#0D7377" stroke-width="1.5"/><g transform="translate(30,45)"><rect x="0" y="0" width="52" height="130" rx="4" fill="#F0F4F8" stroke="#CBD5E0" stroke-width="0.75"/><text class="stage" x="26" y="14" text-anchor="middle" font-weight="700">Stage I</text><text class="lbl" x="26" y="28" text-anchor="middle">Prepubertal</text><text class="lbl" x="26" y="40" text-anchor="middle">No pubic hair</text><text class="lbl" x="26" y="52" text-anchor="middle">No breast dev.</text><circle cx="26" cy="80" r="12" fill="none" stroke="#CBD5E0" stroke-width="1"/><text class="lbl" x="26" y="83" text-anchor="middle">Flat</text><text class="lbl" x="26" y="110" text-anchor="middle">Testes &lt;4 mL</text><text class="lbl" x="26" y="122" text-anchor="middle">Age &lt;8 (F) &lt;9 (M)</text></g><g transform="translate(86,45)"><rect x="0" y="0" width="52" height="130" rx="4" fill="#F0F4F8" stroke="#CBD5E0" stroke-width="0.75"/><text class="stage" x="26" y="14" text-anchor="middle" font-weight="700">Stage II</text><text class="lbl" x="26" y="28" text-anchor="middle">Breast buds</text><text class="lbl" x="26" y="40" text-anchor="middle">Sparse hair</text><circle cx="26" cy="75" r="12" fill="none" stroke="#0D7377" stroke-width="1"/><circle cx="26" cy="75" r="4" fill="#0D7377" opacity="0.3"/><text class="lbl" x="26" y="100" text-anchor="middle">Testes 4 mL</text><text class="lbl" x="26" y="112" text-anchor="middle">~8-11 (F)</text><text class="lbl" x="26" y="122" text-anchor="middle">~9-11 (M)</text></g><g transform="translate(142,45)"><rect x="0" y="0" width="52" height="130" rx="4" fill="#F0F4F8" stroke="#CBD5E0" stroke-width="0.75"/><text class="stage" x="26" y="14" text-anchor="middle" font-weight="700">Stage III</text><text class="lbl" x="26" y="28" text-anchor="middle">Breast enlarg.</text><text class="lbl" x="26" y="40" text-anchor="middle">Darker, coarser</text><text class="lbl" x="26" y="52" text-anchor="middle">hair</text><circle cx="26" cy="78" r="14" fill="none" stroke="#0D7377" stroke-width="1.5"/><circle cx="26" cy="78" r="6" fill="#0D7377" opacity="0.4"/><text class="lbl" x="26" y="105" text-anchor="middle">Testes 8-10 mL</text><text class="lbl" x="26" y="117" text-anchor="middle">~11-13 (F/M)</text></g><g transform="translate(198,45)"><rect x="0" y="0" width="52" height="130" rx="4" fill="#FFFBEB" stroke="#E8A020" stroke-width="1.5"/><text class="stage hi" x="26" y="14" text-anchor="middle" style="fill:#E8A020">Stage IV</text><text class="target" x="26" y="27" text-anchor="middle" style="font-size:6.5px;font-weight:700">EXAM TARGET</text><text class="lbl" x="26" y="40" text-anchor="middle">Areolar mound</text><text class="lbl" x="26" y="52" text-anchor="middle">Adult-type hair</text><text class="lbl" x="26" y="62" text-anchor="middle">limited area</text><circle cx="26" cy="82" r="15" fill="none" stroke="#E8A020" stroke-width="1.5"/><circle cx="26" cy="82" r="8" fill="#E8A020" opacity="0.3"/><circle cx="26" cy="78" r="4" fill="#E8A020" opacity="0.5"/><text class="lbl" x="26" y="110" text-anchor="middle">Testes 12 mL</text><text class="lbl" x="26" y="122" text-anchor="middle">~13-15 (F/M)</text></g><g transform="translate(254,45)"><rect x="0" y="0" width="52" height="130" rx="4" fill="#F0F4F8" stroke="#CBD5E0" stroke-width="0.75"/><text class="stage" x="26" y="14" text-anchor="middle" font-weight="700">Stage V</text><text class="lbl" x="26" y="28" text-anchor="middle">Adult contour</text><text class="lbl" x="26" y="40" text-anchor="middle">Adult hair</text><text class="lbl" x="26" y="52" text-anchor="middle">spread to thighs</text><circle cx="26" cy="80" r="16" fill="none" stroke="#0D7377" stroke-width="1.5"/><circle cx="26" cy="80" r="9" fill="#0D7377" opacity="0.3"/><text class="lbl" x="26" y="110" text-anchor="middle">Testes 15-25 mL</text><text class="lbl" x="26" y="122" text-anchor="middle">~15+ (F/M)</text></g><text x="160" y="195" text-anchor="middle" style="font-size:8px;fill:#0D7377;font-weight:700">Stage IV is the highest-yield Tanner stage for NR509 exams</text><text x="160" y="210" text-anchor="middle" style="font-size:7px;fill:#777">Key feature: secondary mound of areola on breast (females) | adult-type hair not yet to thighs</text><rect x="15" y="220" width="290" height="14" rx="3" fill="#0D7377" opacity="0.08"/><text x="160" y="230" text-anchor="middle" style="font-size:6.5px;fill:#0D7377">Adapted from Tanner JM. Growth at Adolescence, 2nd ed. | Bates\' Ch. 25</text></svg>',
        caption: 'Tanner Stages I through V with Stage IV highlighted as the primary exam target. Note the secondary areolar mound and adult-type pubic hair limited in distribution.'
      },
      svg2: null,
      prose: [
        'The Tanner stages (Sexual Maturity Rating) classify pubertal development into five stages for both breast tissue and pubic hair in females and genital development and pubic hair in males. Stage I is prepubertal with no secondary sexual characteristics. Stage II marks the onset of puberty with breast budding in females and testicular enlargement to 4 mL in males, along with sparse, lightly pigmented pubic hair.',
        'Stage III features further breast enlargement and darkening, coarser pubic hair. Stage IV is distinguished in females by a secondary mound formed by the areola and papilla projecting above the breast contour and in males by further penile and testicular growth (testes approximately 12 mL). Pubic hair in Stage IV is adult-type but does not yet extend to the medial thighs. Stage V represents the fully mature adult pattern.',
        'Stage IV is the highest-yield Tanner stage for NR509 examinations. Clinicians must be able to identify the secondary areolar mound and distinguish Stage IV from Stage V based on pubic hair distribution. Precocious puberty is defined as onset of secondary sexual characteristics before age 8 in females or age 9 in males and warrants referral.'
      ],
      snaps: [
        { label: 'Stage IV breast', value: 'Secondary areolar mound projects above breast contour' },
        { label: 'Stage IV pubic hair', value: 'Adult-type hair, not yet spread to medial thighs' },
        { label: 'Precocious puberty', value: 'Before age 8 (female) or age 9 (male)' },
        { label: 'Stage II onset marker', value: 'Breast bud (F) or testes 4 mL (M)' },
        { label: 'Stage V defining feature', value: 'Adult distribution including medial thighs' }
      ],
      margin: {
        stars: { rating: '★★★★★', text: 'Highest-frequency Quizlet topic across all NR509 systems' },
        trap: 'Confusing Stage IV with Stage V — Stage IV pubic hair does NOT extend to the medial thigh.',
        pearl: 'The secondary areolar mound in Stage IV is the single most tested Tanner feature. It is absent in Stage V where the areola recesses to the general breast contour.',
        missed: 'Failing to document Tanner stage at every adolescent well visit; missing precocious puberty referral criteria.',
        source: '"Breast Stage 4: Areola and papilla form a secondary mound above the level of the breast." — Bates\' 8th Ed., Ch. 25'
      },
      questions: [
        {
          id: 'q_tanner_1',
          num: '1 of 2',
          stem: 'A 12-year-old female presents for a well-child visit. On breast examination, you observe that the <strong>areola and papilla form a secondary mound projecting above the breast contour</strong>. Pubic hair is adult-type but confined to the mons pubis. Which Tanner stage best describes these findings?',
          options: ['Stage II', 'Stage III', 'Stage IV', 'Stage V'],
          answer: 'C',
          rationale: '<div class="rat-wrong">A — Stage II is characterized by breast budding only, with sparse pubic hair.</div><div class="rat-wrong">B — Stage III shows breast enlargement without a secondary areolar mound.</div><div class="rat-right">C — Correct. The secondary areolar mound and adult-type hair limited to the mons pubis are hallmarks of Stage IV.</div><div class="rat-wrong">D — Stage V features adult breast contour (no secondary mound) and pubic hair extending to the medial thighs.</div>'
        },
        {
          id: 'q_tanner_2',
          num: '2 of 2',
          stem: 'A 6-year-old girl presents with <strong>breast budding and sparse, lightly pigmented labial hair</strong>. Her mother is concerned about early development. What is the most appropriate clinical consideration?',
          options: [
            'This is normal Stage II development and requires no further workup',
            'This meets criteria for precocious puberty and warrants endocrine referral',
            'This represents Stage III and should be monitored at 6-month intervals',
            'This is Tanner Stage I with a benign variant of premature thelarche only'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — Stage II at age 6 is abnormally early; the expected age for Stage II onset in females is 8 years or older.</div><div class="rat-right">B — Correct. Onset of secondary sexual characteristics before age 8 in females defines precocious puberty, requiring endocrine evaluation to rule out central or peripheral causes.</div><div class="rat-wrong">C — The findings (breast bud + sparse hair) correspond to Stage II, not Stage III, and the age is the critical concern.</div><div class="rat-wrong">D — Breast budding with pubic hair is not Stage I. Premature thelarche alone lacks pubic hair development.</div>'
        }
      ]
    },
    {
      id: 'infant_assessment',
      name: 'Infant Assessment',
      batesPage: 'p. 869–876',
      svg1: null,
      svg2: null,
      prose: [
        'Infant physical examination requires systematic assessment of growth parameters, fontanelles, primitive reflexes, hip stability, and genital examination. In males, palpation of the testes is essential at every well-infant visit. Cryptorchidism (undescended testes) is the most common congenital anomaly of the male genitourinary tract, occurring in approximately 3% of full-term and up to 30% of preterm male neonates.',
        'A true undescended testis cannot be manually brought into the scrotum, whereas a retractile testis can be guided to the scrotum but retracts due to a brisk cremasteric reflex. Undescended testes that do not spontaneously descend by 6 months of age should be referred for surgical orchiopexy by 12 months to preserve fertility potential and reduce malignancy risk.',
        'Cardiac assessment in infants includes auscultation and observation during feeding. A feeding time exceeding 30 minutes is a recognized red flag for underlying cardiac pathology, particularly congenital heart disease with hemodynamic compromise. Additional signs include diaphoresis during feeds, failure to thrive, and perioral cyanosis. These infants require prompt echocardiographic evaluation.'
      ],
      snaps: [
        { label: 'Cryptorchidism prevalence', value: '~3% of full-term males; up to 30% of preterm' },
        { label: 'Orchiopexy timing', value: 'Referral by 6 months; surgery by 12 months' },
        { label: 'Cardiac feeding red flag', value: 'Feeding time >30 minutes' },
        { label: 'Retractile vs undescended', value: 'Retractile: manually guided to scrotum; undescended: cannot reach scrotum' },
        { label: 'Feeding distress signs', value: 'Diaphoresis, tachypnea, perioral cyanosis during feeds' }
      ],
      margin: {
        stars: { rating: '★★★★★', text: 'High-yield: undescended testes + cardiac feeding sign appear frequently on exams' },
        trap: 'Documenting a retractile testis as undescended — retractile testes reach the scrotum with gentle manipulation and are a normal variant.',
        pearl: 'The >30-minute feeding time is the most tested cardiac red flag in infants. Always ask about feeding duration and diaphoresis at well-infant visits.',
        missed: 'Not performing bilateral testicular palpation at every male infant well visit; failing to ask about feeding duration and associated symptoms.',
        source: '"Feeding that consistently takes longer than 30 minutes suggests cardiac or neurologic compromise." — Bates\' 8th Ed., Ch. 25'
      },
      questions: [
        {
          id: 'q_infant_1',
          num: '1 of 2',
          stem: 'During a well-child visit for a 9-month-old male, you note an <strong>empty right hemiscrotum</strong>. The testis is palpable in the inguinal canal but <strong>cannot be manually guided into the scrotum</strong>. What is the most appropriate next step?',
          options: [
            'Reassure the parent that this is a retractile testis and will resolve spontaneously',
            'Refer for surgical orchiopexy to be completed by 12 months of age',
            'Order an ultrasound to locate the testis and recheck in 6 months',
            'Prescribe hormonal therapy with hCG to promote testicular descent'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — A retractile testis can be guided into the scrotum; this testis cannot, making it a true undescended testis requiring intervention.</div><div class="rat-right">B — Correct. Undescended testes that have not spontaneously descended by 6 months should be referred for orchiopexy by 12 months of age to preserve fertility and reduce malignancy risk.</div><div class="rat-wrong">C — Imaging may locate the testis, but waiting 6 more months would delay surgery past the recommended 12-month window.</div><div class="rat-wrong">D — Hormonal therapy is generally not first-line and has low success rates; surgical orchiopexy is the standard of care.</div>'
        },
        {
          id: 'q_infant_2',
          num: '2 of 2',
          stem: 'A mother reports that her 3-month-old infant <strong>takes 45 minutes to complete each feeding</strong> and becomes <strong>diaphoretic and tachypneic</strong> during feeds. The infant\'s weight has dropped from the 50th to the 15th percentile. Which evaluation is most warranted?',
          options: [
            'Reassess feeding technique and recommend supplemental formula',
            'Order a swallow study to evaluate for aspiration',
            'Obtain an echocardiogram to evaluate for congenital heart disease',
            'Refer to gastroenterology for evaluation of gastroesophageal reflux'
          ],
          answer: 'C',
          rationale: '<div class="rat-wrong">A — While feeding technique assessment is reasonable, the constellation of prolonged feeds, diaphoresis, and failure to thrive suggests a cardiac etiology rather than technique issues.</div><div class="rat-wrong">B — A swallow study evaluates dysphagia and aspiration but does not explain diaphoresis and tachypnea during feeds.</div><div class="rat-right">C — Correct. Feeding duration >30 minutes with diaphoresis, tachypnea, and failure to thrive is a classic presentation of congenital heart disease with hemodynamic compromise. Echocardiography is the appropriate initial diagnostic study.</div><div class="rat-wrong">D — GER could cause feeding difficulty but would not typically cause diaphoresis and tachypnea during feeds.</div>'
        }
      ]
    },
    {
      id: 'normal_aging',
      name: 'Normal Aging Changes',
      batesPage: 'p. 947–955',
      svg1: null,
      svg2: {
        label: 'Age-Related Changes Diagram',
        markup: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="background:#FAFAF8" role="img" aria-label="Age-related physiologic changes by organ system"><style>text{font-family:\'DM Sans\',sans-serif;fill:#0F1F3D}.hdr{font-family:\'DM Serif Display\',serif;font-size:13px}.sys{font-size:8px;font-weight:700}.detail{font-size:7px;fill:#555}.tag{font-size:6.5px}</style><text class="hdr" x="160" y="18" text-anchor="middle">Normal Age-Related Physiologic Changes</text><line x1="20" y1="26" x2="300" y2="26" stroke="#5B4FCF" stroke-width="1.5"/><text x="160" y="37" text-anchor="middle" class="tag" fill="#5B4FCF">Select-all-that-apply format — know which are NORMAL vs pathologic</text><g transform="translate(15,46)"><rect width="90" height="50" rx="5" fill="#0D7377" opacity="0.1" stroke="#0D7377" stroke-width="0.75"/><text class="sys" x="45" y="13" text-anchor="middle" fill="#0D7377">Cardiovascular</text><text class="detail" x="45" y="25" text-anchor="middle">Systolic BP rises</text><text class="detail" x="45" y="35" text-anchor="middle">S4 may be normal</text><text class="detail" x="45" y="45" text-anchor="middle">Widened pulse pressure</text></g><g transform="translate(115,46)"><rect width="90" height="50" rx="5" fill="#E8A020" opacity="0.1" stroke="#E8A020" stroke-width="0.75"/><text class="sys" x="45" y="13" text-anchor="middle" fill="#E8A020">Musculoskeletal</text><text class="detail" x="45" y="25" text-anchor="middle">Kyphosis increases</text><text class="detail" x="45" y="35" text-anchor="middle">Height decreases</text><text class="detail" x="45" y="45" text-anchor="middle">Muscle mass declines</text></g><g transform="translate(215,46)"><rect width="90" height="50" rx="5" fill="#5B4FCF" opacity="0.1" stroke="#5B4FCF" stroke-width="0.75"/><text class="sys" x="45" y="13" text-anchor="middle" fill="#5B4FCF">Neurologic</text><text class="detail" x="45" y="25" text-anchor="middle">Slowed reaction time</text><text class="detail" x="45" y="35" text-anchor="middle">Reduced vibratory sense</text><text class="detail" x="45" y="45" text-anchor="middle">Ankle jerk may be absent</text></g><g transform="translate(15,106)"><rect width="90" height="50" rx="5" fill="#C9432A" opacity="0.1" stroke="#C9432A" stroke-width="0.75"/><text class="sys" x="45" y="13" text-anchor="middle" fill="#C9432A">Sensory</text><text class="detail" x="45" y="25" text-anchor="middle">Presbyopia (near vision)</text><text class="detail" x="45" y="35" text-anchor="middle">Presbycusis (hearing)</text><text class="detail" x="45" y="45" text-anchor="middle">Arcus senilis (cornea)</text></g><g transform="translate(115,106)"><rect width="90" height="50" rx="5" fill="#0F1F3D" opacity="0.1" stroke="#0F1F3D" stroke-width="0.75"/><text class="sys" x="45" y="13" text-anchor="middle" fill="#0F1F3D">Integumentary</text><text class="detail" x="45" y="25" text-anchor="middle">Skin turgor unreliable</text><text class="detail" x="45" y="35" text-anchor="middle">Actinic keratoses</text><text class="detail" x="45" y="45" text-anchor="middle">Thinned dermis</text></g><g transform="translate(215,106)"><rect width="90" height="50" rx="5" fill="#0D7377" opacity="0.1" stroke="#0D7377" stroke-width="0.75"/><text class="sys" x="45" y="13" text-anchor="middle" fill="#0D7377">Pulmonary</text><text class="detail" x="45" y="25" text-anchor="middle">Decreased chest wall</text><text class="detail" x="45" y="35" text-anchor="middle">compliance</text><text class="detail" x="45" y="45" text-anchor="middle">Reduced vital capacity</text></g><rect x="15" y="168" width="290" height="32" rx="5" fill="#FFFBEB" stroke="#E8A020" stroke-width="1"/><text x="160" y="180" text-anchor="middle" style="font-size:7.5px;font-weight:700;fill:#E8A020">NOT Normal Aging (Pathologic Findings)</text><text class="detail" x="160" y="192" text-anchor="middle">Significant cognitive decline | S3 gallop | New-onset tremor | Incontinence | Marked weight loss</text><rect x="15" y="208" width="290" height="24" rx="4" fill="#5B4FCF" opacity="0.06"/><text x="160" y="218" text-anchor="middle" style="font-size:7px;fill:#5B4FCF;font-weight:600">Exam tip: S4 can be normal in elderly; S3 is ALWAYS pathologic at any age in adults</text><text x="160" y="228" text-anchor="middle" style="font-size:6px;fill:#999">Based on Bates\' 8th Ed., Ch. 26 — The Older Adult</text></svg>',
        caption: 'Normal age-related changes organized by organ system. The bottom panel distinguishes pathologic findings that should NOT be attributed to normal aging.'
      },
      prose: [
        'Normal aging produces predictable physiologic changes across organ systems that must be distinguished from pathology. Cardiovascular changes include increased systolic blood pressure, widened pulse pressure due to arterial stiffening, and an S4 heart sound that may be a normal finding in older adults. Importantly, an S3 gallop is always pathologic in adults and should not be attributed to aging.',
        'Neurologic changes include slowed reaction time, reduced vibratory sense (especially in the feet), and absent or diminished ankle deep tendon reflexes. Sensory changes include presbyopia (difficulty with near vision due to lens rigidity), presbycusis (high-frequency hearing loss), and arcus senilis (a gray-white lipid ring at the corneal periphery that is benign in the elderly).',
        'Musculoskeletal findings include progressive kyphosis from vertebral compression, loss of height (approximately 1 to 3 inches overall), and sarcopenia. Integumentary changes include thinned dermis, reduced subcutaneous fat, and unreliable skin turgor as a hydration marker. These normal changes are frequently tested in select-all-that-apply format to distinguish them from pathologic findings such as significant cognitive decline, new tremor, S3 gallop, incontinence, or unexplained weight loss.'
      ],
      snaps: [
        { label: 'S4 in elderly', value: 'May be a normal finding' },
        { label: 'S3 in adults', value: 'Always pathologic — suggests heart failure' },
        { label: 'Presbycusis pattern', value: 'High-frequency hearing loss bilaterally' },
        { label: 'Ankle DTR in elderly', value: 'May be absent or diminished normally' },
        { label: 'Skin turgor', value: 'Unreliable as dehydration marker in elderly due to loss of elasticity' }
      ],
      margin: {
        stars: { rating: '★★★★★', text: 'Select-all-that-apply items on normal aging are among the most tested NR509 topics' },
        trap: 'Attributing an S3 gallop to normal aging — S3 is always pathologic in adults and suggests volume overload or heart failure.',
        pearl: 'The S4 vs S3 distinction in the elderly is the single most common trap question: S4 can be normal, S3 never is.',
        missed: 'Listing incontinence or significant cognitive decline as normal aging; both warrant workup regardless of patient age.',
        source: '"An S4 is commonly heard in otherwise healthy older people, but an S3 raises the suspicion of heart failure." — Bates\' 8th Ed., Ch. 26'
      },
      questions: [
        {
          id: 'q_aging_1',
          num: '1 of 2',
          stem: 'A 76-year-old patient presents for an annual physical. Which of the following findings should be considered <strong>normal age-related changes</strong>? <em>(Select all that apply.)</em>',
          options: [
            'Absent ankle deep tendon reflexes, presbycusis, and an S4 heart sound',
            'S3 gallop, urinary incontinence, and progressive cognitive decline',
            'Arcus senilis, resting tremor, and absent ankle reflexes',
            'Presbyopia, increased kyphosis, and new-onset urinary incontinence'
          ],
          answer: 'A',
          rationale: '<div class="rat-right">A — Correct. Absent ankle DTRs, presbycusis (high-frequency hearing loss), and S4 are all accepted normal age-related findings.</div><div class="rat-wrong">B — S3 is always pathologic in adults; incontinence and progressive cognitive decline require evaluation and are not normal aging.</div><div class="rat-wrong">C — Resting tremor is not a normal aging change and suggests Parkinson disease or other pathology.</div><div class="rat-wrong">D — Presbyopia and kyphosis are normal, but new-onset urinary incontinence is pathologic and requires workup.</div>'
        },
        {
          id: 'q_aging_2',
          num: '2 of 2',
          stem: 'During cardiac auscultation of a healthy 80-year-old, you hear a <strong>low-pitched sound just before S1</strong> best heard at the apex. There are no signs of heart failure. How should you interpret this finding?',
          options: [
            'This is an S3 gallop indicating diastolic heart failure',
            'This is an S4 and may be a normal finding in an older adult without heart failure',
            'This is a systolic ejection murmur requiring echocardiography',
            'This is a pathologic finding requiring urgent cardiology referral'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — An S3 occurs just after S2 (early diastole), not just before S1. The timing described is consistent with S4.</div><div class="rat-right">B — Correct. A low-pitched sound just before S1 is an S4. In older adults without signs of heart failure, S4 can be a normal finding due to reduced ventricular compliance.</div><div class="rat-wrong">C — Systolic ejection murmurs occur between S1 and S2, not just before S1.</div><div class="rat-wrong">D — In the absence of heart failure signs, an S4 in the elderly does not require urgent referral.</div>'
        }
      ]
    },
    {
      id: 'skin_lesions',
      name: 'Actinic Purpura & Miliaria Rubra',
      batesPage: 'p. 950, 884',
      svg1: null,
      svg2: null,
      prose: [
        'Actinic purpura (also called senile purpura or solar purpura) presents as dark purple, irregularly shaped macules and patches on the extensor surfaces of the forearms and dorsal hands of elderly patients. It results from age-related loss of collagen and perivascular connective tissue support, making dermal blood vessels fragile and susceptible to rupture with minimal trauma. The lesions are painless, nonpalpable, and resolve spontaneously over 1 to 3 weeks, often leaving brown hemosiderin staining.',
        'Actinic purpura is a benign condition that requires no treatment. However, it must be distinguished from purpura caused by coagulopathies, vasculitis (which produces palpable purpura), or thrombocytopenia. The distribution (sun-exposed extensor surfaces), clinical context (elderly patient, chronic sun damage), and absence of systemic symptoms help differentiate actinic purpura from pathologic causes.',
        'Miliaria rubra (heat rash or prickly heat) is caused by obstruction of eccrine sweat glands, resulting in small erythematous papules and vesicles in areas of occlusion, friction, or excessive sweating. In infants, it commonly appears on the neck, axillae, and diaper area. In adults, it occurs in intertriginous areas and under occlusive clothing. Management involves cooling the skin, reducing humidity, and wearing loose, breathable clothing. It is a benign, self-limiting condition.'
      ],
      snaps: [
        { label: 'Actinic purpura location', value: 'Extensor forearms and dorsal hands' },
        { label: 'Actinic purpura cause', value: 'Age-related collagen loss with dermal vessel fragility' },
        { label: 'Key differentiator', value: 'Nonpalpable (actinic) vs palpable purpura (vasculitis)' },
        { label: 'Miliaria rubra cause', value: 'Eccrine sweat gland obstruction' },
        { label: 'Miliaria rubra treatment', value: 'Cool environment, loose clothing, no pharmacotherapy needed' }
      ],
      margin: {
        stars: { rating: '★★★★☆', text: 'Common exam topic: distinguishing benign from pathologic purpura' },
        trap: 'Ordering a coagulation workup for classic actinic purpura on sun-exposed extensor forearms in an otherwise well elderly patient.',
        pearl: 'Actinic purpura is nonpalpable and on extensor surfaces; palpable purpura suggests vasculitis and requires urgent evaluation.',
        missed: 'Not asking about anticoagulant use, which can worsen actinic purpura but does not change its benign etiology.',
        source: '"Dark purplish ecchymoses, termed actinic or senile purpura, appear on the extensor surfaces of the hands and forearms." — Bates\' 8th Ed., Ch. 26'
      },
      questions: [
        {
          id: 'q_skin_1',
          num: '1 of 2',
          stem: 'A 78-year-old woman presents with <strong>painless, dark purple patches on the dorsal forearms bilaterally</strong>. She takes no anticoagulants. The lesions are flat and nonpalpable. Platelet count and coagulation studies are normal. What is the most likely diagnosis?',
          options: [
            'Immune thrombocytopenic purpura',
            'Actinic (senile) purpura',
            'Leukocytoclastic vasculitis',
            'Disseminated intravascular coagulation'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — ITP causes petechiae and mucosal bleeding with low platelets; this patient has normal platelets and the lesion pattern is inconsistent.</div><div class="rat-right">B — Correct. Painless, nonpalpable, dark purple patches on the extensor forearms of an elderly patient with normal coagulation studies is classic actinic purpura due to age-related dermal connective tissue loss.</div><div class="rat-wrong">C — Vasculitis produces palpable purpura, often on the lower extremities, with systemic symptoms.</div><div class="rat-wrong">D — DIC causes diffuse bleeding with abnormal coagulation studies; this patient has normal lab values and isolated forearm findings.</div>'
        },
        {
          id: 'q_skin_2',
          num: '2 of 2',
          stem: 'A mother brings her 4-month-old infant during summer with <strong>small erythematous papules and vesicles on the neck folds and axillae</strong>. The infant has been dressed in multiple layers. What is the most appropriate management?',
          options: [
            'Prescribe topical hydrocortisone cream twice daily',
            'Obtain skin scrapings for fungal culture',
            'Recommend cooling the skin, reducing layers, and wearing loose clothing',
            'Start oral antibiotics for suspected bacterial folliculitis'
          ],
          answer: 'C',
          rationale: '<div class="rat-wrong">A — Topical corticosteroids are not indicated for miliaria rubra and may worsen the condition by promoting further occlusion.</div><div class="rat-wrong">B — The distribution in skin folds with papulovesicles in an overdressed infant is classic miliaria rubra, not tinea.</div><div class="rat-right">C — Correct. Miliaria rubra results from eccrine sweat gland obstruction. Management involves removing the cause: cooling the environment, reducing clothing layers, and allowing the skin to breathe.</div><div class="rat-wrong">D — The papulovesicular pattern in occluded areas of an overdressed infant is consistent with heat rash, not bacterial folliculitis.</div>'
        }
      ]
    },
    {
      id: 'uspstf_mammography',
      name: 'USPSTF 2024 Mammography Guidelines',
      batesPage: 'p. 443–445',
      svg1: null,
      svg2: null,
      prose: [
        'The United States Preventive Services Task Force (USPSTF) updated its breast cancer screening recommendations in 2024, lowering the recommended starting age for biennial screening mammography from 50 to 40 years for average-risk women. This change was driven by rising breast cancer incidence in women aged 40 to 49 and modeling data showing that earlier screening reduces breast cancer mortality across racial and ethnic groups.',
        'Under the 2024 guidelines, biennial screening mammography is recommended for all women aged 40 to 74 years (Grade B recommendation). The task force found insufficient evidence to assess the balance of benefits and harms for women aged 75 and older (I statement). Clinicians should engage in shared decision-making with patients regarding screening beyond age 74, considering life expectancy, comorbidities, and patient preferences.',
        'For NR509 examination purposes, the critical update is that the starting age is now 40, not 50. The previous recommendation (2016) had suggested individualized decisions for women 40 to 49 and biennial screening starting at 50. The 2024 update also acknowledged insufficient evidence regarding supplemental screening with breast ultrasound or MRI for women with dense breast tissue, issuing an I statement for this population.'
      ],
      snaps: [
        { label: '2024 starting age', value: 'Age 40 (changed from 50)' },
        { label: 'Screening interval', value: 'Biennial (every 2 years)' },
        { label: 'Age range', value: '40 to 74 years (Grade B)' },
        { label: 'Age 75+', value: 'Insufficient evidence (I statement)' },
        { label: 'Dense breasts', value: 'Insufficient evidence for supplemental screening (I statement)' }
      ],
      margin: {
        stars: { rating: '★★★★★', text: 'Updated guideline — expect exam questions testing the new age 40 threshold' },
        trap: 'Selecting age 50 as the starting age — this was the prior 2016 recommendation and is no longer current.',
        pearl: 'The single most testable point: USPSTF 2024 mammography screening begins at age 40 biennially, not age 50.',
        missed: 'Not knowing that the USPSTF issued an I statement (insufficient evidence) for supplemental screening in women with dense breast tissue.',
        source: '"The USPSTF recommends biennial screening mammography for women aged 40 to 74 years." — USPSTF 2024 Final Recommendation'
      },
      questions: [
        {
          id: 'q_mammo_1',
          num: '1 of 2',
          stem: 'A 42-year-old average-risk woman asks when she should begin breast cancer screening. According to the <strong>USPSTF 2024 guidelines</strong>, what is the most appropriate recommendation?',
          options: [
            'Begin annual mammography now and continue until age 74',
            'Begin biennial mammography now and continue through age 74',
            'Defer screening until age 50 and then screen biennially',
            'Perform clinical breast examination annually in lieu of mammography until age 50'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — The USPSTF recommends biennial (every 2 years), not annual, screening mammography.</div><div class="rat-right">B — Correct. The 2024 USPSTF guidelines recommend biennial screening mammography starting at age 40 through age 74 for average-risk women. This patient should begin screening now.</div><div class="rat-wrong">C — Age 50 was the starting age under the 2016 guidelines. The 2024 update lowered the start age to 40.</div><div class="rat-wrong">D — The USPSTF does not recommend clinical breast examination as a substitute for mammography screening.</div>'
        },
        {
          id: 'q_mammo_2',
          num: '2 of 2',
          stem: 'A 76-year-old woman with heterogeneously dense breast tissue asks whether she should continue screening mammography and add breast ultrasound. According to <strong>USPSTF 2024 recommendations</strong>, what is the most accurate response?',
          options: [
            'Continue biennial mammography and add annual breast ultrasound for dense tissue',
            'Discontinue all screening as the recommended upper age limit is 74',
            'There is insufficient evidence for screening beyond age 74 and for supplemental imaging in dense breasts — engage in shared decision-making',
            'Switch from mammography to breast MRI as the primary screening modality'
          ],
          answer: 'C',
          rationale: '<div class="rat-wrong">A — The USPSTF issued an I statement (insufficient evidence) for supplemental ultrasound in dense breasts; it is not a recommended addition.</div><div class="rat-wrong">B — The USPSTF did not recommend stopping screening at 74; rather, it found insufficient evidence to recommend for or against screening beyond 74.</div><div class="rat-right">C — Correct. Both screening beyond age 74 and supplemental imaging for dense breast tissue received I statements from the USPSTF in 2024, meaning shared decision-making is appropriate.</div><div class="rat-wrong">D — Breast MRI is not recommended by the USPSTF as a primary screening tool for average-risk women regardless of breast density.</div>'
        }
      ]
    },
    {
      id: 'peds_vs_adult',
      name: 'Pediatric vs Adult Exam Differences',
      batesPage: 'p. 857–868',
      svg1: null,
      svg2: null,
      prose: [
        'The pediatric physical examination differs from the adult examination in sequence, technique, and interpretation. In infants and toddlers, the examination should proceed from least invasive to most invasive procedures, reserving ear and throat examination for last as these are most likely to cause distress and compromise the remainder of the evaluation. In contrast, the adult examination typically follows a head-to-toe sequence.',
        'Vital sign assessment differs significantly. Pediatric heart rates and respiratory rates are higher than adult normals and decrease with age. Blood pressure measurement is not routine until age 3 years unless risk factors are present. The anterior fontanelle normally closes between 9 and 18 months; a bulging fontanelle suggests increased intracranial pressure, while a sunken fontanelle suggests dehydration. These findings have no adult equivalent.',
        'Abdominal examination in infants is performed with the knees flexed to relax the abdominal musculature. The liver edge is normally palpable 1 to 2 cm below the right costal margin in infants and young children, which would be considered hepatomegaly in an adult. The spleen tip may also be normally palpable in thin infants. Hip examination using the Ortolani and Barlow maneuvers is unique to the newborn and early infant assessment and screens for developmental dysplasia of the hip.'
      ],
      snaps: [
        { label: 'Exam sequence (peds)', value: 'Least to most invasive; ears and throat last' },
        { label: 'Exam sequence (adult)', value: 'Head-to-toe systematic approach' },
        { label: 'Anterior fontanelle closure', value: '9 to 18 months' },
        { label: 'Palpable liver in infants', value: 'Normal: 1–2 cm below right costal margin' },
        { label: 'BP screening start', value: 'Routine at age 3 years (earlier if risk factors)' }
      ],
      margin: {
        stars: { rating: '★★★★☆', text: 'Tested frequently: exam sequence differences and normal pediatric findings' },
        trap: 'Performing a strict head-to-toe examination on a toddler — the ear and throat exam should be saved for last to prevent crying that interferes with cardiac and abdominal auscultation.',
        pearl: 'A palpable liver edge 1 to 2 cm below the costal margin is normal in infants but would be abnormal in adults. Context determines the interpretation.',
        missed: 'Forgetting that BP screening begins at age 3; not performing Ortolani and Barlow maneuvers at newborn visits.',
        source: '"In infants, examine the ears and throat last, as these procedures may cause crying that makes the rest of the examination difficult." — Bates\' 8th Ed., Ch. 25'
      },
      questions: [
        {
          id: 'q_peds_1',
          num: '1 of 2',
          stem: 'You are performing a physical examination on a <strong>15-month-old toddler</strong>. Which examination approach is most appropriate?',
          options: [
            'Follow a strict head-to-toe sequence as with adult patients',
            'Begin with auscultation of the heart and lungs while the child is calm, saving ear and throat exam for last',
            'Start with the ear and throat exam to identify any acute infections first',
            'Perform all examination components simultaneously to minimize visit duration'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — A strict head-to-toe approach is appropriate for cooperative adults but causes distress in toddlers, particularly when ears and throat are examined early.</div><div class="rat-right">B — Correct. Pediatric examination should proceed from least to most invasive. Cardiac and pulmonary auscultation should be performed while the child is quiet, with ear and throat examination reserved for last as these are most likely to cause crying.</div><div class="rat-wrong">C — Starting with ear and throat exam will likely cause crying and agitation, making cardiac auscultation and abdominal examination unreliable.</div><div class="rat-wrong">D — Performing all components simultaneously is not feasible and does not reflect a systematic pediatric approach.</div>'
        },
        {
          id: 'q_peds_2',
          num: '2 of 2',
          stem: 'During a well-child visit for a 6-month-old infant, you palpate the <strong>liver edge 1.5 cm below the right costal margin</strong>. The infant is feeding well and gaining weight appropriately. How should you interpret this finding?',
          options: [
            'This is hepatomegaly requiring urgent hepatic ultrasound',
            'This is a normal finding in infants and requires no further workup',
            'This suggests congestive heart failure and requires echocardiography',
            'This is consistent with biliary atresia and requires surgical referral'
          ],
          answer: 'B',
          rationale: '<div class="rat-wrong">A — A liver edge 1 to 2 cm below the costal margin is normal in infants due to the relatively larger liver size and smaller abdominal cavity.</div><div class="rat-right">B — Correct. In infants and young children, the liver edge is normally palpable 1 to 2 cm below the right costal margin. In a well-appearing infant with normal growth, this requires no further evaluation.</div><div class="rat-wrong">C — An isolated palpable liver edge in a well infant does not indicate heart failure; additional signs such as tachycardia, hepatojugular reflux, and edema would be expected.</div><div class="rat-wrong">D — Biliary atresia presents with conjugated hyperbilirubinemia, acholic stools, and dark urine, not an isolated palpable liver edge in a well infant.</div>'
        }
      ]
    }
  ],
  nextSystem: { num: 6, title: 'Breast Assessment', href: 'system-6.html', preview: 'Clinical breast examination technique, benign vs malignant masses, and USPSTF screening integration.' }
};

const DRILL_QUESTIONS = [
  {
    concept: 'Tanner Stages I–V',
    stem: 'Which Tanner stage is characterized by a secondary mound formed by the areola and papilla projecting above the breast contour?',
    options: ['Stage II', 'Stage III', 'Stage IV', 'Stage V'],
    answer: 2,
    rationale: 'Stage IV is defined by the secondary areolar mound projecting above the breast contour. Stage V shows adult contour without a secondary mound.'
  },
  {
    concept: 'Infant Assessment',
    stem: 'At what age should orchiopexy ideally be completed for an undescended testis that has not spontaneously descended?',
    options: ['By 6 months', 'By 12 months', 'By 24 months', 'By 36 months'],
    answer: 1,
    rationale: 'Current guidelines recommend referral for orchiopexy by 6 months if the testis has not descended, with surgery ideally completed by 12 months to preserve fertility and reduce cancer risk.'
  },
  {
    concept: 'Normal Aging Changes',
    stem: 'Which heart sound may be a normal finding in healthy older adults?',
    options: ['S1 split', 'S2 paradoxical split', 'S3 gallop', 'S4'],
    answer: 3,
    rationale: 'S4 can be a normal finding in older adults due to decreased ventricular compliance. S3 is always pathologic in adults and suggests heart failure or volume overload.'
  },
  {
    concept: 'Actinic Purpura & Miliaria Rubra',
    stem: 'What is the key physical examination feature that distinguishes actinic purpura from vasculitic purpura?',
    options: [
      'Location on the lower extremities',
      'Actinic purpura is nonpalpable; vasculitic purpura is palpable',
      'Actinic purpura is painful; vasculitic purpura is painless',
      'Actinic purpura occurs only in immunocompromised patients'
    ],
    answer: 1,
    rationale: 'Actinic purpura produces flat, nonpalpable lesions on sun-exposed extensor surfaces. Vasculitis produces palpable purpura, often on the lower extremities, indicating vessel wall inflammation.'
  },
  {
    concept: 'USPSTF 2024 Mammography Guidelines',
    stem: 'According to the USPSTF 2024 update, at what age should average-risk women begin screening mammography?',
    options: ['Age 35', 'Age 40', 'Age 45', 'Age 50'],
    answer: 1,
    rationale: 'The 2024 USPSTF guidelines lowered the starting age for biennial screening mammography from 50 to 40 for average-risk women, driven by data on rising breast cancer incidence in younger women.'
  }
];
