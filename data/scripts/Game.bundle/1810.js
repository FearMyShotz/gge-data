Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./258.js");
var C = require("./16.js");
var _ = require("./1114.js");
var m = require("./433.js");
var f = require("./37.js");
var O = require("./15.js");
var E = require("./4.js");
var y = require("./1113.js");
var b = require("./471.js");
var D = require("./8.js");
var I = function (e) {
  function CastleChangePasswordForSocialMigrationDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleChangePasswordForSocialMigrationDialog.NAME) || this;
  }
  n.__extends(CastleChangePasswordForSocialMigrationDialog, e);
  CastleChangePasswordForSocialMigrationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    b.CastleTutorialSpotlight.instance.clear();
    m.CastleTutorialClickBlocker.instance.clear();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.TextVO(P.TextHelper.toUpperCaseLocaSafeTextId("nk_saveYourAccount_title")));
    var i = new d.HTMLTextCustomVO();
    i.addLocalizedTextVO(new p.LocalizedTextVO("nk_saveYourAccount_copy", [E.CastleModel.userData.userName, c.Localize.datetime(y.UserSocialLoginMigrationHelper.getDateOfChange(), c.DateTimeStyle.SHORT, c.DateTimeStyle.NONE), c.Localize.datetime(y.UserSocialLoginMigrationHelper.getDateOfChange(), c.DateTimeStyle.SHORT, c.DateTimeStyle.NONE), y.UserSocialLoginMigrationHelper.getNameByInstanceID(this.env.networkId)]));
    var n = new c.HTMLLinkFormatVO(C.ClientConstColor.GENERIC_LIGHT_BLUE2, s.GGSTextDecoration.UNDERLINE);
    var r = new c.HTMLLinkFormatVO(C.ClientConstColor.GENERIC_LIGHT_BLUE2, s.GGSTextDecoration.UNDERLINE);
    var l = new c.HTMLLinkFormatVO(C.ClientConstColor.GENERIC_LIGHT_BLUE2, s.GGSTextDecoration.UNDERLINE);
    i.linkFormats = new u.HTMLLinkFormatsVO(n, r, l);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, i);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_pass1, new p.LocalizedTextVO("nk_saveYourAccount_choosePW"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_pass2, new p.LocalizedTextVO("nk_saveYourAccount_confirmPW"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new p.LocalizedTextVO("nk_saveYourAccount_loginName"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_showPass, new p.LocalizedTextVO("nk_saveYourAccount_showPW_btn"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new p.LocalizedTextVO("nk_saveYourAccount_setPW_btn"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new h.TextVO(E.CastleModel.userData.userName));
    D.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], M.ClickFeedbackButtonHover);
    this.checkBoxCompPassVisible = new o.CheckBoxButton(this.dialogDisp.cbx_showPass, true);
    this.dialogDisp.cbx_showPass.mouseChildren = false;
    this.pass1 = new L.SelectInputFieldComponent(this.dialogDisp.mc_pass1, null, "");
    this.pass2 = new L.SelectInputFieldComponent(this.dialogDisp.mc_pass2, null, "");
    this.pass1.searchField.keyUp.add(this.bindFunction(this.onKeyUp));
    this.pass2.searchField.keyUp.add(this.bindFunction(this.onKeyUp));
    this.checkBoxCompPassVisible.selected();
    this.changePasswordVisibility();
    D.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    a.CommandController.instance.executeCommand(O.CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, [_.SsoUserMoveTrackingEvent.POPUP_SHOWN]);
    this.dialogDisp.btn_close.visible = !this.env.loginIsKeyBased || a.EnvGlobalsHandler.globals.networkId == 86 || a.EnvGlobalsHandler.globals.networkId == 87;
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
    var i = this.pass1.text;
    var n = this.pass2.text;
    if (t.target == this.dialogDisp.mc_pass1.txt_value || t.target == this.dialogDisp.mc_pass2.txt_value) {
      if (i != "" && n != "" && i == n) {
        D.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
        this.dialogDisp.btn_ok.toolTipText = null;
      } else {
        D.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
        this.dialogDisp.btn_ok.toolTipText = "error_password_no_match";
      }
    }
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.changePassword = function () {
    if (this.pass1.text.length < g.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this.showError("error_password_too_short");
    } else if (r.TextValide.isSmartFoxValide(this.pass1.text)) {
      this.controller.addEventListener(f.CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, this.bindFunction(this.onSPSLMSArrived));
      E.CastleModel.smartfoxClient.sendCommandVO(new T.C2SSetPasswordForSocialLoginMigrationVO(this.pass1.text));
    } else {
      this.showError("error_password_invalid");
    }
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.showError = function (e) {
    S.CastleDialogHandler.getInstance().registerDialogs(R.CastleDarkOkDialog, new a.BasicStandardOkDialogProperties("generic_alert_warning", e));
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.onSPSLMSArrived = function (e) {
    if (e.params[0] == v.ERROR.ALL_OK) {
      S.CastleDialogHandler.getInstance().registerDialogs(A.CastleChangePasswordForSocialMigrationConfirmedDialog);
      this.hide();
    }
    this.controller.removeEventListener(f.CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, this.bindFunction(this.onSPSLMSArrived));
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.pass1.searchField.keyUp.remove(this.bindFunction(this.onKeyUp));
    this.pass2.searchField.keyUp.remove(this.bindFunction(this.onKeyUp));
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.changePassword();
          break;
        case this.dialogDisp.cbx_showPass:
          this.changePasswordVisibility();
      }
    }
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.changePasswordVisibility = function () {
    this.checkBoxCompPassVisible.toggleSelected();
    this.pass1.searchField.displayAsPassword = !this.checkBoxCompPassVisible.isSelected;
    this.pass2.searchField.displayAsPassword = !this.checkBoxCompPassVisible.isSelected;
  };
  CastleChangePasswordForSocialMigrationDialog.__initialize_static_members = function () {
    CastleChangePasswordForSocialMigrationDialog.NAME = "CastleChangePasswordForSocialMigration";
  };
  return CastleChangePasswordForSocialMigrationDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleChangePasswordForSocialMigrationDialog = I;
var T = require("./3897.js");
var v = require("./5.js");
var S = require("./9.js");
var A = require("./1112.js");
var L = require("./593.js");
var P = require("./13.js");
var M = require("./20.js");
var R = require("./573.js");
l.classImplementsInterfaces(I, "ICollectableRendererList");
I.__initialize_static_members();