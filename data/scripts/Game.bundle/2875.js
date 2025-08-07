Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function MarketplaceBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MarketplaceBuildingVO, e);
  return MarketplaceBuildingVO;
}(require("./1000.js").AEventBuildingVO);
exports.MarketplaceBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO");