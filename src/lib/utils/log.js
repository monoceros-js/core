const prependByZero = val => {
  if (val < 10) return '0' + val
  return val
}

const getCurrentTime = () => {
  const date = new Date()
  const hours = prependByZero(date.getHours())
  const minutes = prependByZero(date.getMinutes())
  const seconds = prependByZero(date.getSeconds())
  const millis = date.getMilliseconds()
  return `${hours}:${minutes}:${seconds}.${millis}`
}

export const log = (...args) => {
  console.info(`[${getCurrentTime()}] `, ...args)
}

export const logError = error => {
  console.error = error
}
