Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./57.js");
var u = require("./41.js");
var d = require("./14.js");
var p = require("./47.js");
var h = require("./189.js");
var g = require("./414.js");
var C = require("./200.js");
var _ = require("./280.js");
var m = require("./901.js");
var f = require("./277.js");
var O = createjs.Rectangle;
var E = function (e) {
  function AccordionComponent(t, i = null, n = 0, o = true) {
    var a = this;
    a._startY = 0;
    a.lastActivated = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this)._disp = t;
    a._startY = n;
    a.doCaching = o;
    a._itemContainer = t.mc_ItemContainer ? t.mc_ItemContainer : t.mc_items;
    if (!a._itemContainer.mask) {
      u.CastleMovieClipHelper.applyMaskFromMovieClip(a._itemContainer, t.mc_mask);
    }
    a._properties = i || new _.AccordionComponentProperties();
    a._onCollapseSignal = new c.Signal();
    a.onSliderChangeSignal = new c.Signal();
    a.init();
    return a;
  }
  n.__extends(AccordionComponent, e);
  AccordionComponent.prototype.init = function () {
    this._items = [];
    var e = this._properties.scrollStrategy ? new this._properties.scrollStrategy(this._properties.disableButtons) : this._properties.isVertical ? new g.SimpleScrollStrategyVertical(this._properties.disableButtons) : new h.SimpleScrollStrategyHorizontal();
    this.layoutStrategy = this._properties.isVertical ? new f.SimpleLayoutStrategyVertical() : new m.SimpleLayoutStrategyHorizontal();
    this.scrollComponent = new y.SimpleScrollComponent(new p.SimpleScrollVO().initByParent(this._disp.mc_slider).addMouseWheelElements([this._disp]), e);
  };
  AccordionComponent.prototype.show = function () {
    this.updateSlider();
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.onShow();
        }
      }
    }
    this.applyLayout();
  };
  AccordionComponent.prototype.hide = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.onHide();
        }
      }
    }
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
  };
  AccordionComponent.prototype.addItem = function (e, t = -1, i = false) {
    if (t > -1) {
      this._items.splice(t, 0, e);
    } else {
      this._items.push(e);
    }
    this._itemContainer.addChild(e.disp);
    e.onStateChangeStartCallback = this.bindFunction(this.onItemChangeStart);
    e.onStateChangeUpdateCallback = this.bindFunction(this.onItemChangeUpdate);
    e.onStateChangeCompleteCallback = this.bindFunction(this.onItemChangeComplete);
    if (i) {
      this.applyLayout();
    }
  };
  AccordionComponent.prototype.removeItemAt = function (e, t = true) {
    var i = this._items[e];
    if (i) {
      this._items.splice(e, 1);
      this._itemContainer.removeChild(i.disp);
      i.destroy();
    }
    if (t) {
      this.applyLayout();
    }
  };
  AccordionComponent.prototype.expandItemAt = function (e, t, i) {
    if (this._items.length > e) {
      this._items[e].expand(t, i);
    }
  };
  AccordionComponent.prototype.clear = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._items = [];
    o.MovieClipHelper.clearMovieClip(this._itemContainer);
    this.lastActivated = -1;
  };
  AccordionComponent.prototype.onScrollValueChange = function () {
    l.TweenMax.killTweensOf(this._itemContainer);
    l.TweenMax.to(this._itemContainer, this._properties.scrollDuration, {
      y: this._startY - this.scrollComponent.currentValue,
      ease: r.Power1.easeOut
    });
    C.TooltipManagerFacade.hideAllTooltips();
    this.updateItemCache();
    this.onSliderChangeSignal.dispatch();
  };
  AccordionComponent.prototype.updateItemCache = function () {
    if (this.doCaching && this._itemContainer.mask) {
      var e = this._itemContainer.mask.getBounds();
      for (var t = 0; t < this._items.length; t++) {
        var i = this._items[t];
        if (i.disp.parent && i.disp.y + i.disp.parent.y + i.height >= e.topLeft.y && i.disp.y + i.disp.parent.y <= e.bottomRight.y) {
          u.CastleMovieClipHelper.uncacheSafe(i.disp);
          "disp UNcache, ";
        } else if (!i.disp.cacheCanvas) {
          i.disp.doCache();
          "disp cache, ";
        }
      }
    }
  };
  AccordionComponent.prototype.onItemChangeStart = function (e) {
    var t = -1;
    if (e.isExpanded) {
      for (var i = 0; i < this._items.length; i++) {
        if (this._items[i] == e) {
          t = i;
          break;
        }
      }
      if (this._properties.onlyOneActiveItem && t > -1) {
        this._items.forEach(function (e, i) {
          if (t != i && e.isExpanded) {
            e.expand(false, false);
          }
        });
      }
    }
    this.lastActivated = t;
    this._onCollapseSignal.dispatch(this.lastActivated);
  };
  AccordionComponent.prototype.onItemChangeUpdate = function () {
    this.applyLayout();
  };
  AccordionComponent.prototype.onItemChangeComplete = function () {
    this.applyLayout();
    this.updateSlider();
    var e = this._items.find(function (e) {
      return e.isExpanded;
    });
    if (e && this._properties.scrollToOpened && e.contentMC) {
      this.scrollToValue(e.disp.y);
    }
    this.updateItemCache();
  };
  AccordionComponent.prototype.updateSlider = function (e = false) {
    var t = 0;
    t = this._properties.isVertical ? s.int(Math.max(0, this.applyLayout().height - this._itemContainer.mask.height)) : s.int(Math.max(0, this.applyLayout().width - this._itemContainer.mask.width));
    var i = s.int(e ? 0 : this.scrollComponent.currentValue);
    this.scrollComponent.init(0, t, this._properties.scrollStepPixels, this._properties.scrollStepPixels);
    this.scrollComponent.scrollToValue(Math.min(i, t));
    this.disp.mc_slider.visible = t > 0;
    this.scrollComponent.setVisibility(t > 0);
  };
  AccordionComponent.prototype.scrollToTop = function () {
    this.updateSlider(true);
    this._itemContainer.y = this._startY;
  };
  AccordionComponent.prototype.scrollToValue = function (e) {
    this.scrollComponent.scrollToValue(e);
  };
  AccordionComponent.prototype.applyLayout = function () {
    return this.layoutStrategy.apply(this._items, new O());
  };
  AccordionComponent.prototype.getLastActivatedItem = function () {
    if (this.lastActivated > -1) {
      return this._items[this.lastActivated];
    } else {
      return null;
    }
  };
  Object.defineProperty(AccordionComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccordionComponent.prototype, "onCollapseSignal", {
    get: function () {
      return this._onCollapseSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccordionComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccordionComponent.prototype, "properties", {
    get: function () {
      return this._properties;
    },
    enumerable: true,
    configurable: true
  });
  return AccordionComponent;
}(d.CastleComponent);
exports.AccordionComponent = E;
var y = require("./95.js");
a.classImplementsInterfaces(E, "ICollectableRendererList");