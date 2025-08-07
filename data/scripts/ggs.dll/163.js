Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("EnvironmentProvider");
var a = function () {
  function EnvironmentProvider() {
    if (EnvironmentProvider._locked) {
      throw new Error(EnvironmentProvider.ERROR_LOCKED);
    }
    this._available = [];
  }
  Object.defineProperty(EnvironmentProvider, "instance", {
    get: function () {
      if (!EnvironmentProvider._instance) {
        EnvironmentProvider._locked = false;
        EnvironmentProvider._instance = new EnvironmentProvider();
        EnvironmentProvider._locked = true;
      }
      return EnvironmentProvider._instance;
    },
    enumerable: true,
    configurable: true
  });
  EnvironmentProvider.prototype.getEnvironmentById = function (e) {
    var t;
    for (var n = 0, i = this._available; n < i.length; n++) {
      var a = i[n];
      if (a.id === e) {
        t = a;
        break;
      }
    }
    return t;
  };
  EnvironmentProvider.prototype.add = function (e) {
    var t;
    if (e !== null && e !== undefined) {
      t = new e();
    }
    if (!t) {
      throw new Error(EnvironmentProvider.ERROR_WRONG_ENVIRONMENT);
    }
    var n = this.getEnvironmentById(t.id);
    if (n !== null && n !== undefined) {
      throw new Error(EnvironmentProvider.ERROR_DUPLICATED_ENVIRONMENT);
    }
    t.data.globals = this._globals;
    t.initPatterns();
    this._available.push(t);
  };
  EnvironmentProvider.prototype.detect = function () {
    var e;
    for (var t = 0, n = this._available; t < n.length; t++) {
      var a = n[t];
      if (a.detection.isSupported()) {
        e = a;
        break;
      }
    }
    if (!e) {
      throw Error(EnvironmentProvider.ERROR_NO_ENVIRONMENT);
    }
    this._current = e;
    i.debug("Environemntdetected: " + e.id);
    return this._current;
  };
  EnvironmentProvider.prototype.setCurrentById = function (e) {
    var t = this.getEnvironmentById(e);
    if (!t) {
      throw Error(EnvironmentProvider.ERROR_NO_ENVIRONMENT);
    }
    i.debug("setCurrentById", e, t);
    this._current = t;
    return this._current;
  };
  EnvironmentProvider.prototype.clear = function () {
    this._available = [];
    this._current = null;
  };
  Object.defineProperty(EnvironmentProvider.prototype, "current", {
    get: function () {
      return this._current;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EnvironmentProvider.prototype, "globals", {
    get: function () {
      return this._globals;
    },
    set: function (e) {
      this._globals = e;
      for (var t = 0, n = this._available; t < n.length; t++) {
        var i = n[t];
        i.data.globals = this._globals;
        i.initPatterns();
      }
    },
    enumerable: true,
    configurable: true
  });
  EnvironmentProvider.ERROR_LOCKED = "The class is a singleton, please use EnvironmentProvider.instance instead.";
  EnvironmentProvider.ERROR_WRONG_ENVIRONMENT = "You have passed a no IEnvironment class.";
  EnvironmentProvider.ERROR_NO_ENVIRONMENT = "No suitable environment found. Cannot run the game without an environment.";
  EnvironmentProvider.ERROR_DUPLICATED_ENVIRONMENT = "You can't add a environment that is already registered.";
  EnvironmentProvider._locked = true;
  return EnvironmentProvider;
}();
exports.EnvironmentProvider = a;