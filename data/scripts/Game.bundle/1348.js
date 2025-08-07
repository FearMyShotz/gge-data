Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./39.js");
var u = require("./1349.js");
var d = require("./220.js");
var p = require("./4.js");
var h = require("./8.js");
var g = function (e) {
  function CastleBuyCaravanOverloaderDialog() {
    return e.call(this, CastleBuyCaravanOverloaderDialog.NAME) || this;
  }
  n.__extends(CastleBuyCaravanOverloaderDialog, e);
  CastleBuyCaravanOverloaderDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.itxt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.tfAmount, new r.LocalizedNumberVO(0));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new l.LocalizedTextVO("dialog_buyCaravanCapacity_copy", [0]));
    this.itxt_curCapacity = this.textFieldManager.registerTextField(this.dialogDisp.curCapacity.tfAmount, new r.LocalizedNumberVO(0));
    this.itxt_nextCapacity = this.textFieldManager.registerTextField(this.dialogDisp.nextCapacity.tfAmount, new r.LocalizedNumberVO(0));
    this.itxt_costsLabel = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfLabel, new l.LocalizedTextVO("costs"));
    this.itxt_costsValue = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfAmount, new r.LocalizedNumberVO(0));
    this.dialogDisp.curCapacity.toolTipText = "dialog_currentCapacity_copy";
    this.dialogDisp.curCapacity.mouseChildren = false;
    this.dialogDisp.nextCapacity.toolTipText = "dialog_increasedCapacity_copy";
    this.dialogDisp.nextCapacity.mouseChildren = false;
    this.dialogDisp.mc_booster.mouseChildren = false;
    this.dialogDisp.costs.toolTipText = c.ClientConstTextIds.C2;
    this.dialogDisp.costs.mouseChildren = false;
    e.prototype.initLoaded.call(this);
  };
  CastleBuyCaravanOverloaderDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTexts();
    if (p.CastleModel.boostData.caravanOverloaderVO.singleCarriageCapacityForNextLevel <= 0) {
      this.hide();
    }
  };
  CastleBuyCaravanOverloaderDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    p.CastleModel.boostData.addEventListener(d.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    p.CastleModel.boosterSaleData.addEventListener(C.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyCaravanOverloaderDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  CastleBuyCaravanOverloaderDialog.prototype.onBoosterDataChanges = function (e) {
    this.setTexts();
  };
  CastleBuyCaravanOverloaderDialog.prototype.setTexts = function () {
    this.itxt_booster.textContentVO.numberValue = p.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference;
    this.itxt_desc.textContentVO.textReplacements = [p.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference];
    this.itxt_curCapacity.textContentVO.numberValue = p.CastleModel.boostData.caravanOverloaderVO.singleCarriageCapacityForCurrentLevel;
    this.itxt_nextCapacity.textContentVO.numberValue = p.CastleModel.boostData.caravanOverloaderVO.singleCarriageCapacityForNextLevel;
    this.itxt_costsValue.textContentVO.numberValue = p.CastleModel.boostData.caravanOverloaderVO.finalCostsC2;
    _.CostHelper.setCostC2TextFieldColor(this.itxt_costsValue, p.CastleModel.boostData.caravanOverloaderVO.finalCostsC2);
    this.dialogDisp.mc_booster.toolTipText = {
      t: "dialog_additionalCapacity_copy",
      p: [p.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference]
    };
    var e = p.CastleModel.boosterSaleData.isBoosterOnSale(s.BoosterConst.CARAVAN_OVERLOADER);
    this.dialogDisp.costs.mc_discount.visible = e;
    if (e) {
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.costs.mc_discount.txt_value, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [p.CastleModel.boosterSaleData.getDiscount(s.BoosterConst.CARAVAN_OVERLOADER)]));
    }
  };
  CastleBuyCaravanOverloaderDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    p.CastleModel.boostData.removeEventListener(d.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    p.CastleModel.boosterSaleData.removeEventListener(C.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyCaravanOverloaderDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCaravanOverloaderStartVO(p.CastleModel.boosterSaleData.getOfferId(s.BoosterConst.CARAVAN_OVERLOADER)));
          this.hide();
      }
    }
  };
  CastleBuyCaravanOverloaderDialog.NAME = "CastleBuyCaravanOverloader";
  return CastleBuyCaravanOverloaderDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBuyCaravanOverloaderDialog = g;
var C = require("./270.js");
var _ = require("./66.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");