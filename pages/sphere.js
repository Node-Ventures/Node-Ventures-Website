/* Node Ventures — interactive node-sphere hero engine.
   Pure 2D-canvas 3D projection. One class, instantiated per hero frame.
   Geometry: a subdivided icosphere (uniform, fully-triangulated mesh).
   Features: slow ambient spin, drag-to-turn with momentum, an optional
   shaded solid core the cage rotates around (with front/back occlusion),
   and service-node callouts that expand a straight line + outlined box as a
   node rotates to the front, then collapse as it turns away. */

(function () {
  const TAU = Math.PI * 2;
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const norm3 = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };

  // ── fibonacci sphere: any exact point count, meshed by nearest neighbours ─
  function fibSphere(n, k) {
    const GOLD = Math.PI * (3 - Math.sqrt(5));
    const pts = [];
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * GOLD;
      pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
    }
    const seen = new Set(), edges = [];
    for (let i = 0; i < n; i++) {
      const a = pts[i], near = [];
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        const b = pts[j];
        near.push([a.x * b.x + a.y * b.y + a.z * b.z, j]); // angular closeness
      }
      near.sort((p, q) => q[0] - p[0]);
      for (let m = 0; m < k && m < near.length; m++) {
        const j = near[m][1];
        const key = i < j ? i * 100000 + j : j * 100000 + i;
        if (seen.has(key)) continue;
        seen.add(key); edges.push([i, j]);
      }
    }
    return { pts, edges };
  }


  // ── geodesic sphere: icosahedron subdivided at any frequency f.
  //    Vertices = 10·f²+2, uniform triangulated mesh (f=5 → 252). ──────────
  function geodesic(freq) {
    const t = (1 + Math.sqrt(5)) / 2;
    const base = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ].map(norm3);
    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];
    const verts = [], vmap = new Map();
    const addV = (v) => {
      const n = norm3(v);
      const key = n.map((c) => c.toFixed(5)).join(',');
      if (vmap.has(key)) return vmap.get(key);
      const idx = verts.length; verts.push(n); vmap.set(key, idx); return idx;
    };
    const eset = new Set(), edges = [];
    const addE = (a, b) => {
      if (a === b) return;
      const key = a < b ? a * 1e6 + b : b * 1e6 + a;
      if (!eset.has(key)) { eset.add(key); edges.push([a, b]); }
    };
    for (const [ia, ib, ic] of faces) {
      const A = base[ia], B = base[ib], C = base[ic];
      const g = [];
      for (let i = 0; i <= freq; i++) {
        g[i] = [];
        for (let j = 0; j <= freq - i; j++) {
          const k = freq - i - j;
          g[i][j] = addV([
            A[0] * i + B[0] * j + C[0] * k,
            A[1] * i + B[1] * j + C[1] * k,
            A[2] * i + B[2] * j + C[2] * k,
          ]);
        }
      }
      for (let i = 0; i < freq; i++) {
        for (let j = 0; j < freq - i; j++) {
          addE(g[i][j], g[i + 1][j]); addE(g[i + 1][j], g[i][j + 1]); addE(g[i][j + 1], g[i][j]);
          if (i + j < freq - 1) {
            addE(g[i + 1][j], g[i + 1][j + 1]); addE(g[i + 1][j + 1], g[i][j + 1]);
          }
        }
      }
    }
    return { pts: verts.map((v) => ({ x: v[0], y: v[1], z: v[2] })), edges };
  }

  // ── icosphere: subdivided icosahedron → uniform triangulated mesh ────────
  function icosphere(order) {
    const t = (1 + Math.sqrt(5)) / 2;
    let verts = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ].map(norm3);
    let faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];
    const cache = new Map();
    const mid = (a, b) => {
      const key = a < b ? a * 100000 + b : b * 100000 + a;
      if (cache.has(key)) return cache.get(key);
      const va = verts[a], vb = verts[b];
      const m = norm3([va[0] + vb[0], va[1] + vb[1], va[2] + vb[2]]);
      const idx = verts.length; verts.push(m); cache.set(key, idx); return idx;
    };
    for (let o = 0; o < order; o++) {
      const nf = [];
      for (const [a, b, c] of faces) {
        const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
        nf.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
      }
      faces = nf;
    }
    const eset = new Set(), edges = [];
    for (const f of faces) {
      for (const [a, b] of [[f[0], f[1]], [f[1], f[2]], [f[2], f[0]]]) {
        const key = a < b ? a * 100000 + b : b * 100000 + a;
        if (!eset.has(key)) { eset.add(key); edges.push([a, b]); }
      }
    }
    return { pts: verts.map((v) => ({ x: v[0], y: v[1], z: v[2] })), edges };
  }

  // ── the engine ─────────────────────────────────────────────────────────
  class NodeSphere {
    constructor(canvas, opts) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.host = canvas.parentElement;
      this.o = Object.assign({
        order: 2,
        radiusFrac: 0.34,
        radiusPx: null,
        cx: 0.66, cy: 0.5,
        spin: 0.0016,
        tilt: -0.32,
        fov: 2.7,
        node: '#faf9f5',
        line: 'rgba(250,249,245,0.18)',
        accent: '#7453ff',
        core: null,            // { color, radiusFrac } — solid centre sphere
        preferDir: [1, 0],
        services: [],          // [{i,label,caption,index}]
        boxAlign: 'right',
      }, opts);

      const geo = this.o.freq
        ? geodesic(this.o.freq)
        : this.o.count
          ? fibSphere(this.o.count, this.o.k || 6)
          : icosphere(this.o.order);
      this.pts = geo.pts;
      this.edges = geo.edges;
      // resolve any service anchored by direction to its nearest vertex
      this.o.services.forEach((s) => {
        if (s.dir && s.i == null) s.i = this._nearestVertex(s.dir);
      });
      const n = this.pts.length;
      this.tx = new Float32Array(n);
      this.ty = new Float32Array(n);
      this.tz = new Float32Array(n);
      // ── callout scheduler ──
      this.labels = this.o.services.slice();
      this.labelIdx = 0;
      this.active = [];
      this.lastEnd = -1e9;
      this.lastT = 0;
      this.openDur = this.o.openDur || 420;
      this.holdDur = this.o.holdDur || 1300;
      this.closeDur = this.o.closeDur || 420;
      this.o.calloutGap = this.o.calloutGap || 2000;

      this.angY = 0.4;
      this.angX = this.o.tilt;
      this.velY = 0; this.velX = 0;
      this.dragging = false;
      this.interacted = false;
      this.hintA = 1;
      this.t = 0;

      this._bind();
      this._resize();
      this._loop = this._loop.bind(this);
      this.raf = requestAnimationFrame(this._loop);
    }

    _nearestVertex(dir) {
      const l = Math.hypot(dir[0], dir[1], dir[2]) || 1;
      const d = [dir[0] / l, dir[1] / l, dir[2] / l];
      let best = 0, bd = -Infinity;
      for (let i = 0; i < this.pts.length; i++) {
        const p = this.pts[i];
        const dot = p.x * d[0] + p.y * d[1] + p.z * d[2];
        if (dot > bd) { bd = dot; best = i; }
      }
      return best;
    }

    _bind() {
      const c = this.canvas;
      let px = 0, py = 0;
      const down = (e) => {
        this.dragging = true; this.interacted = true;
        px = e.clientX; py = e.clientY;
        c.setPointerCapture && c.setPointerCapture(e.pointerId);
        c.style.cursor = 'grabbing';
        e.preventDefault();
      };
      const move = (e) => {
        if (!this.dragging) return;
        const dx = e.clientX - px, dy = e.clientY - py;
        px = e.clientX; py = e.clientY;
        this.velY = dx * 0.0085;
        this.velX = -dy * 0.006;
        this.angY += this.velY;
        this.angX = clamp(this.angX + this.velX, -1.2, 1.2);
        e.preventDefault();
      };
      const up = (e) => {
        this.dragging = false;
        c.style.cursor = 'grab';
        try { c.releasePointerCapture(e.pointerId); } catch (_) {}
      };
      c.style.cursor = 'grab';
      c.style.touchAction = 'none';
      c.addEventListener('pointerdown', down);
      c.addEventListener('pointermove', move);
      c.addEventListener('pointerup', up);
      c.addEventListener('pointercancel', up);
      c.addEventListener('pointerleave', up);
      this._ro = new ResizeObserver(() => this._resize());
      this._ro.observe(this.host);
    }

    _resize() {
      const r = this.host.getBoundingClientRect();
      this.W = r.width; this.H = r.height;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(this.W * this.dpr);
      this.canvas.height = Math.round(this.H * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.R = this.o.radiusPx != null ? this.o.radiusPx
        : Math.min(this.W, this.H) * this.o.radiusFrac;
      this.CX = this.W * this.o.cx;
      this.CY = this.H * this.o.cy;
    }

    destroy() {
      cancelAnimationFrame(this.raf);
      this._ro && this._ro.disconnect();
    }

    _project() {
      const cY = Math.cos(this.angY), sY = Math.sin(this.angY);
      const cX = Math.cos(this.angX), sX = Math.sin(this.angX);
      const p = this.pts;
      for (let i = 0; i < p.length; i++) {
        const { x, y, z } = p[i];
        const x1 = x * cY + z * sY;
        const z1 = -x * sY + z * cY;
        const y1 = y * cX - z1 * sX;
        const z2 = y * sX + z1 * cX;
        this.tx[i] = x1; this.ty[i] = y1; this.tz[i] = z2;
      }
    }

    _screen(i) {
      const scale = this.o.fov / (this.o.fov - this.tz[i]);
      return {
        x: this.CX + this.tx[i] * this.R * scale,
        y: this.CY + this.ty[i] * this.R * scale,
        s: scale, d: this.tz[i],
      };
    }

    _drawEdge(a, b) {
      const ctx = this.ctx;
      const front = (this.tz[a] + this.tz[b]) * 0.5;
      const al = 0.05 + smooth((front + 1) / 2) * 0.55;
      const A = this._screen(a), B = this._screen(b);
      ctx.strokeStyle = this._alpha(this.o.line, al);
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
    }

    _drawNode(i, svcSet) {
      const ctx = this.ctx;
      const P = this._screen(i);
      const front = (P.d + 1) / 2;
      const svc = svcSet.get(i);
      let rad = 1.5 * P.s * lerp(0.5, 1.3, front);
      let alpha = lerp(0.16, 1, smooth(front));
      if (svc) { rad *= 1.55; alpha = Math.max(alpha, 0.45); }
      ctx.fillStyle = this._alpha(svc ? '#ffffff' : this.o.node, alpha);
      ctx.beginPath(); ctx.arc(P.x, P.y, rad, 0, TAU); ctx.fill();
    }

    _drawCore() {
      const ctx = this.ctx, R = this.R * this.o.core.radiusFrac;
      const cx = this.CX, cy = this.CY;
      const col = this.o.core.color || this.o.accent;
      // slow outer pulse — a crisp filled disc expanding out and fading, on a loop
      const period = 150;
      const ph = (this.t % period) / period;      // 0 → 1
      const ringR = R * (1 + ph * 0.8);
      const ringA = (1 - ph) * 0.32;
      if (ringA > 0.005) {
        const pg = ctx.createRadialGradient(cx, cy, ringR * 0.86, cx, cy, ringR);
        pg.addColorStop(0, this._alpha(col, ringA));
        pg.addColorStop(0.85, this._alpha(col, ringA));
        pg.addColorStop(1, this._alpha(col, 0));
        ctx.fillStyle = pg;
        ctx.beginPath(); ctx.arc(cx, cy, ringR, 0, TAU); ctx.fill();
      }
      // flat-shaded body — gentle light from upper-left, no ambient bloom
      const lx = cx - R * 0.3, ly = cy - R * 0.3;
      const g = ctx.createRadialGradient(lx, ly, R * 0.1, cx, cy, R * 1.05);
      g.addColorStop(0, this._shade(col, 1.18));
      g.addColorStop(0.55, col);
      g.addColorStop(1, this._shade(col, 0.82));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();
    }

    _loop() {
      this.t++;
      if (!this.dragging) {
        this.angY += this.o.spin + this.velY;
        this.angX += this.velX;
        this.velY *= 0.94; this.velX *= 0.9;
        this.angX = clamp(this.angX, -1.2, 1.2);
      }
      if (this.interacted) this.hintA = Math.max(0, this.hintA - 0.04);

      this._project();
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);
      ctx.lineWidth = 1;

      const svcSet = new Map(this.active.map((a) => [a.i, a]));
      const order = [...this.pts.keys()].sort((i, j) => this.tz[i] - this.tz[j]);

      if (this.o.core) {
        // back half → core → front half (occlusion illusion)
        for (const [a, b] of this.edges) if ((this.tz[a] + this.tz[b]) * 0.5 < 0) this._drawEdge(a, b);
        for (const i of order) if (this.tz[i] < 0) this._drawNode(i, svcSet);
        this._drawCore();
        for (const [a, b] of this.edges) if ((this.tz[a] + this.tz[b]) * 0.5 >= 0) this._drawEdge(a, b);
        for (const i of order) if (this.tz[i] >= 0) this._drawNode(i, svcSet);
      } else {
        for (const [a, b] of this.edges) this._drawEdge(a, b);
        for (const i of order) this._drawNode(i, svcSet);
      }

      // callouts — one at a time, with a fixed gap after each one ends
      const now = performance.now();
      const dt = this.lastT ? Math.min(now - this.lastT, 60) : 16;
      this.lastT = now;
      for (let idx = this.active.length - 1; idx >= 0; idx--) {
        const a = this.active[idx];
        if (a.state === 'opening') {
          a.sp += dt / this.openDur;
          if (a.sp >= 1) { a.sp = 1; a.state = 'hold'; a.holdT = now; }
        } else if (a.state === 'hold') {
          if (now - a.holdT > this.holdDur) { a.state = 'closing'; a.closing = true; }
        } else if (a.state === 'closing') {
          a.sp -= dt / this.closeDur;
          if (a.sp <= 0) { this.active.splice(idx, 1); this.lastEnd = now; continue; }
        }
        const P = this._screen(a.i);
        this._callout(P, a);
      }
      if (this.active.length === 0 && now - this.lastEnd >= this.o.calloutGap) {
        this._spawnCallout();
      }

      // if (this.hintA > 0.01) this._hint();
      this.raf = requestAnimationFrame(this._loop);
    }

    _hitsCopy(bx0, bx1, y) {
      const av = this.o.avoidRect;
      if (!av) return false;
      return bx1 > av.x0 && bx0 < av.x1 && y + 22 > av.y0 && y - 22 < av.y1;
    }

    _spawnCallout() {
      const R = this.R, CX = this.CX, EW = 220; // estimated box width for placement
      const left = [], right = [];
      for (let i = 0; i < this.pts.length; i++) {
        if (this.tz[i] < 0.5) continue;                       // front hemisphere only
        const P = this._screen(i);
        if (P.y < 96 || P.y > this.H - 70) continue;
        // right-opening: box goes right, must fit on canvas & clear the copy
        if (P.x > CX + R * 0.12) {
          const b0 = P.x + 64, b1 = b0 + EW;
          if (b1 < this.W - 12 && !this._hitsCopy(b0, b1, P.y)) right.push([this.tz[i], i]);
        }
        // left-opening: box goes left (over the sphere face), must clear the copy
        if (P.x < CX + R * 0.10) {
          const b1 = P.x - 64, b0 = b1 - EW;
          if (b0 > 12 && !this._hitsCopy(b0, b1, P.y)) left.push([this.tz[i], i]);
        }
      }
      // alternate: prefer the side opposite the previous callout
      let pool = this.lastSide === 'L' ? right : this.lastSide === 'R' ? left
        : (Math.random() < 0.5 ? left : right);
      let side = pool === left ? 'L' : 'R';
      if (!pool.length) { pool = side === 'L' ? right : left; side = side === 'L' ? 'R' : 'L'; }
      if (!pool.length) return false;
      pool.sort((a, b) => b[0] - a[0]);
      const pick = pool[Math.floor(Math.random() * Math.min(6, pool.length))][1];
      this.lastSide = side;
      const label = this.labels[Math.floor(Math.random() * this.labels.length)];
      this.labelIdx++;
      this.active.push({ i: pick, label: label.label, side, sp: 0, state: 'opening', closing: false });
      return true;
    }

    _callout(P, a) {
      const ctx = this.ctx;
      const p = a.sp, closing = a.closing;
      const pad = 12, bh = 34, run = 64, by = P.y;
      const ac = this.o.accent;
      const lineP = smooth(clamp(p / 0.5, 0, 1));
      const boxP = smooth(clamp((p - 0.4) / 0.35, 0, 1));
      const txtP = smooth(clamp((p - 0.72) / 0.28, 0, 1));

      ctx.font = '500 13px "Hanken Grotesk", sans-serif';
      const FW = Math.round(ctx.measureText(a.label).width + 32);

      // side stored at spawn: box opens away from the copy column. Straight run.
      const side = a.side === 'L' ? -1 : 1;
      let boxLeft = side === 1 ? P.x + run : P.x - run - FW;
      boxLeft = clamp(boxLeft, pad, this.W - FW - pad);
      const nearX = side === 1 ? boxLeft : boxLeft + FW; // edge closest to node
      const curBw = FW * boxP;
      // OPEN: near edge fixed, unfurls outward. CLOSE: far edge fixed, near
      // edge slides outward — collapses AWAY from the node.
      let bxL;
      if (side === 1) bxL = closing ? boxLeft + (FW - curBw) : boxLeft;
      else bxL = closing ? boxLeft : boxLeft + (FW - curBw);

      // connector: straight horizontal line from node to the box's near edge
      let sx, endX;
      if (closing) {
        const rp = smooth(clamp(p / 0.6, 0, 1));  // 1 → 0 as it closes
        sx = lerp(nearX, P.x, rp);                // retracts off the node, outward
        endX = nearX;
      } else {
        sx = P.x;
        endX = lerp(P.x, nearX, lineP);
      }
      ctx.strokeStyle = this._alpha(ac, 0.85 * p);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(sx, by); ctx.lineTo(endX, by); ctx.stroke();
      // tick on the node
      ctx.fillStyle = this._alpha(ac, p);
      ctx.beginPath(); ctx.arc(P.x, P.y, 2.4, 0, TAU); ctx.fill();

      if (boxP <= 0.01) return;
      const byT = by - bh / 2;
      ctx.save();
      ctx.beginPath(); ctx.rect(bxL, byT, curBw, bh);
      ctx.fillStyle = 'rgba(20,20,19,0.92)'; ctx.fill();
      ctx.strokeStyle = this._alpha(ac, 0.9 * boxP); ctx.lineWidth = 1; ctx.stroke();
      ctx.clip();
      if (txtP > 0.01) {
        ctx.fillStyle = this._alpha('#faf9f5', txtP);
        ctx.font = '500 13px "Hanken Grotesk", sans-serif';
        ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
        ctx.fillText(a.label, boxLeft + 15, by);
      }
      ctx.restore();
    }

    _hint() {
      const ctx = this.ctx;
      ctx.save();
      ctx.globalAlpha = this.hintA * 0.8;
      ctx.fillStyle = '#a09d96';
      ctx.font = '400 11px "Space Mono", monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('drag to rotate', this.CX, this.CY + this.R + 34);
      ctx.restore();
    }

    // multiply a hex colour toward white (>1) or black (<1)
    _shade(col, f) {
      const c = this._rgb(col);
      const ch = (v) => f >= 1 ? Math.round(lerp(v, 255, f - 1)) : Math.round(v * f);
      return `rgb(${clamp(ch(c[0]),0,255)},${clamp(ch(c[1]),0,255)},${clamp(ch(c[2]),0,255)})`;
    }

    _rgb(col) {
      if (col[0] === '#') {
        let h = col.slice(1);
        if (h.length === 3) h = h.split('').map((c) => c + c).join('');
        const n = parseInt(h, 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      const p = col.slice(col.indexOf('(') + 1, -1).split(',');
      return [+p[0], +p[1], +p[2]];
    }

    _alpha(col, a) {
      a = clamp(a, 0, 1);
      const c = this._rgb(col);
      return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
    }
  }

  window.NodeSphere = NodeSphere;
})();
