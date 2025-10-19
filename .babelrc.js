module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: 'defaults',        // 또는 { esmodules: true } 등 프로젝트에 맞게
      // useBuiltIns: false       // core-js를 쓰지 않으면 그대로 두세요
    }]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      helpers: true,
      regenerator: true,          // async/await, generator용
      // corejs: 3                // ← runtime-corejs3 설치했을 때만 켜기
    }]
  ]
};
