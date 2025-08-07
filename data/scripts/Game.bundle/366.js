Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEvent(t, i = false, n = false) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleEvent, e);
  Object.defineProperty(CastleEvent.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (e) {
      this._target = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEvent.prototype, "currentTarget", {
    get: function () {
      return this._currentTarget;
    },
    set: function (e) {
      this._currentTarget = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEvent;
}(createjs.Event);
exports.CastleEvent = o;