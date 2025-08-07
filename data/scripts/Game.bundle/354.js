Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./915.js");
var c = require("./278.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./20.js");
var h = require("./294.js");
var g = require("./271.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = require("./2277.js");
var f = require("./2301.js");
var O = require("./2305.js");
var E = require("./2306.js");
var y = function (e) {
  function OptionsDialog() {
    return e.call(this, OptionsDialog.NAME) || this;
  }
  n.__extends(OptionsDialog, e);
  OptionsDialog.prototype.initLoaded = function (t) {
    var i = this;
    if (t === undefined) {
      t = null;
    }
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close], p.ClickFeedbackButtonHover);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_options, this.dialogDisp.btn_accountDetails], p.ClickFeedbackButtonHover, 1);
    var n = new O.OptionsDialogSublayerAccordion(this.dialogDisp.tab_accordion);
    this.sublayerSwitcher = new c.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayerSwitcher.autoUpdateTabs = false;
    this.sublayerSwitcher.add(OptionsDialog.TAB_OPTIONS, this.dialogDisp.btn_options, n);
    this.sublayerSwitcher.add(OptionsDialog.TAB_ACCOUNT_DETAILS, this.dialogDisp.btn_accountDetails, n);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_options.txt_label, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_options.mc_selected.txt_label, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accountDetails.txt_label, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_accountManagement_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accountDetails.mc_selected.txt_label, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_accountManagement_title")));
    var a = new g.SimplePopoverConfig("StatusPopover");
    this._popoverComponent = new h.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(a);
    this._popoverComponent.doWhenLoaded(function () {
      var e = i._popoverComponent.getAssetDisp();
      e.mc_icon.gotoAndStop(3);
      i.textFieldManager.registerTextField(e.txt_text, new s.LocalizedTextVO("dialog_changePassword_done"), new o.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    });
  };
  OptionsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.sublayerSwitcher.switchTo(this.dialogProperties.tabID);
    this.sublayerSwitcher.show();
    this.sublayerSwitcher.addOnSwitchedListener(this.bindFunction(this.onSwitched));
    this.onSwitched();
    this._popoverComponent.onShow();
    d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetNewsletterSubscriptionStatusVO());
  };
  OptionsDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
    this.sublayerSwitcher.removeOnSwitchedListener(this.bindFunction(this.onSwitched));
    this._popoverComponent.onHide();
  };
  OptionsDialog.prototype.getSublayerProperties = function (e) {
    switch (e) {
      case OptionsDialog.TAB_OPTIONS:
        return new E.OptionsDialogSublayerAccordionProperties(e, new f.OptionsDialogOptions());
      default:
        return new E.OptionsDialogSublayerAccordionProperties(e, new m.OptionsDialogAccountDetails(this.dialogProperties.shownewsletter));
    }
  };
  OptionsDialog.prototype.onSwitched = function () {
    var e = this.sublayerSwitcher.activeTab == OptionsDialog.TAB_OPTIONS ? "dialog_options_title" : "dialog_options_accountManagement_title";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(e)));
    this.dialogDisp.btn_options.mc_selected.visible = this.sublayerSwitcher.activeTab == OptionsDialog.TAB_OPTIONS;
    this.dialogDisp.btn_accountDetails.mc_selected.visible = this.sublayerSwitcher.activeTab == OptionsDialog.TAB_ACCOUNT_DETAILS;
  };
  OptionsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(OptionsDialog.prototype, "popoverComponent", {
    get: function () {
      return this._popoverComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialog.NAME = "CastleOptionsExternal_P1";
  OptionsDialog.TAB_OPTIONS = 0;
  OptionsDialog.TAB_ACCOUNT_DETAILS = 1;
  return OptionsDialog;
}(_.CastleExternalDialog);
exports.OptionsDialog = y;
a.classImplementsInterfaces(y, "ICollectableRendererList");