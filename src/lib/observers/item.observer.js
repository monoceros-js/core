export const itemObserver = (options, instances, cc, items) => {
  const handleObservation = item => {
    const prefix = options.selectorPrefix
    const index = parseInt(item.target.dataset[cc(prefix + 'index')])
    const itemInstance = instances[index]

    if (!itemInstance) return

    const isIntersecting = item.isIntersecting && !itemInstance.isIntersecting
    const isNotIntersecting =
      !item.isIntersecting && itemInstance.isIntersecting

    const intersectionClass = 'in-' + options.base.viewport

    if (isIntersecting) {
      itemInstance.isIntersecting = true
      item.target.classList.add(intersectionClass)
    } else if (isNotIntersecting) {
      itemInstance.isIntersecting = false
      item.target.classList.remove(intersectionClass)
    }
  }
  items.forEach(handleObservation)
}
