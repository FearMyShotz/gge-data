Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./457.js");
var s = function (e) {
  function LumbermillBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LumbermillBuildingVE, e);
  Object.defineProperty(LumbermillBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LumbermillBuildingVE;
}(a.AProductionBuildingVE);
exports.LumbermillBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");