Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./262.js");
var s = function (e) {
  function QuarryBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(QuarryBuildingVE, e);
  Object.defineProperty(QuarryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Stone;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourceProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return QuarryBuildingVE;
}(a.AResourceProductionBuildingVE);
exports.QuarryBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");