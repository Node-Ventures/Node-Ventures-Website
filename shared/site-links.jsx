// site-links — single source of truth for site navigation targets, shared by
// SiteNav and SiteFooter so labels resolve to the SAME href everywhere.
//
// Pages that live one directory below the project root (pages/, domains/)
// set `window.__siteBase = "../"` before this loads, so a root-relative path
// like "domains/built-environment.html" resolves correctly from either folder.
// Labels with no page yet resolve to "#". Add a mapping here when a page ships.
(function () {
  var BASE = (typeof window !== "undefined" && window.__siteBase) || "";
  var PAGES = {
    "Home": "index.html",
    "Contribute": "contribute.html",
    "Built environment": "domains/built-environment.html",
    "National defence": "domains/national-defence.html",
    "Enterprise AI": "domains/enterprise-ai.html",
    "Community infrastructure": "domains/community-infrastructure.html",
    "Asset fund": "funds/asset-fund.html",
    "Venture fund": "funds/venture-fund.html",
    "Debt fund": "funds/debt-fund.html",
    "Contact": "contact.html",
    "Privacy": "privacy.html",
    "Terms": "terms.html",
    "admin@nodeventures.ca": "mailto:admin@nodeventures.ca",
    // External app — login / start contributing. Absolute URL, returned as-is.
    "Log in": "http://app.nodeventures.ca/login",
    "Start contributing": "http://app.nodeventures.ca/login",
  };
  // Resolve a nav/footer label to an href. Absolute URLs and mailto: links pass
  // through; known relative pages get the base prefix; unknown/unbuilt labels → "#".
  window.NV_HREF = function (label) {
    var p = PAGES[label];
    if (!p) return "#";
    if (/^(https?:\/\/|mailto:)/.test(p)) return p;
    return BASE + p;
  };
})();
