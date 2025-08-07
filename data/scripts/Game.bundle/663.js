Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SKingdomSkipTransferVO(t, i) {
    var n = this;
    n.KID = 0;
    n.TT = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).KID = t;
    n.TT = i;
    return n;
  }
  n.__extends(C2SKingdomSkipTransferVO, e);
  C2SKingdomSkipTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_KINGDOM_SKIP_TRANSFER;
  };
  return C2SKingdomSkipTransferVO;
}(o.BasicCommandVO);
exports.C2SKingdomSkipTransferVO = s;