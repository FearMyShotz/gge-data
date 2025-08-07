Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function ForgeBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ForgeBuildingVE, e);
  Object.defineProperty(ForgeBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ForgeBuildingVE;
}(a.ABasicBuildingVE);
exports.ForgeBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");