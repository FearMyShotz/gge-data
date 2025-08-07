Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./11.js");
var C = createjs.Point;
var _ = function (e) {
  function ModernCostConfirmationDialog(t = null) {
    return e.call(this, t || ModernCostConfirmationDialog.NAME) || this;
  }
  n.__extends(ModernCostConfirmationDialog, e);
  ModernCostConfirmationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], O.ClickFeedbackButton);
  };
  ModernCostConfirmationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialoge_shapeshifter_Travel_title"))).visible = this.dialogProps.cost.amount > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(this.dialogProps.copy));
    this.addCostClip(this.dialogDisp.mc_icon);
    this.dialogDisp.mc_discount.visible = this.dialogProps.discount > 0;
  };
  ModernCostConfirmationDialog.prototype.addCostClip = function (e) {
    if (this.dialogProps.cost.amount > 0) {
      var t = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, new C(30, 30));
      t.tooltip.useAmount = false;
      var i = new c.CollectableRenderClips();
      i.addIconMc(e);
      m.CollectableRenderHelper.displaySingleItemComplete(this, i, this.dialogProps.cost, t);
    } else {
      a.MovieClipHelper.clearMovieClip(e);
    }
    var n = 0;
    n = f.instanceOfClass(this.dialogProps.cost, "CollectableItemC2VO") ? l.int(p.CastleModel.currencyData.c2Amount) : f.instanceOfClass(this.dialogProps.cost, "CollectableItemC1VO") ? l.int(p.CastleModel.currencyData.c1Amount) : l.int(p.CastleModel.currencyData.getAmountById(this.dialogProps.cost.id));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new r.LocalizedTextVO("value_proportional_value", [this.dialogProps.cost.amount, n])).visible = this.dialogProps.cost.amount > 0;
  };
  ModernCostConfirmationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        if (this.dialogProps.onCancel) {
          this.dialogProps.onCancel();
        }
        break;
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.dialogProps.onBuy) {
          this.dialogProps.onBuy();
        }
    }
  };
  Object.defineProperty(ModernCostConfirmationDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernCostConfirmationDialog.NAME = "CastleCostConfirmation";
  return ModernCostConfirmationDialog;
}(g.CastleExternalDialog);
exports.ModernCostConfirmationDialog = _;
var m = require("./25.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");
var f = require("./1.js");
var O = require("./36.js");