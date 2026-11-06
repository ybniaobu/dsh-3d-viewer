export const CSS = `
.dsh3dv-root{position:relative;box-sizing:border-box;width:100%;height:100%;min-height:280px;overflow:hidden;isolation:isolate;color:var(--dsw-alias-label-primary);font-family:var(--dsw-font-family,"Segoe UI Variable Text","Segoe UI",Inter,-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",Arial,"Microsoft YaHei",sans-serif);white-space:normal;background:#fff}
.dsh3dv-stage{position:absolute;inset:0}
.dsh3dv-canvas{display:block;width:100%;height:100%;outline:none;touch-action:none;cursor:grab}
.dsh3dv-canvas:active{cursor:grabbing}
.dsh3dv-canvas:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}
.dsh3dv-top{position:absolute;top:10px;right:10px;left:10px;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;pointer-events:none}
.dsh3dv-top-actions{display:flex;align-items:center;gap:6px;min-width:0;pointer-events:none}
.dsh3dv-badge,.dsh3dv-stats,.dsh3dv-hint{pointer-events:none}
.dsh3dv-toolbar{pointer-events:auto}
.dsh3dv-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 8px 4px 7px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-secondary);font-size:11px;font-weight:600;letter-spacing:.03em;line-height:1;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-badge svg{width:13px;height:13px}
.dsh3dv-toolbar{display:flex;gap:2px;padding:3px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-overlay);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-tool{display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}
.dsh3dv-tool:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.dsh3dv-tool[aria-pressed="true"]{color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-tool:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-tool svg{width:15px;height:15px}
.dsh3dv-hud{position:absolute;top:46px;left:10px;z-index:2;display:flex;flex-direction:column;align-items:flex-start;gap:6px;max-width:calc(100% - 20px);pointer-events:none}
.dsh3dv-stats{display:flex;flex-direction:column;gap:2px;min-width:146px;max-width:100%;padding:7px 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.45;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-stat{display:flex;align-items:baseline;justify-content:space-between;gap:16px;white-space:nowrap}
.dsh3dv-stat-label{color:var(--dsw-alias-label-secondary)}
.dsh3dv-stat-value{color:var(--dsw-alias-label-primary);font-weight:600;font-variant-numeric:tabular-nums;font-feature-settings:"tnum" 1}
.dsh3dv-view-controls{position:relative;display:flex;flex-direction:row;align-items:center;gap:4px;max-width:none;pointer-events:auto}
.dsh3dv-picker{position:relative;min-width:0}
.dsh3dv-picker-trigger{display:flex;align-items:center;justify-content:center;gap:0;width:34px;height:34px;padding:3px;border:0;border-radius:9px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font:inherit;text-align:left;white-space:nowrap;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-picker-trigger:hover{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-trigger:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-picker-trigger[aria-expanded="true"]{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-swatch{flex:none;box-sizing:border-box;pointer-events:none}
.dsh3dv-picker-swatch.dsh3dv-ball{width:24px;height:24px}
.dsh3dv-picker-swatch.dsh3dv-env{width:24px;height:24px;border-radius:6px}
.dsh3dv-picker-menu{position:absolute;top:calc(100% + 6px);right:0;left:auto;z-index:5;display:flex;flex-wrap:nowrap;gap:4px;width:max-content;max-width:300px;box-sizing:border-box;padding:7px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-overlay);box-shadow:0 8px 22px rgba(20,28,40,.16);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.dsh3dv-picker-option{display:flex;flex:none;flex-direction:column;align-items:center;gap:4px;width:42px;padding:3px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer}
.dsh3dv-picker-option:hover{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-option:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-picker-option[aria-checked="true"]{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-picker-option-swatch{box-sizing:border-box;pointer-events:none}
.dsh3dv-picker-option-swatch.dsh3dv-ball,.dsh3dv-picker-option-swatch.dsh3dv-env{width:28px;height:28px}
.dsh3dv-picker-option-swatch.dsh3dv-env{border-radius:7px}
.dsh3dv-picker-option-label{max-width:42px;overflow:hidden;color:var(--dsw-alias-label-secondary);font-size:9px;line-height:1.25;text-align:center;white-space:nowrap;text-overflow:ellipsis}
.dsh3dv-ball{position:relative;flex:none;width:30px;height:30px;padding:0;border:0;border-radius:50%;cursor:pointer;box-shadow:inset 2px 3px 6px rgba(255,255,255,.35);transition:transform .12s ease}
.dsh3dv-ball::after{content:"";position:absolute;left:26%;top:17%;width:34%;height:21%;border-radius:50%;background:rgba(255,255,255,.5);filter:blur(1px);transform:rotate(-24deg);pointer-events:none}
.dsh3dv-ball--original{background:radial-gradient(circle at 32% 26%,#fff7ec 0%,#e7cdb8 18%,#9ea6b8 48%,#4f5d70 78%,#5a6676 100%)}
.dsh3dv-ball--diffuse{background:radial-gradient(circle at 32% 26%,#ffffff 0%,#ededed 30%,#dcdcdc 64%,#9b9b9b 100%)}
.dsh3dv-ball--plastic{background:radial-gradient(circle at 30% 22%,#ffffff 0%,#ffffff 8%,#f1f2f4 18%,#dcdddf 46%,#85888c 78%,#b9bcbf 100%)}
.dsh3dv-ball--metal{background:linear-gradient(145deg,#f8fbff 0%,#dce6f2 16%,#77879b 38%,#1d2632 56%,#0a0f16 66%,#a9bbcF 82%,#ffffff 100%)}
.dsh3dv-ball--polished{background:radial-gradient(circle at 28% 22%,#ffffff 0%,#eef3fa 10%,#b6c3d3 28%,#5d6c80 58%,#3f4b5c 100%)}
.dsh3dv-ball--clay{background:radial-gradient(circle at 32% 26%,#f3d6c2 0%,#dfa98a 30%,#b46f52 64%,#7f4635 100%)}
.dsh3dv-env{flex:none;width:32px;height:32px;padding:0;border:0;border-radius:8px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)}
.dsh3dv-env--nature{background:radial-gradient(circle at 72% 24%,#fff6c8 0 9%,transparent 10%),linear-gradient(180deg,#7cb9e4 0%,#d9ebf3 46%,#758653 47%,#435535 100%)}
.dsh3dv-env--city{background:linear-gradient(180deg,#e2b27d 0%,#a4adb7 43%,#65717f 48%,#3f4a58 100%)}
.dsh3dv-env--indoor{background:linear-gradient(135deg,#f2e6d7 0%,#d2b9a3 38%,#94745e 70%,#7c604f 100%)}
.dsh3dv-env--studio{background:linear-gradient(135deg,#f7fbff 0%,#c2cedd 30%,#8393a7 58%,#4d5969 100%)}
.dsh3dv-hint{position:absolute;bottom:10px;left:50%;z-index:2;max-width:calc(100% - 20px);overflow:hidden;padding:5px 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.2;white-space:nowrap;text-overflow:ellipsis;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.dsh3dv-anim{position:absolute;bottom:42px;left:50%;z-index:2;display:flex;align-items:center;gap:5px;box-sizing:border-box;max-width:calc(100% - 20px);padding:3px 8px 3px 3px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-size:11px;line-height:1.2;transform:translateX(-50%);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);pointer-events:auto}
.dsh3dv-play{display:grid;place-items:center;flex:none;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--dsw-alias-label-primary);cursor:pointer}
.dsh3dv-play:hover{background:var(--dsw-alias-bg-layer-2)}
.dsh3dv-play:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dsh3dv-play svg{width:12px;height:12px}
.dsh3dv-anim-name{min-width:0;max-width:110px;overflow:hidden;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis}
.dsh3dv-anim-select{min-width:0;max-width:120px;border:0;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:11px;cursor:pointer;outline:none}
.dsh3dv-anim-select:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-progress{flex:1 1 64px;min-width:40px;max-width:160px;height:12px;margin:0;-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer}
.dsh3dv-progress:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-progress::-webkit-slider-runnable-track{height:2px;border-radius:999px;background:var(--dsw-alias-border-l2)}
.dsh3dv-progress::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:9px;height:9px;margin-top:-3.5px;border:0;border-radius:50%;background:var(--dsw-alias-label-secondary)}
.dsh3dv-progress::-moz-range-track{height:2px;border-radius:999px;background:var(--dsw-alias-border-l2)}
.dsh3dv-progress::-moz-range-thumb{width:9px;height:9px;border:0;border-radius:50%;background:var(--dsw-alias-label-secondary)}
.dsh3dv-anim-time{flex:none;color:var(--dsw-alias-label-secondary);font-size:10px;font-variant-numeric:tabular-nums;font-feature-settings:"tnum" 1;white-space:nowrap}
.dsh3dv-overlay{position:absolute;inset:0;z-index:3;display:grid;place-items:center;padding:20px;box-sizing:border-box;pointer-events:none}
.dsh3dv-panel{box-sizing:border-box;width:min(320px,100%);padding:16px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);text-align:center;pointer-events:auto;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.dsh3dv-panel--loading{display:flex;align-items:center;gap:9px;width:auto;max-width:100%;padding:9px 12px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.3}
.dsh3dv-panel-icon{width:34px;height:34px;margin:0 auto 10px;color:var(--dsw-alias-label-secondary);opacity:.7}
.dsh3dv-panel--error .dsh3dv-panel-icon{color:var(--dsw-alias-state-error-primary);opacity:1}
.dsh3dv-panel-title{margin:0 0 5px;font-size:13px;font-weight:600;line-height:1.35}
.dsh3dv-panel-text{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.55;white-space:normal;word-break:break-word}
.dsh3dv-actions{display:flex;justify-content:center;margin-top:12px}
.dsh3dv-action{box-sizing:border-box;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font-family:inherit;font-size:12px;line-height:1.2;cursor:pointer}
.dsh3dv-action:hover{background:var(--dsw-alias-bg-layer-1)}
.dsh3dv-action:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsh3dv-details{margin-top:10px;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.4;text-align:left}
.dsh3dv-details summary{cursor:pointer;user-select:none}
.dsh3dv-details pre{max-height:140px;margin:8px 0 0;overflow:auto;padding:8px;border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font-size:10px;line-height:1.4;white-space:pre-wrap;word-break:break-word}
.dsh3dv-root button,.dsh3dv-root select,.dsh3dv-root option,.dsh3dv-root input,.dsh3dv-root textarea,.dsh3dv-root summary,.dsh3dv-root pre,.dsh3dv-root code{font-family:inherit}
.dsh3dv-spinner{flex:none;width:14px;height:14px;border:2px solid var(--dsw-alias-border-l2);border-top-color:var(--dsw-alias-brand-primary);border-radius:50%;animation:dsh3dv-spin .8s linear infinite}
@keyframes dsh3dv-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.dsh3dv-spinner{animation-duration:2.4s}}
`;
