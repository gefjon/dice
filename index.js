'use strict'

class DiceRoll {
  get [Symbol.toStringTag] () {
    return 'DiceRoll'
  }
  constructor (count, size, modifier) {
    this.count = count
    this.size = size
    this.modifier = modifier
  }
}

function parseModifierString (str) {
  let re = /[+-]\d+/g
  let [i] = re.exec(str)
  let total = 0
  while (i) {
    total += parseInt(i)
    let result = re.exec(str)
    i = result ? result[0] : false
  }
  return total
}

function parseDiceString (str) {
  let re = /^(\d*)[dD](\d+)((?:[+-]\d+)*)$/
  let [, count, size, modifierString] = re.exec(str)
  return new DiceRoll(
    count ? parseInt(count) : 1,
    parseInt(size),
    modifierString ? parseModifierString(modifierString) : 0
  )
}

module.exports = parseDiceString
