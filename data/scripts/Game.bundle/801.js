Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3317.js");
var s = function (e) {
  function CastleSprite() {
    return e.call(this) || this;
  }
  n.__extends(CastleSprite, e);
  CastleSprite.prototype.dispatchEvent = function (t) {
    if (a.Event2SignalController.isNativeEvent(t.type)) {
      var i = e.prototype.dispatchEvent.call(this, t);
      return typeof i == "boolean" && !!i;
    }
    a.Event2SignalController.dispatchSignal(this, t.type, t);
    return true;
  };
  CastleSprite.prototype.addEventListener = function (t, i, n = false, o = 0, s = false) {
    if (a.Event2SignalController.isNativeEvent(t)) {
      e.prototype.addEventListener.call(this, t, i, n, o, s);
    } else {
      a.Event2SignalController.add(this, t, i);
    }
  };
  CastleSprite.prototype.removeEventListener = function (t, i, n = false) {
    if (a.Event2SignalController.isNativeEvent(t)) {
      e.prototype.removeEventListener.call(this, t, i, n);
    } else {
      a.Event2SignalController.remove(this, t, i);
    }
  };
  CastleSprite.prototype.hasEventListener = function (e) {
    return a.Event2SignalController.hasEventListener(this, e);
  };
  return CastleSprite;
}(createjs.Container);
exports.CastleSprite = s;
o.classImplementsInterfaces(s, "Container");