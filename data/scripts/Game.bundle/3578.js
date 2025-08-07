Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SJudgeJudgementCitizenVO(t) {
    var i = this;
    i.CO = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).CO = t;
    return i;
  }
  n.__extends(C2SJudgeJudgementCitizenVO, e);
  C2SJudgeJudgementCitizenVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_JUDGE_JUDGEMENT_CITIZEN;
  };
  return C2SJudgeJudgementCitizenVO;
}(o.BasicCommandVO);
exports.C2SJudgeJudgementCitizenVO = s;