/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(a) {
    precond.checkIsNumber(a, 'Argument "a" should be a number.');
}

main(1);
main(0);
main(-1);

try {
    main([]);
} catch(err) {
    console.log(err.stack);
}

try {
    main(function() {});
} catch(err) {
    console.log(err.stack);
}
