
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify-es';

const dist = 'dist';

export default {
  input: 'js/match-height.js',
  output: [
    {
      file: `${dist}/simple-match-height.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/simple-match-height.esm.js`,
      format: 'esm'
    },
    {
      name: 'Simple Match-Height',
      file: `${dist}/simple-match-height.umd.js`,
      format: 'umd'
    },
    {
      name: 'Simple Match-Height',
      file: `${dist}/simple-match-height.iife.js`,
      format: 'iife'
    },
    {
      name: 'Simple Match-Height',
      file: `${dist}/simple-match-height.min.js`,
      format: 'iife'
    }
  ],
  plugins: [
    resolve(),
    eslint(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}

