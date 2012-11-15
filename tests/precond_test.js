/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var sinon = require('sinon'),
    util = require('util');

var precond = require('../lib/checks');

exports["Precond"] = {
    "checkState": function(test) {
        test.throws(function() {
            precond.checkState(false, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkArgument": function(test) {
        test.throws(function() {
            precond.checkArgument(false, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsDef": function(test) {
        test.doesNotThrow(function() { precond.checkIsDef(null); });
        test.doesNotThrow(function() { precond.checkIsDef(0); });
        test.doesNotThrow(function() { precond.checkIsDef([]); });
        test.doesNotThrow(function() { precond.checkIsDef({}); });
        test.throws(function() {
            precond.checkIsDef(undefined, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsDefAndNotNull": function(test) {
        test.doesNotThrow(function() { precond.checkIsDef(0); });
        test.doesNotThrow(function() { precond.checkIsDef([]); });
        test.doesNotThrow(function() { precond.checkIsDef({}); });
        test.throws(function() {
            precond.checkIsDefAndNotNull(undefined, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsDefAndNotNull(null, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsArray": function(test) {
        test.doesNotThrow(function() { precond.checkIsArray([]); });
        test.throws(function() {
            precond.checkIsArray({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsNumber": function(test) {
        test.doesNotThrow(function() { precond.checkIsNumber(0); });
        test.throws(function() {
            precond.checkIsNumber({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsBoolean": function(test) {
        test.doesNotThrow(function() { precond.checkIsBoolean(true); });
        test.doesNotThrow(function() { precond.checkIsBoolean(false); });
        test.throws(function() {
            precond.checkIsBoolean({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsFunction": function(test) {
        test.doesNotThrow(function() { precond.checkIsFunction(function() {}); });
        test.throws(function() {
            precond.checkIsBoolean({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    },

    "checkIsObject": function(test) {
        test.doesNotThrow(function() { precond.checkIsObject({}); });
        test.throws(function() {
            precond.checkIsObject([], 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsObject(null, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.done();
    }
};
