Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./218.js");
var a = require("./132.js");
var s = function () {
  function CoreLogger(e) {
    this._realLogger = e;
  }
  CoreLogger.prototype.enabledFor = function (e) {
    return this._realLogger.enabledFor(exports.LoggingLevelMapper.get(e));
  };
  CoreLogger.prototype.time = function (e) {
    a.time(e);
  };
  CoreLogger.prototype.timeEnd = function (e) {
    a.timeEnd(e);
  };
  Object.defineProperty(CoreLogger.prototype, "name", {
    get: function () {
      return this._realLogger.context.name;
    },
    enumerable: true,
    configurable: true
  });
  CoreLogger.prototype.debug = function (e) {
    var t;
    var n = [];
    for (var i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i];
    }
    if (this.debugEnabled) {
      (t = this._realLogger.debug).call.apply(t, [this._realLogger, e].concat(n));
    }
  };
  CoreLogger.prototype.info = function (e) {
    var t;
    var n = [];
    for (var i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i];
    }
    if (this.infoEnabled) {
      (t = this._realLogger.info).call.apply(t, [this._realLogger, e].concat(n));
    }
  };
  CoreLogger.prototype.warn = function (e) {
    var t;
    var n = [];
    for (var i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i];
    }
    if (this.warnEnabled) {
      (t = this._realLogger.warn).call.apply(t, [this._realLogger, e].concat(n));
    }
  };
  CoreLogger.prototype.error = function (e) {
    var t;
    var n = [];
    for (var i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i];
    }
    if (this.errorEnabled) {
      (t = this._realLogger.error).call.apply(t, [this._realLogger, e].concat(n));
    }
  };
  Object.defineProperty(CoreLogger.prototype, "debugEnabled", {
    get: function () {
      return this.enabledFor(i.LoggingLevel.DEBUG);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreLogger.prototype, "infoEnabled", {
    get: function () {
      return this.enabledFor(i.LoggingLevel.INFO);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreLogger.prototype, "warnEnabled", {
    get: function () {
      return this.enabledFor(i.LoggingLevel.WARN);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreLogger.prototype, "errorEnabled", {
    get: function () {
      return this.enabledFor(i.LoggingLevel.ERROR);
    },
    enumerable: true,
    configurable: true
  });
  CoreLogger.prototype.setLevel = function (e) {
    this._realLogger.setLevel(exports.LoggingLevelMapper.get(e));
  };
  return CoreLogger;
}();
exports.CoreLogger = s;
exports.LoggingLevelMapper = new Map([[i.LoggingLevel.DEBUG, a.DEBUG], [i.LoggingLevel.INFO, a.INFO], [i.LoggingLevel.WARN, a.WARN], [i.LoggingLevel.ERROR, a.ERROR], [i.LoggingLevel.NONE, a.OFF]]);