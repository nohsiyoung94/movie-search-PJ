// webpack.config.js
// Windows 경로 이슈 회피용 _require 유지 가능
const _require = id => require(require.resolve(id, { paths: [require.main.path] }))

const path = _require('path')
const HtmlPlugin = _require('html-webpack-plugin')
const CopyPlugin = _require('copy-webpack-plugin')
const { VueLoaderPlugin } = _require('vue-loader')
const Dotenv =require('dotenv-webpack')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets')
    }
  },

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      { test: /\.vue$/, 
        use: 'vue-loader' },

      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',          // HMR에 최적
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [require('autoprefixer')] }
            }
          },
          {
            loader: 'sass-loader',
            options: {
            
              implementation: require('sass-embedded'),
              sassOptions: {
                // node_modules, src/scss 어디서든 @use 가능
                loadPaths: ['node_modules', 'src/scss'],
                // Bootstrap 5.3 내부 deprecation 경고 잠재우기
                silenceDeprecations: [
                  'legacy-js-api',
                  'import',
                  'color-functions',
                  'global-builtin'
                ]
              }
              // ⚠️ additionalData로 main을 주입하면
              // 각 SFC마다 bootstrap이 중복 로드될 수 있어 비권장
            }
          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // 이미지 로더 (file-loader 그대로 사용해도 동작함)
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource' // ← 최신 방식 (file-loader 대체)
      }
    ]
  },

  plugins: [
    new HtmlPlugin({ template: './index.html' }),
    new CopyPlugin({ patterns: [{ from: 'static' }] }),
    new VueLoaderPlugin(),
    new Dotenv()
  ],

  devServer: {
    host: 'localhost',
    port: 7770,
    hot: true,
    static: { directory: path.join(__dirname, 'public') }
  }
}
