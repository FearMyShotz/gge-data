Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./1951.js");
var C = require("./140.js");
var _ = require("./4.js");
var m = require("./180.js");
var f = require("./43.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./93.js");
var b = require("./391.js");
var D = function (e) {
  function CastleReadDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleReadDialog.NAME) || this;
  }
  n.__extends(CastleReadDialog, e);
  CastleReadDialog.prototype.initLoaded = function (t = null) {
    this._scrollComponent = new T.CastleTextScrollComponent(new m.CastleTextScrollVO(this.dialogDisp.txt_content, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.initBasicButtons([this.dialogDisp.btn_reply, this.dialogDisp.btn_delete, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_help, this.dialogDisp.btn_player, this.dialogDisp.btn_report, this.dialogDisp.btn_archive, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider]);
    e.prototype.initLoaded.call(this);
  };
  CastleReadDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.setBtns();
    this.controller.addEventListener(C.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.displayCurrentMessage));
    this.controller.addEventListener(C.CastleMessageDataEvent.MESSAGE_ARCHIVED, this.bindFunction(this.onMessageArchived));
    _.CastleModel.messageData.getBodyForTextMessage(this.readDialogProperties.messageVO.messageID);
  };
  CastleReadDialog.prototype.setBtns = function () {
    this.setDeleteBtn();
    this.setReportBtn();
    this.setArchiveBtn();
  };
  CastleReadDialog.prototype.setDeleteBtn = function () {
    O.ButtonHelper.enableButton(this.dialogDisp.btn_delete, _.CastleModel.tutorialData.isTutorialFinished());
    if (this.dialogDisp.btn_delete.enabled) {
      this.dialogDisp.btn_delete.toolTipText = "dialog_inbox_deleteMessage";
    } else {
      this.dialogDisp.btn_delete.toolTipText = h.ClientConstTextIds.NOT_AVAILABLE;
    }
  };
  CastleReadDialog.prototype.setReportBtn = function () {
    this.dialogDisp.btn_report.toolTipText = "dialog_inbox_ignore_player_tooltip";
    this.dialogDisp.btn_report.enabled = false;
  };
  CastleReadDialog.prototype.setArchiveBtn = function () {
    if (this.readDialogProperties.messageVO.archived) {
      this.dialogDisp.btn_archive.visible = false;
    } else {
      this.dialogDisp.btn_archive.visible = true;
      this.dialogDisp.btn_archive.gotoAndStop(1);
      if (_.CastleModel.tutorialData.isInTutorial()) {
        this.dialogDisp.btn_delete.toolTipText = h.ClientConstTextIds.NOT_AVAILABLE;
        O.ButtonHelper.enableButton(this.dialogDisp.btn_archive, false);
      } else if (_.CastleModel.messageData.isArchiveFull()) {
        this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_archiveFull";
        O.ButtonHelper.enableButton(this.dialogDisp.btn_archive, false);
      } else {
        this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_archiveMessage";
        O.ButtonHelper.enableButton(this.dialogDisp.btn_archive, true);
      }
    }
  };
  CastleReadDialog.prototype.setCheckedArchiveBtn = function () {
    this.dialogDisp.btn_archive.gotoAndStop(2);
    O.ButtonHelper.enableButton(this.dialogDisp.btn_archive, false);
    this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_archiveMessagMoved";
  };
  CastleReadDialog.prototype.displayCurrentMessage = function (e) {
    this.controller.removeEventListener(C.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.displayCurrentMessage));
    this.readDialogProperties.messageVO.body = a.TextValide.parseChatJSONMessage(e.params[0]);
    var t = this.readDialogProperties.messageVO;
    if (t.messageType == l.MessageConst.MESSAGE_TYPE_USER_OUT) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new u.LocalizedTextVO("dialog_newMessage_messageTo"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new u.LocalizedTextVO("dialog_read_messageFrom"));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_sender, new d.TextVO(t.senderName)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new d.TextVO(t.subject)).visible = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_content, new d.TextVO(t.body)).selectable = true;
    this.dialogDisp.btn_player.properties = t.playerID;
    this._scrollComponent.scrollToStart();
    this.dialogDisp.icon_allianceLetter.mc1.toolTipText = this.dialogDisp.icon_allianceLetter.mc2.toolTipText = "dialog_inbox_massMessage_tooltip";
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    var i = _.CastleModel.messageData.getMessageRestrictionVOByMessageType(l.MessageConst.MESSAGE_TYPE_USER_OUT);
    var n = !!i && i.currentPlayerAmount >= i.dailyLimit;
    O.ButtonHelper.enableButton(this.dialogDisp.btn_reply, !n && _.CastleModel.userData.userLevel >= _.CastleModel.messageData.minLevelForSendingP2PMessages);
    this.dialogDisp.btn_reply.toolTipText = O.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_reply) ? this.isMassUserMessage() ? "dialog_inbox_writeAnswer_massMessage_tooltip" : "dialog_inbox_writeAnswer" : h.ClientConstTextIds.NOT_AVAILABLE;
    if (_.CastleModel.userData.userLevel < _.CastleModel.messageData.minLevelForSendingP2PMessages) {
      this.dialogDisp.btn_reply.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
    }
    if (n) {
      this.dialogDisp.btn_reply.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    this.dialogDisp.btn_reply.visible = this.isSingleUserMessage() || this.isMassUserMessage();
    O.ButtonHelper.enableButton(this.dialogDisp.btn_report, t.playerID != _.CastleModel.userData.playerID && t.playerID != -1);
    O.ButtonHelper.enableButton(this.dialogDisp.btn_player, t.playerID != -1);
    this.dialogDisp.btn_report.visible = t.ignoreAvailable;
    this.dialogDisp.icon_allianceLetter.visible = this.isMassUserMessage();
  };
  CastleReadDialog.prototype.isSingleUserMessage = function () {
    return this.readDialogProperties.messageVO.messageType == l.MessageConst.MESSAGE_TYPE_USER_IN;
  };
  CastleReadDialog.prototype.isMassUserMessage = function () {
    return this.readDialogProperties.messageVO.messageType == l.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER;
  };
  CastleReadDialog.prototype.onMessageArchived = function (e) {
    if (p.int(e.params[0]) == this.readDialogProperties.messageVO.messageID) {
      this.setCheckedArchiveBtn();
    }
  };
  CastleReadDialog.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target) && (e.prototype.onClick.call(this, t), !r.instanceOfClass(t.target, "BasicButton") || t.target.enabled)) {
      switch (t.target) {
        case this.dialogDisp.btn_reply:
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNewMessageDialog, new b.CastleNewMessageDialogProperties(this.readDialogProperties.messageVO.senderName, this.readDialogProperties.messageVO.subject));
          this.hide();
          break;
        case this.dialogDisp.btn_delete:
          _.CastleModel.messageData.deleteMessage(this.readDialogProperties.messageVO);
          this.hide();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          I.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_message_read_player"));
          break;
        case this.dialogDisp.btn_player:
          if (this.isOutOfTutorial()) {
            I.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(S.CastlePlayerInfoDialog, new y.CastlePlayerInfoDialogProperties(t.target.properties), f.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.dialogDisp.btn_report:
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(c.Localize.text("dialog_inbox_ignore_player_tooltip"), c.Localize.text("dialog_inbox_ignore_player_copy"), this.bindFunction(this.onIgnoreConfirmed)));
          break;
        case this.dialogDisp.btn_archive:
          this.onClickedArchiveBtn();
      }
    }
  };
  CastleReadDialog.prototype.onClickedArchiveBtn = function () {
    if (!this.readDialogProperties.messageVO.archived) {
      _.CastleModel.messageData.archiveMessage(this.readDialogProperties.messageVO);
    }
  };
  CastleReadDialog.prototype.onIgnoreConfirmed = function (e = null) {
    _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SIgnorePlayerVO(this.readDialogProperties.messageVO.playerID, true));
    this.hide();
  };
  CastleReadDialog.prototype.showLoaded = function (t = null) {
    this._scrollComponent.onShow();
    e.prototype.showLoaded.call(this);
  };
  CastleReadDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(C.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.displayCurrentMessage));
    this.controller.removeEventListener(C.CastleMessageDataEvent.MESSAGE_ARCHIVED, this.bindFunction(this.onMessageArchived));
    this._scrollComponent.onHide();
    e.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleReadDialog.prototype, "readDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleReadDialog.__initialize_static_members = function () {
    CastleReadDialog.NAME = "CastleReadMessageEx";
  };
  return CastleReadDialog;
}(E.CastleExternalDialog);
exports.CastleReadDialog = D;
var I = require("./9.js");
var T = require("./182.js");
var v = require("./151.js");
var S = require("./94.js");
var A = require("./392.js");
s.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();