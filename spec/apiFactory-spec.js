/*global describe: false, it: false, expect: false */

'use strict';

var apiFactory = require('../controller/apiFactory.js');

describe('will this work', function () {
    var method = apiFactory.get('session');
    it('Default test case', function apiFactory1() {
        expect(method.create).toBe(require('../controller/sessionManager.js').create);
    });

});
