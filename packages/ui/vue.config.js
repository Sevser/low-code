const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    watch: true,
    optimization: {
      splitChunks: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        inlineSource: '.(js|css)$',
        filename: 'nindex.html',
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
      new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
              {
                source: path.join(__dirname, 'dist/nindex.html'),
                destination: path.join(__dirname, '../plugin/ui/index.html')
              }
            ]
          }
        }
      })
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  }
}
