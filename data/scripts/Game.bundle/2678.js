Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SSkipSceatSkillActivationVO(t) {
    var i = e.call(this) || this;
    i.TID = 0;
    i.TID = t - 1;
    return i;
  }
  n.__extends(C2SSkipSceatSkillActivationVO, e);
  C2SSkipSceatSkillActivationVO.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_SKIP_SCEAT_SKILL_ACTIVATION;
  };
  return C2SSkipSceatSkillActivationVO;
}(require("./2.js").BasicCommandVO);
exports.C2SSkipSceatSkillActivationVO = a;