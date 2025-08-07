Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceChatVO(t) {
    var i = e.call(this) || this;
    i.M = a.TextValide.getValideSmartFoxJSONTextMessage(t.replace(/\r/g, ""));
    return i;
  }
  n.__extends(C2SAllianceChatVO, e);
  C2SAllianceChatVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_CHAT;
  };
  return C2SAllianceChatVO;
}(o.BasicCommandVO);
exports.C2SAllianceChatVO = r;