Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./217.js");
var a = require("./131.js");
var s = require("./2.js");
var r = require("./132.js");
exports.getLoggerHierarchyFor = function (e = a.GLOBAL_LOGGER) {
  if (e === a.GLOBAL_LOGGER) {
    return Array.from(s.Loggers.values());
  }
  var t = new RegExp("\\b" + e + "((\\.[a-zA-Z]+)?)*\\b");
  var n = [];
  s.Loggers.forEach(function (e, i) {
    if (t.test(i)) {
      n.push(e);
    }
  });
  return n;
};
var o = function () {
  function LoggerFactory(e) {
    this._loggers = e;
  }
  LoggerFactory.prototype.getLoggerFor = function (e) {
    e = e || a.GLOBAL_LOGGER;
    if (!this._loggers.get(e)) {
      this._loggers.set(e, new i.CoreLogger(e === a.GLOBAL_LOGGER ? r : r.get(e)));
    }
    return this._loggers.get(e);
  };
  LoggerFactory.prototype.getLoggerForObject = function (e) {
    return this.getLoggerForClass(e.constructor);
  };
  LoggerFactory.prototype.getLoggerForClass = function (e) {
    if (!this._loggers.get(e)) {
      var t = this.getQualifiedClassName(e);
      this._loggers.set(e, this.getLoggerFor(t));
    }
    return this._loggers.get(e);
  };
  LoggerFactory.prototype.getQualifiedClassName = function (e) {
    if (e && e.constructor) {
      return e.constructor.name + "";
    } else {
      return e + "";
    }
  };
  return LoggerFactory;
}();
exports.LoggerFactory = o;