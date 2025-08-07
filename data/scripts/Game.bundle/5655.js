Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDaimyoAllianceContractsEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetDaimyoAllianceContractsEventVO, e);
  C2SGetDaimyoAllianceContractsEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DAIMYO_ALLIANCE_CONTRACTS;
  };
  return C2SGetDaimyoAllianceContractsEventVO;
}(o.BasicCommandVO);
exports.C2SGetDaimyoAllianceContractsEventVO = s;