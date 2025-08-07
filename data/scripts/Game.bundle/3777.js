Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./14.js");
var p = require("./82.js");
var h = require("./47.js");
var g = require("./189.js");
var C = require("./8.js");
var _ = require("./167.js");
var m = require("./244.js");
var f = createjs.MouseEvent;
var O = createjs.Point;
var E = function (e) {
  function CastleBoosterSelectComponent(t, i, n, o, a) {
    var s = e.call(this) || this;
    s._maxSelectable = 0;
    s._currencyID = 0;
    s._boostValue = 0;
    s._buyPackageID = 0;
    s._eventID = 0;
    s._disp = t;
    s._currencyID = i;
    s._boostValue = n;
    s._buyPackageID = o;
    s._eventID = a;
    C.ButtonHelper.initButton(s._disp.btn_buy, -1, v.ClickFeedbackButtonBackground);
    s._disp.btn_buy.mouseChildren = false;
    s._scrollComponent = new p.ModernSliderScrollComponent(new h.SimpleScrollVO().initByParent(s._disp).addSliderButton(s._disp.mc_slider.btn_slider).addSliderLine(s._disp.mc_slider.sliderBar), new g.SimpleScrollStrategyHorizontal(true));
    return s;
  }
  n.__extends(CastleBoosterSelectComponent, e);
  CastleBoosterSelectComponent.prototype.show = function () {
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onValueChanged));
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this.updateScrollComponent();
    this.updateReward();
    this.updateSelectedCharmBoosterTexts();
    this.updateDiscount();
    this._disp.addEventListener(f.CLICK, this.bindFunction(this.onClick));
  };
  CastleBoosterSelectComponent.prototype.hide = function () {
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onValueChanged));
    this._disp.removeEventListener(f.CLICK, this.bindFunction(this.onClick));
  };
  CastleBoosterSelectComponent.prototype.onValueChanged = function () {
    this.updateSliderFill();
    this.updateSelectedCharmBoosterTexts();
  };
  CastleBoosterSelectComponent.prototype.updateScrollComponent = function () {
    var e = r.int(this._scrollComponent.currentValue);
    this._scrollComponent.init(0, this._maxSelectable);
    this._scrollComponent.scrollToValue(e);
    this.updateSliderFill();
    this._scrollComponent.enableComponent(this._maxSelectable > 0);
  };
  CastleBoosterSelectComponent.prototype.updateSliderFill = function () {
    this._disp.mc_slider.mc_sliderLineFill.width = this._disp.mc_slider.btn_slider.x - this._disp.mc_slider.sliderBar.x;
  };
  CastleBoosterSelectComponent.prototype.updateReward = function () {
    this._disp.mc_reward.mc_item.mc_textBackground.visible = false;
    this._disp.mc_charmIcon.toolTipText = b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, 0, this._currencyID).getNameTextId();
    var e = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_BASIC, new O(60, 60));
    e.tooltip.useAmount = false;
    var t = new l.CollectableRenderClips(this._disp.mc_reward.mc_item).addInfoBtn(this._disp.mc_reward.btn_info);
    I.CollectableRenderHelper.displaySingleItemComplete(this, t, b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, this._maxSelectable, this._currencyID), e);
  };
  CastleBoosterSelectComponent.prototype.updateSelectedCharmBoosterTexts = function () {
    d.CastleComponent.textFieldManager.registerTextField(this._disp.txt_amount, new s.LocalizedTextVO("value_proportional_value", [this._scrollComponent.currentValue, this._maxSelectable])).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this._disp.txx_percent, new s.LocalizedTextVO("dialog_shapeshifter_Booster_CharmBooster_value", [this._scrollComponent.currentValue * this._boostValue])).autoFitToBounds = true;
  };
  CastleBoosterSelectComponent.prototype.updateDiscount = function () {
    var e = r.int(D.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this._buyPackageID));
    if (e > 0) {
      d.CastleComponent.textFieldManager.registerTextField(this._disp.btn_buy.mc_discount.txt_priceReduction, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [-e]));
      this._disp.btn_buy.mc_discount.visible = true;
    } else {
      this._disp.btn_buy.mc_discount.visible = false;
    }
  };
  Object.defineProperty(CastleBoosterSelectComponent.prototype, "maxSelectable", {
    set: function (e) {
      this._maxSelectable = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleBoosterSelectComponent.prototype.updateWithNewMaxValue = function (e) {
    if (this._maxSelectable != e) {
      this._maxSelectable = e;
      this.updateScrollComponent();
    }
  };
  CastleBoosterSelectComponent.prototype.onClick = function (e) {
    if (C.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_buy:
          this.onClickBuy();
      }
    }
  };
  CastleBoosterSelectComponent.prototype.onClickBuy = function () {
    var e = new m.MerchantScrollItemVO();
    e.eventPackageVO = u.CastleModel.eventPackageData.getEventPackageByID(this._buyPackageID);
    e.specialEventVO = u.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    var t = new _.CastleGenericBuyDialogProperties();
    t.parseDataFromScrollItem(e);
    d.CastleComponent.dialogHandler.registerDefaultDialogs(T.ModernPackageShopBuyDialog, t);
  };
  CastleBoosterSelectComponent.prototype.getValue = function () {
    return r.int(this._scrollComponent.currentValue);
  };
  return CastleBoosterSelectComponent;
}(d.CastleComponent);
exports.CastleBoosterSelectComponent = E;
var y = require("./12.js");
var b = require("./45.js");
var D = require("./190.js");
var I = require("./25.js");
var T = require("./206.js");
var v = require("./121.js");
a.classImplementsInterfaces(E, "ICollectableRendererList");