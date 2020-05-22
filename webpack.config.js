const path = require('path');

module.exports = {
  entry: __dirname + '/src/script/main.ts', 
  target:"node",
  module:{
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  resolve:{
    extensions: ['.ts'],
    modules:[path.resolve(__dirname, "src","script"),"node_modules"]
  },
  externals: [ // こいつらは一つにしません！*2
    'electron',
    'fs'
  ],
};