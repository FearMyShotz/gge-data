Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAllianceTopicRepliesVO(t) {
    var i = this;
    i.TID = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).TID = t;
    return i;
  }
  n.__extends(C2SGetAllianceTopicRepliesVO, e);
  C2SGetAllianceTopicRepliesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALLIANCE_TOPIC_REPLIES;
  };
  return C2SGetAllianceTopicRepliesVO;
}(o.BasicCommandVO);
exports.C2SGetAllianceTopicRepliesVO = s;