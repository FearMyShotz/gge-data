Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./104.js");
var l = require("./4.js");
var c = function (e) {
  function InviteAFriendPaymentRewardReceivedDialog(t = "") {
    CONSTRUCTOR_HACK;
    return e.call(this, t == "" ? InviteAFriendPaymentRewardReceivedDialog.NAME : t) || this;
  }
  n.__extends(InviteAFriendPaymentRewardReceivedDialog, e);
  InviteAFriendPaymentRewardReceivedDialog.prototype.fillRewards = function () {
    this.receivedReward = l.CastleModel.inviteFriendsData.getRewardVOByTypeAndFriendCount(u.CastleInviteFriendsData.TYPE_PAYMENT, this.dialogProperties.playerCount);
    this.destroyCollectableRenderList();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_currentrewardholder.mc_reward);
    var e = new Library.CastleInterfaceElements.InviteAFriendRewardContainer();
    var t = new r.CollectableRendererList();
    this.dialogDisp.mc_currentrewardholder.mc_reward.addChild(e);
    d.RewardRenderHelper.renderInviteAFriendPaymentReward(t, e, this.receivedReward, l.CastleModel.inviteFriendsData.hasRewardBeenReceived(this.receivedReward.id));
  };
  InviteAFriendPaymentRewardReceivedDialog.prototype.handleTextIDs = function () {};
  InviteAFriendPaymentRewardReceivedDialog.prototype.updateRewardHolder = function () {};
  InviteAFriendPaymentRewardReceivedDialog.prototype.registerRewardHolder = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_currentrewardholder.tf_reward, new s.LocalizedTextVO(this.getGainedRewardDescription()));
  };
  InviteAFriendPaymentRewardReceivedDialog.prototype.getDescription = function () {
    return "dialog_referFriend_paymentReward_desc_multiple";
  };
  InviteAFriendPaymentRewardReceivedDialog.prototype.getDescriptionReplacements = function () {
    return [this.dialogProperties.playerCount];
  };
  InviteAFriendPaymentRewardReceivedDialog.prototype.getTitle = function () {
    return "dialog_referFriend_paymentReward_header";
  };
  InviteAFriendPaymentRewardReceivedDialog.prototype.getBottomDescription = function () {
    return "dialog_referFriend_paymentReward_teaser";
  };
  Object.defineProperty(InviteAFriendPaymentRewardReceivedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendPaymentRewardReceivedDialog.__initialize_static_members = function () {
    InviteAFriendPaymentRewardReceivedDialog.NAME = "InviteAFriendMultiplePaymentRewardReceived";
  };
  return InviteAFriendPaymentRewardReceivedDialog;
}(require("./1724.js").InviteAFriendRewardReceivedDialog);
exports.InviteAFriendPaymentRewardReceivedDialog = c;
var u = require("./434.js");
var d = require("./398.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();