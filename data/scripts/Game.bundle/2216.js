Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyBestsellerOfferVO(t, i, n) {
    var o = this;
    o.OID = 0;
    o.AMT = 0;
    o.POID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).OID = t;
    o.AMT = i;
    o.POID = n;
    return o;
  }
  n.__extends(C2SBuyBestsellerOfferVO, e);
  C2SBuyBestsellerOfferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_BESTSELLER_OFFER;
  };
  return C2SBuyBestsellerOfferVO;
}(o.BasicCommandVO);
exports.C2SBuyBestsellerOfferVO = s;