# vinyl-to-object [![Build Status](https://secure.travis-ci.org/danielhusar/vinyl-to-object.svg?branch=master)](http://travis-ci.org/danielhusar/vinyl-to-object)

Store virtual file format as regular object


## Install

```
npm install --save-dev vinyl-to-object
```

## Example

```javascript
var File = require('vinyl');
var copy = require('vinyl-to-object');

var file = new File({
    cwd: 'test',
    base: 'test',
    path: '/test/test.txt',
    contents: new Buffer('unicorn')
});

var duplicatedFile = copy(file);
```

## opts

### file

Type: `vinyl file`

Vinyl file to convert to regular object

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
