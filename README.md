# Preconditions for Node.js
[![Build Status](https://secure.travis-ci.org/MathieuTurcotte/node-precond.png?branch=master)](https://travis-ci.org/MathieuTurcotte/node-precond)
[![NPM version](https://badge.fury.io/js/precond.png)](http://badge.fury.io/js/precond)

Precondition checks for Node.js inspired by [Guava's precondition checking
utilities](https://code.google.com/p/guava-libraries/wiki/PreconditionsExplained).

## Installation

```
npm install precond
```

## Unit tests

```
npm test
```

## Overview

Precond provides a set of functions to verify arguments and state correctness

It lets you rewrite constructs like the following

```js
if (!this.isConnected) {
    throw new Error('Client should be connected before calling X.');
}
```

into a more compact and declarative check bellow.

```js
precond.checkState(this.isConnected, 'Client should be ...');
```

**Note that even though the throw statement is wrapped in a function, the call
stack will still start from the calling function. So the previous examples would
both produce the same stack trace.**

All arguments after the message will be used to format the actual error
message that will be thrown.

Provided checks are the following:

- checkArgument(expression, [messageFormat, [formatArgs, ...]])
- checkState(expression, [messageFormat, [formatArgs, ...]])
- checkIsDef(expression, [messageFormat, [formatArgs, ...]]) -> expression
- checkIsDefAndNotNull(expression, [messageFormat, [formatArgs, ...]]) -> expression
- checkIsArray(expression, [messageFormat, [formatArgs, ...]]) -> expression
- checkIsNumber(expression, [messageFormat, [formatArgs, ...]]) -> expression
- checkIsBoolean(expression, [messageFormat, [formatArgs, ...]]) -> expression
- checkIsFunction(expression, [messageFormat, [formatArgs, ...]]) -> expression
- checkIsObject(expression, [messageFormat, [formatArgs, ...]]) -> expression

## API

### Static functions

#### precond.checkArgument(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be truthy
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is true. Throws an `IllegalArgumentError` if expression
is false.

#### precond.checkState(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be truthy
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is true. Throws an `IllegalStateError` if expression
is false.

#### precond.checkIsDef(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be defined
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is defined (could be null). Throws an
`IllegalArgumentError` if expression is undefined. Returns the value of
the expression that was validated.

#### precond.checkIsDefAndNotNull(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be defined and not null
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is defined and not null. Throws an
`IllegalArgumentError` if expression is undefined or null. Returns the value of
the expression that was validated.

#### precond.checkIsArray(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be an array
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is an array. Throws an `IllegalArgumentError` if
expression isn't an array. Returns the value of the expression that was
validated.

#### precond.checkIsNumber(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be a number
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is a number. Throws an `IllegalArgumentError` if
expression isn't a number. Returns the value of the expression that was
validated.

#### precond.checkIsBoolean(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be a boolean
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is a boolean. Throws an `IllegalArgumentError` if
expression isn't a boolean. Returns the value of the expression that was
validated.

#### precond.checkIsFunction(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be a function
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is a function. Throws an `IllegalArgumentError` if
expression isn't a function. Returns the value of the expression that was
validated.

#### precond.checkIsObject(expression, [messageFormat, [formatArgs, ...]])

- expression: the expression that is required to be an object
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensures that expression is an object. Throws an `IllegalArgumentError` if
expression isn't an object. Returns the value of the expression that was
validated.

### Class precond.IllegalArgumentError

Extends `Error` and is thrown to signal illegal arguments.

### Class precond.IllegalStateError

Extends `Error` and is thrown to signal that the program or object has reached
an illegal state.

## License

This code is free to use under the terms of the [MIT license](http://mturcotte.mit-license.org/).
