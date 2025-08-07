Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./164.js");
var s = function (e) {
  function ConcreteEnvironment(t) {
    var n = e.call(this) || this;
    n._data = new a.ConcreteEnvironmentData();
    n._id = t;
    return n;
  }
  i.__extends(ConcreteEnvironment, e);
  Object.defineProperty(ConcreteEnvironment.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironment.prototype, "patterns", {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironment.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironment.prototype, "detection", {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true
  });
  ConcreteEnvironment.prototype.isSupported = function () {
    return false;
  };
  return ConcreteEnvironment;
}(require("./457.js").ConcreteEnvironmentPatterns);
exports.ConcreteEnvironment = s;