/*jslint unparam: true */

'use strict';

function createSessionString(ip, xforward, timestamp) {
    return 'hello';
}


module.exports = {
    create : function (req, res) {
        var moment = require('moment'),
            crypto = require('crypto'),
            s = crypto.createHash('md5').update('hello').digest('hex');
        console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
        console.log(moment().format());
        console.log(createSessionString(192, 234, 'dfdf'));
        console.log(s);
        res.send({'sessionid': req.params.name });
        return 'create';
    },


    destroy : function (req, res) {
        return 'destroy';
    },


    validate : function (req, res) {
        return 'validate';
    },
};
