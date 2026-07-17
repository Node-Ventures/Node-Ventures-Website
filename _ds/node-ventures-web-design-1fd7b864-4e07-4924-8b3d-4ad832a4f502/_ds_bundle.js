/* @ds-bundle: {"format":4,"namespace":"NodeVenturesDesignSystem_1fd7b8","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Divider","sourcePath":"components/data-display/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/data-display/Eyebrow.jsx"},{"name":"NodeGrid","sourcePath":"components/data-display/NodeGrid.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"CalloutCard","sourcePath":"components/feedback/CalloutCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"67c22059c063","components/actions/IconButton.jsx":"5ce031b4fb71","components/data-display/Avatar.jsx":"a29efa6e74e9","components/data-display/Badge.jsx":"870aad9974d7","components/data-display/Card.jsx":"5d391cae6916","components/data-display/Divider.jsx":"f67e45e60e53","components/data-display/Eyebrow.jsx":"6a42a965edf8","components/data-display/NodeGrid.jsx":"b8d0f1019e40","components/data-display/Tag.jsx":"299e98ecd366","components/feedback/CalloutCard.jsx":"9d8aa456acab","components/forms/Input.jsx":"f7d945a232b6","components/forms/Textarea.jsx":"b319c915bef6","components/navigation/NavBar.jsx":"1eed6e572e38","components/navigation/Tabs.jsx":"3a27962ee8b3","ui_kits/marketing/App.jsx":"c79ccd248f48","ui_kits/marketing/Closing.jsx":"dac53b6a781c","ui_kits/marketing/FocusAreas.jsx":"5113b1050a91","ui_kits/marketing/Hero.jsx":"782323dc8d3c","ui_kits/marketing/HowWeBuild.jsx":"e0008da7a292","ui_kits/marketing/Narrative.jsx":"51e7fefac125","ui_kits/marketing/NodeField.js":"bffbab1956d1","ui_kits/marketing/QuoteBlock.jsx":"53095e08434c","ui_kits/marketing/SiteFooter.jsx":"744307a4a80a","ui_kits/marketing/SiteNav.jsx":"5664e2c4ce56","ui_kits/marketing/Transform.jsx":"edd186e94b24","ui_kits/marketing/TrustedBy.jsx":"8fa0446b1a76"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NodeVenturesDesignSystem_1fd7b8 = window.NodeVenturesDesignSystem_1fd7b8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the system's primary action. Purple fill is the signature CTA;
 * use it scarcely. Secondary is a dashed-outline cream button.
 * States: default · hover · active(press) · disabled.
 *   primary   → hover & press darken to --color-primary-active
 *   secondary → hover fills solid purple, text flips white (press = darker purple)
 *   text      → hover turns the label purple
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hot = (hovered || pressed) && !disabled;
  const sizes = {
    sm: {
      height: 32,
      padding: "0 14px",
      font: 13
    },
    md: {
      height: 40,
      padding: "0 20px",
      font: 14
    },
    lg: {
      height: 48,
      padding: "0 24px",
      font: 15
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: 0,
    border: "1px solid transparent",
    borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color .12s ease, border-color .12s ease",
    userSelect: "none",
    whiteSpace: "nowrap"
  };

  // Secondary's dashed frame, drawn with repeating gradients (native `dashed`
  // can't control dash length). Suppressed once the button fills solid on hover.
  const dashFrame = {
    backgroundImage: ["repeating-linear-gradient(90deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(90deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(0deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(0deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))"].join(","),
    backgroundSize: "100% 1px, 100% 1px, 1px 100%, 1px 100%",
    backgroundPosition: "top, bottom, left, right",
    backgroundRepeat: "no-repeat"
  };
  const variants = {
    primary: {
      // hover AND press darken to the active purple
      background: disabled ? "var(--color-primary-disabled)" : hot ? "var(--color-primary-active)" : "var(--color-primary)",
      color: disabled ? "var(--color-muted-soft)" : "var(--color-on-primary)"
    },
    secondary: hot ? {
      // hover/press: fill solid purple, label flips white, dashes drop away
      backgroundColor: pressed ? "var(--color-primary-active)" : "var(--color-primary)",
      color: "var(--color-on-primary)"
    } : {
      backgroundColor: "var(--color-canvas)",
      color: "var(--color-ink)",
      ...dashFrame
    },
    "secondary-on-dark": {
      background: hot ? "var(--color-surface-dark-soft)" : "var(--color-surface-dark-elevated)",
      color: "var(--color-on-dark)"
    },
    "on-coral": {
      background: hot ? "var(--color-surface-card)" : "var(--color-canvas)",
      color: "var(--color-ink)"
    },
    text: {
      background: "transparent",
      // hover/press turn the label purple
      color: hot ? "var(--color-primary)" : "var(--color-ink)",
      padding: 0,
      height: "auto"
    }
  };
  const press = disabled ? {} : {
    onPointerEnter: () => setHovered(true),
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => {
      setPressed(false);
      setHovered(false);
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      opacity: disabled && variant !== "primary" ? 0.5 : 1,
      ...style
    }
  }, press, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * IconButton — an icon-only control (carousel arrows, share, more).
 * 36px by default. Pass an SVG/icon node as children.
 *
 * variant:
 *   default  → round, hairline border on cream; hover fills purple, icon flips white
 *   on-dark  → round, on dark surfaces; hover lightens
 *   square   → the dashed square arrow button; hover fills solid purple, icon white
 */
function IconButton({
  size = 36,
  variant = "default",
  disabled = false,
  ariaLabel,
  children,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hot = (hovered || pressed) && !disabled;

  // Dashed square frame (repeating gradients so dash length is controllable).
  const dashFrame = {
    backgroundImage: ["repeating-linear-gradient(90deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(90deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(0deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(0deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))"].join(","),
    backgroundSize: "100% 1px, 100% 1px, 1px 100%, 1px 100%",
    backgroundPosition: "top, bottom, left, right",
    backgroundRepeat: "no-repeat"
  };
  const variants = {
    default: {
      borderRadius: "var(--radius-full)",
      background: hot ? "var(--color-primary)" : "var(--color-canvas)",
      color: hot ? "var(--color-on-primary)" : "var(--color-ink)",
      border: hot ? "1px solid var(--color-primary)" : "1px solid var(--color-hairline)"
    },
    "on-dark": {
      borderRadius: "var(--radius-full)",
      background: hot ? "var(--color-surface-dark-soft)" : "var(--color-surface-dark-elevated)",
      color: "var(--color-on-dark)",
      border: "1px solid transparent"
    },
    square: hot ? {
      borderRadius: 0,
      backgroundColor: pressed ? "var(--color-primary-active)" : "var(--color-primary)",
      color: "var(--color-on-primary)"
    } : {
      borderRadius: 0,
      backgroundColor: "var(--color-canvas)",
      color: "var(--color-ink)",
      ...dashFrame
    }
  };
  const press = disabled ? {} : {
    onPointerEnter: () => setHovered(true),
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => {
      setPressed(false);
      setHovered(false);
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background-color .12s ease, border-color .12s ease, color .12s ease",
      ...variants[variant],
      ...style
    }
  }, press, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — a circular image or initials fallback. 40px default (testimonials). */
function Avatar({
  src,
  name = "",
  size = 40,
  style,
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      flex: "none",
      background: "var(--color-surface-cream-strong)",
      color: "var(--color-ink)",
      fontFamily: "var(--font-body)",
      fontSize: Math.round(size * 0.36),
      fontWeight: 500,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. `accent` (purple) for NEW/BETA (uppercase, tracked),
 * neutral cream for categories, plus a success companion.
 */
function Badge({
  variant = "neutral",
  uppercase,
  children,
  style,
  ...rest
}) {
  const palette = {
    neutral: {
      bg: "var(--color-surface-card)",
      fg: "var(--color-ink)"
    },
    accent: {
      bg: "var(--color-primary)",
      fg: "var(--color-on-primary)"
    },
    coral: {
      bg: "var(--color-primary)",
      fg: "var(--color-on-primary)"
    },
    /* legacy alias → main accent */
    success: {
      bg: "rgba(93,184,114,0.16)",
      fg: "#2f7d44"
    },
    "on-dark": {
      bg: "var(--color-surface-dark-elevated)",
      fg: "var(--color-on-dark)"
    }
  };
  const isUpper = uppercase ?? (variant === "accent" || variant === "coral");
  const p = palette[variant] || palette.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      background: p.bg,
      color: p.fg,
      fontFamily: isUpper ? "var(--font-mono)" : "var(--font-body)",
      fontSize: isUpper ? 12 : 13,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: isUpper ? "1.5px" : 0,
      textTransform: isUpper ? "uppercase" : "none",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the system's surface container. `cream` (filled, no border),
 * `bordered` (canvas + SOLID hairline — the default box border), `dashed`
 * (canvas + dashed hairline, the secondary treatment), or `dark` (navy
 * product surface). Depth is color, not shadow. For a ROW of bordered boxes,
 * prefer NodeGrid — the brand's primary multi-cell border motif.
 */
function Card({
  variant = "cream",
  padding = "xl",
  interactive = false,
  children,
  style,
  ...rest
}) {
  const pads = {
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
    xxl: "var(--space-xxl)"
  };
  // solid 1px frame — the primary border treatment
  const solidBorder = {
    backgroundColor: "var(--color-canvas)",
    border: "1px solid var(--color-grid-line)"
  };
  // 4-sided dashed border drawn with repeating gradients — secondary treatment
  const dashImg = "repeating-linear-gradient(90deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))";
  const dashImgV = "repeating-linear-gradient(0deg, var(--color-ink) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))";
  const dashedBorder = {
    backgroundColor: "var(--color-canvas)",
    backgroundImage: [dashImg, dashImg, dashImgV, dashImgV].join(","),
    backgroundSize: "100% 1px, 100% 1px, 1px 100%, 1px 100%",
    backgroundPosition: "top, bottom, left, right",
    backgroundRepeat: "no-repeat"
  };
  const variants = {
    cream: {
      background: "var(--color-surface-card)",
      color: "var(--color-ink)"
    },
    bordered: {
      color: "var(--color-ink)",
      ...solidBorder
    },
    dashed: {
      color: "var(--color-ink)",
      ...dashedBorder
    },
    dark: {
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pads[padding] || pads.xl,
      fontFamily: "var(--font-body)",
      ...variants[variant],
      ...(interactive ? {
        cursor: "pointer",
        transition: "box-shadow .15s ease"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a hairline rule. Dashed by default: lines and dashed lines are a
 * core graphic element of the brand. Dashed strokes are drawn with a repeating
 * gradient (dash/gap from --line-dash / --line-step) so the dash length is
 * controllable. Horizontal or vertical, four tones.
 */
function Divider({
  orientation = "horizontal",
  dashed = true,
  tone = "default",
  thickness = 1,
  style,
  ...rest
}) {
  const tones = {
    default: "var(--color-ink)",
    soft: "var(--color-hairline)",
    strong: "var(--color-muted-soft)",
    "on-dark": "rgba(250,249,245,0.16)"
  };
  const c = tones[tone] || tone;
  const vertical = orientation === "vertical";
  if (dashed) {
    const angle = vertical ? "0deg" : "90deg";
    const img = `repeating-linear-gradient(${angle}, ${c} 0 var(--line-dash), transparent var(--line-dash) var(--line-step))`;
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      "aria-orientation": vertical ? "vertical" : undefined,
      style: vertical ? {
        alignSelf: "stretch",
        width: thickness,
        backgroundImage: img,
        ...style
      } : {
        width: "100%",
        height: thickness,
        backgroundImage: img,
        ...style
      }
    }, rest));
  }
  const line = `${thickness}px solid ${c}`;
  if (vertical) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      "aria-orientation": "vertical",
      style: {
        alignSelf: "stretch",
        width: 0,
        borderLeft: line,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: line,
      height: 0,
      margin: 0,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the flat mono label the brand uses above section headings
 * ("[02] Focus areas") and as small corner tags on cards. NOT a pill — this is
 * the uppercase tracked mono label the site hand-builds as `.nv-tag` /
 * `.nv-corner-tag`. Reach for Badge/Tag when you need a filled/outlined pill;
 * reach for Eyebrow for a bare typographic label.
 *
 * `index` renders a bracketed counter ("[02]"); on dark surfaces the bracket
 * takes the light-purple accent. `size="corner"` is the smaller card-corner tag.
 */
function Eyebrow({
  index,
  tone = "muted",
  size = "section",
  as = "div",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const isCorner = size === "corner";
  const toneColor = {
    muted: isCorner ? "var(--color-muted-soft)" : "var(--color-muted)",
    accent: "var(--color-primary)",
    light: "var(--color-primary-light)",
    // eyebrows on dark surfaces
    "on-dark": "var(--color-on-dark-soft)"
  }[tone] || "var(--color-muted)";

  // On dark surfaces the counter bracket lifts to light-purple for contrast.
  const bracketColor = tone === "on-dark" ? "var(--color-primary-light)" : "inherit";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.5em",
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: isCorner ? 11 : 12,
      fontWeight: 500,
      letterSpacing: isCorner ? "0.04em" : "0.06em",
      textTransform: "uppercase",
      color: toneColor,
      lineHeight: 1.2,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: bracketColor,
      fontWeight: 700
    }
  }, "[", String(index).padStart(2, "0"), "]"), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/NodeGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NodeGrid — the brand's structural motif: a set of cells framed by thin SOLID
 * rules with small inverted-triangle "nodes" sitting at every rule intersection
 * (apex pointing inward on the top edge, upward on the bottom). This is the
 * primary way boxes are bordered in the brand — reach for it over a plain border
 * whenever you're laying out a row of feature / CTA / content cells.
 *
 * Pass each cell as a child; `columns` sets how many sit per row.
 */
function NodeGrid({
  columns = 2,
  tone = "light",
  cellMinHeight = 320,
  padding = "var(--space-xl)",
  children,
  style,
  ...rest
}) {
  const LINE = tone === "dark" ? "var(--color-grid-line-dark)" : "var(--color-grid-line)";
  const NW = 5,
    NH = 7; // half-width + height of each triangle node

  // vertical-rule x positions (as %): left edge, inner dividers, right edge
  const xs = [];
  for (let i = 0; i <= columns; i++) xs.push(i / columns * 100);
  const TopNode = ({
    left
  }) => /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left: `${left}%`,
      top: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 2,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 0 L ${NW} ${NH} L ${NW * 2} 0 Z`,
    fill: LINE
  }));
  const BottomNode = ({
    left
  }) => /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left: `${left}%`,
      bottom: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 2,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`,
    fill: LINE
  }));
  const rule = {
    position: "absolute",
    background: LINE,
    pointerEvents: "none"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...rule,
      top: 0,
      left: 0,
      right: 0,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...rule,
      bottom: 0,
      left: 0,
      right: 0,
      height: 1
    }
  }), xs.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: "v" + i,
    "aria-hidden": "true",
    style: {
      ...rule,
      top: NH,
      bottom: NH,
      left: `${x}%`,
      width: 1,
      transform: i === 0 ? "none" : i === xs.length - 1 ? "translateX(-1px)" : "translateX(-0.5px)"
    }
  })), xs.map((x, i) => /*#__PURE__*/React.createElement(TopNode, {
    key: "t" + i,
    left: x
  })), xs.map((x, i) => /*#__PURE__*/React.createElement(BottomNode, {
    key: "b" + i,
    left: x
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 0
    }
  }, React.Children.map(children, (c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      zIndex: 1,
      minHeight: cellMinHeight,
      padding,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, c))));
}
Object.assign(__ds_scope, { NodeGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/NodeGrid.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — category pill with an optional leading status dot. Lighter than Badge;
 * used for filters, categories, and "active connection" indicators.
 */
function Tag({
  dot = null,
  children,
  style,
  ...rest
}) {
  const dotColor = {
    success: "var(--color-success)",
    coral: "var(--color-primary)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "4px 12px",
      background: "var(--color-canvas)",
      color: "var(--color-body)",
      border: "1px solid var(--color-hairline)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.4,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "var(--radius-full)",
      background: dotColor[dot] || dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CalloutCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CalloutCard — a large CTA box in the brand's arrow-box treatment: mono eyebrow
 * top-left, a big display heading, body copy anchored bottom-left, and a square
 * arrow button bottom-right that fills purple on hover. `dark` (navy) is the
 * default surface; `purple` paints the whole box in the accent.
 *
 * Pair two of these inside a NodeGrid for the pre-footer closing section.
 */
function CalloutCard({
  eyebrow,
  heading,
  body,
  href = "#",
  onClick,
  variant = "dark",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const isPurple = variant === "purple";
  const surface = isPurple ? "var(--color-primary)" : "var(--color-surface-dark)";
  const eyebrowColor = isPurple ? "rgba(255,255,255,0.85)" : "var(--color-primary-light)";
  const bodyColor = isPurple ? "rgba(255,255,255,0.86)" : "var(--color-on-dark-soft)";
  const arrowBorderRest = isPurple ? "1px dashed rgba(255,255,255,0.5)" : "1px dashed rgba(250,249,245,0.32)";
  const arrowFill = isPurple ? "var(--color-on-primary)" : "var(--color-primary)";
  const arrowFg = isPurple ? "var(--color-primary)" : "var(--color-on-dark)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      minHeight: 460,
      padding: "44px 48px",
      background: surface,
      color: "var(--color-on-dark)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: eyebrowColor
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(30px,3.4vw,44px)",
      lineHeight: 1.06,
      letterSpacing: "-1px",
      margin: "20px 0 0",
      maxWidth: 460,
      color: "var(--color-on-dark)"
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 40,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: bodyColor,
      margin: 0,
      maxWidth: 400
    }
  }, body), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: 56,
      height: 56,
      display: "grid",
      placeItems: "center",
      marginLeft: "auto",
      border: hover ? `1px solid ${arrowFill}` : arrowBorderRest,
      background: hover ? arrowFill : "transparent",
      transition: "background 0.3s, border-color 0.3s"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: hover ? arrowFg : "var(--color-on-dark)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transition: "stroke 0.3s"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M9 7h8v8"
  })))));
}
Object.assign(__ds_scope, { CalloutCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CalloutCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — standard text field. 40px, hairline border, purple focus ring.
 */
function Input({
  label,
  hint,
  error,
  disabled = false,
  iconLeft = null,
  style,
  id,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--color-error)" : focused ? "var(--color-primary)" : "var(--color-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 14px",
      background: disabled ? "var(--color-surface-card)" : "var(--color-canvas)",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-md)",
      boxShadow: focused && !error ? "var(--ring-focus)" : "none",
      transition: "border-color .12s ease, box-shadow .12s ease"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--color-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--color-ink)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-error)" : "var(--color-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Textarea — multi-line input sharing Input's hairline + purple focus ring. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled = false,
  style,
  id,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const inputId = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--color-error)" : focused ? "var(--color-primary)" : "var(--color-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      resize: "vertical",
      padding: "10px 14px",
      background: disabled ? "var(--color-surface-card)" : "var(--color-canvas)",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-md)",
      boxShadow: focused && !error ? "var(--ring-focus)" : "none",
      outline: "none",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--color-ink)",
      transition: "border-color .12s ease, box-shadow .12s ease"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-error)" : "var(--color-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The Node Ventures node-star mark (the real logo glyph), recolorable via `color`. */
function Mark({
  size = 26,
  color = "var(--color-primary)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64.8 64.8",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32.4,25.4c-1.9,0-3.6.7-5,2.1-2.7,2.7-2.7,7.2,0,9.9,1.3,1.3,3.1,2.1,5,2.1s3.6-.7,5-2.1c1.3-1.3,2.1-3.1,2.1-5s-.7-3.6-2.1-5c-1.3-1.3-3.1-2.1-5-2.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M46.9,1.1c-.7-.7-1.6-1.1-2.6-1.1h-23.8c-1,0-1.9.4-2.6,1.1L1.1,17.9c-.7.7-1.1,1.6-1.1,2.6v23.8c0,1,.4,1.9,1.1,2.6l16.9,16.9c.7.7,1.6,1.1,2.6,1.1h23.8c1,0,1.9-.4,2.6-1.1l16.9-16.9c.7-.7,1.1-1.6,1.1-2.6v-23.8c0-1-.4-1.9-1.1-2.6L46.9,1.1ZM46.6,33.2l13.7,9.1c.4.3.7.8.7,1.3s-.2.8-.5,1.1c-.4.4-.9.5-1.4.4l-16.1-3.2c-.3,0-.6,0-.9.3-.2.2-.3.6-.3.9l3.2,16.1c.1.5,0,1-.4,1.4-.3.3-.7.5-1.1.5s-1-.3-1.3-.7l-9.1-13.7c-.4-.5-1.2-.5-1.6,0l-9.1,13.7c-.5.8-1.7.9-2.4.2-.4-.4-.5-.9-.4-1.4l3.2-16.1c0-.3,0-.6-.3-.9-.2-.2-.6-.3-.9-.3l-16.1,3.2c-.5.1-1,0-1.4-.4-.3-.3-.5-.7-.5-1.1s.3-1,.7-1.3l13.7-9.1c.3-.2.4-.5.4-.8,0-.3-.2-.6-.4-.8l-13.7-9.1c-.4-.3-.7-.8-.7-1.3s.2-.8.5-1.1c.4-.4.9-.5,1.4-.4l16.1,3.2c.3,0,.6,0,.9-.3.2-.2.3-.6.3-.9l-3.2-16.1c-.1-.5,0-1,.4-1.4.7-.7,1.9-.5,2.4.2l9.1,13.7c.2.3.5.4.8.4h0c.3,0,.6-.2.8-.4l9.1-13.7c.5-.8,1.7-.9,2.4-.2.4.4.5.9.4,1.4l-3.2,16.1c0,.3,0,.6.3.9s.6.3.9.3l16.1-3.2c.5-.1,1,0,1.4.4.3.3.5.7.5,1.1s-.3,1-.7,1.3l-13.7,9.1c-.3.2-.4.5-.4.8s.2.6.4.8Z",
    fill: color
  }));
}
const Caret = ({
  up
}) => /*#__PURE__*/React.createElement("svg", {
  width: "9",
  height: "9",
  viewBox: "0 0 10 10",
  "aria-hidden": "true",
  style: {
    transform: up ? "rotate(180deg)" : "none",
    transition: "transform 0.18s ease",
    opacity: 0.7
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M1.5 3.5 L5 7 L8.5 3.5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * NavBar — the dark top navigation pinned to every page. Node-star mark + wordmark
 * left, uppercase mono links centered (with dashed dropdown panels where an item has
 * a `menu`), a text link + purple CTA right. Dashed hairline rule along the bottom.
 */
function NavBar({
  items = [{
    label: "How it works"
  }, {
    label: "Domains",
    menu: ["AECO Innovation Lab", "Defence Innovation Lab"]
  }, {
    label: "Ventures",
    menu: ["LandLogic", "Blue Canoe", "Parcella", "Energy Coach"]
  }, {
    label: "AI transformation"
  }],
  wordmark = "Node Ventures",
  cta = "Contribute",
  onCta,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  const linkStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--color-on-dark)",
    opacity: 0.78,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    whiteSpace: "nowrap",
    transition: "opacity 0.18s ease"
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      display: "flex",
      alignItems: "center",
      gap: 24,
      height: 64,
      padding: "0 32px",
      backgroundColor: "var(--color-surface-dark)",
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      flex: "none"
    },
    "aria-label": `${wordmark} home`
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: "-0.2px",
      color: "var(--color-on-dark)"
    }
  }, wordmark)), /*#__PURE__*/React.createElement("ul", {
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 22,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label,
    style: {
      position: "relative"
    },
    onMouseEnter: it.menu ? () => setOpen(it.label) : undefined,
    onMouseLeave: it.menu ? () => setOpen(null) : undefined
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle,
    onClick: it.menu ? e => {
      e.preventDefault();
      setOpen(open === it.label ? null : it.label);
    } : undefined,
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.78;
    }
  }, it.label, it.menu ? /*#__PURE__*/React.createElement(Caret, {
    up: open === it.label
  }) : null), it.menu && open === it.label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 14px)",
      left: -16,
      minWidth: 220,
      backgroundColor: "var(--color-surface-dark)",
      border: "1px dashed rgba(255,255,255,0.28)",
      padding: 8,
      zIndex: 40,
      boxShadow: "0 8px 24px rgba(0,0,0,0.35)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -14,
      left: 0,
      right: 0,
      height: 14
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, it.menu.map(sub => /*#__PURE__*/React.createElement("li", {
    key: sub
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-on-dark-soft)",
      textDecoration: "none",
      padding: "9px 12px",
      letterSpacing: "-0.1px"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--color-on-dark)";
      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "var(--color-on-dark-soft)";
      e.currentTarget.style.backgroundColor = "transparent";
    }
  }, sub))))) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle,
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.78;
    }
  }, "Contact"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Tabs — segmented category filter (solutions / connectors sub-nav).
 * Inactive: transparent + muted text. Active: cream fill + ink text.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const active = value ?? internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      gap: 4,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => select(it.value),
      style: {
        padding: "8px 14px",
        border: "none",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.4,
        background: on ? "var(--color-surface-card)" : "transparent",
        color: on ? "var(--color-ink)" : "var(--color-muted)",
        transition: "background-color .12s ease, color .12s ease"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/App.jsx
try { (() => {
// App — assembles the Node Ventures homepage.
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      minHeight: "100vh",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(window.SiteNav, null), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.TrustedBy, null), /*#__PURE__*/React.createElement(window.Narrative, null), window.FocusAreas ? /*#__PURE__*/React.createElement(window.FocusAreas, null) : null, window.QuoteBlock ? /*#__PURE__*/React.createElement(window.QuoteBlock, null) : null, window.Transform ? /*#__PURE__*/React.createElement(window.Transform, null) : null, window.HowWeBuild ? /*#__PURE__*/React.createElement(window.HowWeBuild, null) : null, window.Closing ? /*#__PURE__*/React.createElement(window.Closing, null) : null, window.SiteFooter ? /*#__PURE__*/React.createElement(window.SiteFooter, null) : null);
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Closing.jsx
try { (() => {
// Closing — big serif CTA "Building what Canada needs next" + two paths.
function Closing() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const paths = [{
    t: "Interested in developing solutions?",
    b: "We provide capital, domain expertise, and hands-on support from day one to help you validate, build, and scale faster.",
    cta: "Become a contributor"
  }, {
    t: "Interested in implementing AI workflows?",
    b: "Partner on de-risked ventures, consultant capacity, and multi-use technology with a clear line of sight to adoption.",
    cta: "Let's talk"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 40,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(40px,6vw,84px)",
      lineHeight: 1.02,
      letterSpacing: "-2px",
      margin: "0 0 56px",
      maxWidth: 760
    }
  }, "Building what Canada needs next"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderTop: "1px solid var(--color-hairline)"
    }
  }, paths.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      padding: "40px 0",
      paddingLeft: i === 1 ? 40 : 0,
      paddingRight: 40,
      borderLeft: i === 1 ? "1px solid var(--color-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 18,
      margin: 0
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "12px 0 24px",
      maxWidth: 400
    }
  }, p.b), /*#__PURE__*/React.createElement(Button, {
    variant: i === 0 ? "primary" : "secondary",
    size: "md"
  }, p.cta))))));
}
window.Closing = Closing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FocusAreas.jsx
try { (() => {
// FocusAreas — "Where we're building today." Two bordered boxes.
function FocusAreas() {
  const areas = [{
    t: "Built environment",
    b: "Building solutions to critical Canadian challenges in housing, permitting, and planning through digital infrastructure like AI and digital twins."
  }, {
    t: "National defense",
    b: "Building sovereign stacks, multi-use software, and cyber resilience for operations that cannot depend on foreign choke points."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag"
  }, "[02] Focus areas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(30px,3.6vw,44px)",
      lineHeight: 1.1,
      letterSpacing: "-0.9px",
      margin: "16px 0 0"
    }
  }, "Where we're building today."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "16px auto 0",
      maxWidth: 560
    }
  }, "Node builds multi-modal ventures that have applications across sectors. We are currently focused on solving challenges in two main domains: the built environment and national defense.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      border: "1px solid var(--color-hairline)"
    }
  }, areas.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.t,
    style: {
      padding: 40,
      minHeight: 280,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      borderLeft: i === 1 ? "1px solid var(--color-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--color-muted-soft)",
      marginBottom: "auto"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: "-0.4px",
      margin: "24px 0 0"
    }
  }, a.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "12px 0 0",
      maxWidth: 380
    }
  }, a.b))))));
}
window.FocusAreas = FocusAreas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FocusAreas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Hero — serif headline + sub + CTAs (left), swirling node cluster (right).
function Hero() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    if (!canvasRef.current) return;
    const field = new window.NodeField(canvasRef.current, {
      mode: "orbit",
      count: 32
    });
    return () => field.destroy();
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "nv-grid-band",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 48,
      alignItems: "center",
      paddingTop: 80,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag",
    style: {
      display: "none"
    }
  }, "[01] Sovereign AI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(34px, 4vw, 52px)",
      lineHeight: 1.06,
      letterSpacing: "-1.2px",
      color: "var(--color-ink)",
      margin: "0",
      maxWidth: 620
    }
  }, "Connecting expertise", /*#__PURE__*/React.createElement("br", null), "to deliver multi-modal", /*#__PURE__*/React.createElement("br", null), "AI capabilities."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "var(--space-md) 0 0",
      maxWidth: 440
    }
  }, "We bring together Canada's leading experts, organizations, and technology to build and deploy AI ventures and agentic systems with real-world impact."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Become a contributor"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Let's talk"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 420,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      touchAction: "none"
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HowWeBuild.jsx
try { (() => {
// HowWeBuild — 5-step list (left) with a node graphic that changes per active
// step (right): 1 node → line to 2 → pulse → tracking graphs → checkmarks.
function HowWeBuild() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const steps = [{
    t: "Create a profile",
    b: "Join the platform and define your expertise and how you want to contribute."
  }, {
    t: "Join opportunities",
    b: "Match to existing ventures or transformation projects, or propose your own."
  }, {
    t: "Contribute",
    b: "Apply your expertise where it creates the most value: product, research, strategy, business development, or capital."
  }, {
    t: "Track your impact",
    b: "Follow venture progress, assignments, milestones, and updates — all in one dashboard."
  }, {
    t: "Share in success",
    b: "As your ventures succeed, you share in the value you helped create."
  }];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 0,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 40,
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag"
  }, "[04] How we build"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(30px,3.6vw,44px)",
      letterSpacing: "-0.9px",
      margin: "16px 0 0"
    }
  }, "Built by a network, not a payroll.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: 0,
      maxWidth: 360
    }
  }, "Experts join the platform and contribute to the projects that match their passion, expertise and long-term goals.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      border: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", null, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    onMouseEnter: () => setActive(i),
    style: {
      padding: "22px 32px",
      cursor: "default",
      borderBottom: i < steps.length - 1 ? "1px solid var(--color-hairline)" : "none",
      background: active === i ? "var(--color-surface-card)" : "transparent",
      transition: "background .2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: active === i ? "var(--color-primary)" : "var(--color-muted-soft)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 17,
      margin: 0,
      color: "var(--color-ink)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--color-body)",
      margin: "6px 0 0"
    }
  }, s.b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--color-hairline)",
      position: "relative",
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement(window.StepGraphic, {
    step: active
  }), /*#__PURE__*/React.createElement("span", {
    className: "nv-corner-tag",
    style: {
      position: "absolute",
      left: 16,
      top: 16
    }
  }, "step 0", active + 1, " / 05"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Become a contributor"))));
}
window.HowWeBuild = HowWeBuild;

// StepGraphic — a small SVG node diagram that morphs with the active step.
function StepGraphic({
  step
}) {
  const ink = "var(--color-ink)",
    purple = "var(--color-primary)",
    hair = "var(--color-hairline)";
  const cx = 210,
    cy = 210;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 420 420",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, step >= 1 && /*#__PURE__*/React.createElement("g", {
    stroke: ink,
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: cx - 90,
    y2: cy + 70
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: cx + 90,
    y2: cy + 70
  })), step >= 3 && /*#__PURE__*/React.createElement("g", {
    stroke: hair,
    strokeWidth: "1",
    fill: "none",
    opacity: step === 3 || step === 4 ? 1 : 0,
    style: {
      transition: "opacity .3s"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: cx - 150,
    y: cy - 150,
    width: "80",
    height: "46"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: `${cx - 146},${cy - 112} ${cx - 130},${cy - 128} ${cx - 112},${cy - 118} ${cx - 94},${cy - 138} ${cx - 74},${cy - 122}`,
    stroke: purple
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx + 70,
    y: cy - 150,
    width: "80",
    height: "46"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: `${cx + 74},${cy - 116} ${cx + 92},${cy - 124} ${cx + 110},${cy - 110} ${cx + 128},${cy - 130} ${cx + 146},${cy - 120}`,
    stroke: purple
  })), step >= 1 && [[-90, 70], [90, 70]].map(([dx, dy], i) => {
    const isCheck = step >= 4;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("circle", {
      cx: cx + dx,
      cy: cy + dy,
      r: isCheck ? 18 : 12,
      fill: isCheck ? purple : ink,
      style: {
        transition: "all .3s"
      }
    }, step === 2 && /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "12;16;12",
      dur: "1.4s",
      repeatCount: "indefinite"
    })), isCheck && /*#__PURE__*/React.createElement("path", {
      d: `M ${cx + dx - 7} ${cy + dy} l 5 5 l 9 -10`,
      stroke: "#fff",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "20",
    fill: ink
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 1,
    fill: "#fff",
    fontFamily: "var(--font-display)",
    fontSize: "20",
    textAnchor: "middle",
    dominantBaseline: "middle"
  }, "N"));
}
window.StepGraphic = StepGraphic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HowWeBuild.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Narrative.jsx
try { (() => {
// Narrative — the node story. The left text scrolls up the page normally while
// the right canvas stays sticky/centered and its animation advances with scroll:
// float → silo → drain → constellation. A "Scroll" cue invites the gesture.
function Narrative() {
  const sectionRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const beatRefs = React.useRef([]);
  const goToBeat = next => {
    const target = beatRefs.current[next];
    let top;
    if (target) {
      const r = target.getBoundingClientRect();
      top = window.scrollY + r.top + r.height / 2 - window.innerHeight / 2;
    } else if (sectionRef.current && sectionRef.current.nextElementSibling) {
      const r = sectionRef.current.nextElementSibling.getBoundingClientRect();
      top = window.scrollY + r.top;
    } else return;
    // custom slow smooth-scroll (~1100ms) so the animation reads as it moves
    const start = window.scrollY;
    const dist = top - start;
    const dur = 1100;
    const t0 = performance.now();
    const ease = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, start + dist * ease(k));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const beats = [{
    k: "The talent",
    t: "Canada is facing difficult challenges, but the talent to address them already exists.",
    b: "Researchers. Industry experts. Tech experts. Investors. Founders. Advisors. The talent is already here."
  }, {
    k: "The silos",
    t: "The challenge is bringing them all together where they can make the most impact.",
    b: "That talent all lives in separate agencies, universities, organizations and startups — rarely in the same room, and rarely pointed at the same problem."
  }, {
    k: "The stakes",
    t: "The future won't be built by organizations acting alone.",
    b: "The critical problems that matter to Canada now are too big for any single team. They'll be built by connected ecosystems working together."
  }, {
    k: "The network",
    t: "Node Ventures connects talent from different ecosystems to build and deploy solutions.",
    b: "We connect experts, organizations, capital, and technology to build next-generation ventures that answer real-world problems."
  }];
  React.useEffect(() => {
    if (!canvasRef.current) return;
    const field = new window.NodeField(canvasRef.current, {
      mode: "narrative",
      count: 40
    });
    const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? clamp(-rect.top, 0, total) / total : 0;
      // Remap so each beat's animation completes when ITS text is centered in
      // the viewport. Control points = scroll progress at which each beat is
      // centered; values = the field stage that should be finished by then.
      const P = [0, 0.34, 0.68, 1.0];
      const F = [0.12, 0.5, 0.75, 1.0];
      let fp = F[F.length - 1];
      for (let i = 0; i < P.length - 1; i++) {
        if (p <= P[i + 1]) {
          const t = clamp((p - P[i]) / (P[i + 1] - P[i]), 0, 1);
          fp = F[i] + (F[i + 1] - F[i]) * t;
          break;
        }
      }
      field.setProgress(fp); // animation lands as each text reaches center
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      field.destroy();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: "nv-grid-band",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, beats.map((bt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    ref: el => beatRefs.current[i] = el,
    style: {
      minHeight: "96vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag",
    style: {
      color: "var(--color-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "[", String(i + 1).padStart(2, "0"), "]"), " ", bt.k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(28px, 3.4vw, 42px)",
      lineHeight: 1.12,
      letterSpacing: "-0.8px",
      color: "var(--color-ink)",
      margin: "16px 0 0",
      maxWidth: 460
    }
  }, bt.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "10px 0 0",
      maxWidth: 420
    }
  }, bt.b), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Scroll to next",
    onClick: () => goToBeat(i + 1),
    style: {
      marginTop: 18,
      width: 34,
      height: 34,
      borderRadius: "var(--radius-full)",
      border: "none",
      background: "rgba(106,77,230,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    fill: "none",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "16.5",
    stroke: "var(--color-primary)",
    strokeWidth: "1",
    strokeDasharray: "3 2"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "14",
    viewBox: "0 0 14 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1 V13 M2 8 L7 13 L12 8",
    stroke: "var(--color-primary)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "72vh"
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      touchAction: "none"
    }
  })))));
}
window.Narrative = Narrative;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Narrative.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/NodeField.js
try { (() => {
// NodeField — a canvas node/particle engine for the Node Ventures homepage.
// Two modes:
//   'orbit'     — hero: nodes drift in a 3D cluster, parallax to the cursor.
//   'narrative' — scroll-driven 4-beat story: float → silo → drain → constellation.
// Vanilla JS, attached to window. The React sections create instances.
(function () {
  const INK = "#141413";
  const PURPLE = "#6a4de6";
  const MUTED = "#8e8b82";
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
  function clamp01(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t;
  }
  class NodeField {
    constructor(canvas, opts = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.mode = opts.mode || "orbit";
      this.count = opts.count || (this.mode === "orbit" ? 34 : 40);
      this.W = 0;
      this.H = 0;
      this.dpr = 1;
      this.progress = 0; // narrative scroll 0..1
      this.target = 0; // eased toward progress
      this.mouse = {
        x: -9999,
        y: -9999,
        active: false
      };
      this.t0 = performance.now();
      this.raf = null;
      this._initNodes();
      this._onResize = this._resize.bind(this);
      this._onMove = this._move.bind(this);
      this._onLeave = () => {
        this.mouse.active = false;
      };
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
      if (this.mode === "narrative") {
        this.progress = progress;
        this.target = progress;
      }
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);
      if (this.mode === "orbit") this._drawOrbit(ctx, time);else this._drawNarrative(ctx, time);
    }
    _initNodes() {
      const N = this.count;
      this.nodes = [];
      for (let i = 0; i < N; i++) {
        const seed = i * 127.1;
        this.nodes.push({
          group: i % 4,
          // which silo
          gi: Math.floor(i / 4),
          // index within stagger
          z: 0.4 + i * 73 % 100 / 100 * 0.6,
          // depth 0.4..1
          accent: i % 9 === 0,
          // a few purple nodes
          rnd: Math.sin(seed) * 43758.5453 % 1,
          ph: i / N * Math.PI * 2,
          // phase
          drift: 0.5 + i * 31 % 100 / 100,
          x: 0,
          y: 0,
          r: 0,
          a: 1
        });
      }
    }
    _resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.W = rect.width;
      this.H = rect.height;
      this.canvas.width = Math.round(this.W * this.dpr);
      this.canvas.height = Math.round(this.H * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
    _move(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.active = true;
    }
    setProgress(p) {
      this.progress = clamp01(p);
    }

    // ---- anchor layouts (narrative) ----
    _floatAnchor(n, time) {
      // scattered drift across the field, avoiding edges
      const cx = this.W * (0.18 + (n.gi * 37 + n.group * 90) % 64 / 100 * 1.0);
      const cy = this.H * (0.12 + (n.gi * 53 + n.group * 17) % 76 / 100 * 1.0);
      const dx = Math.sin(time * 0.5 * n.drift + n.ph) * 14;
      const dy = Math.cos(time * 0.42 * n.drift + n.ph * 1.3) * 14;
      return {
        x: cx + dx,
        y: cy + dy
      };
    }
    _siloAnchor(n) {
      // 4 containers in a 2x2 grid; 10 dots each in ~ a 3-col grid
      const pad = this.W * 0.06,
        gap = this.W * 0.05;
      const cw = (this.W - pad * 2 - gap) / 2;
      const ch = (this.H - pad * 2 - gap) / 2;
      const col = n.group % 2,
        row = Math.floor(n.group / 2);
      const ox = pad + col * (cw + gap),
        oy = pad + row * (ch + gap);
      const per = Math.ceil(this.count / 4);
      const cols = 3;
      const ix = n.gi % cols,
        iy = Math.floor(n.gi / cols);
      const ipadX = cw * 0.2,
        ipadY = ch * 0.26;
      const gx = (cw - ipadX * 2) / (cols - 1);
      const rows = Math.max(1, Math.ceil(per / cols) - 1);
      const gy = (ch - ipadY * 2) / Math.max(1, rows);
      return {
        x: ox + ipadX + ix * gx,
        y: oy + ipadY + iy * gy
      };
    }
    _drainAnchor(n) {
      // funnel toward a node low-center
      const tx = this.W * 0.5,
        ty = this.H * 0.62;
      const spread = 1 - n.gi / (this.count / 4 + 1);
      const ang = n.ph;
      return {
        x: tx + Math.cos(ang) * 26 * spread,
        y: ty - 60 - n.gi * 10 * spread
      };
    }
    _ringAnchor(n, time) {
      const cx = this.W * 0.5,
        cy = this.H * 0.5;
      const R = Math.min(this.W, this.H) * 0.33;
      const i = n.group * Math.ceil(this.count / 4) + n.gi;
      const ang = i / this.count * Math.PI * 2 + time * 0.25;
      const rr = R * (0.7 + n.z * 0.3);
      return {
        x: cx + Math.cos(ang) * rr,
        y: cy + Math.sin(ang) * rr * 0.62
      };
    }
    _narrativePos(n, time, p) {
      let a, b, seg;
      if (p < 0.25) {
        return {
          ...this._floatAnchor(n, time),
          stage: 1
        };
      } else if (p < 0.5) {
        a = this._floatAnchor(n, time);
        b = this._siloAnchor(n);
        seg = (p - 0.25) / 0.25;
      } else if (p < 0.75) {
        a = this._siloAnchor(n);
        b = this._drainAnchor(n);
        seg = (p - 0.5) / 0.25;
      } else {
        a = this._drainAnchor(n);
        b = this._ringAnchor(n, time);
        seg = (p - 0.75) / 0.25;
      }
      const t = easeInOut(clamp01(seg));
      return {
        x: lerp(a.x, b.x, t),
        y: lerp(a.y, b.y, t),
        stage: p < 0.5 ? 2 : p < 0.75 ? 3 : 4
      };
    }
    _loop() {
      const now = performance.now();
      const time = (now - this.t0) / 1000;
      this.target = lerp(this.target, this.progress, 0.08);
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);
      if (this.mode === "orbit") this._drawOrbit(ctx, time);else this._drawNarrative(ctx, time);
      this.raf = requestAnimationFrame(this._loop);
    }

    // ---- hero orbit ----
    _drawOrbit(ctx, time) {
      const cx = this.W * 0.5,
        cy = this.H * 0.5;
      const R = Math.min(this.W, this.H) * 0.36;
      const mx = this.mouse.active ? (this.mouse.x - cx) / this.W : 0;
      const my = this.mouse.active ? (this.mouse.y - cy) / this.H : 0;
      const pts = this.nodes.map(n => {
        const ang = n.ph + time * 0.18 * n.drift;
        const rr = R * (0.45 + n.z * 0.7);
        const x = cx + Math.cos(ang) * rr + mx * 40 * n.z;
        const y = cy + Math.sin(ang) * rr * 0.7 + my * 40 * n.z;
        return {
          x,
          y,
          n
        };
      });
      // connections
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < R * 0.5) {
            ctx.strokeStyle = `rgba(20,20,19,${(1 - d / (R * 0.5)) * 0.12})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const r = 1.5 + p.n.z * 3.5;
        ctx.globalAlpha = 0.35 + p.n.z * 0.65;
        ctx.fillStyle = p.n.accent ? PURPLE : INK;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // ---- narrative ----
    _drawNarrative(ctx, time) {
      const p = this.target;
      // containers (stage 2): fade in .25-.42, out .5-.62
      const cIn = clamp01((p - 0.25) / 0.12);
      const cOut = 1 - clamp01((p - 0.5) / 0.12);
      const cA = Math.min(cIn, cOut);
      if (cA > 0.01) this._drawContainers(ctx, cA);
      const pts = this.nodes.map(n => {
        const pos = this._narrativePos(n, time, p);
        let x = pos.x,
          y = pos.y;
        // mouse avoid, strong in float, fades out
        if (this.mouse.active && p < 0.4) {
          const dx = x - this.mouse.x,
            dy = y - this.mouse.y;
          const d = Math.hypot(dx, dy);
          const R = 90;
          if (d < R) {
            const f = (1 - d / R) * (1 - p / 0.4) * 30;
            x += dx / (d || 1) * f;
            y += dy / (d || 1) * f;
          }
        }
        return {
          x,
          y,
          n
        };
      });

      // central N node (stage 3-4)
      const nodeA = clamp01((p - 0.5) / 0.18);
      const cx = lerp(this.W * 0.5, this.W * 0.5, 1),
        cy = lerp(this.H * 0.62, this.H * 0.5, clamp01((p - 0.75) / 0.25));

      // constellation lines (stage 4)
      const lineA = clamp01((p - 0.78) / 0.2);
      if (lineA > 0.01) {
        ctx.lineWidth = 1;
        for (const pt of pts) {
          ctx.strokeStyle = `rgba(20,20,19,${0.18 * lineA})`;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(pt.x, pt.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const pt of pts) {
        const r = 2 + pt.n.z * 3;
        ctx.globalAlpha = this.mode === "narrative" && p < 0.25 ? 0.4 + pt.n.z * 0.6 : 0.55 + pt.n.z * 0.45;
        ctx.fillStyle = pt.n.accent ? PURPLE : INK;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // central node with pulse + N
      if (nodeA > 0.01) {
        const pulse = p > 0.75 ? 1 + Math.sin(time * 2.2) * 0.12 : 1;
        const R = 22 * nodeA * pulse;
        // halo
        ctx.globalAlpha = 0.18 * nodeA;
        ctx.fillStyle = PURPLE;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = nodeA;
        ctx.fillStyle = PURPLE;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.font = `${Math.round(R)}px "Ovo", serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("N", cx, cy + 1);
      }
    }
    _drawContainers(ctx, alpha) {
      const pad = this.W * 0.06,
        gap = this.W * 0.05;
      const cw = (this.W - pad * 2 - gap) / 2;
      const ch = (this.H - pad * 2 - gap) / 2;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = MUTED;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      for (let g = 0; g < 4; g++) {
        const col = g % 2,
          row = Math.floor(g / 2);
        const ox = pad + col * (cw + gap),
          oy = pad + row * (ch + gap);
        ctx.strokeRect(ox, oy, cw, ch);
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/NodeField.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing/QuoteBlock.jsx
try { (() => {
// QuoteBlock — a large editorial pull-quote placeholder.
function QuoteBlock() {
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 24,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-hairline)",
      borderBottom: "1px solid var(--color-hairline)",
      padding: "56px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag",
    style: {
      marginBottom: 24
    }
  }, "Placeholder \u2014 add a real partner or contributor quote"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(26px,3.2vw,38px)",
      lineHeight: 1.28,
      letterSpacing: "-0.5px",
      color: "var(--color-ink)",
      maxWidth: 880
    }
  }, "\u201CA short, specific quote from a partner, founder, or contributor about what Node made possible \u2014 one concrete outcome beats a paragraph of praise.\u201D"))));
}
window.QuoteBlock = QuoteBlock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteFooter.jsx
try { (() => {
// SiteFooter — dark, boxed link columns, dot-marks in the corner.
function SiteFooter() {
  const cols = [{
    h: "Platform",
    links: ["Focus areas", "How we build", "Ventures", "Transformation"]
  }, {
    h: "Company",
    links: ["About", "Insights", "Careers", "Contact"]
  }, {
    h: "Legal",
    links: ["Privacy", "Terms", "Transparency"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "64px var(--page-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.22em",
      border: "1px solid var(--color-on-dark)",
      padding: "5px 9px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Node"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 16
    }
  }, "Ventures")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--color-on-dark-soft)",
      margin: "18px 0 0",
      maxWidth: 250
    }
  }, "Connecting talent across ecosystems to build and deploy sovereign AI for Canada.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--color-on-dark)",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-on-dark-soft)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginTop: 56,
      paddingTop: 24,
      backgroundImage: "repeating-linear-gradient(90deg, rgba(250,249,245,0.22) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-on-dark-soft)"
    }
  }, "\xA9 2026 Node Ventures, Inc. \xB7 Canada"), /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "var(--color-on-dark-soft)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "12",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "24",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "36",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "36",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "2.5"
  }))))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteNav.jsx
try { (() => {
// SiteNav — cream top bar, boxed wordmark, mono nav links, purple CTA.
function SiteNav() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const links = ["Focus areas", "How we build", "About", "Insights"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      display: "flex",
      alignItems: "center",
      gap: 32,
      height: 64,
      padding: "0 var(--page-pad)",
      backgroundColor: "var(--color-canvas)",
      backgroundImage: "repeating-linear-gradient(90deg, var(--nv-rule) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.22em",
      textDecoration: "none",
      color: "var(--color-ink)",
      border: "1px solid var(--color-ink)",
      padding: "5px 9px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "-0.3px"
    }
  }, "Node"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 16,
      letterSpacing: "-0.3px"
    }
  }, "Ventures")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: 28,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--color-body)",
      textDecoration: "none"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Become a contributor")));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Transform.jsx
try { (() => {
// Transform — "We don't just build ventures. We transform your workflows."
function Transform() {
  const cards = [{
    t: "Organizations",
    b: "Executive intelligence, operational AI, and agentic automation — built on data foundations you control."
  }, {
    t: "Municipalities",
    b: "Permitting, citizen services, and regulatory intelligence — modernized with AI that's secure, accountable, and ready for public scrutiny."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 0,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag"
  }, "[03] AI transformation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(30px,3.6vw,44px)",
      lineHeight: 1.12,
      letterSpacing: "-0.9px",
      margin: "16px auto 0",
      maxWidth: 720
    }
  }, "We don't just build ventures. We transform your workflows to meet the age of AI."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "16px auto 0",
      maxWidth: 560
    }
  }, "We bring Node's AI tools and expertise into organizations and governments to modernize how they work: governed data, open standards, and no vendor lock-in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      border: "1px solid var(--color-hairline)"
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      padding: 40,
      minHeight: 260,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      borderLeft: i === 1 ? "1px solid var(--color-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: "-0.4px",
      margin: 0
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: "12px 0 0",
      maxWidth: 380
    }
  }, c.b))))));
}
window.Transform = Transform;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Transform.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TrustedBy.jsx
try { (() => {
// TrustedBy — an infinite horizontal logo marquee with fade-out edges.
function TrustedBy() {
  const logos = ["Sovereign", "Northgate", "Maple Labs", "CIVIQ", "Halton AI", "Beacon", "Polar Systems", "Atlas Gov"];
  const loop = logos.concat(logos); // duplicate for seamless scroll
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      paddingTop: 24,
      paddingBottom: 24,
      backgroundImage: "repeating-linear-gradient(90deg, var(--nv-rule) 0 var(--line-dash), transparent var(--line-dash) var(--line-step)), repeating-linear-gradient(90deg, var(--nv-rule) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px, 100% 1px",
      backgroundPosition: "top, bottom",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-tag",
    style: {
      margin: 0,
      flex: "none"
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      overflow: "hidden",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-marquee",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 56,
      width: "max-content"
    }
  }, loop.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": i >= logos.length ? "true" : undefined,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--color-muted)",
      letterSpacing: "-0.2px",
      whiteSpace: "nowrap"
    }
  }, n))))));
}
window.TrustedBy = TrustedBy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TrustedBy.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.NodeGrid = __ds_scope.NodeGrid;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CalloutCard = __ds_scope.CalloutCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
