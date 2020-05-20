const helpers = require('./node.helpers.js');

module.exports = {
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.template.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', helpers.root('src'));
  },
};
