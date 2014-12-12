'use strict';

var _ = require('lodash');

module.exports = function (file) {
  var tempFile = _.clone(file);
  delete tempFile._contents;

  tempFile.contents = file.contents;
  tempFile.path = file.path;
  tempFile.relative = file.relative;

  return tempFile;
};
