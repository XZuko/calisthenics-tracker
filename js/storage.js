const KEY = 'form-calisthenics-v1';
const UPDATED_KEY = `${KEY}-updated-at`;
export const storage = {
  load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } },
  save(data,updatedAt=new Date().toISOString()) { localStorage.setItem(KEY, JSON.stringify(data)); localStorage.setItem(UPDATED_KEY,updatedAt); },
  updatedAt() { return localStorage.getItem(UPDATED_KEY); },
  clear() { localStorage.removeItem(KEY); localStorage.removeItem(UPDATED_KEY); }
};