Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./2944.js");
var c = require("./129.js");
var u = require("./4.js");
var d = function (e) {
  function CastleHospitalDismissUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleHospitalDismissUnitsDialog.NAME) || this;
  }
  n.__extends(CastleHospitalDismissUnitsDialog, e);
  CastleHospitalDismissUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mcInfoFoodCost.visible = false;
    this.dialogDisp.btnDismiss.toolTipText = "dialog_dismissWounded_confirmButton_tooltip";
    this.txtTitle ||= this.textFieldManager.registerTextField(this.dialogDisp.txtTitle, new s.LocalizedTextVO("dialog_dismissUnit_title"));
    this.txtTitle.autoFitToBounds = true;
    this.txtDesc ||= this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new s.LocalizedTextVO("dialog_dismissWounded_description"));
  };
  CastleHospitalDismissUnitsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.txtTitle.textContentVO.textId = this.dismissUnitsDialogProperties.unitVO.getNameString();
  };
  CastleHospitalDismissUnitsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(c.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleHospitalDismissUnitsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(c.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleHospitalDismissUnitsDialog.prototype.onInventoryUpdated = function (e) {
    var t = r.int(this.dismissUnitsDialogProperties.unitVO.wodId);
    this.maxSelectableUnits = u.CastleModel.militaryData.unitHospitalInventory.getUnitCountByWodId(t);
  };
  CastleHospitalDismissUnitsDialog.prototype.dismissUnits = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SDismissHospitalUnits(this.dismissUnitsDialogProperties.unitVO.wodId, this.selectedUnitAmount));
  };
  CastleHospitalDismissUnitsDialog.prototype.showHelp = function () {
    p.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_dismissWounded"));
  };
  CastleHospitalDismissUnitsDialog.__initialize_static_members = function () {
    CastleHospitalDismissUnitsDialog.NAME = "CastleRecruitDismissUnitsEx";
  };
  return CastleHospitalDismissUnitsDialog;
}(require("./1566.js").ACastleDismissUnitsDialog);
exports.CastleHospitalDismissUnitsDialog = d;
var p = require("./9.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();