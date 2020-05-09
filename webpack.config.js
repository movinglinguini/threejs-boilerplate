const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    "threejs-boilerplate": './src/engine.js',
    "three": './node_modules/three/build/three.module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
