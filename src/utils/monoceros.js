export const createMonocerosInstance = (type, el, parentElement, children) => ({
  type,
  el,
  isIntersecting: false,
  isIntersectingParent: null,
  index: null,
  parent: {
    el: parentElement,
    index: null,
  },
  children: children || [],
  observers: {},
  coordinates: {
    x: {
      start: 0,
      current: 0,
      end: 0,
    },
    y: {
      start: 0,
      current: 0,
      end: 0,
    },
  },
})
