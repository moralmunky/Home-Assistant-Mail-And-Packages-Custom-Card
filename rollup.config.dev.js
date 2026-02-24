import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';

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
    nodeResolve(),
    commonjs(),
    typescript(),
    json(),
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
