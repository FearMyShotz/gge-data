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
var g = require("./3.js");
var C = require("./7.js");
var _ = require("./39.js");
var m = require("./1201.js");
var f = require("./4.js");
var O = require("./269.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./135.js");
var D = function (e) {
  function CastleBuyResourceBoostDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBuyResourceBoostDialog.ASSETNAME) || this;
  }
  n.__extends(CastleBuyResourceBoostDialog, e);
  CastleBuyResourceBoostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new h.LocalizedTextVO("costs"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new h.LocalizedTextVO("dialog_buyResourceBoost_copy"));
    this.itxt_infotime = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new g.TextVO(""));
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_value, new g.TextVO(""), new s.InternalGGSTextFieldConfigVO(true));
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new g.TextVO(""));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new g.TextVO(""));
    this.itxt_infocosts = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new p.LocalizedNumberVO(0));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  Object.defineProperty(CastleBuyResourceBoostDialog.prototype, "shopVO", {
    get: function () {
      return f.CastleModel.boostData.getOverseerVOByID(this.dialogProperties.resourceType);
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyResourceBoostDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.isWaitingForServerMessage = false;
    if (this.shopVO.isActive) {
      this.itxt_copy.textContentVO.textId = "dialog_buyResourceBoost2_copy";
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_buyResourceBoost_copy";
    }
    this.itxt_infotime.textContentVO.stringValue = l.TimeStringHelper.getTimeToString(u.BoosterConst.OVERSEER_DURATION, l.TimeStringHelper.ONE_TIME_FORMAT, d.Localize.text);
    this.itxt_infocosts.textContentVO.numberValue = this.shopVO.finalCostsC2;
    T.CostHelper.setCostC2TextFieldColor(this.itxt_infocosts, this.shopVO.finalCostsC2);
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new h.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [this.shopVO.rebuyDiscountString]));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new h.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [this.shopVO.rebuyDiscountString]));
    this.dialogDisp.info_bonus.gotoAndStop(this.shopVO.bonusIconFrame);
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new h.LocalizedTextVO(this.shopVO.bonusText[0], [this.shopVO.bonusText[1]]), new s.InternalGGSTextFieldConfigVO(true));
    this.dialogDisp.info_bonus.toolTipText = {
      t: "dialog_buyResourceBoost_boostAmount",
      p: [this.shopVO.bonusText[1]]
    };
    this.dialogDisp.info_time.toolTipText = "dialog_buyResourceBoost_overseeTime";
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    this.dialogDisp.mc_rebuyDiscount.visible = this.shopVO.hasRebuyDiscount;
    this.addCharacterPic();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.info_bonus.mouseChildren = false;
    S.CastleMovieClipHelper.createHitArea(this.dialogDisp.info_bonus);
    this.dialogDisp.info_costs.toolTipText = _.ClientConstTextIds.C2;
    //!ST dialogDisp.mc_rebuyDiscount.txt_value1.text =  shopVO.rebuyDiscountString
    this.textFieldManager.setText(this.dialogDisp.mc_rebuyDiscount.txt_value1, d.Localize.text(a.GenericTextIds.VALUE_PERCENTAGE, [this.shopVO.rebuyDiscountString]));
    //!ST dialogDisp.mc_rebuyDiscount.txt_value2.text =  dialogDisp.mc_rebuyDiscount.txt_value1.text
    this.textFieldManager.setText(this.dialogDisp.mc_rebuyDiscount.txt_value2, this.dialogDisp.mc_rebuyDiscount.txt_value1.text);
    var i = this.shopVO.hasRebuyDiscount && !f.CastleModel.boosterSaleData.isBoosterOnSale(this.dialogProperties.resourceType);
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    this.dialogDisp.mc_rebuyDiscount.visible = i;
    this.dialogDisp.info_costs.mc_discount.visible = false;
    if (i) {
      this.dialogDisp.info_costs.x = -14;
    } else {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
      f.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, this.dialogProperties.resourceType);
    }
  };
  CastleBuyResourceBoostDialog.prototype.addEventListenerOnShow = function () {
    f.CastleModel.boosterSaleData.addEventListener(O.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyResourceBoostDialog.prototype.removeEventListenerOnHide = function () {
    f.CastleModel.boosterSaleData.removeEventListener(O.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyResourceBoostDialog.prototype.onBoosterDataChanges = function (e) {
    this.show();
  };
  CastleBuyResourceBoostDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_cancle:
        case this.dialogDisp.btn_close:
          this.hide();
      }
      if (!this.isLocked && !this.isWaitingForServerMessage) {
        switch (t.target) {
          case this.dialogDisp.btn_ok:
            if (f.CastleModel.currencyData.c2Amount < this.shopVO.finalCostsC2) {
              I.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleNoMoneyC2Dialog, new b.CastleNoMoneyC2DialogProperties());
            } else {
              o.BasicController.getInstance().sendServerMessageVOAndWait(new m.C2SOverseerStartVO(this.dialogProperties.resourceType, f.CastleModel.boosterSaleData.getOfferId(this.dialogProperties.resourceType)));
              this.isWaitingForServerMessage = true;
            }
        }
      }
    }
  };
  CastleBuyResourceBoostDialog.prototype.checkWaitingAnimState = function (e) {
    switch (e) {
      case C.ClientConstSF.S2C_OVERSEER_START:
        this.hide();
        this.isWaitingForServerMessage = false;
    }
  };
  CastleBuyResourceBoostDialog.prototype.addCharacterPic = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var e = f.CastleModel.boostData.overseerFoodVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(e);
  };
  Object.defineProperty(CastleBuyResourceBoostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyResourceBoostDialog.__initialize_static_members = function () {
    CastleBuyResourceBoostDialog.NAME = "CastleBuyResourceBoostDialog";
    CastleBuyResourceBoostDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBuyResourceBoostDialog;
}(y.CastleExternalDialog);
exports.CastleBuyResourceBoostDialog = D;
var I = require("./9.js");
var T = require("./66.js");
var v = require("./138.js");
var S = require("./41.js");
c.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();