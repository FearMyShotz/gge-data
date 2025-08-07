Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./146.js");
var u = require("./21.js");
var d = require("./255.js");
var p = require("./30.js");
var h = require("./4.js");
var g = require("./213.js");
var C = function (e) {
  function CastleTimelessSpecialOfferDialog() {
    var t = this;
    t.colors = [];
    CONSTRUCTOR_HACK;
    (t = e.call(this, CastleTimelessSpecialOfferDialog.NAME) || this).colors.push(4425479);
    t.colors.push(8966950);
    t.colors.push(15911692);
    t.colors.push(15692815);
    t.colors.push(13376517);
    return t;
  }
  n.__extends(CastleTimelessSpecialOfferDialog, e);
  Object.defineProperty(CastleTimelessSpecialOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimelessSpecialOfferDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_shop, this.dialogDisp.btn_payment]);
  };
  CastleTimelessSpecialOfferDialog.prototype.getDiscountValueBasedOnOfferType = function () {
    if (this.dialogProperties.offerVO.offerType == _.CastleGlobalOfferData.PRIME_TIME) {
      return this.dialogProperties.offerVO.cashDiscount;
    } else {
      return this.dialogProperties.offerVO.goldDiscount;
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.dialogDisp.btn_shop.toolTipText = "add_Gold";
    this.dialogDisp.btn_payment.toolTipText = "add_Gold";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_payment.txt_shop, new r.LocalizedTextVO("add_gold"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description_left, new r.LocalizedTextVO("dialog_TimelessSpecialOffer_description"));
    var i = this.getDiscountValueBasedOnOfferType();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new r.LocalizedTextVO("dialog_privateOffer_whaleChest_noise"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new r.LocalizedTextVO("dialog_specialOffer_copy2_2", [i]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new r.LocalizedTextVO("dialog_specialOffer_copy3", [CastleTimelessSpecialOfferDialog.EXAMPLE_GOLD, (1 + i / 100) * CastleTimelessSpecialOfferDialog.EXAMPLE_GOLD]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.LocalizedTextVO("primetime_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus_title, new r.LocalizedTextVO("dialog_specialOffer_Bonus")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus_amount, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [i]));
    this.dialogDisp.progressBar.mouseChildren = false;
    this.onTimerUpdate();
    h.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    h.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (this.dialogProperties == null || this.dialogProperties.offerVO == null) {
      this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.hideLoaded = function (t = null) {
    h.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    h.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    e.prototype.hideLoaded.call(this);
  };
  CastleTimelessSpecialOfferDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_shop:
      case this.dialogDisp.btn_payment:
        c.CastleOpenShopExecutor.open(c.CastleOpenShopExecutor.SOURCE_TIMELESS_SPECIAL_OFFER, m.CXFSourceTrackingConstants.SOURCE_TIMELESS_SPECIAL_OFFER);
        this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.onOfferAdded = function (e) {
    if (h.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.onOfferEnded = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.onTimerUpdate = function (e = null) {
    var t = l.int(this.dialogProperties.offerVO.offerStartTimeStamp);
    var i = l.int(this.dialogProperties.offerVO.offerEndTimeStamp);
    var n = l.int(p.CachedTimer.getCachedTimer());
    var o = CastleTimelessSpecialOfferDialog.barrelFillLevel(g.CastleMathHelper.clamp((i - n) / (i - t), 0, 1));
    this.SetRemainingRubies(o);
    this.dialogDisp.progressBar.toolTipText = {
      t: "dialog_TimelessSpecialOffer_barTooltip",
      p: [Math.round(o * 100)]
    };
  };
  CastleTimelessSpecialOfferDialog.barrelFillLevel = function (e) {
    var t = 1 - e;
    if (t > 0.9) {
      return (t * -99 + 99) / 109.091;
    } else {
      return (1 / (Math.pow(t + 0.0033, 2) + 0.01) + 9.2) / 109.091;
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.SetRemainingRubies = function (e) {
    var t = Math.ceil(e * 36);
    for (var i = 1; i <= 36; ++i) {
      this.dialogDisp.barrel["ruby" + i].visible = i <= t;
    }
    this.dialogDisp.progressBar.bar_mask.scaleY = e;
    var n = new a.ColorTransform();
    n.color = this.colors[Math.min(this.colors.length - 1, Math.floor((1 - e) * this.colors.length))];
    this.dialogDisp.progressBar.bar.useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
  };
  CastleTimelessSpecialOfferDialog.__initialize_static_members = function () {
    CastleTimelessSpecialOfferDialog.NAME = "CastleTimelessSpecialOffer";
    CastleTimelessSpecialOfferDialog.EXAMPLE_GOLD = 50000;
  };
  return CastleTimelessSpecialOfferDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTimelessSpecialOfferDialog = C;
var _ = require("./589.js");
var m = require("./108.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();