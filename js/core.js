/* ============================================================
   core.js — Shared logic: exam date, countdown, progress
   Loaded on every page.
   ============================================================ */

const NR509 = {

  // ── EXAM DATE ──────────────────────────────────────────────
  openDateModal() {
    document.getElementById('modalBg').classList.add('open');
  },

  saveDate() {
    const d = document.getElementById('examInput').value;
    if (!d) return;
    localStorage.setItem('nr509exam', d);
    document.getElementById('modalBg').classList.remove('open');
    NR509.updateCountdown();
  },

  updateCountdown() {
    const el = document.getElementById('cdText');
    const hero = document.getElementById('homeCdDisplay');
    const stored = localStorage.getItem('nr509exam');

    const setText = (text) => {
      if (el) el.textContent = text;
      if (hero) hero.textContent = text;
    };

    if (!stored) { setText('Set exam date'); return; }

    const exam = new Date(stored + 'T00:00:00');
    const now  = new Date();
    now.setHours(0, 0, 0, 0);
    const diff = Math.round((exam - now) / 864e5);

    if      (diff > 1)  setText(diff + ' days to exam');
    else if (diff === 1) setText('Exam tomorrow');
    else if (diff === 0) setText('Exam today — go crush it');
    else                 setText('Exam was ' + Math.abs(diff) + ' days ago');
  },

  // ── PROGRESS TRACKING ─────────────────────────────────────
  // Mark a system as visited/complete in localStorage
  markSystem(num) {
    const done = NR509.getDoneSystems();
    if (!done.includes(num)) {
      done.push(num);
      localStorage.setItem('nr509done', JSON.stringify(done));
    }
    NR509.renderNavDots();
  },

  getDoneSystems() {
    try {
      return JSON.parse(localStorage.getItem('nr509done') || '[]');
    } catch (e) { return []; }
  },

  // ── NAV DOTS ──────────────────────────────────────────────
  renderNavDots() {
    const done    = NR509.getDoneSystems();
    const current = parseInt(document.body.dataset.system || '0');
    document.querySelectorAll('.nav-sys-dot').forEach(dot => {
      const n = parseInt(dot.dataset.sys);
      dot.classList.remove('done', 'active', 'pending');
      if (n === current)    dot.classList.add('active');
      else if (done.includes(n)) dot.classList.add('done');
      else                       dot.classList.add('pending');
    });
  },

  // ── GUIDE QUESTIONS ───────────────────────────────────────
  _guideSelections: {},

  selectOpt(el, qid, letter) {
    document.querySelectorAll('#' + qid + 'o .opt')
      .forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    NR509._guideSelections[qid] = letter;
    const btn = document.getElementById(qid + 'b');
    if (btn) btn.disabled = false;
  },

  checkAnswer(qid, correct) {
    const opts    = document.querySelectorAll('#' + qid + 'o .opt');
    const letters = ['A', 'B', 'C', 'D'];
    const chosen  = NR509._guideSelections[qid];

    opts.forEach((o, i) => {
      o.classList.remove('selected', 'correct', 'wrong', 'neutral-r');
      o.onclick = null;
      const l = letters[i];
      if      (l === correct)                 o.classList.add('correct');
      else if (l === chosen && chosen !== correct) o.classList.add('wrong');
      else                                    o.classList.add('neutral-r');
    });

    document.getElementById(qid + 'r')?.classList.add('open');
    const btn = document.getElementById(qid + 'b');
    if (btn) {
      btn.disabled  = true;
      btn.textContent = chosen === correct ? '✓ Correct' : '✗ Incorrect';
      btn.style.background = chosen === correct ? '#2E7D52' : '#C0392B';
    }
  },

  // ── INIT ──────────────────────────────────────────────────
  init() {
    NR509.updateCountdown();
    NR509.renderNavDots();

    // Mark current system as visited
    const sys = parseInt(document.body.dataset.system || '0');
    if (sys > 0) NR509.markSystem(sys);

    // Show exam date modal on first visit if not set
    if (!localStorage.getItem('nr509exam')) {
      const modal = document.getElementById('modalBg');
      if (modal) setTimeout(() => modal.classList.add('open'), 700);
    }
  }
};

document.addEventListener('DOMContentLoaded', NR509.init);
