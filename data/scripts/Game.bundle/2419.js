Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceDeleteTopicAnswerVO(t, i) {
    var n = this;
    n.TID = 0;
    n.RID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).TID = t;
    n.RID = i;
    return n;
  }
  n.__extends(C2SAllianceDeleteTopicAnswerVO, e);
  C2SAllianceDeleteTopicAnswerVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_DELETE_TOPIC_ANSWER;
  };
  return C2SAllianceDeleteTopicAnswerVO;
}(o.BasicCommandVO);
exports.C2SAllianceDeleteTopicAnswerVO = s;