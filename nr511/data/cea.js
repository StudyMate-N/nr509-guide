var CEA_DATA = {
  slug: 'cea',
  totalSections: 5,

  meta: {
    eyebrow: 'NR511 · Exam Prep · APEA CEA',
    title: 'CEA Diagnostic Exam Prep',
    sub: 'Comprehensive Exam Assessment — 150 questions across 3 sequential 50-question components, mapped to 13 clinical domains.',
    pills: ['150 Questions', '3 Components', '13 Domains', 'Pass/Fail Benchmark']
  },

  triage: {
    title: 'Choose your prep depth',
    options: [
      {
        label: '2 hr',
        title: 'Essential Review',
        items: [
          'Sections 1, 2 & 5 only',
          'Domain bars — red domains only',
          'Skip green (90%+) domains entirely',
          'Skim system card bullets'
        ]
      },
      {
        label: '4 hr',
        title: 'Targeted Prep',
        items: [
          'All 5 sections',
          'All domain bars — red + yellow in depth',
          'System cards for low-scoring domains',
          'All 25 practice questions'
        ]
      },
      {
        label: 'Full',
        title: 'Complete Prep',
        items: [
          'Everything in 4hr prep',
          'Re-read all question rationales',
          'Reattempt questions you missed',
          'Review SNAPPS builder in Section 1'
        ]
      }
    ]
  },

  endurance: 'The CEA has 3 sequential 50-question components taken in a single sitting. Build mental stamina — practice timed 50-question blocks before exam day.',

  domains: [
    { name: 'Cardiovascular',   score: 74,  priority: 'high'   },
    { name: 'Integumentary',    score: 100, priority: 'skip'   },
    { name: 'HEENT',            score: 71,  priority: 'high'   },
    { name: 'Endocrine',        score: 68,  priority: 'high'   },
    { name: 'Gastrointestinal', score: 73,  priority: 'high'   },
    { name: 'Genitourinary',    score: 78,  priority: 'medium' },
    { name: 'Hematology',       score: 69,  priority: 'high'   },
    { name: 'Immunology',       score: 92,  priority: 'skip'   },
    { name: 'Musculoskeletal',  score: 72,  priority: 'high'   },
    { name: 'Neurological',     score: 76,  priority: 'medium' },
    { name: 'Psychiatric',      score: 81,  priority: 'medium' },
    { name: 'Reproductive',     score: 100, priority: 'skip'   },
    { name: 'Respiratory',      score: 70,  priority: 'high'   }
  ],

  skipDomains: ['Reproductive', 'Immunology', 'Integumentary'],

  sections: [

    /* ── Section 1: Clinical Reasoning Foundation ── */
    {
      id: 1,
      title: 'Clinical Reasoning Foundation',
      items: [
        {
          type: 'deflist',
          title: 'What the CEA is testing',
          pairs: [
            { term: 'Format',    def: '150 multiple-choice questions across 3 sequential 50-question components in one sitting' },
            { term: 'Purpose',   def: 'Assesses readiness for clinical practice — not just recall but application and clinical reasoning' },
            { term: 'Benchmark', def: 'Passing threshold set by APEA; scores are reported by domain so you see exactly where gaps are' },
            { term: 'Context',   def: 'Taken during NR511; results count toward your clinical evaluation grade' }
          ]
        },
        {
          type: 'tip',
          text: 'CEA questions are always clinical vignettes. A patient scenario comes first, then the question. Anchor every answer to the clinical picture — never answer from isolated facts.'
        },
        {
          type: 'deflist',
          title: 'Clinical Reasoning Model',
          pairs: [
            { term: 'Pattern recognition',      def: 'Match presentation to classic disease patterns — fast and useful for high-yield diagnoses you\'ve seen before' },
            { term: 'Hypothesis-driven DDx',    def: 'Generate a differential, then use history and labs to narrow it — this is the core NP clinical skill the CEA tests' },
            { term: 'Illness scripts',           def: 'Know epidemiology + pathophysiology + key findings for each diagnosis — builds rapid, accurate DDx generation' },
            { term: 'Test characteristics',     def: 'Know sensitivity vs. specificity for common tests — CEA loves "best next step" and "most appropriate test" question stems' },
            { term: 'Disposition reasoning',    def: 'Outpatient vs. ED vs. admit decisions appear frequently — know when to refer and why' }
          ]
        },
        {
          type: 'critical',
          text: 'The CEA penalizes domain knowledge gaps, not time management. You cannot bank time between the three 50-question components — each block runs on its own timer. Do not rush any block hoping to save time for the next.'
        }
      ]
    },

    /* ── Section 2: The 3P Components Explained ── */
    {
      id: 2,
      title: 'The 3P Components Explained',
      items: [
        {
          type: 'system',
          title: 'Component 1 — Primary Care Across the Lifespan',
          color: 'teal',
          points: [
            'Pediatric through geriatric acute presentations — chest pain, dyspnea, abdominal pain, cough',
            'Chronic disease management: DM2, HTN, HLD, asthma, COPD — diagnosis and first-line management',
            'Preventive care and USPSTF screening guidelines (colonoscopy, mammography, lung LDCT, Pap)',
            'Heaviest domain representation: Cardiovascular, Respiratory, GI',
            'Expect vignettes where you must pick the correct first-line treatment or next diagnostic step'
          ]
        },
        {
          type: 'system',
          title: 'Component 2 — Health Promotion & Disease Prevention',
          color: 'purple',
          points: [
            'Adult and pediatric immunization schedules — know indications, intervals, and contraindications',
            'Cancer screening: who, what test, what interval (USPSTF grades A and B)',
            'Behavioral counseling: tobacco cessation (varenicline, NRT), obesity (5% weight loss target), alcohol (AUDIT-C)',
            'Mental health screening tools: PHQ-9 (depression), GAD-7 (anxiety), AUDIT-C (alcohol), CAGE',
            'Social determinants of health and their clinical impact — lighter component overall'
          ]
        },
        {
          type: 'system',
          title: 'Component 3 — Complex & Specialty Cases',
          color: 'amber',
          points: [
            'Multi-system presentations and comorbidities — the most cognitively demanding component',
            'Endocrine: DM2 complications (neuropathy, nephropathy, retinopathy), thyroid disorders, Cushing\'s, adrenal insufficiency',
            'Hematology: complete anemia workup algorithm, anticoagulation decisions (CHA2DS2-VASc, Wells)',
            'Referral and co-management decisions — know when a primary care NP refers vs. manages',
            'Pharmacology: drug interactions, drug choice in pregnancy, renal/hepatic dose adjustment'
          ]
        },
        {
          type: 'tip',
          text: 'Component 3 is where most students lose points. It tests integration across systems, not isolated facts. Study by case type (e.g., "DM2 patient presenting with new fatigue") rather than memorizing lists.'
        },
        {
          type: 'table',
          title: 'Component Breakdown at a Glance',
          headers: ['Component', 'Questions', 'Primary Domains', 'Relative Difficulty'],
          rows: [
            ['1 — Primary Care Lifespan',  '50', 'Cardiovascular, Respiratory, GI, HEENT', 'Moderate'],
            ['2 — Health Promotion',       '50', 'Psych, Preventive, Repro, Immunology',   'Lower'],
            ['3 — Complex Cases',          '50', 'Endocrine, Hematology, MSK, Multi-system','Higher']
          ]
        }
      ]
    },

    /* ── Section 3: High-Yield System Essentials ── */
    {
      id: 3,
      title: 'High-Yield System Essentials',
      items: [
        {
          type: 'system',
          title: 'Cardiovascular — Domain Score 74% · Focus',
          color: 'red',
          points: [
            'Chest pain DDx: ACS vs. GERD vs. PE vs. musculoskeletal vs. anxiety — use onset, character, radiation, and relieving factors to differentiate',
            'STEMI management: aspirin 325 mg + immediate PCI activation; door-to-balloon goal <90 min',
            'Heart failure: BNP elevated, bilateral crackles, JVD, S3, pitting edema — first-line: ACEi + BB + diuretic',
            'HTN first-line: thiazide or ACEi/ARB; if DM add ACEi; if Black patient prefer thiazide or CCB (ACEi less effective monotherapy)',
            'AFib: rate control (BB or non-DHP CCB) vs. rhythm; anticoagulate if CHA2DS2-VASc ≥2 in women, ≥1 in men — DOACs preferred over warfarin for non-valvular AFib'
          ]
        },
        {
          type: 'system',
          title: 'Gastrointestinal — Domain Score 73% · Focus',
          color: 'amber',
          points: [
            'Abdominal pain location guides DDx: RUQ = cholecystitis/hepatitis; RLQ = appendicitis; epigastric = PUD/pancreatitis; LLQ = diverticulitis',
            'H. pylori: diagnose with urea breath test or stool antigen (not serology); treat with PPI + clarithromycin + amoxicillin x14 days',
            'GERD: lifestyle first; PPI for persistent symptoms; alarm features (dysphagia, odynophagia, hematemesis, unintentional weight loss) → EGD',
            'IBS vs. IBD: IBS has no blood, normal CRP, symptom-based Rome IV criteria; IBD has blood/mucus, elevated CRP, colonoscopy required',
            'Acute hepatitis: LFTs + hep A IgM, HBsAg/anti-HBc, HCV Ab; ultrasound for structure; most acute viral hepatitis is supportive'
          ]
        },
        {
          type: 'system',
          title: 'HEENT — Domain Score 71% · Focus',
          color: 'teal',
          points: [
            'Strep pharyngitis: Centor criteria (exudate, tender anterior LAD, fever, no cough) — 3-4 criteria → RADT or treat empirically; first-line amoxicillin or penicillin V',
            'Otitis media: most are viral in adults — antibiotics only if bilateral OM, perforation with drainage, or age <2 with fever; first-line amoxicillin',
            'Sinusitis: viral if <10 days; bacterial if >10 days or worsens after initial improvement — first-line amoxicillin-clavulanate',
            'Red eye DDx: viral (watery, itchy, follicular), bacterial (purulent, matting), allergic (bilateral itch, clear), glaucoma (painful, halos, rock-hard eye) — glaucoma is a same-day emergency',
            'Hearing loss: Weber and Rinne differentiate conductive (Weber to bad ear, Rinne BC>AC) vs. sensorineural (Weber to good ear, Rinne AC>BC)'
          ]
        },
        {
          type: 'system',
          title: 'Hematology — Domain Score 69% · Focus',
          color: 'purple',
          points: [
            'Anemia algorithm: MCV first — microcytic (<80): IDA, thalassemia, ACD; normocytic (80-100): ACD, CKD, acute blood loss; macrocytic (>100): B12/folate, hypothyroid, meds',
            'Iron deficiency: low ferritin (most specific), low MCV, high RDW, high TIBC, low serum iron — oral iron 150-200 mg elemental iron/day',
            'B12 deficiency: macrocytic anemia + subacute combined degeneration (dorsal column + corticospinal tract) — seen in vegans, elderly, long-term metformin use',
            'Anemia of CKD: normocytic, low reticulocytes, normal-to-high ferritin, low TIBC — treat with EPO-stimulating agents when Hgb <10',
            'Anticoagulation: warfarin (INR 2-3) for mechanical valves; DOACs preferred for non-valvular AFib and VTE; DOACs contraindicated with mechanical heart valves'
          ]
        },
        {
          type: 'system',
          title: 'Musculoskeletal — Domain Score 72% · Focus',
          color: 'navy',
          points: [
            'Knee DDx: medial meniscus (McMurray positive, joint-line tenderness), ACL tear (anterior drawer/Lachman positive), OA (elderly, crepitus, end-of-day pain)',
            'Low back pain: image only with red flags — new neurologic deficit, bowel/bladder change, saddle anesthesia, fever, cancer history, or no improvement at 6 weeks',
            'Gout: asymmetric joint, first MTP classic, elevated uric acid — acute: NSAIDs or colchicine; do NOT start allopurinol during acute flare',
            'RA vs. OA: RA (morning stiffness >1 hour, symmetric, MCP/PIP, RF/anti-CCP positive); OA (end-of-day, asymmetric, DIP/weight-bearing joints, no systemic markers)',
            'Shoulder: rotator cuff (painful arc 60-120°, Neer + Hawkins positive), frozen shoulder (global ROM loss all planes), AC joint (cross-body adduction pain)'
          ]
        },
        {
          type: 'system',
          title: 'Respiratory — Domain Score 70% · Focus',
          color: 'blue',
          points: [
            'Asthma vs. COPD: asthma (reversible obstruction, IgE-mediated, younger, atopic); COPD (irreversible, smoking hx, barrel chest, older); both can coexist (ACOS)',
            'Asthma step-up: Step 1 (SABA PRN) → 2 (low-ICS) → 3 (medium-ICS or ICS+LABA) → 4 (high-ICS+LABA) → 5 (add-on therapy/biologics)',
            'COPD GOLD A/B: LAMA monotherapy first-line; GOLD E: ICS+LABA+LAMA; roflumilast for FEV1<50% + frequent exacerbations with chronic bronchitis',
            'CAP: CURB-65 or PSI to stratify; outpatient healthy adult → azithromycin or doxycycline; outpatient with comorbidities → amoxicillin-clavulanate + macrolide or respiratory FQ',
            'PE: Wells score → D-dimer (low probability) or CTPA directly (high probability); treat with DOAC (rivaroxaban, apixaban) unless hemodynamically unstable → IV heparin + consider thrombolysis'
          ]
        }
      ]
    },

    /* ── Section 4: 25 Practice Questions ── */
    {
      id: 4,
      title: '25 Practice Questions',
      items: [
        {
          type: 'questions',
          questions: [
            {
              id: 'q1',
              stem: 'A 58-year-old male presents with sudden-onset severe chest pain radiating to the left arm, diaphoresis, and nausea for 45 minutes. BP 158/96, HR 102. ECG shows ST elevation in leads II, III, and aVF. What is the most appropriate immediate next step?',
              opts: [
                'Administer aspirin 325 mg and activate the cardiac catheterization lab',
                'Start IV nitroglycerin drip and admit for observation',
                'Obtain troponin levels and repeat ECG in 2 hours',
                'Administer morphine and supplemental oxygen, then reassess'
              ],
              correct: 0,
              rationale: 'Inferior STEMI (ST elevation in II, III, aVF). Priority is rapid reperfusion — aspirin plus immediate cath lab activation for primary PCI. Door-to-balloon goal is <90 minutes. Waiting for troponins or delaying for repeat ECG wastes critical time when the diagnosis is already clear on 12-lead.'
            },
            {
              id: 'q2',
              stem: 'A 32-year-old healthy woman presents with 3 days of productive cough, fever (38.1°C), and right-sided pleuritic chest pain. CXR shows a right lower lobe infiltrate. She has no allergies and takes no medications. CURB-65 score is 1. What is the most appropriate treatment?',
              opts: [
                'Azithromycin 500 mg daily for 5 days outpatient',
                'Hospitalize and start IV ceftriaxone plus azithromycin',
                'Levofloxacin 750 mg daily for 5 days outpatient',
                'Amoxicillin-clavulanate 875 mg twice daily for 7 days outpatient'
              ],
              correct: 0,
              rationale: 'Community-acquired pneumonia in a healthy young adult with CURB-65 of 1 is appropriate for outpatient treatment. IDSA/ATS guidelines recommend a macrolide (azithromycin) as first-line for outpatient CAP in otherwise healthy adults without recent antibiotic use or comorbidities. Levofloxacin is reserved for patients with comorbidities or recent antibiotic exposure. Hospitalization is not indicated at CURB-65 of 1.'
            },
            {
              id: 'q3',
              stem: 'A 45-year-old woman presents with fatigue, cold intolerance, constipation, and 12-lb weight gain over 6 months. Exam shows dry skin and delayed DTR relaxation. TSH is 8.4 mIU/L; free T4 is 0.6 ng/dL. What is the most likely diagnosis?',
              opts: [
                'Primary hypothyroidism',
                'Secondary hypothyroidism',
                'Subclinical hypothyroidism',
                'Sick euthyroid syndrome'
              ],
              correct: 0,
              rationale: 'Primary hypothyroidism: elevated TSH + low free T4 with classic symptoms (fatigue, cold intolerance, constipation, dry skin, weight gain, delayed DTR relaxation). Secondary hypothyroidism would show low TSH + low T4. Subclinical hypothyroidism has elevated TSH with normal T4 and minimal symptoms. Sick euthyroid occurs in acute illness with variable TSH and typically low T3.'
            },
            {
              id: 'q4',
              stem: 'A 22-year-old male has a sore throat, fever of 38.9°C, tonsillar exudates, and bilateral anterior cervical lymphadenopathy. He has no cough. RADT for Group A Strep is positive. He has no drug allergies. What is the most appropriate treatment?',
              opts: [
                'Amoxicillin 500 mg three times daily for 10 days',
                'Azithromycin 500 mg daily for 5 days',
                'No antibiotic — positive RADT may reflect carrier state',
                'Penicillin V 250 mg four times daily for 10 days'
              ],
              correct: 0,
              rationale: 'Confirmed Group A Strep pharyngitis (positive RADT with high Centor score) requires treatment to prevent rheumatic fever and reduce transmission. First-line is amoxicillin or penicillin V; amoxicillin is preferred in practice due to simpler dosing and palatability. Azithromycin is reserved for penicillin-allergic patients. A positive RADT (specificity >95%) in a symptomatic patient should be treated.'
            },
            {
              id: 'q5',
              stem: 'A 68-year-old man with 45 pack-years of smoking has chronic cough, increasing exertional dyspnea, and wheezing. Spirometry shows FEV1/FVC of 0.58 and FEV1 of 52% predicted. Bronchodilator response is <12%. What is the most appropriate initial maintenance pharmacotherapy?',
              opts: [
                'Long-acting muscarinic antagonist (LAMA) monotherapy',
                'Inhaled corticosteroid (ICS) monotherapy',
                'Short-acting beta-2 agonist (SABA) plus ICS combination',
                'Oral prednisone 40 mg daily'
              ],
              correct: 0,
              rationale: 'COPD GOLD Grade 2 (FEV1 50-79% predicted) with moderate symptoms. GOLD guidelines recommend a LAMA (e.g., tiotropium) as first-line maintenance therapy. ICS monotherapy is not recommended in COPD. SABA+ICS is an asthma regimen. Oral steroids are for acute exacerbations only — long-term use causes significant harm in COPD.'
            },
            {
              id: 'q6',
              stem: 'A 35-year-old woman presents with 8 hours of RLQ pain, nausea, and low-grade fever (37.8°C). She is sexually active, uses OCPs, LMP was 2 weeks ago. WBC is 13,200. Pregnancy test is negative. UA is negative. What is the most appropriate next step?',
              opts: [
                'CT abdomen/pelvis with IV contrast',
                'Obtain cervical cultures and treat empirically for PID',
                'Pelvic ultrasound only',
                'Emergent surgical consultation without imaging'
              ],
              correct: 0,
              rationale: 'RLQ pain with fever, leukocytosis, and negative pregnancy test makes appendicitis the leading diagnosis. CT abdomen/pelvis with contrast is the diagnostic test of choice for suspected appendicitis in adults (sensitivity 94-98%, specificity 95%). Pelvic ultrasound is preferred when pregnancy is possible or for primary OB/GYN pathology but is less sensitive for appendicitis. PID workup is reasonable but should not delay imaging for appendicitis.'
            },
            {
              id: 'q7',
              stem: 'A 72-year-old woman with hypertension and type 2 diabetes presents with 3 days of burning dysuria, frequency, and suprapubic discomfort. No fever, flank pain, or nausea. UA shows >10 WBC/hpf and bacteriuria. What is the most appropriate management?',
              opts: [
                'Nitrofurantoin 100 mg twice daily for 5 days',
                'TMP-SMX DS twice daily for 3 days',
                'Ciprofloxacin 500 mg twice daily for 7 days',
                'Collect urine culture and treat only when results return'
              ],
              correct: 0,
              rationale: 'Uncomplicated UTI in a woman. IDSA guidelines recommend nitrofurantoin as first-line due to low resistance rates and minimal impact on gut flora. TMP-SMX is acceptable if local resistance is <20%. Ciprofloxacin (fluoroquinolone) is reserved for complicated UTIs or pyelonephritis per stewardship guidelines. Clinical diagnosis + positive UA is sufficient to treat without waiting for culture in uncomplicated UTI.'
            },
            {
              id: 'q8',
              stem: 'A 28-year-old male describes "the worst headache of my life," sudden onset while lifting, 2 hours ago. He has neck stiffness. Temp 37.1°C, BP 138/84, GCS 15. What is the most critical next step?',
              opts: [
                'Non-contrast CT of the head',
                'Immediate lumbar puncture',
                'IV ketorolac and reassessment in 1 hour',
                'CBC, CMP, and ESR'
              ],
              correct: 0,
              rationale: 'Thunderclap headache ("worst headache of my life," sudden onset with exertion) with neck stiffness is subarachnoid hemorrhage until proven otherwise. Non-contrast CT head is the first step — sensitivity ~90-98% within 6 hours. LP is performed only if CT is negative to detect xanthochromia. Analgesics and reassessment are never appropriate when SAH is suspected. This is a neurosurgical emergency.'
            },
            {
              id: 'q9',
              stem: 'A 52-year-old man with BMI 34 and a family history of T2DM presents for a routine visit. He has no symptoms. Fasting glucose is 118 mg/dL, HbA1c is 6.1%, BP is 136/84. What is the most appropriate next step?',
              opts: [
                'Counsel on intensive lifestyle modification and recheck HbA1c in 3-6 months',
                'Start metformin 500 mg twice daily',
                'Repeat fasting glucose in one week to confirm prediabetes',
                'Refer to endocrinology for management'
              ],
              correct: 0,
              rationale: 'Prediabetes (FG 100-125 mg/dL, HbA1c 5.7-6.4%). First-line is intensive lifestyle modification: 7% body weight loss + 150 min/week moderate exercise — reduces T2DM progression by ~58% in DPP trial. Metformin is an ADA adjunct recommendation for high-risk individuals (BMI >35, age <60) but lifestyle change is the primary recommendation. Diagnosis is already confirmed — no need to repeat the glucose.'
            },
            {
              id: 'q10',
              stem: 'A 38-year-old woman has 6 months of bilateral MCP and PIP joint swelling, 90-minute morning stiffness, and fatigue. ESR 68 mm/hr, RF positive, anti-CCP positive. What is the most likely diagnosis?',
              opts: [
                'Rheumatoid arthritis',
                'Osteoarthritis',
                'Systemic lupus erythematosus',
                'Psoriatic arthritis'
              ],
              correct: 0,
              rationale: 'Rheumatoid arthritis: symmetric small-joint inflammatory arthritis (MCP, PIP, wrists), morning stiffness >1 hour, positive RF and anti-CCP (most specific marker), elevated inflammatory markers. OA causes end-of-day stiffness, affects DIP joints and weight-bearing joints, has no serologic markers. SLE can cause arthritis but requires additional criteria (ANA, rash, etc.). Psoriatic arthritis is typically asymmetric and associated with skin or nail changes.'
            },
            {
              id: 'q11',
              stem: 'A 65-year-old man with CKD (GFR 34) has Hgb 9.8 g/dL, MCV 82 fL, low reticulocyte count. Iron studies: ferritin 185, serum iron 58, TIBC 210. What is the most likely cause of his anemia?',
              opts: [
                'Anemia of chronic kidney disease',
                'Iron deficiency anemia',
                'Beta-thalassemia trait',
                'Vitamin B12 deficiency'
              ],
              correct: 0,
              rationale: 'Anemia of CKD: normocytic, low reticulocytes, normal-to-high ferritin, normal-low iron, low TIBC — due to reduced EPO production. Iron deficiency shows low ferritin, high TIBC, low serum iron, and elevated RDW. Thalassemia trait is microcytic with normal/elevated ferritin and is hereditary. B12 deficiency causes macrocytic anemia often with neurologic symptoms.'
            },
            {
              id: 'q12',
              stem: 'A 55-year-old obese woman has episodic RUQ pain after fatty meals, nausea, and occasional vomiting lasting 2-4 hours. No fever. Normal LFTs. What is the most appropriate next diagnostic step?',
              opts: [
                'Right upper quadrant ultrasound',
                'CT abdomen with contrast',
                'HIDA scan',
                'Upper endoscopy'
              ],
              correct: 0,
              rationale: 'Classic biliary colic: postprandial RUQ pain, nausea, triggered by fatty meals, no fever. RUQ ultrasound is the first-line imaging for suspected gallstones — sensitivity ~95% for cholelithiasis, non-invasive, no radiation. CT is used for complications or when US is equivocal. HIDA scan assesses gallbladder ejection fraction when US is negative but symptoms persist (acalculous disease). Upper endoscopy evaluates esophageal/gastric pathology.'
            },
            {
              id: 'q13',
              stem: 'A 19-year-old male has 2 days of bilateral eye redness, watery discharge, and itching. His right eye started yesterday, left eye today. No eye pain, photophobia, or vision changes. He has a history of seasonal allergies. What is the most likely diagnosis and treatment?',
              opts: [
                'Allergic conjunctivitis — topical antihistamine/mast cell stabilizer drops',
                'Viral conjunctivitis — supportive care and artificial tears',
                'Bacterial conjunctivitis — topical fluoroquinolone drops',
                'Chlamydial conjunctivitis — oral azithromycin'
              ],
              correct: 0,
              rationale: 'Bilateral itching, watery discharge, and allergy history strongly indicate allergic conjunctivitis. Treatment: topical antihistamine/mast cell stabilizer (e.g., olopatadine). Viral conjunctivitis follows URI, itch is less prominent. Bacterial conjunctivitis causes purulent, matted discharge. Chlamydial conjunctivitis presents in sexually active adults with chronic follicular conjunctivitis.'
            },
            {
              id: 'q14',
              stem: 'A 42-year-old male smoker who immigrated from Vietnam presents with 3 weeks of cough, low-grade fever, night sweats, and 10-lb weight loss. CXR shows a right upper lobe cavitary infiltrate. What is the priority next step?',
              opts: [
                'Place in airborne isolation and obtain sputum for AFB smear and culture',
                'Start empiric antibiotics for community-acquired pneumonia',
                'Order a QuantiFERON Gold blood test',
                'CT chest with contrast to characterize the lesion'
              ],
              correct: 0,
              rationale: 'Classic pulmonary tuberculosis: immigrant from endemic country, upper lobe cavitary lesion, constitutional symptoms. Airborne isolation is the immediate priority — TB is transmitted by airborne droplets and precautions must be implemented before diagnostic confirmation. Sputum AFB smear x3 is the diagnostic first step. QuantiFERON tests for latent TB but does not diagnose active disease. CT is useful but isolation and smears come first.'
            },
            {
              id: 'q15',
              stem: 'A 29-year-old woman has 4 weeks of depressed mood most of the day, anhedonia, insomnia, poor concentration, fatigue, and feelings of worthlessness. PHQ-9 score is 16. No prior manic episodes. She denies suicidal ideation. What is the most appropriate initial treatment?',
              opts: [
                'Start an SSRI and schedule follow-up in 4-6 weeks',
                'Refer to psychiatry before initiating any treatment',
                'Cognitive behavioral therapy alone without medication',
                'Start a tricyclic antidepressant as first-line'
              ],
              correct: 0,
              rationale: 'PHQ-9 of 16 = moderately severe MDD. First-line treatment is SSRI (e.g., sertraline, escitalopram) often combined with psychotherapy. SSRIs are first-line due to efficacy, tolerability, and safety in overdose. Psychiatry referral is appropriate for refractory, psychotic, or bipolar depression — not required before initiating first-line treatment for uncomplicated MDD. TCAs are not first-line due to side effects and lethality risk in overdose.'
            },
            {
              id: 'q16',
              stem: 'A 58-year-old current smoker with a 30 pack-year history asks about lung cancer screening. Which best describes current USPSTF recommendations?',
              opts: [
                'Annual low-dose CT for adults 50-80 years with 20 pack-year history who currently smoke or quit within 15 years',
                'Annual chest X-ray for adults over 50 with any smoking history',
                'Annual low-dose CT only for current smokers with >30 pack-year history',
                'No screening recommended — benefits do not outweigh harms'
              ],
              correct: 0,
              rationale: 'USPSTF 2021 (Grade B): Annual LDCT for adults 50-80 years with ≥20 pack-year smoking history who currently smoke or quit within the past 15 years. This expanded the prior criteria (55-80 years, 30 pack-years). This patient qualifies: age 58, 30 pack-years, current smoker. Chest X-ray has no proven benefit for lung cancer screening. LDCT reduces lung cancer mortality ~20% in high-risk individuals.'
            },
            {
              id: 'q17',
              stem: 'A 73-year-old man with HTN and hyperlipidemia reports sudden painless loss of vision in his left eye, "like a curtain coming down." Fundoscopy shows retinal pallor with a cherry-red spot at the fovea. What is this most likely diagnosis?',
              opts: [
                'Central retinal artery occlusion',
                'Central retinal vein occlusion',
                'Retinal detachment',
                'Acute angle-closure glaucoma'
              ],
              correct: 0,
              rationale: 'CRAO: sudden painless monocular vision loss with cherry-red spot (fovea appears red against pale ischemic retina). Arterial risk factors (HTN, HLD). Ocular emergency — immediate ophthalmology referral. Retinal vein occlusion shows "blood and thunder" fundus with flame hemorrhages and disc edema. Retinal detachment shows a mobile grey veil on fundoscopy. Glaucoma presents with painful red eye, halos, and elevated intraocular pressure.'
            },
            {
              id: 'q18',
              stem: 'A 48-year-old man woke with overnight-onset painful, swollen, warm first MTP joint. He drinks 6 beers per week and takes HCTZ for HTN. Uric acid is 9.2 mg/dL. What is the most appropriate acute treatment?',
              opts: [
                'Indomethacin 50 mg three times daily for 5-7 days',
                'Start allopurinol 100 mg daily immediately',
                'Colchicine 0.6 mg twice daily and start allopurinol concurrently',
                'Prednisone 40 mg daily for 5 days'
              ],
              correct: 0,
              rationale: 'Acute gout — first MTP joint (podagra), elevated uric acid, HCTZ and alcohol as triggers. NSAIDs (indomethacin, naproxen) are first-line for acute gout if no contraindications. Allopurinol must NEVER be started during an acute flare — it can prolong or worsen the attack by mobilizing urate crystals. Colchicine is an alternative if NSAIDs are contraindicated. Prednisone is used when both NSAIDs and colchicine are contraindicated (e.g., significant renal impairment).'
            },
            {
              id: 'q19',
              stem: 'At a 15-month well-child visit, a mother reports her son has no words, does not respond to his name, does not point at objects, avoids eye contact, and repeatedly lines up his toy cars. What is the most appropriate next step?',
              opts: [
                'Refer for comprehensive developmental evaluation and early intervention services',
                'Reassure the mother that boys develop language later and recheck at 18 months',
                'Refer to speech therapy only',
                'Order a hearing test and recheck in 3 months'
              ],
              correct: 0,
              rationale: 'Multiple ASD red flags at 15 months: no words, failure to respond to name, no pointing (joint attention deficit), poor eye contact, and repetitive behaviors. When clear ASD red flags are present, do not wait — refer immediately for comprehensive developmental evaluation AND early intervention services. A hearing test is appropriate but should not delay or replace comprehensive evaluation. Reassurance is inappropriate given this constellation of red flags.'
            },
            {
              id: 'q20',
              stem: 'A 62-year-old woman with non-valvular AFib, HTN, T2DM, and prior stroke (CHA2DS2-VASc 6) is on warfarin and asks about switching to a DOAC. Which of the following would be a contraindication to DOAC use?',
              opts: [
                'Mechanical heart valve prosthesis',
                'Prior ischemic stroke',
                'Age greater than 60',
                'Hypertension'
              ],
              correct: 0,
              rationale: 'DOACs (dabigatran, rivaroxaban, apixaban, edoxaban) are contraindicated in patients with mechanical heart valve prostheses — these patients require warfarin (RE-ALIGN trial showed dabigatran inferior). Prior stroke, age >60, and hypertension are not contraindications to DOACs — they are actually risk factors that support anticoagulation, and DOACs are generally preferred over warfarin for non-valvular AFib due to lower intracranial hemorrhage risk and no INR monitoring.'
            },
            {
              id: 'q21',
              stem: 'A 35-year-old woman has episodic palpitations, sweating, and anxiety over 2 months. She has lost 8 lbs unintentionally. BP is 168/98, HR 94. Exam shows fine tremor and lid lag. TSH is 0.04 mIU/L, free T4 is 3.8 ng/dL. What is the most likely diagnosis?',
              opts: [
                'Hyperthyroidism (Graves\' disease)',
                'Pheochromocytoma',
                'Panic disorder',
                'Carcinoid syndrome'
              ],
              correct: 0,
              rationale: 'Suppressed TSH + elevated free T4 with palpitations, tremor, weight loss, lid lag, HTN, and tachycardia confirms hyperthyroidism. Graves\' disease is the most common cause in a young woman. Pheochromocytoma causes episodic HTN with the "3 Hs" (headache, hypertension, hyperhidrosis) but thyroid labs confirm thyroid etiology here. Panic disorder is a diagnosis of exclusion — always rule out thyroid disease first. Carcinoid causes flushing and diarrhea with elevated urinary 5-HIAA.'
            },
            {
              id: 'q22',
              stem: 'A 44-year-old man has 2 weeks of low back pain after lifting boxes. Pain is 6/10, worsens with movement, improves with rest. No leg radiation, no neurologic deficits, no bowel/bladder changes, no fever. Straight leg raise is negative. What is the most appropriate management?',
              opts: [
                'NSAIDs, activity as tolerated, and follow-up in 4-6 weeks',
                'MRI of the lumbar spine',
                'Referral to orthopedics',
                'Opioids for adequate pain control'
              ],
              correct: 0,
              rationale: 'Acute uncomplicated low back pain without red flags is managed conservatively. NSAIDs are first-line analgesics; activity as tolerated is superior to bed rest. Imaging is not indicated in the first 4-6 weeks without red flags (new neurologic deficit, bowel/bladder change, fever, cancer history, age >50 with trauma, saddle anesthesia). Opioids are not recommended for acute uncomplicated LBP. Most cases resolve within 4-6 weeks.'
            },
            {
              id: 'q23',
              stem: 'A 50-year-old woman has total cholesterol 235, LDL 158, HDL 52, TG 125. Her calculated 10-year ASCVD risk is 9%. She has hypertension and does not smoke. What is the most appropriate next step for her lipid levels?',
              opts: [
                'Lifestyle modification and shared decision-making about moderate-intensity statin initiation',
                'Start high-intensity statin immediately',
                'No intervention — 10-year risk is below 10%',
                'Start a bile acid sequestrant as first-line'
              ],
              correct: 0,
              rationale: 'Per ACC/AHA guidelines, for primary prevention with 10-year ASCVD risk 7.5-10% (borderline to intermediate risk), a clinician-patient shared decision-making discussion should occur about moderate-intensity statin therapy. Lifestyle modification is always recommended first. A risk of 9% does not automatically mandate statin initiation — the discussion should include risk-enhancing factors, patient preference, and benefits vs. risks. High-intensity statins are for established ASCVD or risk >20%. Bile acid sequestrants are second-line agents.'
            },
            {
              id: 'q24',
              stem: 'A 3-year-old girl has 12 hours of barky, seal-like cough, mild inspiratory stridor at rest, and low-grade fever (38.2°C). She is alert and playing. SpO2 is 97%. What is the most appropriate management?',
              opts: [
                'Dexamethasone 0.6 mg/kg PO single dose and discharge with return precautions',
                'Nebulized racemic epinephrine and 2-3 hour observation',
                'Intubation for airway protection',
                'Amoxicillin for presumed bacterial tracheitis'
              ],
              correct: 0,
              rationale: 'Moderate croup (laryngotracheobronchitis): barky cough, stridor at rest, but alert and well-oxygenated. Dexamethasone 0.6 mg/kg PO single dose reduces severity and duration and is the standard of care for moderate-to-severe croup — safe for outpatient discharge with return precautions. Nebulized epinephrine is for severe croup (marked stridor, significant retractions) and requires 2-3 hours of post-treatment observation. Intubation is for impending respiratory failure. Bacterial tracheitis presents with high fever and toxic appearance.'
            },
            {
              id: 'q25',
              stem: 'A 25-year-old woman has 3 months of bloating, crampy abdominal pain that improves with defecation, and alternating constipation/diarrhea. No blood in stool, no weight loss, no fever. CBC normal, CRP 0.4, TSH normal. What is the most likely diagnosis and next step?',
              opts: [
                'IBS — Rome IV criteria met; treat with dietary modification (low-FODMAP) and follow-up',
                'IBD — colonoscopy needed to differentiate Crohn\'s from UC',
                'Celiac disease — obtain anti-tTG IgA and total IgA',
                'Colorectal cancer — colonoscopy for definitive diagnosis'
              ],
              correct: 0,
              rationale: 'Rome IV IBS criteria: recurrent abdominal pain ≥1 day/week for >3 months, associated with ≥2 of: related to defecation, change in stool frequency, change in stool form. Normal CRP, no blood, no alarm features (weight loss, fever, family history of IBD/colon cancer, age >50, rectal bleeding) make IBD and malignancy unlikely. IBS is a clinical diagnosis. Low-FODMAP diet is first-line non-pharmacologic treatment. Colonoscopy and celiac workup are appropriate only if alarm features are present or initial treatment fails.'
            }
          ]
        }
      ]
    },

    /* ── Section 5: Exam Day Strategy ── */
    {
      id: 5,
      title: 'Exam Day Strategy',
      items: [
        {
          type: 'deflist',
          title: 'Timing & Pacing',
          pairs: [
            { term: '3 blocks of 50',  def: 'Each component has its own timer. Aim for ~72 seconds per question. You cannot transfer time between blocks.' },
            { term: 'Flag strategy',   def: 'Flag uncertain questions and keep moving. Never spend more than 2 minutes on a single question before moving on and flagging.' },
            { term: 'Between blocks',  def: 'Take 5 minutes to stand, hydrate, and breathe before the next block. Do not review answers from the previous block.' },
            { term: 'First instinct',  def: 'Change answers only when you can identify a specific reason, not anxiety. First instinct is correct ~60% when you are guessing.' }
          ]
        },
        {
          type: 'deflist',
          title: 'Question Dissection Strategy',
          pairs: [
            { term: 'Read last sentence first', def: 'Identify what is being asked (diagnosis? next step? treatment?) before reading the vignette — this focuses your reading' },
            { term: 'Anchor to the patient',    def: 'Every correct answer must fit the specific patient in the vignette — epidemiology, comorbidities, and contraindications all matter' },
            { term: 'Eliminate extremes',       def: 'Very aggressive answers (emergent surgery, immediate intubation) are wrong unless explicit hemodynamic instability is described' },
            { term: 'Distractor pattern',       def: 'Distractors often present the right drug for the wrong situation — know the indication, not just the drug name' }
          ]
        },
        {
          type: 'tip',
          text: 'The CEA mirrors real clinical decision-making. When two answers seem equally correct, choose the one that is safest and most evidence-based — the option a supervising attending would choose in a primary care setting.'
        },
        {
          type: 'critical',
          text: 'Do not study new material the night before. Review your domain bar scores, note your weakest 3 domains, then sleep for 7-8 hours. Fatigue impairs clinical reasoning far more than a single missed fact on a 150-question exam.'
        },
        {
          type: 'table',
          title: 'Exam Day Checklist',
          headers: ['When', 'Action'],
          rows: [
            ['Night before',  'Review domain bars only, lay out materials, set alarm, sleep 7-8 hours'],
            ['Morning of',    'Eat a protein-containing breakfast, arrive early, no last-minute cramming'],
            ['Before Block 1','Read all instructions carefully, note your start time, establish your pace'],
            ['End of Block 1','Take a 5-minute mental reset — stand, hydrate, do not review answers'],
            ['End of Block 2','Second reset — acknowledge that Block 3 is the hardest and prepare mentally'],
            ['During Block 3','Maintain your pace, flag uncertain items, circle back at the end of the block']
          ]
        }
      ]
    }

  ]
};
