/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(a) {
    precond.checkIsArray(a, 'a should be an array, was %s', typeof a);
}

try {
    main(10, 20);
} catch(err) {
    console.log(err.stack);
}
