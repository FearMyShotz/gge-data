Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./23.js");
var a = function () {
  function HorizontalProgressBehaviour(e = HorizontalProgressBehaviour.DEFAULT_DURATION) {
    this._duration = 0;
    this._duration = e;
  }
  HorizontalProgressBehaviour.prototype.getFromVars = function (e) {
    return {
      scaleX: e
    };
  };
  HorizontalProgressBehaviour.prototype.getToVars = function (e) {
    return {
      scaleX: e,
      ease: o.Power1.easeOut
    };
  };
  Object.defineProperty(HorizontalProgressBehaviour.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  HorizontalProgressBehaviour.prototype.getCurrentProgress = function (e) {
    return e.mask.scaleX;
  };
  HorizontalProgressBehaviour.__initialize_static_members = function () {
    HorizontalProgressBehaviour.DEFAULT_DURATION = 2;
  };
  return HorizontalProgressBehaviour;
}();
exports.HorizontalProgressBehaviour = a;
n.classImplementsInterfaces(a, "IProgressBarChangeBehaviour");
a.__initialize_static_members();