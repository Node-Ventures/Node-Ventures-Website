// useMobile — shared breakpoint hook. Returns true when the viewport is at or
// below `bp` (default 760px). Used by components that need to change markup
// (not just CSS) on small screens: SiteNav (hamburger), Hero (static image),
// Ventures (one card at a time).
window.useIsMobile = function (bp) {
  bp = bp || 760;
  const [m, setM] = React.useState(function () {
    return typeof window !== "undefined" && window.matchMedia("(max-width: " + bp + "px)").matches;
  });
  React.useEffect(function () {
    const mq = window.matchMedia("(max-width: " + bp + "px)");
    const on = function () {
      setM(mq.matches);
    };
    on();
    mq.addEventListener("change", on);
    return function () {
      mq.removeEventListener("change", on);
    };
  }, [bp]);
  return m;
};
