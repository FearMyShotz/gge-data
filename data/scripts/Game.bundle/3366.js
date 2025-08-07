Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./39.js");
var g = require("./1645.js");
var C = require("./4.js");
var _ = require("./269.js");
var m = function (e) {
  function CastleBuyMarauderDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBuyMarauderDialog.ASSETNAME) || this;
  }
  n.__extends(CastleBuyMarauderDialog, e);
  CastleBuyMarauderDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.info_bonus.gotoAndStop(C.CastleModel.boostData.marauderVO.bonusIconFrame);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new d.LocalizedTextVO("costs"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_booster_renew_generic"));
    this.itxt_copy.autoFitToBounds = true;
    this.itxt_infocosts = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new u.LocalizedNumberVO(0));
    this.itxt_infotime = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new p.TextVO(""));
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new p.TextVO(""));
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new p.TextVO(""));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new p.TextVO(""));
    this.dialogDisp.info_time.toolTipText = "dialog_buyMarauder_marauderTime";
    this.dialogDisp.info_costs.toolTipText = h.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBuyMarauderDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    if (C.CastleModel.boostData.marauderVO.isActive) {
      this.itxt_copy.textContentVO.textId = "dialog_booster_renew_generic";
      this.itxt_copy.textContentVO.textReplacements = [c.Localize.text("marauder")];
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_buyMarauder_copy";
      this.itxt_copy.textContentVO.textReplacements = [];
    }
    this.itxt_infotime.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(l.BoosterConst.MARAUDER_DURATION, s.TimeStringHelper.ONE_TIME_FORMAT, c.Localize.text);
    this.itxt_infocosts.textContentVO.numberValue = C.CastleModel.boostData.marauderVO.finalCostsC2;
    f.CostHelper.setCostC2TextFieldColor(this.itxt_infocosts, C.CastleModel.boostData.marauderVO.finalCostsC2);
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new d.LocalizedTextVO(C.CastleModel.boostData.marauderVO.bonusText[0], [C.CastleModel.boostData.marauderVO.bonusText[1]]));
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new d.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [C.CastleModel.boostData.marauderVO.rebuyDiscountString]));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new d.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [C.CastleModel.boostData.marauderVO.rebuyDiscountString]));
    this.addCharacterPic();
    this.dialogDisp.info_bonus.mouseChildren = false;
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    this.dialogDisp.info_bonus.toolTipText = {
      t: "dialog_buyMarauder_infoIcon",
      p: [l.BoosterConst.MARAUDER_BOOST * 100]
    };
    var i = C.CastleModel.boostData.marauderVO.hasRebuyDiscount && !C.CastleModel.boosterSaleData.isBoosterOnSale(l.BoosterConst.MARAUDER);
    this.dialogDisp.mc_rebuyDiscount.visible = i;
    C.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, l.BoosterConst.MARAUDER);
    if (!this.dialogDisp.mc_rebuyDiscount.visible) {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    }
  };
  CastleBuyMarauderDialog.prototype.addEventListenerOnShow = function () {
    C.CastleModel.boosterSaleData.addEventListener(_.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyMarauderDialog.prototype.removeEventListenerOnHide = function () {
    C.CastleModel.boosterSaleData.removeEventListener(_.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyMarauderDialog.prototype.onBoosterDataChanges = function (e) {
    this.show();
  };
  CastleBuyMarauderDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        C.CastleModel.smartfoxClient.sendCommandVO(new g.C2SMarauderStartVO(C.CastleModel.boosterSaleData.getOfferId(l.BoosterConst.MARAUDER)));
        this.hide();
    }
  };
  CastleBuyMarauderDialog.prototype.addCharacterPic = function () {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var e = C.CastleModel.boostData.marauderVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(e);
  };
  CastleBuyMarauderDialog.__initialize_static_members = function () {
    CastleBuyMarauderDialog.NAME = "CastleBuyMarauderDialog";
    CastleBuyMarauderDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBuyMarauderDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBuyMarauderDialog = m;
var f = require("./66.js");
r.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();