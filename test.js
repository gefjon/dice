let expect = require('chai').expect
let parseDiceString = require('./index.js')

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
    it('should accept capital "D"', () => {
      expect(parseDiceString('2D8')).to.be.a('DiceRoll')
        .and.include({ count: 2, size: 8, modifier: 0 })
    })
    it('should error when passed "foobar"', () => {
      expect(() => parseDiceString('foobar')).to.throw(parseDiceString.Error)
        .with.property('str', 'foobar')
    })
    it('should error when passed "2.5d8"', () => {
      expect(() => parseDiceString('2.5d8')).to.throw(parseDiceString.Error)
        .with.property('str', '2.5d8')
    })
    it('should parse the examples in README.md', () => {
      expect(parseDiceString('d20')).to.be.a('DiceRoll')
        .and.include({ count: 1, size: 20, modifier: 0 })
      expect(parseDiceString('d8+6')).to.be.a('DiceRoll')
        .and.include({ count: 1, size: 8, modifier: 6 })
      expect(parseDiceString('3d6')).to.be.a('DiceRoll')
        .and.include({ count: 3, size: 6, modifier: 0 })
      expect(parseDiceString('100d4-17+3')).to.be.a('DiceRoll')
        .and.include({ count: 100, size: 4, modifier: -14 })
    })
  })
})
