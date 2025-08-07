Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceInvitePlayerVO(t) {
    var i = e.call(this) || this;
    i.SV = t;
    return i;
  }
  n.__extends(C2SAllianceInvitePlayerVO, e);
  C2SAllianceInvitePlayerVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_INVITE_PLAYER;
  };
  return C2SAllianceInvitePlayerVO;
}(o.BasicCommandVO);
exports.C2SAllianceInvitePlayerVO = s;