Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./647.js");
var s = require("./538.js");
var r = function (e) {
  function DragonHoardBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DragonHoardBuildingVE, e);
  Object.defineProperty(DragonHoardBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_DragonHoardLow;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DragonHoardBuildingVE;
}(a.ACraftingBuildingVE);
exports.DragonHoardBuildingVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");