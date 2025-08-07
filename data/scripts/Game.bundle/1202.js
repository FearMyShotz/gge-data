Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSaveShoppingCartVO(t, i = false) {
    var n = e.call(this) || this;
    n.IGC = 0;
    if (t.length != Math.min(3, a.ShoppingCartConst.SHOPPING_CART_SIZE)) {
      throw new Error("Insufficient info to save!");
    }
    n.SCA = t[0];
    n.SCB = t[1];
    n.SCC = t[2];
    n.IGC = i ? 1 : 0;
    return n;
  }
  n.__extends(C2SSaveShoppingCartVO, e);
  C2SSaveShoppingCartVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SAVE_SHOPPING_CART;
  };
  return C2SSaveShoppingCartVO;
}(o.BasicCommandVO);
exports.C2SSaveShoppingCartVO = r;