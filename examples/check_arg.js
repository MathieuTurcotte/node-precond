/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(a, b) {
    precond.checkArgument(a > b, 'a (%s) should be greater than b (%s)', a, b);
}

try {
    main(10, 20);
} catch(err) {
    console.log(err.stack);
}
