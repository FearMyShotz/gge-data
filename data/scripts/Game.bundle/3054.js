Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1035.js");
var s = function (e) {
  function LegendQuarryBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LegendQuarryBuildingVE, e);
  Object.defineProperty(LegendQuarryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Stone;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.QuarryBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LegendQuarryBuildingVE;
}(a.QuarryBuildingVE);
exports.LegendQuarryBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");