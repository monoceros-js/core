export const isObject = value =>
  value && typeof value === 'object' && value.constructor === Object

export const isArray = v => v && Array.isArray(v)
