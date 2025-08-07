Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1033.js");
var s = function (e) {
  function LegendFarmBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LegendFarmBuildingVE, e);
  Object.defineProperty(LegendFarmBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Food;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.FarmBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LegendFarmBuildingVE;
}(a.FarmBuildingVE);
exports.LegendFarmBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");