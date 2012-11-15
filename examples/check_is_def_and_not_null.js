/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(a) {
    precond.checkIsDefAndNotNull(a, 'Argument "a" should defined and not null.');
}

main(0);
main({});
main([]);

try {
   main(null);
} catch(err) {
    console.log(err.stack);
}

try {
    main(undefined);
} catch(err) {
    console.log(err.stack);
}
