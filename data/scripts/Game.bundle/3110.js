Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./457.js");
var s = function (e) {
  function StonemasonBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StonemasonBuildingVE, e);
  Object.defineProperty(StonemasonBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return StonemasonBuildingVE;
}(a.AProductionBuildingVE);
exports.StonemasonBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");