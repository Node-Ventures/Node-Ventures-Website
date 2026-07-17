// NodeField — a canvas node/particle engine for the Node Ventures homepage.
// Two modes:
//   'orbit'     — hero: nodes drift in a 3D cluster, parallax to the cursor.
//   'narrative' — scroll-driven 4-beat story: float → silo → drain → constellation.
// Vanilla JS, attached to window. The React sections create instances.
(function () {
  const INK = "#141413";
  const PURPLE = "#7453ff";
  const UMBER = "#c2922e";
  const MUTED = "#8e8b82";
  const BG = "#F9FAF7";   // page canvas — opaque fill so nodes aren't see-through
  const ON_DARK = "#faf9f5"; // cream content on dark avatar chips
  const AV_BG = "#d9ccb3";   // darker-beige avatar circle background
  const WHITE = "#ffffff"; // fill for the extra solid-white nodes
  const ACCENT_BLUE = "#4a90d9";
  const ACCENT_GREEN = "#3fae86";
  const ACCENT_AMBER = "#d99b2c";
  const BODYFONT = '"Hanken Grotesk", system-ui, -apple-system, sans-serif';
  const LABELFONT = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
  const AV_R = 24;
  // collision box for a profile = photo circle + the stacked label beneath it,
  // so the whole unit bounces together with no overlap
  function labelBox(title) {
    const words = (title || "").split(/\s+/);
    let mw = 0; for (const w of words) mw = Math.max(mw, w.length * 6.6);
    const labelH = words.length * 13;
    return { hw: Math.max(AV_R, mw / 2) + 3, hh: (2 * AV_R + 7 + labelH) / 2, yOff: (7 + labelH) / 2 };
  }
  // role titles shown in the floating label beside each avatar
  const TITLES = [
    "Infrastructure advisor", "PropTech developer", "Angel investor",
    "AI researcher", "Defence strategist", "Climate technologist",
    "Systems engineer", "Policy advisor", "Data scientist",
    "Venture partner", "Robotics founder", "Health-AI lead",
    "Quantum researcher", "Supply-chain expert", "Security architect"
  ];

  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
  function clamp01(t) { return t < 0 ? 0 : t > 1 ? 1 : t; }

  class NodeField {
    constructor(canvas, opts = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.mode = opts.mode || "orbit";
      this.count = opts.count || (this.mode === "orbit" ? 34 : 40);
      this.extraWhite = opts.extraWhite || 0;   // extra solid-white nodes (narrative)
      // per-instance palette (narrative can go lighter / cooler than the hero)
      this.bg = opts.bg || BG;
      this.avBg = opts.avatarBg || AV_BG;
      this.containerTint = opts.containerTint || "74,58,32";
      this.containerFill = opts.containerFill || ("rgba(" + this.containerTint + ",0.05)");
      this.containerFloor = opts.containerFloor || ("rgba(" + this.containerTint + ",0.08)");
      this.containerTop = opts.containerTop || ("rgba(" + this.containerTint + ",0.03)");
      this.tones = Object.assign({ ink: INK, purple: PURPLE, umber: UMBER, white: WHITE, muted: MUTED, blue: ACCENT_BLUE, green: ACCENT_GREEN, amber: ACCENT_AMBER }, opts.tones || {});
      // real contributor photos (optional) — preloaded, drawn clipped to the
      // avatar circles in place of the illustrated faces
      this.avatarImgs = (opts.avatarImages || []).map((u) => { const im = new Image(); im.src = (window.__resources && window.__resources[u]) || u; return im; });
      this.labelColor = opts.labelColor || "#6c6a64";
      this.W = 0; this.H = 0; this.dpr = 1;
      this.progress = 0;          // narrative scroll 0..1
      this.target = 0;            // eased toward progress
      this.mouse = { x: -9999, y: -9999, active: false };
      this.t0 = performance.now();
      this.raf = null;
      this._initNodes();
      // avatar role-label cycler: assign a title to each avatar, build the order
      this.labelOrder = []; let _tc = 0;
      for (const n of this.nodes) { if (n.profile) { n.title = TITLES[_tc % TITLES.length]; if (this.avatarImgs.length) n.imgIdx = _tc % this.avatarImgs.length; _tc++; this.labelOrder.push(n.idx); } }
      this.labelPos = 0; this.labelState = "expand"; this.labelPhaseT = 0;
      // identity rotation: every few seconds one profile cross-fades to a new
      // photo + title from the pool (float stage only)
      this.rotOrder = this.nodes.filter((n) => n.profile);
      this.rotOrder.forEach((n) => (n.fade = 1));
      this.rotPos = 0; this.rotTimer = 0; this.swap = null;
      this.nextIdx = this.rotOrder.length;
      this._onResize = this._resize.bind(this);
      this._onMove = this._move.bind(this);
      this._onLeave = () => { this.mouse.active = false; };
      window.addEventListener("resize", this._onResize);
      canvas.addEventListener("pointermove", this._onMove);
      canvas.addEventListener("pointerleave", this._onLeave);
      this._resize();
      this._loop = this._loop.bind(this);
      this.raf = requestAnimationFrame(this._loop);
      (window.__fields = window.__fields || []).push(this);
    }

    // Draw a single frame at a given time/progress (used for static capture
    // when rAF is unavailable, e.g. snapshot tooling).
    drawStatic(progress, time = 1.2) {
      if (this.mode === "narrative") { this.progress = progress; this.target = progress; }
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);
      if (this.mode === "orbit") this._drawOrbit(ctx, time);
      else this._drawNarrative(ctx, time);
    }

    _initNodes() {
      const N = this.count + this.extraWhite;
      this.nodes = [];
      for (let i = 0; i < N; i++) {
        const seed = i * 127.1;
        const rndA = Math.abs((Math.sin(seed) * 43758.5453) % 1);
        const rndB = Math.abs((Math.sin(seed * 1.7 + 2.2) * 15731.743) % 1);
        const rndC = Math.abs((Math.cos(seed * 0.9 + 4.1) * 9283.123) % 1);
        const z = 0.4 + ((i * 73) % 100) / 100 * 0.6; // depth 0.4..1
        // base render radius drives everything: the biggest bubbles become avatars
        const isWhite = i >= this.count;     // the EXTRA nodes are solid white
        const back0 = rndC < 0.16;
        // MORE avatars: a good chunk of the coloured nodes become profile bubbles
        const profile = !isWhite && rndB > 0.58;
        // sprinkle small accent-coloured (amber) dots among the plain ones
        const accentDot = !isWhite && !profile && !back0 && rndB > 0.22 && rndB < 0.56;
        let sizeMul;
        if (isWhite) sizeMul = 0.7 + rndA * 0.9;          // white dots stay small/medium
        else if (profile) sizeMul = 2.3 + rndA * 1.4;     // avatars are the large bubbles
        else if (accentDot) sizeMul = 0.9 + rndA * 0.8;   // accent dots: small but visible
        else sizeMul = back0 ? 0.8 + rndA * 0.5 : 0.9 + rndA * rndA * 1.8;
        const rBase = Math.max(5, (3.5 + z * 4) * sizeMul);
        // a few small dots sit further back and render slightly blurred
        const back = !profile && !isWhite && back0;
        // colour tone: roughly even ink / purple / umber across ALL nodes
        // (avatars included) so the next section can sort one colour per jar
        const ht = (rndA * 1.7 + rndB * 0.9 + rndC * 1.3) % 1;
        const tone = isWhite ? "white" : accentDot ? "amber" : (ht < 0.5 ? "ink" : ht < 0.75 ? "purple" : "umber");
        // some plain dots are solid-filled, the rest are dashed-outline + bg fill
        const solid = isWhite ? true : accentDot ? true : (!profile && rndC < 0.5);
        this.nodes.push({
          idx: i,
          group: i % 4,                       // which cylinder (2x2 grid)
          gi: Math.floor(i / 9),              // index within stagger
          sx: Math.abs((Math.sin(seed * 2.7 + 1.3) * 9173.21) % 1), // random pos in silo
          sy: Math.abs((Math.cos(seed * 3.1 + 0.7) * 6311.77) % 1),
          z,
          accent: i % 9 === 0,                // a few purple nodes (orbit mode)
          tone, profile, back, solid, sizeMul, rBase,
          rnd: (Math.sin(seed) * 43758.5453) % 1,
          ph: (i / N) * Math.PI * 2,          // phase
          drift: 0.5 + ((i * 31) % 100) / 100,
          x: 0, y: 0, r: 0, a: 1,
        });
      }
    }

    _resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.W = rect.width; this.H = rect.height;
      this.canvas.width = Math.round(this.W * this.dpr);
      this.canvas.height = Math.round(this.H * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      if (this.mode === "narrative") this._initSim();
    }

    // free-floating bounce sim used for the scattered (float) stage
    _initSim() {
      for (const n of this.nodes) {
        n.collR = Math.max(5, (3.5 + n.z * 4) * n.sizeMul);
        if (n.profile) { const b = labelBox(n.title); n.hw = b.hw; n.hh = b.hh; n.yOff = b.yOff; }
        else { n.hw = n.collR; n.hh = n.collR; n.yOff = 0; }
        if (n._simReady) {
          n.px = Math.max(n.hw, Math.min(this.W - n.hw, n.px));
          n.py = Math.max(n.hh - n.yOff, Math.min(this.H - n.hh - n.yOff, n.py));
          continue;
        }
        n.px = this.W * (0.12 + 0.76 * Math.abs(Math.sin(n.idx * 12.9 + 1)));
        n.py = this.H * (0.12 + 0.76 * Math.abs(Math.cos(n.idx * 7.7 + 2)));
        const sp = 20 + (n.idx % 5) * 6;          // px/sec
        const a = n.idx * 2.4;
        n.vx = Math.cos(a) * sp; n.vy = Math.sin(a) * sp;
        n._simReady = true;
      }
    }

    _simStep(dt) {
      const ns = this.nodes;
      // integrate + wall bounce on each node's axis-aligned box
      for (const n of ns) {
        n.px += n.vx * dt; n.py += n.vy * dt;
        const cx = n.px, cy = n.py + (n.yOff || 0);
        if (cx - n.hw < 0) { n.px = n.hw; n.vx = Math.abs(n.vx); }
        else if (cx + n.hw > this.W) { n.px = this.W - n.hw; n.vx = -Math.abs(n.vx); }
        if (cy - n.hh < 0) { n.py = n.hh - (n.yOff || 0); n.vy = Math.abs(n.vy); }
        else if (cy + n.hh > this.H) { n.py = this.H - n.hh - (n.yOff || 0); n.vy = -Math.abs(n.vy); }
      }
      // pairwise AABB: separate along the axis of least penetration and swap
      // that axis's velocity (equal-mass elastic bounce)
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const A = ns[i], B = ns[j];
          const dx = (B.px) - (A.px);
          const dy = (B.py + (B.yOff || 0)) - (A.py + (A.yOff || 0));
          const ox = (A.hw + B.hw) - Math.abs(dx);
          const oy = (A.hh + B.hh) - Math.abs(dy);
          if (ox > 0 && oy > 0) {
            if (ox < oy) {
              const s = (dx < 0 ? -1 : 1) * ox / 2;
              A.px -= s; B.px += s;
              const t = A.vx; A.vx = B.vx; B.vx = t;
            } else {
              const s = (dy < 0 ? -1 : 1) * oy / 2;
              A.py -= s; B.py += s;
              const t = A.vy; A.vy = B.vy; B.vy = t;
            }
          }
        }
      }
    }

    _updateRotation(dt) {
      if (!this.avatarImgs.length || !this.rotOrder || !this.rotOrder.length) return;
      if (this.swap) {
        const D = 0.45; this.swap.t += dt;
        const n = this.swap.node;
        if (this.swap.dir === "out") {
          n.fade = 1 - clamp01(this.swap.t / D);
          if (this.swap.t >= D) {
            n.imgIdx = this.nextIdx % this.avatarImgs.length;
            n.title = TITLES[this.nextIdx % TITLES.length];
            this.nextIdx++;
            const b = labelBox(n.title); n.hw = b.hw; n.hh = b.hh; n.yOff = b.yOff;
            this.swap = { node: n, dir: "in", t: 0 };
          }
        } else {
          n.fade = clamp01(this.swap.t / D);
          if (this.swap.t >= D) { n.fade = 1; this.swap = null; this.rotTimer = 0; }
        }
        return;
      }
      if (this.target > 0.42) { this.rotTimer = 0; return; }   // float stage only
      this.rotTimer += dt;
      if (this.rotTimer > 3.0) {
        const node = this.rotOrder[this.rotPos % this.rotOrder.length];
        this.rotPos++;
        this.swap = { node, dir: "out", t: 0 };
      }
    }

    _move(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.active = true;
    }

    setProgress(p) { this.progress = clamp01(p); }

    // ---- anchor layouts (narrative) ----
    _floatAnchor(n, time) {
      // free bounce-sim position (set by _simStep)
      return { x: n.px, y: n.py };
    }
    // Geometry for the 4 dotted 3D cylinders (2x2 grid). Shared by the
    // silo anchor (where nodes cluster) and the container renderer so the
    // bubbles always float in the center of each cylinder body.
    _cylLayout() {
      const cols = 2, rows = 2;
      const gap = 25;                          // ~25px between cylinders
      const mX = this.W * 0.06, mY = this.H * 0.05;
      const boxW = (this.W - mX * 2 - gap) / cols;   // each cylinder's bounding box
      const boxH = (this.H - mY * 2 - gap) / rows;
      const rx = boxW / 2;                     // fill the box width -> larger jars
      const ry = rx * 0.30;                    // perspective squash
      const h = boxH - ry * 2;                  // body height (so h + 2ry = boxH)
      const cyl = [];
      for (let g = 0; g < 4; g++) {
        const col = g % cols, row = Math.floor(g / cols);
        cyl.push({
          cx: mX + col * (boxW + gap) + boxW * 0.5,
          cy: mY + row * (boxH + gap) + boxH * 0.5,
          rx, ry, h
        });
      }
      return cyl;
    }
    _siloAnchor(n, time = 0) {
      // bubbles cluster in the CENTER of their cylinder's body, with a gentle
      // idle drift so they keep floating while the jars are held on screen
      const c = this._cylLayout()[n.group % 4];
      const spanX = c.rx * 0.95, spanY = c.h * 0.5;
      const bobX = Math.cos(time * 0.55 + n.ph) * c.rx * 0.12;
      const bobY = Math.sin(time * 0.45 + n.ph * 1.3) * c.h * 0.07;
      const x = c.cx + (n.sx - 0.5) * spanX + bobX;
      const y = c.cy + (n.sy - 0.5) * spanY + bobY;
      return { x, y };
    }
    _drainAnchor(n) {
      // funnel toward a node low-center
      const tx = this.W * 0.5, ty = this.H * 0.62;
      const spread = 1 - n.gi / (this.count / 4 + 1);
      const ang = n.ph;
      return { x: tx + Math.cos(ang) * 26 * spread, y: ty - 60 - n.gi * 10 * spread };
    }
    _ringAnchor(n, time) {
      // genuine 3D: points distributed on a sphere (fibonacci), rotating around
      // the vertical axis, projected with perspective so it reads as a globe.
      const cx = this.W * 0.5, cy = this.H * 0.5;
      const R = Math.min(this.W, this.H) * 0.4;
      const k = n.idx + 0.5;
      const phi = Math.acos(1 - 2 * k / this.nodes.length); // polar angle
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;    // golden-angle azimuth
      const X = Math.sin(phi) * Math.cos(theta);
      const Y = Math.cos(phi);
      const Z = Math.sin(phi) * Math.sin(theta);
      const a = time * 0.2;                               // slow spin
      const rx = X * Math.cos(a) + Z * Math.sin(a);
      const rz = -X * Math.sin(a) + Z * Math.cos(a);
      const focal = 2.6;
      const s = focal / (focal - rz);                    // perspective scale
      return { x: cx + rx * R * s, y: cy + Y * R * s, s, depth: rz };
    }

    _narrativePos(n, time, p) {
      // 3 stages: float (scattered) → silos → connected 3D sphere
      let a, b, seg;
      if (p < 0.33) { const f = this._floatAnchor(n, time); return { x: f.x, y: f.y, s: 1, depth: 0, stage: 1 }; }
      else if (p < 0.66) { a = this._floatAnchor(n, time); b = this._siloAnchor(n, time); seg = (p - 0.33) / 0.33; }
      else { a = this._siloAnchor(n, time); b = this._ringAnchor(n, time); seg = (p - 0.66) / 0.34; }
      const t = easeInOut(clamp01(seg));
      const sa = a.s || 1, sb = b.s || 1, da = a.depth || 0, db = b.depth || 0;
      return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), s: lerp(sa, sb, t), depth: lerp(da, db, t), stage: p < 0.66 ? 2 : 4 };
    }

    _loop() {
      const now = performance.now();
      const time = (now - this.t0) / 1000;
      const dt = Math.min(0.05, (now - (this._last || now)) / 1000);
      this._last = now;
      this._frameDt = dt;
      this.target = lerp(this.target, this.progress, 0.08);
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);
      if (this.mode === "orbit") this._drawOrbit(ctx, time);
      else { this._updateRotation(dt); this._simStep(dt); this._drawNarrative(ctx, time); }
      this.raf = requestAnimationFrame(this._loop);
    }

    // ---- hero orbit ----
    _drawOrbit(ctx, time) {
      const cx = this.W * 0.5, cy = this.H * 0.5;
      const R = Math.min(this.W, this.H) * 0.36;
      const mx = this.mouse.active ? (this.mouse.x - cx) / this.W : 0;
      const my = this.mouse.active ? (this.mouse.y - cy) / this.H : 0;
      const pts = this.nodes.map((n) => {
        const ang = n.ph + time * 0.18 * n.drift;
        const rr = R * (0.45 + n.z * 0.7);
        const x = cx + Math.cos(ang) * rr + mx * 40 * n.z;
        const y = cy + Math.sin(ang) * rr * 0.7 + my * 40 * n.z;
        return { x, y, n };
      });
      // connections
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < R * 0.5) {
            ctx.strokeStyle = `rgba(20,20,19,${(1 - d / (R * 0.5)) * 0.12})`;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const r = 1.5 + p.n.z * 3.5;
        ctx.globalAlpha = 0.35 + p.n.z * 0.65;
        ctx.fillStyle = p.n.accent ? PURPLE : INK;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // ---- narrative ----
    _drawNarrative(ctx, time) {
      const p = this.target;
      // containers (silo stage): fade in around .33, out as the ring forms ~.66
      const cIn = clamp01((p - 0.33) / 0.10);
      const cOut = 1 - clamp01((p - 0.66) / 0.10);
      const cA = Math.min(cIn, cOut);
      if (cA > 0.01) this._drawContainers(ctx, cA);

      const pts = this.nodes.map((n) => {
        const pos = this._narrativePos(n, time, p);
        let x = pos.x, y = pos.y;
        // mouse avoid, strong in float, fades out
        if (this.mouse.active && p < 0.4) {
          const dx = x - this.mouse.x, dy = y - this.mouse.y;
          const d = Math.hypot(dx, dy);
          const R = 90;
          if (d < R) {
            const f = (1 - d / R) * (1 - p / 0.4) * 30;
            x += (dx / (d || 1)) * f; y += (dy / (d || 1)) * f;
          }
        }
        return { x, y, n, depth: pos.depth || 0, r: Math.max(5, (3.5 + n.z * 4) * n.sizeMul) * (pos.s || 1) };
      });

      // silo nodes float individually inside their jar — no collision response,
      // so they don't jostle/jump off each other (only the free-float stage,
      // which uses the bounce sim, has node-to-node interaction)
      const sepK = 0;
      if (sepK > 0.01) {
        for (let pass = 0; pass < 4; pass++) {
          for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
              const A = pts[i], B = pts[j];
              const dx = B.x - A.x, dy = B.y - A.y;
              const d = Math.hypot(dx, dy);
              const min = A.r + B.r + 6;
              if (d < min && d > 0.0001) {
                const overlap = (min - d) * sepK;
                const ux = dx / d, uy = dy / d;
                const wA = B.r / (A.r + B.r), wB = A.r / (A.r + B.r);
                A.x -= ux * overlap * wA; A.y -= uy * overlap * wA;
                B.x += ux * overlap * wB; B.y += uy * overlap * wB;
              }
            }
          }
        }
      }
      const nodeA = clamp01((p - 0.66) / 0.16);
      const cx = this.W * 0.5, cy = this.H * 0.5;

      // connection lines from the central hub, dimmer toward the far side
      const lineA = clamp01((p - 0.74) / 0.18);
      if (lineA > 0.01) {
        ctx.lineWidth = 1.6;
        for (const pt of pts) {
          const dfog = (pt.depth + 1) / 2;
          ctx.strokeStyle = `rgba(20,20,19,${0.16 * lineA * (0.35 + 0.65 * dfog)})`;
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(pt.x, pt.y); ctx.stroke();
        }
      }

      // nodes — depth-sorted so the 3D sphere renders back-to-front; in the
      // flat stages we sort by size so larger bubbles sit in front
      const sphere = p > 0.66;
      const drawList = pts.slice().sort((a, b) => sphere ? (a.depth - b.depth) : (a.r - b.r));

      // uniform avatar radius; titles float statically beneath each profile in
      // the scattered stage and fade out as the nodes gather into the silos
      const AVR = 24;
      const titleA = clamp01((0.34 - p) / 0.12);

      let centralDrawn = false;
      const drawCentral = () => {
        const R = 28 * nodeA;
        ctx.lineCap = "round";
        ctx.setLineDash([]);
        // pulsing signal: rings expanding outward from the hub and fading away
        for (let k = 0; k < 3; k++) {
          const f = ((time / 2.6) + k / 3) % 1;
          const rr = R * (1 + f * 2.6);
          ctx.globalAlpha = nodeA * 0.4 * (1 - f);
          ctx.strokeStyle = PURPLE; ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2); ctx.stroke();
        }
        // solid purple disc
        ctx.globalAlpha = nodeA;
        ctx.fillStyle = PURPLE;
        ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
        // N in brand sans
        ctx.fillStyle = "#faf9f5";
        ctx.font = `500 ${Math.round(R)}px ${BODYFONT}`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("N", cx, cy + 1);
        ctx.globalAlpha = 1;
      };
      for (const pt of drawList) {
        if (sphere && nodeA > 0.01 && !centralDrawn && pt.depth >= 0) { drawCentral(); centralDrawn = true; }
        const n = pt.n, r = pt.r;
        let baseA = (p < 0.25) ? (0.4 + n.z * 0.6) : (0.55 + n.z * 0.45);
        const tone = this.tones[n.tone] || this.tones.ink;
        // atmospheric depth: far side of the sphere is dimmer + softly blurred
        const fog = sphere ? (0.42 + 0.58 * ((pt.depth + 1) / 2)) : 1;
        baseA *= fog;
        // keep accent-coloured dots at fuller opacity so brand purple/amber read true (not washed-out lavender)
        if (n.solid && (n.tone === "purple" || n.tone === "amber")) baseA = Math.max(baseA, sphere ? 0.72 : 0.92);
        const farBlur = 0;
        const blur = 0;
        if (blur > 0) ctx.filter = `blur(${blur}px)`;
        if (n.profile) {
          const av = clamp01(baseA + 0.4) * (n.fade == null ? 1 : n.fade);
          this._drawAvatarPhoto(ctx, pt.x, pt.y, AVR, n, av);
        } else {
          ctx.globalAlpha = n.back ? baseA * 0.7 : baseA;
          if (n.solid) {
            ctx.setLineDash([]);
            ctx.fillStyle = tone;
            ctx.beginPath(); ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2); ctx.fill();
            if (n.tone === "white") {   // white ring border (halo) on the white nodes
              ctx.lineWidth = 2; ctx.strokeStyle = WHITE;
              ctx.beginPath(); ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2); ctx.stroke();
            }
          } else {
            // bg fill so connection lines don't show through, then dotted outline
            ctx.fillStyle = this.bg;
            ctx.beginPath(); ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2); ctx.fill();
            ctx.lineWidth = 1.3; ctx.strokeStyle = tone;
            ctx.setLineDash([2.4, 2.4]);
            ctx.beginPath(); ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2); ctx.stroke();
            ctx.setLineDash([]);
          }
        }
        if (blur > 0) ctx.filter = "none";
      }
      ctx.globalAlpha = 1;
      ctx.filter = "none";

      // container TOP rims drawn in FRONT of the nodes, so the nodes read as
      // sitting down inside the cylinders
      if (cA > 0.01) this._drawContainerTops(ctx, cA);

      // titles drawn above all nodes so they never get overlapped
      if (titleA > 0.01) {
        for (const pt of pts) {
          if (pt.n.profile && pt.n.title) this._drawAvatarLabel(ctx, pt.x, pt.y, AVR, pt.n.title, titleA * (pt.n.fade == null ? 1 : pt.n.fade));
        }
      }

      // central node + N — drawn inline at the depth-0 crossing so front-
      // hemisphere nodes overlap it; this covers the all-behind case.
      if (nodeA > 0.01 && !centralDrawn) drawCentral();
    }

    // A floating profile glyph: opaque bg disc with a single dotted-line person.
    _drawAvatar(ctx, x, y, r, stroke, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.setLineDash([]);
      // opaque background disc (so connection lines don't show through)
      ctx.fillStyle = this.bg;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      // dotted outer ring
      ctx.strokeStyle = stroke;
      ctx.lineWidth = Math.max(1.1, r * 0.06);
      ctx.lineJoin = "round"; ctx.lineCap = "round";
      ctx.setLineDash([2.4, 2.4]);
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
      // person glyph as ONE dotted stroke (head circle + non-overlapping shoulders)
      ctx.save();
      ctx.beginPath(); ctx.arc(x, y, r - ctx.lineWidth, 0, Math.PI * 2); ctx.clip();
      const hr = r * 0.27, hy = y - r * 0.26;
      ctx.beginPath();
      ctx.arc(x, hy, hr, 0, Math.PI * 2);                                   // head
      ctx.moveTo(x + r * 0.54, y + r * 0.74);
      ctx.arc(x, y + r * 0.74, r * 0.54, 0, Math.PI, true);                  // shoulders dome (lowered for head/body gap)
      ctx.stroke();
      ctx.restore();
      ctx.setLineDash([]);
      ctx.restore();
    }

    _updateLabel(dt) {
      const D = { expand: 0.30, hold: 1.7, collapse: 0.28, gap: 0.22 };
      this.labelPhaseT += dt;
      if (this.labelPhaseT >= (D[this.labelState] || 0.5)) {
        this.labelPhaseT = 0;
        if (this.labelState === "expand") this.labelState = "hold";
        else if (this.labelState === "hold") this.labelState = "collapse";
        else if (this.labelState === "collapse") this.labelState = "gap";
        else { this.labelState = "expand"; this.labelPos = (this.labelPos + 1) % this.labelOrder.length; }
      }
    }
    _labelOpen() {
      const t = this.labelPhaseT;
      if (this.labelState === "expand") return easeInOut(clamp01(t / 0.30));
      if (this.labelState === "hold") return 1;
      if (this.labelState === "collapse") return 1 - easeInOut(clamp01(t / 0.30));
      return 0;
    }
    _roundRect(ctx, x, y, w, h, r) {
      r = Math.min(r, w / 2, h / 2);
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    _avatarStyle(n) {
      const rnd = (k) => { const v = Math.sin((n.idx + 1) * k) * 43758.5453; return v - Math.floor(v); };
      const SKIN = ["#f1cda3", "#e7b98e", "#d89a6a", "#c2825a", "#a86a44", "#8a5a3a", "#6b4630"];
      const HAIR = ["#241c19", "#3a2a20", "#5a3d28", "#86663a", "#b88a3a", "#9a9a9a", "#cf5a47", "#141413"];
      const CLOTH = ["#7453ff", "#c2922e", "#3d5a80", "#7a6a8a", "#9a6a4a", "#4e6a5a", "#86708c", "#a8553f"];
      const STYLE = ["short", "short", "long", "long", "bun", "bald", "curly"];
      const pick = (arr, k) => arr[Math.floor(rnd(k) * arr.length)];
      return {
        skin: pick(SKIN, 12.9), hair: pick(HAIR, 78.23), cloth: pick(CLOTH, 37.71),
        style: pick(STYLE, 91.37), glasses: rnd(5.51) > 0.66, beard: rnd(22.13) > 0.76
      };
    }
    // a small flat illustrated person (skin/hair/clothing varied per node)
    _drawFace(ctx, x, y, R, n) {
      const s = n._av || (n._av = this._avatarStyle(n));
      ctx.setLineDash([]);
      const hrx = R * 0.34, hry = R * 0.40, hy = y - R * 0.08;
      if (s.style === "long") {
        ctx.fillStyle = s.hair;
        ctx.beginPath(); ctx.ellipse(x, hy + hry * 0.6, hrx * 1.4, hry * 1.6, 0, 0, Math.PI * 2); ctx.fill();
      }
      // body / clothing
      ctx.fillStyle = s.cloth;
      ctx.beginPath(); ctx.ellipse(x, y + R * 1.02, R * 0.92, R * 0.72, 0, 0, Math.PI * 2); ctx.fill();
      // neck + head (skin)
      ctx.fillStyle = s.skin;
      ctx.fillRect(x - R * 0.12, y + R * 0.12, R * 0.24, R * 0.26);
      ctx.beginPath(); ctx.ellipse(x, hy, hrx, hry, 0, 0, Math.PI * 2); ctx.fill();
      // hair cap
      if (s.style !== "bald") {
        ctx.fillStyle = s.hair;
        const capRy = s.style === "curly" ? hry * 0.95 : hry * 0.8;
        ctx.beginPath(); ctx.ellipse(x, hy - hry * 0.34, hrx * 1.08, capRy, 0, 0, Math.PI * 2); ctx.fill();
        if (s.style === "bun") { ctx.beginPath(); ctx.arc(x, hy - hry * 1.02, R * 0.12, 0, Math.PI * 2); ctx.fill(); }
      }
      // beard (lower face only)
      if (s.beard) {
        ctx.save();
        ctx.beginPath(); ctx.rect(x - hrx, hy + hry * 0.04, hrx * 2, hry); ctx.clip();
        ctx.fillStyle = s.hair;
        ctx.beginPath(); ctx.ellipse(x, hy + hry * 0.42, hrx * 0.96, hry * 0.68, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
      // eyes
      const ey = hy + hry * 0.12, ex = hrx * 0.42, er = Math.max(0.8, R * 0.045);
      ctx.fillStyle = "#141413";
      ctx.beginPath(); ctx.arc(x - ex, ey, er, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x + ex, ey, er, 0, Math.PI * 2); ctx.fill();
      // glasses
      if (s.glasses) {
        ctx.strokeStyle = "#2a2622"; ctx.lineWidth = Math.max(1, R * 0.05);
        ctx.beginPath();
        ctx.arc(x - ex, ey, er * 1.9, 0, Math.PI * 2);
        ctx.arc(x + ex, ey, er * 1.9, 0, Math.PI * 2);
        ctx.moveTo(x - ex + er * 1.9, ey); ctx.lineTo(x + ex - er * 1.9, ey);
        ctx.stroke();
      }
    }
    // avatar circle with a cover-fit photo (or illustrated fallback)
    _drawAvatarPhoto(ctx, x, y, R, n, alpha) {
      const a = alpha == null ? 1 : alpha;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2);
      ctx.fillStyle = this.avBg; ctx.fill();
      ctx.save();
      ctx.beginPath(); ctx.arc(x, y, R - 0.6, 0, Math.PI * 2); ctx.clip();
      const img = (n.imgIdx != null) ? this.avatarImgs[n.imgIdx] : null;
      if (img && img.complete && img.naturalWidth) {
        const d = R * 2;
        const scale = Math.max(d / img.naturalWidth, d / img.naturalHeight) * 1.02;
        const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
        // vertical offset biased toward the face, clamped so the circle always fills
        const offY = Math.max(R, Math.min(dh - R, dh * 0.42));
        ctx.drawImage(img, x - dw / 2, y - offY, dw, dh);
      } else {
        this._drawFace(ctx, x, y, R, n);
      }
      ctx.restore();
      // solid white border ring — consistent across every phase (never dashed)
      const bw = Math.max(1.5, R * 0.09);
      ctx.lineWidth = bw;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(x, y, R - bw / 2, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
    }

    // static role title stacked under a floating profile, in the label font
    _drawAvatarLabel(ctx, x, y, R, text, alpha) {
      ctx.save();
      ctx.globalAlpha = clamp01(alpha);
      ctx.setLineDash([]);
      ctx.fillStyle = this.labelColor;
      ctx.font = '11px ' + LABELFONT;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      // stack each word on its own line, kept inside the canvas
      const words = text.split(/\s+/);
      let maxW = 0;
      for (const w of words) maxW = Math.max(maxW, ctx.measureText(w).width);
      const halfW = maxW / 2 + 4;
      const lx = Math.max(halfW, Math.min(this.W - halfW, x));
      words.forEach((w, i) => ctx.fillText(w, lx, y + R + 7 + i * 13));
      ctx.restore();
    }

    _drawAvatarPill(ctx, x, y, R, n, open, alpha) {
      const a = alpha == null ? 1 : alpha;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.font = "500 13px " + BODYFONT;
      const label = n.title || "Contributor";
      const textW = ctx.measureText(label).width;
      const gapAT = 12, padR = 16;                 // avatar->text gap, right padding
      const ext = (gapAT + textW + padR) * easeInOut(clamp01(open));
      // always expand to the RIGHT; slide the whole chip left if it would
      // overflow the frame so it never clips at the edge
      let cx = x;
      const over = (cx + R + ext) - (this.W - 6);
      if (over > 0) cx -= over;
      if (cx - R < 6) cx = R + 6;
      const x0 = cx - R, w = 2 * R + ext, y0 = y - R, h = 2 * R;
      // white pill (a plain circle when collapsed) with soft shadow + faint hairline
      // darker-beige pill (a plain circle when collapsed) + faint outline
      ctx.beginPath(); this._roundRect(ctx, x0, y0, w, h, R);
      ctx.fillStyle = this.avBg;
      ctx.fill();
      ctx.setLineDash([]);
      // job title revealed in the opened area (fades in late in the expand)
      if (ext > 1) {
        ctx.save();
        ctx.beginPath(); this._roundRect(ctx, x0, y0, w, h, R); ctx.clip();
        ctx.globalAlpha = a * clamp01((open - 0.35) / 0.5);
        ctx.fillStyle = INK; ctx.textAlign = "left"; ctx.textBaseline = "middle";
        const tx = cx + R + gapAT;
        ctx.fillText(label, tx, y + 0.5);
        ctx.restore();
      }
      // photo (cover-fit, biased up to the face) or the illustrated fallback,
      // clipped to the circle cap
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, y, R - 0.6, 0, Math.PI * 2); ctx.clip();
      const img = (n.imgIdx != null) ? this.avatarImgs[n.imgIdx] : null;
      if (img && img.complete && img.naturalWidth) {
        const d = R * 2;
        const scale = Math.max(d / img.naturalWidth, d / img.naturalHeight);
        const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
        ctx.drawImage(img, cx - dw / 2, y - dh * 0.40, dw, dh);
      } else {
        ctx.fillStyle = this.avBg;
        ctx.fillRect(cx - R, y - R, 2 * R, 2 * R);
        this._drawFace(ctx, cx, y, R, n);
      }
      ctx.restore();
      ctx.restore();
    }

    _drawContainers(ctx, alpha) {
      const cyl = this._cylLayout();
      ctx.save();
      ctx.strokeStyle = this.tones.muted;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.setLineDash([2.6, 3]);
      for (const c of cyl) {
        const topY = c.cy - c.h / 2;
        const botY = c.cy + c.h / 2;
        // very subtle interior fill — barely darker than the canvas
        ctx.globalAlpha = alpha;
        ctx.setLineDash([]);
        ctx.fillStyle = this.containerFill;
        ctx.beginPath();
        ctx.ellipse(c.cx, topY, c.rx, c.ry, 0, 0, Math.PI * 2);
        ctx.rect(c.cx - c.rx, topY, c.rx * 2, botY - topY);
        ctx.ellipse(c.cx, botY, c.rx, c.ry, 0, 0, Math.PI);
        ctx.fill();
        // bottom oval (the floor) — same fill as the body
        ctx.fillStyle = this.containerFill;
        ctx.beginPath();
        ctx.ellipse(c.cx, botY, c.rx, c.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        // top oval — a touch lighter than the body so the opening reads
        ctx.fillStyle = this.containerTop;
        ctx.beginPath();
        ctx.ellipse(c.cx, topY, c.rx, c.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.setLineDash([2.6, 3]);
        // back arc of the bottom rim — hidden behind the body, drawn faint
        ctx.globalAlpha = alpha * 0.35;
        ctx.beginPath();
        ctx.ellipse(c.cx, botY, c.rx, c.ry, 0, Math.PI, Math.PI * 2);
        ctx.stroke();
        // vertical sides
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(c.cx - c.rx, topY); ctx.lineTo(c.cx - c.rx, botY);
        ctx.moveTo(c.cx + c.rx, topY); ctx.lineTo(c.cx + c.rx, botY);
        ctx.stroke();
        // front arc of the bottom rim (visible)
        ctx.beginPath();
        ctx.ellipse(c.cx, botY, c.rx, c.ry, 0, 0, Math.PI);
        ctx.stroke();
      }
      ctx.restore();
    }
    // top rims only — drawn AFTER the nodes so they sit in front (container look)
    _drawContainerTops(ctx, alpha) {
      const cyl = this._cylLayout();
      ctx.save();
      ctx.strokeStyle = this.tones.muted; ctx.lineWidth = 1; ctx.lineCap = "round";
      ctx.setLineDash([2.6, 3]); ctx.globalAlpha = alpha;
      for (const c of cyl) {
        const topY = c.cy - c.h / 2;
        ctx.beginPath();
        ctx.ellipse(c.cx, topY, c.rx, c.ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }

    destroy() {
      cancelAnimationFrame(this.raf);
      window.removeEventListener("resize", this._onResize);
      this.canvas.removeEventListener("pointermove", this._onMove);
      this.canvas.removeEventListener("pointerleave", this._onLeave);
    }
  }

  window.NodeField = NodeField;
})();
