export const sectionObserver = (options, instances, sections) => {
  const handleObservation = section => {
    const index = parseInt(section.target.dataset.monocerosIndex)
    const sectionInstance = instances[index]

    if (!sectionInstance) return

    const isIntersecting =
      section.isIntersecting && !sectionInstance.isIntersecting
    const isNotIntersecting =
      !section.isIntersecting && sectionInstance.isIntersecting
    const intersectionClass = 'in-' + options.base.viewport

    if (isIntersecting) {
      sectionInstance.children.forEach(childInstance => {
        sectionInstance.observers.viewport.observe(childInstance.el)
        sectionInstance.observers.section.observe(childInstance.el)
      })
      sectionInstance.isIntersecting = true
      section.target.classList.add(intersectionClass)
    } else if (isNotIntersecting) {
      sectionInstance.observers.viewport.disconnect()
      sectionInstance.observers.section.disconnect()
      sectionInstance.children.forEach(childInstance => {
        if (childInstance.el.classList.contains(intersectionClass)) {
          childInstance.el.classList.remove(intersectionClass)
        }
      })
      sectionInstance.isIntersecting = false
      section.target.classList.remove(intersectionClass)
    }
  }
  sections.forEach(handleObservation)
}
