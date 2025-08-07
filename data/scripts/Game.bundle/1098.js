Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STreasuremapSkipTransferVO(t, i, n) {
    var o = this;
    o.EID = 0;
    o.MID = 0;
    o.TT = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).EID = t;
    o.MID = i;
    o.TT = n;
    return o;
  }
  n.__extends(C2STreasuremapSkipTransferVO, e);
  C2STreasuremapSkipTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TREASUREMAP_SKIP_TRANSFER;
  };
  return C2STreasuremapSkipTransferVO;
}(o.BasicCommandVO);
exports.C2STreasuremapSkipTransferVO = s;