Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3042.js");
var u = require("./71.js");
var d = require("./4.js");
var p = require("./11.js");
var h = require("./3043.js");
var g = function (e) {
  function CastleHunterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleHunterDialog.NAME) || this;
  }
  n.__extends(CastleHunterDialog, e);
  CastleHunterDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btnHelp, this.dialogDisp.btnClose, this.dialogDisp.btnConfirm, this.dialogDisp.btn_less, this.dialogDisp.btn_more]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new l.LocalizedTextVO("dialog_hunter_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy, new l.LocalizedTextVO("dialog_hunter_instructions"));
    this.textFood = this.textFieldManager.registerTextField(this.dialogDisp.tfFood, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.textStone = this.textFieldManager.registerTextField(this.dialogDisp.tfStone, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.textWood = this.textFieldManager.registerTextField(this.dialogDisp.tfWood, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.textExchangeRate = this.textFieldManager.registerTextField(this.dialogDisp.tfRatio, new l.LocalizedTextVO("dialog_hunter_ExchangeRate", [0, 0]));
    this.dialogDisp.foodHitArea.toolTipText = "foodproduction";
    this.dialogDisp.stoneWoodHitArea.toolTipText = "hunter_productivity_WoodStone";
    this.dialogDisp.ratioHitArea.toolTipText = "dialog_hunter_productivityExchangeRate";
    this.dialogDisp.sliderContainer.slider.toolTipText = "dialog_hunter_SetProductivity";
    this.dialogDisp.btnHelp.toolTipText = "generic_help";
    e.prototype.initLoaded.call(this);
  };
  CastleHunterDialog.prototype.onSliderUpdated = function () {
    this.textFood.textContentVO.textReplacements = [Math.floor(CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE + this.valueController.value)];
    this.textStone.textContentVO.textReplacements = [Math.floor(CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE - this.valueController.value * d.CastleModel.hunterData.hunterBuildingVO.hunterRatio / C.CastleHunterData.RATIO_FACTOR)];
    this.textWood.textContentVO.textReplacements = [Math.floor(CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE - this.valueController.value * d.CastleModel.hunterData.hunterBuildingVO.hunterRatio / C.CastleHunterData.RATIO_FACTOR)];
  };
  CastleHunterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.valueController = new h.CastleHunterValueChangerController(d.CastleModel.hunterData.foodBoost, 0, d.CastleModel.hunterData.hunterBuildingVO.hunterMax);
    this.valueController.addButtons(this.dialogDisp, 1);
    this.valueController.addSlider(this.dialogDisp.sliderContainer);
    this.valueController.valueUpdatedSignal.add(this.bindFunction(this.onSliderUpdated));
    this.onSliderUpdated();
    this.textExchangeRate.textContentVO.textReplacements = [new r.LocalizedNumberVO(d.CastleModel.hunterData.hunterBuildingVO.hunterRatioFactor, false, 1), "1"];
    this.controller.addEventListener(u.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
  };
  CastleHunterDialog.prototype.onHunterBuildingDataSet = function (e) {
    this.onSliderUpdated();
    this.textExchangeRate.textContentVO.textReplacements = [d.CastleModel.hunterData.hunterBuildingVO.hunterRatio / C.CastleHunterData.RATIO_FACTOR, "1"];
  };
  CastleHunterDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(u.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
    this.valueController.valueUpdatedSignal.remove(this.bindFunction(this.onSliderUpdated));
    this.valueController.dispose();
    e.prototype.hideLoaded.call(this);
  };
  CastleHunterDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.btnConfirm:
        if (this.valueController.value != d.CastleModel.hunterData.foodBoost) {
          d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SHunterInfoVO(this.valueController.value));
        }
        this.hide();
        break;
      case this.dialogDisp.btnHelp:
        _.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_hunter_SetProductivity"));
    }
  };
  CastleHunterDialog.__initialize_static_members = function () {
    CastleHunterDialog.NAME = "CastleHunter";
    CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE = 100;
  };
  return CastleHunterDialog;
}(p.CastleExternalDialog);
exports.CastleHunterDialog = g;
var C = require("./690.js");
var _ = require("./9.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();