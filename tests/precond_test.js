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
        test.throws(function() {
            precond.checkState(false);
        }, /illegal state - false/);
        test.done();
    },

    "checkArgument": function(test) {
        test.throws(function() {
            precond.checkArgument(false, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkArgument(false);
        }, /illegal argument - false/);
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
        }, /argument is undefined - undefined/);
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
            precond.checkIsDefAndNotNull(undefined);
        }, /argument is undefined or null - undefined/);
        test.throws(function() {
            precond.checkIsDefAndNotNull(null);
        }, /argument is /);
        test.equals(0, precond.checkIsDefAndNotNull(0));
        test.done();
    },

    "checkIsString": function(test) {
        test.doesNotThrow(function() { precond.checkIsString(''); });
        test.doesNotThrow(function() { precond.checkIsString(String('')); });
        test.doesNotThrow(function() { precond.checkIsString(new String('')); });
        test.throws(function() {
            precond.checkIsString({}, 'fake error string');
        }, /fake error string/);
        test.throws(function() {
            precond.checkIsString(false);
        }, /argument is not string - false/);
        test.equals('foo', precond.checkIsString('foo'));
        test.done();
    },

    "checkIsArray": function(test) {
        test.doesNotThrow(function() { precond.checkIsArray([]); });
        test.throws(function() {
            precond.checkIsArray({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsArray(false);
        }, /argument is not array - false/);
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
            precond.checkIsNumber(false);
        }, /argument is not number - false/);
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
            precond.checkIsBoolean('abc');
        }, /argument is not boolean - abc/);
        test.equals(true, precond.checkIsBoolean(true));
        test.done();
    },

    "checkIsFunction": function(test) {
        test.doesNotThrow(function() { precond.checkIsFunction(function() {}); });
        test.throws(function() {
            precond.checkIsFunction({}, 'abc %s def %s', 1, 3);
        }, /abc 1 def 3/);
        test.throws(function() {
            precond.checkIsFunction(false)
        }, /argument is not function - false/);
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
            precond.checkIsObject(false);
        }, /argument is not object - false/);
        var obj = {};
        test.equals(obj, precond.checkIsObject(obj));
        test.done();
    }
};
