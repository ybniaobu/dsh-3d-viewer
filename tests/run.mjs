import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const runner = fileURLToPath(import.meta.url);

/**
 * @param {string} parent Directory to scan.
 * @returns {string[]} Absolute test file paths.
 */
function collect(parent) {
  const files = [];
  for (const entry of readdirSync(parent, { withFileTypes: true })) {
    const path = resolve(parent, entry.name);
    if (entry.isDirectory()) files.push(...collect(path));
    else if (entry.name.endsWith('.mjs') && path !== runner) files.push(path);
  }
  return files;
}

const files = collect(directory).sort();

if (files.length === 0) throw new Error('No test files found.');

const started = performance.now();
for (const file of files) {
  // Every test runs in its own process: several install global browser shims
  // (`document`, `requestAnimationFrame`) that must not leak into each other.
  const result = spawnSync(process.execPath, [file], { stdio: 'inherit' });
  if (result.error !== undefined) throw result.error;
  if (result.status !== 0) {
    console.error(`\nTest failed: tests/${relative(directory, file)}`);
    process.exit(result.status ?? 1);
  }
}

const seconds = ((performance.now() - started) / 1000).toFixed(1);
console.log(`\nAll ${files.length} test files passed in ${seconds}s.`);
