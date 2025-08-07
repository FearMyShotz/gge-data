Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./39.js");
var d = require("./3372.js");
var p = require("./220.js");
var h = require("./4.js");
var g = require("./270.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = createjs.TimerEvent;
var f = function (e) {
  function CastleBuyReturnSpeedBoosterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBuyReturnSpeedBoosterDialog.NAME) || this;
  }
  n.__extends(CastleBuyReturnSpeedBoosterDialog, e);
  CastleBuyReturnSpeedBoosterDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.itxt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.tfAmount, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new c.LocalizedTextVO("dialog_buyReturnSpeed_copy", [0]));
    this.itxt_curCapacity = this.textFieldManager.registerTextField(this.dialogDisp.curCapacity.tfAmount, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_nextCapacity = this.textFieldManager.registerTextField(this.dialogDisp.nextCapacity.tfAmount, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_costsLabel = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfLabel, new c.LocalizedTextVO("costs"));
    this.itxt_costsValue = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfAmount, new l.LocalizedNumberVO(0));
    this.dialogDisp.curCapacity.toolTipText = "dialog_buyReturnSpeed_currentSpeed_tooltip";
    this.dialogDisp.curCapacity.mouseChildren = false;
    this.dialogDisp.nextCapacity.toolTipText = "dialog_buyReturnSpeed_futureSpeed_tooltip";
    this.dialogDisp.nextCapacity.mouseChildren = false;
    this.dialogDisp.mc_booster.mouseChildren = false;
    this.dialogDisp.costs.toolTipText = u.ClientConstTextIds.C2;
    this.dialogDisp.costs.mouseChildren = false;
    e.prototype.initLoaded.call(this);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTexts();
    C.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    this.btnDelayTimer = new a.Timer(500, 1);
    this.btnDelayTimer.addEventListener(m.TIMER, this.bindFunction(this.onBtnDelayOver_0));
    this.btnDelayTimer.start();
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    h.CastleModel.boostData.addEventListener(p.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    h.CastleModel.boosterSaleData.addEventListener(g.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.hideLoaded = function (t = null) {
    this.stopTimer();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.onBtnDelayOver_0 = function (e) {
    this.stopTimer();
    C.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.stopTimer = function () {
    if (this.btnDelayTimer) {
      this.btnDelayTimer.stop();
      this.btnDelayTimer.removeEventListener(m.TIMER, this.onBtnDelayOver_0);
      this.btnDelayTimer = null;
    }
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.onBoosterDataChanges = function (e) {
    this.setTexts();
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.setTexts = function () {
    this.itxt_booster.textContentVO.textReplacements = [h.CastleModel.boostData.returnSpeedBoosterVO.bonusValueDifference];
    this.itxt_desc.textContentVO.textReplacements = [h.CastleModel.boostData.returnSpeedBoosterVO.bonusValueDifference];
    this.itxt_curCapacity.textContentVO.textReplacements = [h.CastleModel.boostData.returnSpeedBoosterVO.returnSpeedForCurrentLevel];
    this.itxt_nextCapacity.textContentVO.textReplacements = [h.CastleModel.boostData.returnSpeedBoosterVO.returnSpeedForNextLevel];
    this.itxt_costsValue.textContentVO.numberValue = h.CastleModel.boostData.returnSpeedBoosterVO.finalCostsC2;
    O.CostHelper.setCostC2TextFieldColor(this.itxt_costsValue, h.CastleModel.boostData.returnSpeedBoosterVO.finalCostsC2);
    this.dialogDisp.mc_booster.toolTipText = {
      t: "dialog_buyReturnSpeed_additionalSpeed_tooltip",
      p: [h.CastleModel.boostData.returnSpeedBoosterVO.bonusValueDifference]
    };
    h.CastleModel.boosterSaleData.handleMc(this.dialogDisp.costs.mc_discount, r.BoosterConst.RETURNING_SPEED);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    h.CastleModel.boostData.removeEventListener(p.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    h.CastleModel.boosterSaleData.removeEventListener(g.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SReturnSpeedBoosterStartVO(h.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.RETURNING_SPEED)));
          this.hide();
      }
    }
  };
  CastleBuyReturnSpeedBoosterDialog.__initialize_static_members = function () {
    CastleBuyReturnSpeedBoosterDialog.NAME = "CastleBuyReturnSpeedBoost";
  };
  return CastleBuyReturnSpeedBoosterDialog;
}(_.CastleExternalDialog);
exports.CastleBuyReturnSpeedBoosterDialog = f;
var O = require("./66.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();