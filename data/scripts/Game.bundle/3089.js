Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function RefineryBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RefineryBuildingVE, e);
  Object.defineProperty(RefineryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Refinery;
    },
    enumerable: true,
    configurable: true
  });
  return RefineryBuildingVE;
}(require("./647.js").ACraftingBuildingVE);
exports.RefineryBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");