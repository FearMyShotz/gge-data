Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function InviteAFriendLevelRewardReceivedDialogProperties(t, i, n = null, o = null) {
    var a = this;
    a.playerCount = 0;
    a.levelReached = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).friendInfo = n;
    a.castleList = o;
    a.playerCount = t;
    a.levelReached = i;
    return a;
  }
  n.__extends(InviteAFriendLevelRewardReceivedDialogProperties, e);
  return InviteAFriendLevelRewardReceivedDialogProperties;
}(require("./2.js").BasicProperties);
exports.InviteAFriendLevelRewardReceivedDialogProperties = o;