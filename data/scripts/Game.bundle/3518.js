Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./40.js");
var c = require("./82.js");
var u = require("./47.js");
var d = require("./59.js");
var p = require("./3519.js");
var h = require("./137.js");
var g = function (e) {
  function TempServerWelcomeDialogList(t) {
    var i = this;
    i._items = [];
    i._pageContentIDsDefault = [["1_1", "1_2", "1_3"], ["2_1", "2_2", "2_3", "2_4", "2_5"]];
    i._pageContentIDsCastleTransportation = [["1_1", "1_castleTransport_1", "1_castleTransport_2", "1_castleTransport_3", "1_2", "1_3"], ["2_1", "2_2", "2_3", "2_4", "2_5"]];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(TempServerWelcomeDialogList, e);
  TempServerWelcomeDialogList.prototype.init = function () {
    this._scrollComponent = new c.ModernSliderScrollComponent(new u.SimpleScrollVO().addPlusButton(this.disp.btn_down).addMinusButton(this.disp.btn_up).addMaxButton(this.disp.btn_bottom).addMinButton(this.disp.btn_top).addSliderButton(this.disp.btn_slider).addSliderLine(this.disp.mc_sliderLine).addSliderBackground(this.disp.sliderBG).addMouseWheelElements([this.disp, this.disp.mc_list]), new d.DynamicSizeScrollStrategyVertical(true, 0, true));
  };
  TempServerWelcomeDialogList.prototype.onShow = function () {
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
  TempServerWelcomeDialogList.prototype.onHide = function () {
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
  TempServerWelcomeDialogList.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  TempServerWelcomeDialogList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    e.prototype.removeEventListener.call(this);
  };
  TempServerWelcomeDialogList.prototype.update = function (e) {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
    this._items = [];
    o.MovieClipHelper.clearMovieClip(this.itemsMc);
    var a = 0;
    for (var s = 0; s < this.contentList[e].length; s++) {
      n = new p.TempServerWelcomeDialogListItem(this.contentList[e][s]);
      this._items.push(n);
      this.itemsMc.addChild(n.disp);
      if (this.isShown) {
        n.onShow();
      }
      n.disp.y = a;
      n.disp.x = 0;
      a += n.disp.height;
    }
    var r = o.MathBase.max(a, 0);
    this._scrollComponent.init(0, r - TempServerWelcomeDialogList.LIST_HEIGHT / 2, TempServerWelcomeDialogList.LIST_HEIGHT / 2, TempServerWelcomeDialogList.LIST_HEIGHT / 2);
    this._scrollComponent.scrollToPercent(0);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(r > 0);
  };
  TempServerWelcomeDialogList.prototype.updateListScrollPosition = function (e = true) {
    r.TweenMax.killTweensOf(this.itemsMc);
    var t = -this._scrollComponent.currentValue - 63.2;
    if (e) {
      r.TweenMax.to(this.itemsMc, TempServerWelcomeDialogList.ITEM_SCROLL_DURATION, {
        y: t,
        ease: s.Power1.easeOut
      });
    } else {
      this.itemsMc.y = t;
    }
  };
  TempServerWelcomeDialogList.prototype.onScrollValueChanged = function () {
    this.updateListScrollPosition();
  };
  Object.defineProperty(TempServerWelcomeDialogList.prototype, "itemsMc", {
    get: function () {
      return this.disp.mc_list;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerWelcomeDialogList.prototype, "contentList", {
    get: function () {
      if (h.TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return this._pageContentIDsCastleTransportation;
      } else {
        return this._pageContentIDsDefault;
      }
    },
    enumerable: true,
    configurable: true
  });
  TempServerWelcomeDialogList.ITEM_SCROLL_DURATION = 0.2;
  TempServerWelcomeDialogList.LIST_HEIGHT = 600;
  return TempServerWelcomeDialogList;
}(l.CastleItemRenderer);
exports.TempServerWelcomeDialogList = g;
a.classImplementsInterfaces(g, "ICollectableRendererList");