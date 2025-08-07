Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function GoodgameSignal() {
    var t = [];
    for (var n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    return e.call(this, t) || this;
  }
  i.__extends(GoodgameSignal, e);
  GoodgameSignal.prototype.hasListener = function (e) {
    return !!(this.numListeners > 0) && !!this.slots.contains(e);
  };
  GoodgameSignal.prototype.prependSlot = function (e) {
    return this.slots.prepend(e);
  };
  GoodgameSignal.prototype.appendSlot = function (e) {
    return this.slots.append(e);
  };
  Object.defineProperty(GoodgameSignal.prototype, "isDisposed", {
    get: function () {
      return this.numListeners == 0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameSignal.prototype.toString = function () {
    return "";
  };
  GoodgameSignal.checkSignals = function (e) {};
  return GoodgameSignal;
}(require("./20.js").Signal);
exports.GoodgameSignal = a;