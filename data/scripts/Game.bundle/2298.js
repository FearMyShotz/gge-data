Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./599.js");
var a = require("./11.js");
var s = require("./3.js");
var r = require("./2.js");
var l = require("./8.js");
var c = require("./1.js");
var u = require("./4.js");
var d = require("./13.js");
var p = require("./20.js");
var h = require("./42.js");
var g = require("./23.js");
var C = require("./37.js");
var _ = require("./1297.js");
var m = require("./2299.js");
var f = require("./1298.js");
var O = function (e) {
  function CastleChangePlayerEmailDialog() {
    return e.call(this, CastleChangePlayerEmailDialog.NAME) || this;
  }
  n.__extends(CastleChangePlayerEmailDialog, e);
  CastleChangePlayerEmailDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_newEmail_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_new_email, new s.LocalizedTextVO("dialog_options_newEmail_newEmail_desc"));
    this._txtInput_email = this.textFieldManager.registerTextField(this.dialogDisp.mc_email.input_email, new s.TextVO(s.Localize.text("generic_enter")));
    this._defaultText = this._txtInput_email.text;
    this._txtInput_email.type = c.TextFieldType.INPUT;
    this._txtInput_email.multiline = false;
    this._txtInput_email.maxChars = f.PlayerEmailData.EMAIL_MAX_LENGTH;
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_support], p.ClickFeedbackButtonHover);
    this.dialogDisp.btn_support.toolTipText = s.Localize.text("support_GGS_tooltip");
  };
  CastleChangePlayerEmailDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateText();
    this.dialogDisp.mc_blacklistError.visible = false;
    this._txtInput_email.text = this._defaultText;
    this._txtInput_email.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_email.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_email.keyUp.add(this.bindFunction(this.onTyping));
    this.controller.addEventListener(C.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onRMCStatusArrived));
    u.CastleModel.smartfoxClient.sendCommandVO(new _.C2SChangePlayerNameInfo());
  };
  CastleChangePlayerEmailDialog.prototype.updateText = function () {
    var e;
    var t;
    e = s.Localize.text("dialog_options_newEmail_currentEmail_desc");
    t = s.Localize.text("generic_placeHolder", [u.CastleModel.userData.email]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_email, new s.TextVO(e)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_email_value, new s.TextVO(t)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.TextVO(s.Localize.text("dialog_options_newEmail_desc")));
  };
  CastleChangePlayerEmailDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this._enableUI || l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          if (this.emailIsValid()) {
            this.changeEmail();
          }
          break;
        case this.dialogDisp.btn_support:
          this.onClickSupport();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleChangePlayerEmailDialog.prototype.onClickSupport = function () {
    o.HelpshiftHelper.getInstance().showChatWidget();
  };
  CastleChangePlayerEmailDialog.prototype.onTextFieldFocusIn = function (e) {
    this.dialogDisp.mc_email.mc_selected.visible = true;
    this.dialogDisp.mc_blacklistError.visible = false;
    if (this._txtInput_email.text == this._defaultText) {
      this._txtInput_email.text = "";
    }
  };
  CastleChangePlayerEmailDialog.prototype.onTextFieldFocusOut = function (e) {
    this.dialogDisp.mc_email.mc_selected.visible = false;
  };
  CastleChangePlayerEmailDialog.prototype.onTyping = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this._txtInput_email.textContentVO.stringValue = this._txtInput_email.text.replace(/\n/g, "");
    this._txtInput_email.textContentVO.stringValue = this._txtInput_email.text.replace(/\t/g, "");
  };
  CastleChangePlayerEmailDialog.prototype.emailIsValid = function () {
    if (this._txtInput_email.text.charAt(0) == " " || this._txtInput_email.text.charAt(this._txtInput_email.text.length - 1) == " ") {
      this.showNameError("dialog_options_error_emailSpaces_desc");
      return false;
    } else if (this._txtInput_email.text.trim().length == 0) {
      this.showNameError("error_email_empty");
      return false;
    } else if (this._txtInput_email.text == u.CastleModel.userData.email) {
      this.showNameError("dialog_options_error_alreadyInUse_desc");
      return false;
    } else if (this._txtInput_email.text.match("^[0-9]*$")) {
      this.showNameError("dialog_options_error_emailOnlyNumbers_desc");
      return false;
    } else {
      return this._txtInput_email.text != this._defaultText && !!r.TextValide.isEmailString(this._txtInput_email.text) || (this.showNameError("dialog_options_error_enterEmail_desc"), false);
    }
  };
  CastleChangePlayerEmailDialog.prototype.onRMCStatusArrived = function (e) {
    var t = e.params[0];
    if (e.params[1]) {
      this.updateText();
      this.hide();
    } else {
      this.showNameError(t);
    }
    this._enableUI = true;
  };
  CastleChangePlayerEmailDialog.prototype.changeEmail = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new m.C2SChangePlayerEmail(r.TextValide.getValideSmartFoxText(this._txtInput_email.text)));
    this._enableUI = false;
    this.hide();
  };
  CastleChangePlayerEmailDialog.prototype.showNameError = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_blacklistError.txt_text, new s.LocalizedTextVO(e)).verticalAlign = h.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_blacklistError.visible = true;
    g.TweenMax.fromTo(this.dialogDisp.mc_blacklistError, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: g.Bounce.easeOut
    });
  };
  CastleChangePlayerEmailDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._txtInput_email.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_email.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_email.keyUp.remove(this.bindFunction(this.onTyping));
    this.controller.removeEventListener(C.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onRMCStatusArrived));
  };
  CastleChangePlayerEmailDialog.__initialize_static_members = function () {
    CastleChangePlayerEmailDialog.NAME = "CastleChangePlayerEmail";
  };
  return CastleChangePlayerEmailDialog;
}(a.CastleExternalDialog);
exports.CastleChangePlayerEmailDialog = O;
O.__initialize_static_members();