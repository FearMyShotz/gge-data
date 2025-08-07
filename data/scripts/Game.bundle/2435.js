Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceAcceptInviteVO(t, i) {
    var n = this;
    n.MID = 0;
    n.D = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).MID = t;
    n.D = i;
    return n;
  }
  n.__extends(C2SAllianceAcceptInviteVO, e);
  C2SAllianceAcceptInviteVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_ACCEPT_INVITE;
  };
  return C2SAllianceAcceptInviteVO;
}(o.BasicCommandVO);
exports.C2SAllianceAcceptInviteVO = s;