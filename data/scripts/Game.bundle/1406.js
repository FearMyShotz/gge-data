Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./396.js");
var u = require("./4.js");
var d = require("./168.js");
var p = function (e) {
  function CastlePlagueUnitEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlagueUnitEventBuyDialog.NAME) || this;
  }
  n.__extends(CastlePlagueUnitEventBuyDialog, e);
  CastlePlagueUnitEventBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.showMonkDiscount();
    this.dialogDisp.mc_plagueMonkCount.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_reward.toolTipText = "dialog_plagueUnitEventBuy_name";
    this.dialogDisp.btn_info.visible = false;
    this.updateAvailableMonkText();
    this.setDescriptionText("dialog_plagueUnitEventBuy_desc");
    this.amountPicker.amountFactor = 1;
    this.handleCost();
  };
  CastlePlagueUnitEventBuyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.i_monkCount_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_plagueMonkCount.txt_value, new r.TextVO(""));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
  };
  CastlePlagueUnitEventBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    u.CastleModel.spyData.addEventListener(c.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlagueMonkCountUpdated));
  };
  CastlePlagueUnitEventBuyDialog.prototype.hideLoaded = function (t = null) {
    u.CastleModel.spyData.removeEventListener(c.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlagueMonkCountUpdated));
    e.prototype.hideLoaded.call(this, t);
  };
  CastlePlagueUnitEventBuyDialog.prototype.onPlagueMonkCountUpdated = function (e) {
    this.updateAvailableMonkText();
  };
  CastlePlagueUnitEventBuyDialog.prototype.updateAvailableMonkText = function () {
    this.i_monkCount_txt_value.textContentVO.stringValue = String(u.CastleModel.spyData.availablePlagueMonks);
  };
  CastlePlagueUnitEventBuyDialog.prototype.showMonkDiscount = function () {
    var e;
    e = l.int(h.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.dialogProperties.eventPackageVO.packageID));
    this.itxt_discount.textContentVO.textReplacements = [-e];
    this.dialogDisp.mc_discount.visible = e != 0;
  };
  Object.defineProperty(CastlePlagueUnitEventBuyDialog.prototype, "selectedPackagesAmount", {
    get: function () {
      return this.amountPicker.selectedValue + 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleGenericSliderBuyDialog.prototype, "selectedPackagesAmount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePlagueUnitEventBuyDialog.__initialize_static_members = function () {
    CastlePlagueUnitEventBuyDialog.NAME = "CastlePlagueUnitEventBuy";
  };
  return CastlePlagueUnitEventBuyDialog;
}(d.CastleGenericSliderBuyDialog);
exports.CastlePlagueUnitEventBuyDialog = p;
var h = require("./190.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();