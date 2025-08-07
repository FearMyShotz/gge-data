Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./82.js");
var s = require("./47.js");
var r = require("./59.js");
var l = function (e) {
  function ModernPackageShopBuyElementRelicInfo() {
    var t = this;
    t._infoComponent = new c.RelicEquipmentInfoComponent();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ModernPackageShopBuyElementRelicInfo, e);
  ModernPackageShopBuyElementRelicInfo.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._scrollComponent = new a.ModernSliderScrollComponent(new s.SimpleScrollVO().initByParent(this.disp.mc_scroll).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_scroll]), new r.DynamicSizeScrollStrategyVertical(true));
    this._infoComponent = new c.RelicEquipmentInfoComponent();
    this._infoComponent.init(this.disp.mc_content, true);
  };
  ModernPackageShopBuyElementRelicInfo.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  ModernPackageShopBuyElementRelicInfo.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  ModernPackageShopBuyElementRelicInfo.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ModernPackageShopBuyElementRelicInfo.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementRelicInfo.prototype.update = function () {
    e.prototype.update.call(this);
    this._infoComponent.updateWithNewVO(this.relicVO);
    this._infoComponent.disp.x = -this._infoComponent.disp.width * 0.5;
    var t = Math.max(0, this.disp.mc_content.height - this.disp.mc_mask.height - 2);
    this._scrollComponent.init(0, t, 15, 15);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(t > 0);
  };
  Object.defineProperty(ModernPackageShopBuyElementRelicInfo.prototype, "relicVO", {
    get: function () {
      if (u.instanceOfClass(this.parentDialog.dialogProperties.eventPackageVO.reward, "CollectableItemRelicVO")) {
        return this.parentDialog.dialogProperties.eventPackageVO.reward.vo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementRelicInfo.prototype.getDispHeight = function () {
    return 150;
  };
  ModernPackageShopBuyElementRelicInfo.prototype.onScroll = function () {
    this._infoComponent.disp.y = -this._scrollComponent.currentValue;
  };
  return ModernPackageShopBuyElementRelicInfo;
}(require("./431.js").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementRelicInfo = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
var c = require("./593.js");
var u = require("./1.js");