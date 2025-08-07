Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = function (e) {
  function AutoRecruitmentPurchaseUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, AutoRecruitmentPurchaseUnitsDialog.NAME) || this;
  }
  n.__extends(AutoRecruitmentPurchaseUnitsDialog, e);
  AutoRecruitmentPurchaseUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_info.txt_value, new s.LocalizedTextVO("dialog_purchaseLoop_units_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_resource0.txt_title, new s.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.dialogDisp.mc_foodTime.toolTipText = "dialog_copyQueue_foodProductionFinal";
    this.dialogDisp.mc_time.toolTipText = "dialog_purchaseLoop_time_units";
    this.dialogDisp.mc_foodTime.mc_icon.gotoAndStop(2);
  };
  AutoRecruitmentPurchaseUnitsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateFoodProductionAfterLoops();
  };
  AutoRecruitmentPurchaseUnitsDialog.prototype.updateFoodProductionAfterLoops = function () {
    var e = this.dialogDisp.mc_foodTime.txt_value;
    var t = r.int(l.CastleModel.areaData.activeCommonInfo.foodProduction - (this.dialogProperties.currentFoodConsumption + this.dialogProperties.foodProductionAfterLoops * this.selectedLoopCount));
    this.textFieldManager.registerTextField(e, new a.LocalizedNumberVO(t));
    u.CostHelper.setCostColor(e, t < 0);
  };
  AutoRecruitmentPurchaseUnitsDialog.prototype.onLoopSelected = function (t) {
    e.prototype.onLoopSelected.call(this, t);
    this.updateFoodProductionAfterLoops();
  };
  AutoRecruitmentPurchaseUnitsDialog.__initialize_static_members = function () {
    AutoRecruitmentPurchaseUnitsDialog.NAME = "AutoRecruitmentPurchaseUnits";
  };
  return AutoRecruitmentPurchaseUnitsDialog;
}(require("./1936.js").AAutoRecruitmentPurchaseDialog);
exports.AutoRecruitmentPurchaseUnitsDialog = c;
var u = require("./66.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();