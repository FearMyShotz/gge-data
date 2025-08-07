Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./407.js");
var s = function (e) {
  function ArmytravelMapmovement() {
    return e.call(this) || this;
  }
  n.__extends(ArmytravelMapmovement, e);
  Object.defineProperty(ArmytravelMapmovement.prototype, "arrowColor", {
    get: function () {
      return 153;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ArmyMapmovement.prototype, "arrowColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ArmytravelMapmovement;
}(a.ArmyMapmovement);
exports.ArmytravelMapmovement = s;
o.classImplementsInterfaces(s, "IIngameUICapable", "IWorldmapTooltipData");