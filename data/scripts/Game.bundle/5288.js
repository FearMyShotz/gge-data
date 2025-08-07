Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOfferOfferPayVO(t, i) {
    var n = this;
    n.OID = 0;
    n.C = 1;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).ODI = i;
    n.OID = t;
    return n;
  }
  n.__extends(C2SOfferOfferPayVO, e);
  C2SOfferOfferPayVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OFFER_OFFER_PAY;
  };
  return C2SOfferOfferPayVO;
}(o.BasicCommandVO);
exports.C2SOfferOfferPayVO = s;