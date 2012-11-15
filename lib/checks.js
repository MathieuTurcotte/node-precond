/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = require('util');

var errors = module.exports = require('./errors');

function failCheck(ExceptionConstructor, callee, messageFormat, formatArgs) {
    messageFormat = messageFormat || '';
    var message = util.format.apply(this, [messageFormat].concat(formatArgs));
    var error = new ExceptionConstructor(message);
    Error.captureStackTrace(error, callee);
    throw error;
}

function failArgumentCheck(callee, messageFormat, formatArgs) {
    failCheck(errors.IllegalArgumentError, callee, messageFormat, formatArgs);
}

function failStateCheck(callee, messageFormat, formatArgs) {
    failCheck(errors.IllegalStateError, callee, messageFormat, formatArgs);
}

module.exports.checkArgument = function(expression, messageFormat) {
    if (!expression) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkState = function(expression, messageFormat) {
    if (!expression) {
        failStateCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsDef = function(expression, messageFormat) {
    if (expression === undefined) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsDefAndNotNull = function(expression, messageFormat) {
    if (expression === null || expression === undefined) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsArray = function(expression, messageFormat) {
    if (!(expression instanceof Array)) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsNumber = function(expression, messageFormat) {
    if (typeof expression !== 'number') {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsBoolean = function(expression, messageFormat) {
    if (typeof expression !== 'boolean') {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsFunction = function(expression, messageFormat) {
    if (typeof expression !== 'function') {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsObject = function(expression, messageFormat) {
    // Need special care since arrays and nulls eval to object.
    if (typeof expression !== 'object' || expression === null ||
            expression instanceof Array) {
        failArgumentCheck(arguments.callee, messageFormat,
            Array.prototype.slice.call(arguments, 2));
    }
};
