/* ============================================================
   data/system-3.js
   Neurological Assessment — all concepts, questions, drill data
   Bates' Ch. 24 | NR509 Week 6
   ============================================================ */

const SYSTEM_DATA = {
  num:      3,
  title:    'Neurological Assessment',
  bates:    "Bates' Ch. 24",
  week:     'Week 6',
  ihuman:   'Perry Soloman',
  vignette: 'A 58-year-old male presents with sudden-onset severe headache described as the worst of his life, neck stiffness, and photophobia. He was found confused by coworkers 30 minutes ago.',
  tags:     ["Bates' 8th Ed. Ch. 24", 'NR509 Week 6', '6 high-yield concepts'],

  concepts: [

    // ── CONCEPT 1: KERNIG'S + BRUDZINSKI'S SIGNS ────────────
    {
      id:        'meningeal',
      name:      "Kernig's + Brudzinski's Signs",
      batesPage: 'p. 719',
      svg1: null,
      svg2: null,
      prose: [
        "Meningeal signs test whether the meninges are inflamed. When infection or hemorrhage irritates the meninges, any maneuver that stretches them triggers involuntary resistance or pain. Two classic signs — Kernig's and Brudzinski's — exploit this principle from opposite ends of the spine.",
        "For Brudzinski's sign, place the patient supine with hands behind the head. Passively flex the neck by bringing the chin toward the chest. A positive sign is involuntary flexion of the hips and knees — the body reflexively shortens the spinal column to relieve meningeal stretch. Pain alone without hip flexion is not a positive Brudzinski's sign.",
        "For Kernig's sign, flex the patient's hip to 90 degrees and then attempt to extend the knee. A positive sign is resistance or pain that prevents full knee extension beyond 135 degrees. The hamstring stretch is transmitted through the nerve roots to the inflamed meninges, producing the response.",
        "Neither sign is highly sensitive in isolation — sensitivity ranges from 5% to 30% depending on the study. However, when positive, specificity is high. In the clinical setting, these signs are performed together. A positive result in either one should prompt urgent lumbar puncture or imaging to rule out meningitis or subarachnoid hemorrhage."
      ],
      snaps: [
        { label: 'Brudzinski',    value: 'Passive neck flexion → involuntary hip/knee flexion = positive' },
        { label: 'Kernig',        value: 'Hip flexed 90° → cannot extend knee past 135° = positive' },
        { label: 'Significance',  value: 'Low sensitivity, high specificity — both positive = urgent LP or imaging' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Tested on nearly every neuro exam. Students must know the mechanism, not just the name.' },
        trap:   "Neck stiffness alone is not Brudzinski's. The sign requires <em>involuntary hip and knee flexion</em> during passive neck flexion — not just pain or resistance.",
        pearl:  "Kernig's tests from below (leg), Brudzinski's tests from above (neck). Both stretch the meninges. Learn them as a pair, not in isolation.",
        missed: "Students confuse which sign is which. Mnemonic: <em>B</em>rudzinski = <em>B</em>end the neck. <em>K</em>ernig = <em>K</em>nee extension.",
        source: "\"Flex the patient's leg at both the hip and the knee, and then straighten the knee. Pain and increased resistance to extending the knee are positive.\" — Bates' 8th Ed., p. 719"
      },
      questions: [
        {
          id:      'q_meningeal_1',
          num:     '1 of 2',
          stem:    'A <strong>19-year-old college student</strong> presents with fever, headache, and neck stiffness. On exam, passive flexion of the neck causes <strong>involuntary flexion of both hips and knees</strong>. Which finding is this?',
          options: ["Kernig's sign", "Brudzinski's sign", 'Nuchal rigidity', 'Opisthotonus'],
          answer:  'B',
          rationale: '<strong>Correct: B — Brudzinski\'s sign.</strong> Passive neck flexion causing involuntary hip and knee flexion is the definition of a positive Brudzinski\'s sign, indicating meningeal irritation. <div class="rat-wrong"><strong>A (Kernig\'s sign)</strong> involves resistance to knee extension with the hip flexed at 90°. <strong>C (nuchal rigidity)</strong> is neck stiffness itself — not the reflexive leg movement. <strong>D (opisthotonus)</strong> is severe hyperextension of the entire spine seen in advanced meningitis or tetanus.</div>'
        },
        {
          id:      'q_meningeal_2',
          num:     '2 of 2',
          stem:    'You are evaluating a <strong>34-year-old female</strong> with sudden severe headache. You flex her right hip to 90 degrees and attempt to extend the knee. She <strong>resists extension and reports pain in the posterior thigh and neck</strong>. What does this indicate?',
          options: ['Hamstring strain', 'Positive Kernig\'s sign — meningeal irritation', 'Lumbar radiculopathy', 'Positive straight-leg raise — disc herniation'],
          answer:  'B',
          rationale: '<strong>Correct: B — Positive Kernig\'s sign.</strong> Resistance and pain with knee extension when the hip is flexed at 90° indicates meningeal irritation. The pain radiates because stretching the sciatic nerve pulls on inflamed meninges. <div class="rat-wrong"><strong>A (hamstring strain)</strong> produces localized posterior thigh pain without neck involvement. <strong>C (radiculopathy)</strong> produces dermatomal pain, not bilateral meningeal signs. <strong>D (straight-leg raise)</strong> is performed with the knee already extended while lifting the leg — different test, different mechanism.</div>'
        }
      ]
    },

    // ── CONCEPT 2: CRANIAL NERVES MAP ────────────────────────
    {
      id:        'cranial_nerves',
      name:      'All 12 Cranial Nerves — Testing Methods',
      batesPage: 'p. 692',
      svg1: {
        label: 'Cranial nerves — brain diagram with origins',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <ellipse cx="160" cy="85" rx="100" ry="65" fill="#E8E4DF" opacity=".4" stroke="#BDB5AC" stroke-width="1.5"/>
  <path d="M130,145 Q145,155 160,170 Q175,155 190,145" fill="none" stroke="#BDB5AC" stroke-width="2" stroke-linecap="round"/>
  <text x="160" y="165" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">Brainstem</text>
  <path d="M160,170 L160,230" stroke="#BDB5AC" stroke-width="2.5" stroke-linecap="round"/>
  <text x="160" y="237" font-family="DM Sans,sans-serif" font-size="7.5" fill="#9B9890" text-anchor="middle">Spinal cord</text>
  <text x="160" y="18" font-family="DM Serif Display,serif" font-size="13" fill="#0F1F3D" text-anchor="middle">Cranial Nerves — Origins</text>
  <circle cx="105" cy="42" r="4" fill="#0D7377"/><text x="96" y="38" font-family="DM Sans,sans-serif" font-size="7" fill="#0D7377" text-anchor="end" font-weight="600">I</text>
  <circle cx="120" cy="55" r="4" fill="#0D7377"/><text x="111" y="51" font-family="DM Sans,sans-serif" font-size="7" fill="#0D7377" text-anchor="end" font-weight="600">II</text>
  <circle cx="140" cy="100" r="4" fill="#5B4FCF"/><text x="131" y="96" font-family="DM Sans,sans-serif" font-size="7" fill="#5B4FCF" text-anchor="end" font-weight="600">III</text>
  <circle cx="175" cy="105" r="4" fill="#5B4FCF"/><text x="184" y="101" font-family="DM Sans,sans-serif" font-size="7" fill="#5B4FCF" font-weight="600">IV</text>
  <circle cx="135" cy="118" r="4" fill="#E8A020"/><text x="126" y="114" font-family="DM Sans,sans-serif" font-size="7" fill="#E8A020" text-anchor="end" font-weight="600">V</text>
  <circle cx="180" cy="120" r="4" fill="#E8A020"/><text x="189" y="116" font-family="DM Sans,sans-serif" font-size="7" fill="#E8A020" font-weight="600">VI</text>
  <circle cx="130" cy="132" r="4" fill="#C9432A"/><text x="121" y="128" font-family="DM Sans,sans-serif" font-size="7" fill="#C9432A" text-anchor="end" font-weight="600">VII</text>
  <circle cx="185" cy="133" r="4" fill="#C9432A"/><text x="194" y="129" font-family="DM Sans,sans-serif" font-size="7" fill="#C9432A" font-weight="600">VIII</text>
  <circle cx="145" cy="148" r="4" fill="#0F1F3D"/><text x="136" y="144" font-family="DM Sans,sans-serif" font-size="7" fill="#0F1F3D" text-anchor="end" font-weight="600">IX</text>
  <circle cx="175" cy="148" r="4" fill="#0F1F3D"/><text x="184" y="144" font-family="DM Sans,sans-serif" font-size="7" fill="#0F1F3D" font-weight="600">X</text>
  <circle cx="148" cy="158" r="4" fill="#0D7377"/><text x="139" y="155" font-family="DM Sans,sans-serif" font-size="7" fill="#0D7377" text-anchor="end" font-weight="600">XI</text>
  <circle cx="172" cy="158" r="4" fill="#0D7377"/><text x="181" y="155" font-family="DM Sans,sans-serif" font-size="7" fill="#0D7377" font-weight="600">XII</text>
  <rect x="10" y="185" width="300" height="50" rx="5" fill="#F5F3F0" stroke="#E0DCD7" stroke-width="1"/>
  <text x="20" y="198" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" font-weight="600">S = Sensory  M = Motor  B = Both</text>
  <text x="20" y="210" font-family="DM Sans,sans-serif" font-size="6.5" fill="#0D7377">I-S Smell  II-S Vision  III-M Eye mvmt  IV-M Sup oblique</text>
  <text x="20" y="220" font-family="DM Sans,sans-serif" font-size="6.5" fill="#E8A020">V-B Face sensation+mastication  VI-M Lat rectus</text>
  <text x="20" y="230" font-family="DM Sans,sans-serif" font-size="6.5" fill="#C9432A">VII-B Facial expression+taste  VIII-S Hearing/balance</text>
  <text x="200" y="210" font-family="DM Sans,sans-serif" font-size="6.5" fill="#0F1F3D">IX-B Pharynx+taste  X-B Vagus</text>
  <text x="200" y="220" font-family="DM Sans,sans-serif" font-size="6.5" fill="#0D7377">XI-M Trapezius+SCM  XII-M Tongue</text>
</svg>`,
        caption: 'Cranial nerve origins from the brain — color-coded by functional group. S = sensory, M = motor, B = both.'
      },
      svg2: null,
      prose: [
        "The 12 cranial nerves are tested systematically during the neurological exam. The mnemonic for their names is: Oh, Oh, Oh, To Touch And Feel Very Good Velvet, AH (Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Accessory, Hypoglossal). The mnemonic for sensory/motor/both is: Some Say Marry Money But My Brother Says Big Brains Matter Most.",
        "CN I (Olfactory): test with familiar non-irritating odors (coffee, vanilla) in each nostril separately with eyes closed. CN II (Optic): test visual acuity with a Snellen chart, visual fields by confrontation, and fundoscopic exam. CN III, IV, VI (Oculomotor, Trochlear, Abducens): test together using the H-pattern for extraocular movements, pupillary light reflex (CN III), and accommodation.",
        "CN V (Trigeminal): test light touch in all three divisions (ophthalmic V1, maxillary V2, mandibular V3), corneal reflex (afferent limb), and motor function by asking the patient to clench the jaw. CN VII (Facial): test by asking the patient to raise eyebrows, close eyes tightly, show teeth, and puff cheeks — distinguish upper motor neuron (forehead spared) from lower motor neuron (entire side affected). CN VIII (Vestibulocochlear): test hearing with finger rub, Weber, and Rinne tests.",
        "CN IX and X (Glossopharyngeal and Vagus): test together — say 'ah' and observe palate rise (uvula deviates away from the lesion side), test gag reflex (CN IX is afferent, CN X is efferent). CN XI (Spinal Accessory): test shoulder shrug against resistance (trapezius) and head turn against resistance (sternocleidomastoid — the SCM turns the head to the opposite side, so test by resisting the turn). CN XII (Hypoglossal): ask the patient to protrude the tongue — it deviates toward the side of the lesion."
      ],
      snaps: [
        { label: 'Names mnemonic',  value: 'Oh Oh Oh To Touch And Feel Very Good Velvet AH' },
        { label: 'Type mnemonic',   value: 'Some Say Marry Money But My Brother Says Big Brains Matter Most' },
        { label: 'Key CN VII rule',  value: 'UMN = forehead spared; LMN = entire side paralyzed' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'Most-tested neurological concept. Expect 2-3 questions on cranial nerves on every NR509 neuro exam.' },
        trap:   "CN XI tests the SCM, which turns the head to the <em>opposite</em> side. To test the right SCM, you resist the patient turning left. Students reverse this constantly.",
        pearl:  "Bell's palsy (LMN CN VII) = entire half of face paralyzed including forehead. Stroke (UMN CN VII) = forehead spared because it has bilateral cortical innervation.",
        missed: "Tongue deviation: the tongue deviates <em>toward</em> the lesion in a CN XII palsy — the opposite side pushes it over. Students assume it deviates away.",
        source: "\"Ask the patient to protrude the tongue and note any asymmetry, atrophy, or fasciculations. The tongue deviates toward the side of a cortical or CN XII lesion.\" — Bates' 8th Ed., p. 698"
      },
      questions: [
        {
          id:      'q_cn_1',
          num:     '1 of 2',
          stem:    'A <strong>68-year-old male</strong> presents with sudden left-sided facial droop. He <strong>cannot close his left eye, raise his left eyebrow, or smile on the left</strong>. Hearing is intact. Which diagnosis is most likely?',
          options: ['Left hemispheric stroke (UMN CN VII)', 'Right hemispheric stroke (UMN CN VII)', "Bell's palsy (LMN CN VII)", 'CN V lesion'],
          answer:  'C',
          rationale: '<strong>Correct: C — Bell\'s palsy (LMN CN VII).</strong> The entire left side of the face is affected including the forehead (cannot raise eyebrow or close eye). This pattern indicates a lower motor neuron lesion because the forehead muscles lose all innervation. <div class="rat-wrong"><strong>A and B (stroke/UMN)</strong> would spare the forehead — the patient could still raise the eyebrow and close the eye because the forehead receives bilateral cortical innervation. <strong>D (CN V)</strong> controls facial sensation and mastication, not facial expression.</div>'
        },
        {
          id:      'q_cn_2',
          num:     '2 of 2',
          stem:    'You ask a patient to <strong>protrude her tongue</strong>. It deviates to the <strong>right</strong>. Which cranial nerve is affected and on which side?',
          options: ['CN XII — left side', 'CN XII — right side', 'CN X — right side', 'CN IX — left side'],
          answer:  'B',
          rationale: '<strong>Correct: B — CN XII, right side.</strong> The tongue deviates toward the side of the lesion in a hypoglossal nerve palsy. The intact left CN XII pushes the tongue to the right because the right genioglossus is weak. <div class="rat-wrong"><strong>A (CN XII left)</strong> would cause deviation to the left. <strong>C (CN X)</strong> controls the palate and pharynx, not the tongue. <strong>D (CN IX)</strong> is sensory to the pharynx and does not control tongue protrusion.</div>'
        }
      ]
    },

    // ── CONCEPT 3: SUBARACHNOID HEMORRHAGE RED FLAGS ─────────
    {
      id:        'sah',
      name:      'Subarachnoid Hemorrhage Red Flags',
      batesPage: 'p. 718',
      svg1: null,
      svg2: null,
      prose: [
        "Subarachnoid hemorrhage (SAH) is the neurological emergency that every clinician must recognize instantly. The hallmark is a thunderclap headache — the worst headache of the patient's life, reaching peak intensity within seconds to one minute. Any patient who describes their headache this way requires emergent evaluation.",
        "The classic presentation includes sudden severe headache, neck stiffness (meningismus from blood irritating the meninges), nausea and vomiting, photophobia, and altered mental status. A sentinel headache — a sudden severe headache days to weeks before presentation — occurs in up to 50% of patients and represents a small warning leak before a larger rupture.",
        "Physical exam findings include nuchal rigidity, positive Kernig's and Brudzinski's signs, CN III palsy (a posterior communicating artery aneurysm compresses CN III causing a dilated unreactive pupil with ptosis and 'down and out' eye position), and retinal hemorrhages (subhyaloid or Terson syndrome). Focal neurological deficits depend on the location of the hemorrhage.",
        "CT without contrast is the initial study and is 95-100% sensitive within 6 hours. If CT is negative but clinical suspicion remains high, lumbar puncture is performed — xanthochromia (yellow discoloration of CSF from bilirubin breakdown of blood) confirms SAH. CT angiography identifies the source aneurysm. The most common cause is rupture of a berry aneurysm at the circle of Willis."
      ],
      snaps: [
        { label: 'Cardinal symptom',  value: 'Thunderclap headache — worst headache of life, peaks in seconds' },
        { label: 'Sentinel headache', value: 'Warning leak days-weeks before — present in up to 50%' },
        { label: 'CN III palsy',      value: 'PComm aneurysm → dilated pupil, ptosis, down-and-out eye' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'High-yield emergency diagnosis. The thunderclap headache description alone will appear in at least one exam question.' },
        trap:   "A normal CT does <em>not</em> rule out SAH. After 6 hours, sensitivity drops. If suspicion is high and CT is negative, LP is mandatory.",
        pearl:  "CN III palsy + headache = posterior communicating artery aneurysm until proven otherwise. The pupil is involved because parasympathetic fibers run on the outside of CN III and are compressed first.",
        missed: "Students forget the sentinel headache. A patient who had a sudden severe headache 2 weeks ago that resolved — and now presents with a worse one — the first headache was the warning leak.",
        source: "\"Sudden, severe headache... 'the worst headache of my life'... Immediate investigation for subarachnoid hemorrhage is warranted.\" — Bates' 8th Ed., p. 718"
      },
      questions: [
        {
          id:      'q_sah_1',
          num:     '1 of 2',
          stem:    'A <strong>45-year-old female</strong> presents with sudden severe headache that reached peak intensity within 30 seconds. She describes it as the <strong>worst headache of her life</strong>. She has neck stiffness and photophobia. A non-contrast CT head is <strong>negative</strong>. What is the next step?',
          options: ['Reassure and discharge with analgesics', 'MRI brain with contrast', 'Lumbar puncture', 'CT with contrast'],
          answer:  'C',
          rationale: '<strong>Correct: C — Lumbar puncture.</strong> A negative CT does not rule out SAH, especially after the first 6 hours. LP looking for xanthochromia (yellow CSF from blood breakdown) is the definitive next step when CT is negative but clinical suspicion remains high. <div class="rat-wrong"><strong>A (discharge)</strong> is dangerous — thunderclap headache with meningismus demands complete workup. <strong>B (MRI)</strong> is less sensitive than LP for SAH. <strong>D (CT with contrast)</strong> adds nothing to SAH evaluation — CTA may follow LP to find the aneurysm, but LP first.</div>'
        },
        {
          id:      'q_sah_2',
          num:     '2 of 2',
          stem:    'A <strong>52-year-old male</strong> presents with thunderclap headache and a <strong>right pupil that is fixed and dilated</strong>. The right eye is deviated <strong>down and out</strong> with ptosis. Which structure is most likely compressed?',
          options: ['CN IV (trochlear)', 'CN VI (abducens)', 'CN III (oculomotor) — posterior communicating artery aneurysm', 'CN II (optic) — optic chiasm compression'],
          answer:  'C',
          rationale: '<strong>Correct: C — CN III (oculomotor) compressed by posterior communicating artery aneurysm.</strong> CN III carries parasympathetic fibers on its surface that control pupil constriction. A PComm aneurysm compresses these fibers first, producing a fixed dilated pupil. Loss of CN III motor function causes ptosis (levator palpebrae) and down-and-out deviation (unopposed lateral rectus and superior oblique). <div class="rat-wrong"><strong>A (CN IV)</strong> would cause difficulty looking down and in — no pupil involvement. <strong>B (CN VI)</strong> would cause medial deviation (cannot abduct). <strong>D (CN II)</strong> would cause visual loss, not eye movement abnormality.</div>'
        }
      ]
    },

    // ── CONCEPT 4: INCREASED ICP SIGNS ───────────────────────
    {
      id:        'icp',
      name:      'Increased Intracranial Pressure Signs',
      batesPage: 'p. 717',
      svg1: null,
      svg2: null,
      prose: [
        "Increased intracranial pressure (ICP) is the final common pathway of many neurological emergencies — tumors, hemorrhage, hydrocephalus, meningitis, and traumatic brain injury. The skull is a fixed box. When pressure rises inside it, the brain herniates through the available openings, and the clinical signs reflect this mechanical process.",
        "The Cushing triad is the classic vital sign pattern of dangerously elevated ICP: hypertension (systolic rises to maintain cerebral perfusion), bradycardia (baroreceptor reflex responding to hypertension), and irregular respirations (brainstem compression affecting the respiratory center). This triad is a late and ominous finding — by the time it appears, herniation may be imminent.",
        "Papilledema — swelling of the optic disc seen on fundoscopic exam — is the most reliable physical exam finding of chronically elevated ICP. It occurs because increased CSF pressure is transmitted along the optic nerve sheath, compressing the optic nerve and obstructing axoplasmic flow and venous return. Papilledema takes hours to days to develop, so its absence does not rule out acutely elevated ICP.",
        "Other signs include headache worse in the morning or with Valsalva maneuver (coughing, straining), nausea and vomiting (especially projectile vomiting without preceding nausea), CN VI palsy (a false localizing sign because the long intracranial course of CN VI makes it vulnerable to diffuse pressure), and altered mental status progressing to obtundation and coma."
      ],
      snaps: [
        { label: 'Cushing triad',   value: 'Hypertension + bradycardia + irregular respirations = late sign' },
        { label: 'Papilledema',     value: 'Optic disc swelling on fundoscopy — most reliable exam finding' },
        { label: 'False localizer', value: 'CN VI palsy — long intracranial course makes it vulnerable to diffuse ICP' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Tested directly in 2-3 forms: vital sign pattern, papilledema significance, and CN VI false localizing.' },
        trap:   "Cushing triad is a <em>late</em> sign. Do not wait for it. By the time bradycardia and hypertension coexist, herniation is imminent.",
        pearl:  "CN VI palsy is a false localizing sign — it does not tell you where the lesion is. It simply means ICP is elevated. The nerve's long course along the base of the skull makes it vulnerable to stretch from any source of increased pressure.",
        missed: "Papilledema is not immediate. Acutely elevated ICP (minutes to hours) will not produce papilledema on exam. Its absence does not rule out the diagnosis.",
        source: "\"Increased intracranial pressure may manifest with headache, vomiting, altered mental status, papilledema, and, in advanced stages, the Cushing response.\" — Bates' 8th Ed., p. 717"
      },
      questions: [
        {
          id:      'q_icp_1',
          num:     '1 of 2',
          stem:    'A <strong>6-year-old child</strong> with a posterior fossa tumor presents with morning headaches, projectile vomiting, and bilateral <strong>CN VI palsies</strong>. Fundoscopic exam shows <strong>bilateral optic disc swelling</strong>. What does the CN VI palsy indicate?',
          options: ['Bilateral pontine lesion', 'False localizing sign of increased ICP', 'Bilateral cavernous sinus thrombosis', 'Myasthenia gravis'],
          answer:  'B',
          rationale: '<strong>Correct: B — False localizing sign of increased ICP.</strong> CN VI has the longest intracranial course and is susceptible to stretch from diffuse increased pressure. The bilateral palsy does not localize a specific lesion — it indicates globally elevated ICP from the posterior fossa tumor causing obstructive hydrocephalus. <div class="rat-wrong"><strong>A (pontine lesion)</strong> would produce additional brainstem signs. <strong>C (cavernous sinus)</strong> would include CN III, IV, V1, V2 involvement. <strong>D (MG)</strong> produces fatigable weakness, not fixed palsies with papilledema.</div>'
        },
        {
          id:      'q_icp_2',
          num:     '2 of 2',
          stem:    'A trauma patient has a GCS of 7. Vitals show <strong>BP 195/110, HR 48, irregular respirations</strong>. What does this vital sign pattern represent?',
          options: ['Neurogenic shock', 'Cushing triad — critically elevated ICP', 'Spinal shock', 'Vasovagal response'],
          answer:  'B',
          rationale: '<strong>Correct: B — Cushing triad.</strong> Hypertension + bradycardia + irregular respirations is the Cushing response to critically elevated intracranial pressure. The brain drives systolic pressure up to maintain perfusion against rising ICP; baroreceptors respond with reflex bradycardia; brainstem compression disrupts respiratory rhythm. <div class="rat-wrong"><strong>A (neurogenic shock)</strong> produces hypotension + bradycardia — not hypertension. <strong>C (spinal shock)</strong> causes flaccid areflexia below the lesion. <strong>D (vasovagal)</strong> causes hypotension + bradycardia with a benign course.</div>'
        }
      ]
    },

    // ── CONCEPT 5: ROMBERG + GAIT ASSESSMENT ─────────────────
    {
      id:        'romberg_gait',
      name:      'Romberg Test + Gait Assessment',
      batesPage: 'p. 710',
      svg1: null,
      svg2: null,
      prose: [
        "The Romberg test evaluates proprioception — the ability to sense body position without visual input. The patient stands with feet together and eyes open first (to establish baseline stability), then closes the eyes. A positive Romberg is loss of balance that occurs only after the eyes are closed. If the patient is unsteady with eyes open, the test is uninterpretable — you cannot remove vision if stance is already impaired.",
        "A positive Romberg localizes the problem to the posterior columns (dorsal columns) of the spinal cord or to peripheral sensory nerves. These pathways carry proprioception and vibration. When they fail, the patient relies on vision to maintain balance. Remove vision, and they fall. A cerebellar lesion produces ataxia with eyes open and closed — Romberg adds nothing because the problem is coordination, not sensory input.",
        "Gait assessment is the single most integrative neurological test. It requires motor function, sensory input, cerebellar coordination, basal ganglia modulation, and vestibular balance to work together. Ask the patient to walk normally, walk heel-to-toe (tandem gait), walk on toes, and walk on heels.",
        "Key gait patterns to recognize: spastic gait (circumduction, stiff leg swung outward) from UMN lesion, steppage gait (foot drop with high knee lift) from peroneal nerve or LMN lesion, ataxic wide-based gait from cerebellar disease, festinating gait (shuffling with forward lean) from Parkinson disease, and scissors gait (legs crossing midline) from bilateral spastic paresis."
      ],
      snaps: [
        { label: 'Romberg positive', value: 'Falls with eyes closed only → posterior column or peripheral nerve lesion' },
        { label: 'Romberg negative', value: 'Unsteady with eyes open AND closed → cerebellar (not sensory)' },
        { label: 'Tandem gait',      value: 'Heel-to-toe walking — most sensitive test for subtle cerebellar dysfunction' }
      ],
      margin: {
        stars:  { rating: '★★★★☆', text: 'Romberg interpretation and gait patterns appear on nearly every neuro practical and written exam.' },
        trap:   "If the patient sways with eyes <em>open</em>, Romberg is not interpretable — not positive. The test requires a stable baseline with eyes open first.",
        pearl:  "Cerebellar ataxia = unsteady eyes open AND closed. Posterior column disease = unsteady only with eyes closed. This single distinction drives exam questions.",
        missed: "Students call any unsteadiness a positive Romberg. The test is <em>only</em> positive if the patient is stable with eyes open and becomes unstable when eyes close.",
        source: "\"A positive Romberg sign is present when the patient, standing with feet together and eyes closed, becomes significantly more unsteady with eyes closed than open.\" — Bates' 8th Ed., p. 710"
      },
      questions: [
        {
          id:      'q_romberg_1',
          num:     '1 of 2',
          stem:    'A <strong>62-year-old female</strong> with vitamin B12 deficiency stands with feet together. With eyes open, she is <strong>stable</strong>. When she closes her eyes, she <strong>sways and nearly falls</strong>. Which structure is most likely affected?',
          options: ['Cerebellum', 'Posterior columns (dorsal columns)', 'Basal ganglia', 'Frontal lobe motor cortex'],
          answer:  'B',
          rationale: '<strong>Correct: B — Posterior columns.</strong> A positive Romberg (stable eyes open, unstable eyes closed) indicates loss of proprioception carried by the posterior columns. B12 deficiency causes subacute combined degeneration, which damages the posterior columns and corticospinal tracts. <div class="rat-wrong"><strong>A (cerebellum)</strong> would produce ataxia with eyes open AND closed — Romberg would not change the picture. <strong>C (basal ganglia)</strong> produces rigidity and tremor, not proprioceptive loss. <strong>D (frontal motor cortex)</strong> produces UMN weakness, not sensory ataxia.</div>'
        },
        {
          id:      'q_romberg_2',
          num:     '2 of 2',
          stem:    'A <strong>55-year-old male</strong> has a wide-based, staggering gait that does <strong>not worsen when he closes his eyes</strong>. He cannot perform heel-to-toe walking. The Romberg test is negative. Where is the lesion?',
          options: ['Posterior columns', 'Cerebellum', 'Peripheral nerves', 'Basal ganglia'],
          answer:  'B',
          rationale: '<strong>Correct: B — Cerebellum.</strong> A wide-based ataxic gait that does not worsen with eye closure (negative Romberg) indicates a cerebellar lesion. The cerebellum coordinates movement independent of visual input, so removing vision does not change the clinical picture. Inability to tandem walk confirms cerebellar dysfunction. <div class="rat-wrong"><strong>A (posterior columns)</strong> would produce a positive Romberg — worse with eyes closed. <strong>C (peripheral nerves)</strong> would also worsen with eye closure (sensory ataxia). <strong>D (basal ganglia)</strong> produces shuffling/festinating gait, not wide-based ataxia.</div>'
        }
      ]
    },

    // ── CONCEPT 6: SPINOTHALAMIC PATHWAYS ────────────────────
    {
      id:        'spinothalamic',
      name:      'Pain/Temp/Touch Pathways — Spinothalamic Tract',
      batesPage: 'p. 705',
      svg1: {
        label: 'Spinal cord cross-section — ascending sensory pathways',
        markup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="background:#FAFAF8">
  <text x="160" y="18" font-family="DM Serif Display,serif" font-size="13" fill="#0F1F3D" text-anchor="middle">Spinal Cord — Sensory Pathways</text>
  <text x="160" y="32" font-family="DM Sans,sans-serif" font-size="8" fill="#9B9890" text-anchor="middle">Cross-section at thoracic level</text>
  <ellipse cx="160" cy="130" rx="95" ry="65" fill="#FFF8F5" stroke="#D4C5BE" stroke-width="2"/>
  <path d="M140,95 Q145,105 160,110 Q175,105 180,95 L180,130 Q175,145 160,150 Q145,145 140,130 Z" fill="#BDB5AC" opacity=".5" stroke="#9B9890" stroke-width="1.5"/>
  <text x="160" y="125" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57" text-anchor="middle">Gray matter</text>
  <path d="M70,100 Q80,95 100,100 Q110,108 105,120 Q95,128 80,125 Q68,118 70,100 Z" fill="#0D7377" opacity=".3" stroke="#0D7377" stroke-width="2"/>
  <text x="75" y="145" font-family="DM Sans,sans-serif" font-size="7.5" fill="#0D7377" text-anchor="middle" font-weight="600">Lateral</text>
  <text x="75" y="154" font-family="DM Sans,sans-serif" font-size="7.5" fill="#0D7377" text-anchor="middle" font-weight="600">spinothalamic</text>
  <text x="75" y="163" font-family="DM Sans,sans-serif" font-size="6.5" fill="#0D7377" text-anchor="middle">(pain + temp)</text>
  <path d="M115,155 Q125,160 140,158 Q148,152 145,145" fill="none" stroke="#E8A020" stroke-width="2" stroke-linecap="round"/>
  <text x="130" y="172" font-family="DM Sans,sans-serif" font-size="7" fill="#E8A020" text-anchor="middle" font-weight="600">Anterior</text>
  <text x="130" y="181" font-family="DM Sans,sans-serif" font-size="7" fill="#E8A020" text-anchor="middle" font-weight="600">spinothalamic</text>
  <text x="130" y="190" font-family="DM Sans,sans-serif" font-size="6.5" fill="#E8A020" text-anchor="middle">(crude touch)</text>
  <path d="M180,80 Q200,75 215,82 Q228,95 222,110 Q210,118 195,112 Q182,100 180,80 Z" fill="#5B4FCF" opacity=".25" stroke="#5B4FCF" stroke-width="2"/>
  <text x="215" y="130" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5B4FCF" text-anchor="middle" font-weight="600">Dorsal columns</text>
  <text x="215" y="139" font-family="DM Sans,sans-serif" font-size="6.5" fill="#5B4FCF" text-anchor="middle">(proprioception</text>
  <text x="215" y="148" font-family="DM Sans,sans-serif" font-size="6.5" fill="#5B4FCF" text-anchor="middle">+ vibration</text>
  <text x="215" y="157" font-family="DM Sans,sans-serif" font-size="6.5" fill="#5B4FCF" text-anchor="middle">+ fine touch)</text>
  <defs><marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#C9432A"/></marker></defs>
  <path d="M55,110 L55,55 L160,55" fill="none" stroke="#0D7377" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr3)"/>
  <text x="55" y="48" font-family="DM Sans,sans-serif" font-size="7" fill="#C9432A" text-anchor="start">→ Crosses at entry level</text>
  <path d="M240,90 L240,45 L175,45" fill="none" stroke="#5B4FCF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr3)"/>
  <text x="245" y="40" font-family="DM Sans,sans-serif" font-size="7" fill="#C9432A" text-anchor="start">→ Crosses at medulla</text>
  <rect x="10" y="200" width="300" height="35" rx="5" fill="#F5F3F0" stroke="#E0DCD7" stroke-width="1"/>
  <text x="20" y="214" font-family="DM Sans,sans-serif" font-size="7.5" fill="#0D7377" font-weight="600">Spinothalamic:</text>
  <text x="105" y="214" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57">crosses at spinal cord level → contralateral deficits</text>
  <text x="20" y="228" font-family="DM Sans,sans-serif" font-size="7.5" fill="#5B4FCF" font-weight="600">Dorsal columns:</text>
  <text x="105" y="228" font-family="DM Sans,sans-serif" font-size="7" fill="#5F5D57">crosses at medulla → ipsilateral deficits below lesion</text>
</svg>`,
        caption: 'Spinal cord cross-section showing the lateral spinothalamic tract (pain/temp), anterior spinothalamic tract (crude touch), and dorsal columns (proprioception/vibration/fine touch). Crossing levels determine deficit laterality.'
      },
      svg2: null,
      prose: [
        "Two major ascending sensory pathways carry different modalities and cross at different levels — and this difference is the key to localizing spinal cord lesions. The spinothalamic tract carries pain, temperature, and crude touch. The dorsal columns (posterior columns) carry proprioception, vibration, and fine (discriminative) touch.",
        "The spinothalamic tract crosses within one to two segments of entry. A sensory neuron enters the spinal cord, synapses in the dorsal horn, and the second-order neuron immediately crosses to the opposite anterolateral white matter and ascends to the thalamus. Because it crosses at the cord level, a hemisection (Brown-Sequard syndrome) produces contralateral loss of pain and temperature below the lesion.",
        "The dorsal columns ascend ipsilaterally all the way to the medulla, where they synapse and cross in the medial lemniscus. Because they cross at the brainstem, a spinal cord hemisection produces ipsilateral loss of proprioception and vibration below the lesion. This is the classic Brown-Sequard pattern: ipsilateral motor and proprioceptive loss, contralateral pain and temperature loss.",
        "Testing the spinothalamic tract: use a sharp object (broken tongue blade or safety pin) for pain, and a cold tuning fork or alcohol swab for temperature. Compare both sides. Test in a dermatomal pattern to find a sensory level — the highest level where sensation changes. Testing dorsal columns: use a 128 Hz tuning fork on bony prominences for vibration, and test joint position sense by moving the great toe up or down with the patient's eyes closed."
      ],
      snaps: [
        { label: 'Spinothalamic',   value: 'Pain + temp + crude touch — crosses at cord level → contralateral deficit' },
        { label: 'Dorsal columns',  value: 'Proprioception + vibration + fine touch — crosses at medulla → ipsilateral deficit' },
        { label: 'Brown-Sequard',   value: 'Hemisection: ipsilateral motor + proprioception loss; contralateral pain/temp loss' }
      ],
      margin: {
        stars:  { rating: '★★★★★', text: 'The crossing level difference drives 3-4 exam questions per neuro exam. Brown-Sequard is guaranteed to appear.' },
        trap:   "Students reverse the deficit sides. Remember: spinothalamic crosses early (contralateral loss), dorsal columns cross late (ipsilateral loss). The <em>opposite</em> of what you might assume.",
        pearl:  "Syringomyelia (central cord cavity) destroys the crossing spinothalamic fibers in the anterior commissure, producing bilateral loss of pain and temperature at the level of the lesion — a suspended or cape-like sensory loss — while dorsal column function is preserved.",
        missed: "Brown-Sequard: students forget the motor component. The corticospinal tract is also ipsilateral (crosses at the medullary pyramids), so ipsilateral UMN signs (spastic paralysis) occur below the lesion.",
        source: "\"Pain and temperature fibers enter the dorsal horn, synapse, cross within one or two spinal segments in the anterior commissure, and ascend in the contralateral spinothalamic tract.\" — Bates' 8th Ed., p. 705"
      },
      questions: [
        {
          id:      'q_spino_1',
          num:     '1 of 2',
          stem:    'A patient with a <strong>right-sided spinal cord hemisection at T10</strong> presents with weakness of the right leg, loss of vibration sense in the right leg, and <strong>loss of pain and temperature sensation in the left leg</strong>. What is this pattern called?',
          options: ['Anterior cord syndrome', 'Central cord syndrome', 'Brown-Sequard syndrome', 'Posterior cord syndrome'],
          answer:  'C',
          rationale: '<strong>Correct: C — Brown-Sequard syndrome.</strong> A spinal cord hemisection produces ipsilateral motor loss (corticospinal tract) and ipsilateral proprioception/vibration loss (dorsal columns), with contralateral pain and temperature loss (spinothalamic tract crosses at cord level). <div class="rat-wrong"><strong>A (anterior cord)</strong> produces bilateral motor and pain/temp loss with preserved proprioception. <strong>B (central cord)</strong> produces upper > lower extremity weakness (cape distribution). <strong>D (posterior cord)</strong> produces bilateral proprioceptive loss only.</div>'
        },
        {
          id:      'q_spino_2',
          num:     '2 of 2',
          stem:    'A <strong>35-year-old male</strong> with a syrinx at C5-C8 presents with <strong>bilateral loss of pain and temperature</strong> in both arms in a cape-like distribution. <strong>Vibration and proprioception are intact</strong> in the arms. Which structure is damaged?',
          options: ['Dorsal columns', 'Lateral corticospinal tracts', 'Anterior commissure — crossing spinothalamic fibers', 'Posterior nerve roots'],
          answer:  'C',
          rationale: '<strong>Correct: C — Anterior commissure (crossing spinothalamic fibers).</strong> A syrinx (central cord cavity) expands from the central canal and destroys the decussating spinothalamic fibers in the anterior commissure. This produces bilateral loss of pain and temperature at the level of the cavity while preserving dorsal column function (proprioception and vibration) because the dorsal columns are posterior and not disrupted. <div class="rat-wrong"><strong>A (dorsal columns)</strong> would produce loss of proprioception and vibration, not pain/temp. <strong>B (corticospinal)</strong> would produce motor weakness. <strong>D (posterior roots)</strong> would produce all modalities lost in a dermatomal pattern, not selective pain/temp loss.</div>'
        }
      ]
    }
  ],

  // ── NEXT SYSTEM PREVIEW ──────────────────────────────────
  nextSystem: {
    num:     4,
    title:   'Genitourinary & Obstetric',
    href:    'system-4.html',
    preview: 'Male and female GU anatomy, speculum technique, cervical screening guidelines, testicular torsion vs. epididymitis, and the obstetric exam sequence that appears every NR509 final...'
  }
};

// ── DRILL QUESTIONS for System 3 ─────────────────────────
const DRILL_QUESTIONS = [
  {
    concept:   "Kernig's + Brudzinski's Signs",
    stem:      "A 22-year-old college student presents with fever, headache, and photophobia. You flex her neck and observe involuntary hip and knee flexion. Which sign is positive?",
    options:   ["Kernig's sign", "Brudzinski's sign", 'Babinski sign', 'Lhermitte sign'],
    answer:    1,
    rationale: "Brudzinski's sign: passive neck flexion causing involuntary hip and knee flexion indicates meningeal irritation. Kernig's involves resistance to knee extension with hip flexed. Babinski tests UMN lesions. Lhermitte sign is electric shock sensation with neck flexion in MS."
  },
  {
    concept:   'Cranial Nerves',
    stem:      "A patient's right trapezius is weak on resistance testing. Which cranial nerve is affected?",
    options:   ['CN X (vagus)', 'CN XI (spinal accessory)', 'CN XII (hypoglossal)', 'CN VII (facial)'],
    answer:    1,
    rationale: "CN XI (spinal accessory) innervates the trapezius and sternocleidomastoid. Weakness of shoulder shrug against resistance indicates CN XI dysfunction. CN X controls the palate and larynx. CN XII controls the tongue. CN VII controls facial expression."
  },
  {
    concept:   'Subarachnoid Hemorrhage',
    stem:      "A patient reports a sudden severe headache 10 days ago that resolved spontaneously. Now she presents with an even worse headache and neck stiffness. What was the first headache?",
    options:   ['Migraine with aura', 'Tension headache', 'Sentinel headache (warning leak)', 'Cluster headache'],
    answer:    2,
    rationale: "A sentinel headache is a warning leak from a cerebral aneurysm that precedes a major SAH by days to weeks. Present in up to 50% of SAH patients. The sudden onset and subsequent worse headache are classic for aneurysmal SAH."
  },
  {
    concept:   'Romberg Test',
    stem:      "A patient stands with feet together. She is stable with eyes open but sways significantly with eyes closed. What does this indicate?",
    options:   ['Cerebellar dysfunction', 'Posterior column (dorsal column) disease', 'Vestibular neuritis', 'Frontal lobe ataxia'],
    answer:    1,
    rationale: "A positive Romberg (stable eyes open, unstable eyes closed) indicates a posterior column or peripheral sensory nerve lesion affecting proprioception. The patient compensates with vision; remove it and balance fails. Cerebellar dysfunction causes ataxia with eyes open and closed."
  },
  {
    concept:   'Spinothalamic Tract',
    stem:      "A patient with a left-sided spinal cord hemisection at T6 would lose pain and temperature sensation on which side below the lesion?",
    options:   ['Left (ipsilateral)', 'Right (contralateral)', 'Bilateral', 'Neither — pain/temp is preserved'],
    answer:    1,
    rationale: "The spinothalamic tract crosses within 1-2 segments of entry. In a left hemisection, the left spinothalamic tract is destroyed. That tract carries pain and temperature from the right (contralateral) body because the fibers already crossed at the cord level. Therefore, a left hemisection produces right-sided (contralateral) loss of pain and temperature below the lesion."
  }
];
