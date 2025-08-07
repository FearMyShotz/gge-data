Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./39.js");
var s = require("./4.js");
var r = require("./8.js");
var l = function (e) {
  function CastleBuySlotDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleBuySlotDialog, e);
  CastleBuySlotDialog.prototype.initLoaded = function (t = null) {
    r.ButtonHelper.initBasicButton(this.dialogDisp.btn_ok);
    if (this.dialogDisp.btn_help) {
      r.ButtonHelper.initBasicButton(this.dialogDisp.btn_help);
    }
    e.prototype.initLoaded.call(this, t);
  };
  CastleBuySlotDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    r.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
    this.dialogDisp.info_time.toolTipText = "rentduration";
    this.dialogDisp.info_costs.toolTipText = a.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = s.CastleModel.boosterSaleData.hideDiscount();
  };
  CastleBuySlotDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.buySlotDialogProperties.functionOk != null) {
          this.buySlotDialogProperties.functionOk(null);
        }
        break;
      case this.dialogDisp.btn_help:
        c.CastleDialogHandler.getInstance().showHelper("", this.buySlotDialogProperties.helpertext);
    }
  };
  Object.defineProperty(CastleBuySlotDialog.prototype, "buySlotDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuySlotDialog;
}(require("./1418.js").CastleCostInfoDialog);
exports.CastleBuySlotDialog = l;
var c = require("./9.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");