import supercluster from './cluster'

const Monoceros = function (cluster) {
  this.name = '@monoceros/core'
  this.cluster = cluster
  this.plugins = []
  this.uninitialized_plugins = []
  this.instances = []
  this.version = this.cluster.resolve('version') || null
  this.log = this.cluster.resolve('log')
  this.defaults = this.cluster.resolve('defaultOptions')
  this.options = this.cluster.resolve('createOptions', this.defaults)()
  this.MonocerosCoreError = this.cluster.resolve('MonocerosCoreError')

  this.set = options => {
    if (options.debug) this.log('SETTING OPTIONS')
    this.options = this.cluster.resolve('createOptions')(this.options, options)
    return this
  }

  this.use = (entries, options) => {
    if (this.options.debug) this.log('USING PLUGIN')
    if (!entries) {
      if (this.options.debug)
        this.log(
          'No plugins found to be initialized. Make sure to pass a plugin function to .use()'
        )
      return
    }
    const isArray = this.cluster.resolve('isArray')
    const plugins = []
    if (isArray(entries)) {
      entries.forEach(entry => {
        if (isArray(entry)) {
          return plugins.push(entry)
        }
        plugins.push([entry, {}])
      })
    } else {
      const plugin = entries
      plugins.push([plugin, options])
    }
    this.uninitialized_plugins = this.uninitialized_plugins.concat(plugins)

    return this
  }

  this.init = function () {
    if (this.options.debug) this.log('STARTING INIT')
    this.cluster.register('options', this.options)

    const createObserver = this.cluster.resolve('createObserver')

    const initViewport = () => {
      if (this.options.debug) this.log('-- init viewport')
      this.dom = {
        html: document.documentElement,
        body: document.body,
        viewport: document.querySelector(this.options.selectors.viewport),
      }

      if (!this.dom.viewport) {
        throw new this.MonocerosCoreError(
          `Missing ${this.options.selectors.viewport} element. Canceling Monoceros initialization.`
        )
      }

      if (this.dom.viewport.nodeType) {
        this.dom.viewport.style = `
          position: fixed;
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          overflow-y: scroll;
        `
      }

      this.cluster.register('dom', this.dom)
    }

    const initContainers = () => {
      if (this.options.debug) this.log('-- init containers')
      const containerObserver = createObserver({
        root: this.dom.viewport,
        className: this.options.classNames.in_viewport,
      })
      const containers = document.querySelectorAll(
        this.options.selectors.container
      )
      if (containers.length === 0) {
        if (this.options.debug)
          this.log(
            `No ${this.options.selectors.container} elements found. If you are expecting containers, check your html for naming issues.`
          )
        return
      }
      containers.forEach(container => {
        container.style = `
          overflow: hidden;
          position: relative;
        `
        containerObserver.observe(container)
      })
    }

    const initInstances = () => {
      if (this.options.debug) this.log('-- init instances')
      const createInstance = this.cluster.resolve('createMonocerosInstance')
      const elements = [
        ...document.querySelectorAll(this.options.selectors.item),
      ]
      if (elements.length === 0) {
        if (options.debug)
          this.log(
            `No ${this.options.selectors.item} elements found. If you are expecting them to be found, check your html elements for naming issues.`
          )
        return
      }

      elements.forEach(el => {
        this.instances.push(createInstance(el))
      })

      const itemObserver = createObserver({
        root: this.dom.viewport,
        className: this.options.classNames.in_viewport,
      })

      this.instances.forEach(instance => {
        const el = instance.el
        itemObserver.observe(el)
        const container = el.closest(this.options.selectors.container)
        if (container) {
          const itemContainerObserver = createObserver({
            root: container,
            className: this.options.classNames.in_container,
          })
          itemContainerObserver.observe(el)
        } else {
          el.classList.add(this.options.classNamePrefix + 'no-container-parent')
        }
      })
    }

    const initPlugins = () => {
      if (this.options.debug) this.log('-- init plugins')
      if (this.uninitialized_plugins.length === 0) {
        if (this.options.debug) this.log('No plugins found.')
        return
      }
      this.plugins = this.uninitialized_plugins.map(
        ([Plugin, options]) => new Plugin(this.cluster, options)
      )
    }

    initViewport()
    initContainers()
    initInstances()
    initPlugins()

    if (this.options.debug) this.log('INIT FINISHED')

    return {
      name: this.name,
      version: this.version,
      plugins: this.plugins,
      options: this.options,
      cluster: this.cluster,
    }
  }
}

export default new Monoceros(supercluster)
