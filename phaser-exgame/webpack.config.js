const path = require('path');

module.exports = {
  entry: './src/index.js',  // Phaser 게임의 진입점
  output: {
    filename: 'bundle.js',  // 번들 파일 이름
    path: path.resolve(__dirname, 'dist'),  // 출력 디렉토리
  },
  mode: 'development',  // 개발 모드로 설정
  devtool: 'source-map',  // 디버깅을 위한 소스 맵
  devServer: {
    static: path.join(__dirname, 'dist'), // 'static'으로 변경
    port: 9000,
  },
};
