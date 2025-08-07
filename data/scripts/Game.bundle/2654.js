Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DecorationForgeSelectProperties(t, i, n) {
    var o = e.call(this) || this;
    o._buttons = t;
    o._onSuccessFunc = i;
    o._onAbortFunc = n;
    return o;
  }
  n.__extends(DecorationForgeSelectProperties, e);
  Object.defineProperty(DecorationForgeSelectProperties.prototype, "onSuccessFunc", {
    get: function () {
      return this._onSuccessFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectProperties.prototype, "onAbortFunc", {
    get: function () {
      return this._onAbortFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectProperties.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectProperties;
}(require("./2.js").BasicProperties);
exports.DecorationForgeSelectProperties = o;