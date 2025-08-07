Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./28.js");
var s = require("./30.js");
var r = function (e) {
  function CastleTimerOKDialogProperties(t, i, n) {
    var o = this;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._titleTextID = t;
    o._descTextID = i;
    o.endTimeStamp = s.CachedTimer.getCachedTimer() + n * a.ClientConstTime.SEC_2_MILLISEC;
    return o;
  }
  n.__extends(CastleTimerOKDialogProperties, e);
  Object.defineProperty(CastleTimerOKDialogProperties.prototype, "titleTextID", {
    get: function () {
      return this._titleTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerOKDialogProperties.prototype, "descTextID", {
    get: function () {
      return this._descTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerOKDialogProperties.prototype, "remainingSeconds", {
    get: function () {
      return Math.max(0, this.endTimeStamp - s.CachedTimer.getCachedTimer()) * a.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTimerOKDialogProperties;
}(o.BasicProperties);
exports.CastleTimerOKDialogProperties = r;