Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1725.js");
var r = function (e) {
  function OpenInviteAFriendMultiplePaymentRewardReceivedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenInviteAFriendMultiplePaymentRewardReceivedCommand, e);
  OpenInviteAFriendMultiplePaymentRewardReceivedCommand.prototype.execute = function (e = null) {
    var t = e;
    this.openInviteAFriendRewardReceivedDialog(t);
  };
  OpenInviteAFriendMultiplePaymentRewardReceivedCommand.prototype.openInviteAFriendRewardReceivedDialog = function (e) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(u.InviteAFriendPaymentRewardReceivedDialog, new s.InviteAFriendPaymentRewardReceivedDialogProperties(e.playerCount));
  };
  Object.defineProperty(OpenInviteAFriendMultiplePaymentRewardReceivedCommand.prototype, "layoutManager", {
    get: function () {
      return c.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenInviteAFriendMultiplePaymentRewardReceivedCommand;
}(o.SimpleCommand);
exports.OpenInviteAFriendMultiplePaymentRewardReceivedCommand = r;
var l = require("./9.js");
var c = require("./17.js");
var u = require("./1726.js");
a.classImplementsInterfaces(r, "ISimpleCommand");