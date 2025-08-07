Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./7.js");
var C = require("./39.js");
var _ = require("./4.js");
var m = require("./269.js");
var f = require("./11.js");
var O = require("./135.js");
var E = function (e) {
  function CastleBribeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBribeDialog.ASSETNAME) || this;
  }
  n.__extends(CastleBribeDialog, e);
  CastleBribeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.info_bonus.gotoAndStop(_.CastleModel.boostData.taxBribeVO.bonusIconFrame);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new p.LocalizedTextVO("costs"));
    this.dialogDisp.info_time.toolTipText = "runTime";
    this.dialogDisp.info_bonus.mouseChildren = false;
    this.i_iTime_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new h.TextVO(""));
    this.i_iCosts_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new h.TextVO(""));
    this.i_iBonus_txt_bonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new h.TextVO(""), new s.InternalGGSTextFieldConfigVO(true));
    this.i_reDisc_txt_value1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new p.LocalizedTextVO(""));
    this.i_reDisc_txt_value2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new h.TextVO(""));
    this.dialogDisp.info_costs.toolTipText = C.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBribeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (_.CastleModel.boostData.taxBribeVO.isActive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new p.LocalizedTextVO("dialog_bribetaxcollector2_copy"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new p.LocalizedTextVO("dialog_bribetaxcollector_copy"));
    }
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.info_bonus.toolTipText = {
      t: "bribe_taxcollector_tooltipp",
      p: [_.CastleModel.boostData.taxBribeVO.bonusText[1]]
    };
    this.i_iTime_txt_value.textContentVO.stringValue = l.TimeStringHelper.getTimeToString(u.BoosterConst.TAX_BRIBE_DURATION, l.TimeStringHelper.ONE_TIME_FORMAT, d.Localize.text);
    this.i_iCosts_txt_value.textContentVO.stringValue = _.CastleModel.boostData.taxBribeVO.finalCostsC2.toString();
    b.CostHelper.setCostC2TextFieldColor(this.i_iCosts_txt_value, _.CastleModel.boostData.taxBribeVO.finalCostsC2);
    this.i_iBonus_txt_bonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new p.LocalizedTextVO(_.CastleModel.boostData.taxBribeVO.bonusText[0], [_.CastleModel.boostData.taxBribeVO.bonusText[1]]), new s.InternalGGSTextFieldConfigVO(true));
    this.i_reDisc_txt_value1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new p.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [_.CastleModel.boostData.taxBribeVO.rebuyDiscountString]));
    this.i_reDisc_txt_value2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new p.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [_.CastleModel.boostData.taxBribeVO.rebuyDiscountString]));
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    var i = _.CastleModel.boostData.taxBribeVO.hasRebuyDiscount && !_.CastleModel.boosterSaleData.isBoosterOnSale(u.BoosterConst.TAX);
    this.dialogDisp.mc_rebuyDiscount.visible = i;
    if (!this.dialogDisp.mc_rebuyDiscount.visible) {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    }
    _.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, u.BoosterConst.TAX);
    this.addCharacterPic();
  };
  CastleBribeDialog.prototype.addEventListenerOnShow = function () {
    _.CastleModel.boosterSaleData.addEventListener(m.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBribeDialog.prototype.removeEventListenerOnHide = function () {
    _.CastleModel.boosterSaleData.removeEventListener(m.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBribeDialog.prototype.onBoosterDataChanges = function (e) {
    this.applyProperties();
  };
  CastleBribeDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_ok:
        if (_.CastleModel.currencyData.c2Amount < _.CastleModel.boostData.taxBribeVO.finalCostsC2) {
          f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.CastleNoMoneyC2Dialog, new O.CastleNoMoneyC2DialogProperties());
        } else {
          this.hide();
          var t = JSON.stringify({
            PO: _.CastleModel.boosterSaleData.getOfferId(u.BoosterConst.TAX)
          });
          o.BasicController.getInstance().sendServerMessageAndWait(g.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR, [t], g.ClientConstSF.S2C_BRIBE_TAX_COLLECTOR);
        }
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        y.CastleDialogHandler.getInstance().showHelper("", d.Localize.text("help_tax_bribe"));
    }
  };
  CastleBribeDialog.prototype.addCharacterPic = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var e = _.CastleModel.boostData.taxBribeVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(e);
  };
  CastleBribeDialog.__initialize_static_members = function () {
    CastleBribeDialog.NAME = "CastleBribeDialog";
    CastleBribeDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBribeDialog;
}(f.CastleExternalDialog);
exports.CastleBribeDialog = E;
var y = require("./9.js");
var b = require("./66.js");
var D = require("./138.js");
c.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();