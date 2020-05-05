const helpers = require('./node.helpers.js');

module.exports = {
  outputDir: helpers.root('public'),
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'src/index.template.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
};
