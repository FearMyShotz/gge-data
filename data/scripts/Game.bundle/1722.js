Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./18.js");
var l = require("./42.js");
var c = require("./8.js");
var u = require("./11.js");
var d = require("./371.js");
var p = function (e) {
  function InviteAFriendRewardReceivedDialog(t = "") {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t == "" ? InviteAFriendRewardReceivedDialog.NAME : t) || this).additionalButtons = [];
    return i;
  }
  n.__extends(InviteAFriendRewardReceivedDialog, e);
  InviteAFriendRewardReceivedDialog.prototype.registerRewardHolder = function () {};
  InviteAFriendRewardReceivedDialog.prototype.fillRewards = function () {};
  InviteAFriendRewardReceivedDialog.prototype.handleTextIDs = function () {};
  InviteAFriendRewardReceivedDialog.prototype.updateRewardHolder = function () {};
  InviteAFriendRewardReceivedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = [this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_invite_a_friend];
    if (this.additionalButtons && this.additionalButtons.length > 0) {
      i = i.concat(this.additionalButtons);
    }
    this.initBasicButtons(i);
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new s.LocalizedTextVO(this.getTitle())).verticalAlign = l.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.tf_top_description, new s.LocalizedTextVO(this.getDescription(), this.getDescriptionReplacements()));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_bottom_description, new s.LocalizedTextVO(this.getBottomDescription()));
    if (this.dialogDisp.btn_invite_a_friend.tf_sign_up_more) {
      this.dialogDisp.btn_invite_a_friend.toolTipText = "";
      this.textFieldManager.registerTextField(this.dialogDisp.btn_invite_a_friend.tf_sign_up_more, new s.LocalizedTextVO(InviteAFriendRewardReceivedDialog.INVITE_MORE_FRIENDS)).verticalAlign = l.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    } else {
      this.dialogDisp.btn_invite_a_friend.toolTipText = InviteAFriendRewardReceivedDialog.INVITE_A_FRIEND_TOOLTIP;
      this.textFieldManager.registerTextField(this.dialogDisp.tf_sign_up_more, new s.LocalizedTextVO(InviteAFriendRewardReceivedDialog.INVITE_MORE_FRIENDS)).verticalAlign = l.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    this.itxt_description.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.registerRewardHolder();
    this.fillRewards();
    this.handleTextIDs();
    this.updateRewardHolder();
  };
  InviteAFriendRewardReceivedDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_invite_a_friend:
          h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastlePremiumMarketPlaceDialog, new d.CastlePremiumMarketPlaceDialogProperties(r.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND));
          this.hide();
      }
    }
  };
  InviteAFriendRewardReceivedDialog.prototype.getTitle = function () {
    return InviteAFriendRewardReceivedDialog.TITLE;
  };
  InviteAFriendRewardReceivedDialog.prototype.getDescription = function () {
    return InviteAFriendRewardReceivedDialog.DESCRIPTION;
  };
  InviteAFriendRewardReceivedDialog.prototype.getBottomDescription = function () {
    return InviteAFriendRewardReceivedDialog.BOTTOM_DESCRIPTION;
  };
  InviteAFriendRewardReceivedDialog.prototype.getGainedRewardDescription = function () {
    return InviteAFriendRewardReceivedDialog.GAINED_REWARD;
  };
  InviteAFriendRewardReceivedDialog.prototype.getDescriptionReplacements = function () {
    return null;
  };
  InviteAFriendRewardReceivedDialog.__initialize_static_members = function () {
    InviteAFriendRewardReceivedDialog.NAME = "InviteAFriendRewardReceived";
    InviteAFriendRewardReceivedDialog.INVITE_A_FRIEND_TOOLTIP = "dialog_referFriend_inviteDialog_invite_tooltip";
    InviteAFriendRewardReceivedDialog.TITLE = "dialog_referFriend_gainReward_header";
    InviteAFriendRewardReceivedDialog.DESCRIPTION = "dialog_referFriend_gainReward_description_02";
    InviteAFriendRewardReceivedDialog.BOTTOM_DESCRIPTION = "dialog_referFriend_gainReward_helpFriends_info";
    InviteAFriendRewardReceivedDialog.INVITE_MORE_FRIENDS = "dialog_referFriend_gainReward_inviteFriends_info";
    InviteAFriendRewardReceivedDialog.GAINED_REWARD = "dialog_referFriend_gainReward_rewardboxHeader_01";
  };
  return InviteAFriendRewardReceivedDialog;
}(u.CastleExternalDialog);
exports.InviteAFriendRewardReceivedDialog = p;
var h = require("./9.js");
var g = require("./315.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();