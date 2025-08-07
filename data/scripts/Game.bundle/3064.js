Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function MeadDistrictBuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(MeadDistrictBuildingVE, e);
  Object.defineProperty(MeadDistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_MeadDistrict;
    },
    enumerable: true,
    configurable: true
  });
  return MeadDistrictBuildingVE;
}(require("./540.js").ADistrictBuildingVE);
exports.MeadDistrictBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");