Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./489.js");
var s = function (e) {
  function FarmerMovementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FarmerMovementVE, e);
  Object.defineProperty(FarmerMovementVE.prototype, "workFrameRange", {
    get: function () {
      return [19, 48];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AIsoMovementVE.prototype, "workFrameRange").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FarmerMovementVE;
}(a.AIsoMovementVE);
exports.FarmerMovementVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");