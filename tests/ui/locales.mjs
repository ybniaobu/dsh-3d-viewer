import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  de,
  en,
  es,
  fr,
  ja,
  pt,
  ru,
  zh,
} from '../../src/ui/dictionaries.js';

const languages = { de, en, es, fr, ja, pt, ru, zh };
const expectedKeys = Object.keys(en).sort();

for (const [language, dictionary] of Object.entries(languages)) {
  assert.deepEqual(Object.keys(dictionary).sort(), expectedKeys, `${language} keys must match English`);
  for (const [key, value] of Object.entries(dictionary)) {
    assert.equal(typeof value, 'string', `${language}.${key} must be a string`);
    assert.ok(value.length > 0, `${language}.${key} must not be empty`);
  }
  assert.match(dictionary.animationFallback, /\{n\}/, `${language} must keep the clip placeholder`);
}

for (const language of Object.keys(languages)) {
  const file = new URL(`../../locale/${language}.json`, import.meta.url);
  const value = JSON.parse(await readFile(file, 'utf8'));
  assert.equal(typeof value.meta?.title, 'string', `${language} locale title is required`);
  assert.equal(typeof value.meta?.description, 'string', `${language} locale description is required`);
  assert.ok(value.meta.title.length > 0, `${language} locale title must not be empty`);
  assert.ok(value.meta.description.length > 0, `${language} locale description must not be empty`);
}

const pkg = JSON.parse(await readFile(new URL('../../package.json', import.meta.url), 'utf8'));
const englishMeta = JSON.parse(await readFile(new URL('../../locale/en.json', import.meta.url), 'utf8'));
assert.equal(pkg.description, englishMeta.meta.description, 'package description must match the English locale metadata');

console.log('Localization verified:', {
  languages: Object.keys(languages),
  keys: expectedKeys.length,
});
