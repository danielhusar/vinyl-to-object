'use strict';

var assert = require('assert');
var File = require('vinyl');
var copy = require('./index.js');

it('I should create regular object from vinyl file', function () {
  var file = new File({
    cwd: 'test',
    base: 'test',
    path: '/test/test.txt',
    contents: new Buffer('unicorn')
  });

  var duplicatedFile = copy(file);

  assert.equal(duplicatedFile.cwd, 'test');
  assert.equal(duplicatedFile.base, 'test');
  assert.equal(duplicatedFile.path, '/test/test.txt');
  assert.equal(duplicatedFile.contents.toString(), 'unicorn');

  file.contents = new Buffer('two unicorns');
  assert.equal(file.contents.toString(), 'two unicorns');
  assert.equal(duplicatedFile.contents.toString(), 'unicorn');
});
