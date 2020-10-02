import { romanNumeralsConverter } from './romanNumeralsConverter.js'

describe('romanNumeralsConverter', () => {
  it('should return error for negative numbers', () => {
    expect(() => {
      romanNumeralsConverter(-1)
    }).toThrow()
  })

  it('should return error for 0', () => {
    expect(() => {
      romanNumeralsConverter(0)
    }).toThrow()
  })

  it('should transform 1 to I', () => {
    const ans = romanNumeralsConverter(1)
    expect(ans).toBe('I')
  })

  it('should transform 5 to V', () => {
    const ans = romanNumeralsConverter(5)
    expect(ans).toBe('V')
  })

  it('should transform 10 to X', () => {
    const ans = romanNumeralsConverter(10)
    expect(ans).toBe('X')
  })

  it('should transform 50 to L', () => {
    const ans = romanNumeralsConverter(50)
    expect(ans).toBe('L')
  })

  it('should transform 100 to C', () => {
    const ans = romanNumeralsConverter(100)
    expect(ans).toBe('C')
  })

  it('should transform 500 to D', () => {
    const ans = romanNumeralsConverter(500)
    expect(ans).toBe('D')
  })

  it('should transform 1000 to M', () => {
    const ans = romanNumeralsConverter(1000)
    expect(ans).toBe('M')
  })

  it('should transform 14 to XIV', () => {
    const ans = romanNumeralsConverter(14)
    expect(ans).toBe('XIV')
  })

  it('should transform 400 to CD', () => {
    const ans = romanNumeralsConverter(400)
    expect(ans).toBe('CD')
  })

  it('should transform 1251 to MCCLI', () => {
    const ans = romanNumeralsConverter(1251)
    expect(ans).toBe('MCCLI')
  })
})
