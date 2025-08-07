Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./229.js");
var u = require("./213.js");
var d = require("./163.js");
var p = require("./902.js");
var h = require("./276.js");
var g = require("./14.js");
var C = require("./591.js");
var _ = require("./349.js");
var m = createjs.Point;
var f = createjs.Rectangle;
var O = function (e) {
  function LordEffectTooltip() {
    var t = e.call(this) || this;
    t.fixedHeight = 0;
    t.categoryItems = [];
    t.seperatorLines = [];
    t.verticalLayout = new h.SimpleLayoutStrategyVertical();
    t.horizontalLayout = new p.SimpleLayoutStrategyHorizontal();
    LordEffectTooltip.lordEffectItemCreator = new y.TooltipLordEffectItemCreator();
    return t;
  }
  n.__extends(LordEffectTooltip, e);
  Object.defineProperty(LordEffectTooltip, "lordEffectTooltip", {
    get: function () {
      if (c.isUndefined(this._lordEffectTooltip)) {
        this._lordEffectTooltip = new Library.CastleInterfaceElements.LordEffectTooltip_Main();
      }
      return this._lordEffectTooltip;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectTooltip.prototype.init = function (e, t, i = null, n = null, o = null, a = true) {
    this.titleItem = new C.LordEffectItem(LordEffectTooltip.lordEffectTooltip.mc_title);
    this.contentItem = new _.MovieClipLayoutable(LordEffectTooltip.lordEffectTooltip.mc_contentHolder);
    this.arrowItem = new _.MovieClipLayoutable(LordEffectTooltip.lordEffectTooltip.mc_arrow);
    LordEffectTooltip.lordEffectItemCreator.filterStrategy = o;
    this.initHeader(e, i);
    var s = t.localToGlobal(new m(0, 0));
    var r = s.clone();
    s.y -= t.height / 2;
    r.y += t.height / 2;
    var c = l.int(s.y - this.fixedHeight);
    var d = l.int(g.CastleComponent.layoutManager.stage.stageHeight - r.y - this.fixedHeight);
    var p = this.createContent(e, n, o, a);
    var O = this.createEffectBoxes(p, Math.max(c, d));
    var E = O[0].height;
    this.contentItem.customHeight = E;
    this.applyBoxLayout(O, s.x);
    if (E <= c || c >= d) {
      this.arrowItem.margin.top = -2;
      this.arrowItem.margin.bottom = 0;
      this.arrowItem.disp.gotoAndStop(1);
      this.verticalLayout.alignment = l.int(h.SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM);
      this.verticalLayout.apply([this.titleItem, this.contentItem, this.arrowItem], new f());
      LordEffectTooltip.lordEffectTooltip.y = s.y;
    } else {
      this.arrowItem.margin.top = 0;
      this.arrowItem.margin.bottom = -2;
      this.arrowItem.disp.gotoAndStop(2);
      this.verticalLayout.alignment = l.int(h.SimpleLayoutStrategyVertical.ALIGNMENT_TOP);
      this.verticalLayout.apply([this.arrowItem, this.titleItem, this.contentItem], new f());
      LordEffectTooltip.lordEffectTooltip.y = r.y;
    }
    var y = O[0].width / 2;
    LordEffectTooltip.lordEffectTooltip.x = u.CastleMathHelper.clamp(s.x, y, g.CastleComponent.layoutManager.stage.stageWidth - y);
    this.arrowItem.disp.x = s.x - LordEffectTooltip.lordEffectTooltip.x;
  };
  LordEffectTooltip.prototype.initHeader = function (e, t) {
    var i;
    i = s.instanceOfClass(t, "ABGAllianceTowerMapobjectVO") ? e.rawLordEffects.length > 0 ? r.Localize.text("dialog_beyondTheHorizon_AllianceTower_towerBuffs_active_tooltip") : r.Localize.text("dialog_beyondTheHorizon_AllianceTower_towerBuffs_inactive_tooltip") : e.isBaron ? t ? r.Localize.text("effect_effectsTooltip_header_castellan", [t.areaNameString]) : r.Localize.text("effect_effectsTooltip_header_general", ["baron_toolTip_isFree"]) : r.Localize.text("effect_effectsTooltip_header_general", [e.defaultName]);
    this.titleItem.applyText(i, false, 6);
    this.fixedHeight = this.titleItem.height + this.arrowItem.height;
  };
  LordEffectTooltip.prototype.createContent = function (e, t = null, i = null, n = true) {
    var a = [];
    o.MovieClipHelper.clearMovieClip(LordEffectTooltip.lordEffectTooltip.mc_contentHolder);
    var s = -1;
    var l = 0;
    var c = E.LordEffectHelper.createEffectGroups(e.getUniqueBoni(true, null, t ? t.areaType : -1, i, false, n), LordEffectTooltip.lordEffectItemCreator);
    if (c.length == 0) {
      var u = new C.LordEffectItem(LordEffectTooltip.lordEffectItemCreator.getTotalEffectMC());
      u.applyText(r.Localize.text("equip_effect_no_effect"));
      a.push(u);
    } else if (c != null) {
      for (var d = 0, p = c; d < p.length; d++) {
        var h = p[d];
        if (h !== undefined) {
          if (s != h.category) {
            s = h.category;
            var g = this.categoryItems[h.category - 1];
            if (!g) {
              g = LordEffectTooltip.lordEffectItemCreator.createCategoryItem(h.category);
              this.categoryItems[h.category - 1] = g;
            }
            a.push(g);
            a.push(h);
          } else {
            if (this.seperatorLines.length <= l) {
              this.seperatorLines.push(LordEffectTooltip.lordEffectItemCreator.createSeperatorLine());
            }
            a.push(this.seperatorLines[l]);
            a.push(h);
            l++;
          }
        }
      }
    }
    return a;
  };
  LordEffectTooltip.prototype.createEffectBoxes = function (e, t) {
    this.verticalLayout.alignment = l.int(h.SimpleLayoutStrategyVertical.ALIGNMENT_TOP);
    var i;
    var n = [];
    var o = new Library.CastleInterfaceElements.LordEffectBox_Tooltip();
    var a = [];
    var r = LordEffectTooltip.BOX_BORDER_OFFSET;
    for (var c = 0; c < e.length; c++) {
      var u;
      var p = e[c];
      var g = p.margin.top + p.height + p.margin.bottom;
      if (s.instanceOfClass(p, "LordEffectItem")) {
        for (var C = c + 1; C < e.length && !s.instanceOfClass(e[C], "LordEffectItem"); C++) {
          e[C].margin.top + e[C].height + e[C].margin.bottom;
        }
      }
      if (r + g > t) {
        if (this.seperatorLines.indexOf(a[a.length - 1]) > -1) {
          u = a.pop();
          o.mc_holder.removeChild(u.disp);
          u = null;
        } else if (this.categoryItems.indexOf(a[a.length - 1]) > -1) {
          u = a.pop();
          o.mc_holder.removeChild(u.disp);
        }
        o.bg.height = this.verticalLayout.apply(a, new f()).height + LordEffectTooltip.BOX_BORDER_OFFSET;
        (i = new _.MovieClipLayoutable(o, new d.LayoutMargin(0, 0, 0, 0))).customHeight = o.bg.height;
        n.push(i);
        o = new Library.CastleInterfaceElements.LordEffectBox_Tooltip();
        r = LordEffectTooltip.BOX_BORDER_OFFSET;
        a.length = 0;
        if (u) {
          o.mc_holder.addChild(u.disp);
          r += u.margin.top + u.height + u.margin.bottom;
          a.push(u);
          u = null;
        }
      }
      if (a.length != 0 || !(this.seperatorLines.indexOf(p) > -1)) {
        o.mc_holder.addChild(p.disp);
        r += g;
        a.push(p);
      }
    }
    o.bg.height = this.verticalLayout.apply(a, new f()).height + LordEffectTooltip.BOX_BORDER_OFFSET;
    (i = new _.MovieClipLayoutable(o)).customHeight = o.bg.height;
    n.push(i);
    return n;
  };
  LordEffectTooltip.prototype.applyBoxLayout = function (e, t) {
    o.MovieClipHelper.clearMovieClip(LordEffectTooltip.lordEffectTooltip.mc_contentHolder);
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.margin.left = i != 0 ? -2 : 0;
      LordEffectTooltip.lordEffectTooltip.mc_contentHolder.addChild(n.disp);
    }
    this.horizontalLayout.alignment = l.int(p.SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT);
    if (t + this.horizontalLayout.apply(e, new f()).width - n.width / 2 > g.CastleComponent.layoutManager.stage.stageWidth) {
      for (var a = 0; a < e.length; a++) {
        var s = e[a];
        s.margin.left = 0;
        s.margin.right = a != 0 ? -2 : 0;
      }
      this.horizontalLayout.alignment = l.int(p.SimpleLayoutStrategyHorizontal.ALIGNMENT_RIGHT);
      this.horizontalLayout.apply(e.reverse(), new f(e[0].width));
    }
  };
  LordEffectTooltip.prototype.reset = function () {
    this.categoryItems = [];
  };
  Object.defineProperty(LordEffectTooltip.prototype, "disp", {
    get: function () {
      return LordEffectTooltip.lordEffectTooltip;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectTooltip.CATEGORY_COUNT = 7;
  LordEffectTooltip.BOX_BORDER_OFFSET = 4;
  return LordEffectTooltip;
}(g.CastleComponent);
exports.LordEffectTooltip = O;
var E = require("./133.js");
var y = require("./2190.js");
a.classImplementsInterfaces(O, "ICollectableRendererList");