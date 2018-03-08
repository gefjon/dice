let expect = require('chai').expect
let parseDiceString = require('../index.js')

/* global describe, it */

describe('dice', () => {
  describe('#parseDiceString()', () => {
    it('should parse "d6"', () => {
      expect(parseDiceString('d6')).to.be.a('DiceRoll')
        .and.include({ count: 1, size: 6, modifier: 0 })
    })
    it('should parse "2d10+5-4"', () => {
      expect(parseDiceString('2d10+5-4')).to.be.a('DiceRoll')
        .and.include({ count: 2, size: 10, modifier: 1 })
    })
  })
})
