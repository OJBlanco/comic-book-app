const path = require('path')

module.exports = {
  shared: path.resolve(__dirname, 'src', 'shared'),
  assets: path.resolve(__dirname, 'src', 'assets'),
  icons: path.resolve(__dirname, 'src', 'assets', 'icons'),
  styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
  fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
  hooks: path.resolve(__dirname, 'src', 'hooks'),
  models: path.resolve(__dirname, 'src', 'models'),
  helpers: path.resolve(__dirname, 'src', 'helpers'),
  forms: path.resolve(__dirname, 'src', 'shared', 'forms'),
  pages: path.resolve(__dirname, 'src', 'pages'),
  services: path.resolve(__dirname, 'src', 'services'),
}
