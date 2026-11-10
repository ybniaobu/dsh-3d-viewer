# Third-party notices

This project's own source code is licensed under the MIT License; see
[LICENSE](LICENSE). The following third-party components are included in or
used by this package.

## Three.js

`client.runtime.js` bundles the following MIT-licensed Three.js code:

- Three.js core (`three`)
- `FBXLoader`, `OBJLoader`, `MTLLoader`, `GLTFLoader`, `STLLoader`, `OrbitControls`, `HDRLoader`
- `EffectComposer`, `RenderPass`, `ShaderPass`
- Three.js addon dependencies used by the loaders (`fflate`, `NURBSCurve`)

`src/vendor/fbx-loader-pbr.js` is a modified copy of Three.js's `FBXLoader`.

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Poly Haven HDRIs

`assets/hdri/*.hdr` are Poly Haven assets released under
[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). CC0 requires no
attribution; the source links and license note are kept in
[assets/hdri/LICENSE.md](assets/hdri/LICENSE.md) for provenance.
The HDRIs ship as files in the package and are served at runtime by the
plugin's Host route (`/dsh-3d-viewer/hdri/`); they are not embedded in
`client.js` or `client.runtime.js`.

## React

The viewer source imports React, but the production bundle externalizes it
(`--external:react`). React is supplied by the DSH host at runtime and is not
included in this package.
