/**
 * @author Luis Angel Garcia (lag1996)
 * 
 * @description
 * Configuration for rollup. Uses terser as a plugin.
 */

import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const input = 'src/engine.js';
const resolver = resolve({ browser: true })

export default [{
    output: {
        file: 'build/threejs-boilerplate.js',
        format: 'es'
    },
    input,
    plugins: [resolver]
}, {
    output: {
        file: 'build/threejs-boilerplate.min.js',
        format: 'es',
    },
    plugins: [terser(), resolver],
    input,
}];
