Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SIsoUpgradeDefenceVO(t, i = -1, n = false) {
    var o = this;
    o.OID = 0;
    o.PO = 0;
    o.PWR = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).OID = t;
    o.PO = i;
    o.PWR = a.int(n == 1 ? 1 : 0);
    return o;
  }
  n.__extends(C2SIsoUpgradeDefenceVO, e);
  C2SIsoUpgradeDefenceVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_UPGRADE_DEFENCE;
  };
  return C2SIsoUpgradeDefenceVO;
}(o.BasicCommandVO);
exports.C2SIsoUpgradeDefenceVO = r;