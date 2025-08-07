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
var g = require("./1644.js");
var C = require("./4.js");
var _ = require("./269.js");
var m = function (e) {
  function CastleBuyInstructorDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBuyInstructorDialog.ASSETNAME) || this;
  }
  n.__extends(CastleBuyInstructorDialog, e);
  CastleBuyInstructorDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.info_bonus.gotoAndStop(C.CastleModel.boostData.instructorVO.bonusIconFrame);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new d.LocalizedTextVO("costs"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_booster_renew_generic"));
    this.itxt_infocosts = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new u.LocalizedNumberVO(0));
    this.itxt_infotime = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new p.TextVO(""));
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new d.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new p.TextVO(""));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new p.TextVO(""));
    this.dialogDisp.info_time.toolTipText = "runTime";
    this.dialogDisp.info_costs.toolTipText = h.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBuyInstructorDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    if (C.CastleModel.boostData.instructorVO.isActive) {
      this.itxt_copy.textContentVO.textId = "dialog_booster_renew_generic";
      this.itxt_copy.textContentVO.textReplacements = [c.Localize.text("instructor")];
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_buyInstructor_copy";
      this.itxt_copy.textContentVO.textReplacements = [];
    }
    this.dialogDisp.info_bonus.toolTipText = {
      t: "dialog_buyInstructor_infoIcon",
      p: [Math.round(l.BoosterConst.INSTRUCTOR_BOOST * 100)]
    };
    this.itxt_infotime.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(l.BoosterConst.INSTRUCTOR_DURATION, s.TimeStringHelper.ONE_TIME_FORMAT, c.Localize.text);
    this.itxt_infocosts.textContentVO.numberValue = C.CastleModel.boostData.instructorVO.finalCostsC2;
    f.CostHelper.setCostC2TextFieldColor(this.itxt_infocosts, C.CastleModel.boostData.instructorVO.finalCostsC2);
    this.itxt_infobonus.textContentVO.textReplacements = [Math.round(l.BoosterConst.INSTRUCTOR_BOOST * 100)];
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new d.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [C.CastleModel.boostData.instructorVO.rebuyDiscountString]));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new d.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [C.CastleModel.boostData.instructorVO.rebuyDiscountString]));
    this.addCharacterPic();
    this.dialogDisp.info_bonus.mouseChildren = false;
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    var i = C.CastleModel.boostData.instructorVO.hasRebuyDiscount && !C.CastleModel.boosterSaleData.isBoosterOnSale(l.BoosterConst.INSTRUCTOR);
    this.dialogDisp.mc_rebuyDiscount.visible = i;
    C.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, l.BoosterConst.INSTRUCTOR);
    if (!this.dialogDisp.mc_rebuyDiscount.visible) {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    }
  };
  CastleBuyInstructorDialog.prototype.addEventListenerOnShow = function () {
    C.CastleModel.boosterSaleData.addEventListener(_.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyInstructorDialog.prototype.removeEventListenerOnHide = function () {
    C.CastleModel.boosterSaleData.removeEventListener(_.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyInstructorDialog.prototype.onBoosterDataChanges = function (e) {
    this.show();
  };
  CastleBuyInstructorDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        C.CastleModel.smartfoxClient.sendCommandVO(new g.C2SInstructorStartVO(C.CastleModel.boosterSaleData.getOfferId(l.BoosterConst.INSTRUCTOR)));
        this.hide();
    }
  };
  CastleBuyInstructorDialog.prototype.addCharacterPic = function () {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var e = C.CastleModel.boostData.instructorVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(e);
  };
  CastleBuyInstructorDialog.__initialize_static_members = function () {
    CastleBuyInstructorDialog.NAME = "CastleBuyInstructorDialog";
    CastleBuyInstructorDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBuyInstructorDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBuyInstructorDialog = m;
var f = require("./66.js");
r.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();