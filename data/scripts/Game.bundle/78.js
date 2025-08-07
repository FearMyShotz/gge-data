Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./40.js");
var c = require("./82.js");
var u = require("./47.js");
var d = require("./59.js");
var p = createjs.Point;
var h = function (e) {
  function InfiniteScrollListComponent(t, i) {
    var n = this;
    n._dataList = [];
    n._items = [];
    n._itemDimension = new p();
    n._necessaryItemAmount = 0;
    n._itemPositions = [];
    n._columns = 1;
    n._isInit = false;
    n._currentRealScrollValue = 0;
    n._tempTweenObject = {
      y: 0
    };
    n._currentUpdatedScrollPosition = -Number.MAX_VALUE;
    n._instantTweenFlag = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t.itemMc) || this)._clips = t;
    n._options = i;
    n.init();
    return n;
  }
  n.__extends(InfiniteScrollListComponent, e);
  InfiniteScrollListComponent.prototype.init = function () {
    this._scrollComponent = new c.ModernSliderScrollComponent(new u.SimpleScrollVO().initByParent(this.clips.sliderMc).addMouseWheelElements([this.clips.itemMc, this.clips.mouseWheelAreaMc]).addVisualElements([this.clips.sliderMc]), new d.DynamicSizeScrollStrategyVertical(true, this.clips.maskMc.height * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER, this.options.sliderInvisibleWhenNotScrollable));
    this.initScrollValues();
    var e = this.createNewItem();
    if (e.isDispLoaded()) {
      this.onFirstItemLoaded();
    } else {
      e.onDispLoadedSignal.add(this.bindFunction(this.onFirstItemLoaded));
    }
  };
  InfiniteScrollListComponent.prototype.destroy = function () {
    this._scrollComponent.destroy();
    this._isInit = false;
    e.prototype.destroy.call(this);
  };
  InfiniteScrollListComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
  };
  InfiniteScrollListComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  InfiniteScrollListComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  InfiniteScrollListComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  InfiniteScrollListComponent.prototype.initItems = function () {
    if (this.items != null) {
      for (var e = 0, t = this.items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._items = [];
    for (var n = 0; n < this.necessaryItemAmount; ++n) {
      i = this.createNewItem();
      this.clips.itemContainerMc.addChild(i.disp);
      if (this.isVisible) {
        i.onShow();
      }
    }
    this.markAllItemsAsUpdateAble();
    this._isInit = true;
  };
  InfiniteScrollListComponent.prototype.initScrollValues = function () {
    var e = a.int(this.dataList ? Math.ceil(this.dataList.length / this._columns) : 0);
    var t = this.itemDimension.y + this.options.itemPaddingY;
    var i = Math.max(0, this.itemDimension.y * e + this.options.itemPaddingY * Math.max(0, e - 1) + this.additionalPreMovieClipsHeight - this.clips.maskMc.height);
    this._scrollComponent.init(0, i * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER, t * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER, t * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER);
    this._scrollComponent.setVisibility(this._scrollComponent.maxValue > this.clips.maskMc.height);
    this._scrollComponent.scrollToPercent(0, false);
  };
  Object.defineProperty(InfiniteScrollListComponent.prototype, "additionalPreMovieClipsHeight", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this.options.additionalPreMovieClips; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += a.int(n.height);
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollListComponent.prototype.startTweenScroll = function () {
    s.TweenMax.killTweensOf(this.clips.itemContainerMc);
    s.TweenMax.to(this._tempTweenObject, InfiniteScrollListComponent.TWEEN_SCROLL_DURATION, {
      y: this.getNormalizedScrollValue(),
      ease: r.Linear.easeOut
    }).eventCallback("onUpdate", this.bindFunction(this.onTweenUpdate));
  };
  InfiniteScrollListComponent.prototype.updateWithNewData = function (e, t = true) {
    this._dataList = e;
    var i = t ? 0 : this._scrollComponent.currentPercentFactor;
    this.updateItemPositions();
    this.initScrollValues();
    this.markAllItemsAsUpdateAble();
    this._instantTweenFlag = true;
    this._currentRealScrollValue = 0;
    this._tempTweenObject.y = 0;
    this._scrollComponent.scrollToPercent(i, true);
  };
  InfiniteScrollListComponent.prototype.updateItemInfo = function () {
    var e = this.items && this.items.length > 0 ? this.items[0] : null;
    this._itemDimension.x = e ? e.disp.width : 0;
    this._itemDimension.y = e ? e.disp.height : 0;
    this._columns = this.options.isMultiColumn ? Math.round(this.clips.maskMc.width / (this.itemDimension.x + this.options.itemPaddingX)) : 1;
    var t = Math.ceil(this.clips.maskMc.height / (this.itemDimension.y + this.options.itemPaddingY)) + 1;
    this._necessaryItemAmount = this._columns * t;
  };
  InfiniteScrollListComponent.prototype.updateItemPositions = function () {
    this._itemPositions = [];
    var e = this.itemDimension.y + this.options.itemPaddingY;
    var t = this.itemDimension.x + this.options.itemPaddingX;
    var i = 0;
    var n = 0;
    for (var o = 0; o < this.dataList.length; o++) {
      i = Math.floor(o / this._columns);
      n = o % this._columns;
      this._itemPositions.push(new p(n * t, i * e));
    }
  };
  InfiniteScrollListComponent.prototype.checkAndUpdateItemPositionsAndContent = function (e = false) {
    if (e) {
      this.markAllItemsAsUpdateAble();
    }
    if (this._currentUpdatedScrollPosition != this._currentRealScrollValue) {
      for (var t = this.getCurrentNecessaryItemPositions(), i = [], n = 0; n < t.length; ++n) {
        var o = false;
        if (this.items != null) {
          for (var s = 0, r = this.items; s < r.length; s++) {
            var l = r[s];
            if (l !== undefined && l.position == t[n]) {
              o = true;
              if (!l.isVisible) {
                l.setVisibility(true);
              }
              break;
            }
          }
        }
        if (!o) {
          i.push(t[n]);
        }
      }
      var c = [];
      for (var u = 0, d = this.items; u < d.length; u++) {
        l = d[u];
        if (t.length > 0 && t.indexOf(l.position) < 0) {
          c.push(l);
          l.setVisibility(false);
        }
      }
      for (n = 0; n < i.length && n < c.length; ++n) {
        (l = c[n]).position = i[n];
        l.setVisibility(true);
        l.updateWithNewData(this.getDataByItemPosition(l.position));
      }
      var p = a.int(this.additionalPreMovieClipsHeight);
      for (var h = a.int(this.options.additionalPreMovieClips.length - 1); h >= 0; h--) {
        var g = this.options.additionalPreMovieClips[h];
        g.y = p - g.height - this._currentRealScrollValue;
        p -= a.int(g.height);
      }
      for (var C = 0, _ = this.items; C < _.length; C++) {
        if ((l = _[C]).position) {
          l.disp.y = l.position.y - this._currentRealScrollValue;
          if (this.options.isMultiColumn) {
            l.disp.x = l.position.x;
          }
        } else {
          l.disp.y = 0;
        }
      }
      this._currentUpdatedScrollPosition = this._currentRealScrollValue;
    }
  };
  InfiniteScrollListComponent.prototype.markAllItemsAsUpdateAble = function () {
    this._currentUpdatedScrollPosition = -Number.MAX_VALUE;
    if (this.items != null) {
      for (var e = 0, t = this.items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.position = null;
          i.updateWithNewData(null);
        }
      }
    }
  };
  InfiniteScrollListComponent.prototype.scrollToItem = function (e, t = false) {
    if (this.items && this.items.indexOf(e) >= 0) {
      this._scrollComponent.scrollToValue(this.getScrollItemPosition(e.position, t));
    }
  };
  InfiniteScrollListComponent.prototype.scrollToData = function (e, t = false) {
    var i = e < this._itemPositions.length ? this._itemPositions[e] : null;
    this._scrollComponent.scrollToValue(this.getScrollItemPosition(i, t));
  };
  InfiniteScrollListComponent.prototype.createNewItem = function () {
    var e = new this.options.itemClass();
    e.init(this);
    this.items.push(e);
    return e;
  };
  InfiniteScrollListComponent.prototype.getCurrentNecessaryItemPositions = function () {
    var e = [];
    var t = this._currentRealScrollValue - this.additionalPreMovieClipsHeight;
    var i = t + this.clips.maskMc.height;
    for (var n = 0; n < this._itemPositions.length; n++) {
      var o = this._itemPositions[n].y;
      var a = o + this.itemDimension.y;
      if (o >= t && o <= i || a >= t && a <= i) {
        e.push(this._itemPositions[n]);
      }
    }
    return e;
  };
  InfiniteScrollListComponent.prototype.getDataByItemPosition = function (e) {
    var t = a.int(this._itemPositions.indexOf(e));
    if (t >= 0) {
      return this.dataList[t];
    } else {
      return null;
    }
  };
  InfiniteScrollListComponent.prototype.getNormalizedScrollValue = function () {
    return this._scrollComponent.currentValue / InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER;
  };
  InfiniteScrollListComponent.prototype.getItemByData = function (e) {
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.data == e) {
          return n;
        }
      }
    }
    return null;
  };
  InfiniteScrollListComponent.prototype.getScrollItemPosition = function (e, t) {
    var i = e ? e.y : 0;
    if (t) {
      i -= this.clips.maskMc.height / 2;
      i += this.itemDimension.y / 2;
    }
    return i * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER;
  };
  InfiniteScrollListComponent.prototype.onScroll = function () {
    if (this.isInit) {
      if (this.options.useSmoothScroll && !this._instantTweenFlag) {
        this.startTweenScroll();
      } else {
        this._instantTweenFlag = false;
        this._currentRealScrollValue = this.getNormalizedScrollValue();
        this._tempTweenObject.y = this._currentRealScrollValue;
      }
      this.checkAndUpdateItemPositionsAndContent();
    }
  };
  InfiniteScrollListComponent.prototype.onTweenUpdate = function () {
    this._currentRealScrollValue = this._tempTweenObject.y;
    this.checkAndUpdateItemPositionsAndContent();
  };
  InfiniteScrollListComponent.prototype.onFirstItemLoaded = function (e = null) {
    if (this._scrollComponent && this._scrollComponent.scrollVO) {
      this.updateItemInfo();
      this.initScrollValues();
      this.initItems();
      this._scrollComponent.scrollToPercent(0);
      if (this._dataList) {
        this.updateWithNewData(this._dataList);
      }
    }
  };
  InfiniteScrollListComponent.convertListToDataList = function (e) {
    var t = [];
    if (e) {
      try {
        if (e != null) {
          for (var i = 0, n = e; i < n.length; i++) {
            var o = n[i];
            if (o !== undefined) {
              t.push(o);
            }
          }
        }
      } catch (e) {}
    }
    return t;
  };
  Object.defineProperty(InfiniteScrollListComponent.prototype, "dataList", {
    get: function () {
      return this._dataList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "clips", {
    get: function () {
      return this._clips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "itemDimension", {
    get: function () {
      return this._itemDimension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "necessaryItemAmount", {
    get: function () {
      return this._necessaryItemAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "isInit", {
    get: function () {
      return this._isInit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "instantTweenFlag", {
    set: function (e) {
      this._instantTweenFlag = e;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER = 100;
  InfiniteScrollListComponent.TWEEN_SCROLL_DURATION = 0.3;
  return InfiniteScrollListComponent;
}(l.CastleItemRenderer);
exports.InfiniteScrollListComponent = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");