Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./11.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./20.js");
var h = function (e) {
  function DuplicatedEmailPopupDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, DuplicatedEmailPopupDialog.NAME) || this;
  }
  n.__extends(DuplicatedEmailPopupDialog, e);
  DuplicatedEmailPopupDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_support], p.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    var i = new s.HTMLTextCustomVO();
    i.addLocalizedTextVO(new s.LocalizedTextVO("dialog_options_multipleAccounts_mailOrName_change_alias_desc", [s.Localize.text(this.standardDialogProperties.copy), s.Localize.text(o.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId)]));
    var n = new s.HTMLLinkFormatVO(r.ClientConstColor.GENERIC_LIGHT_BLUE2, o.GGSTextDecoration.UNDERLINE);
    var a = new s.HTMLLinkFormatVO(r.ClientConstColor.GENERIC_LIGHT_BLUE2, o.GGSTextDecoration.UNDERLINE);
    var l = new s.HTMLLinkFormatVO(r.ClientConstColor.GENERIC_LIGHT_BLUE2, o.GGSTextDecoration.UNDERLINE);
    i.linkFormats = new s.HTMLLinkFormatsVO(n, a, l);
    var u = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, i);
    u.htmlLinkClick.add(this.bindFunction(this.onClickLink));
    u.autoFitToBounds = true;
    this.dialogDisp.btn_support.toolTipText = "generic_support";
  };
  DuplicatedEmailPopupDialog.prototype.onClickSupport = function () {
    o.SupportUtil.navigateToSupport(o.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, u.CastleModel.userData.userName, u.CastleModel.userData.playerID, u.CastleModel.userData.userID, o.GGSCountryController.instance.currentCountry.ggsLanguageCode);
  };
  DuplicatedEmailPopupDialog.prototype.onClickLink = function (e, t) {
    try {
      var i = new a.URLRequest(t);
      a.navigateToURL(i, "goodgamestudios");
    } catch (e) {
      o.error("cant navigate to url");
    }
  };
  DuplicatedEmailPopupDialog.prototype.onClick = function (t) {
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
  Object.defineProperty(DuplicatedEmailPopupDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DuplicatedEmailPopupDialog.__initialize_static_members = function () {
    DuplicatedEmailPopupDialog.NAME = "CastleChangePasswordForSocialMigrationConfirmed";
  };
  return DuplicatedEmailPopupDialog;
}(l.CastleExternalDialog);
exports.DuplicatedEmailPopupDialog = h;
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();