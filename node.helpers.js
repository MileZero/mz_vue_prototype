const path = require('path');

const rootPath = path.resolve(__dirname);

module.exports = {
  root(relativePath) {
    if (relativePath) return path.resolve(rootPath, relativePath);
    return rootPath;
  },
};
