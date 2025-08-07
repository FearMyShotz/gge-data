Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ButcherShopBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ButcherShopBuildingVE, e);
  Object.defineProperty(ButcherShopBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_BeefBuff;
    },
    enumerable: true,
    configurable: true
  });
  return ButcherShopBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.ButcherShopBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");