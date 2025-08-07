Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AProductionBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AProductionBuildingVO, e);
  Object.defineProperty(AProductionBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return AProductionBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.AProductionBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO");