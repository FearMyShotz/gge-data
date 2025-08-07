Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./232.js");
var l = require("./12.js");
var c = require("./31.js");
var u = require("./104.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./52.js");
var g = require("./24.js");
var C = require("./20.js");
var _ = require("./274.js");
var m = require("./343.js");
var f = require("./42.js");
var O = require("./8.js");
var E = require("./25.js");
var y = require("./1142.js");
var b = createjs.MouseEvent;
var D = createjs.Point;
var I = function () {
  function DonationEventDialogDonateItem(e, t) {
    this.donationItemVO = e;
    this.clip = new g.CastleGoodgameExternalClip("DonateEventItemMC", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(y.DonationEventDialog.NAME));
    this.onSelectionChangedSignal = t;
    if (this.clip.isLoaded) {
      this.fill();
    } else {
      this.clip.doWhenLoaded(this.bindFunction(this.fill));
    }
  }
  DonationEventDialogDonateItem.prototype.show = function () {
    this.itemMC.addEventListener(b.CLICK, this.bindFunction(this.onClick));
    this.amountSlider.addEventListener(r.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
  };
  DonationEventDialogDonateItem.prototype.hide = function () {
    this.itemMC.removeEventListener(b.CLICK, this.bindFunction(this.onClick));
    this.amountSlider.removeEventListener(r.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
  };
  DonationEventDialogDonateItem.prototype.fill = function () {
    this.itxt_amount = n.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.mc_amount.txt_amount, new a.LocalizedTextVO("panel_deco_specialCurrency_counter", []));
    O.ButtonHelper.initButton(this.itemMC.mc_amount.btn_minus, 1, C.ClickFeedbackButtonHover);
    O.ButtonHelper.initButton(this.itemMC.mc_amount.btn_plus, 1, C.ClickFeedbackButtonHover);
    O.ButtonHelper.initButton(this.itemMC.mc_amount.mc_slider.btn_slider, 1, C.ClickFeedbackButtonHover);
    O.ButtonHelper.initButton(this.itemMC.mc_amount.btn_max, 1, C.ClickFeedbackButtonHover);
    this.amountSlider = new m.ScrollComponent(new _.BasicSliderVO(this.itemMC.mc_amount.mc_slider.sliderBar, this.itemMC.mc_amount.mc_slider.btn_slider, this.maxAmountOfPackages, 0, this.itemMC), m.ScrollComponent.HORIZONTAL_SLIDER);
    this.amountSlider.setSelectedIndex(0, false);
    this.onSliderValueChange(null, false);
    var e = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_BASIC, new D(52, 52));
    e.tooltip.useAmount = false;
    n.MovieClipHelper.clearMovieClip(this.itemMC.mc_icon);
    E.CollectableRenderHelper.displaySingleItemComplete(new u.CollectableRendererList(), new c.CollectableRenderClips().addIconMc(this.itemMC.mc_icon).addInfoBtn(this.itemMC.btn_info), this.donationItemVO.collectableVO, e);
    this.itemMC.mc_recycle.visible = this.donationItemVO.currencyID > 0 && this.donationItemVO.collectableVO.isInIdRange(p.CastleModel.currencyData.getCurrencyRangeByID(h.ClientConstCurrency.ID_RANGE_DONATION_CURRENCY));
    this.itemMC.mc_recycle.toolTipText = "dialog_mainDonationEvent_sliders_ResetCurrencyIcon";
    var t = this.donationItemVO.ratio <= this.currentAmountInInventory;
    var i = this.donationItemVO.maxPointLimit > 0 && this.currentEarnedPoints >= this.donationItemVO.maxPointLimit;
    this.itemMC.mc_amount.btn_minus.visible = this.itemMC.mc_amount.btn_plus.visible = this.itemMC.mc_amount.mc_slider.visible = this.itemMC.mc_amount.mc_barBG.visible = this.itemMC.mc_amount.mc_fill.visible = this.itemMC.mc_amount.btn_max.visible = t;
    var o = "";
    if (i) {
      o = a.Localize.text("dialog_mainDonationEvent_sliders_maxLimitReached");
    } else if (!t) {
      o = a.Localize.text("dialog_mainDonationEvent_sliders_ratio", [this.donationItemVO.ratio]);
    }
    n.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.mc_amount.txt_min, new a.TextVO(o)).visible = o != "";
    this.itemMC.mc_limit.visible = this.donationItemVO.maxPointLimit > 0;
    this.itemMC.mc_limit.toolTipText = "dialog_mainDonationEvent_sliders_limitTooltip";
    var r = n.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.txt_max, new a.LocalizedTextVO("numbersXY", [this.currentEarnedPoints * this.donationItemVO.ratio, this.donationItemVO.maxPointLimit * this.donationItemVO.ratio]));
    r.visible = this.donationItemVO.maxPointLimit > 0;
    r.color = i ? "#F3C24A" : s.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    this.itxt_amount.color = i || t ? s.ClientConstColor.FONT_DEFAULT_COLOR : s.ClientConstColor.MODERN_RED;
    this.itxt_amount.verticalAlign = f.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    if (!i && !t || i) {
      this.itxt_amount = n.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.mc_amount.txt_amount, new a.LocalizedNumberVO(this.unfilteredAmountInInventory));
    }
    this.itemMC.mc_amount.y = this.donationItemVO.maxPointLimit > 0 ? 36 : 44;
  };
  DonationEventDialogDonateItem.prototype.onClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.itemMC.mc_amount.btn_minus:
          if (this.amountSlider.selectedIndex > 0) {
            this.amountSlider.setSelectedIndex(this.amountSlider.selectedIndex - 1);
          }
          break;
        case this.itemMC.mc_amount.btn_plus:
          if (this.amountSlider.selectedIndex < this.amountSlider.maxSliderSteps) {
            this.amountSlider.setSelectedIndex(this.amountSlider.selectedIndex + 1);
          }
          break;
        case this.itemMC.mc_amount.btn_max:
          this.amountSlider.setSelectedIndex(this.amountSlider.maxSliderSteps);
      }
    }
  };
  DonationEventDialogDonateItem.prototype.onSliderValueChange = function (e = null, t = true) {
    this.itxt_amount.textContentVO.textReplacements = [this.selectedAmount, this.unfilteredAmountInInventory];
    this.itemMC.mc_amount.mc_fill.scaleX = this.amountSlider.selectedIndex / this.amountSlider.maxSliderSteps;
    if (t) {
      this.onSelectionChangedSignal.dispatch();
    }
  };
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "unfilteredAmountInInventory", {
    get: function () {
      if (this.donationItemVO.resourceID > 0) {
        if (this.donationItemVO.resourceEnum == l.CollectableEnum.C1) {
          return p.CastleModel.currencyData.c1Amount;
        } else if (this.donationItemVO.resourceEnum == l.CollectableEnum.C2) {
          return p.CastleModel.currencyData.c2Amount;
        } else {
          return p.CastleModel.areaData.getActiveStorageItem(this.donationItemVO.resourceEnum).amount;
        }
      } else {
        return p.CastleModel.currencyData.getAmountById(this.donationItemVO.currencyID);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "currentAmountInInventory", {
    get: function () {
      var e = this.unfilteredAmountInInventory;
      if (this.donationItemVO.maxPointLimit <= 0) {
        return Math.floor(e / this.donationItemVO.ratio) * this.donationItemVO.ratio;
      } else {
        return Math.min(e, this.donationItemVO.maxPointLimit * this.donationItemVO.ratio - p.CastleModel.donationEventData.getCurrentEarnedPointsForItemID(this.donationItemVO.donationItemID) * this.donationItemVO.ratio);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "maxAmountOfPackages", {
    get: function () {
      return Math.floor(this.currentAmountInInventory / this.donationItemVO.ratio);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "selectedAmount", {
    get: function () {
      return this.amountSlider.selectedIndex * this.donationItemVO.ratio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "selectedPoints", {
    get: function () {
      return this.amountSlider.selectedIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "currentEarnedPoints", {
    get: function () {
      return p.CastleModel.donationEventData.getCurrentEarnedPointsForItemID(this.donationItemVO.donationItemID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "itemMC", {
    get: function () {
      return this.clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventDialogDonateItem;
}();
exports.DonationEventDialogDonateItem = I;
o.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");