import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

export default {
  input: ['src/Home-Assistant-Mail-And-Packages-Custom-Card.ts'],
  output: {
    dir: './dist',
    format: 'es',
  },
  plugins: [
    copy({
      targets: [{ src: 'src/img/', dest: 'dist/' }],
    }),
    resolve(),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
    }),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
  ],
};
