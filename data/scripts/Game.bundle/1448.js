Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./8.js");
var c = require("./11.js");
var u = function (e) {
  function DecorationForgeNotEnoughEnergyDialog() {
    return e.call(this, DecorationForgeNotEnoughEnergyDialog.NAME) || this;
  }
  n.__extends(DecorationForgeNotEnoughEnergyDialog, e);
  DecorationForgeNotEnoughEnergyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], p.ClickFeedbackButton);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_recharge], h.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("attention"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_insufficientEnergyAlert_subtitle"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rechargeTitle, new a.LocalizedTextVO("dialog_decoForge_insufficientEnergyAlert_recharge")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_recharge.txt_text, new a.LocalizedTextVO("recharge")).autoFitToBounds = true;
    this.dialogDisp.mc_item.mouseChilren = false;
    this.dialogDisp.mc_item.toolTipText = "fusionEnergy";
  };
  DecorationForgeNotEnoughEnergyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateInfo();
  };
  DecorationForgeNotEnoughEnergyDialog.prototype.updateInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_item.txt_amount, new a.LocalizedTextVO("value_proportional_value", [this.dialogProperties.costAmount, this.dialogProperties.amountInStorage])).autoFitToBounds = true;
  };
  DecorationForgeNotEnoughEnergyDialog.prototype.onClick = function (t) {
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_recharge:
          c.CastleExternalDialog.dialogHandler.registerDefaultDialogs(d.DecorationForgeRechargeEnergyDialog);
          this.hide();
      }
    }
  };
  Object.defineProperty(DecorationForgeNotEnoughEnergyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeNotEnoughEnergyDialog.__initialize_static_members = function () {
    DecorationForgeNotEnoughEnergyDialog.NAME = "DecorationForgeNotEnoughEnergy";
  };
  return DecorationForgeNotEnoughEnergyDialog;
}(c.CastleExternalDialog);
exports.DecorationForgeNotEnoughEnergyDialog = u;
var d = require("./992.js");
var p = require("./36.js");
var h = require("./121.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();