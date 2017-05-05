'use strict';

module.exports = {
    get : function (method) {
        var ret;
        switch (method) {
        case 'session':
            ret = require('./sessionManager.js');
            break;
        case 'search':
            ret = require('./searchManager.js');
            break;
        }
        return ret;
    }
};
