const path = require('path');

module.exports = {
  mode:'development',
  entry: './main.ts', 
  target:"node",
  module:{
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  resolve:{
    extensions: ['.ts'],
    modules:[path.resolve(__dirname, "src/script"),"node_modules"]
  }
};