Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SBuySceatSkillVO(t) {
    var i = e.call(this) || this;
    i.ID = 0;
    i.ID = t;
    return i;
  }
  n.__extends(C2SBuySceatSkillVO, e);
  C2SBuySceatSkillVO.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_BUY_SCEAT_SKILL;
  };
  return C2SBuySceatSkillVO;
}(require("./2.js").BasicCommandVO);
exports.C2SBuySceatSkillVO = a;