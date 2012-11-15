/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function main(a) {
    precond.checkIsDef(a, 'Argument "a" should defined.');
}

main(0);
main({});
main([]);
main(null);

try {
    main(undefined);
} catch(err) {
    console.log(err.stack);
}
