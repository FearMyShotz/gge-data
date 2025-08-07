Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SShopCheckoutEventVO(t, i, n, o) {
    var a = this;
    a.IID = 0;
    a.PID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).IID = t;
    a.PID = i;
    a.LOC = n;
    a.GSID = o;
    return a;
  }
  n.__extends(C2SShopCheckoutEventVO, e);
  C2SShopCheckoutEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SHOP_CHECKOUT;
  };
  return C2SShopCheckoutEventVO;
}(o.BasicCommandVO);
exports.C2SShopCheckoutEventVO = s;