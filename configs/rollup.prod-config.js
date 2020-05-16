/**
 * @author Luis Angel Garcia (lag1996)
 * 
 * @description
 * Configuration for rollup on dev mode,
 */

import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const input = 'src/app/engine.js';
const resolver = resolve({ browser: true })

export default [{
  output: {
      dir: 'build/prod',
      format: 'es',
      chunkFileNames: '[name].min.js'
  },
  manualChunks: {
    three: ['three'],
  },
  plugins: [terser(), resolver],
  input,
}];