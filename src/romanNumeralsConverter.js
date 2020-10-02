import { getHighestRomanNumber } from './getHighestRomanNumber'
import { romanNumerals } from './romanNumerals'

export const romanNumeralsConverter = (input) => {
  if (input < 0 || !input) {
    throw 'Error: Number must be higher than zero.'
  }
  const convertedRomanLetters = []
  romanNumeralsConverterInternal(input, convertedRomanLetters)
  return convertedRomanLetters.join('')
}

const romanNumeralsConverterInternal = (input, convertedRomanLetters) => {
  if (input <= 0) {
    return
  }
  const highestRomanNumber = getHighestRomanNumber(input)
  convertedRomanLetters.push(romanNumerals[highestRomanNumber])

  romanNumeralsConverterInternal(
    input - highestRomanNumber,
    convertedRomanLetters
  )
}
