Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./8.js");
var c = function (e) {
  function FusionForgeHubDialog() {
    return e.call(this, FusionForgeHubDialog.NAME) || this;
  }
  n.__extends(FusionForgeHubDialog, e);
  FusionForgeHubDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_catalysts, this.dialogDisp.btn_tab_shop_soft, this.dialogDisp.btn_tab_shop_hard]);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_quick_guide], _.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(FusionForgeHubDialog.TAB_MAIN, new p.FusionForgeHubDialogMain(this.dialogDisp.tab_main, this.bindFunction(this.onForgeDialogOpened)));
    this._subLayer.set(FusionForgeHubDialog.TAB_CATALYSTS, new d.FusionForgeHubDialogCatalysts(this.dialogDisp.tab_catalysts));
    this._subLayer.set(FusionForgeHubDialog.TAB_SHOP_SOFT, new g.FusionForgeHubDialogShopSoft(this.dialogDisp.tab_shop_soft));
    this._subLayer.set(FusionForgeHubDialog.TAB_SHOP_HARD, new h.FusionForgeHubDialogShopHard(this.dialogDisp.tab_shop_hard));
    this.dialogDisp.btn_tab_main.toolTipText = "dialog_fusionHub_fusionForges_title";
    this.dialogDisp.btn_tab_catalysts.toolTipText = "dialog_fusionHub_catalystOverview_title";
    this.dialogDisp.btn_tab_shop_soft.toolTipText = "dialog_fusionHub_FCShop_title";
    this.dialogDisp.btn_tab_shop_hard.toolTipText = "dialog_fusionHub_HCShop_title";
    this.dialogDisp.btn_help.toolTipText = "help";
  };
  FusionForgeHubDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.fusionProperties.startCategory) {
      this.changeCategory(this.fusionProperties.startCategory);
    } else {
      this.changeCategory(FusionForgeHubDialog.TAB_MAIN);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_quick_guide.txt_value, new s.LocalizedTextVO("dialog_decoForge_quickGuide_button"));
  };
  FusionForgeHubDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.gotoAndStop(r.int(t ? 2 : 1));
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == FusionForgeHubDialog.TAB_MAIN);
      updateButton(this.dialogDisp.btn_tab_catalysts, this._currentCategory == FusionForgeHubDialog.TAB_CATALYSTS);
      updateButton(this.dialogDisp.btn_tab_shop_soft, this._currentCategory == FusionForgeHubDialog.TAB_SHOP_SOFT);
      updateButton(this.dialogDisp.btn_tab_shop_hard, this._currentCategory == FusionForgeHubDialog.TAB_SHOP_HARD);
    }
  };
  FusionForgeHubDialog.prototype.getHelpText = function () {
    switch (this._currentCategory) {
      case FusionForgeHubDialog.TAB_MAIN:
        return "dialog_fusionHub_fusionForges_help";
      case FusionForgeHubDialog.TAB_CATALYSTS:
        return "dialog_fusionHub_catalystOverview_help";
      case FusionForgeHubDialog.TAB_SHOP_SOFT:
        return "dialog_fusionHub_FCShop_help";
      case FusionForgeHubDialog.TAB_SHOP_HARD:
        return "dialog_fusionHub_HCShop_help";
      default:
        return "";
    }
  };
  FusionForgeHubDialog.prototype.onClick = function (t) {
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.changeCategory(FusionForgeHubDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_catalysts:
          this.changeCategory(FusionForgeHubDialog.TAB_CATALYSTS);
          break;
        case this.dialogDisp.btn_tab_shop_soft:
          this.changeCategory(FusionForgeHubDialog.TAB_SHOP_SOFT);
          break;
        case this.dialogDisp.btn_tab_shop_hard:
          this.changeCategory(FusionForgeHubDialog.TAB_SHOP_HARD);
          break;
        case this.dialogDisp.btn_quick_guide:
          u.CastleExternalDialog.dialogHandler.registerDialogs(C.DecorationForgeQuickGuideDialog);
          break;
        case this.dialogDisp.btn_help:
          u.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text(this.getHelpText()));
      }
    }
  };
  FusionForgeHubDialog.prototype.onForgeDialogOpened = function () {
    this.hide();
  };
  Object.defineProperty(FusionForgeHubDialog.prototype, "fusionProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  FusionForgeHubDialog.__initialize_static_members = function () {
    FusionForgeHubDialog.NAME = "FusionForgeHub";
    FusionForgeHubDialog.TAB_MAIN = "tab_main";
    FusionForgeHubDialog.TAB_CATALYSTS = "tab_catalysts";
    FusionForgeHubDialog.TAB_SHOP_SOFT = "tab_shop_soft";
    FusionForgeHubDialog.TAB_SHOP_HARD = "tab_shop_hard";
  };
  return FusionForgeHubDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.FusionForgeHubDialog = c;
var u = require("./11.js");
var d = require("./2634.js");
var p = require("./2642.js");
var h = require("./2644.js");
var g = require("./2647.js");
var C = require("./1449.js");
var _ = require("./36.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();