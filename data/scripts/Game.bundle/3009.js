Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function DrillgroundBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DrillgroundBuildingVE, e);
  Object.defineProperty(DrillgroundBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DrillgroundBuildingVE;
}(a.ABasicBuildingVE);
exports.DrillgroundBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");