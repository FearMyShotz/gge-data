Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./16.js");
var p = require("./2938.js");
var h = require("./26.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = function (e) {
  function CastleHospitalReviveAllDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleHospitalReviveAllDialog.NAME) || this;
  }
  n.__extends(CastleHospitalReviveAllDialog, e);
  CastleHospitalReviveAllDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_hospital_reviveAllButton")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO("dialog_hospital_reviveAll_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_currency2.txt_value, new l.LocalizedNumberVO(this.reviveAllProperties.currency2)).color = this.reviveAllProperties.currency2 > g.CastleModel.currencyData.c2Amount ? d.ClientConstColor.FONT_INSUFFICIENT_COLOR : d.ClientConstColor.FONT_DEFAULT_COLOR;
    var t = this.reviveAllProperties.foodConsumption * g.CastleModel.areaData.activeCommonInfo.foodConsumptionReduction / 100;
    var i = this.reviveAllProperties.meadConsumption * g.CastleModel.areaData.activeCommonInfo.meadConsumptionReduction / 100;
    var n = this.reviveAllProperties.beefConsumption * g.CastleModel.areaData.activeCommonInfo.beefConsumptionReduction / 100;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_food.txt_value, new l.LocalizedNumberVO(t));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_mead.txt_value, new l.LocalizedNumberVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_beef.txt_value, new l.LocalizedNumberVO(n));
    var s = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, 0));
    this.dialogDisp.mc_currency2.toolTipText = "gold";
    this.dialogDisp.mc_food.toolTipText = "foodwastage";
    this.dialogDisp.mc_currency2.mouseChildren = false;
    this.dialogDisp.mc_food.mouseChildren = false;
    this.dialogDisp.mc_discount.visible = false;
    this.dialogDisp.mc_mead.toolTipText = "meadwastage";
    this.dialogDisp.mc_mead.mouseChildren = false;
    this.dialogDisp.mc_beef.toolTipText = "beefwastage";
    this.dialogDisp.mc_beef.mouseChildren = false;
    var r = u.int(this.reviveAllProperties.discount);
    if (r) {
      this.dialogDisp.mc_discount.visible = true;
      s.textContentVO.textReplacements = [r];
    } else {
      this.dialogDisp.mc_discount.visible = false;
    }
  };
  CastleHospitalReviveAllDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  CastleHospitalReviveAllDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  CastleHospitalReviveAllDialog.prototype.onClick = function (e) {
    if (C.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_cancle:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.reviveAll();
      }
    }
  };
  CastleHospitalReviveAllDialog.prototype.onEventUpdated = function (e) {
    if (e.specialEventVO.eventId == r.EventConst.EVENTTYPE_PRIME_SALES_REVIVE_ALL) {
      this.hide();
    }
  };
  CastleHospitalReviveAllDialog.prototype.reviveAll = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SReviveAllHospitalUnits(this.reviveAllProperties.currency2));
    this.hide();
  };
  Object.defineProperty(CastleHospitalReviveAllDialog.prototype, "reviveAllProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHospitalReviveAllDialog.__initialize_static_members = function () {
    CastleHospitalReviveAllDialog.NAME = "CastleHospitalReviveAllEx";
  };
  return CastleHospitalReviveAllDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleHospitalReviveAllDialog = _;
s.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();