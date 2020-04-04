import supercluster from './cluster'

const Monoceros = function (cluster) {
  this.name = '@monoceros/core'
  this.cluster = cluster
  this.plugins = []
  this.uninitialized_plugins = []
  this.instances = []
  this.dom = {
    html: document.documentElement,
    body: document.body,
    viewport: null,
  }
  this.version = this.cluster.resolve('options.version') || null
  this.log = this.cluster.resolve('utils.log')
  this.options = this.cluster.resolve('options.create')(
    this.cluster.resolve('options.default')
  )
  this.MonocerosCoreError = this.cluster.resolve('errors.MonocerosCoreError')
  this.__set_called = false
  this.__use_called = false
  this.__init_called = false

  this.set = options => {
    if (this.__use_called || this.__init_called) {
      throw new this.MonocerosCoreError(
        '.set() should be called before calling .use() and/or .init()'
      )
    }
    if (options.debug) this.log('SETTING OPTIONS')
    this.__set_called = true
    this.options = this.cluster.resolve('options.create')(this.options, options)
    return this
  }

  this.use = (entries, options) => {
    if (this.__init_called) {
      throw new this.MonocerosCoreError(
        '.use() should be called before calling .init()'
      )
    }
    if (this.options.debug) this.log('USING PLUGIN')
    this.__use_called = true
    if (!entries) {
      if (this.options.debug)
        this.log(
          'No plugins found to be initialized. Make sure to pass a plugin function to .use()'
        )
      return
    }
    const isArray = this.cluster.resolve('utils.isArray')
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
      plugins.push([plugin, options || {}])
    }
    this.uninitialized_plugins = this.uninitialized_plugins.concat(plugins)

    return this
  }

  this.init = function () {
    this.__init_called = true
    if (this.options.debug) this.log('STARTING INIT')

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
    }

    this.initItemInstances = () => {
      const createInstance = this.cluster.resolve('monoceros.createInstance')

      const items = [...document.querySelectorAll(this.options.selectors.item)]

      const rogueInstances = []
      const childInstances = []

      items.forEach(el => {
        const parent = el.closest(this.options.selectors.section)
        if (parent) {
          childInstances.push(
            createInstance(this.options.base.item, el, parent)
          )
          return
        }
        rogueInstances.push(
          createInstance(this.options.base.rogue, el, this.dom.viewport)
        )
      })

      rogueInstances.forEach(instance => {
        instance.el.classList.add(this.options.classNames.rogue)
      })

      return [childInstances, rogueInstances]
    }

    this.initSectionInstances = childInstances => {
      const createInstance = this.cluster.resolve('monoceros.createInstance')

      const sections = [
        ...document.querySelectorAll(this.options.selectors.section),
      ]

      const sectionInstances = []

      sections.forEach(section => {
        const children = childInstances.filter(
          instance => instance.parent.element === section
        )

        sectionInstances.push(
          createInstance(
            this.options.base.section,
            section,
            this.dom.viewport,
            children
          )
        )

        section.style = `
          overflow: hidden;
          position: relative;
        `
      })

      return sectionInstances
    }

    const initInstances = () => {
      if (this.options.debug) this.log('-- init instances')

      if (this.options.debug) this.log('---- init item instances')
      const [childInstances, rogueInstances] = this.initItemInstances()

      if (this.options.debug) this.log('---- init section instances')
      const sectionInstances = this.initSectionInstances(childInstances)

      this.instances = [...sectionInstances, ...rogueInstances]

      this.instances.forEach((instance, index) => {
        this.instances[index].index = index
        instance.el.dataset.monocerosIndex = index

        if (instance.type === this.options.base.section) {
          instance.children.forEach((child, childIndex) => {
            this.instances[index].children[childIndex].parent.index = index
            this.instances[index].children[childIndex].index = childIndex
            child.el.dataset.monocerosParent = index
            child.el.dataset.monocerosIndex = childIndex
          })
        }
      })
    }

    const initCluster = () => {
      if (this.options.debug) this.log('-- init cluster registrations')
      this.cluster.register('instances', this.instances)
      this.cluster.register('options', this.options)
      this.cluster.register('dom', this.dom)
    }

    const initObservers = () => {
      const create = this.cluster.resolve('observer.create')

      const itemObserverCallback = this.cluster.resolve('observer.itemObserver')
      const sectionObserverCallback = this.cluster.resolve(
        'observer.sectionObserver'
      )
      const childObserverCallback = this.cluster.resolve(
        'observer.childObserver'
      )
      const childParentObserverCallback = this.cluster.resolve(
        'observer.childParentObserver'
      )

      const itemObserver = create(
        { root: this.dom.viewport },
        itemObserverCallback
      )

      const sectionObserver = create(
        { root: this.dom.viewport },
        sectionObserverCallback
      )

      const childObserver = create(
        { root: this.dom.viewport },
        childObserverCallback
      )

      this.instances
        .filter(i => i.type === this.options.base.rogue)
        .forEach(rogueInstance => itemObserver.observe(rogueInstance.el))

      this.instances
        .filter(i => i.type === this.options.base.section)
        .forEach(sectionInstance => {
          const childParentObserver = create(
            { root: sectionInstance.el },
            childParentObserverCallback
          )
          sectionInstance.observers.viewport = childObserver
          sectionInstance.observers.section = childParentObserver
          sectionObserver.observe(sectionInstance.el)
        })
    }

    const initPlugins = () => {
      if (this.options.debug) this.log('-- init plugins')
      if (this.uninitialized_plugins.length === 0) {
        if (this.options.debug) this.log('No plugins found.')
        return
      }
      this.plugins = this.uninitialized_plugins.map(([Plugin, options]) => {
        const plugin = new Plugin(this.cluster, options)
        plugin.init()
        if (this.options.debug)
          this.log(`-- initialized plugin "${plugin.name}"`)
        return plugin
      })
    }

    initViewport()
    initInstances()
    initCluster()
    initObservers()
    initPlugins()

    if (this.options.debug) this.log('INIT FINISHED')

    return {
      name: this.name,
      version: this.version,
      plugins: this.plugins,
      options: this.options,
      instances: this.instances,
    }
  }
}

export default new Monoceros(supercluster)
