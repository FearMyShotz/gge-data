Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./146.js");
var u = require("./21.js");
var d = require("./255.js");
var p = require("./30.js");
var h = require("./4.js");
var g = require("./815.js");
var C = require("./108.js");
var _ = function (e) {
  function CastlePrivatePrimeTimeOfferDialog() {
    var t = this;
    t.goldDiscount = 0;
    t.cashDiscount = 0;
    t.typeID = -1;
    t._timeString = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastlePrivatePrimeTimeOfferDialog.NAME) || this;
  }
  n.__extends(CastlePrivatePrimeTimeOfferDialog, e);
  Object.defineProperty(CastlePrivatePrimeTimeOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeTimeOfferDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_buy, this.dialogDisp.btn_close]);
  };
  Object.defineProperty(CastlePrivatePrimeTimeOfferDialog.prototype, "skinId", {
    get: function () {
      return this.dialogProperties.offerVO.typeID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.SkinnableDialog.prototype, "skinId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeTimeOfferDialog.prototype, "defaultAssetName", {
    get: function () {
      return this.dialogClassName + "_010";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.SkinnableDialog.prototype, "defaultAssetName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeTimeOfferDialog.prototype.hideLoaded = function (t = null) {
    h.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    h.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    e.prototype.hideLoaded.call(this);
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    if (h.CastleModel.globalOfferData.getActivePrivatePrimeTimeOffer() == null) {
      this.hide();
    }
    this.goldDiscount = l.int(this.dialogProperties.offerVO.cashDiscount);
    this.cashDiscount = l.int(this.dialogProperties.offerVO.goldDiscount);
    this.typeID = l.int(this.dialogProperties.offerVO.typeID);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new r.TextVO(""));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new r.TextVO(""));
    h.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.initTexts();
    this.onTimerUpdate();
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limitedTime, new s.LocalizedTextVO("dialog_privatePrimeTime_limitedTime")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new s.LocalizedTextVO("dialog_privatePrimeTime_loyaltyBonus")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new s.LocalizedTextVO("dialog_privatePrimeTime_onlyNowFor")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offerEndsTitle, new s.LocalizedTextVO("dialog_privatePrimeTime_offerEnds")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new s.LocalizedTextVO("dialog_privatePrimeTime_bonusValue", [this.goldDiscount])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_btn, new s.LocalizedTextVO("add_Gold")).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_offerEndsTime, new r.TextVO(""));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_privatePrimeTime_copy", [this.goldDiscount, 50000, this.goldDiscount * 50000 * 0.01 + 50000]));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_title3, new r.TextVO(h.CastleModel.userData.userName));
    this.itxt_time.autoFitToBounds = true;
    this.itxt_description.autoFitToBounds = true;
    this.itxt_name.autoFitToBounds = true;
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_buy:
        c.CastleOpenShopExecutor.open(c.CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_TIME_OFFER, C.CXFSourceTrackingConstants.SOURCE_PRIVATE_PRIME_TIME_OFFER);
    }
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.onTimerUpdate = function (e = null) {
    var t = this.dialogProperties.offerVO.remainingDuration(e ? e.nowValue : p.CachedTimer.getCachedTimer());
    this._timeString = o.TimeStringHelper.getShortTimeStringBySeconds(t, o.TimeStringHelper.TWO_TIME_FORMAT);
    if (this.itxt_time) {
      this.itxt_time.textContentVO.stringValue = this._timeString;
      this.itxt_time.autoFitToBounds = true;
    }
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.onOfferEnded = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastlePrivatePrimeTimeOfferDialog.__initialize_static_members = function () {
    CastlePrivatePrimeTimeOfferDialog.NAME = "CastlePrivatePrimeTimeOffer";
  };
  return CastlePrivatePrimeTimeOfferDialog;
}(g.SkinnableDialog);
exports.CastlePrivatePrimeTimeOfferDialog = _;
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();