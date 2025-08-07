Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./47.js");
var c = require("./59.js");
var u = function (e) {
  function CastleAllianceDialogTreasuryBooster(t) {
    var i = this;
    i._items = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleAllianceDialogTreasuryBooster, e);
  CastleAllianceDialogTreasuryBooster.prototype.init = function () {
    e.prototype.init.call(this);
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new a.LocalizedTextVO("dialog_alliance_treasury_alliBoosters_info"));
    this._scrollComponent = new p.SimpleScrollComponent(new l.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new c.DynamicSizeScrollStrategyVertical(true));
  };
  CastleAllianceDialogTreasuryBooster.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
  };
  CastleAllianceDialogTreasuryBooster.prototype.onHide = function () {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  CastleAllianceDialogTreasuryBooster.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleAllianceDialogTreasuryBooster.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasuryBooster.prototype.update = function () {
    e.prototype.update.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
    this._items = [];
    var o = this.getItemMc();
    o.removeChildren();
    var a = this.getBuffSeriesIds();
    if (a != null) {
      for (var l = 0, c = a; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined) {
          var d = r.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(u, r.CastleModel.allianceData.myAllianceVO.getBoostLevel(u));
          n = new (this.getItemClassBySeriesId(u, r.CastleModel.allianceBuffData.getMaxBuffVOByID(d.seriesID).boni.length))(o, d);
          if (this.isShown) {
            n.onShow();
          }
          n.update();
          this._items.push(n);
        }
      }
    }
    var p = 0;
    for (var h = 0, g = this._items; h < g.length; h++) {
      (n = g[h]).disp.y = p;
      p += n.disp.height;
    }
    var C = s.int(Math.max(0, o.height - CastleAllianceDialogTreasuryBooster.ITEM_MASK_HEIGHT));
    var _ = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, C, CastleAllianceDialogTreasuryBooster.ITEM_SCROLL_DELTA, CastleAllianceDialogTreasuryBooster.ITEM_SCROLL_DELTA);
    this._scrollComponent.setVisibility(C > 0);
    this._scrollComponent.scrollToValue(_);
  };
  CastleAllianceDialogTreasuryBooster.prototype.updateScrollPosition = function () {
    this.getItemMc().y = -this._scrollComponent.currentValue;
  };
  CastleAllianceDialogTreasuryBooster.prototype.getItemMc = function () {
    return this.disp.mc_items.mc_transform;
  };
  CastleAllianceDialogTreasuryBooster.prototype.getBuffSeriesIds = function () {
    return r.CastleModel.allianceBuffData.getSeriesIDsOfPurchasableBuffs();
  };
  CastleAllianceDialogTreasuryBooster.prototype.getItemClassBySeriesId = function (e, t) {
    if (r.CastleModel.allianceData.myAllianceVO.isBoosterTemporary(e)) {
      if (t <= 1) {
        return g.CastleAllianceDialogTreasuryBoosterItemTemp;
      } else {
        return C.CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects;
      }
    } else {
      return h.CastleAllianceDialogTreasuryBoosterItem_OneEffect;
    }
  };
  CastleAllianceDialogTreasuryBooster.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  CastleAllianceDialogTreasuryBooster.ITEM_MASK_HEIGHT = 280;
  CastleAllianceDialogTreasuryBooster.ITEM_SCROLL_DELTA = 80;
  return CastleAllianceDialogTreasuryBooster;
}(require("./953.js").ACastleAllianceDialogTreasurySublayer);
exports.CastleAllianceDialogTreasuryBooster = u;
var d = require("./14.js");
var p = require("./95.js");
var h = require("./1386.js");
var g = require("./1387.js");
var C = require("./2497.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");