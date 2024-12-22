const path = require('path');

module.exports = {
  entry: './src/index.js',  // Phaser 게임의 진입점
  output: {
    filename: 'bundle.js',  // 번들 파일 이름
    path: path.resolve(__dirname, 'dist'),  // 출력 디렉토리
  },

  

  module: {
    rules: [
        {
            test: /\.css$/i, // CSS 파일 처리
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i, // 이미지 파일 처리
            type: 'asset/resource', // Webpack 5 이상에서는 asset/resource 권장
        },
    ],
},



  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @를 src 디렉토리로 매핑
    },
    extensions: ['.js', '.json', '.wasm'], // 생략 가능한 확장자
  },

  mode: 'development',  // 개발 모드로 설정
  devtool: 'source-map',  // 디버깅을 위한 소스 맵
  devServer: {
    static: path.join(__dirname, 'dist'), // 'static'으로 변경
    port: 9000,
  },
};
