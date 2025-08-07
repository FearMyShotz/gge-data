Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetShopCatalogEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetShopCatalogEventVO, e);
  C2SGetShopCatalogEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_SHOP_CATALOG;
  };
  return C2SGetShopCatalogEventVO;
}(o.BasicCommandVO);
exports.C2SGetShopCatalogEventVO = s;