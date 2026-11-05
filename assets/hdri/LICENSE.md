# HDRI assets

All four 1k HDRIs are downloaded from [Poly Haven](https://polyhaven.com/) and
are licensed under [CC0](https://polyhaven.com/license). They can be used
commercially without attribution; the source links below are recorded for
provenance.

| File | Source | Download |
| --- | --- | --- |
| `nature.hdr` | [Forest Slope](https://polyhaven.com/a/forest_slope) | `https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/forest_slope_1k.hdr` |
| `city.hdr` | [Potsdamer Platz](https://polyhaven.com/a/potsdamer_platz) | `https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr` |
| `indoor.hdr` | [Lythwood Room](https://polyhaven.com/a/lythwood_room) | `https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/lythwood_room_1k.hdr` |
| `studio.hdr` | [Studio Small 09](https://polyhaven.com/a/studio_small_09) | `https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr` |

The files are embedded into `src/generated/hdri-data.js` at build time so the
client bundle does not depend on a separate asset URL or network request.
