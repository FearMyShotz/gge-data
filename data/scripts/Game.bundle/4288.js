Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSkillsResetVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SSkillsResetVO, e);
  C2SSkillsResetVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SKILLS_RESET;
  };
  return C2SSkillsResetVO;
}(o.BasicCommandVO);
exports.C2SSkillsResetVO = s;