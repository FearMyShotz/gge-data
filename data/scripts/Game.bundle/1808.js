Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./18.js");
var u = require("./104.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./11.js");
var g = require("./371.js");
var C = function (e) {
  function CastleInviteAFriendTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleInviteAFriendTeaserDialog.NAME) || this;
  }
  n.__extends(CastleInviteAFriendTeaserDialog, e);
  CastleInviteAFriendTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_recruit, this.dialogDisp.btn_close]);
    this.setRewardsToShow();
    this.showRewards();
  };
  CastleInviteAFriendTeaserDialog.prototype.setCopyTexts = function () {
    e.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fightTogether, new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.FIGHT_WITH_YOUR_FRIENDS_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_trustyAllies, new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.TRUSTY_ALLIES_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_eyecatcher.txt_exclusiveRewards, new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.EYECATCHER_TEXT_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardTeaser, new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.REWARD_TEASER_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_recruit.txt_recruit, new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.RECRUIT_FRIENDS));
    var t = this.dialogProperties.userInvitedBy ? new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.CALL_TO_ACTION_INVITED, [new l.TextVO(this.dialogProperties.userInvitedBy)]) : new r.LocalizedTextVO(CastleInviteAFriendTeaserDialog.CALL_TO_ACTION_NO_INVITER);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_friendSignup, t);
  };
  CastleInviteAFriendTeaserDialog.prototype.setRewardsToShow = function () {
    this._rewardsToShow = [];
    for (var e = 0; e < CastleInviteAFriendTeaserDialog.INVITE_REWARD_IDS_TO_SHOW.length; e++) {
      var t = d.CastleModel.inviteFriendsData.getRewardVOByID(CastleInviteAFriendTeaserDialog.INVITE_REWARD_IDS_TO_SHOW[e]);
      this._rewardsToShow.push(t);
    }
  };
  CastleInviteAFriendTeaserDialog.prototype.showRewards = function () {
    var e;
    var t;
    this.destroyCollectableRenderList();
    for (var i = 0; i < 2; i++) {
      if (this._rewardsToShow[i]) {
        e = new u.CollectableRendererList();
        if ((t = new p.CastleGoodgameExternalClip("InviteAFriendRewardContainer", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastlePremiumMarketplaceExternal"), null, 12, false, null, true, 1, false, true)).isLoaded) {
          this.onRewardClipLoaded(e, i)(t);
        }
        if (this._rewardsToShow[i]) {
          e = new u.CollectableRendererList();
          if ((t = new p.CastleGoodgameExternalClip("InviteAFriendRewardContainer", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(f.CastlePremiumMarketPlaceDialog.NAME), null, 12, false, null, true, 1, false, true)).isLoaded) {
            this.onRewardClipLoaded(e, i)(t);
          } else {
            t.clipLoaded.addOnce(this.onRewardClipLoaded(e, i));
          }
          a.MovieClipHelper.clearMovieClip(this.dialogDisp["mc_reward" + i]);
          this.dialogDisp["mc_reward" + i].addChild(t);
        }
      }
    }
  };
  CastleInviteAFriendTeaserDialog.prototype.onRewardClipLoaded = function (e, t) {
    var i = this;
    return function (n) {
      m.RewardRenderHelper.renderInviteAFriendLevelReward(e, n.currentshownDisplayObject, i._rewardsToShow[t], d.CastleModel.inviteFriendsData.hasRewardBeenReceived(i._rewardsToShow[t].id));
    };
  };
  CastleInviteAFriendTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_recruit:
        _.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastlePremiumMarketPlaceDialog, new g.CastlePremiumMarketPlaceDialogProperties(c.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND));
    }
  };
  Object.defineProperty(CastleInviteAFriendTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleInviteAFriendTeaserDialog.__initialize_static_members = function () {
    CastleInviteAFriendTeaserDialog.NAME = "InviteAFriendTeaserMessage";
    CastleInviteAFriendTeaserDialog.FIGHT_WITH_YOUR_FRIENDS_ID = "dialog_referFriend_teaser_npcHeader";
    CastleInviteAFriendTeaserDialog.TRUSTY_ALLIES_ID = "dialog_referFriend_teaser_allianceDescription";
    CastleInviteAFriendTeaserDialog.EYECATCHER_TEXT_ID = "dialog_referFriend_teaser_banner";
    CastleInviteAFriendTeaserDialog.REWARD_TEASER_ID = "dialog_referFriend_teaser_rewardDescription";
    CastleInviteAFriendTeaserDialog.CALL_TO_ACTION_NO_INVITER = "dialog_referFriend_teaser_basicDescription";
    CastleInviteAFriendTeaserDialog.CALL_TO_ACTION_INVITED = "dialog_referFriend_teaser_inviteeDescription";
    CastleInviteAFriendTeaserDialog.RECRUIT_FRIENDS = "dialog_referFriend_teaser_recruitButton";
    CastleInviteAFriendTeaserDialog.INVITE_REWARD_IDS_TO_SHOW = [16, 25];
  };
  return CastleInviteAFriendTeaserDialog;
}(h.CastleExternalDialog);
exports.CastleInviteAFriendTeaserDialog = C;
var _ = require("./9.js");
var m = require("./398.js");
var f = require("./315.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();