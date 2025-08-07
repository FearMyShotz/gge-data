Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./39.js");
var C = require("./890.js");
var _ = require("./438.js");
var m = require("./390.js");
var f = require("./4.js");
var O = require("./43.js");
var E = require("./8.js");
var y = require("./149.js");
var b = require("./136.js");
var D = require("./11.js");
var I = require("./391.js");
var T = require("./93.js");
var v = require("./439.js");
var S = require("./425.js");
var A = createjs.Point;
var L = function (e) {
  function InviteAFriendInviterMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, InviteAFriendInviterMessageDialog.NAME) || this;
  }
  n.__extends(InviteAFriendInviterMessageDialog, e);
  InviteAFriendInviterMessageDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_invited_to_alli, this.dialogDisp.btn_send_resources, this.dialogDisp.btn_send_message, this.dialogDisp.btn_bookmark, this.dialogDisp.btn_alliance, this.dialogDisp.btn_friend_name]);
    var i = this.dialogDisp.mc_crestHolder.getBounds(this.dialogDisp);
    r.MovieClipHelper.replaceMovieClip(this.dialogDisp.mc_crestHolder, Library.CastleInterfaceElements.mc_crest);
    r.MovieClipHelper.scaleToFit(this.dialogDisp.mc_crestHolder, i.width, i.height);
    this.crestClip = this.dialogDisp.mc_crestHolder.getChildAt(0);
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.TITLE_ID));
    var n = this.textFieldManager.registerTextField(this.dialogDisp.tf_top_description, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.COPY_ID));
    n.verticalAlign = a.GGSVerticalAlign.MIDDLE;
    n.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.tf_bottom_description, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.INVITE_FRIENDS_PROMPT_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_friend_title, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.FRIEND_TITLE_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_castle_title, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.FRIEND_CASTLE_TITLE_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_label_level, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.LEVEL_LABEL_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_label_alliance, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.ALLIANCE_LABEL_ID));
    e.prototype.initLoaded.call(this);
  };
  InviteAFriendInviterMessageDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_friend_name.tf_friend_name, new h.TextVO(this.dialogProperties.friendInfo.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_level, new p.NumberVO(this.dialogProperties.friendInfo.playerLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.tf_alliance, new h.TextVO(this.dialogProperties.friendInfo.allianceName));
    var i = this.dialogProperties.castleList.getHomeCastle();
    if (i) {
      this.textFieldManager.registerTextField(this.dialogDisp.tf_castlename, new h.TextVO(i.areaNameString));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_coordinates.txt_coordinates, new d.LocalizedTextVO(s.GenericTextIds.VALUE_COORDS, [i.absAreaPosX, i.absAreaPosY]));
      var n = R.WorldmapObjectIconHelper.drawMapObjectIcon(i, new A(60, 55), true, false, true, "panel_action_jumpTo");
      this.dialogDisp.mc_castleHolder.addChild(n);
      E.ButtonHelper.enableButton(this.dialogDisp.btn_bookmark, f.CastleModel.userData.canSetBookmark(i));
      this.dialogDisp.btn_bookmark.toolTipText = f.CastleModel.userData.getSetBookmarkTooltip(i);
      this.dialogDisp.mc_coordinates.toolTipText = InviteAFriendInviterMessageDialog.COORDINATES_TOOLTIP_ID;
    } else {
      E.ButtonHelper.enableButton(this.dialogDisp.btn_bookmark, false);
      this.dialogDisp.mc_coordinates.toolTipText = InviteAFriendInviterMessageDialog.RUIN_TOOLTIP_ID;
    }
    this.dialogDisp.mc_coordinates.mouseChildren = false;
    if (this.crestClip) {
      M.CrestHelper.setCrestGraphics(this.crestClip, this.dialogProperties.friendInfo.crest);
    }
    E.ButtonHelper.enableButton(this.dialogDisp.btn_alliance, this.dialogProperties.friendInfo.isInAlliance);
    var o = f.CastleModel.messageData.getMessageRestrictionVOByMessageType(c.MessageConst.MESSAGE_TYPE_USER_OUT);
    var a = !!o && o.currentPlayerAmount >= o.dailyLimit;
    E.ButtonHelper.enableButton(this.dialogDisp.btn_send_message, !a && f.CastleModel.userData.canWriteMessageTo(this.dialogProperties.friendInfo) && f.CastleModel.userData.userLevel >= f.CastleModel.messageData.minLevelForSendingP2PMessages);
    this.dialogDisp.btn_send_message.toolTipText = E.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_send_message) ? f.CastleModel.userData.getMessageTooltip(this.dialogProperties.friendInfo) : g.ClientConstTextIds.NOT_AVAILABLE;
    if (f.CastleModel.userData.userLevel < f.CastleModel.messageData.minLevelForSendingP2PMessages) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
    }
    if (a) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    E.ButtonHelper.enableButton(this.dialogDisp.btn_send_resources, f.CastleModel.userData.canTradeResourcesTo(this.dialogProperties.friendInfo));
    this.dialogDisp.btn_send_resources.toolTipText = f.CastleModel.userData.getTradeResourceTooltip(this.dialogProperties.friendInfo);
    var r;
    var l = f.CastleModel.inviteFriendsData.getNextUnreachedReward();
    if (l && l.friendCount == 1) {
      r = new d.LocalizedTextVO("dialog_referFriend_inviteDialog_condition_levelFriends_singular", [l.friendLevel]);
    } else if (l) {
      r = new d.LocalizedTextVO("dialog_referFriend_inviteDialog_condition_levelFriends", [l.friendCount, l.friendLevel]);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.tf_bottom_description, new d.LocalizedTextVO(InviteAFriendInviterMessageDialog.INVITE_FRIENDS_PROMPT_ID, [r || new h.TextVO("")]));
  };
  InviteAFriendInviterMessageDialog.prototype.handleAllianceInviteButton = function () {
    var e = !!this.dialogProperties.castleList.getHomeCastle() && !this.dialogProperties.friendInfo.isInAlliance && f.CastleModel.userData.canInviteToAlliance;
    E.ButtonHelper.enableButton(this.dialogDisp.btn_invited_to_alli, e);
    if (e) {
      this.dialogDisp.btn_invited_to_alli.toolTipText = InviteAFriendInviterMessageDialog.ALLIANCE_TOOLTIP_ID;
    } else {
      var t = InviteAFriendInviterMessageDialog.ALLIANCE_NO_INVITATION_ID;
      if (!f.CastleModel.userData.isInAlliance) {
        t = InviteAFriendInviterMessageDialog.ALLIANCE_NOT_A_MEMBER_ID;
      }
      if (this.dialogProperties.friendInfo.isInAlliance) {
        t = InviteAFriendInviterMessageDialog.ALLIANCE_ALREADY_MEMBER_ID;
      }
      this.dialogDisp.btn_invited_to_alli.toolTipText = t;
    }
  };
  InviteAFriendInviterMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.handleAllianceInviteButton();
  };
  InviteAFriendInviterMessageDialog.prototype.onClick = function (e) {
    if (E.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_invited_to_alli:
          this.onShowAllianceInfo();
          break;
        case this.dialogDisp.btn_send_resources:
          this.sendResources();
          break;
        case this.dialogDisp.btn_send_message:
          this.sendMessage();
          break;
        case this.dialogDisp.btn_bookmark:
          this.addBookmark();
          break;
        case this.dialogDisp.btn_friend_name:
          P.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(F.CastlePlayerInfoDialog, new T.CastlePlayerInfoDialogProperties(this.dialogProperties.friendInfo.playerID), O.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          break;
        case this.dialogDisp.btn_alliance:
          if (f.CastleModel.userData.isInAlliance && f.CastleModel.userData.allianceID == this.dialogProperties.friendInfo.allianceID) {
            P.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleAllianceDialog, new b.CastleAllianceDialogProperties());
          } else {
            P.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(V.CastleAllianceInfoDialog, new y.CastleAllianceInfoDialogProperties(this.dialogProperties.friendInfo.allianceID), O.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
      }
    }
  };
  InviteAFriendInviterMessageDialog.prototype.sendResources = function () {
    f.CastleModel.tradeData.addEventListener(m.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    f.CastleModel.smartfoxClient.sendCommandVO(new _.C2SMarketInfoVO());
  };
  InviteAFriendInviterMessageDialog.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      P.CastleDialogHandler.getInstance().registerDefaultDialogs(N.CastleSendGoodsDialog, new v.CastleSendGoodsDialogProperties(this.dialogProperties.castleList.getHomeCastle(), e.tradeInfoVO));
    }
    f.CastleModel.tradeData.removeEventListener(m.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
  };
  InviteAFriendInviterMessageDialog.prototype.addBookmark = function () {
    var e = this.dialogProperties.castleList.getHomeCastle();
    P.CastleDialogHandler.getInstance().registerDefaultDialogs(k.CastleWorldmapBookmarkSetDialog, new S.CastleWorldmapBookmarkSetDialogProperties(e, k.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
  };
  InviteAFriendInviterMessageDialog.prototype.sendMessage = function () {
    var e = this.dialogProperties.friendInfo;
    if (e) {
      P.CastleDialogHandler.getInstance().registerDefaultDialogs(B.CastleNewMessageDialog, new I.CastleNewMessageDialogProperties(e.playerName));
    }
  };
  InviteAFriendInviterMessageDialog.prototype.onShowAllianceInfo = function () {
    P.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("dialog_allianceInvitationSecurityAlert_desc"), this.bindFunction(this.onInvitePlayerToAlliance)));
  };
  InviteAFriendInviterMessageDialog.prototype.onInvitePlayerToAlliance = function (e) {
    f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SAllianceInvitePlayerVO(String(this.dialogProperties.friendInfo.playerID)));
  };
  Object.defineProperty(InviteAFriendInviterMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendInviterMessageDialog.__initialize_static_members = function () {
    InviteAFriendInviterMessageDialog.NAME = "InviteAFriendInviterMessage";
    InviteAFriendInviterMessageDialog.TITLE_ID = "dialog_referFriend_inviteeMessage_header";
    InviteAFriendInviterMessageDialog.COPY_ID = "dialog_referFriend_inviterMessage_description";
    InviteAFriendInviterMessageDialog.FRIEND_TITLE_ID = "dialog_referFriend_inviteeMessage_friendInfo";
    InviteAFriendInviterMessageDialog.FRIEND_CASTLE_TITLE_ID = "dialog_referFriend_inviteeMessage_castleInfo";
    InviteAFriendInviterMessageDialog.LEVEL_LABEL_ID = "level";
    InviteAFriendInviterMessageDialog.INVITE_FRIENDS_PROMPT_ID = "dialog_referFriend_inviterMessage_rewardTheshold_info";
    InviteAFriendInviterMessageDialog.ALLIANCE_LABEL_ID = "dialog_alliance_name_default";
    InviteAFriendInviterMessageDialog.EMAIL_PROMPT_ID = "dialog_referFriend_inviteeMessage_messageInfo";
    InviteAFriendInviterMessageDialog.CASTLE_CLICK_PROMPT_ID = "dialog_referFriend_inviteeMessage_castleText";
    InviteAFriendInviterMessageDialog.ALLIANCE_TOOLTIP_ID = "dialog_alliance_invite";
    InviteAFriendInviterMessageDialog.ALLIANCE_NO_INVITATION_ID = "dialog_alliance_invite_noInvitation_tooltip";
    InviteAFriendInviterMessageDialog.ALLIANCE_CURRENTLY_NO_INVITATION_ID = "player_cannotInvite";
    InviteAFriendInviterMessageDialog.ALLIANCE_NOT_A_MEMBER_ID = "dialog_alliance_invite_notaMember_tooltip";
    InviteAFriendInviterMessageDialog.ALLIANCE_ALREADY_MEMBER_ID = "dialog_alliance_invite_alreadyMemberOfAlliance_tooltip";
    InviteAFriendInviterMessageDialog.COORDINATES_TOOLTIP_ID = "coordinates";
    InviteAFriendInviterMessageDialog.RUIN_TOOLTIP_ID = "isRuin";
    InviteAFriendInviterMessageDialog.BOOKMARK_BUTTON_TOOLTIP_ID = "dialog_referFriend_inviterMessage_bookmarkInfo";
    InviteAFriendInviterMessageDialog.MOVE_CASTLE_BUTTON_TOOLTIP_ID = "dialog_referFriend_inviteeMessage_moveCastle_tooltip";
  };
  return InviteAFriendInviterMessageDialog;
}(D.CastleExternalDialog);
exports.InviteAFriendInviterMessageDialog = L;
var P = require("./9.js");
var M = require("./61.js");
var R = require("./70.js");
var V = require("./132.js");
var x = require("./125.js");
var w = require("./151.js");
var B = require("./392.js");
var F = require("./94.js");
var N = require("./440.js");
var k = require("./441.js");
l.classImplementsInterfaces(L, "ICollectableRendererList");
L.__initialize_static_members();