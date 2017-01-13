/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');

var errors = module.exports = require('./errors');

function failCheck(ExceptionConstructor, callee, messageFormat, formatArgs) {
    messageFormat = messageFormat || '';
    var message = util.format.apply(util, [messageFormat].concat(formatArgs));
    var error = new ExceptionConstructor(message);
    Error.captureStackTrace(error, callee);
    throw error;
}

function failArgumentCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalArgumentError, callee, message, formatArgs);
}

function failStateCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalStateError, callee, message, formatArgs);
}

function checkArgument(value, message) {
    if (!value) {
        failArgumentCheck(checkArgument, message,
            Array.prototype.slice.call(arguments, 2));
    }
}

function checkState(value, message) {
    if (!value) {
        failStateCheck(checkState, message,
            Array.prototype.slice.call(arguments, 2));
    }
}

function checkIsDef(value, message) {
    if (value !== undefined) {
        return value;
    }

    failArgumentCheck(checkIsDef, message ||
        'Expected value to be defined but was undefined.',
        Array.prototype.slice.call(arguments, 2));
}

function checkIsDefAndNotNull(value, message) {
    // Note that undefined == null.
    if (value != null) {
        return value;
    }

    failArgumentCheck(checkIsDefAndNotNull, message ||
        'Expected value to be defined and not null but got "' +
        typeOf(value) + '".', Array.prototype.slice.call(arguments, 2));
}

// Fixed version of the typeOf operator which returns 'null' for null values
// and 'array' for arrays.
function typeOf(value) {
    var s = typeof value;
    if (s == 'object') {
        if (!value) {
            return 'null';
        } else if (value instanceof Array) {
            return 'array';
        }
    }
    return s;
}

function typeCheck(expect) {
    return function typeChecker(value, message) {
        var type = typeOf(value);

        if (type == expect) {
            return value;
        }

        failArgumentCheck(typeChecker, message ||
            'Expected "' + expect + '" but got "' + type + '".',
            Array.prototype.slice.call(arguments, 2));
    };
}

module.exports = {
    checkArgument: checkArgument,
    checkState: checkState,
    checkIsDef: checkIsDef,
    checkIsDefAndNotNull: checkIsDefAndNotNull,
    checkIsString: typeCheck('string'),
    checkIsArray: typeCheck('array'),
    checkIsNumber: typeCheck('number'),
    checkIsBoolean: typeCheck('boolean'),
    checkIsFunction: typeCheck('function'),
    checkIsObject: typeCheck('object')
};
