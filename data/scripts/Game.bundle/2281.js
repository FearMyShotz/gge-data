Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./100.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./23.js");
var E = require("./23.js");
var y = require("./258.js");
var b = require("./16.js");
var D = require("./2282.js");
var I = require("./37.js");
var T = require("./13.js");
var v = require("./4.js");
var S = require("./43.js");
var A = require("./9.js");
var L = require("./14.js");
var P = require("./20.js");
var M = require("./285.js");
var R = require("./8.js");
var V = require("./916.js");
var x = require("./917.js");
var w = require("./154.js");
var B = require("./201.js");
var F = require("./382.js");
var N = require("./354.js");
var k = function (e) {
  function OptionsDialogChangePasswordItem(t) {
    var i = e.call(this, new (p.getDefinitionByName("CastleOptions_ResetPasswordItem"))(), t) || this;
    i._inputBehaviours = [];
    R.ButtonHelper.initButtons([i.contentMC.btn_ok], P.ClickFeedbackButtonHover);
    R.ButtonHelper.initBasicButton(i.contentMC.mc_forgotPW, 1);
    i.checkBoxCompPassVisible = new o.CheckBoxButton(i.contentMC.cbx_showPW, true);
    L.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_default, new m.LocalizedTextVO("dialog_options_changePassword_title"), new c.InternalGGSTextFieldConfigVO(true));
    L.CastleComponent.textFieldManager.registerTextField(i._headerMC.mc_open.txt_selected, new m.LocalizedTextVO("dialog_options_changePassword_title"), new c.InternalGGSTextFieldConfigVO(true));
    L.CastleComponent.textFieldManager.registerTextField(i.contentMC.txt_pass_old, new m.LocalizedTextVO("dialog_changePassword_old"), new c.InternalGGSTextFieldConfigVO(true));
    i.contentMC.mc_forgotPW.txt_copy.wordWrap = true;
    i.contentMC.mc_forgotPW.txt_copy.defaultTextFormat.align = l.GGSTextAlign.LEFT;
    var n = new _.HTMLTextCustomVO();
    n.addLocalizedTextVO(new m.LocalizedTextVO("dialog_changePassword_lost"));
    var a = new C.HTMLLinkFormatVO(b.ClientConstColor.DEFAULT_SUBSCRIPTION, r.GGSTextDecoration.UNDERLINE);
    var s = new C.HTMLLinkFormatVO(b.ClientConstColor.DEFAULT_SUBSCRIPTION, r.GGSTextDecoration.UNDERLINE);
    var d = new C.HTMLLinkFormatVO(b.ClientConstColor.DEFAULT_SUBSCRIPTION, r.GGSTextDecoration.UNDERLINE);
    n.linkFormats = new g.HTMLLinkFormatsVO(a, s, d);
    L.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_forgotPW.txt_copy, n, new c.InternalGGSTextFieldConfigVO(true));
    L.CastleComponent.textFieldManager.registerTextField(i.contentMC.txt_pass_new, new m.LocalizedTextVO("dialog_changePassword_new"), new c.InternalGGSTextFieldConfigVO(true));
    L.CastleComponent.textFieldManager.registerTextField(i.contentMC.txt_showPW, new m.LocalizedTextVO("dialog_changePassword_show"), new c.InternalGGSTextFieldConfigVO(true));
    i.itxt_pass_old = L.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_old.txt_value, new f.TextVO(""), new c.InternalGGSTextFieldConfigVO(true));
    i.itxt_pass_old.maxChars = y.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    i.itxt_pass_old.type = u.TextFieldType.INPUT;
    i.itxt_pass_old.displayAsPassword = false;
    i.itxt_pass_old.displayAsPassword = true;
    i.itxt_pass_old.clearText();
    i.itxt_pass_old.tabIndex = 1;
    i.itxt_pass_new = L.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_new.txt_value, new f.TextVO(""), new c.InternalGGSTextFieldConfigVO(true));
    i.itxt_pass_new.maxChars = y.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    i.itxt_pass_new.type = u.TextFieldType.INPUT;
    i.itxt_pass_new.displayAsPassword = false;
    i.itxt_pass_new.displayAsPassword = true;
    i.itxt_pass_new.clearText();
    i.itxt_pass_new.tabIndex = 2;
    i._inputBehaviours = [];
    i._inputBehaviours.push(new M.HighlightAndClearInputTextBehaviour(i.contentMC.mc_old, i.itxt_pass_old));
    i._inputBehaviours.push(new M.HighlightAndClearInputTextBehaviour(i.contentMC.mc_new, i.itxt_pass_new));
    i.checkBoxCompPassVisible.selected();
    i.changePasswordVisibility();
    i.itxt_pass_new.textContentVO.stringValue = "";
    i.itxt_pass_old.textContentVO.stringValue = "";
    i.contentMC.mc_oldPasswordError.visible = false;
    i.contentMC.mc_newPasswordError.visible = false;
    L.CastleComponent.textFieldManager.registerTextField(i.contentMC.btn_ok.txt_label, new f.TextVO(T.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_changePassword_confirm_button")), new c.InternalGGSTextFieldConfigVO(true));
    R.ButtonHelper.enableButton(i.contentMC.btn_ok, false);
    return i;
  }
  n.__extends(OptionsDialogChangePasswordItem, e);
  OptionsDialogChangePasswordItem.prototype.changePasswordVisibility = function () {
    this.checkBoxCompPassVisible.toggleSelected();
    this.itxt_pass_old.displayAsPassword = !this.checkBoxCompPassVisible.isSelected;
    this.itxt_pass_new.displayAsPassword = !this.checkBoxCompPassVisible.isSelected;
  };
  OptionsDialogChangePasswordItem.prototype.changePassword = function () {
    this.contentMC.mc_oldPasswordError.visible = false;
    this.contentMC.mc_newPasswordError.visible = false;
    if (this.itxt_pass_old.text.length < y.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this.showError("error_password_too_short", this.contentMC.mc_oldPasswordError);
    } else if (s.TextValide.isSmartFoxValide(this.itxt_pass_old.text)) {
      if (this.itxt_pass_new.text.length < y.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
        this.showError("error_password_too_short", this.contentMC.mc_newPasswordError);
      } else if (s.TextValide.isSmartFoxValide(this.itxt_pass_new.text)) {
        R.ButtonHelper.enableButton(this.contentMC.btn_ok, false);
        L.CastleComponent.controller.addEventListener(I.CastleServerMessageArrivedEvent.SCP_ARRIVED, this.bindFunction(this.onSDXArrived));
        v.CastleModel.smartfoxClient.sendCommandVO(new D.C2SChangePasswordVO(this.itxt_pass_old.text, this.itxt_pass_new.text));
      } else {
        this.showError("error_password_invalid", this.contentMC.mc_newPasswordError);
      }
    } else {
      this.showError("error_password_invalid", this.contentMC.mc_oldPasswordError);
    }
  };
  OptionsDialogChangePasswordItem.prototype.onSDXArrived = function (e) {
    L.CastleComponent.controller.removeEventListener(I.CastleServerMessageArrivedEvent.SCP_ARRIVED, this.bindFunction(this.onSDXArrived));
    L.CastleComponent.controller.removeEventListener(I.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDXArrived));
    if (e.params && e.params.length > 0) {
      if (e.params[0] == 0) {
        this.showError("error_password_wrong", this.contentMC.mc_oldPasswordError);
      } else {
        L.CastleComponent.layoutManager.getDialog(N.OptionsDialog).popoverComponent.startSequence();
      }
    }
    R.ButtonHelper.enableButton(this.contentMC.btn_ok, true);
  };
  OptionsDialogChangePasswordItem.prototype.showError = function (e, t) {
    L.CastleComponent.textFieldManager.registerTextField(t.txt_text, new m.LocalizedTextVO(e), new c.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    t.visible = true;
    t.scaleX = 0;
    t.scaleY = 0;
    E.TweenLite.to(t, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: O.Bounce.easeOut
    });
  };
  OptionsDialogChangePasswordItem.prototype.showLoading = function () {
    A.CastleDialogHandler.getInstance().registerDialogsWithType(w.CastleExternalPreloaderDialog, new B.CastleExternalPreloaderDialogProperties(null), false, S.CastleDialogConsts.PRIORITY_TOP, 0, S.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  OptionsDialogChangePasswordItem.prototype.updateItem = function () {
    e.prototype.updateItem.call(this);
    this.disp.visible = !v.CastleModel.userData.isPasswordTemporary && !a.EnvGlobalsHandler.globals.loginIsKeyBased && !a.EnvGlobalsHandler.globals.isOnSpecialServer;
  };
  OptionsDialogChangePasswordItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._inputBehaviours.forEach(function (e) {
      return e.onShow();
    });
  };
  OptionsDialogChangePasswordItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._inputBehaviours.forEach(function (e) {
      return e.onHide();
    });
  };
  OptionsDialogChangePasswordItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (R.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.contentMC.btn_ok:
          this.changePassword();
          break;
        case this.contentMC.cbx_showPW:
          this.changePasswordVisibility();
          break;
        case this.contentMC.mc_forgotPW:
          this.openLostPasswordDialog();
      }
    }
  };
  OptionsDialogChangePasswordItem.prototype.openLostPasswordDialog = function () {
    var e = v.CastleModel.userData.hasValidatedEmail && v.CastleModel.userData.hasEmail ? v.CastleModel.userData.email : "";
    var t = e != "" ? "generic_login_lostpassword_copy" : "dialog_options_forgotPassword_noEmail_desc";
    A.CastleDialogHandler.getInstance().registerDialogs(V.CastleLostPasswordDialog, new x.CastleLostPasswordDialogProperties(T.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_forgotPassword_title"), h.Localize.text(t), null, null, h.Localize.text("generic_btn_okay"), h.Localize.text("generic_btn_cancel"), e));
  };
  OptionsDialogChangePasswordItem.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
    var i = this.itxt_pass_new.text.trim();
    var n = this.itxt_pass_old.text.trim();
    if (t.target == this.contentMC.mc_new.txt_value || this.contentMC.mc_old.txt_value) {
      R.ButtonHelper.enableButton(this.contentMC.btn_ok, i != "" && n != "");
    }
  };
  return OptionsDialogChangePasswordItem;
}(F.AOptionsDialogCollapsibleItem);
exports.OptionsDialogChangePasswordItem = k;
d.classImplementsInterfaces(k, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");