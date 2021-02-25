import resolve from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import postCssImport from 'postcss-import';
import livereload from 'rollup-plugin-livereload';

const outputFolder = 'public';
const watching = process.env.ROLLUP_WATCH === 'true';

export default {
	input: 'src/index.js',
	output: {
		file: `${outputFolder}/app.js`,
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		resolve(),
    babel({babelHelpers: 'bundled'}),
    postcss({plugins: [postCssImport]})
  ].concat(watching ? [
    serve({contentBase: outputFolder, port: 10001, verbose: true}),
    livereload()
  ] : [])
};
