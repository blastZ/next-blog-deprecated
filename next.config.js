const withPlugins = require('next-compose-plugins');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
});
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([
  withCSS,
  withFonts,
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'mdx']
    }
  ]
]);
