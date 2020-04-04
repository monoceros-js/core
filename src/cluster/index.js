import Cluster from '@monoceros/cluster'

import defaults from '../config'
import { version } from '../../package.json'

import { createOptions } from '../lib/utils/options'
import { createObserver } from '../lib/utils/observer'
import { createMonocerosInstance } from '../lib/utils/monoceros'
import { log, logError } from '../lib/utils/log'
import { isArray } from '../lib/utils/value'
import { camelCasify } from '../lib/utils/string'

import {
  itemObserverCallback,
  sectionObserverCallback,
  childObserverCallback,
  childParentObserverCallback,
} from '../lib/observers'

import { MonocerosCoreError, MonocerosError } from '../errors'

const cluster = new Cluster()

cluster.register('options.default', defaults)
cluster.register('options.version', version)
cluster.register('options.create', createOptions)

cluster.register('monoceros.createInstance', createMonocerosInstance)

cluster.register('utils.log', log)
cluster.register('utils.logError', logError)
cluster.register('utils.isArray', isArray)
cluster.register('utils.camelCasify', camelCasify)

cluster.register('errors.MonocerosError', MonocerosError)
cluster.register('errors.MonocerosCoreError', MonocerosCoreError)

cluster.register('observer.create', createObserver)
cluster.register('observer.itemObserver', itemObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify'],
})
cluster.register('observer.sectionObserver', sectionObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify'],
})
cluster.register('observer.childObserver', childObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify'],
})
cluster.register('observer.childParentObserver', childParentObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify'],
})

export default cluster
