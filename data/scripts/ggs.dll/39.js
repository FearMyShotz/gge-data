Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./146.js");
var a = require("./247.js");
var s = function () {
  function Context() {
    this._components = new Map();
  }
  Context.prototype.get = function (e) {
    var t;
    t = typeof e == "function" ? e.name : e;
    return this._components.get(t);
  };
  Context.prototype.set = function (e, t) {
    var n;
    n = typeof t == "function" ? t.name : typeof t == "string" ? t : e.constructor.name;
    this._components.set(n, e);
    if ("initialize" in e) {
      e.initialize();
    }
  };
  Object.defineProperty(Context.prototype, "globals", {
    get: function () {
      return this.get(a.WorldAssignmentGlobals);
    },
    set: function (e) {
      this.set(e, a.WorldAssignmentGlobals);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "networkSettings", {
    get: function () {
      return this.get(i.NetworkSettings);
    },
    set: function (e) {
      this.set(e, i.NetworkSettings);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context, "instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  return Context;
}();
exports.Context = s;