var Monoceros = (function () {
  'use strict';

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
      if (options && isFunction(options)) {
        options = {
          type: options
        };
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
    classNamePrefix: 'u_',
    selectorPrefix: 'monoceros-',
    debug: false,
    base: {
      viewport: 'viewport',
      container: 'container',
      item: 'item'
    }
  };

  var version = "1.0.0";

  var isObject = function isObject(value) {
    return value && _typeof(value) === 'object' && value.constructor === Object;
  };
  var isArray = function isArray(v) {
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

        if (isArray(pVal) && isArray(oVal)) {
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
    return "".concat(_prefix, "in-").concat(_className);
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
        options.classNames['in_' + key] = createClassName(options.classNamePrefix, value);
      }
    }

    return options;
  };

  var createObserver = function createObserver(_ref) {
    var root = _ref.root,
        className = _ref.className,
        threshold = _ref.threshold,
        rootMargin = _ref.rootMargin,
        cb = _ref.cb;
    threshold = threshold || 0;
    rootMargin = rootMargin || '0px';
    return new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        var isIntersecting = entry.isIntersecting,
            target = entry.target;

        if (isIntersecting) {
          if (!target.classList.contains(className)) {
            target.classList.add(className);
          }
        } else {
          if (target.classList.contains(className)) {
            target.classList.remove(className);
          }
        }

        if (cb) cb(entry, index);
      });
    }, {
      root: root,
      threshold: threshold,
      rootMargin: rootMargin
    });
  };

  var createMonocerosInstance = function createMonocerosInstance(el) {
    return {
      el: el,
      inView: false,
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
    };
  };

  var prependByZero = function prependByZero(val) {
    if (val < 10) return '0' + val;
    return val;
  };

  var getCurrentTime = function getCurrentTime() {
    var date = new Date();
    var hours = prependByZero(date.getHours());
    var minutes = prependByZero(date.getMinutes());
    var seconds = prependByZero(date.getSeconds());
    var millis = date.getMilliseconds();
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
  cluster.register('defaultOptions', defaults);
  cluster.register('version', version);
  cluster.register('createOptions', createOptions);
  cluster.register('createObserver', createObserver);
  cluster.register('createMonocerosInstance', createMonocerosInstance);
  cluster.register('log', log);
  cluster.register('logError', logError);
  cluster.register('isArray', isArray);
  cluster.register('MonocerosError', MonocerosError);
  cluster.register('MonocerosCoreError', MonocerosCoreError);

  var Monoceros = function Monoceros(cluster) {
    var _this = this;

    this.name = '@monoceros/core';
    this.cluster = cluster;
    this.plugins = [];
    this.uninitialized_plugins = [];
    this.instances = [];
    this.version = this.cluster.resolve('version') || null;
    this.log = this.cluster.resolve('log');
    this.defaults = this.cluster.resolve('defaultOptions');
    this.options = this.cluster.resolve('createOptions', this.defaults)();
    this.MonocerosCoreError = this.cluster.resolve('MonocerosCoreError');

    this.set = function (options) {
      if (options.debug) _this.log('SETTING OPTIONS');
      _this.options = _this.cluster.resolve('createOptions')(_this.options, options);
      return _this;
    };

    this.use = function (entries, options) {
      if (_this.options.debug) _this.log('USING PLUGIN');

      if (!entries) {
        if (_this.options.debug) _this.log('No plugins found to be initialized. Make sure to pass a plugin function to .use()');
        return;
      }

      var isArray = _this.cluster.resolve('isArray');

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
        plugins.push([plugin, options]);
      }

      _this.uninitialized_plugins = _this.uninitialized_plugins.concat(plugins);
      return _this;
    };

    this.init = function () {
      var _this2 = this;

      if (this.options.debug) this.log('STARTING INIT');
      this.cluster.register('options', this.options);
      var createObserver = this.cluster.resolve('createObserver');

      var initViewport = function initViewport() {
        if (_this2.options.debug) _this2.log('-- init viewport');
        _this2.dom = {
          html: document.documentElement,
          body: document.body,
          viewport: document.querySelector(_this2.options.selectors.viewport)
        };

        if (!_this2.dom.viewport) {
          throw new _this2.MonocerosCoreError("Missing ".concat(options.selectors.viewport, " element. Canceling initialization of viewport."));
        }

        if (_this2.dom.viewport.nodeType) {
          _this2.dom.viewport.style = "\n          position: fixed;\n          height: 100vh;\n          width: 100vw;\n          overflow-x: hidden;\n          overflow-y: scroll;\n        ";
        }

        _this2.cluster.register('dom', _this2.dom);
      };

      var initContainers = function initContainers() {
        if (_this2.options.debug) _this2.log('-- init containers');
        var containerObserver = createObserver({
          root: _this2.dom.viewport,
          className: _this2.options.classNames.in_viewport
        });
        var containers = document.querySelectorAll(_this2.options.selectors.container);

        if (containers.length === 0) {
          if (_this2.options.debug) _this2.log("No ".concat(_this2.options.selectors.container, " elements found. If you are expecting containers, check your html for naming issues."));
          return;
        }

        containers.forEach(function (container) {
          container.style = "\n          overflow: hidden;\n          position: relative;\n        ";
          containerObserver.observe(container);
        });
      };

      var initInstances = function initInstances() {
        if (_this2.options.debug) _this2.log('-- init instances');

        var createInstance = _this2.cluster.resolve('createMonocerosInstance');

        var elements = _toConsumableArray(document.querySelectorAll(_this2.options.selectors.item));

        if (elements.length === 0) {
          if (options.debug) _this2.log("No ".concat(_this2.options.selectors.item, " elements found. If you are expecting them to be found, check your html elements for naming issues."));
          return;
        }

        elements.forEach(function (el) {
          _this2.instances.push(createInstance(el));
        });
        var itemObserver = createObserver({
          root: _this2.dom.viewport,
          className: _this2.options.classNames.in_viewport
        });

        _this2.instances.forEach(function (instance) {
          var el = instance.el;
          itemObserver.observe(el);
          var container = el.closest(_this2.options.selectors.container);

          if (container) {
            var itemContainerObserver = createObserver({
              root: container,
              className: _this2.options.classNames.in_container
            });
            itemContainerObserver.observe(el);
          } else {
            el.classList.add(_this2.options.classNamePrefix + 'no-container-parent');
          }
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

          return new Plugin(_this2.cluster, options);
        });
      };

      initViewport();
      initContainers();
      initInstances();
      initPlugins();
      if (this.options.debug) this.log('INIT FINISHED');
      return {
        name: this.name,
        version: this.version,
        plugins: this.plugins,
        options: this.options,
        cluster: this.cluster
      };
    };
  };

  var index = new Monoceros(cluster);

  return index;

}());
