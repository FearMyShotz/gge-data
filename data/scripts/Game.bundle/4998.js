Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = function (e) {
  function CastleShoppingCartPrimeDayFinishDialogProperties(t, i) {
    var n = e.call(this, {
      RC: o.ShoppingCartConst.SHOPPING_CART_SIZE
    }) || this;
    n.finalRewardList = t;
    n._shoppingCartEventVO = i;
    return n;
  }
  n.__extends(CastleShoppingCartPrimeDayFinishDialogProperties, e);
  Object.defineProperty(CastleShoppingCartPrimeDayFinishDialogProperties.prototype, "shoppingCartEventVO", {
    get: function () {
      return this._shoppingCartEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayFinishDialogProperties;
}(require("./1933.js").CastlePaymentRewardSpecialOfferFinishDialogProperties);
exports.CastleShoppingCartPrimeDayFinishDialogProperties = a;