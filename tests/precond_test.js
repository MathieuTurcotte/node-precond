/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

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
        test.throws(function() {
            precond.checkIsDef(undefined);
        }, /Expected value to be defined but was undefined./);
        test.equals(0, precond.checkIsDef(0));
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
        test.throws(function() {
            precond.checkIsDefAndNotNull(null);
        }, /Expected value to be defined and not null but got "null"./);
        test.equals(0, precond.checkIsDefAndNotNull(0));
        test.done();
    },

    "checkIsString": function(test) {
        test.doesNotThrow(function() { precond.checkIsString(''); });
        test.throws(function() { precond.checkIsString(new String('')); });
        test.throws(function() {
            precond.checkIsString({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsString({});
        }, /Expected "string" but got "object"./);
        test.equals('foo', precond.checkIsString('foo'));
        test.done();
    },

    "checkIsArray": function(test) {
        test.doesNotThrow(function() { precond.checkIsArray([]); });
        test.throws(function() {
            precond.checkIsArray({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsArray({});
        }, /Expected "array" but got "object"./);
        var arr = [1, 2];
        test.equals(arr, precond.checkIsArray(arr));
        test.done();
    },

    "checkIsNumber": function(test) {
        test.doesNotThrow(function() { precond.checkIsNumber(0); });
        test.throws(function() {
            precond.checkIsNumber({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsNumber({});
        }, /Expected "number" but got "object"./);
        test.equals(0, precond.checkIsNumber(0));
        test.done();
    },

    "checkIsBoolean": function(test) {
        test.doesNotThrow(function() { precond.checkIsBoolean(true); });
        test.doesNotThrow(function() { precond.checkIsBoolean(false); });
        test.throws(function() {
            precond.checkIsBoolean({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsBoolean({});
        }, /Expected "boolean" but got "object"./);
        test.equals(true, precond.checkIsBoolean(true));
        test.done();
    },

    "checkIsFunction": function(test) {
        test.doesNotThrow(function() { precond.checkIsFunction(function() {}); });
        test.throws(function() {
            precond.checkIsFunction({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsFunction({});
        }, /Expected "function" but got "object"./);
        var fn = function() {};
        test.equals(fn, precond.checkIsFunction(fn));
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
        test.throws(function() {
            precond.checkIsObject(null);
        }, /Expected "object" but got "null"./);
        var obj = {};
        test.equals(obj, precond.checkIsObject(obj));
        test.done();
    }
};
