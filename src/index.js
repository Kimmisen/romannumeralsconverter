import { romanNumeralsConverter } from './romanNumeralsConverter.js'

const start = () => {
  const argsLength = process.argv.length
  const argIndex = process.argv.length - 1
  const ARGS_LENGTH_MAX = 3

  if (argsLength === ARGS_LENGTH_MAX && !isNaN(process.argv[argIndex])) {
    console.log(romanNumeralsConverter(process.argv[argIndex]))
  } else {
    console.log(romanNumeralsConverter(123))
  }
}

start()
