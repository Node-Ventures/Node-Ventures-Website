// HeroDots — a full-bleed canvas of subtle dots that brighten under the cursor
// and fade back out, leaving a trail. Fills its positioned parent. Tuned for
// dark surfaces (cream dots on dark). Respects prefers-reduced-motion (static
// dots, no interaction). Reusable across hero sections.
//
// Props:
//   gap        — grid spacing in px (default 26)
//   base       — resting dot opacity 0–1 (default 0.10)
//   peak       — opacity directly under the cursor (default 0.7)
//   radius     — cursor influence radius in px (default 150)
//   color      — dot color (default cream "250,249,245")
function HeroDots({
  gap = 26,
  base = 0.16,
  peak = 0.7,
  radius = 92,
  color = "250,249,245"
}) {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cols = 0,
      rows = 0,
      energy = null;
    let W = 0,
      H = 0;
    const mouse = {
      x: -9999,
      y: -9999
    };
    let raf = 0;
    function build() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / gap) + 1;
      rows = Math.ceil(H / gap) + 1;
      energy = new Float32Array(cols * rows);
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const r2 = radius * radius;
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const i = gy * cols + gx;
          const x = gx * gap;
          const y = gy * gap;
          if (!reduced) {
            const dx = x - mouse.x,
              dy = y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < r2) {
              const infl = 1 - Math.sqrt(d2) / radius;
              if (infl > energy[i]) energy[i] = infl;
            }
            energy[i] *= 0.90; // trail decay
          }
          const a = base + (peak - base) * (reduced ? 0 : energy[i]);
          ctx.fillStyle = "rgba(" + color + "," + a.toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    }
    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    build();
    draw();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    if (!reduced) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [gap, base, peak, radius, color]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      pointerEvents: "none"
    }
  });
}
window.HeroDots = HeroDots;
