Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STreasuremapUnitTransferVO(t, i, n, o) {
    var a = this;
    a.MID = 0;
    a.SCID = 0;
    a.KID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).MID = t;
    a.SCID = i;
    a.KID = n;
    a.I = o;
    return a;
  }
  n.__extends(C2STreasuremapUnitTransferVO, e);
  C2STreasuremapUnitTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TREASUREMAP_UNIT_TRANSFER;
  };
  return C2STreasuremapUnitTransferVO;
}(o.BasicCommandVO);
exports.C2STreasuremapUnitTransferVO = s;