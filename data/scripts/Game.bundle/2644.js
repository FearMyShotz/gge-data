Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./370.js");
var r = require("./40.js");
var l = require("./47.js");
var c = require("./59.js");
var u = function (e) {
  function ModernPackageShopList(t) {
    var i = this;
    i._items = [];
    i._buyType = -1;
    i._buyTypeId = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(ModernPackageShopList, e);
  ModernPackageShopList.prototype.init = function () {
    this._scrollComponent = new p.ModernSliderScrollComponent(new l.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new c.DynamicSizeScrollStrategyVertical(true, ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL * ModernPackageShopList.VISIBLE_ITEMS_VERTICAL));
    this._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    for (var e = 0;; ++e) {
      var t = this.disp.getChildByName("item" + e);
      if (!t) {
        break;
      }
      this._items.push(new h.ModernPackageShopListItem(t));
    }
  };
  ModernPackageShopList.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    d.CastleComponent.controller.addEventListener(s.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
    this._scrollComponent.show();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
  };
  ModernPackageShopList.prototype.onHide = function () {
    d.CastleComponent.controller.removeEventListener(s.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  ModernPackageShopList.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  ModernPackageShopList.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
  };
  ModernPackageShopList.prototype.updateWithNewData = function (e, t, i = -1, n = -1) {
    this._eventVO = t;
    this._currentEventPackages = e;
    this._buyType = i;
    this._buyTypeId = n;
    var o = Math.max(0, e.length - ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL * ModernPackageShopList.VISIBLE_ITEMS_VERTICAL);
    o = Math.ceil(o / ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL);
    this._scrollComponent.init(0, o);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(o > 0);
  };
  ModernPackageShopList.prototype.updateItems = function () {
    var e = this.getCurrentPackageStartIndex();
    for (var t = 0; t < this._items.length; ++t) {
      var i = this._items[t];
      var n = e + t < this._currentEventPackages.length ? this._currentEventPackages[e + t] : null;
      i.updateWithNewData(n, this._eventVO, this.buyType, this.buyTypeId);
    }
  };
  ModernPackageShopList.prototype.getCurrentPackageStartIndex = function () {
    return a.int(this._scrollComponent.currentValue * ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL);
  };
  ModernPackageShopList.prototype.onScrollValueChanged = function () {
    this.updateItems();
  };
  ModernPackageShopList.prototype.onPackageInfoUpdated = function (e) {
    this.updateItems();
  };
  Object.defineProperty(ModernPackageShopList.prototype, "buyType", {
    get: function () {
      return this._buyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopList.prototype, "buyTypeId", {
    get: function () {
      return this._buyTypeId;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopList.__initialize_static_members = function () {
    ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL = 3;
    ModernPackageShopList.VISIBLE_ITEMS_VERTICAL = 3;
  };
  return ModernPackageShopList;
}(r.CastleItemRenderer);
exports.ModernPackageShopList = u;
var d = require("./14.js");
var p = require("./82.js");
var h = require("./2645.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "IPackageShopList");
u.__initialize_static_members();