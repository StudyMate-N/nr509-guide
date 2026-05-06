(function () {

  /* ── Helpers ──────────────────────────────────────────── */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Content type renderers ───────────────────────────── */
  function renderDeflist(item) {
    var rows = item.pairs.map(function(p) {
      return '<div class="dl-row"><div class="dl-term">' + esc(p.term) +
             '</div><div class="dl-def">' + esc(p.def) + '</div></div>';
    }).join('');
    return '<div class="content-block">' +
      (item.title ? '<div class="cb-title">' + esc(item.title) + '</div>' : '') +
      '<div class="deflist">' + rows + '</div>' +
    '</div>';
  }

  function renderTip(item) {
    return '<div class="callout callout-tip">' +
      '<div class="callout-icon">💡</div>' +
      '<div class="callout-text">' + esc(item.text) + '</div>' +
    '</div>';
  }

  function renderCritical(item) {
    return '<div class="callout callout-critical">' +
      '<div class="callout-icon">⚠️</div>' +
      '<div class="callout-text">' + esc(item.text) + '</div>' +
    '</div>';
  }

  function renderTable(item) {
    var headers = item.headers.map(function(h) { return '<th>' + esc(h) + '</th>'; }).join('');
    var rows = item.rows.map(function(row) {
      return '<tr>' + row.map(function(cell) { return '<td>' + esc(cell) + '</td>'; }).join('') + '</tr>';
    }).join('');
    return '<div class="content-block">' +
      (item.title ? '<div class="cb-title">' + esc(item.title) + '</div>' : '') +
      '<div class="table-wrap"><table class="data-table">' +
        '<thead><tr>' + headers + '</tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table></div>' +
    '</div>';
  }

  function renderSystem(item) {
    var color = item.color || 'purple';
    var points = item.points.map(function(p) { return '<li>' + esc(p) + '</li>'; }).join('');
    return '<div class="sys-card-block sys-card-' + esc(color) + '">' +
      '<div class="scb-title">' + esc(item.title) + '</div>' +
      '<ul class="scb-list">' + points + '</ul>' +
    '</div>';
  }

  function renderQuestions(item) {
    var total = item.questions.length;
    var qs = item.questions.map(function(q, idx) {
      return renderQuestion(q, idx, total);
    }).join('');
    return '<div class="q-set">' + qs + '</div>';
  }

  function renderQuestion(q, idx, total) {
    var letters = ['A', 'B', 'C', 'D'];
    var opts = q.opts.map(function(o, i) {
      return '<button class="opt" data-qid="' + esc(q.id) + '" data-idx="' + i +
             '" onclick="NR511Render.pickOpt(this)">' +
             '<span class="opt-lt">' + letters[i] + '</span>' + esc(o) +
             '</button>';
    }).join('');
    var divider = (idx < total - 1) ? '<div class="q-div"></div>' : '';
    return '<div class="q-block" id="qb-' + esc(q.id) + '">' +
      '<div class="q-num">Question ' + (idx + 1) + ' of ' + total + '</div>' +
      '<div class="q-stem">' + esc(q.stem) + '</div>' +
      '<div class="opts" id="opts-' + esc(q.id) + '">' + opts + '</div>' +
      '<button class="check-btn" id="chk-' + esc(q.id) + '" ' +
        'onclick="NR511Render.checkAnswer(\'' + esc(q.id) + '\',' + q.correct + ')" disabled>' +
        'Check answer</button>' +
      '<div class="rationale" id="rat-' + esc(q.id) + '">' +
        '<strong>Correct: ' + esc(q.opts[q.correct]) + '</strong><br>' + esc(q.rationale) +
      '</div>' +
      divider +
    '</div>';
  }

  function renderItem(item) {
    switch (item.type) {
      case 'deflist':   return renderDeflist(item);
      case 'tip':       return renderTip(item);
      case 'critical':  return renderCritical(item);
      case 'table':     return renderTable(item);
      case 'system':    return renderSystem(item);
      case 'questions': return renderQuestions(item);
      default: return '';
    }
  }

  /* ── Hero ─────────────────────────────────────────────── */
  function renderHero(meta) {
    var pills = meta.pills.map(function(p) {
      return '<span class="sys-tag">' + esc(p) + '</span>';
    }).join('');
    return '<div class="sys-hdr">' +
      '<div class="sys-eye">' + esc(meta.eyebrow) + '</div>' +
      '<div class="sys-title">' + esc(meta.title) + '</div>' +
      '<div class="sys-vignette">' + esc(meta.sub) + '</div>' +
      '<div class="sys-tags">' + pills + '</div>' +
    '</div>';
  }

  /* ── Endurance warning ────────────────────────────────── */
  function renderEndurance(text) {
    return '<div class="endurance-warn">' +
      '<span class="ew-icon">⏱</span>' +
      '<span>' + esc(text) + '</span>' +
    '</div>';
  }

  /* ── Triage ───────────────────────────────────────────── */
  function renderTriage(triage) {
    var opts = triage.options.map(function(o) {
      var items = o.items.map(function(i) { return '<li>' + esc(i) + '</li>'; }).join('');
      return '<div class="triage-opt">' +
        '<div class="triage-label">' + esc(o.label) + '</div>' +
        '<div class="triage-title">' + esc(o.title) + '</div>' +
        '<ul class="triage-list">' + items + '</ul>' +
      '</div>';
    }).join('');
    return '<div class="triage-box">' +
      '<div class="triage-hdr">' + esc(triage.title) + '</div>' +
      '<div class="triage-opts">' + opts + '</div>' +
    '</div>';
  }

  /* ── Domain bars ──────────────────────────────────────── */
  function renderDomains(domains, skipDomains) {
    var bars = domains.map(function(d) {
      var isSkip = d.priority === 'skip';
      var cls = isSkip ? 'db-skip' : (d.score < 75 ? 'db-high' : (d.score < 85 ? 'db-medium' : 'db-low'));
      var badge = isSkip
        ? '<span class="db-badge skip">Skip</span>'
        : '<span class="db-badge ' + (d.score < 75 ? 'high' : 'medium') + '">' +
          (d.score < 75 ? 'Focus' : 'Review') + '</span>';
      return '<div class="domain-bar ' + cls + '">' +
        '<div class="db-info"><span class="db-name">' + esc(d.name) + '</span>' + badge + '</div>' +
        '<div class="db-track"><div class="db-fill" style="width:' + d.score + '%"></div></div>' +
        '<div class="db-score">' + d.score + '%</div>' +
      '</div>';
    }).join('');
    return '<div class="domains-section">' +
      '<div class="section-lbl">Domain Performance</div>' +
      '<div class="domain-bars">' + bars + '</div>' +
      '<div class="domains-note">Skip = ' + esc(skipDomains.join(', ')) +
        ' — scored 90%+. Focus time on red domains.</div>' +
    '</div>';
  }

  /* ── Section cards ────────────────────────────────────── */
  function renderSection(section) {
    var items = section.items.map(renderItem).join('');
    return '<div class="section-card" id="sec-' + section.id + '">' +
      '<div class="sec-hdr">' +
        '<div class="sec-num">Section ' + section.id + '</div>' +
        '<div class="sec-title">' + esc(section.title) + '</div>' +
      '</div>' +
      '<div class="sec-body">' + items + '</div>' +
    '</div>';
  }

  /* ── Sidebar ──────────────────────────────────────────── */
  function renderSidebar(sections, slug) {
    var doneCount = sections.filter(function(s) {
      return NR511.getSectionDone(slug, s.id);
    }).length;
    var total = sections.length;
    var pct = Math.round((doneCount / total) * 100);

    var items = sections.map(function(s) {
      var done = NR511.getSectionDone(slug, s.id);
      return '<div class="prog-item' + (done ? ' done' : '') + '" id="pi-' + s.id + '">' +
        '<div class="pi-check">' + (done ? '✓' : s.id) + '</div>' +
        '<div class="pi-title">' + esc(s.title) + '</div>' +
        '<button class="pi-mark" onclick="NR511Render.markDone(' + s.id + ')"' +
          (done ? ' style="display:none"' : '') + '>Mark done</button>' +
      '</div>';
    }).join('');

    return '<div class="margin">' +
      '<div class="mc mc-src">' +
        '<div class="mc-lbl">Progress</div>' +
        '<div class="mc-val" id="prog-label">' + doneCount + '/' + total + ' sections · ' + pct + '%</div>' +
      '</div>' +
      '<div style="height:4px;background:rgba(0,0,0,.08);border-radius:2px;margin-bottom:.75rem;">' +
        '<div id="prog-bar" style="height:100%;width:' + pct + '%;background:var(--purple);border-radius:2px;transition:width .3s;"></div>' +
      '</div>' +
      '<div class="prog-list">' + items + '</div>' +
      '<div class="mc mc-pearl" style="margin-top:.75rem;">' +
        '<div class="mc-lbl">Clinical Tip</div>' +
        '<div class="mc-val">Mark each section done as you finish to track your prep progress.</div>' +
      '</div>' +
    '</div>';
  }

  /* ── Full page ────────────────────────────────────────── */
  function buildPage() {
    var d = CEA_DATA;
    var mainSections = d.sections.map(renderSection).join('');
    var sidebar = renderSidebar(d.sections, d.slug);
    return '<div class="page">' +
      renderHero(d.meta) +
      renderEndurance(d.endurance) +
      renderTriage(d.triage) +
      renderDomains(d.domains, d.skipDomains) +
      '<div class="two-col">' +
        '<div>' + mainSections + '</div>' +
        sidebar +
      '</div>' +
    '</div>';
  }

  /* ── Interaction handlers ─────────────────────────────── */
  window.NR511Render = {
    pickOpt: function(btn) {
      var qid = btn.dataset.qid;
      document.querySelectorAll('.opt[data-qid="' + qid + '"]').forEach(function(o) {
        o.classList.remove('selected');
      });
      btn.classList.add('selected');
      document.getElementById('chk-' + qid).disabled = false;
    },

    checkAnswer: function(qid, correctIdx) {
      var opts = document.querySelectorAll('.opt[data-qid="' + qid + '"]');
      var selectedIdx = -1;
      opts.forEach(function(o) {
        if (o.classList.contains('selected')) selectedIdx = parseInt(o.dataset.idx);
      });
      if (selectedIdx === -1) return;
      opts.forEach(function(o) {
        var idx = parseInt(o.dataset.idx);
        if (idx === correctIdx) o.classList.add('correct');
        else if (idx === selectedIdx) o.classList.add('wrong');
        else o.classList.add('neutral-r');
        o.disabled = true;
      });
      document.getElementById('rat-' + qid).classList.add('open');
      document.getElementById('chk-' + qid).disabled = true;
      NR511.saveQAnswer(CEA_DATA.slug, qid, selectedIdx === correctIdx);
    },

    markDone: function(sectionId) {
      NR511.markSection(CEA_DATA.slug, sectionId);
      var item = document.getElementById('pi-' + sectionId);
      if (item) {
        item.classList.add('done');
        item.querySelector('.pi-check').textContent = '✓';
        var btn = item.querySelector('.pi-mark');
        if (btn) btn.style.display = 'none';
      }
      var sections = CEA_DATA.sections;
      var doneCount = sections.filter(function(s) {
        return NR511.getSectionDone(CEA_DATA.slug, s.id);
      }).length;
      var pct = Math.round((doneCount / sections.length) * 100);
      var bar = document.getElementById('prog-bar');
      var label = document.getElementById('prog-label');
      if (bar) bar.style.width = pct + '%';
      if (label) label.textContent = doneCount + '/' + sections.length + ' sections · ' + pct + '%';
    }
  };

  /* ── Init ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {
    var root = document.getElementById('pageRoot');
    if (!root) return;
    root.innerHTML = buildPage();
  });

})();
