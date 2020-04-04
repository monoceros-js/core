import Cluster from '@monoceros/cluster'

import defaults from '../config'
import { version } from '../../package.json'

import { createOptions } from '../utils/options'
import { createObserver } from '../utils/observer'
import { createMonocerosInstance } from '../utils/monoceros'
import { log, logError } from '../utils/log'
import { isArray } from '../utils/value'

import {
  itemObserverCallback,
  sectionObserverCallback,
  childObserverCallback,
  childParentObserverCallback,
} from '../observers'

import { MonocerosCoreError, MonocerosError } from '../errors'

const cluster = new Cluster()

cluster.register('options.default', defaults)
cluster.register('options.version', version)
cluster.register('options.create', createOptions)

cluster.register('monoceros.createInstance', createMonocerosInstance)

cluster.register('utils.log', log)
cluster.register('utils.logError', logError)
cluster.register('utils.isArray', isArray)
cluster.register('errors.MonocerosError', MonocerosError)
cluster.register('errors.MonocerosCoreError', MonocerosCoreError)

cluster.register('observer.create', createObserver)

cluster.register('observer.itemObserver', itemObserverCallback, {
  dependencies: ['options', 'instances'],
})
cluster.register('observer.sectionObserver', sectionObserverCallback, {
  dependencies: ['options', 'instances'],
})
cluster.register('observer.childObserver', childObserverCallback, {
  dependencies: ['options', 'instances'],
})
cluster.register('observer.childParentObserver', childParentObserverCallback, {
  dependencies: ['instances'],
})

export default cluster
