Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceDonateVO(t, i, n) {
    var o = this;
    o.AID = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).AID = t;
    o.KID = i;
    o.RV = n;
    return o;
  }
  n.__extends(C2SAllianceDonateVO, e);
  C2SAllianceDonateVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_DONATE;
  };
  return C2SAllianceDonateVO;
}(o.BasicCommandVO);
exports.C2SAllianceDonateVO = s;