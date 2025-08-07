Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./279.js");
var s = require("./8.js");
var r = function (e) {
  function CastleConstructionItemsMainDialog() {
    return e.call(this, CastleConstructionItemsMainDialog.NAME) || this;
  }
  n.__extends(CastleConstructionItemsMainDialog, e);
  CastleConstructionItemsMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.sublayerSwitcher = new a.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayerSwitcher.add(CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN, this.dialogDisp.tab_assignItems, new l.CastleConstructionItemsAssignSublayer(this.dialogDisp.sublayer_assignItems));
    this.sublayerSwitcher.add(CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING, this.dialogDisp.tab_crafting, new u.CastleConstructionItemsCraftingSublayer(this.dialogDisp.sublayer_crafting));
    this.sublayerSwitcher.add(CastleConstructionItemsMainDialog.SUBLAYER_BLUEPRINTS, this.dialogDisp.tab_blueprints, new c.CastleConstructionItemsBlueprintsSublayer(this.dialogDisp.sublayer_blueprints));
    this.dialogDisp.tab_assignItems.toolTipText = "dialog_ci_tab_assign";
    this.dialogDisp.tab_crafting.toolTipText = "dialog_ci_tab_craft";
    this.dialogDisp.tab_blueprints.visible = false;
  };
  CastleConstructionItemsMainDialog.prototype.getSublayerProperties = function (e) {
    switch (e) {
      case CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN:
      default:
        return this.dialogProperties;
    }
  };
  CastleConstructionItemsMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.sublayerSwitcher.switchTo(this.dialogProperties.sublayer);
    this.sublayerSwitcher.show();
  };
  CastleConstructionItemsMainDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.sublayerSwitcher.showHelp();
      }
    }
  };
  CastleConstructionItemsMainDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
  };
  Object.defineProperty(CastleConstructionItemsMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsMainDialog.NAME = "CastleConstructionItemsMain_Sep24";
  CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN = 0;
  CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING = 1;
  CastleConstructionItemsMainDialog.SUBLAYER_BLUEPRINTS = 2;
  return CastleConstructionItemsMainDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleConstructionItemsMainDialog = r;
var l = require("./2621.js");
var c = require("./2708.js");
var u = require("./2709.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");