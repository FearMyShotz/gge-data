Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AllianceDecoBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AllianceDecoBuildingVO, e);
  AllianceDecoBuildingVO.prototype.isFusionRelevant = function () {
    return false;
  };
  return AllianceDecoBuildingVO;
}(require("./783.js").DecoBuildingVO);
exports.AllianceDecoBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");