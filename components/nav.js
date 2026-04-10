/* ============================================================
   nav.js — Injects shared navigation into every page
   ============================================================ */

(function() {
  const SYSTEMS = [
    { num: 1, label: 'Abdominal',       href: 'system-1.html' },
    { num: 2, label: 'Musculoskeletal', href: 'system-2.html' },
    { num: 3, label: 'Neurological',    href: 'system-3.html' },
    { num: 4, label: 'Genitourinary',   href: 'system-4.html' },
    { num: 5, label: 'Special Pops',    href: 'system-5.html' },
    { num: 6, label: 'Breast',          href: 'system-6.html' },
    { num: 7, label: 'Cross-System',    href: 'system-7.html' },
  ];

  function getDone() {
    try { return JSON.parse(localStorage.getItem('nr509done') || '[]'); }
    catch(e) { return []; }
  }

  function buildNav() {
    const isHome  = !document.body.dataset.system || document.body.dataset.system === '0';
    const current = parseInt(document.body.dataset.system || '0');
    const done    = getDone();

    const dots = SYSTEMS.map(s => {
      let cls = 'nav-sys-dot ';
      if (s.num === current)         cls += 'active';
      else if (done.includes(s.num)) cls += 'done';
      else                           cls += 'pending';
      return '<a href="' + s.href + '" class="' + cls + '" data-sys="' + s.num + '" title="System ' + s.num + ': ' + s.label + '">' + s.num + '</a>';
    }).join('');

    const drillBtn = isHome ? '' :
      '<button type="button" class="nav-btn" onclick="Drill.launch()">Quick-fire drill &#9658;</button>';

    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML =
      '<a href="index.html" class="nav-brand">NR509 <span>Final Exam Guide</span></a>' +
      '<div class="nav-systems">' + dots + '</div>' +
      '<div class="nav-right">' +
        '<div class="cd-pill" onclick="NR509.openDateModal()">' +
          '<div class="cd-dot"></div>' +
          '<span id="cdText">Set exam date</span>' +
        '</div>' +
        drillBtn +
      '</div>';

    document.body.insertBefore(nav, document.body.firstChild);
  }

  function buildModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-bg';
    modal.id = 'modalBg';
    modal.innerHTML =
      '<div class="modal">' +
        '<h2>When is your final exam?</h2>' +
        '<p>Set your date and the guide tracks your countdown, surfaces weak spots, and adjusts your pace as the exam approaches.</p>' +
        '<label for="examInput">Exam date</label>' +
        '<input type="date" id="examInput">' +
        '<button type="button" class="modal-btn" onclick="NR509.saveDate()">Start my prep &rarr;</button>' +
      '</div>';
    document.body.insertBefore(modal, document.body.firstChild);
  }

  function buildMobileNav() {
    const container = document.getElementById('mobileSysNav');
    if (!container) return;
    const current = parseInt(document.body.dataset.system || '0');
    const done    = getDone();
    const inner   = document.createElement('div');
    inner.className = 'mobile-sys-nav-inner';
    SYSTEMS.forEach(function(s) {
      const a = document.createElement('a');
      a.href        = s.href;
      a.title       = 'System ' + s.num + ': ' + s.label;
      a.textContent = s.num;
      a.className   = 'mob-sys-dot ' + (s.num === current ? 'active' : done.includes(s.num) ? 'done' : 'pending');
      inner.appendChild(a);
    });
    container.appendChild(inner);
  }

  document.addEventListener('DOMContentLoaded', function() {
    buildModal();
    buildNav();
    setTimeout(buildMobileNav, 120);
  });
})();
