Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./104.js");
var c = require("./4.js");
var u = function (e) {
  function InviteAFriendLevelRewardReceivedDialog(t = "") {
    CONSTRUCTOR_HACK;
    return e.call(this, t == "" ? InviteAFriendLevelRewardReceivedDialog.NAME : t) || this;
  }
  n.__extends(InviteAFriendLevelRewardReceivedDialog, e);
  InviteAFriendLevelRewardReceivedDialog.prototype.registerRewardHolder = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_currentrewardholder.tf_reward, new r.LocalizedTextVO(InviteAFriendLevelRewardReceivedDialog.GAINED_REWARD_0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_nextrewardholder.tf_reward, new r.LocalizedTextVO(InviteAFriendLevelRewardReceivedDialog.NEXT_REWARD));
  };
  InviteAFriendLevelRewardReceivedDialog.prototype.fillRewards = function () {
    for (var e = c.CastleModel.inviteFriendsData.getRewardVOsForFriendCount(this.dialogProperties.playerCount), t = 0; t < e.length; t++) {
      if (e[t].friendLevel == this.dialogProperties.levelReached) {
        this.receivedReward = e[t];
        if (t < e.length - 1) {
          this.nextReward = e[t + 1];
        } else {
          this.nextReward = c.CastleModel.inviteFriendsData.getRewardVOByID(e[t].id + 1);
        }
      }
    }
    a.debug("-------------------------- rewards:");
    a.debug("Received: " + this.receivedReward);
    a.debug("Next: " + this.nextReward);
    a.debug("------------------------------------");
    this.destroyCollectableRenderList();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_currentrewardholder.mc_reward);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_nextrewardholder.mc_reward);
    var i = new Library.CastleInterfaceElements.InviteAFriendRewardContainer();
    var n = new l.CollectableRendererList();
    this.dialogDisp.mc_currentrewardholder.mc_reward.addChild(i);
    d.RewardRenderHelper.renderInviteAFriendLevelReward(n, i, this.receivedReward, c.CastleModel.inviteFriendsData.hasRewardBeenReceived(this.receivedReward.id));
    if (this.nextReward) {
      var s = new Library.CastleInterfaceElements.InviteAFriendRewardContainer();
      var r = new l.CollectableRendererList();
      this.dialogDisp.mc_nextrewardholder.mc_reward.addChild(s);
      d.RewardRenderHelper.renderInviteAFriendLevelReward(r, s, this.nextReward, c.CastleModel.inviteFriendsData.hasRewardBeenReceived(this.nextReward.id));
    }
  };
  InviteAFriendLevelRewardReceivedDialog.prototype.handleTextIDs = function () {
    if (this.dialogProperties.levelReached == 70 && this.dialogProperties.playerCount > 1) {
      this.itxt_description.textContentVO.textId = InviteAFriendLevelRewardReceivedDialog.DESCRIPTION_LAST_REWARD;
      this.itxt_description.textContentVO.textReplacements = [this.dialogProperties.playerCount, this.dialogProperties.levelReached];
    } else {
      this.itxt_description.textContentVO.textReplacements = [this.receivedReward.friendCount, this.receivedReward.friendLevel, this.nextReward ? this.nextReward.friendCount : "", this.nextReward ? this.nextReward.friendLevel : ""];
    }
  };
  InviteAFriendLevelRewardReceivedDialog.prototype.updateRewardHolder = function () {
    this.dialogDisp.mc_nextrewardholder.visible = !!this.nextReward;
    this.dialogDisp.mc_currentrewardholder.x = this.nextReward ? -118 : 0;
  };
  InviteAFriendLevelRewardReceivedDialog.prototype.hideLoaded = function (t = null) {
    this.nextReward = null;
    e.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(InviteAFriendLevelRewardReceivedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendLevelRewardReceivedDialog.__initialize_static_members = function () {
    InviteAFriendLevelRewardReceivedDialog.NAME = "InviteAFriendRewardReceived";
    InviteAFriendLevelRewardReceivedDialog.GAINED_REWARD_0 = "dialog_referFriend_gainReward_rewardboxHeader_01";
    InviteAFriendLevelRewardReceivedDialog.NEXT_REWARD = "dialog_referFriend_gainReward_rewardboxHeader_0";
    InviteAFriendLevelRewardReceivedDialog.DESCRIPTION_LAST_REWARD = "dialog_referFriend_gainReward_description_04";
  };
  return InviteAFriendLevelRewardReceivedDialog;
}(require("./1724.js").InviteAFriendRewardReceivedDialog);
exports.InviteAFriendLevelRewardReceivedDialog = u;
var d = require("./398.js");
s.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();