Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOfferDurationCheckVO(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SOfferDurationCheckVO, e);
  C2SOfferDurationCheckVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OFFER_DURATION_CHECK;
  };
  return C2SOfferDurationCheckVO;
}(o.BasicCommandVO);
exports.C2SOfferDurationCheckVO = s;