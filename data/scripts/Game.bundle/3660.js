Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRedeemVoucherVO(t) {
    var i = e.call(this) || this;
    i.VC = t;
    return i;
  }
  n.__extends(C2SRedeemVoucherVO, e);
  C2SRedeemVoucherVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REDEEM_VOUCHER;
  };
  return C2SRedeemVoucherVO;
}(o.BasicCommandVO);
exports.C2SRedeemVoucherVO = s;