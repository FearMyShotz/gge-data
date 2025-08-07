Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function HarborFixedPositionBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HarborFixedPositionBuildingVE, e);
  Object.defineProperty(HarborFixedPositionBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Harbor;
    },
    enumerable: true,
    configurable: true
  });
  return HarborFixedPositionBuildingVE;
}(require("./1606.js").AFixedPositionBuildingVE);
exports.HarborFixedPositionBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");