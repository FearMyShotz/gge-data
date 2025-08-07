Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./57.js");
var r = require("./67.js");
var l = require("./19.js");
var c = require("./40.js");
var u = require("./47.js");
var d = require("./59.js");
var p = createjs.Point;
var h = function (e) {
  function SeasonLeagueSimpleRewardsComponent(t, i = true, n = true, o = 7, a = new p(15, 15)) {
    var r = this;
    r._rewards = new g.CollectableList();
    r._numberOfItems = 0;
    r._enableMouseWheel = true;
    r._useAlign = true;
    r._iconTransformOffset = 0;
    r._onScrollSignal = new s.Signal();
    CONSTRUCTOR_HACK;
    (r = e.call(this, t) || this)._enableMouseWheel = i;
    r._useAlign = n;
    r._iconTransformOffset = o;
    r._levelDimension = a;
    r.init();
    return r;
  }
  n.__extends(SeasonLeagueSimpleRewardsComponent, e);
  SeasonLeagueSimpleRewardsComponent.prototype.init = function () {
    this._numberOfItems = 0;
    for (var e = 0; this.disp.getChildByName("mc_item" + e) != null; ++e) {
      this._numberOfItems++;
    }
    var t = new u.SimpleScrollVO().initByParent(this.disp);
    if (this._enableMouseWheel) {
      t.addMouseWheelElements([this.disp]);
    }
    this._scrollComponent = new _.ModernSliderScrollComponent(t, new d.DynamicSizeScrollStrategyVertical());
    this._rewardAlign = new C.ItemCenterAlignComponent(this.disp, "mc_item", true);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.initScroll();
    this.updateRewards();
  };
  SeasonLeagueSimpleRewardsComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SeasonLeagueSimpleRewardsComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.updateWithNewData = function (e) {
    this._rewards = e;
    this.initScroll();
    this.updateRewards();
  };
  SeasonLeagueSimpleRewardsComponent.prototype.initScroll = function () {
    this._scrollComponent.init(0, Math.max(0, this._rewards.length - 1) / this.numberOfItems, 1, 1);
    this._scrollComponent.scrollToValue(0);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.updateRewards = function () {
    var e = this;
    var t = new g.CollectableList();
    for (var i = 0; i < this.numberOfItems; ++i) {
      var n = this._rewards.getItemByIndexSave(this._scrollComponent.currentValue * this.numberOfItems + i);
      if (n) {
        t.addItem(n);
      }
    }
    if (this._useAlign) {
      this._rewardAlign.align(this._rewards.length);
    }
    var o = new l.CollectableRenderOptions(l.CollectableRenderOptions.SET_ADVANCED, new p(55, 55));
    o.tooltip.showEquipmentCountdown = false;
    o.icon.unitLevelDimension = this._levelDimension;
    m.CollectableRenderHelper.displayMultipleItemsComplete(this, new r.CollectableRenderClipsList(this.disp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), t, o, function (t) {
      t.getRenderer(l.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = t.itemVE && t.itemVE.textfieldBackgroundVisible() ? 0 : e._iconTransformOffset;
    });
  };
  SeasonLeagueSimpleRewardsComponent.prototype.getCurrentItemScrollIndex = function () {
    return a.int(this._scrollComponent.currentValue * this.numberOfItems);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.onScroll = function () {
    this.updateRewards();
    this.onScrollSignal.dispatch();
  };
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "onScrollSignal", {
    get: function () {
      return this._onScrollSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "numberOfItems", {
    get: function () {
      return this._numberOfItems;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueSimpleRewardsComponent;
}(c.CastleItemRenderer);
exports.SeasonLeagueSimpleRewardsComponent = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./48.js");
var C = require("./524.js");
var _ = require("./82.js");
var m = require("./25.js");