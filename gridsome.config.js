// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Haila.fi',
  siteUrl: 'https://haila.fi',
  siteDescription: "Teemu Haila's online property. No trespassing!",
  plugins: [],
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }
}
