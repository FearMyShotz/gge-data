Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./14.js");
var l = createjs.Point;
var c = createjs.Rectangle;
var u = function (e) {
  function ItemCenterAlignComponent(t, i, n = false, o = true) {
    var a = e.call(this) || this;
    a._keepSpaceWidth = false;
    a._hideUnusedItems = false;
    a._itemMcs = [];
    a._numberOfVisibleItems = 0;
    a._defaultItemPositions = [];
    a._fieldDimension = new c();
    a._itemBounds = new c();
    a._parentMc = t;
    a._itemNamePrefix = i;
    a._keepSpaceWidth = n;
    a._hideUnusedItems = o;
    a.init();
    return a;
  }
  n.__extends(ItemCenterAlignComponent, e);
  ItemCenterAlignComponent.prototype.init = function () {
    this._itemMcs = [];
    if (this.parentMc) {
      for (var e, t = 0; (e = this.parentMc.getChildByName(this.itemNamePrefix + t)) != null; ++t) {
        this._itemMcs.push(e);
      }
    }
    for (var i = 0, n = this.itemMcs; i < n.length; i++) {
      e = n[i];
      this._defaultItemPositions.push(new l(e.x, e.y));
    }
    if (this.itemMcs.length > 0) {
      var o = (e = this.itemMcs[0]).getBounds(null);
      this._itemBounds = o;
      this._fieldDimension.left = e.x + o.x;
      this._fieldDimension.top = e.y + o.y;
      o = (e = this.itemMcs[this.itemMcs.length - 1]).getBounds(null);
      this._fieldDimension.right = e.x + o.x + o.width;
      this._fieldDimension.bottom = e.y + o.y + o.height;
    } else {
      this._fieldDimension.left = this._fieldDimension.top = this._fieldDimension.right = this._fieldDimension.bottom = 0;
    }
  };
  ItemCenterAlignComponent.prototype.align = function (e) {
    this._numberOfVisibleItems = s.int(o.MathBase.clamp(e, 0, this.itemMcs.length));
    for (var t = 0; t < this.itemMcs.length; ++t) {
      this.itemMcs[t].visible = !this.hideUnusedItems || this.hideUnusedItems && t < e;
    }
    if (e <= 0) {
      this.reset(false);
    }
    if (this.keepSpaceWidth) {
      this.alignWithSameSpaceWidth();
    } else {
      this.alignWithStretchedSpaceWidth();
    }
  };
  ItemCenterAlignComponent.prototype.alignWithStretchedSpaceWidth = function () {
    if (this.numberOfVisibleItems > 0 && this.itemMcs.length > 0) {
      var e = this.itemMcs[0].width;
      var t = e * this.numberOfVisibleItems;
      var i = (this.fieldDimension.width - t) / ((this.numberOfVisibleItems < this.itemMcs.length ? this.numberOfVisibleItems + 2 : this.numberOfVisibleItems) - 1);
      var n = this.fieldDimension.x + this.fieldDimension.width / 2 + -(t + i * (this.numberOfVisibleItems - 1)) / 2 - this.itemBounds.x;
      for (var o = 0; o < this.itemMcs.length; ++o) {
        var a = this.itemMcs[o];
        var s = this.defaultItemPositions[o];
        a.x = a.visible ? n : s.x;
        a.y = s.y;
        n += e + i;
      }
    }
  };
  ItemCenterAlignComponent.prototype.alignWithSameSpaceWidth = function () {
    if (this.numberOfVisibleItems > 0 && this.itemMcs.length > 0) {
      var e = this.defaultItemPositions[Math.max(0, this.numberOfVisibleItems - 1)].x + this.itemBounds.right - this.fieldDimension.left;
      var t = (this.fieldDimension.width - e) / 2;
      for (var i = 0; i < this.itemMcs.length; ++i) {
        var n = this.itemMcs[i];
        var o = this.defaultItemPositions[i];
        n.x = n.visible ? o.x + +t : o.x;
        n.y = o.y;
      }
    }
  };
  ItemCenterAlignComponent.prototype.reset = function (e = true) {
    for (var t = 0; t < this.itemMcs.length; ++t) {
      var i = this.itemMcs[t];
      var n = this.defaultItemPositions[t];
      i.visible = e;
      i.x = n.x;
      i.y = n.y;
    }
  };
  Object.defineProperty(ItemCenterAlignComponent.prototype, "parentMc", {
    get: function () {
      return this._parentMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "itemNamePrefix", {
    get: function () {
      return this._itemNamePrefix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "defaultItemPositions", {
    get: function () {
      return this._defaultItemPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "fieldDimension", {
    get: function () {
      return this._fieldDimension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "itemBounds", {
    get: function () {
      return this._itemBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "keepSpaceWidth", {
    get: function () {
      return this._keepSpaceWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "hideUnusedItems", {
    get: function () {
      return this._hideUnusedItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "numberOfVisibleItems", {
    get: function () {
      return this._numberOfVisibleItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "itemMcs", {
    get: function () {
      return this._itemMcs;
    },
    enumerable: true,
    configurable: true
  });
  return ItemCenterAlignComponent;
}(r.CastleComponent);
exports.ItemCenterAlignComponent = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");