Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SActivateAttackAdvisorVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SActivateAttackAdvisorVO, e);
  C2SActivateAttackAdvisorVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ACTIVATE_ATTACK_ADVISOR_EVENT;
  };
  return C2SActivateAttackAdvisorVO;
}(o.BasicCommandVO);
exports.C2SActivateAttackAdvisorVO = s;