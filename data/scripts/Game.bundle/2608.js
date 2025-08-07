Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSendFriendInviteEmail(t, i, n, o) {
    var a = e.call(this) || this;
    a.SN = t;
    a.TN = i;
    a.EM = n;
    a.TXT = o;
    return a;
  }
  n.__extends(C2SSendFriendInviteEmail, e);
  C2SSendFriendInviteEmail.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SEND_FRIEND_EMAIL;
  };
  return C2SSendFriendInviteEmail;
}(o.BasicCommandVO);
exports.C2SSendFriendInviteEmail = s;