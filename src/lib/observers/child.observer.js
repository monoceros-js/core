export const childObserver = (options, instances, cc, children) => {
  const handleObservation = child => {
    const prefix = options.selectorPrefix
    const index = parseInt(child.target.dataset[cc(prefix + 'index')])
    const parentIndex = parseInt(child.target.dataset[cc(prefix + 'parent')])

    const childInstance = instances[parentIndex].children[index]

    const isIntersecting =
      child.isIntersecting && childInstance.isIntersectingParent

    const isNotIntersecting =
      !child.isIntersecting || !childInstance.isIntersectingParent

    const intersectionClass = 'in-' + options.base.viewport

    const hasIntersectionClass = child.target.classList.contains(
      intersectionClass
    )

    if (isIntersecting && !childInstance.isIntersecting) {
      childInstance.isIntersecting = true
      child.target.classList.add(intersectionClass)
    }
    if (isNotIntersecting && childInstance.isIntersecting) {
      childInstance.isIntersecting = false
      child.target.classList.remove(intersectionClass)
    }

    if (childInstance.isIntersecting && !hasIntersectionClass) {
      child.target.classList.add(intersectionClass)
    }
    if (!childInstance.isIntersecting && hasIntersectionClass) {
      child.target.classList.remove(intersectionClass)
    }
  }
  children.forEach(handleObservation)
}

export const childParentObserver = (options, instances, cc, children) => {
  const handleObservation = child => {
    const prefix = options.selectorPrefix
    const index = parseInt(child.target.dataset[cc(prefix + 'index')])
    const parentIndex = parseInt(child.target.dataset[cc(prefix + 'parent')])

    const parentInstance = instances[parentIndex]
    const childInstance = parentInstance.children[index]

    const intersectingParent =
      child.isIntersecting && !childInstance.isIntersectingParent
    const notIntersectingParent =
      !child.isIntersecting && childInstance.isIntersectingParent

    if (intersectingParent) {
      childInstance.isIntersectingParent = true
    }
    if (notIntersectingParent) {
      childInstance.isIntersectingParent = false
    }
  }
  children.forEach(handleObservation)
}
