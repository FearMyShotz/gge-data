Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./1343.js");
var C = require("./140.js");
var _ = require("./44.js");
var m = require("./4.js");
var f = require("./180.js");
var O = require("./379.js");
var E = require("./943.js");
var y = require("./1344.js");
var b = require("./8.js");
var D = function (e) {
  function CastleNewMessageDialog() {
    var t = this;
    t._waitingForServerAnswer = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleNewMessageDialog.ASSETNAME) || this;
  }
  n.__extends(CastleNewMessageDialog, e);
  CastleNewMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._scrollComponent = new T.CastleTextScrollComponent(new f.CastleTextScrollVO(this.dialogDisp.txt_input, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._itxt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_input, new p.TextVO(""));
    b.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_send]);
  };
  CastleNewMessageDialog.prototype.showLoaded = function (t = null) {
    this._itxt_receiver = this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new d.LocalizedTextVO("dialog_newMessage_messageTo"));
    this._itxt_topic = this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new d.LocalizedTextVO(s.GenericTextIds.VALUE_COLON, ["dialog_inbox_topic"]));
    this._itxt_yourtext = this.textFieldManager.registerTextField(this.dialogDisp.txt_yourtext, new d.LocalizedTextVO("dialog_newMessage_yourText"));
    this._iinput_receiver = this.textFieldManager.registerTextField(this.dialogDisp.input_receiver, new p.TextVO(""));
    this._iinput_header = this.textFieldManager.registerTextField(this.dialogDisp.input_header, new p.TextVO(""));
    this._iinput_receiver.type = r.TextFieldType.INPUT;
    this._iinput_header.type = r.TextFieldType.INPUT;
    var i = o.EnvGlobalsHandler.globals.isOnSpecialServer;
    var n = _.SpecialServerHelper.isCrossplay();
    this._iinput_receiver.maxChars = c.MessageConst.MAX_LENGTH_RECEIVER + (n ? 9 : i ? 5 : 0);
    this._iinput_header.maxChars = c.MessageConst.MAX_LENGTH_SUBJECT;
    this._iinput_header.keyDown.removeAll();
    this._iinput_header.keyDown.add(this.bindFunction(this.stopEvent));
    this._iinput_receiver.keyDown.removeAll();
    this._iinput_receiver.keyDown.add(this.bindFunction(this.stopEvent));
    o.BasicLayoutManager.getInstance().revertFullscreen();
    var a = this.dialogProperties.senderName;
    this.dialogDisp.input_receiver.selectable = !a;
    a = a || "";
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._itxt_receiver.textContentVO.textId = "dialog_newMessage_messageTo";
    this._itxt_topic.textContentVO.textId = s.GenericTextIds.VALUE_COLON;
    this._itxt_topic.textContentVO.textReplacements = [u.Localize.text("dialog_inbox_topic")];
    this._itxt_yourtext.textContentVO.textId = "dialog_newMessage_yourText";
    this._iinput_receiver.text = "";
    this._iinput_header.text = "";
    this._itxt_input.text = "";
    this._iinput_receiver.textContentVO.stringValue = a;
    this._iinput_header.textContentVO.stringValue = this.dialogProperties.header ? "Re: " + this.dialogProperties.header : "";
    this._itxt_input.textContentVO.stringValue = "";
    this._itxt_receiver.tabIndex = 0;
    this._iinput_header.tabIndex = 1;
    this._itxt_input.tabIndex = 2;
    this._letterLimiter = new E.LetterLimiter(this.dialogDisp.mc_letterLimit, this._itxt_input);
    new O.CastleFullScreenInputBlocker(this.dialogDisp.mc_block1);
    new O.CastleFullScreenInputBlocker(this.dialogDisp.mc_block2);
    new O.CastleFullScreenInputBlocker(this.dialogDisp.mc_block3);
    this.updateSendButton();
    this._scrollComponent.onShow();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limitTitle, new d.LocalizedTextVO("dialog_newMessage_daily_messageLimit_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limitBar.txt_value, new d.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.currentSentMessageToday, this.limitSendMaxToday]));
    this.dialogDisp.mc_limitBar.mc_bar.scaleX = o.MathBase.clamp(this.currentSentMessageToday / (this.limitSendMaxToday <= 0 ? 1 : this.limitSendMaxToday), 0, 1);
    this.dialogDisp.mc_limitBar.toolTipText = "dialog_newMessage_daily_messageLimit_tooltip";
    this.dialogDisp.mc_limitBar.mouseChildren = false;
    e.prototype.showLoaded.call(this, t);
  };
  CastleNewMessageDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleNewMessageDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(C.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.addEventListener(C.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    this.controller.addEventListener(y.LetterLimiterEvent.TEXT_CHANGED, this.bindFunction(this.invalidateScrollState));
    this.controller.addEventListener(y.LetterLimiterEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.invalidateScrollState));
    this.controller.addEventListener(y.LetterLimiterEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.invalidateScrollState));
    this.controller.addEventListener(y.LetterLimiterEvent.UPDATE_REMAINING_LETTERS, this.bindFunction(this.updateSendButton));
    this._letterLimiter.addEventListeners();
  };
  CastleNewMessageDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(C.CastleMessageDataEvent.SENT_OK, this.bindFunction(this.onSentOk));
    this.controller.removeEventListener(C.CastleMessageDataEvent.SENT_ERROR, this.bindFunction(this.onSentError));
    this.controller.removeEventListener(y.LetterLimiterEvent.TEXT_CHANGED, this.bindFunction(this.invalidateScrollState));
    this.controller.removeEventListener(y.LetterLimiterEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.invalidateScrollState));
    this.controller.removeEventListener(y.LetterLimiterEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.invalidateScrollState));
    this.controller.removeEventListener(y.LetterLimiterEvent.UPDATE_REMAINING_LETTERS, this.bindFunction(this.updateSendButton));
    this._letterLimiter.removeEventListeners();
  };
  CastleNewMessageDialog.prototype.invalidateScrollState = function (e) {
    this._scrollComponent.invalidateScrollState();
  };
  CastleNewMessageDialog.prototype.updateSendButton = function (e = null) {
    switch (h.int(g.ClientConstMessage.isValidText(this._itxt_input.text))) {
      case g.ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT:
        b.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = "alert_textTooShort";
        break;
      case g.ClientConstMessage.TEXT_INVALID_MISSING_TEXT:
        b.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_missingText";
        break;
      case g.ClientConstMessage.TEXT_VALID:
      default:
        b.ButtonHelper.enableButton(this.dialogDisp.btn_send, true);
        this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_sendMessage";
    }
  };
  CastleNewMessageDialog.prototype.onSentOk = function (e) {
    this._waitingForServerAnswer = false;
    this.hide();
  };
  CastleNewMessageDialog.prototype.onSentError = function (e) {
    this._waitingForServerAnswer = false;
  };
  CastleNewMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_send:
        if (this.dialogDisp.btn_send.enabled && !this._waitingForServerAnswer) {
          var i = this._iinput_receiver.text;
          var n = this._iinput_header.text;
          var o = this._itxt_input.text;
          if (g.ClientConstMessage.isValidText(o)) {
            m.CastleModel.messageData.sendNewMessage(i, n, o);
            this._waitingForServerAnswer = true;
          } else {
            I.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(u.Localize.text("dialog_newMessage_message"), u.Localize.text("dialog_newMessage_missingText")));
          }
        }
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        I.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("help_message_write"));
    }
  };
  Object.defineProperty(CastleNewMessageDialog.prototype, "messageRestriction", {
    get: function () {
      return m.CastleModel.messageData.getMessageRestrictionVOByMessageType(c.MessageConst.MESSAGE_TYPE_USER_OUT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewMessageDialog.prototype, "currentSentMessageToday", {
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
  Object.defineProperty(CastleNewMessageDialog.prototype, "limitSendMaxToday", {
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
  Object.defineProperty(CastleNewMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNewMessageDialog.prototype.stopEvent = function (e) {
    e.stopPropagation();
  };
  CastleNewMessageDialog.NAME = "CastleNewMessageDialog2";
  CastleNewMessageDialog.ASSETNAME = "CastleMessageNewMessage2";
  return CastleNewMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleNewMessageDialog = D;
var I = require("./9.js");
var T = require("./182.js");
var v = require("./38.js");
l.classImplementsInterfaces(D, "ICollectableRendererList");