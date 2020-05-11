/**
 * @author Luis Angel Garcia (lag1996)
 * 
 * @description
 * Configuration for rollup on dev mode,
 */

import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';

const input = 'test/index.js';
const pluginResolver = resolve({ browser: true })
const pluginHTML = html({ title: 'THREE-Boilerplate Test', });

export default [{
    output: {
        dir: 'build/test',
        format: 'es'
    },
    manualChunks: (id) => {
      if (id.includes('node_modules')) {
        return 'vendor';
      }
    },
    input,
    plugins: [pluginHTML, pluginResolver]
}];