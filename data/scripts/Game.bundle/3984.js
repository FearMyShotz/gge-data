Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAdvisorAttackOverviewVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAdvisorAttackOverviewVO, e);
  C2SAdvisorAttackOverviewVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ATTACK_ADVISOR_OVERVIEW_EVENT;
  };
  return C2SAdvisorAttackOverviewVO;
}(o.BasicCommandVO);
exports.C2SAdvisorAttackOverviewVO = s;