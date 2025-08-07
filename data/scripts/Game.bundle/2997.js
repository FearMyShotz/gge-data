Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function DecoDistrict2x2BuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(DecoDistrict2x2BuildingVE, e);
  Object.defineProperty(DecoDistrict2x2BuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_DecoDistrict;
    },
    enumerable: true,
    configurable: true
  });
  return DecoDistrict2x2BuildingVE;
}(require("./541.js").ADistrictBuildingVE);
exports.DecoDistrict2x2BuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");