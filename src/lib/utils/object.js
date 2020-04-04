import { isObject, isArray } from './value.js'

export const merge = (...objects) => {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (isArray(pVal) && isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = merge(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export default merge
