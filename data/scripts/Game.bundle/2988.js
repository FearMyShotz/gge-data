Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./262.js");
var s = function (e) {
  function CoalmineBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CoalmineBuildingVE, e);
  Object.defineProperty(CoalmineBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Coal;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourceProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CoalmineBuildingVE;
}(a.AResourceProductionBuildingVE);
exports.CoalmineBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");