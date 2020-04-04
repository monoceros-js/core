function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var isInfinite = function isInfinite(cluster) {
  return cluster === Infinity;
};
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
var isArray = function isArray(value) {
  return Array.isArray(value);
};

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct$1(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct$1 = Reflect.construct;
  } else {
    _construct$1 = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf$1(instance, Class.prototype);
      return instance;
    };
  }

  return _construct$1.apply(null, arguments);
}

function _isNativeFunction$1(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper$1 = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction$1(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct$1(Class, arguments, _getPrototypeOf$1(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$1(Wrapper, Class);
  };

  return _wrapNativeSuper$1(Class);
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  return function () {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (_isNativeReflectConstruct$1()) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

var MonocerosClusterError = /*#__PURE__*/function (_Error) {
  _inherits$1(MonocerosClusterError, _Error);

  var _super = _createSuper$1(MonocerosClusterError);

  function MonocerosClusterError(message) {
    var _this;

    _classCallCheck$1(this, MonocerosClusterError);

    _this = _super.call(this);
    _this.name = _this.constructor.name;
    _this.message = message;
    return _this;
  }

  return MonocerosClusterError;
}( /*#__PURE__*/_wrapNativeSuper$1(Error));

function Cluster(parent) {
  this.parent = parent || Infinity;
  this.entities = {};

  this.register = function (name, entity, options) {
    if (!name) throw new MonocerosClusterError('Entity name must be provided');
    if (!entity) throw new MonocerosClusterError("Could not find entity trying to be registered as ".concat(name));

    if (options) {
      if (isFunction(options)) {
        options = {
          type: options
        };
      }

      if (isArray(options)) {
        options = {
          dependencies: options
        };
      }
    }

    options = options || {};

    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    this.entities[name] = {
      $uninitialized: entity,
      $type: options.type || Cluster.Body,
      $dependencies: options.dependencies || entity.$dependencies || [],
      $args: args && args.length > 0 ? args : []
    };
  };

  this.createCluster = function () {
    return new Cluster(this);
  };

  this.resolve = function (name) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (!name) {
      throw new MonocerosClusterError('Resolve requires the name of an entity to resolve');
    }

    args = args || [];

    if (this.entities.hasOwnProperty(name)) {
      return this.applyEntityType(name, args).resolve();
    }

    if (!isInfinite(this.parent) && this.parent.entities.hasOwnProperty(name)) {
      return this.parent.applyEntityType(name, args).resolve();
    }

    throw new MonocerosClusterError("Could not resolve entity named \"".concat(name, "\""));
  };

  this.applyEntityType = function (name, args) {
    var entity = this.entities[name];
    var _entity = entity,
        $uninitialized = _entity.$uninitialized,
        $type = _entity.$type,
        $dependencies = _entity.$dependencies,
        $args = _entity.$args;
    if (!$uninitialized) return entity;
    entity = this.resolveDependencies($uninitialized, $dependencies, $args.concat(args));
    this.entities[name] = new $type(entity);
    return this.entities[name];
  };

  this.resolveDependencies = function (entity, dependencies, args) {
    var _this = this;

    if (!isFunction(entity)) return entity;
    if (dependencies.length === 0 && args.length === 0) return entity;
    var deps = [];

    if (dependencies.length > 0) {
      dependencies.forEach(function (dep) {
        deps.push(_this.resolve(dep));
      });
    }

    deps.unshift({});
    return entity.bind.apply(entity, deps.concat(args));
  };
}

Cluster.Body = function (entity) {
  this.resolve = function () {
    return entity;
  };
};

Cluster.Singleton = function (entity) {
  var instance;

  this.resolve = function () {
    if (!instance) instance = entity();
    return instance;
  };
};

Cluster.Instance = function (entity) {
  this.resolve = function () {
    return new entity();
  };
};

var defaults = {
  classNamePrefix: 'm-',
  selectorPrefix: 'monoceros-',
  debug: false,
  base: {
    viewport: 'viewport',
    section: 'section',
    item: 'item',
    rogue: 'rogue'
  },
  rootMargin: {
    parent: '0px',
    child: '0px'
  }
};

var version = "1.0.6";

var isObject = function isObject(value) {
  return value && _typeof(value) === 'object' && value.constructor === Object;
};
var isArray$1 = function isArray(v) {
  return v && Array.isArray(v);
};

var merge = function merge() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return objects.reduce(function (prev, obj) {
    Object.keys(obj).forEach(function (key) {
      var pVal = prev[key];
      var oVal = obj[key];

      if (isArray$1(pVal) && isArray$1(oVal)) {
        prev[key] = pVal.concat.apply(pVal, _toConsumableArray(oVal));
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = merge(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
};

var createSelector = function createSelector(_base, _selector) {
  return "[data-".concat(_base).concat(_selector, "]");
};
var createClassName = function createClassName(_prefix, _className) {
  return "".concat(_prefix).concat(_className);
};
var createOptions = function createOptions() {
  var options = merge.apply(void 0, arguments);

  if (options.base) {
    if (!options.selectors) {
      options.selectors = {};
    }

    if (!options.classNames) {
      options.classNames = {};
    }

    for (var _i = 0, _Object$entries = Object.entries(options.base); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      options.selectors[key] = createSelector(options.selectorPrefix, value);
      options.classNames[key] = createClassName(options.classNamePrefix, value);
    }
  }

  return options;
};

var createObserver = function createObserver(_ref, callback) {
  var root = _ref.root,
      threshold = _ref.threshold,
      rootMargin = _ref.rootMargin;
  threshold = threshold || 0;
  rootMargin = rootMargin || '0px';
  return new IntersectionObserver(function (entries) {
    if (!callback) return;
    callback(entries);
  }, {
    root: root,
    threshold: threshold,
    rootMargin: rootMargin
  });
};

var createMonocerosInstance = function createMonocerosInstance(type, el, parentElement, children) {
  return {
    type: type,
    el: el,
    isIntersecting: false,
    isIntersectingParent: null,
    index: null,
    parent: {
      el: parentElement,
      index: null
    },
    children: children || [],
    observers: {},
    coordinates: {
      x: {
        start: 0,
        current: 0,
        end: 0
      },
      y: {
        start: 0,
        current: 0,
        end: 0
      }
    }
  };
};

var prependByZero = function prependByZero(val) {
  var magnitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  for (var i = 1; i < magnitude + 1; i++) {
    var threshold = Math.pow(10, i);
    var zeros = Array(i + 1 - magnitude).fill('0').join('');
    if (val < threshold) return zeros + val;
  }

  return val;
};

var getCurrentTime = function getCurrentTime() {
  var date = new Date();
  var hours = prependByZero(date.getHours());
  var minutes = prependByZero(date.getMinutes());
  var seconds = prependByZero(date.getSeconds());
  var millis = prependByZero(date.getMilliseconds(), 2);
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(millis);
};

var log = function log() {
  var _console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (_console = console).info.apply(_console, ["[".concat(getCurrentTime(), "] ")].concat(args));
};
var logError = function logError(error) {
  console.error = error;
};

var camelCasify = function camelCasify(string) {
  return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) {
    return chr.toUpperCase();
  });
};

var itemObserver = function itemObserver(options, instances, cc, items) {
  var handleObservation = function handleObservation(item) {
    var prefix = options.selectorPrefix;
    var index = parseInt(item.target.dataset[cc(prefix + 'index')]);
    var itemInstance = instances[index];
    if (!itemInstance) return;
    var isIntersecting = item.isIntersecting && !itemInstance.isIntersecting;
    var isNotIntersecting = !item.isIntersecting && itemInstance.isIntersecting;
    var intersectionClass = 'in-' + options.base.viewport;

    if (isIntersecting) {
      itemInstance.isIntersecting = true;
      item.target.classList.add(intersectionClass);
    } else if (isNotIntersecting) {
      itemInstance.isIntersecting = false;
      item.target.classList.remove(intersectionClass);
    }
  };

  items.forEach(handleObservation);
};

var sectionObserver = function sectionObserver(options, instances, cc, sections) {
  var handleObservation = function handleObservation(section) {
    var prefix = options.selectorPrefix;
    var index = parseInt(section.target.dataset[cc(prefix + 'index')]);
    var sectionInstance = instances[index];
    if (!sectionInstance) return;
    var isIntersecting = section.isIntersecting && !sectionInstance.isIntersecting;
    var isNotIntersecting = !section.isIntersecting && sectionInstance.isIntersecting;
    var intersectionClass = 'in-' + options.base.viewport;

    if (isIntersecting) {
      sectionInstance.children.forEach(function (childInstance) {
        sectionInstance.observers.viewport.observe(childInstance.el);
        sectionInstance.observers.section.observe(childInstance.el);
      });
      sectionInstance.isIntersecting = true;
      section.target.classList.add(intersectionClass);
    } else if (isNotIntersecting) {
      sectionInstance.observers.viewport.disconnect();
      sectionInstance.observers.section.disconnect();
      sectionInstance.children.forEach(function (childInstance) {
        if (childInstance.el.classList.contains(intersectionClass)) {
          childInstance.el.classList.remove(intersectionClass);
        }
      });
      sectionInstance.isIntersecting = false;
      section.target.classList.remove(intersectionClass);
    }
  };

  sections.forEach(handleObservation);
};

var childObserver = function childObserver(options, instances, cc, children) {
  var handleObservation = function handleObservation(child) {
    var prefix = options.selectorPrefix;
    var index = parseInt(child.target.dataset[cc(prefix + 'index')]);
    var parentIndex = parseInt(child.target.dataset[cc(prefix + 'parent')]);
    var childInstance = instances[parentIndex].children[index];
    var isIntersecting = child.isIntersecting && childInstance.isIntersectingParent;
    var isNotIntersecting = !child.isIntersecting || !childInstance.isIntersectingParent;
    var intersectionClass = 'in-' + options.base.viewport;
    var hasIntersectionClass = child.target.classList.contains(intersectionClass);

    if (isIntersecting && !childInstance.isIntersecting) {
      childInstance.isIntersecting = true;
      child.target.classList.add(intersectionClass);
    }

    if (isNotIntersecting && childInstance.isIntersecting) {
      childInstance.isIntersecting = false;
      child.target.classList.remove(intersectionClass);
    }

    if (childInstance.isIntersecting && !hasIntersectionClass) {
      child.target.classList.add(intersectionClass);
    }

    if (!childInstance.isIntersecting && hasIntersectionClass) {
      child.target.classList.remove(intersectionClass);
    }
  };

  children.forEach(handleObservation);
};
var childParentObserver = function childParentObserver(options, instances, cc, children) {
  var handleObservation = function handleObservation(child) {
    var prefix = options.selectorPrefix;
    var index = parseInt(child.target.dataset[cc(prefix + 'index')]);
    var parentIndex = parseInt(child.target.dataset[cc(prefix + 'parent')]);
    var parentInstance = instances[parentIndex];
    var childInstance = parentInstance.children[index];
    var intersectingParent = child.isIntersecting && !childInstance.isIntersectingParent;
    var notIntersectingParent = !child.isIntersecting && childInstance.isIntersectingParent;

    if (intersectingParent) {
      childInstance.isIntersectingParent = true;
    }

    if (notIntersectingParent) {
      childInstance.isIntersectingParent = false;
    }
  };

  children.forEach(handleObservation);
};

var itemObserverCallback = itemObserver;
var sectionObserverCallback = sectionObserver;
var childObserverCallback = childObserver;
var childParentObserverCallback = childParentObserver;

var MonocerosError = /*#__PURE__*/function (_Error) {
  _inherits(MonocerosError, _Error);

  var _super = _createSuper(MonocerosError);

  function MonocerosError(message) {
    var _this;

    _classCallCheck(this, MonocerosError);

    _this = _super.call(this);
    _this.name = _this.constructor.name;
    _this.message = message;
    return _this;
  }

  return MonocerosError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var MonocerosCoreError = /*#__PURE__*/function (_MonocerosError) {
  _inherits(MonocerosCoreError, _MonocerosError);

  var _super2 = _createSuper(MonocerosCoreError);

  function MonocerosCoreError(message) {
    _classCallCheck(this, MonocerosCoreError);

    return _super2.call(this, message);
  }

  return MonocerosCoreError;
}(MonocerosError);

var cluster = new Cluster();
cluster.register('options.default', defaults);
cluster.register('options.version', version);
cluster.register('options.create', createOptions);
cluster.register('monoceros.createInstance', createMonocerosInstance);
cluster.register('utils.log', log);
cluster.register('utils.logError', logError);
cluster.register('utils.isArray', isArray$1);
cluster.register('utils.camelCasify', camelCasify);
cluster.register('errors.MonocerosError', MonocerosError);
cluster.register('errors.MonocerosCoreError', MonocerosCoreError);
cluster.register('observer.create', createObserver);
cluster.register('observer.itemObserver', itemObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify']
});
cluster.register('observer.sectionObserver', sectionObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify']
});
cluster.register('observer.childObserver', childObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify']
});
cluster.register('observer.childParentObserver', childParentObserverCallback, {
  dependencies: ['options', 'instances', 'utils.camelCasify']
});

var Monoceros = function Monoceros(cluster) {
  var _this = this;

  this.name = '@monoceros/core';
  this.cluster = cluster;
  this.plugins = [];
  this.uninitialized_plugins = [];
  this.instances = [];
  this.dom = {
    html: document.documentElement,
    body: document.body,
    viewport: null
  };
  this.version = this.cluster.resolve('options.version') || null;
  this.log = this.cluster.resolve('utils.log');
  this.options = this.cluster.resolve('options.create')(this.cluster.resolve('options.default'));
  this.MonocerosCoreError = this.cluster.resolve('errors.MonocerosCoreError');
  this.__set_called = false;
  this.__use_called = false;
  this.__init_called = false;

  this.set = function (options) {
    if (_this.__use_called || _this.__init_called) {
      throw new _this.MonocerosCoreError('.set() should be called before calling .use() and/or .init()');
    }

    if (options.debug) _this.log('SETTING OPTIONS');
    _this.__set_called = true;
    _this.options = _this.cluster.resolve('options.create')(_this.options, options);
    return _this;
  };

  this.use = function (entries, options) {
    if (_this.__init_called) {
      throw new _this.MonocerosCoreError('.use() should be called before calling .init()');
    }

    if (_this.options.debug) _this.log('USING PLUGIN');
    _this.__use_called = true;

    if (!entries) {
      if (_this.options.debug) _this.log('No plugins found to be initialized. Make sure to pass a plugin function to .use()');
      return;
    }

    var isArray = _this.cluster.resolve('utils.isArray');

    var plugins = [];

    if (isArray(entries)) {
      entries.forEach(function (entry) {
        if (isArray(entry)) {
          return plugins.push(entry);
        }

        plugins.push([entry, {}]);
      });
    } else {
      var plugin = entries;
      plugins.push([plugin, options || {}]);
    }

    _this.uninitialized_plugins = _this.uninitialized_plugins.concat(plugins);
    return _this;
  };

  this.init = function () {
    var _this2 = this;

    this.__init_called = true;
    if (this.options.debug) this.log('STARTING INIT');

    var initViewport = function initViewport() {
      if (_this2.options.debug) _this2.log('-- init viewport');
      _this2.dom = {
        html: document.documentElement,
        body: document.body,
        viewport: document.querySelector(_this2.options.selectors.viewport)
      };

      if (!_this2.dom.viewport) {
        throw new _this2.MonocerosCoreError("Missing ".concat(_this2.options.selectors.viewport, " element. Canceling Monoceros initialization."));
      }

      if (_this2.dom.viewport.nodeType) {
        _this2.dom.viewport.style = "\n          position: fixed;\n          height: 100vh;\n          width: 100vw;\n          overflow-x: hidden;\n          overflow-y: scroll;\n        ";
      }
    };

    this.initItemInstances = function () {
      var createInstance = _this2.cluster.resolve('monoceros.createInstance');

      var items = _toConsumableArray(document.querySelectorAll(_this2.options.selectors.item));

      var rogueInstances = [];
      var childInstances = [];
      items.forEach(function (el) {
        var parent = el.closest(_this2.options.selectors.section);

        if (parent) {
          childInstances.push(createInstance(_this2.options.base.item, el, parent));
          return;
        }

        rogueInstances.push(createInstance(_this2.options.base.rogue, el, _this2.dom.viewport));
      });
      rogueInstances.forEach(function (instance) {
        instance.el.classList.add(_this2.options.classNames.rogue);
      });
      return [childInstances, rogueInstances];
    };

    this.initSectionInstances = function (childInstances) {
      var createInstance = _this2.cluster.resolve('monoceros.createInstance');

      var sections = _toConsumableArray(document.querySelectorAll(_this2.options.selectors.section));

      var sectionInstances = [];
      sections.forEach(function (section) {
        var children = childInstances.filter(function (instance) {
          return instance.parent.el === section;
        });
        sectionInstances.push(createInstance(_this2.options.base.section, section, _this2.dom.viewport, children));
        section.style = "\n          overflow: hidden;\n          position: relative;\n        ";
      });
      return sectionInstances;
    };

    var initInstances = function initInstances() {
      if (_this2.options.debug) _this2.log('-- init instances');
      if (_this2.options.debug) _this2.log('---- init item instances');

      var _this2$initItemInstan = _this2.initItemInstances(),
          _this2$initItemInstan2 = _slicedToArray(_this2$initItemInstan, 2),
          childInstances = _this2$initItemInstan2[0],
          rogueInstances = _this2$initItemInstan2[1];

      if (_this2.options.debug) _this2.log('---- init section instances');

      var sectionInstances = _this2.initSectionInstances(childInstances);

      _this2.instances = [].concat(_toConsumableArray(sectionInstances), _toConsumableArray(rogueInstances));

      var cc = _this2.cluster.resolve('utils.camelCasify');

      var prefix = _this2.options.selectorPrefix;

      _this2.instances.forEach(function (instance, index) {
        _this2.instances[index].index = index;
        instance.el.dataset[cc(prefix + 'index')] = index;

        if (instance.type === _this2.options.base.section) {
          instance.children.forEach(function (child, childIndex) {
            _this2.instances[index].children[childIndex].parent.index = index;
            _this2.instances[index].children[childIndex].index = childIndex;
            child.el.dataset[cc(prefix + 'parent')] = index;
            child.el.dataset[cc(prefix + 'index')] = childIndex;
          });
        }
      });
    };

    var initCluster = function initCluster() {
      if (_this2.options.debug) _this2.log('-- init cluster registrations');

      _this2.cluster.register('instances', _this2.instances);

      _this2.cluster.register('options', _this2.options);

      _this2.cluster.register('dom', _this2.dom);
    };

    var initObservers = function initObservers() {
      var create = _this2.cluster.resolve('observer.create');

      var itemObserverCallback = _this2.cluster.resolve('observer.itemObserver');

      var sectionObserverCallback = _this2.cluster.resolve('observer.sectionObserver');

      var childObserverCallback = _this2.cluster.resolve('observer.childObserver');

      var childParentObserverCallback = _this2.cluster.resolve('observer.childParentObserver');

      var itemObserver = create({
        root: _this2.dom.viewport,
        rootMargin: _this2.options.rootMargin.parent
      }, itemObserverCallback);
      var sectionObserver = create({
        root: _this2.dom.viewport,
        rootMargin: _this2.options.rootMargin.parent
      }, sectionObserverCallback);
      var childObserver = create({
        root: _this2.dom.viewport,
        rootMargin: _this2.options.rootMargin.child
      }, childObserverCallback);

      _this2.instances.filter(function (i) {
        return i.type === _this2.options.base.rogue;
      }).forEach(function (rogueInstance) {
        return itemObserver.observe(rogueInstance.el);
      });

      _this2.instances.filter(function (i) {
        return i.type === _this2.options.base.section;
      }).forEach(function (sectionInstance) {
        var childParentObserver = create({
          root: sectionInstance.el
        }, childParentObserverCallback);
        sectionInstance.observers.viewport = childObserver;
        sectionInstance.observers.section = childParentObserver;
        sectionObserver.observe(sectionInstance.el);
      });
    };

    var initPlugins = function initPlugins() {
      if (_this2.options.debug) _this2.log('-- init plugins');

      if (_this2.uninitialized_plugins.length === 0) {
        if (_this2.options.debug) _this2.log('No plugins found.');
        return;
      }

      _this2.plugins = _this2.uninitialized_plugins.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            Plugin = _ref2[0],
            options = _ref2[1];

        var plugin = new Plugin(_this2.cluster, options);
        plugin.init();
        if (_this2.options.debug) _this2.log("-- initialized plugin \"".concat(plugin.name, "\""));
        return plugin;
      });
    };

    initViewport();
    initInstances();
    initCluster();
    initObservers();
    initPlugins();
    if (this.options.debug) this.log('INIT FINISHED');
    return {
      name: this.name,
      version: this.version,
      plugins: this.plugins,
      options: this.options,
      instances: this.instances
    };
  };
};

var index = new Monoceros(cluster);

export default index;
