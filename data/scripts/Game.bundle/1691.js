Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./48.js");
var a = require("./82.js");
var s = require("./19.js");
var r = require("./67.js");
var l = require("./25.js");
var c = require("./523.js");
var u = require("./59.js");
var d = require("./47.js");
var p = require("./40.js");
var h = createjs.Point;
var g = function (e) {
  function CastleGenericRewardsComponent(t, i = true, n = true, a = null, s = null) {
    var r = this;
    r._numberOfItems = 0;
    r._rewards = new o.CollectableList();
    r._enableMouseWheel = true;
    r._useAlign = true;
    CONSTRUCTOR_HACK;
    (r = e.call(this, t) || this)._enableMouseWheel = i;
    r._useAlign = n;
    r._collectableOptions = a;
    r._preRenderCallback = s;
    r.init();
    return r;
  }
  n.__extends(CastleGenericRewardsComponent, e);
  CastleGenericRewardsComponent.prototype.init = function () {
    this._numberOfItems = 0;
    for (var e = 0; this.disp.getChildByName("mc_item" + e) != null; ++e) {
      this._numberOfItems++;
    }
    var t = new d.SimpleScrollVO().initByParent(this.disp);
    if (this._enableMouseWheel) {
      t.addMouseWheelElements([this.disp]);
    }
    this._scrollComponent = new a.ModernSliderScrollComponent(t, new u.DynamicSizeScrollStrategyVertical());
    this._rewardAlign = new c.ItemCenterAlignComponent(this.disp, "mc_item", true);
  };
  CastleGenericRewardsComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.initScroll();
    this.updateRewards();
  };
  CastleGenericRewardsComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  CastleGenericRewardsComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleGenericRewardsComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  CastleGenericRewardsComponent.prototype.updateWithNewData = function (e) {
    this._rewards = e;
    this.initScroll();
    this.updateRewards();
  };
  CastleGenericRewardsComponent.prototype.initScroll = function () {
    this._scrollComponent.init(0, Math.max(0, this._rewards.length - 1) / this._numberOfItems, 1, 1);
    this._scrollComponent.scrollToValue(0);
  };
  CastleGenericRewardsComponent.prototype.updateRewards = function () {
    var e = new o.CollectableList();
    for (var t = 0; t < this._numberOfItems; ++t) {
      var i = this._rewards.getItemByIndexSave(this._scrollComponent.currentValue * this._numberOfItems + t);
      if (i) {
        e.addItem(i);
      }
    }
    if (this._useAlign) {
      this._rewardAlign.align(this._rewards.length);
    }
    l.CollectableRenderHelper.displayMultipleItemsComplete(this, new r.CollectableRenderClipsList(this.disp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e, this._collectableOptions ? this._collectableOptions : this.defaultRenderOptions, this._preRenderCallback);
  };
  Object.defineProperty(CastleGenericRewardsComponent.prototype, "defaultRenderOptions", {
    get: function () {
      return new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_ADVANCED, new h(55, 55));
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardsComponent.prototype.onScroll = function () {
    this.updateRewards();
  };
  return CastleGenericRewardsComponent;
}(p.CastleItemRenderer);
exports.CastleGenericRewardsComponent = g;