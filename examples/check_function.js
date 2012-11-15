/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(callback) {
    precond.checkIsFunction(callback, 'Callback should be a function.');
}

try {
    main(function () {});
    main({});
} catch(err) {
    console.log(err.stack);
}
