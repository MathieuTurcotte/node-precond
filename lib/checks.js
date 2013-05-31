/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = require('util');

var errors = module.exports = require('./errors');

function failCheck(ExceptionConstructor, callee, messageFormat, formatArgs, defaultMessageFormat, expression) {
    messageFormat = messageFormat || defaultMessageFormat;
    var message = util.format.apply(this, [messageFormat].concat(formatArgs).concat([expression]));
    var error = new ExceptionConstructor(message);
    Error.captureStackTrace(error, callee);
    throw error;
}

function failArgumentCheck(callee, messageFormat, formatArgs, defaultMessageFormat, expression) {
    failCheck(errors.IllegalArgumentError, callee, messageFormat, formatArgs, defaultMessageFormat, expression);
}

function failStateCheck(callee, messageFormat, formatArgs, defaultMessageFormat, expression) {
    failCheck(errors.IllegalStateError, callee, messageFormat, formatArgs, defaultMessageFormat, expression);
}

module.exports.checkArgument = function(expression, messageFormat) {
    if (!expression) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "illegal argument - %s", expression);
    }
};

module.exports.checkState = function(expression, messageFormat) {
    if (!expression) {
        failStateCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "illegal state - %s", expression);
    }
};

module.exports.checkIsDef = function(expression, messageFormat) {
    if (expression === undefined) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is undefined - %s", expression);
    }
    return expression;
};

module.exports.checkIsDefAndNotNull = function(expression, messageFormat) {
    if (expression === null || expression === undefined) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is undefined or null - %s", expression);
    }
    return expression;
};

module.exports.checkIsString = function(expression, messageFormat) {
    if (typeof expression != 'string' && !(expression instanceof String)) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is not string - %s", expression);
    }
    return expression;
};

module.exports.checkIsArray = function(expression, messageFormat) {
    if (!(expression instanceof Array)) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is not array - %s", expression);
    }
    return expression;
};

module.exports.checkIsNumber = function(expression, messageFormat) {
    if (typeof expression !== 'number') {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is not number - %s", expression);
    }
    return expression;
};

module.exports.checkIsBoolean = function(expression, messageFormat) {
    if (typeof expression !== 'boolean') {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is not boolean - %s", expression);
    }
    return expression;
};

module.exports.checkIsFunction = function(expression, messageFormat) {
    if (typeof expression !== 'function') {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is not function - %s", expression);
    }
    return expression;
};

module.exports.checkIsObject = function(expression, messageFormat) {
    // Need special care since arrays and nulls eval to object.
    if (typeof expression !== 'object' || expression === null ||
            expression instanceof Array) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2), "argument is not object - %s", expression);
    }
    return expression;
};
