Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./39.js");
var d = require("./21.js");
var p = require("./4.js");
var h = require("./130.js");
var g = require("./8.js");
var C = function (e) {
  function CastlePrivateOfferBrandDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferBrandDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferBrandDialog, e);
  CastlePrivateOfferBrandDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_pay.btn_ok]);
    this.setMouseChildren();
    this.setTitleText();
  };
  CastlePrivateOfferBrandDialog.prototype.initPayment = function () {
    this.dialogDisp.mc_pay.btn_ok.toolTipText = "dialog_specialOfferBrand_takeOffer";
    this.dialogDisp.mc_pay.mc_info_icon.toolTipText = u.ClientConstTextIds.C2;
  };
  CastlePrivateOfferBrandDialog.prototype.initReward = function () {
    this._rewardList = this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_title, new l.LocalizedTextVO("dialog_specialOfferBrand_takeOffer"), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_pay.mc_info_icon.txt_value, new r.LocalizedNumberVO(p.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(_.CollectableEnum.C2))), new o.InternalGGSTextFieldConfigVO(true));
    this.initRewardItem(this.dialogDisp.mc_reward.mc_item_1, 0, this._rewardList.getAmountOrDefaultByType(_.CollectableEnum.C1));
    this.initRewardItem(this.dialogDisp.mc_reward.mc_item_2, 1, this._rewardList.getAmountOrDefaultByType(_.CollectableEnum.FOOD));
    this.initRewardItem(this.dialogDisp.mc_reward.mc_item_3, 2, this._rewardList.getAmountOrDefaultByType(_.CollectableEnum.STONE));
  };
  CastlePrivateOfferBrandDialog.prototype.initRewardItem = function (e, t, i) {
    this.textFieldManager.registerTextField(e.txt_value, new r.LocalizedNumberVO(t != 2 ? this._rewardList.getItemByType(_.CollectableEnum.UNITS).amount : this._rewardList.getAmountOrDefaultByType(_.CollectableEnum.FOOD)), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.initInfos = function (e, t, i) {
    this.initInfo(this.dialogDisp.mc_info_1, e, "dialog_specialOfferBrand_check1");
    this.initInfo(this.dialogDisp.mc_info_2, t, "dialog_specialOfferBrand_check2");
    this.initInfo(this.dialogDisp.mc_info_3, i, "dialog_specialOfferBrand_check3");
  };
  CastlePrivateOfferBrandDialog.prototype.initInfo = function (e, t, i) {
    if (t) {
      e.mc_checkBox.gotoAndStop("enabled");
    } else {
      e.mc_checkBox.gotoAndStop("disabled");
    }
    this.textFieldManager.registerTextField(e.txt_unit, new l.LocalizedTextVO(i), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initReward();
    this.initPayment();
    this.initInfos(true, true, true);
    this.setRemainingTime();
    this.setIconRewardInfo();
    p.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    p.CastleModel.privateOfferData.addEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferEnded));
  };
  CastlePrivateOfferBrandDialog.prototype.onOfferEnded = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastlePrivateOfferBrandDialog.prototype.setIconRewardInfo = function () {
    var e = this._rewardList.containsType(_.CollectableEnum.EXTINGUISH_FIRE);
    var t = this._rewardList.getFilteredListByType(_.CollectableEnum.UNITS);
    for (var i = 1; i <= 2; i++) {
      var n = t.getItemByIndex(i - 1).unitVO;
      this.dialogDisp.mc_reward["mc_item_" + i].mc_icon.gotoAndStop(6);
      m.WodPicHelper.addUnitPic(n, this.dialogDisp.mc_reward["mc_item_" + i].mc_icon.mc_units, 32, 32, 0, 0);
      this.dialogDisp.mc_reward["mc_item_" + i].toolTipText = n.getNameString();
    }
    this.dialogDisp.mc_reward.mc_item_3.mc_icon.gotoAndStop(5);
    this.dialogDisp.mc_reward.mc_item_3.toolTipText = "food";
    this.dialogDisp.mc_reward.mc_image.mouseChildren = false;
    this.dialogDisp.mc_reward.mc_image.visible = e;
    this.dialogDisp.mc_reward.mc_image.toolTipText = "repairAll";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_title, new l.LocalizedTextVO("reward"), new o.InternalGGSTextFieldConfigVO(true));
    this.dialogDisp.mc_reward.mc_item_1.mouseChildren = this.dialogDisp.mc_reward.mc_item_2.mouseChildren = this.dialogDisp.mc_reward.mc_item_3.mouseChildren = false;
  };
  CastlePrivateOfferBrandDialog.prototype.setMouseChildren = function () {
    this.dialogDisp.mc_reward.mouseChildren = true;
    this.dialogDisp.mc_pay.mouseChildren = true;
    this.dialogDisp.mc_pay.mc_info_icon.mouseChildren = false;
  };
  CastlePrivateOfferBrandDialog.prototype.setRemainingTime = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new c.TextVO(a.TimeStringHelper.getHoureMinuteSecondTimeString(this.dialogProperties.offerVO.remainingSeconds)));
  };
  CastlePrivateOfferBrandDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_specialOfferBrand_copy"), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.setTitleText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_specialOfferBrand_title"), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_pay.btn_ok:
          p.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
          this.hide();
      }
    }
  };
  CastlePrivateOfferBrandDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    p.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    p.CastleModel.privateOfferData.removeEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferEnded));
  };
  Object.defineProperty(CastlePrivateOfferBrandDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferBrandDialog.__initialize_static_members = function () {
    CastlePrivateOfferBrandDialog.NAME = "CastlePrivateOfferBrand";
  };
  return CastlePrivateOfferBrandDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePrivateOfferBrandDialog = C;
var _ = require("./12.js");
var m = require("./63.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();