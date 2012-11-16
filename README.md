# Preconditions for Node.js [![Build Status](https://secure.travis-ci.org/MathieuTurcotte/node-precond.png?branch=master)](https://travis-ci.org/MathieuTurcotte/node-precond)

Precondition checks for Node.js.

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

Note that even though the throw statement is wrapped in a function, the call
stack will still start from the calling function. So the previous examples will
both produce the same stack trace.

All arguments after the message will be used to format the actual error
message that will be thrown.

Provided checks are the following:

- checkArgument(expression, messageFormat, [formatArgs, ...])
- checkState(expression, messageFormat, [formatArgs, ...])
- checkIsDef(expression, messageFormat, [formatArgs, ...])
- checkIsDefAndNotNull(expression, messageFormat, [formatArgs, ...])
- checkIsArray(expression, messageFormat, [formatArgs, ...])
- checkIsNumber(expression, messageFormat, [formatArgs, ...])
- checkIsBoolean(expression, messageFormat, [formatArgs, ...])
- checkIsFunction(expression, messageFormat, [formatArgs, ...])
- checkIsObject(expression, messageFormat, [formatArgs, ...])

## API

### precond.checkArgument(expression, messageFormat, [formatArgs, ...])

- expression: an expression to test for trueness
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is true. Throws an `IllegalArgumentError` if expression
is false.

### precond.checkState(expression, messageFormat, [formatArgs, ...])

- expression: an expression to test for trueness
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is true. Throws an `IllegalStateError` if expression
is false.

### precond.checkIsDef(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be defined
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is defined (could be null). Throws an
`IllegalArgumentError` if expression is undefined.

### precond.checkIsDefAndNotNull(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be defined and not null
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is defined and not null. Throws an
`IllegalArgumentError` if expression is undefined or null.

### precond.checkIsArray(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be an array
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is an array. Throws an `IllegalArgumentError` if
expression isn't an array.

### precond.checkIsNumber(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be a number
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is a number. Throws an `IllegalArgumentError` if
expression isn't a number.

### precond.checkIsBoolean(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be a boolean
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is a boolean. Throws an `IllegalArgumentError` if
expression isn't a boolean.

### precond.checkIsFunction(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be a function
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is a function. Throws an `IllegalArgumentError` if
expression isn't a function.

### precond.checkIsObject(expression, messageFormat, [formatArgs, ...])

- expression: an expression that is required to be an object
- messageFormat: error message format template
- formatArgs: arguments to be substituted into the message template

Ensure that expression is an object. Throws an `IllegalArgumentError` if
expression isn't an object.

### precond.IllegalArgumentError

Extends `Error` and is thrown to signal illegal arguments.

### precond.IllegalStateError

Extends `Error` and is thrown to signal that the program or object as reached
an illegal state.

## License

This code is free to use under the terms of the [MIT license](http://mturcotte.mit-license.org/).
