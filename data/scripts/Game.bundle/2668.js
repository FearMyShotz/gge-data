Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAddSkillPointVO(t) {
    var i = this;
    i.ID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).ID = t;
    return i;
  }
  n.__extends(C2SAddSkillPointVO, e);
  C2SAddSkillPointVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ADD_SKILLS_POINT;
  };
  return C2SAddSkillPointVO;
}(o.BasicCommandVO);
exports.C2SAddSkillPointVO = s;