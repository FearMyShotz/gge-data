Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./12.js");
var l = require("./45.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./13.js");
var p = require("./52.js");
var h = require("./8.js");
var g = require("./25.js");
var C = require("./11.js");
var _ = require("./985.js");
var m = createjs.Point;
var f = require("./36.js");
var O = function (e) {
  function ModernPackageShopResourceTipDialog() {
    return e.call(this, ModernPackageShopResourceTipDialog.NAME) || this;
  }
  n.__extends(ModernPackageShopResourceTipDialog, e);
  ModernPackageShopResourceTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], f.ClickFeedbackButton);
  };
  ModernPackageShopResourceTipDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateDialog();
  };
  ModernPackageShopResourceTipDialog.prototype.updateDialog = function () {
    this.dialogDisp.mc_arrow.visible = false;
    this.dialogDisp.mc_worldmapObject.visible = false;
    this.dialogDisp.mc_currency0.visible = false;
    this.dialogDisp.mc_currency1.visible = false;
    this.destroyCollectableRenderList();
    if (this.dialogProperties.relevantCurrencyTypes.length >= 2) {
      this.setCurrencyByMultiple();
    } else if (this.dialogProperties.relevantCurrencyTypes.length == 1) {
      this.setCurrencyBySingle();
    }
  };
  ModernPackageShopResourceTipDialog.prototype.setCurrencyByMultiple = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_notEnoughCurrency_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(this.getDescTextIdByMultiple()));
    for (var e = 0; e < ModernPackageShopResourceTipDialog.MAX_CURRENCIES_TO_SHOW; ++e) {
      this.addCurrencyIcon(this.dialogDisp.getChildByName("mc_currency" + e), this.dialogProperties.relevantCurrencyTypes[e]);
    }
  };
  ModernPackageShopResourceTipDialog.prototype.setCurrencyBySingle = function () {
    var e = this.dialogProperties.relevantCurrencyTypes[0];
    var t = _.ModernPackageShopResourceTipEnum.getTypeByVO(e);
    this.dialogDisp.mc_arrow.visible = true;
    this.dialogDisp.mc_worldmapObject.visible = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId(t.titleTextId))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(t.descTextId));
    this.dialogDisp.mc_worldmapObject.gotoAndStop(t.worldmapObjectFrame);
    this.addCurrencyIcon(this.dialogDisp.mc_currency1, e);
  };
  ModernPackageShopResourceTipDialog.prototype.addCurrencyIcon = function (e, t) {
    var i = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, ModernPackageShopResourceTipDialog.CURRENCY_ICON_DIMENSION);
    i.tooltip.useAmount = false;
    g.CollectableRenderHelper.displaySingleItemComplete(this, new c.CollectableRenderClips(e), l.CollectableHelper.createVO(t.type, 1, t.id), i);
  };
  ModernPackageShopResourceTipDialog.prototype.getDescTextIdByMultiple = function () {
    var e = this.dialogProperties.relevantCurrencyTypes[0];
    var t = this.dialogProperties.relevantCurrencyTypes[1];
    if (e.type == r.CollectableEnum.GENERIC_CURRENCY && e.id == p.ClientConstCurrency.ID_SAMURAI_TOKEN && t.type == r.CollectableEnum.GENERIC_CURRENCY && t.id == p.ClientConstCurrency.ID_SAMURAI_MEDAL) {
      return "dialog_notEnoughCurrency_samuraiMedalAndTokens_desc";
    } else {
      return "dialog_notEnoughCurrency_generic_multiCurrency_desc";
    }
  };
  ModernPackageShopResourceTipDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(ModernPackageShopResourceTipDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopResourceTipDialog.__initialize_static_members = function () {
    ModernPackageShopResourceTipDialog.CURRENCY_ICON_DIMENSION = new m(100, 100);
  };
  ModernPackageShopResourceTipDialog.NAME = "ModernPackageShopResourceTip";
  ModernPackageShopResourceTipDialog.MAX_CURRENCIES_TO_SHOW = 2;
  return ModernPackageShopResourceTipDialog;
}(C.CastleExternalDialog);
exports.ModernPackageShopResourceTipDialog = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();