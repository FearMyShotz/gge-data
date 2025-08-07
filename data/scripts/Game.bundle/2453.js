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
var p = require("./2454.js");
var h = require("./140.js");
var g = require("./4.js");
var C = require("./180.js");
var _ = require("./379.js");
var m = require("./943.js");
var f = require("./8.js");
var O = function (e) {
  function CastleAllianceMessageToAllDialog() {
    var t = this;
    t.waitingForServer = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceMessageToAllDialog.ASSETNAME) || this;
  }
  n.__extends(CastleAllianceMessageToAllDialog, e);
  CastleAllianceMessageToAllDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._scrollComponent = new y.CastleTextScrollComponent(new C.CastleTextScrollVO(this.dialogDisp.txt_input, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new u.LocalizedTextVO("dialog_newMessage_messageTo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new u.LocalizedTextVO(a.GenericTextIds.VALUE_COLON, [c.Localize.text("dialog_inbox_topic")]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourtext, new u.LocalizedTextVO("dialog_newMessage_yourText"));
    this._iinput_receiver = this.textFieldManager.registerTextField(this.dialogDisp.input_receiver, new d.TextVO(""));
    this._iinput_receiver.type = s.TextFieldType.INPUT;
    this._iinput_header = this.textFieldManager.registerTextField(this.dialogDisp.input_header, new d.TextVO(""));
    this._iinput_header.type = s.TextFieldType.INPUT;
    this._itxt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_input, new d.TextVO(""));
    this._itxt_input.type = s.TextFieldType.INPUT;
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    f.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_send]);
  };
  CastleAllianceMessageToAllDialog.prototype.showLoaded = function (t = null) {
    this._iinput_header.maxChars = l.MessageConst.MAX_LENGTH_SUBJECT;
    this._iinput_receiver.maxChars = l.MessageConst.MAX_LENGTH_SUBJECT;
    this._iinput_receiver.selectable = false;
    this._letterLimiter = new m.LetterLimiter(this.dialogDisp.mc_letterLimit, this._itxt_input);
    this._iinput_receiver.textContentVO.stringValue = this.dialogProperties.allianceVO.allianceName;
    this._iinput_header.textContentVO.stringValue = "";
    this._itxt_input.textContentVO.stringValue = "";
    this.waitingForServer = false;
    this.controller.addEventListener(h.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.addEventListener(h.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    new _.CastleFullScreenInputBlocker(this.dialogDisp.mc_block1);
    new _.CastleFullScreenInputBlocker(this.dialogDisp.mc_block2);
    new _.CastleFullScreenInputBlocker(this.dialogDisp.mc_block3);
    this._scrollComponent.onShow();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limitTitle, new u.LocalizedTextVO("dialog_newMessage_daily_messageLimit_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limitBar.txt_value, new u.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.currentSentMessageToday, this.limitSendMaxToday]));
    this.dialogDisp.mc_limitBar.mc_bar.scaleX = o.MathBase.clamp(this.currentSentMessageToday / (this.limitSendMaxToday <= 0 ? 1 : this.limitSendMaxToday), 0, 1);
    f.ButtonHelper.enableButton(this.dialogDisp.btn_send, this.currentSentMessageToday < this.limitSendMaxToday);
    if (f.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_send)) {
      this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    } else {
      this.dialogDisp.btn_send.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
    }
    this.dialogDisp.mc_limitBar.toolTipText = "dialog_newMessage_daily_messageLimit_alliance_tooltip";
    this.dialogDisp.mc_limitBar.mouseChildren = false;
    e.prototype.showLoaded.call(this, t);
  };
  CastleAllianceMessageToAllDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this._letterLimiter.addEventListeners();
  };
  CastleAllianceMessageToAllDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this._letterLimiter.removeEventListeners();
  };
  CastleAllianceMessageToAllDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    this.controller.removeEventListener(h.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.removeEventListener(h.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleAllianceMessageToAllDialog.prototype.onSentOk = function (e) {
    this.waitingForServer = false;
    this.hide();
  };
  CastleAllianceMessageToAllDialog.prototype.onSentError = function (e) {
    this.waitingForServer = false;
  };
  CastleAllianceMessageToAllDialog.prototype.onClick = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_send:
          if (!this.waitingForServer) {
            var t = this._iinput_header.text;
            var i = this._itxt_input.text;
            if (i && i != "") {
              this.waitingForServer = true;
              g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SAllianceNewsletterVO(t, i));
            } else {
              E.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("dialog_newMessage_message"), c.Localize.text("dialog_newMessage_missingText")));
            }
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          E.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_message_writeToAll"));
      }
    }
  };
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "messageRestriction", {
    get: function () {
      return g.CastleModel.messageData.getMessageRestrictionVOByMessageType(l.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "currentSentMessageToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.currentPlayerAmount;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "limitSendMaxToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.dailyLimit;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMessageToAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceMessageToAllDialog.__initialize_static_members = function () {
    CastleAllianceMessageToAllDialog.NAME = "CastleAllianceMessageToAllDialog";
    CastleAllianceMessageToAllDialog.ASSETNAME = "CastleMessageNewMessage2";
  };
  return CastleAllianceMessageToAllDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceMessageToAllDialog = O;
var E = require("./9.js");
var y = require("./182.js");
var b = require("./38.js");
r.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();