/* ============================================================
   data/system-1.js
   Abdominal Assessment — all concepts, questions, drill data
   Bates' Ch. 9 & 17–18 | NR509 Final Weeks 5–6
   ============================================================ */

const SYSTEM_DATA = {
  num:      1,
  title:    'Abdominal Assessment',
  bates:    "Bates' Ch. 9 & 17–18",
  week:     'Final Weeks 5–6',
  ihuman:   'Dorothy Jones',
  vignette: 'A 22-year-old male presents with 18 hours of pain that started around his belly button and has since moved to his lower right side. He has not eaten since yesterday.',
  tags:     ["Bates' 8th Ed. Ch. 9 & 17", 'NR509 Final Weeks 5–6', '6 high-yield concepts'],

  concepts: [

    // ── CONCEPT 1: MURPHY'S SIGN ──────────────────────────
    {
      id:        'murphys',
      name:      "Murphy's Sign",
      batesPage: 'p. 348',
      svg1: {
        label: 'Biliary anatomy — gallbladder position & hook point',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <path d="M20,55 Q80,35 160,40 Q240,35 300,55" fill="none" stroke="#BDB5AC" stroke-width="2.5" stroke-linecap="round"/>
  <text x="25" y="50" font-family="DM Sans,sans-serif" font-size="9" fill="#9B9890">Diaphragm</text>
  <path d="M30,58 Q50,52 100,54 Q160,52 200,58 Q220,65 225,80 Q228,95 210,108 Q190,120 160,122 Q120,124 90,118 Q60,110 40,95 Q25,80 30,58 Z" fill="#D4856A" opacity=".22" stroke="#C07055" stroke-width="1.5"/>
  <text x="110" y="90" font-family="DM Serif Display,serif" font-size="14" fill="#A05040" text-anchor="middle" font-style="italic">Liver</text>
  <ellipse cx="175" cy="130" rx="22" ry="14" fill="#5BADB5" opacity=".28" stroke="#0D7377" stroke-width="2"/>
  <text x="175" y="134" font-family="DM Sans,sans-serif" font-size="9" fill="#0D7377" text-anchor="middle" font-weight="600">Gallbladder</text>
  <path d="M155,120 L148,145 L145,165" fill="none" stroke="#0D7377" stroke-width="2" stroke-linecap="round"/>
  <path d="M175,144 Q162,152 148,145" fill="none" stroke="#0D7377" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M145,165 L143,195" fill="none" stroke="#0D7377" stroke-width="2" stroke-linecap="round"/>
  <text x="122" y="142" font-family="DM Sans,sans-serif" font-size="8.5" fill="#5F5D57">Common</text>
  <text x="122" y="151" font-family="DM Sans,sans-serif" font-size="8.5" fill="#5F5D57">hepatic duct</text>
  <text x="122" y="172" font-family="DM Sans,sans-serif" font-size="8.5" fill="#5F5D57">Common bile duct</text>
  <path d="M100,200 Q140,192 180,196 Q210,196 230,202 Q215,210 180,208 Q140,208 100,210 Z" fill="#E8C87A" opacity=".35" stroke="#C4A840" stroke-width="1.2"/>
  <text x="165" y="205" font-family="DM Sans,sans-serif" font-size="9" fill="#8B7020" text-anchor="middle">Pancreas</text>
  <circle cx="198" cy="115" r="7" fill="#E8A020" opacity=".9"/>
  <text x="198" y="118.5" font-family="DM Sans,sans-serif" font-size="8" fill="#fff" text-anchor="middle" font-weight="700">M</text>
  <text x="210" y="110" font-family="DM Sans,sans-serif" font-size="8" fill="#E8A020" font-weight="600">Murphy's</text>
  <text x="210" y="119" font-family="DM Sans,sans-serif" font-size="8" fill="#E8A020" font-weight="600">hook point</text>
  <path d="M20,105 Q100,95 160,100 Q200,103 240,108" fill="none" stroke="#BDB5AC" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="22" y="100" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890">Costal margin</text>
</svg>`,
        caption: 'Biliary anatomy — gallbladder sits just below the costal margin, accessible via the Murphy\'s hook technique (M)'
      },
      svg2: {
        label: 'Abdominal quadrants with Murphy\'s point',
        markup: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <ellipse cx="150" cy="125" rx="118" ry="102" fill="#FFF8F5" stroke="#D4C5BE" stroke-width="1.8"/>
  <path d="M42,82 Q75,65 115,72" fill="none" stroke="#BDB5AC" stroke-width="2" stroke-linecap="round"/>
  <path d="M185,72 Q225,65 258,82" fill="none" stroke="#BDB5AC" stroke-width="2" stroke-linecap="round"/>
  <line x1="115" y1="72" x2="185" y2="72" stroke="#BDB5AC" stroke-width="2"/>
  <line x1="150" y1="55" x2="150" y2="228" stroke="#D4C5BE" stroke-width="1" stroke-dasharray="5,4"/>
  <line x1="42" y1="148" x2="258" y2="148" stroke="#D4C5BE" stroke-width="1" stroke-dasharray="5,4"/>
  <text x="88"  y="100" font-family="DM Sans,sans-serif" font-size="10" fill="#9B9890" text-anchor="middle" font-weight="600">RUQ</text>
  <text x="212" y="100" font-family="DM Sans,sans-serif" font-size="10" fill="#9B9890" text-anchor="middle" font-weight="600">LUQ</text>
  <text x="88"  y="185" font-family="DM Sans,sans-serif" font-size="10" fill="#9B9890" text-anchor="middle" font-weight="600">RLQ</text>
  <text x="212" y="185" font-family="DM Sans,sans-serif" font-size="10" fill="#9B9890" text-anchor="middle" font-weight="600">LLQ</text>
  <path d="M48,85 Q70,76 112,80 Q148,80 150,100 Q130,115 95,114 Q62,112 48,98 Z" fill="#D4856A" opacity=".2" stroke="#C07055" stroke-width="1.2"/>
  <text x="95" y="98" font-family="DM Sans,sans-serif" font-size="9" fill="#A05040" text-anchor="middle" font-style="italic">Liver</text>
  <ellipse cx="118" cy="114" rx="11" ry="7" fill="#5BADB5" opacity=".35" stroke="#0D7377" stroke-width="1.5"/>
  <text x="118" y="130" font-family="DM Sans,sans-serif" font-size="7.5" fill="#0D7377" text-anchor="middle">GB</text>
  <path d="M165,80 Q190,75 215,82 Q225,90 218,105 Q205,112 185,110 Q168,105 165,95 Z" fill="#B09898" opacity=".22" stroke="#906868" stroke-width="1.2"/>
  <text x="192" y="97" font-family="DM Sans,sans-serif" font-size="9" fill="#806060" text-anchor="middle" font-style="italic">Spleen</text>
  <circle cx="98" cy="178" r="6" fill="#E88060" opacity=".3" stroke="#C05030" stroke-width="1.2"/>
  <text x="98" y="196" font-family="DM Sans,sans-serif" font-size="7.5" fill="#C05030" text-anchor="middle">McBurney's</text>
  <circle cx="75" cy="78" r="7" fill="#E8A020" opacity=".9"/>
  <text x="75" y="81.5" font-family="DM Sans,sans-serif" font-size="8" fill="#fff" text-anchor="middle" font-weight="700">M</text>
  <defs><marker id="a1" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#0D7377"/></marker></defs>
  <line x1="118" y1="130" x2="118" y2="115" stroke="#0D7377" stroke-width="1.5" stroke-dasharray="2.5,2" marker-end="url(#a1)"/>
  <circle cx="42" cy="222" r="5" fill="#E8A020" opacity=".9"/>
  <text x="51" y="226" font-family="DM Sans,sans-serif" font-size="9" fill="#5F5D57">Murphy's hook point</text>
  <circle cx="165" cy="222" r="5" fill="#E88060" opacity=".5" stroke="#C05030" stroke-width="1"/>
  <text x="174" y="226" font-family="DM Sans,sans-serif" font-size="9" fill="#5F5D57">McBurney's pt.</text>
</svg>`,
        caption: "Abdominal quadrants — Murphy's sign (M) targets the RUQ costal margin; McBurney's point marks appendicitis territory in the RLQ"
      },
      prose: [
        "The gallbladder sits too deep for direct palpation to reach. So instead of pressing into it, you let the patient's own breath bring it down to you.",
        "Hook your left thumb or the fingers of your right hand under the costal margin at the point where the lateral border of the rectus muscle intersects with the costal margin. Ask the patient to take a deep breath. Watch the patient's breathing and note the degree of tenderness.",
        "Inspiration draws the diaphragm downward — and with it the liver and gallbladder — into your waiting hand. If the gallbladder is inflamed, that descent fires pain and the patient stops mid-breath. That involuntary halt is the positive sign.",
        "Two conditions must be met: routine palpation found nothing first, and the patient stops on their own. Voluntary guarding is the patient protecting themselves. Murphy's sign is the body betraying itself. A positive result triples the probability of acute cholecystitis."
      ],
      snaps: [
        { label: 'Technique',      value: 'Hook RUQ costal margin → deep breath → involuntary halt = positive' },
        { label: 'Significance',   value: '<b>3×</b> more likely acute cholecystitis' },
        { label: 'Valid only when', value: 'Baseline RUQ palpation finds nothing first' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: "Confirmed across 7 Quizlet decks. Appears in 3 of 4 Bates' abdominal MCQs directly." },
        trap:   "Meaningless if baseline palpation already finds RUQ tenderness. The exam tests whether you know <em>when</em> to use it — not just what it is.",
        pearl:  "Painless jaundice + palpable non-tender GB = Courvoisier's sign = pancreatic cancer. Murphy's sign is <em>negative</em> in this scenario.",
        missed: "Voluntary vs. involuntary halt. The patient protecting themselves ≠ positive sign. Must be involuntary. Every NR509 distractor set exploits this.",
        source: "\"Hook your left thumb or the fingers of your right hand under the costal margin... Ask the patient to take a deep breath. Watch the patient's breathing and note the degree of tenderness.\" — Bates' 8th Ed., p. 348"
      },
      questions: [
        {
          id:      'q_murphys_1',
          num:     '1 of 2',
          stem:    'A <strong>39-year-old seamstress</strong> presents with severe RUQ pain 2 hours after a cheeseburger. HR 110, family history positive for gallbladder disease. <strong>Direct palpation of the RUQ reveals tenderness but no rigidity or rebound.</strong> Murphy\'s sign — the patient stops abruptly mid-inspiration. Which condition is most consistent?',
          options: ['Biliary colic', 'Acute cholecystitis', 'Acute pancreatitis', 'Peptic ulcer disease'],
          answer:  'B',
          rationale: '<strong>Correct: B — Acute cholecystitis.</strong> Positive Murphy\'s sign + RUQ tenderness + fatty meal trigger + tachycardia = acute cholecystitis until proven otherwise. <div class="rat-wrong"><strong>A (biliary colic)</strong> is episodic and resolves — no positive Murphy\'s sign, gallbladder is obstructed but not inflamed. <strong>C (pancreatitis)</strong> causes epigastric pain radiating to the back. <strong>D (PUD)</strong> produces epigastric burning; costal margin maneuver is not diagnostic.</div>'
        },
        {
          id:      'q_murphys_2',
          num:     '2 of 2',
          stem:    'A <strong>52-year-old male</strong> presents with <strong>painless jaundice</strong> and 10 lbs of weight loss over 6 weeks. The gallbladder is <strong>palpable, non-tender, and distended</strong>. Murphy\'s sign is <strong>negative</strong>. Which condition is most consistent?',
          options: ['Acute cholecystitis', 'Choledocholithiasis', 'Pancreatic cancer of the head', 'Hepatitis'],
          answer:  'C',
          rationale: '<strong>Correct: C — Pancreatic cancer of the head (Courvoisier\'s sign).</strong> Painless jaundice + palpable non-tender distended gallbladder = Courvoisier\'s sign. The mass obstructs the bile duct; the gallbladder distends but is not inflamed, so Murphy\'s is negative. <div class="rat-wrong"><strong>A (cholecystitis)</strong> produces a tender gallbladder + positive Murphy\'s — opposite. <strong>B (choledocholithiasis)</strong> causes painful jaundice. <strong>D (hepatitis)</strong> does not produce a palpable distended gallbladder.</div>'
        }
      ]
    },

    // ── CONCEPT 2: ABDOMINAL EXAM ORDER (IAPP) ───────────────
    {
      id:        'iapp',
      name:      'Exam Order — IAPP',
      batesPage: 'p. 321',
      svg1: null,
      svg2: null,
      prose: [
        "The abdomen is the only system where auscultation comes before palpation and percussion. Every other system follows inspect → palpate → percuss → auscultate. The abdomen reverses the last three steps.",
        "The reason is mechanical. Palpation and percussion stimulate peristalsis and change bowel sounds. If you palpate first and then auscultate, you are hearing the sounds you caused — not the patient's baseline. Inspection always comes first because it is passive.",
        "On the NR509 exam, questions about IAPP almost always take one of two forms: 'Which step comes immediately before palpation?' (answer: percussion) or 'What is unique about the abdominal exam sequence compared to other systems?' (answer: auscultation precedes percussion and palpation).",
        "When you encounter the sigmoid colon in the left lower quadrant, stool and a mass feel different. Stool is mobile, rope-like, soft, may indent with pressure, non-tender, and changes or disappears after a bowel movement. A mass is fixed, hard, irregular, persistent, and does not change with defecation."
      ],
      snaps: [
        { label: 'Sequence',       value: 'Inspect → Auscultate → Percuss → Palpate' },
        { label: 'Why unique',     value: 'Palpation alters bowel sounds — so auscultate first' },
        { label: 'LLQ distinction', value: 'Stool: mobile, soft, changes after BM. Mass: fixed, hard, persistent' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Top 3 most tested abdominal concept. The sequence appears in nearly every student-reported exam set.' },
        trap:   "'Which step comes BEFORE palpation?' = Percussion. Never auscultation last, never percussion first.",
        pearl:  "The sigmoid colon is the only palpable structure in the LLQ normally. If you feel something there — stool vs. mass distinction is your next move.",
        missed: "Students who learn IAPP but forget WHY get the reasoning questions wrong. Auscultation before palpation is not arbitrary — it preserves baseline bowel sounds.",
        source: "\"Because percussion and palpation can alter the frequency of bowel sounds, auscultation should precede these maneuvers.\" — Bates' 8th Ed., p. 321"
      },
      questions: [
        {
          id:      'q_iapp_1',
          num:     '1 of 2',
          stem:    'You are preparing to perform a complete abdominal examination on a 45-year-old male with diffuse abdominal discomfort. In what sequence should you perform the examination?',
          options: [
            'Inspection, palpation, percussion, auscultation',
            'Inspection, auscultation, percussion, palpation',
            'Auscultation, inspection, percussion, palpation',
            'Inspection, percussion, auscultation, palpation'
          ],
          answer:  'B',
          rationale: '<strong>Correct: B — Inspection, auscultation, percussion, palpation.</strong> The abdomen is the only system where auscultation precedes palpation and percussion because those maneuvers stimulate peristalsis and alter bowel sounds. <div class="rat-wrong"><strong>A</strong> is the standard sequence for most other systems — incorrect for abdomen. <strong>C</strong> skips inspection as first step. <strong>D</strong> places auscultation after percussion, which would give you artificially altered bowel sounds.</div>'
        },
        {
          id:      'q_iapp_2',
          num:     '2 of 2',
          stem:    'During an abdominal exam, you palpate a rope-like, soft, non-tender structure in the <strong>left lower quadrant</strong>. The patient reports she had a bowel movement this morning. On recheck after she uses the restroom, the structure is gone. What was this?',
          options: ['Sigmoid colon mass', 'Ovarian cyst', 'Stool in the sigmoid colon', 'Fibroid uterus'],
          answer:  'C',
          rationale: '<strong>Correct: C — Stool in the sigmoid colon.</strong> Stool is mobile, rope-like, soft, may indent, non-tender, and changes or disappears after a bowel movement. The sigmoid colon runs through the LLQ and normally holds fecal matter. <div class="rat-wrong"><strong>A (mass)</strong> would be fixed, hard, irregular, and persistent — would not resolve after defecation. <strong>B and D</strong> would not disappear after a bowel movement.</div>'
        }
      ]
    },

    // ── CONCEPT 3: APPENDICITIS — ALL 5 SIGNS ────────────────
    {
      id:        'appendicitis',
      name:      'Appendicitis — All 5 Signs',
      batesPage: 'p. 347',
      svg1: null,
      svg2: null,
      prose: [
        "Five maneuvers, each designed to reach a different anatomical position of the appendix. McBurney's is the baseline — tenderness at two-thirds of the way from the umbilicus to the right anterior superior iliac spine. Pressure there causing pain means appendicitis is three times more likely.",
        "Rovsing's sign catches appendicitis by cross-referencing peritoneal irritation. Sustained deep pressure in the left lower quadrant causes referred pain in the right lower quadrant. The inflammation is on the right side but the peritoneum communicates the signal.",
        "The psoas sign reaches retrocecal appendicitis — when the appendix has flipped backward behind the cecum. Ask the patient to actively flex the right hip against your resistance, or extend the right hip with the patient lying on the left side. Pain means the psoas muscle is irritated by an adjacent inflamed appendix.",
        "The obturator sign catches a pelvic appendix. Flex the right hip and knee to ninety degrees and internally rotate the hip. Pain in the right lower quadrant or hypogastric region is positive. Blumberg's rebound is the peritoneal sign — press deeply and abruptly release. Pain that is greater on release than on compression confirms peritoneal irritation.",
        "Pain migration matters: periumbilical pain that moves to the RLQ over twelve to twenty-four hours is the classic appendicitis pattern. Anorexia comes first, then nausea. If vomiting preceded the pain, think gastroenteritis, not appendicitis."
      ],
      snaps: [
        { label: 'McBurney\'s',  value: '2/3 from umbilicus to ASIS — tenderness = 3× appendicitis' },
        { label: 'Rovsing\'s',   value: 'LLQ sustained pressure → RLQ pain' },
        { label: 'Pain pattern', value: 'Periumbilical → RLQ over 12–24h. Anorexia first, NOT vomiting.' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: "McBurney's and Blumberg's are the two highest-frequency appendicitis items. Both appear in nearly every exam set reviewed." },
        trap:   "Blumberg = RELEASE produces RLQ pain. Rovsing's = SUSTAINED PRESSURE produces RLQ pain. Different mechanism, same location. NR509 always tests this distinction.",
        pearl:  "Vomiting before pain = gastroenteritis. Anorexia before pain = appendicitis. The sequence of symptoms is diagnostic, not just the symptoms themselves.",
        missed: "Students confuse psoas and obturator sign positions. Psoas = hip flexion/extension (retrocecal appendix). Obturator = hip rotation (pelvic appendix).",
        source: "\"McBurney's point — maximal tenderness... is classically located 2 cm from the ASIS on a line drawn from the ASIS to the umbilicus.\" — Bates' 8th Ed., p. 347"
      },
      questions: [
        {
          id:      'q_appy_1',
          num:     '1 of 2',
          stem:    'A 17-year-old male presents with RLQ pain. You apply sustained deep pressure to the <strong>left lower quadrant</strong> and the patient reports pain in the <strong>right lower quadrant</strong>. Which sign is this?',
          options: ['Obturator sign', 'Psoas sign', 'Rovsing\'s sign', 'Blumberg\'s sign'],
          answer:  'C',
          rationale: '<strong>Correct: C — Rovsing\'s sign.</strong> LLQ sustained pressure producing referred RLQ pain indicates peritoneal irritation from appendicitis. The inflamed peritoneum on the right transmits the compression signal. <div class="rat-wrong"><strong>A (obturator)</strong> involves hip internal rotation. <strong>B (psoas)</strong> involves hip flexion resistance. <strong>D (Blumberg\'s)</strong> is rebound tenderness — pain greater on release than compression.</div>'
        },
        {
          id:      'q_appy_2',
          num:     '2 of 2',
          stem:    'A 22-year-old female has had nausea and RLQ pain for 18 hours. She reports her abdomen began hurting around her belly button and then moved to her lower right side. You press deeply into the RLQ and release abruptly — she winces sharply. Which sign did you just elicit?',
          options: ['Rovsing\'s sign', 'Obturator sign', 'Blumberg\'s rebound tenderness', 'Psoas sign'],
          answer:  'C',
          rationale: '<strong>Correct: C — Blumberg\'s rebound tenderness.</strong> Pain greater on release than compression = rebound tenderness = peritoneal sign. Combined with the classic pain migration (periumbilical → RLQ over hours), this is acute appendicitis until proven otherwise. <div class="rat-wrong"><strong>A (Rovsing\'s)</strong> requires LLQ pressure producing RLQ pain. <strong>B (obturator)</strong> requires hip rotation. <strong>D (psoas)</strong> requires hip flexion resistance.</div>'
        }
      ]
    },

    // ── CONCEPT 4: PERITONEAL SIGNS ──────────────────────────
    {
      id:        'peritoneal',
      name:      'Peritoneal Signs',
      batesPage: 'p. 344',
      svg1: null,
      svg2: null,
      prose: [
        "Peritoneal signs are involuntary responses to peritoneal inflammation. The key word is involuntary — the patient cannot control them. Voluntary guarding, where the patient consciously tenses the abdominal muscles in anticipation of pain, is not a peritoneal sign.",
        "Involuntary guarding appears when the peritoneum is irritated. The abdominal muscles contract reflexively even when the patient is asked to relax. Boardlike rigidity is the extreme version — the abdomen is hard as a board regardless of voluntary effort.",
        "Rebound tenderness is the most specific peritoneal sign. Press deeply into the abdomen and release abruptly. If pain is greater on release than on compression, the peritoneum is inflamed. The peritoneum snapping back into contact with itself when you release your hand fires the pain.",
        "Cutaneous hyperesthesia is a less commonly tested sign but appears in Bates' and on NR509: heightened skin sensitivity overlying the area of peritoneal irritation. Light touch or gentle pinching of the skin over the affected area produces pain disproportionate to the stimulus."
      ],
      snaps: [
        { label: 'Involuntary',  value: 'Guarding, rigidity, rebound — patient cannot prevent these' },
        { label: 'Voluntary',    value: 'Patient consciously tenses. NOT a peritoneal sign.' },
        { label: 'Most specific', value: 'Rebound tenderness — pain greater on release than compression' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: "Appears in nearly every Quizlet deck. The voluntary vs. involuntary distinction is the single most frequently tested concept in this section." },
        trap:   "The exam question always includes voluntary guarding as a distractor among the peritoneal signs. It is the ONLY option that is NOT a peritoneal sign.",
        pearl:  "Diffuse involuntary rigidity + rebound tenderness + fever = peritonitis until proven otherwise. This triad is an emergency.",
        missed: "Students include voluntary guarding in the peritoneal sign list. It belongs in the guarding category but is not a peritoneal sign because it requires patient participation.",
        source: "\"Peritoneal signs include involuntary guarding or rigidity... and rebound tenderness... Voluntary guarding is the conscious tightening of the abdominal muscles.\" — Bates' 8th Ed., p. 344"
      },
      questions: [
        {
          id:      'q_peri_1',
          num:     '1 of 2',
          stem:    'You are assessing a patient for peritoneal signs in the emergency department. Which of the following is <strong>NOT</strong> a peritoneal sign?',
          options: ['Rebound tenderness', 'Involuntary guarding', 'Voluntary guarding', 'Boardlike rigidity'],
          answer:  'C',
          rationale: '<strong>Correct: C — Voluntary guarding.</strong> Voluntary guarding is the patient consciously tensing the abdominal muscles — it requires patient participation and is therefore NOT a peritoneal sign. Peritoneal signs are involuntary: rebound tenderness, involuntary guarding, and boardlike rigidity. <div class="rat-wrong"><strong>A, B, and D</strong> are all involuntary responses to peritoneal inflammation and are classic peritoneal signs.</div>'
        },
        {
          id:      'q_peri_2',
          num:     '2 of 2',
          stem:    'A 35-year-old female presents with diffuse abdominal pain, fever of 38.9°C, and a rigid abdomen. When you ask her to relax, the abdominal wall remains hard. Which finding best describes this?',
          options: ['Voluntary guarding indicating anxiety', 'Involuntary rigidity indicating peritoneal irritation', 'Normal abdominal wall tone for her age', 'Blumberg\'s rebound tenderness'],
          answer:  'B',
          rationale: '<strong>Correct: B — Involuntary rigidity indicating peritoneal irritation.</strong> The abdomen remains hard despite the patient\'s attempt to relax, which defines involuntary rigidity — a peritoneal sign. Combined with fever and diffuse pain, this presentation is consistent with peritonitis. <div class="rat-wrong"><strong>A (voluntary guarding)</strong> would relax when the patient tries to relax. <strong>C</strong> is incorrect — persistent rigidity is abnormal. <strong>D (Blumberg\'s)</strong> specifically refers to pain greater on release, not baseline rigidity.</div>'
        }
      ]
    },

    // ── CONCEPT 5: IBD vs IBS ─────────────────────────────────
    {
      id:        'ibd_ibs',
      name:      'IBD vs. IBS — 3 Key Distinctions',
      batesPage: 'p. 356',
      svg1: null,
      svg2: null,
      prose: [
        "Inflammatory bowel disease and irritable bowel syndrome are frequently confused but have three exam-critical distinctions. The most important: IBD can produce bloody stool. Ulcerative colitis specifically is defined in part by bloody diarrhea. Blood in the stool in a patient with bowel symptoms should immediately shift your thinking from IBS to IBD.",
        "The second distinction: IBD can awaken the patient from sleep. If a patient reports nocturnal symptoms — being woken by abdominal pain or diarrhea — this argues strongly against IBS. IBS symptoms correlate with waking hours, stress, and meals. They do not interrupt sleep.",
        "The third distinction is laboratory-based: IBD produces systemic inflammation and may elevate the erythrocyte sedimentation rate. IBS does not produce systemic inflammation. Lab values in IBS are characteristically normal. This is why IBS is a diagnosis of exclusion — you must rule out organic pathology first.",
        "The hooking technique uses the same principle as Murphy's sign but is applied differently. Curling your fingertips under the costal margin allows you to assess the liver edge — its texture, tenderness, and size on descent during inspiration. A palpable spleen indicates splenomegaly, which means the spleen is two to three times its normal size."
      ],
      snaps: [
        { label: 'Blood in stool', value: 'IBD: possible (UC = hallmark). IBS: NEVER — blood is a red flag for IBD.' },
        { label: 'Nocturnal sx',   value: 'IBD: can wake patient. IBS: does NOT wake patient.' },
        { label: 'ESR',            value: 'IBD: elevated. IBS: normal — labs always normal in IBS.' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'IBD vs. IBS comparison questions appear across multiple Quizlet decks. The blood and nocturnal symptom distinctions are the most tested.' },
        trap:   "If blood is present, it is IBD until proven otherwise. IBS never produces blood. Never. This is the most important clinical safety distinction in this section.",
        pearl:  "IBS is a diagnosis of exclusion. You cannot diagnose IBS until you have ruled out IBD, infection, celiac disease, and colorectal cancer. Normal workup = then IBS.",
        missed: "Students remember that IBS has no blood but forget the nocturnal symptom distinction. 'Woken from sleep' is the clinical tell that distinguishes the two when blood isn't present.",
        source: "\"IBD, unlike IBS, may present with bloody stool and may awaken the patient from sleep... ESR is elevated in active IBD.\" — Bates' 8th Ed., p. 356"
      },
      questions: [
        {
          id:      'q_ibd_1',
          num:     '1 of 2',
          stem:    'A 28-year-old teacher presents with recurrent abdominal cramping and loose stools for 6 months. She reports being woken from sleep twice last week by cramping and diarrhea. Her stool was red-tinged on one occasion. Which diagnosis is most consistent?',
          options: ['Irritable bowel syndrome (IBS)', 'Inflammatory bowel disease (IBD)', 'Peptic ulcer disease', 'Functional dyspepsia'],
          answer:  'B',
          rationale: '<strong>Correct: B — Inflammatory bowel disease (IBD).</strong> Two red flags for IBD: (1) blood in the stool — IBS never produces blood; (2) nocturnal symptoms waking the patient — IBS does not interrupt sleep. Either finding alone should steer you away from IBS. <div class="rat-wrong"><strong>A (IBS)</strong> does not produce blood and does not wake patients from sleep. <strong>C and D</strong> do not fit the chronic colitis pattern with nocturnal symptoms.</div>'
        },
        {
          id:      'q_ibd_2',
          num:     '2 of 2',
          stem:    'A patient with recurrent abdominal symptoms asks whether her diagnosis of IBS is correct. Which lab finding would most strongly support a true IBS diagnosis rather than IBD?',
          options: ['Elevated erythrocyte sedimentation rate (ESR)', 'Elevated C-reactive protein (CRP)', 'Completely normal laboratory workup', 'Low hemoglobin'],
          answer:  'C',
          rationale: '<strong>Correct: C — Completely normal laboratory workup.</strong> IBS is a functional disorder with no systemic inflammation. Lab values — including ESR, CRP, CBC, and metabolic panel — are characteristically normal. IBS is a diagnosis of exclusion; a normal workup supports it. <div class="rat-wrong"><strong>A and B</strong> (elevated ESR and CRP) indicate systemic inflammation, pointing toward IBD. <strong>D (low hemoglobin)</strong> suggests blood loss or chronic inflammation — both inconsistent with IBS.</div>'
        }
      ]
    },

    // ── CONCEPT 6: BILIARY OBSTRUCTION & PALE STOOLS ─────────
    {
      id:        'biliary',
      name:      'Biliary Obstruction — Classic Triad',
      batesPage: 'p. 352',
      svg1: null,
      svg2: null,
      prose: [
        "Biliary obstruction produces a diagnostic triad that appears consistently on the NR509 exam: pale or clay-colored stools, dark urine, and jaundice. The mechanism is simple. Bile normally flows from the liver through the bile ducts into the intestine, where it gives stool its brown color. Block the bile duct and bile backs up — it cannot reach the intestine.",
        "The backed-up bile has two downstream effects. Bilirubin is reabsorbed into the bloodstream, causing jaundice. Excess bilirubin is excreted through the kidneys, turning urine dark — the classic tea-colored or cola-colored urine of obstructive jaundice. Meanwhile, stool loses its bile pigment and turns pale, chalky, or clay-colored.",
        "Courvoisier's sign connects biliary obstruction to its most dangerous cause. A palpable, non-tender, distended gallbladder in the setting of painless jaundice is Courvoisier's sign — pancreatic cancer of the head until proven otherwise. The mass obstructs the bile duct gradually. Because the obstruction is gradual rather than sudden (as with gallstones), the gallbladder distends without the acute inflammation that would make it tender.",
        "The distinction between painful and painless jaundice is clinically critical. Painful jaundice with fever and chills (Charcot's triad) points to acute cholangitis — infection in an obstructed bile duct. Painless jaundice with weight loss and a distended non-tender gallbladder points to malignancy."
      ],
      snaps: [
        { label: 'Classic triad', value: 'Pale/clay stools + dark urine + jaundice = biliary obstruction' },
        { label: 'Courvoisier\'s', value: 'Painless jaundice + palpable non-tender GB = pancreatic cancer' },
        { label: 'vs. Cholangitis', value: 'Painful jaundice + fever + chills = Charcot\'s triad (infection)' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: "Courvoisier's sign is confirmed in multiple Quizlet decks. The pale stool triad appears in the official NR509 final exam study guide directly." },
        trap:   "Courvoisier's sign requires the gallbladder to be NON-tender. A tender distended gallbladder = cholecystitis. A non-tender distended gallbladder = malignancy. Tenderness is the differentiating feature.",
        pearl:  "In cholecystitis from chronic gallstones, the gallbladder wall scars and cannot distend — so it is NOT palpable. In pancreatic cancer, the gallbladder is healthy and distends freely. This is why a palpable GB argues against gallstone disease.",
        missed: "Students confuse the mechanism: bile cannot enter the intestine (not that the liver stops making it). The liver continues making bile — the problem is downstream obstruction.",
        source: "\"Obstruction of the common bile duct... causes jaundice, dark urine, and pale stools. A palpable, nontender gallbladder suggests malignant obstruction (Courvoisier's sign).\" — Bates' 8th Ed., p. 352"
      },
      questions: [
        {
          id:      'q_biliary_1',
          num:     '1 of 2',
          stem:    'A 61-year-old retired teacher presents with jaundice, 15 lbs of unintentional weight loss over 8 weeks, and clay-colored stools. On examination, her gallbladder is palpable, smooth, and non-tender. Which diagnosis is most consistent?',
          options: ['Acute cholecystitis', 'Choledocholithiasis (bile duct stone)', 'Pancreatic cancer obstructing the bile duct', 'Viral hepatitis'],
          answer:  'C',
          rationale: '<strong>Correct: C — Pancreatic cancer obstructing the bile duct (Courvoisier\'s sign).</strong> Painless jaundice + weight loss + palpable non-tender gallbladder is the classic presentation. The pancreatic head mass obstructs the bile duct gradually; the healthy gallbladder distends without becoming inflamed. <div class="rat-wrong"><strong>A (cholecystitis)</strong> produces a TENDER gallbladder and positive Murphy\'s sign. <strong>B (choledocholithiasis)</strong> causes painful jaundice. <strong>D (hepatitis)</strong> causes jaundice but not a distended gallbladder.</div>'
        },
        {
          id:      'q_biliary_2',
          num:     '2 of 2',
          stem:    'Which combination of findings best represents the classic triad of biliary obstruction?',
          options: [
            'RUQ pain, nausea, positive Murphy\'s sign',
            'Pale clay-colored stools, dark urine, jaundice',
            'Fever, chills, RUQ pain (Charcot\'s triad)',
            'Painless jaundice, weight loss, palpable gallbladder'
          ],
          answer:  'B',
          rationale: '<strong>Correct: B — Pale clay-colored stools, dark urine, jaundice.</strong> This is the classic biliary obstruction triad. Bile cannot reach the intestine (pale stools), bilirubin is excreted in urine (dark urine), and bilirubin accumulates in the bloodstream (jaundice). <div class="rat-wrong"><strong>A</strong> describes acute cholecystitis. <strong>C (Charcot\'s triad)</strong> is acute cholangitis (infected bile duct). <strong>D</strong> describes Courvoisier\'s sign specifically — a consequence of obstruction, not the obstruction triad itself.</div>'
        }
      ]
    }
  ],

  // ── NEXT CONCEPT PREVIEW ──────────────────────────────────
  nextSystem: {
    num:   2,
    title: 'Musculoskeletal Assessment',
    href:  'system-2.html',
    preview: 'RA vs. Gout vs. OA vs. Ankylosing Spondylitis — four conditions, four distinct patterns. Plus torticollis, the anterior drawer test, and the surface anatomy landmarks that appear every exam...'
  }
};

// ── DRILL QUESTIONS for System 1 ─────────────────────────
const DRILL_QUESTIONS = [
  {
    concept:   "Murphy's Sign",
    stem:      "A 40-year-old flight attendant has abdominal pain worse after fatty meals. Antacids provide no relief. You suspect cholecystitis. Which examination sign increases your suspicion?",
    options:   ['Psoas sign', "Rovsing's sign", "Murphy's sign", "Grey Turner's sign"],
    answer:    2,
    rationale: "Murphy's sign: involuntary cessation of inspiration when fingers hook under the RUQ costal margin. It triples probability of acute cholecystitis. Grey Turner's sign is flank bruising (pancreatitis). Psoas and Rovsing's target appendicitis."
  },
  {
    concept:   'Abdominal Exam Order',
    stem:      'What is the preferred sequence for abdominal examination?',
    options:   [
      'Inspection, palpation, percussion, auscultation',
      'Inspection, auscultation, percussion, palpation',
      'Auscultation, inspection, percussion, palpation',
      'Percussion, auscultation, palpation, inspection'
    ],
    answer:    1,
    rationale: 'Inspection → Auscultation → Percussion → Palpation. Auscultation must come before palpation and percussion because those maneuvers stimulate peristalsis and alter bowel sounds.'
  },
  {
    concept:   'Peritoneal Signs',
    stem:      "You are assessing a patient for peritoneal signs in the ER. Which of the following is NOT a peritoneal sign?",
    options:   ['Rebound tenderness', 'Involuntary guarding', 'Voluntary guarding', 'Abdominal rigidity'],
    answer:    2,
    rationale: 'Voluntary guarding is the patient consciously tensing the abdomen — not a peritoneal sign. Peritoneal signs are involuntary: rebound tenderness, involuntary guarding, boardlike rigidity.'
  },
  {
    concept:   "Rovsing's Sign",
    stem:      "A 15-year-old has periumbilical pain now localizing to the RLQ. You palpate the LLQ and the patient reports RLQ pain. What sign is this?",
    options:   ['Psoas sign', 'Obturator sign', "Rovsing's sign", 'Cutaneous hyperesthesia'],
    answer:    2,
    rationale: "Rovsing's sign: LLQ palpation produces RLQ pain, indicating appendicitis via peritoneal irritation. The psoas sign involves hip flexion resistance; the obturator sign involves hip rotation."
  },
  {
    concept:   'IBD vs. IBS',
    stem:      'A patient with chronic abdominal cramping reports being woken from sleep by diarrhea. Her stool was bloody on one occasion. Which diagnosis is most consistent?',
    options:   ['Irritable bowel syndrome', 'Inflammatory bowel disease', 'Functional dyspepsia', 'Celiac disease'],
    answer:    1,
    rationale: 'IBD: can produce bloody stool (IBS never can) and can wake patients from sleep (IBS does not). Two red flags present simultaneously = IBD until proven otherwise.'
  }
];
