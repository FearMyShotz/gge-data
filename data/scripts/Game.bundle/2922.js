Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function ArmoryBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ArmoryBuildingVE, e);
  Object.defineProperty(ArmoryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Equipment;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ArmoryBuildingVE;
}(a.ABasicBuildingVE);
exports.ArmoryBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");