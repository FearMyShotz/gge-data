Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SKingdomUnitTransferVO(t, i, n, o, a) {
    var s = this;
    s.SCID = 0;
    s.SKID = 0;
    s.TKID = 0;
    s.CID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).SCID = t;
    s.SKID = i;
    s.TKID = n;
    s.A = o;
    s.CID = a;
    return s;
  }
  n.__extends(C2SKingdomUnitTransferVO, e);
  C2SKingdomUnitTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_KINGDOM_UNIT_TRANSFER;
  };
  return C2SKingdomUnitTransferVO;
}(o.BasicCommandVO);
exports.C2SKingdomUnitTransferVO = s;