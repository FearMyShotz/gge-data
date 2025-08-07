Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function FoodDistrictBuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(FoodDistrictBuildingVE, e);
  Object.defineProperty(FoodDistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_FoodDistrict;
    },
    enumerable: true,
    configurable: true
  });
  return FoodDistrictBuildingVE;
}(require("./541.js").ADistrictBuildingVE);
exports.FoodDistrictBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");