Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./58.js");
var _ = require("./978.js");
var m = require("./32.js");
var f = require("./4.js");
var O = require("./42.js");
var E = require("./8.js");
var y = require("./35.js");
var b = require("./2604.js");
var D = createjs.MouseEvent;
var I = function (e) {
  function CastlePremiumMarketPlaceDialogInviteAFriend(t) {
    var i = this;
    i.SCROLL_STEP = 1;
    i._currentScrollIndex = 0;
    i._copyBtnStateChangeDelayID = 0;
    i._copyBtnStateChangeDelay = 5000;
    i._tfLinkHasFocus = false;
    i.ITEMS_TO_SCROLL_BY = 3;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastlePremiumMarketPlaceDialogInviteAFriend, e);
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.dialogInvite.tf_left_top, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_descriptionText")).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._tfRewards = this.textFieldManager.registerTextField(this.dialogInvite.tf_bottom, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_rewardsCounter"));
    this._tfRewards.textContentVO.textReplacements = [f.CastleModel.inviteFriendsData.receivedRewardsCount, f.CastleModel.inviteFriendsData.maxPossibleRewardsCount];
    this._tfRewards.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogInvite.btn_instructions.tf_label, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_instructions_button")).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogInvite.tf_right_top, new p.LocalizedTextVO("dialog_referFriend_teaser_npcHeader"));
    this.textFieldManager.registerTextField(this.dialogInvite.tf_right_bottom, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_banner")).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var i = this.textFieldManager.registerTextField(this.dialogInvite.btn_friendList.tf_text, new p.LocalizedTextVO("dialog_friendsList_header"));
    i.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.autoFitToBounds = true;
    this.dialogInvite.friendCounter.mouseChildren = false;
    this.dialogInvite.friendCounter.toolTipText = "dialog_referFriend_inviteDialog_friends";
    this.textFieldManager.registerTextField(this.dialogInvite.friendCounter.text, new h.LocalizedNumberVO(f.CastleModel.inviteFriendsData.invitedFriendCount));
    this.textFieldManager.registerTextField(this.dialogInvite.tf_facebook, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_facebookText"));
    this.textFieldManager.registerTextField(this.dialogInvite.tf_email, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_emailText"));
    this.textFieldManager.registerTextField(this.dialogInvite.tf_link, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_sendLinkText"));
    this.textFieldManager.registerTextField(this.dialogInvite.btn_facebook.tf_txt, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_facebookButton"));
    this.textFieldManager.registerTextField(this.dialogInvite.btn_email.tf_txt, new p.LocalizedTextVO(CastlePremiumMarketPlaceDialogInviteAFriend.TEXT_ID_EMAIL_BUTTON));
    this.textFieldManager.registerTextField(this.dialogInvite.btn_link.tf_txt, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_linkButton"));
    this.textFieldManager.registerTextField(this.dialogInvite.tf_invitation_title, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_chooseText")).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogInvite.tf_topPayment, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_paymentRewards"));
    this._tfInvitedFriendsPaymentInfo = this.textFieldManager.registerTextField(this.dialogInvite.tf_bottomPayment, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_paymentRewards_amount", [f.CastleModel.inviteFriendsData.invitedFriendsWithPaymentCount]));
    this.dialogInvite.tf_right_top.defaultCacheScale = 2;
    this.dialogInvite.tf_right_bottom.defaultCacheScale = 2;
    this.dialogInvite.tf_facebook.defaultCacheScale = 2;
    this.dialogInvite.tf_email.defaultCacheScale = 2;
    this.dialogInvite.tf_link.defaultCacheScale = 2;
    this.initScrollList();
    this.renderPaymentRewards();
    this.controller.addEventListener(m.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
    f.CastleModel.smartfoxClient.sendCommandVO(new _.C2SFriendInviteInfoVO());
    this.initBasicButtons([this.dialogInvite.btn_instructions, this.dialogInvite.btn_email, this.dialogInvite.btn_facebook, this.dialogInvite.btn_link, this.dialogInvite.rewardList.btn_up, this.dialogInvite.rewardList.btn_down, this.dialogInvite.btn_friendList]);
    E.ButtonHelper.enableButton(this.dialogInvite.btn_email, true);
    E.ButtonHelper.enableButton(this.dialogInvite.btn_facebook, false);
    E.ButtonHelper.enableButton(this.dialogInvite.btn_friendList, f.CastleModel.userData.userLevel > C.ClientConstLevelRestrictions.TUTORIAL_END);
    this.dialogInvite.btn_friendList.toolTipText = f.CastleModel.userData.userLevel > C.ClientConstLevelRestrictions.TUTORIAL_END ? null : "alert_never_available";
    this.trackDialogOpened();
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.trackDialogOpened = function () {
    var e = new l.InvitationTrackingCommandVO();
    e.action = c.InvitationConst.INVITE_DIALOG;
    d.CommandController.instance.executeCommand(a.BasicController.COMMAND_TRACK_INVITATION, e);
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.onInviteInfoUpdated = function (e) {
    this.controller.removeEventListener(m.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
    this.textFieldManager.registerTextField(this.dialogInvite.friendCounter.text, new h.LocalizedNumberVO(f.CastleModel.inviteFriendsData.invitedFriendCount));
    if (this._tfRewards.textContentVO) {
      this._tfRewards.textContentVO.textReplacements = [f.CastleModel.inviteFriendsData.receivedRewardsCount, f.CastleModel.inviteFriendsData.maxPossibleRewardsCount];
    }
    this._tfRewards.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._tfInvitedFriendsPaymentInfo.textContentVO.textReplacements = [f.CastleModel.inviteFriendsData.invitedFriendsWithPaymentCount];
    if (this._itemScrollList) {
      this._itemScrollList.initList();
    }
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.hide = function () {
    window.clearTimeout(this._copyBtnStateChangeDelayID);
    this.controller.removeEventListener(m.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
    this._tfLinkHasFocus = false;
    e.prototype.hide.call(this);
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogInvite.btn_instructions:
          A.CastleDialogHandler.getInstance().registerDefaultDialogs(M.InviteAFriendInstructionsDialog);
          break;
        case this.dialogInvite.btn_email:
          if (f.CastleModel.userData.hasEmail || u.EnvGlobalsHandler.globals.isOnSpecialServer) {
            A.CastleDialogHandler.getInstance().registerDefaultDialogs(w.InviteAFriendEmailDialog);
          } else {
            A.CastleDialogHandler.getInstance().registerDefaultDialogs(V.OptionsDialog, new x.OptionsDialogProperties(V.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          }
          break;
        case this.dialogInvite.btn_facebook:
          d.CommandController.instance.executeCommand(v.IngameClientCommands.SEND_FACEBOOK_REFERRAL_LINK);
          break;
        case this.dialogInvite.btn_link:
          A.CastleDialogHandler.getInstance().registerDefaultDialogs(B.InviteAFriendLinkDialog);
          break;
        case this.dialogInvite.btn_friendList:
          A.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleFriendListDialog);
      }
    }
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new r.ItemScrollList(this.dialogInvite.rewardList);
    this._itemScrollList.scrollStep = this.ITEMS_TO_SCROLL_BY;
    this._itemScrollList.scrollItemClass = R.InviteAFriendRewardScrollItem;
    this.populateScrollList(this._itemScrollList);
    this._itemScrollList.initList();
    this.addEventListener();
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.populateScrollList = function (e) {
    for (var t = f.CastleModel.inviteFriendsData.getRewardVOsByType(S.CastleInviteFriendsData.TYPE_LEVEL), i = 0; i < t.length; i++) {
      var n = new b.InviteAFriendRewardScrollItemVO();
      n.rewardVO = t[i];
      if (e) {
        e.pushContent(n);
      }
    }
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.renderPaymentRewards = function () {
    this.destroyCollectableRenderList();
    for (var e = f.CastleModel.inviteFriendsData.getRewardVOsByType(S.CastleInviteFriendsData.TYPE_PAYMENT).sort(T.ClientConstSort.sortInviteRewardsByFriendCount), t = 0; t < e.length; ++t) {
      var i = f.CastleModel.inviteFriendsData.hasRewardBeenReceived(e[t].id, true);
      L.RewardRenderHelper.renderInviteAFriendPaymentReward(this, this.dialogInvite.paymentRewardList["item" + t], e[t], i, false);
    }
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.onScroll = function (e) {
    var t = g.int(this._itemScrollList.currentStartIndex);
    this._currentScrollIndex = t - t % this.SCROLL_STEP;
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this.removeEventListener();
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.addEventListener = function () {
    this._itemScrollList.addEventListener(s.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
    this.dialogInvite.addEventListener(D.CLICK, this.bindFunction(this.onClick));
  };
  CastlePremiumMarketPlaceDialogInviteAFriend.prototype.removeEventListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(s.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
    }
    this.dialogInvite.removeEventListener(D.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialogInviteAFriend.prototype, "dialogInvite", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialogInviteAFriend.NAME = "CastlePremiumMarketPlaceDialogVIP";
  CastlePremiumMarketPlaceDialogInviteAFriend.TEXT_ID_EMAIL_BUTTON = "dialog_referFriend_inviteDialog_emailButton";
  return CastlePremiumMarketPlaceDialogInviteAFriend;
}(y.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogInviteAFriend = I;
o.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");
var T = require("./75.js");
var v = require("./29.js");
var S = require("./434.js");
var A = require("./9.js");
var L = require("./398.js");
var P = require("./761.js");
var M = require("./979.js");
var R = require("./2610.js");
var V = require("./354.js");
var x = require("./435.js");
var w = require("./1421.js");
var B = require("./1424.js");