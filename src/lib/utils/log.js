const prependByZero = (val, threshold) => {
  if (val < threshold) return '0' + val
  return val
}

const getCurrentTime = () => {
  const date = new Date()
  const hours = prependByZero(date.getHours(), 10)
  const minutes = prependByZero(date.getMinutes(), 10)
  const seconds = prependByZero(date.getSeconds(), 10)
  const millis = prependByZero(date.getMilliseconds(), 100)
  return `${hours}:${minutes}:${seconds}.${millis}`
}

export const log = (...args) => {
  console.info(`[${getCurrentTime()}] `, ...args)
}

export const logError = error => {
  console.error = error
}
