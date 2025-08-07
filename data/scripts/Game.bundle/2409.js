Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = require("./224.js");
var l = function (e) {
  function C2SAllianceTopicCreateVO(t, i, n) {
    var o = e.call(this) || this;
    o.N = a.TextValide.getValideSmartFoxJSONTextMessage(r.CastleAllianceForumData.getForumValidText(t));
    o.RG = i;
    o.R = a.TextValide.getValideSmartFoxJSONTextMessage(r.CastleAllianceForumData.getForumValidText(n));
    return o;
  }
  n.__extends(C2SAllianceTopicCreateVO, e);
  C2SAllianceTopicCreateVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_TOPIC_CREATE;
  };
  return C2SAllianceTopicCreateVO;
}(o.BasicCommandVO);
exports.C2SAllianceTopicCreateVO = l;