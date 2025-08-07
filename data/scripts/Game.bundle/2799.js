Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function PrivateResourceVillageShopItemVO(t, i) {
    var n = e.call(this) || this;
    n._isAbleToBuy = false;
    n._villageVO = t;
    n._isAbleToBuy = i;
    return n;
  }
  n.__extends(PrivateResourceVillageShopItemVO, e);
  Object.defineProperty(PrivateResourceVillageShopItemVO.prototype, "villageVO", {
    get: function () {
      return this._villageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageShopItemVO.prototype, "isAbleToBuy", {
    get: function () {
      return this._isAbleToBuy;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageShopItemVO;
}(require("./2.js").ScrollItemVO);
exports.PrivateResourceVillageShopItemVO = o;