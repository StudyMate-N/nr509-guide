/* ============================================================
   data/system-2.js
   Musculoskeletal Assessment — all concepts, questions, drill data
   Bates' Ch. 22 | NR509 Week 6
   ============================================================ */

const SYSTEM_DATA = {
  num:      2,
  title:    'Musculoskeletal Assessment',
  bates:    "Bates' Ch. 22",
  week:     'Week 6',
  ihuman:   'Kathleen Parks',
  vignette: 'A 58-year-old female presents with bilateral hand stiffness lasting over an hour each morning, symmetric swelling of the MCP and PIP joints, and fatigue for the past 3 months.',
  tags:     ["Bates' 8th Ed. Ch. 22", 'NR509 Week 6', '6 high-yield concepts'],

  concepts: [

    // ── CONCEPT 1: RA vs GOUT vs OA vs AS ────────────────────
    {
      id:        'ra_gout_oa_as',
      name:      'RA vs Gout vs OA vs AS',
      batesPage: 'p. 641',
      svg1: {
        label: 'Joint classification — synovial vs cartilaginous vs fibrous',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <text x="160" y="22" font-family="DM Serif Display,serif" font-size="13" fill="#0F1F3D" text-anchor="middle" font-weight="700">Joint Classification</text>
  <rect x="15" y="38" width="90" height="80" rx="8" fill="#0D7377" opacity=".12" stroke="#0D7377" stroke-width="1.5"/>
  <text x="60" y="55" font-family="DM Sans,sans-serif" font-size="10" fill="#0D7377" text-anchor="middle" font-weight="700">Synovial</text>
  <text x="60" y="68" font-family="DM Sans,sans-serif" font-size="8" fill="#5F5D57" text-anchor="middle">Freely movable</text>
  <text x="60" y="80" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57" text-anchor="middle">Synovial fluid</text>
  <text x="60" y="92" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57" text-anchor="middle">Joint capsule</text>
  <text x="60" y="108" font-family="DM Sans,sans-serif" font-size="7" fill="#0D7377" text-anchor="middle" font-style="italic">Knee, MCP, Hip</text>
  <rect x="115" y="38" width="90" height="80" rx="8" fill="#E8A020" opacity=".12" stroke="#E8A020" stroke-width="1.5"/>
  <text x="160" y="55" font-family="DM Sans,sans-serif" font-size="10" fill="#E8A020" text-anchor="middle" font-weight="700">Cartilaginous</text>
  <text x="160" y="68" font-family="DM Sans,sans-serif" font-size="8" fill="#5F5D57" text-anchor="middle">Slight movement</text>
  <text x="160" y="80" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57" text-anchor="middle">Fibrocartilage disc</text>
  <text x="160" y="92" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57" text-anchor="middle">No synovial cavity</text>
  <text x="160" y="108" font-family="DM Sans,sans-serif" font-size="7" fill="#E8A020" text-anchor="middle" font-style="italic">IV discs, Pubic sym.</text>
  <rect x="215" y="38" width="90" height="80" rx="8" fill="#5B4FCF" opacity=".12" stroke="#5B4FCF" stroke-width="1.5"/>
  <text x="260" y="55" font-family="DM Sans,sans-serif" font-size="10" fill="#5B4FCF" text-anchor="middle" font-weight="700">Fibrous</text>
  <text x="260" y="68" font-family="DM Sans,sans-serif" font-size="8" fill="#5F5D57" text-anchor="middle">Immovable</text>
  <text x="260" y="80" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57" text-anchor="middle">Dense connective</text>
  <text x="260" y="92" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57" text-anchor="middle">tissue</text>
  <text x="260" y="108" font-family="DM Sans,sans-serif" font-size="7" fill="#5B4FCF" text-anchor="middle" font-style="italic">Skull sutures</text>
  <line x1="15" y1="135" x2="305" y2="135" stroke="#BDB5AC" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="160" y="152" font-family="DM Serif Display,serif" font-size="11" fill="#0F1F3D" text-anchor="middle">Arthritis Targets — Synovial Joints</text>
  <rect x="15" y="162" width="68" height="65" rx="6" fill="#C9432A" opacity=".1" stroke="#C9432A" stroke-width="1.2"/>
  <text x="49" y="177" font-family="DM Sans,sans-serif" font-size="9" fill="#C9432A" text-anchor="middle" font-weight="700">RA</text>
  <text x="49" y="189" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">MCP, PIP, wrist</text>
  <text x="49" y="200" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Symmetric</text>
  <text x="49" y="211" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Morning &gt;1 hr</text>
  <rect x="90" y="162" width="68" height="65" rx="6" fill="#E8A020" opacity=".1" stroke="#E8A020" stroke-width="1.2"/>
  <text x="124" y="177" font-family="DM Sans,sans-serif" font-size="9" fill="#E8A020" text-anchor="middle" font-weight="700">Gout</text>
  <text x="124" y="189" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">1st MTP (podagra)</text>
  <text x="124" y="200" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Monoarticular</text>
  <text x="124" y="211" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Acute onset</text>
  <rect x="165" y="162" width="68" height="65" rx="6" fill="#0D7377" opacity=".1" stroke="#0D7377" stroke-width="1.2"/>
  <text x="199" y="177" font-family="DM Sans,sans-serif" font-size="9" fill="#0D7377" text-anchor="middle" font-weight="700">OA</text>
  <text x="199" y="189" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">DIP, knee, hip</text>
  <text x="199" y="200" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Asymmetric</text>
  <text x="199" y="211" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Stiffness &lt;30 min</text>
  <rect x="240" y="162" width="68" height="65" rx="6" fill="#5B4FCF" opacity=".1" stroke="#5B4FCF" stroke-width="1.2"/>
  <text x="274" y="177" font-family="DM Sans,sans-serif" font-size="9" fill="#5B4FCF" text-anchor="middle" font-weight="700">AS</text>
  <text x="274" y="189" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">SI joints, spine</text>
  <text x="274" y="200" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Axial skeleton</text>
  <text x="274" y="211" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Young male &lt;40</text>
</svg>`,
        caption: 'Joint classification and the four major arthritis patterns — RA targets MCP/PIP symmetrically, Gout hits the 1st MTP, OA favors DIP/weight-bearing joints, AS attacks the axial skeleton'
      },
      svg2: null,
      prose: [
        "Four arthropathies, four patterns. Rheumatoid arthritis is symmetric, inflammatory, and targets the proximal joints of the hand — MCP and PIP — while sparing the DIP. Morning stiffness lasts longer than one hour. Swan-neck and boutonniere deformities are late findings. The key distinguishing feature is symmetry plus proximal joint involvement.",
        "Gout is the opposite of symmetric. It attacks a single joint explosively — most classically the first metatarsophalangeal joint (podagra). The joint is red, hot, swollen, and exquisitely tender. Tophi — deposits of urate crystals under the skin — appear in chronic disease. Negatively birefringent needle-shaped crystals under polarized light confirm the diagnosis.",
        "Osteoarthritis is the wear-and-tear disease. It targets the DIP joints (producing Heberden's nodes), PIP joints (Bouchard's nodes), and weight-bearing joints like knees and hips. Stiffness lasts less than 30 minutes and worsens with activity. There is no systemic inflammation — no fatigue, no fever, no symmetric pattern.",
        "Ankylosing spondylitis targets the axial skeleton — sacroiliac joints and spine — in young males under 40. Morning stiffness improves with exercise and worsens with rest. The Schober test measures lumbar flexion: mark 10 cm above L5-S1, have the patient flex forward, and measure again. Less than 5 cm of expansion is abnormal and suggests restricted spinal mobility."
      ],
      snaps: [
        { label: 'RA pattern',   value: 'Symmetric MCP/PIP, morning stiffness &gt;1 hr, spares DIP' },
        { label: 'Gout pattern', value: '1st MTP (podagra), monoarticular, acute, negatively birefringent crystals' },
        { label: 'OA pattern',   value: 'DIP (Heberden), PIP (Bouchard), stiffness &lt;30 min, worsens with use' },
        { label: 'AS pattern',   value: 'SI joints + spine, young male &lt;40, improves with exercise' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'The single most tested musculoskeletal concept across all NR509 exam banks. Differential comparison appears in every practice set.' },
        trap:   "RA spares the DIP — OA targets the DIP. This single-joint distinction eliminates two wrong answers on every arthritis question.",
        pearl:  "Morning stiffness duration is the fastest screen: >1 hr = inflammatory (RA, AS). <30 min = mechanical (OA). Gout does not follow the pattern — it is acute, not morning-related.",
        missed: "Students confuse Heberden's (DIP = OA) with Bouchard's (PIP = OA). Both are OA — but Heberden's is the higher-yield name. Swan-neck and boutonniere are RA, not OA.",
        source: "\"Rheumatoid arthritis involves the MCP and PIP joints symmetrically... Osteoarthritis characteristically involves the DIP and PIP joints with Heberden's and Bouchard's nodes.\" — Bates' 8th Ed., p. 641"
      },
      questions: [
        {
          id:      'q_ra_gout_1',
          num:     '1 of 2',
          stem:    'A <strong>62-year-old retired teacher</strong> presents with bilateral hand stiffness lasting 90 minutes each morning. Examination reveals <strong>symmetric swelling of the MCP and PIP joints</strong> bilaterally with ulnar deviation. The DIP joints are spared. Which diagnosis is most consistent?',
          options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
          answer:  'B',
          rationale: '<strong>Correct: B — Rheumatoid arthritis.</strong> Symmetric involvement of MCP and PIP joints, DIP sparing, morning stiffness >1 hour, and ulnar deviation are hallmarks of RA. <div class="rat-wrong"><strong>A (OA)</strong> targets DIP joints, causes stiffness <30 min, and is typically asymmetric. <strong>C (Gout)</strong> is monoarticular and acute — not symmetric hand involvement. <strong>D (Psoriatic arthritis)</strong> can involve DIP joints and is associated with skin and nail changes.</div>'
        },
        {
          id:      'q_ra_gout_2',
          num:     '2 of 2',
          stem:    'A <strong>48-year-old male chef</strong> wakes at 2 AM with an acutely swollen, erythematous, exquisitely tender <strong>right first metatarsophalangeal joint</strong>. He had steak and wine for dinner. Which finding on joint aspiration confirms the diagnosis?',
          options: ['Positively birefringent rhomboid crystals', 'Negatively birefringent needle-shaped crystals', 'Gram-positive cocci in clusters', 'WBC count < 200 cells/mm³'],
          answer:  'B',
          rationale: '<strong>Correct: B — Negatively birefringent needle-shaped crystals.</strong> Acute monoarticular 1st MTP inflammation (podagra) + dietary trigger = gout. Monosodium urate crystals are negatively birefringent and needle-shaped under polarized microscopy. <div class="rat-wrong"><strong>A (positively birefringent rhomboid crystals)</strong> = calcium pyrophosphate deposition disease (pseudogout). <strong>C (gram-positive cocci)</strong> = septic arthritis. <strong>D (low WBC)</strong> = normal joint fluid, not an acutely inflamed joint.</div>'
        }
      ]
    },

    // ── CONCEPT 2: TORTICOLLIS + SCAPULAR WINGING ────────────
    {
      id:        'torticollis_winging',
      name:      'Torticollis + Scapular Winging',
      batesPage: 'p. 602',
      svg1: null,
      svg2: null,
      prose: [
        "Torticollis is lateral flexion of the neck toward the affected side with rotation of the chin away from the affected side. The sternocleidomastoid (SCM) is the muscle responsible. When the SCM contracts unilaterally, it tilts the head toward the ipsilateral side and rotates the face toward the contralateral side. Congenital muscular torticollis results from fibrosis or shortening of the SCM, often from birth trauma.",
        "Testing the SCM is straightforward: ask the patient to turn their head against resistance. If the patient turns the head to the right, the left SCM is being tested — the SCM rotates the head to the opposite side. This contralateral action is the most commonly tested fact about SCM function on NR509 exams.",
        "Scapular winging results from weakness or paralysis of the serratus anterior muscle, which is innervated by the long thoracic nerve. The serratus anterior holds the scapula flat against the posterior thorax. When it fails, the medial border of the scapula protrudes posteriorly — especially visible when the patient pushes against a wall with outstretched arms.",
        "The trapezius, innervated by the spinal accessory nerve (CN XI), is a separate cause of scapular dysfunction. Trapezius weakness causes the shoulder to droop and the patient cannot shrug against resistance. Do not confuse trapezius weakness (shoulder droop, inability to shrug) with serratus anterior weakness (scapular winging on wall push-up)."
      ],
      snaps: [
        { label: 'Torticollis muscle',  value: 'SCM — tilts head ipsilaterally, rotates chin contralaterally' },
        { label: 'SCM test',            value: 'Turn head against resistance — tests contralateral SCM' },
        { label: 'Scapular winging',    value: 'Serratus anterior weakness (long thoracic nerve)' },
        { label: 'Trapezius weakness',  value: 'Shoulder droop + cannot shrug (CN XI — spinal accessory)' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'SCM function appears in both musculoskeletal and cranial nerve sections. Scapular winging is a reliable 1-question topic.' },
        trap:   "Which SCM turns the head right? The LEFT SCM. Contralateral rotation is the rule — and the trap is designed for students who assume ipsilateral.",
        pearl:  "Wall push-up test: patient pushes against wall with arms extended. Winging = serratus anterior (long thoracic nerve). Shoulder shrug against resistance = trapezius (CN XI). Two different tests, two different nerves.",
        missed: "Trapezius weakness and serratus anterior weakness both affect the scapula but in different ways. Trapezius = droop and weak shrug. Serratus anterior = winging on wall push-up. Students conflate them.",
        source: "\"Winging of the scapula... suggests weakness of the serratus anterior muscle, usually from injury to the long thoracic nerve.\" — Bates' 8th Ed., p. 602"
      },
      questions: [
        {
          id:      'q_torticollis_1',
          num:     '1 of 2',
          stem:    'A <strong>3-month-old infant</strong> presents with the head tilted to the right and the chin rotated to the left. A firm mass is palpated in the right sternocleidomastoid. Which muscle is responsible for this positioning?',
          options: ['Left sternocleidomastoid', 'Right sternocleidomastoid', 'Right trapezius', 'Left scalene'],
          answer:  'B',
          rationale: '<strong>Correct: B — Right sternocleidomastoid.</strong> The SCM tilts the head toward the ipsilateral side and rotates the chin toward the contralateral side. Head tilted right + chin rotated left = right SCM contracture, confirmed by the mass in the right SCM. <div class="rat-wrong"><strong>A (left SCM)</strong> would tilt left and rotate chin right. <strong>C (trapezius)</strong> does not produce torticollis positioning. <strong>D (scalene)</strong> is a respiratory accessory muscle, not a primary torticollis cause.</div>'
        },
        {
          id:      'q_torticollis_2',
          num:     '2 of 2',
          stem:    'A <strong>28-year-old rock climber</strong> reports shoulder weakness after a fall. On exam, when she pushes against the wall with arms extended, the <strong>medial border of the right scapula protrudes posteriorly</strong>. Which nerve is most likely injured?',
          options: ['Spinal accessory nerve (CN XI)', 'Long thoracic nerve', 'Dorsal scapular nerve', 'Suprascapular nerve'],
          answer:  'B',
          rationale: '<strong>Correct: B — Long thoracic nerve.</strong> Scapular winging on wall push-up = serratus anterior weakness = long thoracic nerve injury. The serratus anterior holds the scapula against the thorax; its failure lets the medial border protrude. <div class="rat-wrong"><strong>A (CN XI)</strong> innervates the trapezius — injury causes shoulder droop and weak shrug, not winging. <strong>C (dorsal scapular)</strong> innervates the rhomboids. <strong>D (suprascapular)</strong> innervates the supraspinatus and infraspinatus.</div>'
        }
      ]
    },

    // ── CONCEPT 3: ANTERIOR DRAWER TEST + KNEE LIGAMENTS ─────
    {
      id:        'anterior_drawer',
      name:      'Anterior Drawer Test + Knee Ligaments',
      batesPage: 'p. 625',
      svg1: null,
      svg2: {
        label: 'Knee ligament anatomy — cruciate and collateral ligaments',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <text x="160" y="20" font-family="DM Serif Display,serif" font-size="13" fill="#0F1F3D" text-anchor="middle" font-weight="700">Knee Ligament Anatomy</text>
  <text x="160" y="34" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">Anterior view — right knee</text>
  <ellipse cx="160" cy="80" rx="55" ry="28" fill="#E8DDD4" opacity=".5" stroke="#BDB5AC" stroke-width="1.5"/>
  <text x="160" y="75" font-family="DM Sans,sans-serif" font-size="9" fill="#5F5D57" text-anchor="middle">Femur</text>
  <ellipse cx="160" cy="185" rx="50" ry="25" fill="#E8DDD4" opacity=".5" stroke="#BDB5AC" stroke-width="1.5"/>
  <text x="160" y="190" font-family="DM Sans,sans-serif" font-size="9" fill="#5F5D57" text-anchor="middle">Tibia</text>
  <ellipse cx="160" cy="132" rx="60" ry="22" fill="none" stroke="#BDB5AC" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="160" y="136" font-family="DM Sans,sans-serif" font-size="7" fill="#9B9890" text-anchor="middle">Joint space</text>
  <line x1="145" y1="100" x2="170" y2="162" stroke="#C9432A" stroke-width="3" stroke-linecap="round"/>
  <text x="175" y="140" font-family="DM Sans,sans-serif" font-size="8.5" fill="#C9432A" font-weight="700">ACL</text>
  <line x1="175" y1="100" x2="150" y2="162" stroke="#0D7377" stroke-width="3" stroke-linecap="round"/>
  <text x="135" y="140" font-family="DM Sans,sans-serif" font-size="8.5" fill="#0D7377" font-weight="700">PCL</text>
  <line x1="98" y1="105" x2="98" y2="160" stroke="#5B4FCF" stroke-width="2.5" stroke-linecap="round"/>
  <text x="75" y="135" font-family="DM Sans,sans-serif" font-size="8" fill="#5B4FCF" font-weight="600">MCL</text>
  <line x1="222" y1="105" x2="222" y2="160" stroke="#E8A020" stroke-width="2.5" stroke-linecap="round"/>
  <text x="242" y="135" font-family="DM Sans,sans-serif" font-size="8" fill="#E8A020" font-weight="600">LCL</text>
  <line x1="15" y1="218" x2="305" y2="218" stroke="#BDB5AC" stroke-width="0.5"/>
  <circle cx="22" cy="230" r="4" fill="#C9432A"/>
  <text x="30" y="233" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57">ACL — anterior drawer</text>
  <circle cx="120" cy="230" r="4" fill="#0D7377"/>
  <text x="128" y="233" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57">PCL — posterior drawer</text>
  <circle cx="220" cy="230" r="4" fill="#5B4FCF"/>
  <text x="228" y="233" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57">MCL — valgus</text>
  <circle cx="280" cy="230" r="4" fill="#E8A020"/>
  <text x="288" y="233" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5F5D57">LCL — varus</text>
</svg>`,
        caption: 'Knee ligament anatomy — ACL and PCL cross within the joint; MCL and LCL stabilize medial and lateral sides respectively. Each has a specific provocative test.'
      },
      prose: [
        "The anterior drawer test evaluates the anterior cruciate ligament (ACL). The patient lies supine with the knee flexed to 90 degrees and the foot flat on the table. The examiner sits on the patient's foot to stabilize it, wraps both hands around the proximal tibia, and pulls the tibia anteriorly. Excessive anterior translation compared to the other knee indicates ACL laxity or tear.",
        "The posterior drawer test is the reverse — push the tibia posteriorly to assess the posterior cruciate ligament (PCL). The Lachman test is a more sensitive alternative to the anterior drawer for ACL tears: performed at 20-30 degrees of flexion rather than 90 degrees, it reduces the stabilizing effect of the hamstrings and detects ACL injuries that the anterior drawer may miss.",
        "The collateral ligaments are tested with valgus and varus stress. MCL (medial collateral ligament) is tested by applying valgus stress — pushing the knee medially while stabilizing the ankle laterally. LCL (lateral collateral ligament) is tested by applying varus stress — pushing the knee laterally while stabilizing the ankle medially. Both are performed at 30 degrees of flexion.",
        "The McMurray test assesses the menisci. With the patient supine and knee fully flexed, the examiner rotates the tibia externally and extends the knee to test the medial meniscus, or rotates internally to test the lateral meniscus. A palpable click or pop with pain along the joint line suggests a meniscal tear."
      ],
      snaps: [
        { label: 'Anterior drawer',  value: 'Knee 90° flexion → pull tibia forward → tests ACL' },
        { label: 'Posterior drawer',  value: 'Knee 90° flexion → push tibia backward → tests PCL' },
        { label: 'Valgus stress',    value: 'Push knee medially at 30° → tests MCL' },
        { label: 'Varus stress',     value: 'Push knee laterally at 30° → tests LCL' },
        { label: 'McMurray test',    value: 'Flex + rotate tibia → click/pop = meniscal tear' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Knee ligament testing is the #1 musculoskeletal procedure question. Anterior drawer appears in every NR509 exam bank.' },
        trap:   "Valgus stress tests the MCL (medial), not the LCL. Students reverse valgus/varus because valgus pushes toward the lateral side — but it stresses the medial ligament.",
        pearl:  "Lachman test is more sensitive than the anterior drawer for ACL tears. If a question asks for the most sensitive ACL test, choose Lachman — not anterior drawer.",
        missed: "McMurray test: external rotation tests the medial meniscus — not the lateral. The rotation and the meniscus tested are on opposite sides.",
        source: "\"With the patient's knee flexed to 90 degrees... pull the tibia anteriorly... increased anterior excursion suggests a tear of the anterior cruciate ligament.\" — Bates' 8th Ed., p. 625"
      },
      questions: [
        {
          id:      'q_drawer_1',
          num:     '1 of 2',
          stem:    'A <strong>22-year-old soccer player</strong> felt a pop in her right knee during a cutting maneuver. On examination, with the knee flexed to 90 degrees, <strong>pulling the tibia anteriorly produces excessive forward translation</strong> compared to the left side. Which structure is most likely injured?',
          options: ['Posterior cruciate ligament', 'Medial collateral ligament', 'Anterior cruciate ligament', 'Lateral meniscus'],
          answer:  'C',
          rationale: '<strong>Correct: C — Anterior cruciate ligament.</strong> The anterior drawer test at 90 degrees of flexion with excessive anterior tibial translation = ACL tear. The mechanism (cutting/pivoting) and the pop are classic for ACL injury. <div class="rat-wrong"><strong>A (PCL)</strong> is tested with posterior drawer — pushing the tibia backward. <strong>B (MCL)</strong> is tested with valgus stress. <strong>D (lateral meniscus)</strong> is tested with McMurray test using internal rotation.</div>'
        },
        {
          id:      'q_drawer_2',
          num:     '2 of 2',
          stem:    'You are evaluating a <strong>35-year-old runner</strong> with medial knee pain after a valgus force injury. Which test should you perform to assess the <strong>medial collateral ligament</strong>?',
          options: ['Varus stress test at 30 degrees', 'Valgus stress test at 30 degrees', 'Anterior drawer test at 90 degrees', 'McMurray test with internal rotation'],
          answer:  'B',
          rationale: '<strong>Correct: B — Valgus stress test at 30 degrees.</strong> Valgus stress opens the medial side of the joint, testing the MCL. Performed at 30 degrees of flexion to relax the posterior capsule and isolate the MCL. <div class="rat-wrong"><strong>A (varus stress)</strong> tests the LCL. <strong>C (anterior drawer)</strong> tests the ACL. <strong>D (McMurray with internal rotation)</strong> tests the lateral meniscus.</div>'
        }
      ]
    },

    // ── CONCEPT 4: SPINE EXAM ────────────────────────────────
    {
      id:        'spine_exam',
      name:      'Spine Exam — Erector Spinae, SCM, Sacrospinalis',
      batesPage: 'p. 607',
      svg1: null,
      svg2: null,
      prose: [
        "The spine examination begins with inspection of the patient standing from behind. Look for scoliosis — lateral curvature of the spine — using the Adams forward bend test. Have the patient bend forward at the waist with arms dangling. A rib hump (thoracic prominence on one side) confirms structural scoliosis as opposed to functional scoliosis caused by leg length discrepancy or muscle spasm.",
        "The erector spinae group (iliocostalis, longissimus, spinalis) runs vertically along the vertebral column and is the primary extensor of the spine. Tenderness or spasm of the erector spinae is the most common finding in mechanical low back pain. Palpate these muscles bilaterally along the lumbar spine. Asymmetric spasm suggests an underlying structural cause.",
        "The sternocleidomastoid is both a cervical spine flexor (bilateral contraction) and a rotator (unilateral contraction rotates the chin to the opposite side). During the cervical spine exam, test flexion by having the patient touch chin to chest, extension by looking up, lateral flexion by touching ear to shoulder, and rotation by turning the head side to side.",
        "Range of motion testing for the lumbar spine includes flexion (touch toes), extension (lean backward), lateral flexion (slide hand down lateral thigh), and rotation (turn shoulders while pelvis is stabilized). The Schober test specifically quantifies lumbar flexion: mark 10 cm above the lumbosacral junction, ask the patient to flex forward, and remeasure. Normal expansion is at least 5 cm. Reduced expansion suggests ankylosing spondylitis."
      ],
      snaps: [
        { label: 'Adams test',       value: 'Forward bend → rib hump = structural scoliosis' },
        { label: 'Erector spinae',   value: 'Primary spinal extensor — tenderness/spasm = mechanical low back pain' },
        { label: 'Cervical ROM',     value: 'Flexion, extension, lateral flexion, rotation' },
        { label: 'Schober test',     value: '10 cm above LS junction → flex → &lt;5 cm expansion = abnormal (AS)' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Spine ROM and Schober test appear frequently. Adams test is a secondary target but reliably produces 1 question.' },
        trap:   "Schober test: the cutoff is 5 cm of EXPANSION, not 5 cm total. Students measure 10 cm → 14 cm and call it 4 cm expansion = abnormal. Correct: 10 → 15+ = normal.",
        pearl:  "Structural scoliosis shows a rib hump on Adams forward bend test. Functional scoliosis (from leg length discrepancy) straightens on forward bending — no rib hump.",
        missed: "The erector spinae is an extensor, not a flexor. Bilateral SCM contraction flexes the cervical spine. Students confuse which muscles flex and which extend.",
        source: "\"Identify the spinous processes of each vertebra... Palpate the paravertebral muscles for tenderness and spasm.\" — Bates' 8th Ed., p. 607"
      },
      questions: [
        {
          id:      'q_spine_1',
          num:     '1 of 2',
          stem:    'A <strong>14-year-old girl</strong> is being screened for scoliosis. On the <strong>Adams forward bend test</strong>, you observe a right thoracic rib hump. What does this finding indicate?',
          options: ['Functional scoliosis from leg length discrepancy', 'Structural scoliosis with vertebral rotation', 'Normal variant in adolescent growth', 'Erector spinae spasm'],
          answer:  'B',
          rationale: '<strong>Correct: B — Structural scoliosis with vertebral rotation.</strong> A rib hump on the Adams forward bend test indicates structural scoliosis — the vertebrae are actually rotated, pushing the ribs posteriorly on the convex side. <div class="rat-wrong"><strong>A (functional scoliosis)</strong> would straighten on forward bending with no rib hump. <strong>C (normal variant)</strong> — a rib hump is never normal. <strong>D (erector spinae spasm)</strong> would present as paravertebral muscle tightness, not a rib hump.</div>'
        },
        {
          id:      'q_spine_2',
          num:     '2 of 2',
          stem:    'A <strong>26-year-old male</strong> has chronic low back pain and morning stiffness that improves with exercise. On the Schober test, you mark 10 cm above the lumbosacral junction. After full forward flexion, the distance measures <strong>13 cm</strong>. What is your interpretation?',
          options: ['Normal lumbar flexion', 'Abnormal — suggests ankylosing spondylitis', 'Abnormal — suggests disc herniation', 'Normal for a young male'],
          answer:  'B',
          rationale: '<strong>Correct: B — Abnormal, suggests ankylosing spondylitis.</strong> The Schober test expansion is 3 cm (13 - 10 = 3 cm). Normal is at least 5 cm of expansion. A young male with morning stiffness improving with exercise and reduced lumbar flexion = classic presentation of ankylosing spondylitis. <div class="rat-wrong"><strong>A and D</strong> are incorrect — 3 cm expansion is below the 5 cm threshold. <strong>C (disc herniation)</strong> typically presents with radiculopathy and dermatomal pain, not reduced Schober measurement.</div>'
        }
      ]
    },

    // ── CONCEPT 5: LATERAL EPICONDYLITIS + CAUDA EQUINA ──────
    {
      id:        'epicondylitis_cauda',
      name:      'Lateral Epicondylitis + Cauda Equina',
      batesPage: 'p. 618',
      svg1: null,
      svg2: null,
      prose: [
        "Lateral epicondylitis (tennis elbow) is inflammation at the origin of the wrist extensors on the lateral epicondyle of the humerus. Pain is reproduced by resisted wrist extension with the elbow extended and the forearm pronated. Medial epicondylitis (golfer's elbow) affects the wrist flexor origin on the medial epicondyle — pain with resisted wrist flexion and forearm supination.",
        "The key clinical distinction: lateral = extensor origin = pain with resisted extension = tennis elbow. Medial = flexor origin = pain with resisted flexion = golfer's elbow. Exam questions test whether you can match the epicondyle to the muscle group and the provocative maneuver.",
        "Cauda equina syndrome is a surgical emergency. The cauda equina is the bundle of nerve roots below the conus medullaris (L1-L2 level). Compression — from a massive disc herniation, tumor, or abscess — produces bilateral leg weakness, saddle anesthesia (numbness in the perineum, inner thighs, and perianal area), urinary retention or incontinence, and decreased rectal tone.",
        "The critical distinction from a simple lumbar disc herniation: cauda equina is bilateral, involves bowel and bladder dysfunction, and produces saddle anesthesia. A unilateral radiculopathy with intact bladder function is not cauda equina. On any NR509 question, saddle anesthesia plus urinary retention equals cauda equina until proven otherwise — this is the one musculoskeletal diagnosis that demands immediate surgical referral."
      ],
      snaps: [
        { label: 'Lateral epicondylitis', value: 'Tennis elbow — pain with resisted wrist extension, lateral epicondyle' },
        { label: 'Medial epicondylitis',  value: "Golfer's elbow — pain with resisted wrist flexion, medial epicondyle" },
        { label: 'Cauda equina red flags', value: 'Saddle anesthesia + urinary retention + bilateral leg weakness' },
        { label: 'Cauda equina action',    value: 'Surgical emergency — immediate referral' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Lateral vs medial epicondylitis appears in every practice set. Cauda equina is tested as a red-flag recognition question.' },
        trap:   "Lateral epicondylitis = resisted EXTENSION (not flexion). The extensors originate from the lateral epicondyle. Students reverse extension and flexion.",
        pearl:  "Saddle anesthesia is the single most reliable indicator of cauda equina syndrome. Any low back pain question that mentions saddle anesthesia or urinary retention → cauda equina → emergency.",
        missed: "Cauda equina is bilateral. A single-sided radiculopathy with no bladder symptoms is a disc herniation, not cauda equina. Students panic at any leg weakness and overcall cauda equina.",
        source: "\"Lateral epicondylitis... tenderness over the lateral epicondyle... pain increases with resisted extension of the wrist.\" — Bates' 8th Ed., p. 618"
      },
      questions: [
        {
          id:      'q_epicondylitis_1',
          num:     '1 of 2',
          stem:    'A <strong>42-year-old warehouse worker</strong> reports lateral elbow pain worsening over 3 weeks. On examination, tenderness is maximal over the <strong>lateral epicondyle</strong>. Which maneuver will most likely reproduce his pain?',
          options: ['Resisted wrist flexion with forearm supinated', 'Resisted wrist extension with forearm pronated', 'Passive elbow flexion', 'Resisted forearm supination only'],
          answer:  'B',
          rationale: '<strong>Correct: B — Resisted wrist extension with forearm pronated.</strong> Lateral epicondylitis (tennis elbow) involves the wrist extensor origin at the lateral epicondyle. Resisted wrist extension loads these tendons and reproduces the pain. <div class="rat-wrong"><strong>A (resisted wrist flexion)</strong> tests for medial epicondylitis (golfer\'s elbow). <strong>C (passive elbow flexion)</strong> does not load the extensor origin. <strong>D (supination only)</strong> does not specifically test the wrist extensors.</div>'
        },
        {
          id:      'q_epicondylitis_2',
          num:     '2 of 2',
          stem:    'A <strong>55-year-old male</strong> with severe low back pain presents with <strong>bilateral leg weakness, numbness over the perineum and inner thighs, and urinary retention</strong>. Rectal tone is decreased. What is the most appropriate next step?',
          options: ['Prescribe NSAIDs and physical therapy', 'Order outpatient MRI in 2 weeks', 'Immediate surgical referral', 'Epidural steroid injection'],
          answer:  'C',
          rationale: '<strong>Correct: C — Immediate surgical referral.</strong> Bilateral leg weakness + saddle anesthesia (perineal/inner thigh numbness) + urinary retention + decreased rectal tone = cauda equina syndrome. This is a surgical emergency requiring emergent decompression to prevent permanent neurological damage. <div class="rat-wrong"><strong>A (NSAIDs)</strong> is inadequate for a surgical emergency. <strong>B (outpatient MRI in 2 weeks)</strong> is dangerously delayed — cauda equina needs emergent imaging and surgery. <strong>D (epidural steroid)</strong> does not address cord compression.</div>'
        }
      ]
    },

    // ── CONCEPT 6: SURFACE ANATOMY LANDMARKS ─────────────────
    {
      id:        'surface_landmarks',
      name:      'Surface Anatomy — Acromion, Coracoid, Greater Tubercle',
      batesPage: 'p. 599',
      svg1: null,
      svg2: null,
      prose: [
        "The shoulder has three bony landmarks that define its surface anatomy and serve as reference points for the musculoskeletal exam. The acromion process is the lateral extension of the scapular spine, forming the highest point of the shoulder. It articulates with the lateral end of the clavicle at the acromioclavicular (AC) joint. The acromion is palpable as the broad, flat bony prominence at the top of the shoulder.",
        "The coracoid process projects anteriorly from the scapula, sitting just inferior to the lateral third of the clavicle. Palpate it by pressing laterally and deeply in the deltopectoral groove, just below the junction of the lateral clavicle and the shoulder. It serves as the attachment point for the pectoralis minor, coracobrachialis, and the short head of the biceps.",
        "The greater tubercle of the humerus is the lateral bony prominence just distal to the acromion. It is the insertion site for three of the four rotator cuff muscles — supraspinatus, infraspinatus, and teres minor. The supraspinatus inserts on the superior facet, the infraspinatus on the middle facet, and the teres minor on the inferior facet. The lesser tubercle, located anteriorly, is the insertion of the subscapularis.",
        "These three landmarks form a triangle that orients the examiner during the shoulder exam. The acromion is on top, the coracoid is anterior, and the greater tubercle is lateral. Between the acromion and the greater tubercle lies the subacromial space — where the supraspinatus tendon runs and where impingement occurs. Subacromial tenderness with pain on active abduction between 60 and 120 degrees (the painful arc) suggests supraspinatus impingement or rotator cuff pathology."
      ],
      snaps: [
        { label: 'Acromion',          value: 'Highest point of shoulder — lateral scapular spine, AC joint landmark' },
        { label: 'Coracoid process',  value: 'Anterior scapular projection — pectoralis minor, coracobrachialis, biceps short head' },
        { label: 'Greater tubercle',  value: 'Lateral humerus — supraspinatus, infraspinatus, teres minor insert here' },
        { label: 'Painful arc',       value: '60–120° abduction pain = supraspinatus impingement' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Surface anatomy landmarks are tested as identification questions. The rotator cuff insertions are a guaranteed 1–2 questions.' },
        trap:   "Three rotator cuff muscles insert on the greater tubercle (supraspinatus, infraspinatus, teres minor). The subscapularis inserts on the lesser tubercle. Students forget the subscapularis is the exception.",
        pearl:  "The painful arc (60–120° of abduction) localizes to the subacromial space. Below 60°, the supraspinatus tendon has not entered the space. Above 120°, it has passed through. Pain only in this range = impingement.",
        missed: "The coracoid is anterior to the shoulder, not lateral. Students confuse the coracoid and the acromion because both are scapular processes. Acromion = top/lateral. Coracoid = anterior/deep.",
        source: "\"Palpate the bony landmarks of the shoulder: the acromion process... the coracoid process... and the greater tubercle of the humerus.\" — Bates' 8th Ed., p. 599"
      },
      questions: [
        {
          id:      'q_surface_1',
          num:     '1 of 2',
          stem:    'A <strong>50-year-old painter</strong> has shoulder pain with active abduction. Pain is maximal between <strong>60 and 120 degrees of abduction</strong> and resolves above 120 degrees. Tenderness is elicited in the <strong>subacromial space</strong>. Which structure is most likely affected?',
          options: ['Subscapularis tendon', 'Supraspinatus tendon', 'Long head of the biceps', 'Acromioclavicular joint'],
          answer:  'B',
          rationale: '<strong>Correct: B — Supraspinatus tendon.</strong> The painful arc (60–120° of abduction) with subacromial tenderness is the classic presentation of supraspinatus impingement. The supraspinatus tendon passes through the subacromial space and is compressed in this range. <div class="rat-wrong"><strong>A (subscapularis)</strong> is an internal rotator — tested with the lift-off test, not the painful arc. <strong>C (biceps long head)</strong> causes anterior shoulder pain and is tested with Speed\'s test. <strong>D (AC joint)</strong> pain occurs at the end of abduction (>120°), not in the 60–120° range.</div>'
        },
        {
          id:      'q_surface_2',
          num:     '2 of 2',
          stem:    'During a shoulder examination, you palpate a bony prominence just <strong>distal and lateral to the acromion</strong> on the proximal humerus. Which rotator cuff muscles insert on this structure?',
          options: ['Subscapularis, supraspinatus, infraspinatus', 'Supraspinatus, infraspinatus, teres minor', 'Infraspinatus, teres minor, subscapularis', 'Supraspinatus, teres minor, teres major'],
          answer:  'B',
          rationale: '<strong>Correct: B — Supraspinatus, infraspinatus, teres minor.</strong> The greater tubercle of the humerus is the lateral bony prominence distal to the acromion. Three of the four rotator cuff muscles insert here: supraspinatus (superior facet), infraspinatus (middle facet), and teres minor (inferior facet). <div class="rat-wrong"><strong>A and C</strong> include the subscapularis, which inserts on the lesser tubercle (anterior). <strong>D</strong> includes teres major, which is not a rotator cuff muscle — it inserts on the intertubercular groove.</div>'
        }
      ]
    }
  ],

  // ── NEXT CONCEPT PREVIEW ──────────────────────────────────
  nextSystem: {
    num:   3,
    title: 'Neurological Assessment',
    href:  'system-3.html',
    preview: 'Cranial nerves, dermatomes, reflexes, and cerebellar testing — the highest-density section on the NR509 final. Romberg, pronator drift, and the difference between UMN and LMN lesions...'
  }
};

// ── DRILL QUESTIONS for System 2 ─────────────────────────
const DRILL_QUESTIONS = [
  {
    concept:   'RA vs Gout vs OA vs AS',
    stem:      'A 70-year-old woman has bilateral knee pain that worsens by end of day and hard bony enlargements at her DIP joints. Morning stiffness lasts 15 minutes. Which diagnosis is most likely?',
    options:   ['Rheumatoid arthritis', 'Osteoarthritis', 'Gout', 'Ankylosing spondylitis'],
    answer:    1,
    rationale: "OA targets DIP joints (Heberden's nodes), weight-bearing joints, produces stiffness <30 minutes, and worsens with activity. RA spares the DIP and causes prolonged morning stiffness. Gout is acute and monoarticular. AS targets the axial skeleton in young males."
  },
  {
    concept:   'Torticollis + Scapular Winging',
    stem:      'To test the right sternocleidomastoid muscle, you should ask the patient to:',
    options:   ['Turn the head to the right against resistance', 'Turn the head to the left against resistance', 'Flex the neck forward against resistance', 'Extend the neck backward against resistance'],
    answer:    1,
    rationale: 'The SCM rotates the head to the contralateral side. To test the right SCM, the patient turns the head to the LEFT against resistance. The right SCM contracts to rotate the chin leftward.'
  },
  {
    concept:   'Anterior Drawer Test + Knee Ligaments',
    stem:      'Which test is the most sensitive for detecting an ACL tear?',
    options:   ['Anterior drawer test', 'Lachman test', 'McMurray test', 'Valgus stress test'],
    answer:    1,
    rationale: 'The Lachman test is more sensitive than the anterior drawer for ACL tears because it is performed at 20–30 degrees of flexion, reducing the stabilizing effect of the hamstrings. McMurray tests menisci. Valgus stress tests the MCL.'
  },
  {
    concept:   'Lateral Epicondylitis + Cauda Equina',
    stem:      'A 38-year-old has low back pain with bilateral leg numbness, perineal anesthesia, and new urinary incontinence. What is the most critical next step?',
    options:   ['Lumbar X-ray', 'Physical therapy referral', 'Emergent surgical consultation', 'Oral corticosteroids'],
    answer:    2,
    rationale: 'Bilateral leg symptoms + saddle anesthesia + bowel/bladder dysfunction = cauda equina syndrome. This is a surgical emergency requiring emergent decompression. Delays risk permanent neurological deficits.'
  },
  {
    concept:   'Surface Anatomy Landmarks',
    stem:      'Which rotator cuff muscle does NOT insert on the greater tubercle of the humerus?',
    options:   ['Supraspinatus', 'Infraspinatus', 'Subscapularis', 'Teres minor'],
    answer:    2,
    rationale: 'The subscapularis inserts on the lesser tubercle (anterior). The other three rotator cuff muscles — supraspinatus, infraspinatus, and teres minor — all insert on the greater tubercle (lateral).'
  }
];
