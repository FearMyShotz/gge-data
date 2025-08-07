Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./1114.js");
var c = require("./11.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./20.js");
var g = function (e) {
  function CastleChangePasswordForSocialMigrationConfirmedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleChangePasswordForSocialMigrationConfirmedDialog.NAME) || this;
  }
  n.__extends(CastleChangePasswordForSocialMigrationConfirmedDialog, e);
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_support], h.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("nk_savedAccount_title")));
    var i = new s.HTMLTextCustomVO();
    i.addLocalizedTextVO(new s.LocalizedTextVO("nk_savedAccount_copy", [s.Localize.datetime(l.UserSocialLoginMigrationHelper.getDateOfChange(), s.DateTimeStyle.SHORT, s.DateTimeStyle.NONE), d.CastleModel.userData.userName, "[url=" + l.UserSocialLoginMigrationHelper.getLinkByInstanceID(this.env.networkId) + "]" + l.UserSocialLoginMigrationHelper.getLinkByInstanceID(this.env.networkId) + "[/url]"]));
    var n = new s.HTMLLinkFormatVO(r.ClientConstColor.GENERIC_LIGHT_BLUE2, o.GGSTextDecoration.UNDERLINE);
    var a = new s.HTMLLinkFormatVO(r.ClientConstColor.GENERIC_LIGHT_BLUE2, o.GGSTextDecoration.UNDERLINE);
    var c = new s.HTMLLinkFormatVO(r.ClientConstColor.GENERIC_LIGHT_BLUE2, o.GGSTextDecoration.UNDERLINE);
    i.linkFormats = new s.HTMLLinkFormatsVO(n, a, c);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, i).htmlLinkClick.add(this.bindFunction(this.onClickLink));
    this.dialogDisp.btn_support.toolTipText = "generic_support";
    this.dialogDisp.btn_ok.visible = !this.env.loginIsKeyBased || o.EnvGlobalsHandler.globals.networkId == 86 || o.EnvGlobalsHandler.globals.networkId == 87;
    this.dialogDisp.btn_close.visible = !this.env.loginIsKeyBased || o.EnvGlobalsHandler.globals.networkId == 86 || o.EnvGlobalsHandler.globals.networkId == 87;
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.onClickSupport = function () {
    o.SupportUtil.navigateToSupport(o.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, d.CastleModel.userData.userName, d.CastleModel.userData.playerID, d.CastleModel.userData.userID, o.GGSCountryController.instance.currentCountry.ggsLanguageCode);
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.onClickLink = function (e, t) {
    try {
      var i = new a.URLRequest(t);
      a.navigateToURL(i, "goodgamestudios");
    } catch (e) {
      o.error("cant navigate to url");
    }
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_support:
        this.onClickSupport();
    }
  };
  CastleChangePasswordForSocialMigrationConfirmedDialog.__initialize_static_members = function () {
    CastleChangePasswordForSocialMigrationConfirmedDialog.NAME = "CastleChangePasswordForSocialMigrationConfirmed";
  };
  return CastleChangePasswordForSocialMigrationConfirmedDialog;
}(c.CastleExternalDialog);
exports.CastleChangePasswordForSocialMigrationConfirmedDialog = g;
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();