Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./647.js");
var s = require("./538.js");
var r = function (e) {
  function DragonBreathForgeBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DragonBreathForgeBuildingVE, e);
  Object.defineProperty(DragonBreathForgeBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_DragonBreathForgeLow;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DragonBreathForgeBuildingVE;
}(a.ACraftingBuildingVE);
exports.DragonBreathForgeBuildingVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");