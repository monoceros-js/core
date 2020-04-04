import { merge } from './object.js'

export const createSelector = (_base, _selector) => {
  return `[data-${_base}${_selector}]`
}

export const createClassName = (_prefix, _className) => {
  return `${_prefix}${_className}`
}

export const createOptions = (...optionObjects) => {
  const options = merge(...optionObjects)

  if (options.base) {
    if (!options.selectors) {
      options.selectors = {}
    }
    if (!options.classNames) {
      options.classNames = {}
    }
    for (const [key, value] of Object.entries(options.base)) {
      options.selectors[key] = createSelector(options.selectorPrefix, value)
      options.classNames[key] = createClassName(options.classNamePrefix, value)
    }
  }

  return options
}

export default createOptions
