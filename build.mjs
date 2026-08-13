// build.mjs — pre-compile every .jsx component to a plain classic <script>-loadable
// .js file (React.createElement, global React). This removes @babel/standalone and
// the per-load JSX compile from the browser entirely.
//
// Source of truth stays the .jsx files; the generated .js files sit next to them
// and are what the HTML pages load. Re-run `npm run build` after editing any .jsx.
import fs from "node:fs";
import path from "node:path";
import babel from "@babel/core";

const DIRS = ["shared", "pages", "domains", "funds"];

let count = 0;
for (const dir of DIRS) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".jsx")) continue;
    const src = path.join(dir, name);
    const out = src.replace(/\.jsx$/, ".js");
    const res = babel.transformFileSync(src, {
      // classic runtime → React.createElement(...) using the global React UMD build,
      // so the output runs as a plain <script> with no imports/bundler.
      presets: [["@babel/preset-react", { runtime: "classic" }]],
      compact: false,
      comments: true,
      babelrc: false,
      configFile: false,
    });
    fs.writeFileSync(out, res.code + "\n");
    count++;
    console.log("compiled", src, "->", out);
  }
}
console.log(`\nDone. Compiled ${count} components.`);
