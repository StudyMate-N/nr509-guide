/* ============================================================
   system-render.js
   Reads SYSTEM_DATA and renders the full system page.
   Every system page (1–7) uses this exact renderer.
   ============================================================ */

(function() {

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderSystemHeader(d) {
    const div = el('div', 'sys-hdr');
    div.innerHTML = `
      <div class="sys-eye">System ${d.num} of 7 &nbsp;·&nbsp; ${d.bates}</div>
      <div class="sys-title">${d.title}</div>
      <div class="sys-vignette">"${d.vignette}"</div>
      <div class="sys-tags">
        ${d.tags.map(t => `<span class="sys-tag">${t}</span>`).join('')}
      </div>
    `;
    return div;
  }

  function renderSVG(svgData) {
    if (!svgData) return null;
    const fig = el('div', 'anatomy-fig');
    fig.innerHTML = svgData.markup + `<div class="anatomy-cap">${svgData.caption}</div>`;
    return fig;
  }

  function renderConcept(c, idx, total) {
    const card = el('div', 'card');

    // Header
    const hdr = el('div', 'card-hdr');
    hdr.innerHTML = `<div class="card-name">${c.name}</div><div class="bates-tag">${c.batesPage}</div>`;
    card.appendChild(hdr);

    const body = el('div', 'card-body');

    // Anatomy illustrations
    const hasSVG = c.svg1 || c.svg2;
    if (hasSVG) {
      const wrap = el('div', 'anatomy-wrap');
      wrap.appendChild(el('div', 'anatomy-lbl', 'Anatomy &amp; examination technique'));
      const imgs = el('div', 'anatomy-imgs');
      if (c.svg1) imgs.appendChild(renderSVG(c.svg1));
      if (c.svg2) imgs.appendChild(renderSVG(c.svg2));
      // If only one SVG, make it full width
      if (c.svg1 && !c.svg2) imgs.style.gridTemplateColumns = '1fr';
      if (!c.svg1 && c.svg2) imgs.style.gridTemplateColumns = '1fr';
      wrap.appendChild(imgs);
      body.appendChild(wrap);
    }

    // Prose
    const prose = el('div', 'prose');
    c.prose.forEach(p => prose.appendChild(el('p', null, p)));
    body.appendChild(prose);

    // Snap cards
    if (c.snaps && c.snaps.length) {
      const row = el('div', 'snap-row');
      c.snaps.forEach(s => {
        const snap = el('div', 'snap');
        snap.innerHTML = `<div class="snap-lbl">${s.label}</div><div class="snap-val">${s.value}</div>`;
        row.appendChild(snap);
      });
      body.appendChild(row);
    }

    // Exam questions
    if (c.questions && c.questions.length) {
      const block = el('div', 'exam-block');
      block.innerHTML = `
        <div class="exam-hdr">
          <span class="exam-hdr-lbl">Exam-style questions</span>
          <span class="exam-hdr-badge">NR509 format · select best answer</span>
        </div>
      `;
      const examBody = el('div', 'exam-body');

      c.questions.forEach((q, qi) => {
        const qid = q.id;
        const letters = ['A', 'B', 'C', 'D'];

        if (qi > 0) examBody.appendChild(el('div', 'q-div'));

        examBody.innerHTML += `<div class="q-num">Question ${q.num}</div>`;
        examBody.innerHTML += `<div class="q-stem">${q.stem}</div>`;

        const opts = el('div', 'opts');
        opts.id = qid + 'o';
        q.options.forEach((opt, oi) => {
          const btn = document.createElement('button');
          btn.className = 'opt';
          btn.innerHTML = `<div class="opt-lt">${letters[oi]}</div>${opt}`;
          btn.onclick = () => NR509.selectOpt(btn, qid, letters[oi]);
          opts.appendChild(btn);
        });
        examBody.appendChild(opts);

        const checkBtn = document.createElement('button');
        checkBtn.className = 'check-btn';
        checkBtn.id = qid + 'b';
        checkBtn.disabled = true;
        checkBtn.textContent = 'Check answer';
        checkBtn.onclick = () => NR509.checkAnswer(qid, q.answer);
        examBody.appendChild(checkBtn);

        const rat = el('div', 'rationale');
        rat.id = qid + 'r';
        rat.innerHTML = q.rationale;
        examBody.appendChild(rat);
      });

      block.appendChild(examBody);
      body.appendChild(block);
    }

    card.appendChild(body);
    return card;
  }

  function renderMargin(m) {
    const margin = el('div', 'margin');
    margin.innerHTML = `
      <div class="mc mc-stars">
        <div class="mc-lbl">Exam frequency</div>
        <div class="star-row">${m.stars.rating}</div>
        <div class="mc-val">${m.stars.text}</div>
      </div>
      <div class="mc mc-trap">
        <div class="mc-lbl">Exam trap</div>
        <div class="mc-val">${m.trap}</div>
      </div>
      <div class="mc mc-pearl">
        <div class="mc-lbl">Clinical pearl</div>
        <div class="mc-val">${m.pearl}</div>
      </div>
      <div class="mc mc-miss">
        <div class="mc-lbl">Most missed</div>
        <div class="mc-val">${m.missed}</div>
      </div>
      <div class="mc mc-src">
        <div class="mc-lbl">Bates' verbatim</div>
        <div class="mc-val">${m.source}</div>
      </div>
    `;
    return margin;
  }

  function renderDrill() {
    return `
      <div class="drill-wrap" id="drillWrap">
        <div class="drill-hdr">
          <div class="drill-title">Quick-fire drill — ${SYSTEM_DATA.title}</div>
          <button class="drill-close" onclick="Drill.close()">✕ Exit</button>
        </div>
        <div id="drillActive">
          <div class="d-progress">
            <div class="d-prog-row">
              <span class="d-prog-lbl" id="dProgLbl">Question 1 of ${DRILL_QUESTIONS.length}</span>
              <span class="d-prog-num" id="dProgNum">0 answered</span>
            </div>
            <div class="d-prog-track"><div class="d-prog-fill" id="dProgFill" style="width:0%"></div></div>
          </div>
          <div class="drill-q-card">
            <div class="drill-stem" id="dStem"></div>
            <div class="drill-opts" id="dOpts"></div>
          </div>
          <div class="drill-nav">
            <button class="drill-skip" onclick="Drill.skip()">Skip</button>
            <button class="drill-next-btn" id="dNextBtn" onclick="Drill.next()">Next →</button>
          </div>
        </div>
        <div class="perf-wrap" id="perfWrap">
          <div class="perf-top">
            <div class="perf-pct" id="perfPct"></div>
            <div class="perf-grade" id="perfGrade"></div>
          </div>
          <div class="perf-stats">
            <div class="ps"><div class="ps-num" id="psCorr" style="color:#A3E4C0"></div><div class="ps-lbl">Correct</div></div>
            <div class="ps"><div class="ps-num" id="psWrong" style="color:#F5B7B1"></div><div class="ps-lbl">Wrong</div></div>
            <div class="ps"><div class="ps-num" id="psTime" style="color:rgba(255,255,255,.75)"></div><div class="ps-lbl">Time</div></div>
          </div>
          <div class="perf-div"></div>
          <div class="bd-hdr">Concept breakdown</div>
          <div id="perfBd"></div>
          <div class="perf-note" id="perfNote"></div>
          <div class="perf-actions">
            <button class="pa pa-retry" onclick="Drill.restart()">Retry drill</button>
            <button class="pa pa-back"  onclick="Drill.close()">Back to guide</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderNextPreview(next) {
    if (!next) return '';
    return `
      <div class="next-prev">
        <div class="card">
          <div class="card-hdr">
            <div class="card-name">Next: System ${next.num} — ${next.title}</div>
            <a href="${next.href}" style="font-size:11px;color:var(--teal);font-weight:600;text-decoration:none">Start →</a>
          </div>
          <div class="card-body">
            <div class="prose"><p>${next.preview}</p></div>
          </div>
        </div>
      </div>
    `;
  }

  function renderPage() {
    const d    = SYSTEM_DATA;
    const root = document.getElementById('pageRoot');
    if (!root || !d) return;

    root.appendChild(renderSystemHeader(d));

    // Each concept gets its own two-col layout with the FIRST concept's margin strip
    // Subsequent concepts stack inside the left column
    const twoCol  = el('div', 'two-col');
    const leftCol = el('div');
    const margin  = renderMargin(d.concepts[0].margin);

    d.concepts.forEach((c, i) => {
      leftCol.appendChild(renderConcept(c, i, d.concepts.length));
    });

    // Next system preview (faded)
    if (d.nextSystem) {
      leftCol.innerHTML += renderNextPreview(d.nextSystem);
    }

    twoCol.appendChild(leftCol);
    twoCol.appendChild(margin);
    root.appendChild(twoCol);

    // Drill
    const drillDiv = document.createElement('div');
    drillDiv.innerHTML = renderDrill();
    root.appendChild(drillDiv.firstElementChild);

    // Footer
    root.innerHTML += `
      <div class="guide-footer">
        <div class="footer-brand">NR509 Final Exam Guide</div>
        <div class="footer-note">Adapted from Bates' Guide to Physical Examination, 8th Edition · Chamberlain FNP Track</div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', renderPage);
})();
