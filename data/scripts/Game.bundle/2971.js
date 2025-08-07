Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./2972.js");
var u = require("./129.js");
var d = require("./4.js");
var p = function (e) {
  function CastleRecruitDismissUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRecruitDismissUnitsDialog.NAME) || this;
  }
  n.__extends(CastleRecruitDismissUnitsDialog, e);
  CastleRecruitDismissUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.btnDismiss.toolTipText = "dialog_dismissUnit_final_tooltip";
    this.dialogDisp.mcInfoFoodCost.toolTipText = "foodwastage_current";
    this.dialogDisp.mcInfoFoodCost.mouseChildren = false;
    this.dialogDisp.mcInfoFoodCost.gotoAndStop(2);
    this.dialogDisp.mcInfoMeadCost.toolTipText = "meadwastage";
    this.dialogDisp.mcInfoMeadCost.mouseChildren = false;
    this.dialogDisp.mcInfoMeadCost.gotoAndStop(2);
    this.dialogDisp.mcInfoBeefCost.toolTipText = "beefwastage";
    this.dialogDisp.mcInfoBeefCost.mouseChildren = false;
    this.dialogDisp.mcInfoBeefCost.gotoAndStop(2);
    this.txtTitle ||= this.textFieldManager.registerTextField(this.dialogDisp.txtTitle, new r.LocalizedTextVO("dialog_dismissUnit_title"));
    this.txtTitle.autoFitToBounds = true;
    this.txtDesc ||= this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new r.LocalizedTextVO("dialog_dismissUnit_description"));
    this.txtFoodCost ||= this.textFieldManager.registerTextField(this.dialogDisp.mcInfoFoodCost.txt_value, new s.LocalizedNumberVO(0, false, 1));
    this.txtMeadCost ||= this.textFieldManager.registerTextField(this.dialogDisp.mcInfoMeadCost.txt_value, new s.LocalizedNumberVO(0, false, 1));
    this.txtBeefCost ||= this.textFieldManager.registerTextField(this.dialogDisp.mcInfoBeefCost.txt_value, new s.LocalizedNumberVO(0, false, 1));
  };
  CastleRecruitDismissUnitsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.txtTitle.textContentVO.textId = this.dismissUnitsDialogProperties.unitVO.getNameString();
    this.dialogDisp.mcInfoFoodCost.visible = this.dismissUnitsDialogProperties.unitVO.foodSupply > 0;
    this.dialogDisp.mcInfoMeadCost.visible = this.dismissUnitsDialogProperties.unitVO.meadSupply > 0;
    this.dialogDisp.mcInfoBeefCost.visible = this.dismissUnitsDialogProperties.unitVO.beefSupply > 0;
  };
  CastleRecruitDismissUnitsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleRecruitDismissUnitsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleRecruitDismissUnitsDialog.prototype.onInventoryUpdated = function (e) {
    var t = l.int(this.dismissUnitsDialogProperties.unitVO.wodId);
    if (this.dismissUnitsDialogProperties.unitVO.isStronghold) {
      this.maxSelectableUnits = d.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByWodId(t);
    } else {
      this.maxSelectableUnits = d.CastleModel.militaryData.unitInventory.getUnitCountByWodId(t);
    }
  };
  CastleRecruitDismissUnitsDialog.prototype.onUnitAmountChanged = function () {
    var e = this.dismissUnitsDialogProperties.unitVO;
    var t = e.foodSupply * this.selectedUnitAmount * (d.CastleModel.areaData.activeCommonInfo.foodConsumptionReduction / 100);
    this.txtFoodCost.textContentVO.numberValue = t;
    var i = e.meadSupply * this.selectedUnitAmount * (d.CastleModel.areaData.activeCommonInfo.meadConsumptionReduction / 100);
    this.txtMeadCost.textContentVO.numberValue = i;
    var n = e.beefSupply * this.selectedUnitAmount * (d.CastleModel.areaData.activeCommonInfo.beefConsumptionReduction / 100);
    this.txtBeefCost.textContentVO.numberValue = n;
  };
  CastleRecruitDismissUnitsDialog.prototype.dismissUnits = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SDismissUnitPackageVO(this.dismissUnitsDialogProperties.unitVO.wodId, this.selectedUnitAmount, this.dismissUnitsDialogProperties.unitVO.isStronghold));
  };
  CastleRecruitDismissUnitsDialog.prototype.showHelp = function () {
    h.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_dismissUnits"));
  };
  CastleRecruitDismissUnitsDialog.__initialize_static_members = function () {
    CastleRecruitDismissUnitsDialog.NAME = "CastleRecruitDismissUnitsEx_R";
  };
  return CastleRecruitDismissUnitsDialog;
}(require("./1566.js").ACastleDismissUnitsDialog);
exports.CastleRecruitDismissUnitsDialog = p;
var h = require("./9.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();