Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./457.js");
var s = function (e) {
  function BakeryBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BakeryBuildingVE, e);
  Object.defineProperty(BakeryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_FoodConsumption;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return BakeryBuildingVE;
}(a.AProductionBuildingVE);
exports.BakeryBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");