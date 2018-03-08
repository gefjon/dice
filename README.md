[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/gefjon/dice.svg?branch=master)](https://travis-ci.org/gefjon/dice)

# DnD dice string parsing in Javascript

A simple tool for parsing DnD-style dice strings, like:

* `d20`
* `d8+6`
* `3d6`
* `100d4-17+3`

The specific grammar used accepts, in this order:

* An optional leading integer `count` denoting the number of dice to be rolled
* One of the letters `d` or `D`
* An integer `size` denoting the number of sides on the dice to be rolled
* Any number of optional modifiers, each of which consists of:
  - One of the symbols `+` or `-`, denoting whether the modifier is positive or
      negative
  - An integer denoting the number to be added or subtracted to or from the
      result

The object exported is a function which returns a `DiceRoll`, which has the
fields `{ count, size, modifier }` - these are all guaranteed to be integers, or
your money back. `count` defaults to `1` and `modifier` defaults to `0`.

`module.exports.Error` is the constructor for `DiceStringError`, which takes a
single argument `str`, the string which failed to parse. The returned
`DiceStringError` inherits from `Error`, has a field `str` containing its
argument and a field `name` containing `DiceStringError`. The `message` passed
to `Error`'s constructor is `` `wanted a dice string but was passed ${str}` ``.

## Sample usage:

```javascript

let parseDiceString = require('dice')

let { count, size, modifier } = parseDiceString('3d6+1')

let result = 0

for (let i = 0; i < count; i += 1) {
  result += Math.floor(Math.random() * size)
}

result += modifier

console.log(`the result of rolling the dice was ${result}`)

```
