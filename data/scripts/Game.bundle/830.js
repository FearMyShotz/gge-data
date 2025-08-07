Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./26.js");
var l = require("./32.js");
var c = require("./31.js");
var u = require("./104.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./47.js");
var g = require("./189.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = createjs.Point;
var f = function (e) {
  function APostAttackSelectBoosterDialog(t) {
    var i = this;
    i._currentAvailableBoosters = -1;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(APostAttackSelectBoosterDialog, e);
  APostAttackSelectBoosterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.buttonInit();
    this._scrollComponent = new y.ModernSliderScrollComponent(new h.SimpleScrollVO().initByParent(this.dialogDisp).addSliderButton(this.dialogDisp.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_slider.sliderBar), new g.SimpleScrollStrategyHorizontal(true));
  };
  APostAttackSelectBoosterDialog.prototype.buttonInit = function () {
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], D.ClickFeedbackButton);
    C.ButtonHelper.initButton(this.dialogDisp.btn_buy, -1, I.ClickFeedbackButtonBackground);
    this.dialogDisp.btn_buy.mouseChildren = false;
  };
  APostAttackSelectBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.fightScreenVO.resetCollectorBooster();
    this._currentAvailableBoosters = -1;
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onValueChanged));
    this.controller.addEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    p.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this.updateScrollComponent();
    this.updateReward();
    this.updateSelectedBoosterTexts();
    this.updateDiscount();
  };
  APostAttackSelectBoosterDialog.prototype.hide = function () {
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onValueChanged));
    this.controller.removeEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    p.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
    e.prototype.hide.call(this);
  };
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "discount", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  APostAttackSelectBoosterDialog.prototype.updateDiscount = function (e = null) {
    if (this.discount > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.mc_discount.txt_priceReduction, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [-this.discount]));
      this.dialogDisp.btn_buy.mc_discount.visible = true;
    } else {
      this.dialogDisp.btn_buy.mc_discount.visible = false;
    }
  };
  APostAttackSelectBoosterDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return 0;
  };
  APostAttackSelectBoosterDialog.prototype.updateScrollComponent = function () {
    var e = this.getCurrentTrueMaxSpendableBooster();
    if (this._currentAvailableBoosters != e) {
      var t = this._currentAvailableBoosters;
      this._currentAvailableBoosters = e;
      this._scrollComponent.init(0, this._currentAvailableBoosters);
      this._scrollComponent.scrollToValue(t);
      this.updateSliderFill();
      this._scrollComponent.enableComponent(this._currentAvailableBoosters > 0);
    }
  };
  APostAttackSelectBoosterDialog.prototype.updateSliderFill = function () {
    this.dialogDisp.mc_slider.mc_sliderLineFill.width = this.dialogDisp.mc_slider.btn_slider.x - this.dialogDisp.mc_slider.sliderBar.x;
  };
  APostAttackSelectBoosterDialog.prototype.updateSelectedBoosterTexts = function () {};
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "scrollComponentValue", {
    get: function () {
      return this._scrollComponent.currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "boosterKey", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "boostedKey", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  APostAttackSelectBoosterDialog.prototype.updateReward = function () {
    var e = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_BASIC, new m(60, 60));
    e.tooltip.useAmount = false;
    b.CollectableRenderHelper.displaySingleItemComplete(new u.CollectableRendererList(), new c.CollectableRenderClips(this.dialogDisp.mc_reward.mc_item).addInfoBtn(this.dialogDisp.mc_reward.btn_info), E.CollectableHelper.createVO(O.CollectableEnum.GENERIC_CURRENCY, this._currentAvailableBoosters, this.boosterKey), e, null, this.bindFunction(this.afterRend));
    this.dialogDisp.mc_reward.mc_item.mc_textBackground.visible = false;
    if (this.dialogDisp.mc_charmIcon) {
      this.dialogDisp.mc_charmIcon.toolTipText = E.CollectableHelper.createVO(O.CollectableEnum.GENERIC_CURRENCY, 0, this.boostedKey).getNameTextId();
    }
  };
  APostAttackSelectBoosterDialog.prototype.afterRend = function (e) {
    if (this.dialogDisp.mc_icon) {
      var t = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_BASIC, new m(30, 30));
      t.tooltip.useAmount = false;
      b.CollectableRenderHelper.displaySingleItemComplete(this, new c.CollectableRenderClips(this.dialogDisp.mc_icon).addIconMc(this.dialogDisp.mc_icon), E.CollectableHelper.createVO(O.CollectableEnum.GENERIC_CURRENCY, this._currentAvailableBoosters, this.boostedKey), t);
    }
  };
  APostAttackSelectBoosterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_buy:
          this.onBuyButton();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
      }
    }
  };
  APostAttackSelectBoosterDialog.prototype.onBuyButton = function () {};
  APostAttackSelectBoosterDialog.prototype.onValueChanged = function () {
    this.updateSliderFill();
    this.updateSelectedBoosterTexts();
  };
  APostAttackSelectBoosterDialog.prototype.onSpecialUserCurrencyUpdate = function (e) {
    this.updateScrollComponent();
    this.updateSelectedBoosterTexts();
  };
  APostAttackSelectBoosterDialog.prototype.onOkButton = function () {};
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "fightScreenVO", {
    get: function () {
      return this.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return APostAttackSelectBoosterDialog;
}(_.CastleExternalDialog);
exports.APostAttackSelectBoosterDialog = f;
var O = require("./12.js");
var E = require("./45.js");
var y = require("./82.js");
var b = require("./25.js");
var D = require("./36.js");
var I = require("./121.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");