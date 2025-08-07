Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = require("./223.js");
var l = function (e) {
  function C2SAllianceAnswerTopicVO(t, i) {
    var n = this;
    n.TID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).TID = t;
    n.RT = a.TextValide.getValideSmartFoxJSONTextMessage(r.CastleAllianceForumData.getForumValidText(i));
    return n;
  }
  n.__extends(C2SAllianceAnswerTopicVO, e);
  C2SAllianceAnswerTopicVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_ANSWER_TOPIC;
  };
  return C2SAllianceAnswerTopicVO;
}(o.BasicCommandVO);
exports.C2SAllianceAnswerTopicVO = l;