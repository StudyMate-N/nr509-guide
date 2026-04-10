/* ============================================================
   drill.js — Universal drill engine
   Reads DRILL_QUESTIONS from the page's data file.
   ============================================================ */

const Drill = {
  cur:      0,
  answers:  [],
  start:    0,

  // Called by each system page's nav button
  launch() {
    if (typeof DRILL_QUESTIONS === 'undefined' || !DRILL_QUESTIONS.length) {
      console.warn('No DRILL_QUESTIONS defined for this page.');
      return;
    }
    Drill.cur     = 0;
    Drill.answers = [];
    Drill.start   = Date.now();

    const wrap = document.getElementById('drillWrap');
    const perf = document.getElementById('perfWrap');
    const active = document.getElementById('drillActive');

    if (!wrap) return;
    perf?.classList.remove('on');
    if (active) active.style.display = 'block';
    wrap.classList.add('on');
    wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    Drill.render();
  },

  close() {
    document.getElementById('drillWrap')?.classList.remove('on');
  },

  render() {
    const q   = DRILL_QUESTIONS[Drill.cur];
    const tot = DRILL_QUESTIONS.length;
    const ans = Drill.answers.filter(a => a != null).length;

    // Progress
    const lbl  = document.getElementById('dProgLbl');
    const num  = document.getElementById('dProgNum');
    const fill = document.getElementById('dProgFill');
    if (lbl)  lbl.textContent  = 'Question ' + (Drill.cur + 1) + ' of ' + tot;
    if (num)  num.textContent  = ans + ' answered';
    if (fill) fill.style.width = (Drill.cur / tot * 100) + '%';

    // Question
    const stem = document.getElementById('dStem');
    const opts = document.getElementById('dOpts');
    if (!stem || !opts) return;

    stem.textContent = q.stem;
    opts.innerHTML = '';

    const prev = Drill.answers[Drill.cur];
    q.options.forEach((o, i) => {
      const b = document.createElement('button');
      b.className = 'dopt' + (prev != null && prev.i === i ? ' selected' : '');
      b.innerHTML = '<span class="dopt-lt">' + ['A','B','C','D'][i] + '</span>' + o;
      b.onclick = () => Drill.pick(i);
      opts.appendChild(b);
    });

    // Next button
    const nb = document.getElementById('dNextBtn');
    if (nb) {
      nb.className = 'drill-next-btn' + (prev != null ? ' ready' : '');
      nb.textContent = Drill.cur < tot - 1 ? 'Next →' : 'See results';
    }
  },

  pick(idx) {
    Drill.answers[Drill.cur] = { i: idx };
    document.querySelectorAll('.dopt').forEach((o, i) => {
      o.classList.toggle('selected', i === idx);
    });
    const nb = document.getElementById('dNextBtn');
    if (nb) {
      nb.classList.add('ready');
      nb.textContent = Drill.cur < DRILL_QUESTIONS.length - 1 ? 'Next →' : 'See results';
    }
  },

  skip() {
    if (!Drill.answers[Drill.cur]) Drill.answers[Drill.cur] = { i: -1 };
    Drill.advance();
  },

  next() {
    const nb = document.getElementById('dNextBtn');
    if (!nb?.classList.contains('ready')) return;
    Drill.advance();
  },

  advance() {
    if (Drill.cur < DRILL_QUESTIONS.length - 1) {
      Drill.cur++;
      Drill.render();
    } else {
      Drill.showPerf();
    }
  },

  showPerf() {
    const tot     = DRILL_QUESTIONS.length;
    const elapsed = Math.round((Date.now() - Drill.start) / 1000);
    const m       = Math.floor(elapsed / 60);
    const s       = elapsed % 60;
    const L       = ['A','B','C','D'];

    let corr = 0;
    const results = DRILL_QUESTIONS.map((q, i) => {
      const a  = Drill.answers[i];
      const ok = a && a.i === q.answer;
      if (ok) corr++;
      return {
        concept: q.concept,
        ok,
        userI:   a ? a.i : -1,
        ansI:    q.answer,
        rat:     q.rationale
      };
    });

    const pct = Math.round(corr / tot * 100);
    let gradeText, gradeClass;
    if      (pct >= 90) { gradeText = 'Excellent — exam ready';         gradeClass = 'g-ex'; }
    else if (pct >= 75) { gradeText = 'Strong — review flagged items';  gradeClass = 'g-st'; }
    else if (pct >= 60) { gradeText = 'Getting there — drill again';    gradeClass = 'g-gt'; }
    else                { gradeText = 'Needs work — revisit this system'; gradeClass = 'g-nw'; }

    const pctEl   = document.getElementById('perfPct');
    const gradeEl = document.getElementById('perfGrade');
    const corrEl  = document.getElementById('psCorr');
    const wrongEl = document.getElementById('psWrong');
    const timeEl  = document.getElementById('psTime');
    const bdEl    = document.getElementById('perfBd');
    const noteEl  = document.getElementById('perfNote');

    if (pctEl)  pctEl.textContent  = pct + '%';
    if (gradeEl){ gradeEl.textContent = gradeText; gradeEl.className = 'perf-grade ' + gradeClass; }
    if (corrEl)  corrEl.textContent  = corr + ' / ' + tot;
    if (wrongEl) wrongEl.textContent = (tot - corr) + ' / ' + tot;
    if (timeEl)  timeEl.textContent  = (m > 0 ? m + 'm ' : '') + s + 's';

    if (bdEl) {
      bdEl.innerHTML = '';
      results.forEach(r => {
        const detail = r.userI >= 0
          ? 'You chose ' + L[r.userI] + ' · Correct: ' + L[r.ansI]
          : 'Skipped · Correct: ' + L[r.ansI];

        const d = document.createElement('div');
        d.className = 'cr ' + (r.ok ? 'ok' : 'no');
        d.innerHTML =
          '<div class="cr-left">' +
            '<div class="cr-icon ' + (r.ok ? 'ok' : 'no') + '">' + (r.ok ? '✓' : '✗') + '</div>' +
            '<div class="cr-txt">' +
              '<div class="cr-concept">' + r.concept + '</div>' +
              '<div class="cr-detail">' + detail + '</div>' +
            '</div>' +
          '</div>' +
          '<span class="cr-badge ' + (r.ok ? 'ok' : 'no') + '">' + (r.ok ? 'Correct' : 'Review') + '</span>';
        bdEl.appendChild(d);

        if (!r.ok) {
          const rt = document.createElement('div');
          rt.className   = 'cr-rat';
          rt.textContent = r.rat;
          bdEl.appendChild(rt);
        }
      });
    }

    const missed = results.filter(r => !r.ok).length;
    if (noteEl) {
      noteEl.textContent = missed === 0
        ? 'Perfect score — every concept mastered.'
        : missed + ' concept' + (missed > 1 ? 's' : '') + ' flagged for spaced review.';
    }

    document.getElementById('drillActive').style.display = 'none';
    document.getElementById('perfWrap')?.classList.add('on');
  },

  restart() {
    Drill.cur     = 0;
    Drill.answers = [];
    Drill.start   = Date.now();
    document.getElementById('perfWrap')?.classList.remove('on');
    const active = document.getElementById('drillActive');
    if (active) active.style.display = 'block';
    Drill.render();
  }
};
