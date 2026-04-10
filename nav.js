/* ============================================================
   nav.js — Injects shared navigation into every page
   ============================================================ */

(function() {
  const SYSTEMS = [
    { num: 1, label: 'Abdominal',      href: 'system-1.html' },
    { num: 2, label: 'Musculoskeletal', href: 'system-2.html' },
    { num: 3, label: 'Neurological',   href: 'system-3.html' },
    { num: 4, label: 'Genitourinary',  href: 'system-4.html' },
    { num: 5, label: 'Special Pops',   href: 'system-5.html' },
    { num: 6, label: 'Breast',         href: 'system-6.html' },
    { num: 7, label: 'Cross-System',   href: 'system-7.html' },
  ];

  function buildNav() {
    const isHome = !document.body.dataset.system || document.body.dataset.system === '0';

    const dots = SYSTEMS.map(s =>
      `<a href="${s.href}" class="nav-sys-dot pending" data-sys="${s.num}" title="System ${s.num}: ${s.label}">${s.num}</a>`
    ).join('');

    const drillBtn = isHome ? '' :
      `<button class="nav-btn" onclick="Drill.launch()">Quick-fire drill ▶</button>`;

    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = `
      <a href="index.html" class="nav-brand">NR509 <span>Final Exam Guide</span></a>
      <div class="nav-systems">${dots}</div>
      <div class="nav-right">
        <div class="cd-pill" onclick="NR509.openDateModal()">
          <div class="cd-dot"></div>
          <span id="cdText">Set exam date</span>
        </div>
        ${drillBtn}
      </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);
  }

  function buildModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-bg';
    modal.id = 'modalBg';
    modal.innerHTML = `
      <div class="modal">
        <h2>When is your final exam?</h2>
        <p>Set your date and the guide tracks your countdown, surfaces weak spots, and adjusts your pace as the exam approaches.</p>
        <label for="examInput">Exam date</label>
        <input type="date" id="examInput">
        <button class="modal-btn" onclick="NR509.saveDate()">Start my prep →</button>
      </div>
    `;
    document.body.insertBefore(modal, document.body.firstChild);
  }

  document.addEventListener('DOMContentLoaded', function() {
    buildModal();
    buildNav();
  });
})();
