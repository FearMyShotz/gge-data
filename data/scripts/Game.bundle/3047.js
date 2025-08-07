Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function InnerDistrictBuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(InnerDistrictBuildingVE, e);
  Object.defineProperty(InnerDistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_InnerDistrict;
    },
    enumerable: true,
    configurable: true
  });
  return InnerDistrictBuildingVE;
}(require("./541.js").ADistrictBuildingVE);
exports.InnerDistrictBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");