export function safeHref(value) {
  if (typeof value !== 'string' || /[\\\u0000-\u001f]/.test(value)) return undefined;
  if (/^\/(?!\/)/.test(value) || /^#[\w-]+$/.test(value)) return value;
  try { const url = new URL(value); return ['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol) ? value : undefined; }
  catch { return undefined; }
}
export function eventGroup(value, now = new Date()) {
  if (!value || Number.isNaN(Date.parse(value))) return 'undated';
  // An event remains upcoming for its entire local calendar day.
  const day = date => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Brussels' }).format(date);
  return day(new Date(value)) < day(now) ? 'past' : 'upcoming';
}
export function formatDate(value) {
  if (!value || Number.isNaN(Date.parse(value))) return '';
  return new Intl.DateTimeFormat('nl-BE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Brussels' }).format(new Date(value));
}
