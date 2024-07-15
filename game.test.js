import { blockScoreFrame } from './game.js'
import { describe, it, expect } from 'vitest'
import { isSpare } from './game.js'
import { isStrike } from './game.js'

describe('blockScoreFrame', () => {
  // 2 tests from class
  it('should score a gutterball', () => {
    //arrange
    const frame = [0, 0]
    const expected = 0
    //act
    const actual = blockScoreFrame(frame)
    //assert
    expect(actual).toBe(expected)
  })
  it('should score a basic frame', () => {
    //arrange
    const frame = [3, 1]
    const expected = 4
    //act
    const actual = blockScoreFrame(frame)
    //assert
    expect(actual).toBe(expected)
  })
  // other tests for assignment - completed by me
  it('should score spare frame', () => {
    //arrange
    const frame = [4, 6]
    const secondFrame = [1, 2]
    const expected = 11
    //act
    const actual = blockScoreFrame(frame, secondFrame)
    //assert
    expect(actual).toBe(expected)
  })
  it('should score strike frame', () => {
    //arrange
    const frame = [10, 0]
    const secondFrame = [1, 2]
    const expected = 13
    //act
    const actual = blockScoreFrame(frame, secondFrame)
    //assert
    expect(actual).toBe(expected)
  })
})

// -- OTHER TESTS / EXPERIMENTAL --
describe('isSpare', () => {
  it('should check for spare', () => {
    //arrange
    const frame = [6, 4]
    const expected = true

    //act
    const actual = isSpare(frame)
    //assert
    expect(actual).toBe(expected)
  })
  it('should check first ball is not 10', () => {
    //arrange
    const frame = [10, 0]
    const expected = false
    //act
    const actual = isSpare(frame)
    //assert
    expect(actual).toBe(expected)
  })
  it('should check if there were 2 balls', () => {
    //arrange
    const frame = [6]
    const expected = false
    //act
    const actual = isSpare(frame)
    //assert
    expect(actual).toBe(expected)
  })
})

describe('isStrike', () => {
  it('should check if there is a strike', () => {
    //arrange
    const frame = [10, 0]
    const expected = true
    //act
    const actual = isStrike(frame)
    //assert
    expect(actual).toBe(expected)
  })
})
