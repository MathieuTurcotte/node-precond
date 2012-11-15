/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(a) {
    precond.checkIsObject(a, 'Argument "a" should be an object.');
}

main({});

try {
    main(null);
} catch(err) {
    console.log(err.stack);
}

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
