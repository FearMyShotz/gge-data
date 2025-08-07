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
var h = require("./39.js");
var g = require("./4.js");
var C = require("./43.js");
var _ = require("./8.js");
var m = require("./149.js");
var f = require("./136.js");
var O = require("./11.js");
var E = require("./391.js");
var y = require("./93.js");
var b = createjs.Point;
var D = function (e) {
  function CastleInviteAFriendTutorialFinishDialog() {
    var t = this;
    t._hasMovedBefore = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleInviteAFriendTutorialFinishDialog.NAME) || this;
  }
  n.__extends(CastleInviteAFriendTutorialFinishDialog, e);
  CastleInviteAFriendTutorialFinishDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_send_message, this.dialogDisp.btn_bookmark, this.dialogDisp.btn_castle_move, this.dialogDisp.btn_alliance, this.dialogDisp.btn_friend_name]);
    var i = this.dialogDisp.mc_crestHolder.getBounds(this.dialogDisp);
    r.MovieClipHelper.replaceMovieClip(this.dialogDisp.mc_crestHolder, Library.CastleInterfaceElements.mc_crest);
    r.MovieClipHelper.scaleToFit(this.dialogDisp.mc_crestHolder, i.width, i.height);
    this.crestClip = this.dialogDisp.mc_crestHolder.getChildAt(0);
  };
  CastleInviteAFriendTutorialFinishDialog.prototype.onClick = function (e) {
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_send_message:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleNewMessageDialog, new E.CastleNewMessageDialogProperties(this.dialogProperties.friendInfo.playerName));
          break;
        case this.dialogDisp.btn_bookmark:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleWorldmapBookmarkListDialog);
          break;
        case this.dialogDisp.btn_castle_move:
          o.CommandController.instance.executeCommand(I.IngameClientCommands.SWITCH_TO_RELOCATEWORLDMAP_COMMAND, {
            friendsPlace: this.dialogProperties.castleList.getHomeCastle()
          });
          break;
        case this.dialogDisp.btn_friend_name:
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(M.CastlePlayerInfoDialog, new y.CastlePlayerInfoDialogProperties(this.dialogProperties.friendInfo.playerID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          break;
        case this.dialogDisp.btn_alliance:
          if (g.CastleModel.userData.isInAlliance && g.CastleModel.userData.allianceID == this.dialogProperties.friendInfo.allianceID) {
            T.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleAllianceDialog, new f.CastleAllianceDialogProperties());
          } else {
            T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(A.CastleAllianceInfoDialog, new m.CastleAllianceInfoDialogProperties(this.dialogProperties.friendInfo.allianceID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
      }
    }
  };
  CastleInviteAFriendTutorialFinishDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.COPY_ID, [new p.TextVO(this.dialogProperties.friendInfo.playerName)])).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_friend_name.tf_friend_name, new p.TextVO(this.dialogProperties.friendInfo.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playerLevel, new d.NumberVO(this.dialogProperties.friendInfo.playerLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.tf_alliance, new p.TextVO(this.dialogProperties.friendInfo.allianceName));
    var i = this.dialogProperties.castleList.getHomeCastle();
    if (i) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new p.TextVO(i.areaNameString));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_coordinates.txt_coordinates, new u.LocalizedTextVO(s.GenericTextIds.VALUE_COORDS, [i.absAreaPosX, i.absAreaPosY]));
      var n = S.WorldmapObjectIconHelper.drawMapObjectIcon(i, new b(60, 55), true, false, true, "panel_action_jumpTo");
      this.dialogDisp.mc_castleHolder.addChild(n);
      _.ButtonHelper.enableButton(this.dialogDisp.btn_bookmark, true);
      _.ButtonHelper.enableButton(this.dialogDisp.btn_castle_move, true);
    } else {
      _.ButtonHelper.enableButton(this.dialogDisp.btn_bookmark, false);
      _.ButtonHelper.enableButton(this.dialogDisp.btn_castle_move, false);
    }
    if (this.crestClip) {
      v.CrestHelper.setCrestGraphics(this.crestClip, this.dialogProperties.friendInfo.crest);
    }
    _.ButtonHelper.enableButton(this.dialogDisp.btn_alliance, this.dialogProperties.friendInfo.isInAlliance);
    this._hasMovedBefore = g.CastleModel.userData.relocationCount > 0 && g.CastleModel.userData.remainingRelocationDuration > 0;
    _.ButtonHelper.enableButton(this.dialogDisp.btn_castle_move, !this._hasMovedBefore);
    var o = g.CastleModel.messageData.getMessageRestrictionVOByMessageType(c.MessageConst.MESSAGE_TYPE_USER_OUT);
    var r = !!o && o.currentPlayerAmount >= o.dailyLimit;
    _.ButtonHelper.enableButton(this.dialogDisp.btn_send_message, !r && g.CastleModel.userData.canWriteMessageTo(this.dialogProperties.friendInfo) && g.CastleModel.userData.userLevel >= g.CastleModel.messageData.minLevelForSendingP2PMessages);
    this.dialogDisp.btn_send_message.toolTipText = _.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_send_message) ? g.CastleModel.userData.getMessageTooltip(this.dialogProperties.friendInfo) : h.ClientConstTextIds.NOT_AVAILABLE;
    if (g.CastleModel.userData.userLevel < g.CastleModel.messageData.minLevelForSendingP2PMessages) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
    }
    if (r) {
      this.dialogDisp.btn_send_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
  };
  CastleInviteAFriendTutorialFinishDialog.prototype.setToolTips = function () {
    e.prototype.setToolTips.call(this);
    this.dialogDisp.mc_coordinates.toolTipText = CastleInviteAFriendTutorialFinishDialog.COORDINATES_TOOLTIP_ID;
    this.dialogDisp.mc_coordinates.mouseChildren = false;
    this.dialogDisp.btn_bookmark.toolTipText = CastleInviteAFriendTutorialFinishDialog.BOOKMARK_BUTTON_TOOLTIP_ID;
    if (_.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_castle_move)) {
      this.dialogDisp.btn_castle_move.toolTipText = CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_BUTTON_TOOLTIP_ID;
    } else {
      this.dialogDisp.btn_castle_move.toolTipText = CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_BUTTON_TOOLTIP_NEGATIVE_ID;
    }
  };
  CastleInviteAFriendTutorialFinishDialog.prototype.setCopyTexts = function () {
    e.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_header.txt_title, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.TITLE_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelLabel, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.LEVEL_LABEL_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLabel, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.ALLIANCE_LABEL_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_friendTitle, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.FRIEND_TITLE_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_friendCastleTitle, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.FRIEND_CASTLE_TITLE_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bookmarkInfo, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.BOOKMARK_INFO_ID)).autoFitToBounds = true;
    var t = this._hasMovedBefore ? CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_INFO_ID_ALREADY_MOVED : CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_INFO_ID;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_moveCastleInfo, new u.LocalizedTextVO(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_inviteFriendsPrompt, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.INVITE_FRIENDS_PROMPT_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_emailPrompt, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.EMAIL_PROMPT_ID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_castleClickPrompt, new u.LocalizedTextVO(CastleInviteAFriendTutorialFinishDialog.CASTLE_CLICK_PROMPT_ID));
  };
  Object.defineProperty(CastleInviteAFriendTutorialFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleInviteAFriendTutorialFinishDialog.__initialize_static_members = function () {
    CastleInviteAFriendTutorialFinishDialog.NAME = "InviteAFriendTutorialFinish";
    CastleInviteAFriendTutorialFinishDialog.TITLE_ID = "dialog_referFriend_inviteeMessage_header";
    CastleInviteAFriendTutorialFinishDialog.COPY_ID = "dialog_referFriend_inviteeMessage_description";
    CastleInviteAFriendTutorialFinishDialog.BOOKMARK_INFO_ID = "dialog_referFriend_inviteeMessage_bookmarkInfo";
    CastleInviteAFriendTutorialFinishDialog.FRIEND_TITLE_ID = "dialog_referFriend_inviteeMessage_friendInfo";
    CastleInviteAFriendTutorialFinishDialog.FRIEND_CASTLE_TITLE_ID = "dialog_referFriend_inviteeMessage_castleInfo";
    CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_INFO_ID = "dialog_referFriend_inviteeMessage_moveCastle";
    CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_INFO_ID_ALREADY_MOVED = "dialog_referFriend_inviteeMessage_castleMoved";
    CastleInviteAFriendTutorialFinishDialog.LEVEL_LABEL_ID = "level";
    CastleInviteAFriendTutorialFinishDialog.INVITE_FRIENDS_PROMPT_ID = "dialog_referFriend_inviteeMessage_inviteMoreFriends_info";
    CastleInviteAFriendTutorialFinishDialog.ALLIANCE_LABEL_ID = "dialog_alliance_name_default";
    CastleInviteAFriendTutorialFinishDialog.EMAIL_PROMPT_ID = "dialog_referFriend_inviteeMessage_messageInfo";
    CastleInviteAFriendTutorialFinishDialog.CASTLE_CLICK_PROMPT_ID = "dialog_referFriend_inviteeMessage_castleText";
    CastleInviteAFriendTutorialFinishDialog.COORDINATES_TOOLTIP_ID = "coordinates";
    CastleInviteAFriendTutorialFinishDialog.BOOKMARK_BUTTON_TOOLTIP_ID = "Bookmarks_markedLocations_tooltip";
    CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_BUTTON_TOOLTIP_ID = "dialog_referFriend_inviteeMessage_moveCastle_tooltip";
    CastleInviteAFriendTutorialFinishDialog.MOVE_CASTLE_BUTTON_TOOLTIP_NEGATIVE_ID = "dialog_referFriend_inviteeMessage_cannotMoveCastle_tooltip";
  };
  return CastleInviteAFriendTutorialFinishDialog;
}(O.CastleExternalDialog);
exports.CastleInviteAFriendTutorialFinishDialog = D;
var I = require("./29.js");
var T = require("./9.js");
var v = require("./61.js");
var S = require("./70.js");
var A = require("./132.js");
var L = require("./125.js");
var P = require("./392.js");
var M = require("./94.js");
var R = require("./1727.js");
l.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();