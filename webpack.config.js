const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: 'webpack-test.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpack-test',
    libraryTarget: 'umd'
  },
  externals: {
    underscore: {
      commonjs: 'underscore',
      commonjs2: 'underscore',
      amd: 'underscore',
      root: '_'
    }
  }
};
