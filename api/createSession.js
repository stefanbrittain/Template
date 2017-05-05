'use strict';
var express = require('express'),
    bodyParser = require('body-parser'),
    swagger_node_express = require('swagger-node-express'),
    paramTypes = swagger_node_express.paramTypes,
    errors = swagger_node_express.errors,
    apiFactory = require('../controller/apiFactory.js');


module.exports = {
    'spec': {
        path : '/api/session/create/{name}',
        method: 'GET',
        summary : 'Creates a new Session',
        parameters : [paramTypes.path('name', 'name to stay hello to', 'string')],
        responseMessages : [errors.invalid('name'), errors.notFound('name')],
        nickname : 'sayHello'
    },
    'action': function (req, res) {
        apiFactory.get('session').create(req, res);
    }
};
