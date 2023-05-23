const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-test/'
    : '/'
})
