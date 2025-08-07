Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function FactionDecoBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionDecoBuildingVO, e);
  FactionDecoBuildingVO.prototype.getShortInfoString = function () {
    return a.Localize.text(this.morality > 0 ? "deco_moral_short_info" : "deco_short_info");
  };
  FactionDecoBuildingVO.prototype.isFusionRelevant = function () {
    return false;
  };
  return FactionDecoBuildingVO;
}(require("./783.js").DecoBuildingVO);
exports.FactionDecoBuildingVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");