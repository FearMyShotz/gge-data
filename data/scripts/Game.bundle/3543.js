Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./57.js");
var r = require("./4.js");
var l = require("./174.js");
var c = require("./40.js");
var u = require("./47.js");
var d = require("./626.js");
var p = function (e) {
  function SeasonLeagueMainDialogPromotionRanks(t) {
    var i = this;
    i._items = [];
    i._currentSelectedId = -1;
    i._onSelectionChanged = new s.Signal();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogPromotionRanks, e);
  SeasonLeagueMainDialogPromotionRanks.prototype.init = function () {
    this._scrollComponent = new m(new u.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]), new d.DynamicSizeScrollStrategyHorizontal(true));
    this._scrollComponent.init(0, r.CastleModel.seasonLeagueData.xml.getNumberOfPromotions() - SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS);
    for (var e = 0; e < SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS; ++e) {
      this._items.push(new C.SeasonLeagueMainDialogPromotionRanksItem(this.disp.getChildByName("mc_item" + e)));
    }
    this._tooltip = new _.SeasonLeagueMainDialogPromotionTooltip(this.disp.mc_tooltip);
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._tooltip.onShow();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this._currentSelectedId = a.int(r.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id);
    this._scrollComponent.scrollToPercent(0);
    this._tooltip.setVisibility(false);
    r.CastleModel.seasonLeagueData.server.requestKLH();
    this.update();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onHide = function () {
    this._scrollComponent.hide();
    this._tooltip.onHide();
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
  SeasonLeagueMainDialogPromotionRanks.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    h.CastleComponent.controller.addEventListener(l.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onClickedSignal.add(this.bindFunction(this.onItemClicked));
        }
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.removeEventListener = function () {
    h.CastleComponent.controller.removeEventListener(l.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onClickedSignal.remove(this.bindFunction(this.onItemClicked));
        }
      }
    }
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.update = function () {
    this.updateItems();
    this._tooltip.update();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.updateItems = function () {
    for (var e = 0; e < this._items.length; ++e) {
      this._items[e].updateWithNewData(r.CastleModel.seasonLeagueData.xml.getPromotion(this._scrollComponent.currentValue + e + 1));
    }
    this.updateSelection();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.updateSelection = function (e = -1) {
    if (e >= 0) {
      this._currentSelectedId = e;
    }
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.setSelection(this._currentSelectedId == n.promotionVO.id);
        }
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.getTooltipAlignByItemIndex = function (e) {
    if (e <= 0) {
      return _.SeasonLeagueMainDialogPromotionTooltip.ALIGN_LEFT;
    } else if (e >= SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS - 1) {
      return _.SeasonLeagueMainDialogPromotionTooltip.ALIGN_RIGHT;
    } else {
      return _.SeasonLeagueMainDialogPromotionTooltip.ALIGN_CENTER;
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onScroll = function () {
    this._scrollComponent.scrollToValue(this._scrollComponent.currentValue, false);
    this.updateItems();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onItemClicked = function (e) {
    if (e != this._currentSelectedId) {
      this.updateSelection(e);
      this.onSelectionChanged.dispatch();
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    for (var i = 0; i < this._items.length; ++i) {
      var n = this._items[i];
      if (t.target == n.disp && n.canShowTooltip()) {
        this._tooltip.setVisibility(true);
        this._tooltip.setPosition(n.disp.x, this.getTooltipAlignByItemIndex(i));
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (this._items != null) {
      for (var i = 0, n = this._items; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && t.target == o.disp) {
          this._tooltip.setVisibility(false);
        }
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onPlayerRankUpdated = function (e) {
    this._tooltip.update();
  };
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanks.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanks.prototype, "currentSelectedId", {
    get: function () {
      return this._currentSelectedId;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS = 5;
  return SeasonLeagueMainDialogPromotionRanks;
}(c.CastleItemRenderer);
exports.SeasonLeagueMainDialogPromotionRanks = p;
var h = require("./14.js");
var g = require("./82.js");
var C = require("./3544.js");
var _ = require("./3545.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
var m = function (e) {
  function SeasonLeaguePromotionRanksSliderScrollComponent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SeasonLeaguePromotionRanksSliderScrollComponent, e);
  SeasonLeaguePromotionRanksSliderScrollComponent.prototype.onSliderLineClick = function (e) {
    if (this.isEnabled) {
      this.scrollToPercent(this.strategy.getPercentFactorOfMousePos(-this.scrollVO.sliderButton.width / 2));
    }
  };
  return SeasonLeaguePromotionRanksSliderScrollComponent;
}(g.ModernSliderScrollComponent);