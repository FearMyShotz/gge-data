Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSkipFusionRechargeEventVO(t, i, n = -1) {
    var o = this;
    o.FID = 0;
    o.FSRP = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).FID = t;
    o.FSRP = a.int(i ? 1 : 0);
    return o;
  }
  n.__extends(C2SSkipFusionRechargeEventVO, e);
  C2SSkipFusionRechargeEventVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SKIP_FUSION_RECHARGE;
  };
  return C2SSkipFusionRechargeEventVO;
}(o.BasicCommandVO);
exports.C2SSkipFusionRechargeEventVO = r;