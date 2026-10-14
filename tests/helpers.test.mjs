import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeHref, eventGroup, eventCategory, formatDate } from '../src/lib/helpers.mjs';
test('CMS links reject executable schemes and protocol-relative URLs', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,hi', '//evil.example', undefined, 'not a url']) assert.equal(safeHref(value), undefined);
  for (const value of ['/bestuur/', 'https://kljmerkem.be', 'mailto:test@example.com', 'tel:0478751599']) assert.equal(safeHref(value), value);
});
test('annual schedules keep events visible without inventing a future date', () => {
  const now = new Date('2026-10-14T12:00:00Z');
  assert.equal(eventCategory({ annualSchedule: 'Elke eerste zaterdag van april', date: '2026-04-04T20:00:00Z' }, now), 'recurring');
  assert.equal(eventCategory({ annualSchedule: '  ', date: '2026-04-04T20:00:00Z' }, now), 'past');
  assert.equal(eventCategory({ date: '2027-04-03T20:00:00Z' }, now), 'upcoming');
  assert.equal(eventCategory({ annualSchedule: 'Jaarlijks in mei' }, now), 'recurring');
});
test('event grouping uses Brussels dates, retaining events throughout their local day', () => {
  assert.equal(eventGroup('2026-10-11T12:00:00Z', new Date('2026-10-14T12:00:00Z')), 'past');
  assert.equal(eventGroup('2026-10-14T08:00:00Z', new Date('2026-10-14T20:00:00Z')), 'upcoming');
  assert.equal(eventGroup('2026-10-14T08:00:00Z', new Date('2026-10-14T22:30:00Z')), 'past');
  assert.equal(eventGroup(undefined), 'undated');
  assert.equal(eventGroup('bad date'), 'undated');
  assert.equal(formatDate('invalid'), '');
});
