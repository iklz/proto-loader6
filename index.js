'use strict';

let protobuf = require('protobufjs'),
    protoTarget = require('protobufjs/cli/targets/json'),
    loaderUtils = require('loader-utils');

module.exports = function (source) {
    let options = Object.assign({}, loaderUtils.getOptions(this)),
        { pbjs = {}, target = {} } = options,
        callback = this.async();

    if (!callback) {
        throw 'proto-loader currently only supports async mode.';
    }

    if (this.cacheable()) {
        this.cacheable();
    }

    new protobuf.Root().load(this.resourcePath, pbjs, function(err, root) {
        if(err) return callback(err);

        protoTarget(root, target, callback);
    });
};
