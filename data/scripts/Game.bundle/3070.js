Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function MilitaryDistrictBuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(MilitaryDistrictBuildingVE, e);
  Object.defineProperty(MilitaryDistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_MilitaryDistrict;
    },
    enumerable: true,
    configurable: true
  });
  return MilitaryDistrictBuildingVE;
}(require("./541.js").ADistrictBuildingVE);
exports.MilitaryDistrictBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");