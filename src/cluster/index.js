import Cluster from '@monoceros/cluster'

import defaults from '../config'
import { version } from '../../package.json'

import { createOptions } from '../utils/options'
import { createObserver } from '../utils/observer'
import { createMonocerosInstance } from '../utils/monoceros'
import { log, logError } from '../utils/log'
import { isArray } from '../utils/value'

import { MonocerosCoreError, MonocerosError } from '../errors'

const cluster = new Cluster()

cluster.register('defaultOptions', defaults)
cluster.register('version', version)
cluster.register('createOptions', createOptions)
cluster.register('createObserver', createObserver)
cluster.register('createMonocerosInstance', createMonocerosInstance)
cluster.register('log', log)
cluster.register('logError', logError)
cluster.register('isArray', isArray)
cluster.register('MonocerosError', MonocerosError)
cluster.register('MonocerosCoreError', MonocerosCoreError)

export default cluster
