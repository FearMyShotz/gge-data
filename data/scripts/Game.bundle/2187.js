Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./163.js");
var r = require("./276.js");
var l = require("./14.js");
var c = createjs.MovieClip;
var u = createjs.Rectangle;
var d = function (e) {
  function LordEffectGroupItem(t, i = null) {
    var n = this;
    n._height = 0;
    n._category = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._disp = new c();
    n.itemCreator = t;
    n.items = [];
    if (i) {
      n.applyEffects(i);
    }
    return n;
  }
  n.__extends(LordEffectGroupItem, e);
  LordEffectGroupItem.prototype.applyEffects = function (e) {
    var t;
    var i = this;
    this.items.length = 0;
    if (e.length > 1) {
      var n = new Map();
      var o = [];
      for (var s = 0; s < e.length; s++) {
        if (s == 0) {
          t = this.itemCreator.createTotalEffectItem(e);
          this._disp.addChild(t.disp);
          this.items.push(t);
        }
        var r = e[s].effect.capId;
        if (r == -1 || e[s].maxValueStrength == Number.MAX_VALUE) {
          o.push(e[s]);
        } else {
          if (!n.has(r)) {
            n.set(r, []);
          }
          n.get(r).push(e[s]);
        }
      }
      n.forEach(function (e) {
        if (e.length == 1) {
          t = i.itemCreator.createDetailEffectItem(e[0]);
          i._disp.addChild(t.disp);
          i.items.push(t);
        } else {
          t = i.itemCreator.createCappedEffectGroupItem(e);
          i._disp.addChild(t.disp);
          i.items.push(t);
        }
      });
      o.forEach(function (e) {
        t = i.itemCreator.createDetailEffectItem(e);
        i._disp.addChild(t.disp);
        i.items.push(t);
      });
    } else {
      t = this.itemCreator.createTotalEffectItem(e);
      this._disp.addChild(t.disp);
      this.items.push(t);
    }
    this._height = a.int(LordEffectGroupItem.layoutStrategy.apply(this.items, new u()).height);
    this._category = a.int(e[0].effect.effectCategory);
  };
  Object.defineProperty(LordEffectGroupItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "isLayoutEnabled", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "width", {
    get: function () {
      return this.disp.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "margin", {
    get: function () {
      return LordEffectGroupItem.MARGIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectGroupItem.__initialize_static_members = function () {
    LordEffectGroupItem.MARGIN = new s.LayoutMargin(0, 0, 0, 0);
    LordEffectGroupItem.layoutStrategy = new r.SimpleLayoutStrategyVertical();
  };
  return LordEffectGroupItem;
}(l.CastleComponent);
exports.LordEffectGroupItem = d;
o.classImplementsInterfaces(d, "ICollectableRendererList", "ILayoutable");
d.__initialize_static_members();