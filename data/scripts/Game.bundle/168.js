Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./123.js");
var r = require("./28.js");
var l = require("./1208.js");
var c = require("./495.js");
var u = require("./169.js");
var d = require("./232.js");
var p = require("./119.js");
var h = require("./233.js");
var g = require("./32.js");
var C = require("./71.js");
var _ = require("./4.js");
var m = require("./879.js");
var f = require("./274.js");
var O = require("./1209.js");
var E = function (e) {
  function CastleGenericSliderBuyDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleGenericSliderBuyDialog, e);
  CastleGenericSliderBuyDialog.prototype.initBasicButtons = function (t) {
    t = t.concat([this.dialogDisp.mc_picker.btn_left, this.dialogDisp.mc_picker.btn_right, this.dialogDisp.mc_slider.btn_slider]);
    e.prototype.initBasicButtons.call(this, t);
  };
  CastleGenericSliderBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = this.getMaxBuyablePackages();
    this.amountPicker = new m.TextPicker(this.dialogDisp.mc_picker);
    this.amountPicker.setNumItems(Math.max(i, 1));
    this.sliderData = new f.BasicSliderVO(this.dialogDisp.mc_slider.sliderBar, this.dialogDisp.mc_slider.btn_slider, i - 1, 0, this.dialogDisp);
    this.amountSlider = new b.ScrollComponent(this.sliderData, b.ScrollComponent.HORIZONTAL_SLIDER);
    this.amountPicker.itxt_pick.autoFitToBounds = true;
    this.dialogDisp.mc_slider.visible = this.dialogDisp.mc_picker.visible = this.dialogProperties.eventPackageVO.mayBeBoughtInBulk;
    var n = this.dialogProperties.eventPackageVO.reward;
    if (n.itemType == y.CollectableEnum.VIP_TIME) {
      this.amountPicker.amountFactor = n.duration / r.ClientConstTime.SECONDS_PER_DAY;
    } else {
      this.amountPicker.amountFactor = n.amount;
    }
    this.resetSlider();
  };
  CastleGenericSliderBuyDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.amountSlider.addEventListener(d.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onChangeSliderAmount));
    this.dialogDisp.addEventListener(u.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangePackageAmount));
    this.controller.addEventListener(g.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.resetSlider));
    this.controller.addEventListener(g.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.resetSlider));
    this.controller.addEventListener(C.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.resetSlider));
    if (this.dialogProperties.eventPackageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.addEventListener(h.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.addEventListener(p.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      _.CastleModel.constructionItemData.addEventListener(c.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.resetSlider));
      _.CastleModel.smartfoxClient.sendCommandVO(new l.C2SConstructionItemInventorySpaceLeftVO());
    }
  };
  CastleGenericSliderBuyDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.amountSlider.removeEventListener(d.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onChangeSliderAmount));
    this.dialogDisp.removeEventListener(u.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangePackageAmount));
    this.controller.removeEventListener(g.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.resetSlider));
    this.controller.removeEventListener(g.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.resetSlider));
    this.controller.removeEventListener(C.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.resetSlider));
    if (this.dialogProperties.eventPackageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_GEM) {
      this.controller.removeEventListener(h.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_ITEM) {
      this.controller.removeEventListener(p.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.resetSlider));
    }
    if (this.dialogProperties.eventPackageVO.packageType == s.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      _.CastleModel.constructionItemData.removeEventListener(c.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.resetSlider));
    }
  };
  CastleGenericSliderBuyDialog.prototype.resetSlider = function (e = null) {
    var t = this.getMaxBuyablePackages();
    var i = a.int(this.amountPicker.selectedValue);
    var n = i + 1 > t ? t - 1 : i;
    this.amountPicker.setNumItems(Math.max(t, 1));
    this.sliderData.maxValue = t - 1;
    this.amountPicker.setSelectedValueWithoutLoop(n);
    this.amountSlider.setSelectedIndex(n);
  };
  CastleGenericSliderBuyDialog.prototype.setAmountTextColor = function (e) {
    this.amountPicker.itxt_pick.color = e;
  };
  CastleGenericSliderBuyDialog.prototype.hideLoaded = function (t = null) {
    this.amountPicker.dispose();
    this.amountSlider.dispose();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleGenericSliderBuyDialog.prototype.onChangeSliderAmount = function (e = null) {
    this.amountPicker.setSelectedValueWithoutLoop(this.amountSlider.selectedIndex);
  };
  CastleGenericSliderBuyDialog.prototype.getMaxBuyablePackages = function () {
    return a.int(Math.min(this.currencyAvailable / this.packagePrice, this.physicalPackageLimit));
  };
  Object.defineProperty(CastleGenericSliderBuyDialog.prototype, "selectedPackagesAmount", {
    get: function () {
      if (this.dialogDisp.mc_slider.visible) {
        return this.amountPicker.selectedValue + 1;
      } else {
        return 1;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.AMerchantBuyDialog.prototype, "selectedPackagesAmount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericSliderBuyDialog.prototype.onChangePackageAmount = function (e = null) {
    this.amountSlider.setSelectedIndex(this.amountPicker.selectedValue);
    this.handleCost();
  };
  return CastleGenericSliderBuyDialog;
}(O.AMerchantBuyDialog);
exports.CastleGenericSliderBuyDialog = E;
var y = require("./12.js");
var b = require("./343.js");
o.classImplementsInterfaces(E, "ICollectableRendererList");