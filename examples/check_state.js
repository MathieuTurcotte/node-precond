/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main() {
    precond.checkState(false, '%s is closed', '/home/joe/doc');
}

try {
    main(10, 20);
} catch(err) {
    console.log(err.stack);
}
