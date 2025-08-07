Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./39.js");
var h = require("./438.js");
var g = require("./390.js");
var C = require("./4.js");
var _ = require("./43.js");
var m = require("./8.js");
var f = require("./149.js");
var O = require("./391.js");
var E = require("./93.js");
var y = require("./940.js");
var b = require("./439.js");
var D = function (e) {
  function InviteAFriendLevelRewardReceivedWithPlayerInfoDialog(t = "") {
    CONSTRUCTOR_HACK;
    return e.call(this, t == "" ? InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.NAME : t) || this;
  }
  n.__extends(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog, e);
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.additionalButtons = [this.dialogDisp.btn_send_resources, this.dialogDisp.btn_send_message, this.dialogDisp.btn_coordinates, this.dialogDisp.btn_gift, this.dialogDisp.btn_alliance, this.dialogDisp.btn_friend_name];
    this.dialogDisp.btn_coordinates.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.tf_send_thank_you, new c.LocalizedTextVO(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.SEND_THANK_YOU)).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.tf_sign_up_more, new c.LocalizedTextVO(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.SIGN_UP_MORE));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_friend_title, new c.LocalizedTextVO(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.TITLE_FRIEND));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_label_level, new c.LocalizedTextVO(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.LABEL_LEVEL));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_label_alliance, new c.LocalizedTextVO(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.LABEL_ALLIANCE));
    v.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.shield_placeholder, this.dialogProperties_0.friendInfo.crest);
    var i = C.CastleModel.playerGiftData.playerGifts.length > 0;
    this.dialogDisp.btn_gift.toolTipText = i ? InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.GIFT_TOOLTIP : InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.GIFT_NEGATIVE_TOOLTIP;
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties_0.castleList.getHomeCastle();
    if (i) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_coordinates.tf_castle_coordinates, new c.LocalizedTextVO(s.GenericTextIds.VALUE_COORDS, [i.absAreaPosX, i.absAreaPosY]));
      m.ButtonHelper.enableButton(this.dialogDisp.btn_coordinates, true);
      this.dialogDisp.btn_coordinates.toolTipText = InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.COORDINATES_TOOLTIP;
    } else {
      this.dialogDisp.btn_coordinates.toolTipText = InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.RUIN_TOOLTIP;
      m.ButtonHelper.enableButton(this.dialogDisp.btn_coordinates, false);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_friend_name.tf_friend_name, new d.TextVO(this.dialogProperties_0.friendInfo.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_level, new u.NumberVO(this.dialogProperties_0.friendInfo.playerLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.tf_alliance, new d.TextVO(this.dialogProperties_0.friendInfo.allianceName));
    this.itxt_description.textContentVO.textId = this.receivedReward.friendLevel < l.PlayerConst.LEVEL_CAP ? InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.DESCRIPTION_0 : InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.DESCRIPTION_LAST_REWARD_0;
    this.itxt_description.textContentVO.textReplacements = [this.dialogProperties_0.friendInfo.playerName, this.receivedReward.friendLevel, this.nextReward.friendLevel];
    var n = C.CastleModel.playerGiftData.playerGifts.length > 0;
    m.ButtonHelper.enableButton(this.dialogDisp.btn_gift, n);
    this.dialogDisp.btn_gift.visible = C.CastleModel.userData.isPayUser;
    var o = C.CastleModel.messageData.getMessageRestrictionVOByMessageType(l.MessageConst.MESSAGE_TYPE_USER_OUT);
    var a = !!o && o.currentPlayerAmount >= o.dailyLimit;
    m.ButtonHelper.enableButton(this.dialogDisp.btn_send_message, !a && C.CastleModel.userData.canWriteMessageTo(this.dialogProperties_0.friendInfo) && C.CastleModel.userData.userLevel >= C.CastleModel.messageData.minLevelForSendingP2PMessages);
    this.dialogDisp.btn_send_message.toolTipText = m.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_send_message) ? C.CastleModel.userData.getMessageTooltip(this.dialogProperties_0.friendInfo) : p.ClientConstTextIds.NOT_AVAILABLE;
    if (C.CastleModel.userData.userLevel < C.CastleModel.messageData.minLevelForSendingP2PMessages) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
    }
    if (a) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    m.ButtonHelper.enableButton(this.dialogDisp.btn_send_resources, C.CastleModel.userData.canTradeResourcesTo(this.dialogProperties_0.friendInfo));
    this.dialogDisp.btn_send_resources.toolTipText = C.CastleModel.userData.getTradeResourceTooltip(this.dialogProperties_0.friendInfo);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_alliance, this.dialogProperties_0.friendInfo.isInAlliance);
  };
  Object.defineProperty(InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.onClick = function (t) {
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
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(L.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(this.dialogProperties_0.friendInfo.playerID), _.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          break;
        case this.dialogDisp.btn_alliance:
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(S.CastleAllianceInfoDialog, new f.CastleAllianceInfoDialogProperties(this.dialogProperties_0.friendInfo.allianceID), _.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          break;
        default:
          e.prototype.onClick.call(this, t);
      }
    }
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.giveGift = function () {
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastlePlayerGiftSelectionDialog, new y.CastlePlayerGiftSelectionProperties(this.dialogProperties_0.friendInfo.playerID));
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.sendResources = function () {
    C.CastleModel.tradeData.addEventListener(g.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SMarketInfoVO());
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleSendGoodsDialog, new b.CastleSendGoodsDialogProperties(this.dialogProperties_0.castleList.getHomeCastle(), e.tradeInfoVO));
    }
    C.CastleModel.tradeData.removeEventListener(g.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.sendMessage = function () {
    if (this.dialogProperties_0 && this.dialogProperties_0.friendInfo) {
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNewMessageDialog, new O.CastleNewMessageDialogProperties(this.dialogProperties_0.friendInfo.playerName));
    }
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.prototype.getDescription = function () {
    return InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.DESCRIPTION_0;
  };
  InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.__initialize_static_members = function () {
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.NAME = "InviteAFriendRewardReceivedWithPlayerInfo";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.COORDINATES_TOOLTIP = "panel_action_jumpTo";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.RUIN_TOOLTIP = "isRuin";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.GIFT_TOOLTIP = "dialog_sendGift_tooltip";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.GIFT_NEGATIVE_TOOLTIP = "ringmenu_noGifts_tooltip";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.SEND_THANK_YOU = "dialog_referFriend_gainReward_thankFriend_info";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.SIGN_UP_MORE = "dialog_referFriend_gainReward_inviteFriends_info";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.TITLE_FRIEND = "dialog_referFriend_inviteeMessage_friendInfo";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.LABEL_LEVEL = "level";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.LABEL_ALLIANCE = "dialog_alliance_name_default";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.DESCRIPTION_0 = "dialog_referFriend_gainReward_description_01";
    InviteAFriendLevelRewardReceivedWithPlayerInfoDialog.DESCRIPTION_LAST_REWARD_0 = "dialog_referFriend_gainReward_description_03";
  };
  return InviteAFriendLevelRewardReceivedWithPlayerInfoDialog;
}(require("./1723.js").InviteAFriendLevelRewardReceivedDialog);
exports.InviteAFriendLevelRewardReceivedWithPlayerInfoDialog = D;
var I = require("./29.js");
var T = require("./9.js");
var v = require("./61.js");
var S = require("./132.js");
var A = require("./392.js");
var L = require("./94.js");
var P = require("./941.js");
var M = require("./440.js");
r.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();