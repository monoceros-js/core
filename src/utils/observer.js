export const createObserver = ({
  root,
  className,
  threshold,
  rootMargin,
  cb,
}) => {
  threshold = threshold || 0
  rootMargin = rootMargin || '0px'
  return new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        const { isIntersecting, target } = entry
        if (isIntersecting) {
          if (!target.classList.contains(className)) {
            target.classList.add(className)
          }
        } else {
          if (target.classList.contains(className)) {
            target.classList.remove(className)
          }
        }
        if (cb) cb(entry, index)
      })
    },
    { root, threshold, rootMargin }
  )
}

export default createObserver
