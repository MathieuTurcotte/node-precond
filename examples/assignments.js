/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var precond = require('../index');

function User(name, age) {
    this.name = precond.checkIsString(name);
    this.age = precond.checkIsNumber(age);
}

new User('gilles', 25);

try {
    new User('gilles');
} catch(err) {
    console.log(err.stack);
}

try {
    new User(45, 'gilles');
} catch(err) {
    console.log(err.stack);
}
