Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMinuteSkipKingdomTransferVO(t, i, n) {
    var o = e.call(this) || this;
    o.MST = t;
    o.KID = i.toString();
    o.TT = n.toString();
    return o;
  }
  n.__extends(C2SMinuteSkipKingdomTransferVO, e);
  C2SMinuteSkipKingdomTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MINUTE_SKIP_KINGDOM_TRANSFER;
  };
  return C2SMinuteSkipKingdomTransferVO;
}(o.BasicCommandVO);
exports.C2SMinuteSkipKingdomTransferVO = s;