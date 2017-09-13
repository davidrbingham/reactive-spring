var babelJest = require('babel-jest');

module.exports = {
    process: function (src, filename) {
        if (filename.match(/\.jsx?$/)) {
            return babelJest.process(src, filename);
        } else {
            return '';
        }
    }
};