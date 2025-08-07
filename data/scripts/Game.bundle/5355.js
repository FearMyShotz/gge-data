Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function C2SCreateArmyAttackMovementAdvisorVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.AAC = 0;
    t.AASM = 0;
    return t;
  }
  n.__extends(C2SCreateArmyAttackMovementAdvisorVO, e);
  C2SCreateArmyAttackMovementAdvisorVO.prototype.setAdvisor = function (e, t) {
    this.AAC = e;
    this.AASM = t ? 1 : 0;
  };
  return C2SCreateArmyAttackMovementAdvisorVO;
}(require("./1950.js").C2SCreateArmyAttackMovementVO);
exports.C2SCreateArmyAttackMovementAdvisorVO = o;