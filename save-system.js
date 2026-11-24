(() => {
  const KEY = 'devourerSaveV1';
  window.DevourerSave = {
    load() {
      try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
      catch { return {}; }
    },
    save(data) {
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
    },
    reset() {
      try { localStorage.removeItem(KEY); } catch {}
    }
  };
})();
