Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./2603.js");
var u = require("./4.js");
var d = require("./8.js");
var p = function (e) {
  function CastleBuyUnlockedCrestSymbolDialog() {
    var t = this;
    t.color = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleBuyUnlockedCrestSymbolDialog.NAME) || this;
  }
  n.__extends(CastleBuyUnlockedCrestSymbolDialog, e);
  CastleBuyUnlockedCrestSymbolDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_cost_info.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_crestSymbol_buy_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_crestSymbol_buy"));
    d.ButtonHelper.initBasicButtons([this.dialogDisp.btn_confirm, this.dialogDisp.btn_deny, this.dialogDisp.btn_close]);
  };
  CastleBuyUnlockedCrestSymbolDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.assetHolder);
    this.dialogDisp.assetHolder.addChild(h.CrestHelper.getCrestSymbolGraphic(this.dialogProperties.symbolVO, 100, 100, null));
    d.ButtonHelper.enableButton(this.dialogDisp.btn_confirm, this.canAffordSymbol());
    if (this.dialogProperties.symbolVO.costC1 > 0) {
      this.dialogDisp.mc_cost_info.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost_info.txt_value, new s.LocalizedNumberVO(this.dialogProperties.symbolVO.costC1)).color = this.color;
      this.dialogDisp.mc_cost_info.toolTipText = "cash";
    } else {
      this.dialogDisp.mc_cost_info.gotoAndStop(1);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost_info.txt_value, new s.LocalizedNumberVO(this.dialogProperties.symbolVO.costC2)).color = this.color;
      this.dialogDisp.mc_cost_info.toolTipText = "dialog_fame_rewardC2";
    }
  };
  CastleBuyUnlockedCrestSymbolDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_confirm:
          u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SBuyUnlockedSymbolVO(this.dialogProperties.symbolVO.id));
        case this.dialogDisp.btn_deny:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleBuyUnlockedCrestSymbolDialog.prototype.canAffordSymbol = function () {
    var e = u.CastleModel.currencyData.c1Amount >= this.dialogProperties.symbolVO.costC1 && u.CastleModel.currencyData.c2Amount >= this.dialogProperties.symbolVO.costC2;
    this.color = e ? l.ClientConstColor.GENERIC_BLACK : l.ClientConstColor.GENERIC_RED;
    return e;
  };
  Object.defineProperty(CastleBuyUnlockedCrestSymbolDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyUnlockedCrestSymbolDialog.__initialize_static_members = function () {
    CastleBuyUnlockedCrestSymbolDialog.NAME = "CastleCrestBuySymbolExt";
  };
  return CastleBuyUnlockedCrestSymbolDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBuyUnlockedCrestSymbolDialog = p;
var h = require("./61.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();