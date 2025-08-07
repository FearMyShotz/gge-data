Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SFinishQuestConditionVO(t, i = -1) {
    var n = e.call(this) || this;
    n.QC = t;
    n.QTID = i;
    return n;
  }
  n.__extends(C2SFinishQuestConditionVO, e);
  C2SFinishQuestConditionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FINISH_QUEST_CONDITION;
  };
  return C2SFinishQuestConditionVO;
}(o.BasicCommandVO);
exports.C2SFinishQuestConditionVO = s;