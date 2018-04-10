# Protocol Buffer loader module for webpack

Converts .proto files into JSON so they can be [loaded without a parser](https://github.com/dcodeIO/ProtoBuf.js/wiki/Builder#using-json-without-the-proto-parser). For use with [webpack](http://webpack.github.io/docs/) and [ProtoBuf.js](https://github.com/dcodeIO/ProtoBuf.js)

## Installation
npm install proto-loader

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var protobuf = require('protobufjs');

var protoDefinition = require('./message.proto');
// => returns json object converted from message.proto, resolves imports

var root = protobuf.Root.fromJSON(protoDefinition);
//...
```

### webpack config

``` javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.proto$/,
        loaders: ['json-loader', 'proto-loader6']
      }
    ]
  }
};
```

## Run example with

```
webpack
node ./out/bundle.js
```


## License
MIT (http://www.opensource.org/licenses/mit-license.php)
