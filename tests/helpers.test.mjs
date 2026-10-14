import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeHref, eventGroup, formatDate } from '../src/lib/helpers.mjs';
test('CMS links reject executable schemes and protocol-relative URLs', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,hi', '//evil.example', undefined, 'not a url']) assert.equal(safeHref(value), undefined);
  for (const value of ['/bestuur/', 'https://kljmerkem.be', 'mailto:test@example.com', 'tel:0478751599']) assert.equal(safeHref(value), value);
});
test('event grouping uses Brussels dates, retaining events throughout their local day', () => {
  assert.equal(eventGroup('2026-10-11T12:00:00Z', new Date('2026-10-14T12:00:00Z')), 'past');
  assert.equal(eventGroup('2026-10-14T08:00:00Z', new Date('2026-10-14T20:00:00Z')), 'upcoming');
  assert.equal(eventGroup('2026-10-14T08:00:00Z', new Date('2026-10-14T22:30:00Z')), 'past');
  assert.equal(eventGroup(undefined), 'undated');
  assert.equal(eventGroup('bad date'), 'undated');
  assert.equal(formatDate('invalid'), '');
});
