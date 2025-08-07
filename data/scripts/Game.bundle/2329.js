Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./55.js");
var c = require("./40.js");
var u = require("./47.js");
var d = require("./189.js");
var p = createjs.Point;
var h = function (e) {
  function AutoSellDialogGemsItem(t) {
    var i = this;
    i._gemClips = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(AutoSellDialogGemsItem, e);
  AutoSellDialogGemsItem.prototype.init = function () {
    this.disp.mc_icon.mouseChildren = false;
    this._scrollComponent = new C.ModernSliderScrollComponent(new u.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp.mc_slider]), new d.SimpleScrollStrategyHorizontal(true));
    this._scrollComponent.init(0, r.GemConst.MAX_GEM_LEVEL);
    for (var e = 1; e <= r.GemConst.MAX_GEM_LEVEL; ++e) {
      var t = "Item_Gem_Lv" + e;
      var i = new o.GoodgameDisplayObjectClipExternal(t, g.IsoHelper.view.getAssetFileURL("Equipment_Gems"));
      i.name = "" + e;
      this._gemClips.push(i);
      if (i.isLoaded) {
        this.onGemClipLoaded(i);
      } else {
        i.clipLoaded.addOnce(this.bindFunction(this.onGemClipLoaded));
      }
    }
  };
  AutoSellDialogGemsItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  AutoSellDialogGemsItem.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  AutoSellDialogGemsItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  AutoSellDialogGemsItem.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  AutoSellDialogGemsItem.prototype.updateWithNewData = function (e) {
    this._colorVO = e;
    var t = new a.ColorTransform();
    t.color = this._colorVO.color;
    this.disp.mc_icon.mc_level0.mc_color.transform.colorTransform = t;
    if (this._gemClips != null) {
      for (var i = 0, n = this._gemClips; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isLoaded) {
          o.currentshownDisplayObject.cc0.transform.colorTransform = t;
        }
      }
    }
    this.disp.mc_icon.toolTipText = "gemColor_" + this._colorVO.id + "_tt";
    this._scrollComponent.scrollToValue(this.autoSellVO.gems.actives.get(this._colorVO.id), false);
    this.update();
  };
  AutoSellDialogGemsItem.prototype.update = function () {
    this._scrollComponent.scrollToValue(this.autoSellVO.gems.actives.get(this._colorVO.id), false);
    this.disp.mc_slider.mc_fill.width = this.disp.mc_slider.btn_slider.x - this.disp.mc_slider.mc_fill.x;
    this.disp.mc_icon.mc_level0.visible = this._scrollComponent.currentValue <= 0;
    if (this._gemClips != null) {
      for (var e = 0, t = this._gemClips; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.visible = parseInt(i.name) == this._scrollComponent.currentValue;
        }
      }
    }
  };
  AutoSellDialogGemsItem.prototype.updateSliderFill = function () {
    this.disp.mc_slider.mc_fill.width = this.disp.mc_slider.btn_slider.x - this.disp.mc_slider.mc_fill.x;
  };
  AutoSellDialogGemsItem.prototype.onScroll = function () {
    this.autoSellVO.gems.actives.set(this._colorVO.id, this._scrollComponent.currentValue);
    this.update();
  };
  AutoSellDialogGemsItem.prototype.onGemClipLoaded = function (e) {
    var t = e.currentshownDisplayObject;
    this.disp.mc_icon.mc_placeholder.addChild(e);
    if (this._colorVO) {
      var i = new a.ColorTransform();
      i.color = this._colorVO.color;
      t.cc0.transform.colorTransform = i;
    }
    t.mc_broken.visible = false;
    t.scaleX = t.scaleY = l.ClientConstUtils.getScaleFactorForFitInBounds(new p(t.width, t.height), new p(35, 35));
  };
  Object.defineProperty(AutoSellDialogGemsItem.prototype, "autoSellVO", {
    get: function () {
      return this._autoSellVO;
    },
    set: function (e) {
      this._autoSellVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellDialogGemsItem;
}(c.CastleItemRenderer);
exports.AutoSellDialogGemsItem = h;
var g = require("./46.js");
var C = require("./82.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");