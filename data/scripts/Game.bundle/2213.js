Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./82.js");
var l = require("./47.js");
var c = require("./189.js");
var u = function (e) {
  function ModernPackageShopBuyElementAmount() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ModernPackageShopBuyElementAmount, e);
  ModernPackageShopBuyElementAmount.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._scrollComponent = new r.ModernSliderScrollComponent(new l.SimpleScrollVO().initByParent(this.disp).addMouseWheelElements([this.disp]), new c.SimpleScrollStrategyHorizontal(true));
  };
  ModernPackageShopBuyElementAmount.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  ModernPackageShopBuyElementAmount.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  ModernPackageShopBuyElementAmount.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ModernPackageShopBuyElementAmount.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementAmount.prototype.update = function () {
    e.prototype.update.call(this);
    var t = s.int(Math.max(this.getMaxBuyablePackages(), 1));
    this._scrollComponent.init(1, t);
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.enableComponent(t > 1);
  };
  ModernPackageShopBuyElementAmount.prototype.updateSliderFill = function () {
    this.disp.mc_sliderLineFill.width = this.disp.btn_slider.x - this.disp.mc_sliderLine.x;
  };
  ModernPackageShopBuyElementAmount.prototype.updateTextfield = function () {
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new a.LocalizedNumberVO(this.getShownAmount())).autoFitToBounds = true;
  };
  ModernPackageShopBuyElementAmount.prototype.getMaxBuyablePackages = function () {
    var e = this.parentDialog.getElement(p.ModernPackageShopBuyElementEnum.COSTS);
    return s.int(e ? Math.max(e.getMaxBuyablePackages()) : 1);
  };
  ModernPackageShopBuyElementAmount.prototype.getSelectedPackageAmount = function () {
    return s.int(Math.max(this._scrollComponent.currentValue, 1));
  };
  ModernPackageShopBuyElementAmount.prototype.getShownAmount = function () {
    if (this.parentDialog.dialogProperties.eventPackageVO.packageType == h.ClientConstPackages.PACKAGE_TYPE_BUNDLE) {
      return this.getSelectedPackageAmount();
    } else {
      return this.getSelectedPackageAmount() * this.parentDialog.dialogProperties.eventPackageVO.firstReward.amount;
    }
  };
  ModernPackageShopBuyElementAmount.prototype.onScroll = function () {
    this.updateTextfield();
    this.updateSliderFill();
    this.parentDialog.onSelectedAmountChanged();
  };
  return ModernPackageShopBuyElementAmount;
}(require("./431.js").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementAmount = u;
var d = require("./14.js");
var p = require("./591.js");
var h = require("./123.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");