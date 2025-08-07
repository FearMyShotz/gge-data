Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1035.js");
var s = function (e) {
  function LegendWoodcutterBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LegendWoodcutterBuildingVE, e);
  Object.defineProperty(LegendWoodcutterBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Wood;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.WoodcutterBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LegendWoodcutterBuildingVE;
}(a.WoodcutterBuildingVE);
exports.LegendWoodcutterBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");