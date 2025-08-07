Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./370.js");
var s = require("./40.js");
var r = require("./76.js");
var l = require("./78.js");
var c = require("./77.js");
var u = function (e) {
  function InfiniteScrollPackageShopList(t, i) {
    var n = this;
    n._buyType = -1;
    n._buyTypeId = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._assetName = i;
    n.init();
    return n;
  }
  n.__extends(InfiniteScrollPackageShopList, e);
  InfiniteScrollPackageShopList.prototype.init = function () {
    var e = new r.InfiniteScrollListClips(this.disp);
    e.addMaskMc(this.disp.mc_items.mask);
    var t = new c.InfiniteScrollListOptions(p.InfiniteScrollPackageShopListItem, InfiniteScrollPackageShopList.ITEM_ASSET_NAME, this._assetName);
    t.isMultiColumn = true;
    t.useSmoothScroll = true;
    t.itemPaddingY = 4;
    t.itemPaddingX = 4;
    this._scrollComponent = new l.InfiniteScrollListComponent(e, t);
  };
  InfiniteScrollPackageShopList.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.onShow();
    d.CastleComponent.controller.addEventListener(a.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
  };
  InfiniteScrollPackageShopList.prototype.onHide = function () {
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
    d.CastleComponent.controller.removeEventListener(a.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
  };
  InfiniteScrollPackageShopList.prototype.updateWithNewData = function (e, t, i = -1, n = -1) {
    this._eventVO = t;
    this._currentEventPackages = e;
    this._buyType = i;
    this._buyTypeId = n;
    var o = this._currentEventPackages.map(function (e) {
      return new h.InfiniteScrollPackageShopListItemVO(e, t, i, n);
    });
    this._scrollComponent.updateWithNewData(o);
  };
  InfiniteScrollPackageShopList.prototype.scrollToPackage = function (e) {
    var t = null;
    this._scrollComponent.items.forEach(function (i) {
      if (i.data && i.data.eventPackageVO.packageID == e.packageID) {
        t = i;
      }
    });
    if (t) {
      this._scrollComponent.scrollToItem(t);
    }
  };
  InfiniteScrollPackageShopList.prototype.onPackageInfoUpdated = function (e) {
    this._scrollComponent.updateWithNewData(this._scrollComponent.dataList, false);
  };
  Object.defineProperty(InfiniteScrollPackageShopList.prototype, "buyType", {
    get: function () {
      return this._buyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollPackageShopList.prototype, "buyTypeId", {
    get: function () {
      return this._buyTypeId;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollPackageShopList.ITEM_ASSET_NAME = "ModernFilterableShop_ShopItem";
  return InfiniteScrollPackageShopList;
}(s.CastleItemRenderer);
exports.InfiniteScrollPackageShopList = u;
var d = require("./14.js");
var p = require("./3800.js");
var h = require("./3801.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "IPackageShopList");