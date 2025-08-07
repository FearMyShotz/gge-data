Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./4.js");
var l = require("./40.js");
var c = require("./47.js");
var u = require("./59.js");
var d = function (e) {
  function CastleRerollAlienChanceDialogList(t) {
    var i = this;
    i._items = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleRerollAlienChanceDialogList, e);
  CastleRerollAlienChanceDialogList.prototype.init = function () {
    this._scrollComponent = new p.ModernSliderScrollComponent(new c.SimpleScrollVO().addPlusButton(this.disp.btn_down).addMinusButton(this.disp.btn_up).addMaxButton(this.disp.btn_bottom).addMinButton(this.disp.btn_top).addSliderButton(this.disp.btn_slider).addSliderLine(this.disp.mc_sliderLine).addMouseWheelElements([this.disp]), new u.DynamicSizeScrollStrategyVertical(true));
  };
  CastleRerollAlienChanceDialogList.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
  };
  CastleRerollAlienChanceDialogList.prototype.onHide = function () {
    this._scrollComponent.hide();
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
  CastleRerollAlienChanceDialogList.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  CastleRerollAlienChanceDialogList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    e.prototype.removeEventListener.call(this);
  };
  CastleRerollAlienChanceDialogList.prototype.update = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._items = [];
    for (var n = r.CastleModel.alienRerollData.hardChancesReroll, o = 0, a = 0; a < n.length; a++) {
      var s = n[a];
      i = new h.CastleRerollAlienChanceDialogListItem(s);
      this._items.push(i);
      this.itemsMc.addChild(i.disp);
      if (this.isShown) {
        i.onShow();
      }
      i.disp.x = 0;
      i.disp.y = o;
      o += i.disp.height;
    }
    var l = Math.max(0, n.length * CastleRerollAlienChanceDialogList.ITEM_CONTAINER_HEIGHT - 308);
    this._scrollComponent.init(0, l, CastleRerollAlienChanceDialogList.ITEM_SCROLL_DELTA, CastleRerollAlienChanceDialogList.ITEM_SCROLL_DELTA);
    this._scrollComponent.scrollToPercent(0);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(l > 0);
  };
  CastleRerollAlienChanceDialogList.prototype.updateListScrollPosition = function (e = true) {
    s.TweenMax.killTweensOf(this.itemsMc);
    var t = -this._scrollComponent.currentValue;
    if (e) {
      s.TweenMax.to(this.itemsMc, CastleRerollAlienChanceDialogList.ITEM_SCROLL_DURATION, {
        y: t,
        ease: a.Power1.easeOut
      });
    } else {
      this.itemsMc.y = t;
    }
  };
  CastleRerollAlienChanceDialogList.prototype.onScrollValueChanged = function () {
    this.updateListScrollPosition();
  };
  Object.defineProperty(CastleRerollAlienChanceDialogList.prototype, "itemsMc", {
    get: function () {
      return this.disp.mc_list;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienChanceDialogList.__initialize_static_members = function () {
    CastleRerollAlienChanceDialogList.ITEM_SCROLL_DELTA = CastleRerollAlienChanceDialogList.ITEM_CONTAINER_HEIGHT;
  };
  CastleRerollAlienChanceDialogList.ITEM_CONTAINER_HEIGHT = 32;
  CastleRerollAlienChanceDialogList.ITEM_SCROLL_DURATION = 0.2;
  return CastleRerollAlienChanceDialogList;
}(l.CastleItemRenderer);
exports.CastleRerollAlienChanceDialogList = d;
var p = require("./82.js");
var h = require("./4184.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();