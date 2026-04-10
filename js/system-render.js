/* ============================================================
   system-render.js
   Reads SYSTEM_DATA and renders the full system page.
   Every system page (1–7) uses this exact renderer.
   RULE: Never use innerHTML += after appending DOM nodes.
         Always use appendChild to preserve event listeners.
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
    // Use a wrapper to parse then move children — avoids SVG namespace issues
    const tmp = document.createElement('div');
    tmp.innerHTML = svgData.markup;
    while (tmp.firstChild) fig.appendChild(tmp.firstChild);
    fig.appendChild(el('div', 'anatomy-cap', svgData.caption));
    return fig;
  }

  function renderConcept(c) {
    const card = el('div', 'card');

    // ── Header ──
    const hdr = el('div', 'card-hdr');
    hdr.appendChild(el('div', 'card-name', c.name));
    hdr.appendChild(el('div', 'bates-tag', c.batesPage));
    card.appendChild(hdr);

    const body = el('div', 'card-body');

    // ── Anatomy illustrations ──
    if (c.svg1 || c.svg2) {
      const wrap = el('div', 'anatomy-wrap');
      wrap.appendChild(el('div', 'anatomy-lbl', 'Anatomy &amp; examination technique'));
      const imgs = el('div', 'anatomy-imgs');
      if (c.svg1) imgs.appendChild(renderSVG(c.svg1));
      if (c.svg2) imgs.appendChild(renderSVG(c.svg2));
      if ((c.svg1 && !c.svg2) || (!c.svg1 && c.svg2)) {
        imgs.style.gridTemplateColumns = '1fr';
      }
      wrap.appendChild(imgs);
      body.appendChild(wrap);
    }

    // ── Prose ──
    const prose = el('div', 'prose');
    c.prose.forEach(p => prose.appendChild(el('p', null, p)));
    body.appendChild(prose);

    // ── Snap cards ──
    if (c.snaps && c.snaps.length) {
      const row = el('div', 'snap-row');
      c.snaps.forEach(s => {
        const snap = el('div', 'snap');
        snap.appendChild(el('div', 'snap-lbl', s.label));
        snap.appendChild(el('div', 'snap-val', s.value));
        row.appendChild(snap);
      });
      body.appendChild(row);
    }

    // ── Exam questions ──
    if (c.questions && c.questions.length) {
      const block = el('div', 'exam-block');
      const examHdr = el('div', 'exam-hdr');
      examHdr.appendChild(el('span', 'exam-hdr-lbl', 'Exam-style questions'));
      examHdr.appendChild(el('span', 'exam-hdr-badge', 'NR509 format · select best answer'));
      block.appendChild(examHdr);

      const examBody = el('div', 'exam-body');
      const letters  = ['A', 'B', 'C', 'D'];

      c.questions.forEach((q, qi) => {
        if (qi > 0) examBody.appendChild(el('div', 'q-div'));

        // Question number + stem — safe to innerHTML since no event listeners yet
        examBody.appendChild(el('div', 'q-num', 'Question ' + q.num));
        examBody.appendChild(el('div', 'q-stem', q.stem));

        // Options — build with DOM to preserve onclick handlers
        const opts = el('div', 'opts');
        opts.id = q.id + 'o';
        q.options.forEach((optText, oi) => {
          const btn = document.createElement('button');
          btn.className = 'opt';
          btn.type = 'button';
          const lt = el('div', 'opt-lt', letters[oi]);
          const txt = document.createTextNode(optText);
          btn.appendChild(lt);
          btn.appendChild(txt);
          btn.addEventListener('click', () => NR509.selectOpt(btn, q.id, letters[oi]));
          opts.appendChild(btn);
        });
        examBody.appendChild(opts);

        // Check answer button
        const checkBtn = document.createElement('button');
        checkBtn.type      = 'button';
        checkBtn.className = 'check-btn';
        checkBtn.id        = q.id + 'b';
        checkBtn.disabled  = true;
        checkBtn.textContent = 'Check answer';
        checkBtn.addEventListener('click', () => NR509.checkAnswer(q.id, q.answer));
        examBody.appendChild(checkBtn);

        // Rationale (hidden until revealed)
        const rat = el('div', 'rationale', q.rationale);
        rat.id = q.id + 'r';
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
        <div class="mc-lbl">⚠ Exam trap</div>
        <div class="mc-val">${m.trap}</div>
      </div>
      <div class="mc mc-pearl">
        <div class="mc-lbl">◆ Clinical pearl</div>
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

  function renderDrillSection() {
    const wrap = el('div', 'drill-wrap');
    wrap.id = 'drillWrap';
    wrap.innerHTML = `
      <div class="drill-hdr">
        <div class="drill-title">Quick-fire drill — ${SYSTEM_DATA.title}</div>
        <button type="button" class="drill-close" onclick="Drill.close()">✕ Exit</button>
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
          <button type="button" class="drill-skip" onclick="Drill.skip()">Skip</button>
          <button type="button" class="drill-next-btn" id="dNextBtn" onclick="Drill.next()">Next →</button>
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
          <button type="button" class="pa pa-retry" onclick="Drill.restart()">Retry drill</button>
          <button type="button" class="pa pa-back"  onclick="Drill.close()">Back to guide</button>
        </div>
      </div>
    `;
    return wrap;
  }

  function renderNextPreview(next) {
    if (!next) return null;
    const wrapper = el('div', 'next-prev');
    const card    = el('div', 'card');
    const hdr     = el('div', 'card-hdr');

    hdr.appendChild(el('div', 'card-name', 'Next: System ' + next.num + ' — ' + next.title));
    const link = document.createElement('a');
    link.href      = next.href;
    link.style.cssText = 'font-size:11px;color:var(--teal);font-weight:600;text-decoration:none';
    link.textContent = 'Start →';
    hdr.appendChild(link);

    const body  = el('div', 'card-body');
    const prose = el('div', 'prose');
    prose.appendChild(el('p', null, next.preview));
    body.appendChild(prose);

    card.appendChild(hdr);
    card.appendChild(body);
    wrapper.appendChild(card);
    return wrapper;
  }

  function renderPage() {
    const d    = SYSTEM_DATA;
    const root = document.getElementById('pageRoot');
    if (!root || !d || !d.concepts) return;

    // ── System header ──
    root.appendChild(renderSystemHeader(d));

    // ── Mobile system nav strip (visible on mobile only) ──
    const mobileNav = el('div', 'mobile-sys-nav');
    mobileNav.id = 'mobileSysNav';
    root.appendChild(mobileNav);

    // ── Each concept gets its own two-col row ──
    // This way each concept's margin strip stays adjacent to that concept
    d.concepts.forEach((c, i) => {
      const row     = el('div', 'two-col concept-row');
      const leftCol = el('div', 'concept-left');
      leftCol.appendChild(renderConcept(c));
      row.appendChild(leftCol);

      // Right margin: each concept has its own margin data
      const m = c.margin;
      if (m) {
        row.appendChild(renderMargin(m));
      }
      root.appendChild(row);
    });

    // ── Next system preview (faded, outside two-col) ──
    if (d.nextSystem) {
      const preview = renderNextPreview(d.nextSystem);
      if (preview) root.appendChild(preview);
    }

    // ── Drill section ──
    root.appendChild(renderDrillSection());

    // ── Footer ──
    const footer = el('div', 'guide-footer');
    footer.appendChild(el('div', 'footer-brand', 'NR509 Final Exam Guide'));
    footer.appendChild(el('div', 'footer-note', "Adapted from Bates' Guide to Physical Examination, 8th Edition · Chamberlain FNP Track"));
    root.appendChild(footer);
  }

  document.addEventListener('DOMContentLoaded', renderPage);
})();
