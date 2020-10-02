import { romanNumerals } from './romanNumerals'

export const getHighestRomanNumber = (input) => {
  const romanNumbers = []

  Object.keys(romanNumerals)
    .reverse()
    .filter((romanNumber) => {
      if (romanNumber <= input) {
        romanNumbers.push(romanNumber)
      }
    })
  return Math.max(...romanNumbers)
}
