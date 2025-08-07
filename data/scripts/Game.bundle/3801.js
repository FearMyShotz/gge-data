Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function InfiniteScrollPackageShopListItemVO(t, i, n = -1, o = -1) {
    var a = e.call(this) || this;
    a.specialEventVO = i;
    a.eventPackageVO = t;
    a.buyType = n;
    a.buyTypeId = o;
    return a;
  }
  n.__extends(InfiniteScrollPackageShopListItemVO, e);
  return InfiniteScrollPackageShopListItemVO;
}(require("./244.js").MerchantScrollItemVO);
exports.InfiniteScrollPackageShopListItemVO = o;