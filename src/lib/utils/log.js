const prependByZero = (val, magnitude = 1) => {
  for (let i = 1; i < magnitude + 1; i++) {
    const threshold = Math.pow(10, i)
    const zeros = Array(i + 1 - magnitude)
      .fill('0')
      .join('')
    if (val < threshold) return zeros + val
  }
  return val
}

const getCurrentTime = () => {
  const date = new Date()
  const hours = prependByZero(date.getHours())
  const minutes = prependByZero(date.getMinutes())
  const seconds = prependByZero(date.getSeconds())
  const millis = prependByZero(date.getMilliseconds(), 2)
  return `${hours}:${minutes}:${seconds}.${millis}`
}

export const log = (...args) => {
  console.info(`[${getCurrentTime()}] `, ...args)
}

export const logError = error => {
  console.error = error
}
