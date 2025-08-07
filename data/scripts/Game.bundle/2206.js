Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralUnlockSkillVO(t) {
    var i = e.call(this) || this;
    i.ID = t;
    return i;
  }
  n.__extends(C2SGeneralUnlockSkillVO, e);
  C2SGeneralUnlockSkillVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_UNLOCK_SKILL;
  };
  return C2SGeneralUnlockSkillVO;
}(o.BasicCommandVO);
exports.C2SGeneralUnlockSkillVO = s;