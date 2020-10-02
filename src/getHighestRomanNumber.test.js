import { getHighestRomanNumber } from './getHighestRomanNumber'

describe('getHighestRomanNumber', () => {
  it('should return 10 for 14', () => {
    const ans = getHighestRomanNumber(14)
    expect(ans).toBe(10)
  })

  it('should return 1 for a number === 1', () => {
    const ans = getHighestRomanNumber(1)
    expect(ans).toBe(1)
  })

  it('should return 4 for a number === 4', () => {
    const ans = getHighestRomanNumber(4)
    expect(ans).toBe(4)
  })

  it('should return 5 for a number >= 5 < 9', () => {
    const ans = getHighestRomanNumber(8)
    expect(ans).toBe(5)
  })

  it('should return 9 for a number === 9', () => {
    const ans = getHighestRomanNumber(9)
    expect(ans).toBe(9)
  })

  it('should return 10 for a number >= 10 < 40', () => {
    const ans = getHighestRomanNumber(10)
    expect(ans).toBe(10)
  })

  it('should return 40 for a number >= 40 < 50', () => {
    const ans = getHighestRomanNumber(44)
    expect(ans).toBe(40)
  })

  it('should return 50 for a number >= 50 < 90', () => {
    const ans = getHighestRomanNumber(50)
    expect(ans).toBe(50)
  })

  it('should return 90 for a number >= 90 < 100', () => {
    const ans = getHighestRomanNumber(95)
    expect(ans).toBe(90)
  })

  it('should return 100 for a number >= 100 < 400', () => {
    const ans = getHighestRomanNumber(333)
    expect(ans).toBe(100)
  })

  it('should return 400 for a number >= 400 < 500', () => {
    const ans = getHighestRomanNumber(450)
    expect(ans).toBe(400)
  })

  it('should return 500 for a number >= 500 < 900', () => {
    const ans = getHighestRomanNumber(899)
    expect(ans).toBe(500)
  })

  it('should return 900 for a number >= 900 < 1000', () => {
    const ans = getHighestRomanNumber(901)
    expect(ans).toBe(900)
  })

  it('should return 1000 for a number >= 1000', () => {
    const ans = getHighestRomanNumber(99999999)
    expect(ans).toBe(1000)
  })
})
