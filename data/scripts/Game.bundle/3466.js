Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./48.js");
var a = require("./82.js");
var s = require("./19.js");
var r = require("./67.js");
var l = require("./25.js");
var c = require("./524.js");
var u = require("./59.js");
var d = require("./47.js");
var p = require("./40.js");
var h = createjs.Point;
var g = function (e) {
  function CastleMailRewardsComponent(t, i = true, n = true) {
    var a = this;
    a._numberOfItems = 0;
    a._rewards = new o.CollectableList();
    a._enableMouseWheel = true;
    a._useAlign = true;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._enableMouseWheel = i;
    a._useAlign = n;
    a.init();
    return a;
  }
  n.__extends(CastleMailRewardsComponent, e);
  CastleMailRewardsComponent.prototype.init = function () {
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
  CastleMailRewardsComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.initScroll();
    this.updateRewards();
  };
  CastleMailRewardsComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  CastleMailRewardsComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleMailRewardsComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  CastleMailRewardsComponent.prototype.updateWithNewData = function (e) {
    this._rewards = e;
    this.initScroll();
    this.updateRewards();
  };
  CastleMailRewardsComponent.prototype.initScroll = function () {
    this._scrollComponent.init(0, Math.max(0, this._rewards.length - 1) / this._numberOfItems, 1, 1);
    this._scrollComponent.scrollToValue(0);
  };
  CastleMailRewardsComponent.prototype.updateRewards = function () {
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
    l.CollectableRenderHelper.displayMultipleItemsComplete(this, new r.CollectableRenderClipsList(this.disp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), e, new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_ADVANCED, new h(55, 55)));
  };
  CastleMailRewardsComponent.prototype.onScroll = function () {
    this.updateRewards();
  };
  return CastleMailRewardsComponent;
}(p.CastleItemRenderer);
exports.CastleMailRewardsComponent = g;