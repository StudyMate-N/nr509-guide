const NR511 = {
  guard() {
    const ok = localStorage.getItem('nr511unlocked') === 'true'
            || localStorage.getItem('nr509unlocked') === 'true';
    if (!ok) window.location.replace('/nr511');
  },

  getFirst() {
    return localStorage.getItem('nr511first') || '';
  },

  markSection(topic, section) {
    const prog = this._prog(topic);
    prog[section] = true;
    localStorage.setItem('nr511_prog_' + topic, JSON.stringify(prog));
  },

  getSectionDone(topic, section) {
    return !!this._prog(topic)[section];
  },

  saveQAnswer(topic, qId, wasCorrect) {
    const state = this._qstate(topic);
    state[qId] = wasCorrect;
    localStorage.setItem('nr511_q_' + topic, JSON.stringify(state));
  },

  getQState(topic) {
    return this._qstate(topic);
  },

  signOut() {
    Object.keys(localStorage)
      .filter(function(k) { return k.startsWith('nr511'); })
      .forEach(function(k) { localStorage.removeItem(k); });
    window.location.replace('/nr511');
  },

  _prog(topic) {
    try { return JSON.parse(localStorage.getItem('nr511_prog_' + topic) || '{}'); }
    catch(e) { return {}; }
  },

  _qstate(topic) {
    try { return JSON.parse(localStorage.getItem('nr511_q_' + topic) || '{}'); }
    catch(e) { return {}; }
  }
};
