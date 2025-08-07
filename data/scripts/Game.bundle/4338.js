Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./693.js");
var a = require("./72.js");
var s = require("./4.js");
var r = function (e) {
  function GFXData() {
    var t = this;
    t._animationActive = false;
    t._isAlertFrameVisible = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._animationActive = s.CastleModel.localData.readAnimation();
    t._isAlertFrameVisible = s.CastleModel.localData.readAlertFrameVisibility();
    return t;
  }
  n.__extends(GFXData, e);
  GFXData.prototype.applyAnimationABTest = function () {
    if (s.CastleModel.localData.isAnimationSet()) {
      this._animationActive = s.CastleModel.localData.readAnimation();
    } else {
      this._animationActive = false;
    }
    this.dispatchEvent(new o.GFXEvent(o.GFXEvent.ANIMATION_STATE_CHANGED));
  };
  Object.defineProperty(GFXData.prototype, "animationActive", {
    get: function () {
      return this._animationActive;
    },
    set: function (e) {
      this._animationActive = e;
      s.CastleModel.localData.saveAnimation(this._animationActive);
      this.dispatchEvent(new o.GFXEvent(o.GFXEvent.ANIMATION_STATE_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GFXData.prototype, "alertFrameVisible", {
    get: function () {
      return this._isAlertFrameVisible;
    },
    set: function (e) {
      this._isAlertFrameVisible = e;
      s.CastleModel.localData.saveAlertFrameVisibility(this._isAlertFrameVisible);
      this.dispatchEvent(new o.GFXEvent(o.GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  return GFXData;
}(a.CastleEventDispatcher);
exports.GFXData = r;