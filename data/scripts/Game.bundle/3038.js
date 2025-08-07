Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./262.js");
var s = function (e) {
  function HoneyGardensBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HoneyGardensBuildingVE, e);
  Object.defineProperty(HoneyGardensBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_HoneyBoost;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourceProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return HoneyGardensBuildingVE;
}(a.AResourceProductionBuildingVE);
exports.HoneyGardensBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");