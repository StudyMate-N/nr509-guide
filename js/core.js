/* ============================================================
   core.js — Shared logic: auth guard, countdown, progress
   ============================================================ */

const NR509 = {

  // ── AUTH GUARD ────────────────────────────────────────────
  // Call on every system page to block unauthenticated access
  guard() {
    if (localStorage.getItem('nr509unlocked') !== 'true') {
      window.location.replace('landing.html');
      return false;
    }
    return true;
  },

  // ── EXAM DATE MODAL (legacy — kept for compatibility) ─────
  openDateModal() {
    const m = document.getElementById('modalBg');
    if (m) m.classList.add('open');
  },

  saveDate() {
    const d = document.getElementById('examInput');
    if (!d || !d.value) return;
    localStorage.setItem('nr509exam', d.value);
    const m = document.getElementById('modalBg');
    if (m) m.classList.remove('open');
    NR509.updateCountdown();
  },

  // ── COUNTDOWN (nav pill only — dashboard has its own) ─────
  updateCountdown() {
    const navPill = document.getElementById('cdText');
    if (!navPill) return;
    const stored = localStorage.getItem('nr509exam');
    if (!stored) { navPill.textContent = 'Set exam date'; return; }
    const exam = new Date(stored + 'T00:00:00');
    const now  = new Date();
    now.setHours(0, 0, 0, 0);
    const diff = Math.round((exam - now) / 864e5);
    if      (diff > 1)   navPill.textContent = diff + ' days to exam';
    else if (diff === 1) navPill.textContent = 'Exam tomorrow';
    else if (diff === 0) navPill.textContent = 'Exam today — go crush it';
    else                 navPill.textContent = 'Exam was ' + Math.abs(diff) + ' days ago';
  },

  // ── PROGRESS TRACKING ────────────────────────────────────
  markSystem(num) {
    const done = NR509.getDoneSystems();
    if (!done.includes(num)) {
      done.push(num);
      localStorage.setItem('nr509done', JSON.stringify(done));
    }
    NR509.renderNavDots();
  },

  getDoneSystems() {
    try { return JSON.parse(localStorage.getItem('nr509done') || '[]'); }
    catch(e) { return []; }
  },

  // ── NAV DOTS ─────────────────────────────────────────────
  renderNavDots() {
    const done    = NR509.getDoneSystems();
    const current = parseInt(document.body.dataset.system || '0');
    document.querySelectorAll('.nav-sys-dot').forEach(function(dot) {
      const n = parseInt(dot.dataset.sys);
      dot.classList.remove('done', 'active', 'pending');
      if      (n === current)    dot.classList.add('active');
      else if (done.includes(n)) dot.classList.add('done');
      else                       dot.classList.add('pending');
    });
  },

  // ── GUIDE QUESTIONS ──────────────────────────────────────
  _sel: {},

  selectOpt(el, qid, letter) {
    document.querySelectorAll('#' + qid + 'o .opt')
      .forEach(function(o) { o.classList.remove('selected'); });
    el.classList.add('selected');
    NR509._sel[qid] = letter;
    const btn = document.getElementById(qid + 'b');
    if (btn) btn.disabled = false;
  },

  checkAnswer(qid, correct) {
    const opts   = document.querySelectorAll('#' + qid + 'o .opt');
    const L      = ['A','B','C','D'];
    const chosen = NR509._sel[qid];

    opts.forEach(function(o, i) {
      o.classList.remove('selected','correct','wrong','neutral-r');
      o.onclick = null;
      const l = L[i];
      if      (l === correct)                     o.classList.add('correct');
      else if (l === chosen && chosen !== correct) o.classList.add('wrong');
      else                                         o.classList.add('neutral-r');
    });

    const rat = document.getElementById(qid + 'r');
    if (rat) rat.classList.add('open');
    const btn = document.getElementById(qid + 'b');
    if (btn) {
      btn.disabled    = true;
      btn.textContent = chosen === correct ? '✓ Correct' : '✗ Incorrect';
      btn.style.background = chosen === correct ? '#2E7D52' : '#C0392B';
    }
  },

  // ── INIT ────────────────────────────────────────────────
  init() {
    // Auth guard on system pages only (not on landing/index)
    const sys = parseInt(document.body.dataset.system || '0');
    if (sys > 0 && localStorage.getItem('nr509unlocked') !== 'true') {
      window.location.replace('landing.html');
      return;
    }

    NR509.updateCountdown();
    NR509.renderNavDots();

    // Mark current system visited
    if (sys > 0) NR509.markSystem(sys);

    // Update nav pill name hint
    var first = localStorage.getItem('nr509first');
    if (first) {
      var cdPill = document.getElementById('cdText');
      if (cdPill && !localStorage.getItem('nr509exam')) {
        cdPill.textContent = 'Hi ' + first;
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', NR509.init);
