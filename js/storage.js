const KEY = 'form-calisthenics-v1';
export const storage = {
  load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } },
  save(data) { localStorage.setItem(KEY, JSON.stringify(data)); },
  clear() { localStorage.removeItem(KEY); }
};
