/*jslint unparam: true */

'use strict';
var storage = require('node-persist');

module.exports = {
    //var storage = require('node-persist');

    query : function (req, res) {


        storage.setItem('moose','yourname')
          .then(function() {

            return storage.getItem('name')
          })
          .then(function(value) {
          res.send({'sessionid': req.query['queryStr'], 'test': value});
            console.log(value); // yourname
          })

    }

};
