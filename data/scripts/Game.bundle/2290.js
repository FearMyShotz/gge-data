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
var p = require("./6.js");
var h = require("./258.js");
var g = require("./23.js");
var C = require("./23.js");
var _ = require("./55.js");
var m = require("./920.js");
var f = require("./37.js");
var O = require("./921.js");
var E = require("./15.js");
var y = require("./4.js");
var b = require("./43.js");
var D = require("./20.js");
var I = require("./42.js");
var T = require("./284.js");
var v = require("./8.js");
var S = require("./11.js");
var A = require("./201.js");
var L = createjs.Point;
var P = function (e) {
  function CastleSaveAccountDialog() {
    var t = this;
    t._isSaveAccount = false;
    t.accBlacklistErrorPosition = new L(124, -24);
    t.accPasswordErrorPosition = new L(124, 47);
    t.passwordErrorPosition = new L(124, -24);
    t._inputBehaviours = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSaveAccountDialog.NAME) || this;
  }
  n.__extends(CastleSaveAccountDialog, e);
  CastleSaveAccountDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    v.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], D.ClickFeedbackButtonHover);
    this._txtInput_email = this.textFieldManager.registerTextField(this.dialogDisp.mc_account.input_mail, new d.LocalizedTextVO(""));
    this._txtInput_saveAccountPassword = this.textFieldManager.registerTextField(this.dialogDisp.mc_account.input_password, new d.LocalizedTextVO(""));
    this._txtInput_setPassword = this.textFieldManager.registerTextField(this.dialogDisp.mc_password.input_password, new d.LocalizedTextVO(""));
    this._txtInput_email.type = r.TextFieldType.INPUT;
    this._txtInput_email.maxChars = _.ClientConstUtils.MAX_EMAIL_CHARS;
    this._txtInput_saveAccountPassword.type = r.TextFieldType.INPUT;
    this._txtInput_saveAccountPassword.displayAsPassword = true;
    this._txtInput_saveAccountPassword.multiline = false;
    this._txtInput_saveAccountPassword.maxChars = h.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    this._txtInput_setPassword.type = r.TextFieldType.INPUT;
    this._txtInput_setPassword.displayAsPassword = true;
    this._txtInput_setPassword.multiline = false;
    this._txtInput_setPassword.maxChars = h.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    this._inputBehaviours = [];
    this._inputBehaviours.push(new T.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_account.input_mail_bg, this._txtInput_email));
    this._inputBehaviours.push(new T.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_account.input_password_bg, this._txtInput_saveAccountPassword));
    this._inputBehaviours.push(new T.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_password.input_password_bg, this._txtInput_setPassword));
  };
  CastleSaveAccountDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this._isSaveAccount = this.dialogProperties.dialogType == CastleSaveAccountDialog.TYPE_SAVE_ACCOUNT;
    var t;
    var i = this._isSaveAccount ? "dialog_options_saveAccount" : "dialog_options_setPassword";
    switch (this.dialogProperties.dialogStyle) {
      case CastleSaveAccountDialog.STYLE_FORUM:
        t = this._isSaveAccount ? "dialog_saveAccount_desc_forum" : "dialog_setPassword_desc_forum";
        break;
      case CastleSaveAccountDialog.STYLE_MANDATORY:
        i = "attention";
        t = this._isSaveAccount ? "dialog_saveAccount_mandatory_desc" : "dialog_setPassword_mandatory_desc";
        break;
      default:
        t = this._isSaveAccount ? "dialog_saveAccount_desc" : "dialog_setPassword_desc";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new d.LocalizedTextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new d.LocalizedTextVO(t)).autoFitToBounds = true;
    this._txtSaveAccountPasswordCaption = this.textFieldManager.registerTextField(this.dialogDisp.mc_account.txt_password, new d.LocalizedTextVO("dialog_setPassword_password", [h.CredentialsValidationConstants.PASSWORD_MIN_LENGTH]));
    this._txtSaveAccountPasswordCaption.autoFitToBounds = true;
    this._txtSaveAccountPasswordCaption.verticalAlign = I.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_password.txt_password, new d.LocalizedTextVO("dialog_setPassword_password", [h.CredentialsValidationConstants.PASSWORD_MIN_LENGTH])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_account.txt_mail, new d.LocalizedTextVO("dialog_referFriend_sendEmail_friendMail")).autoFitToBounds = true;
  };
  CastleSaveAccountDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._txtInput_email.clearText();
    this._txtInput_saveAccountPassword.clearText();
    this._txtInput_setPassword.clearText();
    var i = "";
    if (y.CastleModel.userData.hasEmail) {
      i = y.CastleModel.userData.email;
    } else if (y.CastleModel.userData.isConnectedToFacebook) {
      i = y.CastleModel.userData.facebookEmail;
    }
    this._txtInput_email.text = i;
    var n = this.dialogProperties.dialogStyle == CastleSaveAccountDialog.STYLE_MANDATORY;
    this.dialogDisp.mc_password.visible = !this._isSaveAccount;
    this.dialogDisp.mc_account.visible = this._isSaveAccount;
    this.dialogDisp.btn_close.visible = !n;
    this.dialogDisp.btn_cancel.visible = !n;
    this.resetError();
    this._inputBehaviours.forEach(function (e) {
      return e.onShow();
    });
  };
  CastleSaveAccountDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._inputBehaviours.forEach(function (e) {
      return e.onHide();
    });
  };
  CastleSaveAccountDialog.prototype.resetError = function () {
    this.dialogDisp.mc_account.mc_blacklistError.visible = false;
    this.dialogDisp.mc_account.mc_passwordError.visible = false;
    this.dialogDisp.mc_password.mc_passwordError.visible = false;
  };
  CastleSaveAccountDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (v.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onValidate();
      }
    }
  };
  CastleSaveAccountDialog.prototype.onValidate = function () {
    this.resetError();
    this.saveAccountCredentials();
  };
  CastleSaveAccountDialog.prototype.showError = function (e, t, i) {
    this.textFieldManager.registerTextField(t.txt_text, new d.LocalizedTextVO(e), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    t.x = i.x;
    t.y = i.y;
    t.visible = true;
    t.scaleX = 0;
    t.scaleY = 0;
    C.TweenLite.to(t, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: g.Bounce.easeOut
    });
  };
  Object.defineProperty(CastleSaveAccountDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSaveAccountDialog.prototype.fieldAreValid = function () {
    var e;
    var t;
    var i = true;
    var n = true;
    if (this._isSaveAccount) {
      e = s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_email.text);
      t = s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_saveAccountPassword.text);
      i = this.emailIsValid(e);
      n = this.passwordIsValid(t, this.dialogDisp.mc_account.mc_passwordError, this.accPasswordErrorPosition);
    } else {
      i = true;
      t = s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_setPassword.text);
      n = this.passwordIsValid(t, this.dialogDisp.mc_password.mc_passwordError, this.passwordErrorPosition);
    }
    return i && n;
  };
  CastleSaveAccountDialog.prototype.sendDataToServer = function () {
    var e = "";
    var t = "";
    if (this._isSaveAccount) {
      e = s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_email.text);
      t = s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_saveAccountPassword.text);
    } else {
      t = s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_setPassword.text);
    }
    y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SSetCredentials("", e, t));
  };
  CastleSaveAccountDialog.prototype.saveAccountCredentials = function () {
    if (this.fieldAreValid()) {
      E.CastleBasicController.getInstance().addEventListener(O.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
      v.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      var e = {
        MAIL: s.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_email.text),
        NEWSLETTER: y.CastleModel.playerEmailData.hasNewsletterSubscription
      };
      o.BasicModel.smartfoxClient.sendMessage(o.BasicSmartfoxConstants.C2S_VERIFY_PLAYER_MAIL_EVENT, [JSON.stringify(e)]);
    }
  };
  CastleSaveAccountDialog.prototype.onResponse = function (e) {
    E.CastleBasicController.getInstance().removeEventListener(O.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
    switch (e.status) {
      case O.CastleMailVerificationAnswerEvent.ALL_OK:
        this.showLoading();
        this.controller.addEventListener(f.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
        this.sendDataToServer();
        break;
      case O.CastleMailVerificationAnswerEvent.GENERAL_ERROR:
        this.showError("GENERAL_ERROR_1", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case O.CastleMailVerificationAnswerEvent.EMAIL_BLOCKED:
        this.showError("errorCode_173", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case O.CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED:
        this.showError("EMAIL_DOMAIN_BLOCKED_8", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case O.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE:
        this.showError("errorCode_23", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case O.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED:
        this.showError("dialog_mailVertication_email_cooldown", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case O.CastleMailVerificationAnswerEvent.EMAIL_INVALID:
        this.showError("generic_register_emailwrong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case O.CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG:
        this.showError("generic_register_emaillong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
    }
    v.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastleSaveAccountDialog.prototype.onSDCArrived = function (e) {
    this.controller.removeEventListener(f.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
    v.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    var t = p.int(e.params[0]);
    this.hideLoading();
    switch (t) {
      case c.ERROR.ALL_OK:
        this.hide();
        y.CastleModel.userData.email = this._txtInput_email.text;
        if (this.dialogProperties.okCallbackFunction != null) {
          this.dialogProperties.okCallbackFunction();
        }
        M.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("dialog_saveAccount_success_title"), u.Localize.text("dialog_saveAccount_success_desc")));
        break;
      case c.ERROR.EMAIL_ALREADY_IN_USE:
        this.showError("errorCode_23", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case c.ERROR.INVALID_EMAIL:
        this.showError("generic_register_emailwrong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case c.ERROR.WRONG_MODE:
        this.showError("GENERAL_ERROR_1", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
    }
  };
  CastleSaveAccountDialog.prototype.showLoading = function () {
    M.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(x.CastleExternalPreloaderDialog, new A.CastleExternalPreloaderDialogProperties(null), b.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  CastleSaveAccountDialog.prototype.emailIsValid = function (e) {
    if (e.length == 0 || e == "") {
      this.showError("error_mail_empty", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
      return false;
    } else if (s.TextValide.isEmailString(e)) {
      return !!s.TextValide.isSmartFoxValide(e) || (this.showError("generic_register_email_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition), false);
    } else {
      this.showError("generic_register_emailwrong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
      return false;
    }
  };
  CastleSaveAccountDialog.prototype.passwordIsValid = function (e, t, i) {
    if (!e || e.length < h.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this.showError(new d.LocalizedTextVO("error_password_too_short", [h.CredentialsValidationConstants.PASSWORD_MIN_LENGTH]).compose(), t, i);
      return false;
    } else {
      return !!s.TextValide.isSmartFoxValide(e) || (this.showError("error_password_empty", t, i), false);
    }
  };
  CastleSaveAccountDialog.prototype.hideLoading = function () {
    R.CastleLayoutManager.getInstance().hideDialog(x.CastleExternalPreloaderDialog);
  };
  CastleSaveAccountDialog.NAME = "CastleSaveAccountExternal_M";
  CastleSaveAccountDialog.STYLE_NORMAL = "normal";
  CastleSaveAccountDialog.STYLE_MANDATORY = "mandatory";
  CastleSaveAccountDialog.STYLE_FORUM = "forum";
  CastleSaveAccountDialog.TYPE_SAVE_ACCOUNT = "setAccount";
  CastleSaveAccountDialog.TYPE_SAVE_PASSWORD = "setPassword";
  return CastleSaveAccountDialog;
}(S.CastleExternalDialog);
exports.CastleSaveAccountDialog = P;
var M = require("./9.js");
var R = require("./17.js");
var V = require("./38.js");
var x = require("./154.js");
l.classImplementsInterfaces(P, "ICollectableRendererList");