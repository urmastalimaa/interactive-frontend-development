/* global process:readonly */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { babel } from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const outputFolder = "public";
const watching = process.env.ROLLUP_WATCH === "true";
const open = process.env.START_BROWSER === "true";
const environment = (watching && "development") || "production";

export default {
  input: "src/index.js",
  output: {
    file: `${outputFolder}/app.js`,
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    resolve({ browser: true }),
    commonjs({
      include: "node_modules/**",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(environment),
      preventAssignment: true,
    }),
    babel({ babelHelpers: "bundled" }),
    scss({sourceMap: true}),
  ].concat(
    watching
      ? [
          serve({
            contentBase: outputFolder,
            port: 10001,
            verbose: true,
            open,
            historyApiFallback: true,
          }),
          livereload(),
        ]
      : []
  ),
};
