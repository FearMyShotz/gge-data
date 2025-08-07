Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./67.js");
var c = require("./19.js");
var u = require("./13.js");
var d = require("./20.js");
var p = require("./8.js");
var h = require("./25.js");
var g = require("./367.js");
var C = require("./66.js");
var _ = require("./11.js");
var m = createjs.Point;
var f = function (e) {
  function ModernSimpleCostDialog() {
    return e.call(this, ModernSimpleCostDialog.NAME) || this;
  }
  n.__extends(ModernSimpleCostDialog, e);
  ModernSimpleCostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], d.ClickFeedbackButtonHover);
  };
  ModernSimpleCostDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(this.dialogProps.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.cost_1.txt_label, new s.LocalizedTextVO("cost_simple"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.mc_discount.txt_discount, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.dialogProps.discount]));
    this.dialogDisp.mc_cost.mc_discount.visible = this.dialogProps.discount > 0;
    this.dialogDisp.mc_cost.cost_1.visible = this.dialogProps.costs.length == 1;
    this.dialogDisp.mc_cost.cost_2.visible = this.dialogProps.costs.length == 2;
    this.dialogDisp.mc_cost.cost_3.visible = this.dialogProps.costs.length == 3;
    var i = this.dialogDisp.mc_cost["cost_" + this.dialogProps.costs.length];
    if (i) {
      var n = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_COST_LIST, new m(30, 20));
      n.tooltip.useAmount = false;
      n.costTextfield.enableMarkOnNotEnough = true;
      h.CollectableRenderHelper.displayMultipleItemsComplete(this, new l.CollectableRenderClipsList(i, "mc_item"), this.dialogProps.costs, n);
    }
    var a = C.CostHelper.canAfford(new g.CollectablesCosts(this.dialogProps.costs));
    var d = !this.dialogProps.disableBuyIfCantAfford || a;
    p.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, d, this.dialogProps.enableBuyDelay);
  };
  ModernSimpleCostDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
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
    }
  };
  Object.defineProperty(ModernSimpleCostDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernSimpleCostDialog.NAME = "ModernSimpleCostExt";
  return ModernSimpleCostDialog;
}(_.CastleExternalDialog);
exports.ModernSimpleCostDialog = f;
a.classImplementsInterfaces(f, "ICollectableRendererList");