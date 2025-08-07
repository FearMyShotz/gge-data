Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./41.js");
var c = require("./40.js");
var u = function (e) {
  function ACollapsibleItem(t, i, n = true) {
    var o = this;
    o._isExpanded = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._headerMC = t.headerMC;
    o._contentMC = t.contentMC;
    o._properties = i;
    if (o._contentMC && n) {
      l.CastleMovieClipHelper.applyMask(o._contentMC);
      o._contentMC.alpha = 0;
      o._contentMC.visible = false;
      o._contentMC.mask.height = 0;
    }
    return o;
  }
  n.__extends(ACollapsibleItem, e);
  ACollapsibleItem.prototype.expand = function (e, t, i = false) {
    this._isExpanded = e;
    if (t) {
      this._changeStartCallback(this);
    }
    this.applyStateChange(i);
  };
  ACollapsibleItem.prototype.applyStateChange = function (e = false) {
    r.TweenMax.killTweensOf(this.contentMC);
    r.TweenMax.killTweensOf(this.contentMC.mask);
    var t = e ? 0 : this._properties.expandDuration;
    if (this._isExpanded) {
      r.TweenMax.to(this.contentMC, t, {
        autoAlpha: 1,
        ease: a.Linear.easeOut
      });
    } else {
      r.TweenMax.to(this.contentMC, t, {
        autoAlpha: 0,
        ease: a.Linear.easeIn
      });
    }
    if (this._properties.isVertical) {
      r.TweenMax.to(this.contentMC.mask, t, {
        height: this._isExpanded ? this.contentHeight : 0,
        ease: s.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    } else {
      r.TweenMax.to(this.contentMC.mask, t, {
        width: this._isExpanded ? this.contentWidth : 0,
        ease: s.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    }
  };
  Object.defineProperty(ACollapsibleItem.prototype, "onStateChangeStartCallback", {
    set: function (e) {
      this._changeStartCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "onStateChangeUpdateCallback", {
    set: function (e) {
      this._changeUpdateCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "onStateChangeCompleteCallback", {
    set: function (e) {
      this._changeCompleteCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  ACollapsibleItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._changeStartCallback = null;
    this._changeUpdateCallback = null;
    this._changeCompleteCallback = null;
  };
  Object.defineProperty(ACollapsibleItem.prototype, "isLayoutEnabled", {
    get: function () {
      return this.disp.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "contentHeight", {
    get: function () {
      return this.contentMC.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "contentWidth", {
    get: function () {
      return this.contentMC.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return this._contentMC.y + this._contentMC.mask.height;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "width", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return this._contentMC.x + this._contentMC.mask.width;
      } else {
        return this._headerMC.width;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "margin", {
    get: function () {
      return this._properties.margin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "contentMC", {
    get: function () {
      return this._contentMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "headerMC", {
    get: function () {
      return this._headerMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "isExpanded", {
    get: function () {
      return this._isExpanded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "disp", {
    get: function () {
      return Object.getOwnPropertyDescriptor(c.CastleItemRenderer.prototype, "disp").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleItemRenderer.prototype, "disp").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ACollapsibleItem;
}(c.CastleItemRenderer);
exports.ACollapsibleItem = u;
o.classImplementsInterfaces(u, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");