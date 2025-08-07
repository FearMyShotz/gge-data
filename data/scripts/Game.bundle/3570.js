Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./39.js");
var p = require("./438.js");
var h = require("./390.js");
var g = require("./4.js");
var C = require("./43.js");
var _ = require("./42.js");
var m = require("./8.js");
var f = require("./149.js");
var O = require("./391.js");
var E = require("./93.js");
var y = require("./940.js");
var b = require("./439.js");
var D = function (e) {
  function InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog(t = "") {
    CONSTRUCTOR_HACK;
    return e.call(this, t == "" ? InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.NAME : t) || this;
  }
  n.__extends(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog, e);
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.additionalButtons = [this.dialogDisp.btn_send_resources, this.dialogDisp.btn_send_message, this.dialogDisp.btn_coordinates, this.dialogDisp.btn_gift, this.dialogDisp.btn_alliance, this.dialogDisp.btn_friend_name];
    this.dialogDisp.btn_coordinates.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.tf_send_thank_you, new l.LocalizedTextVO(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.SEND_THANK_YOU)).verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.tf_sign_up_more, new l.LocalizedTextVO(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.SIGN_UP_MORE));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_friend_title, new l.LocalizedTextVO(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.TITLE_FRIEND));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_label_level, new l.LocalizedTextVO(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.LABEL_LEVEL));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_label_alliance, new l.LocalizedTextVO(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.LABEL_ALLIANCE));
    v.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.shield_placeholder, this.dialogProperties_0.friendInfo.crest);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_alliance, this.dialogProperties_0.friendInfo.isInAlliance);
    var i = g.CastleModel.playerGiftData.playerGifts.length > 0;
    this.dialogDisp.btn_gift.toolTipText = i ? InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.GIFT_TOOLTIP : InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.GIFT_NEGATIVE_TOOLTIP;
    m.ButtonHelper.enableButton(this.dialogDisp.btn_gift, i);
    this.dialogDisp.btn_gift.visible = g.CastleModel.userData.isPayUser;
    var n = g.CastleModel.messageData.getMessageRestrictionVOByMessageType(r.MessageConst.MESSAGE_TYPE_USER_OUT);
    var o = !!n && n.currentPlayerAmount >= n.dailyLimit;
    m.ButtonHelper.enableButton(this.dialogDisp.btn_send_message, !o && g.CastleModel.userData.canWriteMessageTo(this.dialogProperties_0.friendInfo) && g.CastleModel.userData.userLevel >= g.CastleModel.messageData.minLevelForSendingP2PMessages);
    this.dialogDisp.btn_send_message.toolTipText = m.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_send_message) ? g.CastleModel.userData.getMessageTooltip(this.dialogProperties_0.friendInfo) : d.ClientConstTextIds.NOT_AVAILABLE;
    if (g.CastleModel.userData.userLevel < g.CastleModel.messageData.minLevelForSendingP2PMessages) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
    }
    if (o) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    m.ButtonHelper.enableButton(this.dialogDisp.btn_send_resources, g.CastleModel.userData.canTradeResourcesTo(this.dialogProperties_0.friendInfo));
    this.dialogDisp.btn_send_resources.toolTipText = g.CastleModel.userData.getTradeResourceTooltip(this.dialogProperties_0.friendInfo);
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties_0.castleList.getHomeCastle();
    if (i) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_coordinates.tf_castle_coordinates, new l.LocalizedTextVO(a.GenericTextIds.VALUE_COORDS, [i.absAreaPosX, i.absAreaPosY]));
      m.ButtonHelper.enableButton(this.dialogDisp.btn_coordinates, true);
      this.dialogDisp.btn_coordinates.toolTipText = InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.COORDINATES_TOOLTIP;
    } else {
      this.dialogDisp.btn_coordinates.toolTipText = InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.RUIN_TOOLTIP;
      m.ButtonHelper.enableButton(this.dialogDisp.btn_coordinates, false);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_friend_name.tf_friend_name, new u.TextVO(this.dialogProperties_0.friendInfo.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_level, new c.NumberVO(this.dialogProperties_0.friendInfo.playerLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.tf_alliance, new u.TextVO(this.dialogProperties_0.friendInfo.allianceName));
  };
  Object.defineProperty(InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.onClick = function (t) {
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_coordinates:
          var i = this.dialogProperties_0.castleList.getHomeCastle();
          o.CommandController.instance.executeCommand(I.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [i.kingdomID, i.absAreaPosX, i.absAreaPosY]);
          break;
        case this.dialogDisp.btn_send_resources:
          this.sendResources();
          break;
        case this.dialogDisp.btn_send_message:
          this.sendMessage();
          break;
        case this.dialogDisp.btn_gift:
          this.giveGift();
          break;
        case this.dialogDisp.btn_friend_name:
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(L.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(this.dialogProperties_0.friendInfo.playerID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          break;
        case this.dialogDisp.btn_alliance:
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(S.CastleAllianceInfoDialog, new f.CastleAllianceInfoDialogProperties(this.dialogProperties_0.friendInfo.allianceID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          break;
        default:
          e.prototype.onClick.call(this, t);
      }
    }
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.giveGift = function () {
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastlePlayerGiftSelectionDialog, new y.CastlePlayerGiftSelectionProperties(this.dialogProperties_0.friendInfo.playerID));
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.sendResources = function () {
    g.CastleModel.tradeData.addEventListener(h.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SMarketInfoVO());
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleSendGoodsDialog, new b.CastleSendGoodsDialogProperties(this.dialogProperties_0.castleList.getHomeCastle(), e.tradeInfoVO));
    }
    g.CastleModel.tradeData.removeEventListener(h.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.sendMessage = function () {
    if (this.dialogProperties_0 && this.dialogProperties_0.friendInfo) {
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNewMessageDialog, new O.CastleNewMessageDialogProperties(this.dialogProperties_0.friendInfo.playerName));
    }
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.getDescription = function () {
    return "dialog_referFriend_paymentReward_desc_single";
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.prototype.getDescriptionReplacements = function () {
    return [this.dialogProperties_0.friendInfo.playerName];
  };
  InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.__initialize_static_members = function () {
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.NAME = "InviteAFriendSinglePaymentRewardReceivedWithPlayerInfo";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.COORDINATES_TOOLTIP = "panel_action_jumpTo";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.RUIN_TOOLTIP = "isRuin";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.GIFT_TOOLTIP = "dialog_sendGift_tooltip";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.GIFT_NEGATIVE_TOOLTIP = "ringmenu_noGifts_tooltip";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.SEND_THANK_YOU = "dialog_referFriend_gainReward_thankFriend_info";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.SIGN_UP_MORE = "dialog_referFriend_gainReward_inviteFriends_info";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.TITLE_FRIEND = "dialog_referFriend_inviteeMessage_friendInfo";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.LABEL_LEVEL = "level";
    InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog.LABEL_ALLIANCE = "dialog_alliance_name_default";
  };
  return InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog;
}(require("./1726.js").InviteAFriendPaymentRewardReceivedDialog);
exports.InviteAFriendPaymentRewardReceivedWithPlayerInfoDialog = D;
var I = require("./29.js");
var T = require("./9.js");
var v = require("./61.js");
var S = require("./132.js");
var A = require("./392.js");
var L = require("./94.js");
var P = require("./941.js");
var M = require("./440.js");
s.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();