Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function HouseoffireBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HouseoffireBuildingVE, e);
  Object.defineProperty(HouseoffireBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_FireProtection;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return HouseoffireBuildingVE;
}(a.ABasicBuildingVE);
exports.HouseoffireBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");