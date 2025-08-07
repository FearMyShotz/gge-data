Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSkillListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetSkillListVO, e);
  C2SGetSkillListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_SKILLS_LIST;
  };
  return C2SGetSkillListVO;
}(o.BasicCommandVO);
exports.C2SGetSkillListVO = s;