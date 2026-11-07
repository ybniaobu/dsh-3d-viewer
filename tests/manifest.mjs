import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));

// DSH resolves plugin metadata through the exported package.json and requires
// the icon at the package root. Keep exactly one icon file there.
assert.equal(pkg.icon, './icon.svg');
assert.equal(pkg.exports['./icon'], './icon.svg');
assert.equal(pkg.exports['./package.json'], './package.json');
assert.ok(pkg.files.includes('icon.svg'), 'root icon.svg must be packaged');
assert.ok(pkg.files.includes('LICENSE'), 'LICENSE must be packaged');
assert.ok(pkg.files.includes('client.*.js'), 'format loader chunks must be packaged');
assert.ok(pkg.files.includes('THIRD_PARTY_NOTICES.md'), 'third-party notices must be packaged');
// The Host route reads the HDRIs from the installed package, so they must ship.
assert.ok(pkg.files.includes('assets/hdri'), 'HDRI files must be packaged for the host route');
// Source, build tooling, and generated data are build-time inputs only.
assert.ok(!pkg.files.includes('src'), 'source is not needed at runtime');
assert.ok(!pkg.files.includes('scripts'), 'build scripts are not needed at runtime');
// DSH reads engines.dsh and blocks installation/activation below the range.
assert.equal(pkg.engines?.dsh, '>=0.2.2-rc.1', 'DSH Desktop compatibility must be declared');

const license = await readFile(resolve(root, 'LICENSE'), 'utf8');
assert.match(license, /^MIT License\r?\n/);
assert.match(license, /Permission is hereby granted, free of charge/);

const notices = await readFile(resolve(root, 'THIRD_PARTY_NOTICES.md'), 'utf8');
assert.match(notices, /three\.js authors/);
assert.match(notices, /Poly Haven/);
assert.match(notices, /The MIT License/);

const iconPath = resolve(root, pkg.icon);
const info = await stat(iconPath);
assert.ok(info.isFile(), 'icon must be a regular file');
assert.ok(info.size > 0 && info.size <= 256 * 1024, 'icon should fit the metadata limit');

console.log('Plugin manifest verified:', {
  icon: pkg.icon,
  exportedPackageJson: pkg.exports['./package.json'],
  iconBytes: info.size,
});
