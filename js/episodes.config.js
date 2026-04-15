/**
 * ═══════════════════════════════════════════════════════════════
 *  NR509 PODCAST — EPISODE CONFIG
 *  Edit ONLY this file when updating audio links.
 *  Everything else in the player updates automatically.
 *
 *  STATUS: "ready" | "coming" | "draft"
 * ═══════════════════════════════════════════════════════════════
 */

var EPISODE_CONFIG = [

  // ─── EPISODE 1 — Abdominal & Musculoskeletal ─────────────────
  {
    id: 0,
    status: "ready",
    src: "https://archive.org/download/nr-509-abdominal-and-musculoskeletal-assessment-review/NR_509_Abdominal_and_Musculoskeletal_Assessment_Review.m4a",
  },

  // ─── EPISODE 2 — Neurological & Genitourinary ────────────────
  {
    id: 1,
    status: "ready",
    src: "https://archive.org/download/tanner-stage-iv-and-2024-screening-updates-1/NR_509_Neuro_and_GU_Final_Walkthrough.m4a",
  },

  // ─── EPISODE 3 — Special Populations, Breast & Cross-System ──
  {
    id: 2,
    status: "ready",
    src: "https://archive.org/download/tanner-stage-iv-and-2024-screening-updates-1/Tanner_Stage_IV_and_2024_Screening_Updates%20%281%29.m4a",
  },

];

/**
 * ─── FALLBACK ────────────────────────────────────────────────
 * Streams when src is empty or status is not "ready".
 */
var FALLBACK_AUDIO_URL =
  "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3";
