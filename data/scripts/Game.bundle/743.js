Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1372.js");
var s = function (e) {
  function HorizontalCallbackProgressBehaviour(t, i, n = a.HorizontalProgressBehaviour.DEFAULT_DURATION) {
    var o = e.call(this, n) || this;
    o._onUpdateCallback = t;
    o._onCompleteCallback = i;
    return o;
  }
  n.__extends(HorizontalCallbackProgressBehaviour, e);
  HorizontalCallbackProgressBehaviour.prototype.getFromVars = function (t) {
    return e.prototype.getFromVars.call(this, t);
  };
  HorizontalCallbackProgressBehaviour.prototype.getToVars = function (t) {
    var i = e.prototype.getToVars.call(this, t);
    i.onUpdate = this.bindFunction(this._onUpdateCallback);
    i.onUpdateParams = ["{self}", "scaleX"];
    i.onComplete = this.bindFunction(this._onCompleteCallback);
    return i;
  };
  Object.defineProperty(HorizontalCallbackProgressBehaviour.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.HorizontalProgressBehaviour.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return HorizontalCallbackProgressBehaviour;
}(a.HorizontalProgressBehaviour);
exports.HorizontalCallbackProgressBehaviour = s;
o.classImplementsInterfaces(s, "IProgressBarChangeBehaviour");