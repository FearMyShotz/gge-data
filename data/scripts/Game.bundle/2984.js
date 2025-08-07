Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function BuildersQuartersBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BuildersQuartersBuildingVE, e);
  Object.defineProperty(BuildersQuartersBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_SimultaneousConstruction;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return BuildersQuartersBuildingVE;
}(a.ABasicBuildingVE);
exports.BuildersQuartersBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");