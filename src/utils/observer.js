export const createObserver = ({ root, threshold, rootMargin }, callback) => {
  threshold = threshold || 0
  rootMargin = rootMargin || '0px'
  return new IntersectionObserver(
    entries => {
      if (!callback) return
      callback(entries)
    },
    { root, threshold, rootMargin }
  )
}

export default createObserver
