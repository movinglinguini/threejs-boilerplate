/**
 * @author Luis Angel Garcia (lag1996)
 * 
 * @description
 * Configuration for rollup. Uses terser as a plugin.
 */

import { terser } from 'rollup-plugin-terser';

const external = [
    'three/build/three.min.js',
    'three/examples/js/controls/OrbitControls.js'
];

const input = 'src/engine.js';

export default [{
    output: {
        file: 'build/three-boilerplate.js',
    },
    external,
    input,
}, {
    output: {
        file: 'build/three-boilerplate.min.js',
    },
    plugins: [terser()],
    external,
    input,
}];
