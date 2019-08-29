import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      compact: false,
      preserveSymlinks: true,
      
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    babel({
      presets: ['@babel/env', "@babel/preset-react"],
      plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
      ],
      exclude: 'node_modules/**',
      minified: false,
      comments: true,

    }),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),
    external({
      includeDependencies: true,
    }),
    url(),
    svgr(),
    commonjs(),
    terser(),
  ],
}