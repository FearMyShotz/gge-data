Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./262.js");
var s = function (e) {
  function WoodcutterBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WoodcutterBuildingVE, e);
  Object.defineProperty(WoodcutterBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Wood;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourceProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return WoodcutterBuildingVE;
}(a.AResourceProductionBuildingVE);
exports.WoodcutterBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");