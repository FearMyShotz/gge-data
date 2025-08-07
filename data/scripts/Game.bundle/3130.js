Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ToolsmithBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ToolsmithBuildingVE, e);
  Object.defineProperty(ToolsmithBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Toolsmith;
    },
    enumerable: true,
    configurable: true
  });
  return ToolsmithBuildingVE;
}(require("./647.js").ACraftingBuildingVE);
exports.ToolsmithBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");