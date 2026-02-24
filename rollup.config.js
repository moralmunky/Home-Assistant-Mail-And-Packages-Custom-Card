import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

const dev = process.env.ROLLUP_WATCH;

const plugins = [
  copy({
    targets: [{ src: 'src/img/', dest: 'dist/' }],
  }),
  nodeResolve(),
  commonjs(),
  typescript(),
  json(),
  !dev && terser(),
];

export default [
  {
    input: 'src/Home-Assistant-Mail-And-Packages-Custom-Card.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [...plugins],
  },
];
