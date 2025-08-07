Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./16.js");
var p = require("./55.js");
var h = require("./40.js");
var g = require("./95.js");
var C = require("./47.js");
var _ = require("./59.js");
var m = function (e) {
  function InfoCatalogPageScrollText(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(InfoCatalogPageScrollText, e);
  InfoCatalogPageScrollText.prototype.init = function () {
    this._scrollComponent = new g.SimpleScrollComponent(new C.SimpleScrollVO().initByParent(this.disp.mc_slider).addVisualElements([this.disp.mc_slider]).addMouseWheelElements([this.disp]), new _.DynamicSizeScrollStrategyVertical(true));
  };
  InfoCatalogPageScrollText.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
  };
  InfoCatalogPageScrollText.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  InfoCatalogPageScrollText.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onComponentScroll));
    if (this._textfield) {
      this._textfield.mouseOver.add(this.bindFunction(this.onMouseOverText));
      this._textfield.mouseOut.add(this.bindFunction(this.onMouseOutText));
    }
  };
  InfoCatalogPageScrollText.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onComponentScroll));
    if (this._textfield) {
      this._textfield.mouseOver.remove(this.bindFunction(this.onMouseOverText));
      this._textfield.mouseOut.remove(this.bindFunction(this.onMouseOutText));
    }
    e.prototype.removeEventListener.call(this);
  };
  InfoCatalogPageScrollText.prototype.fillContent = function (e, t = null) {
    this.removeEventListener();
    var i = new c.HTMLLinkFormatsVO(new u.HTMLLinkFormatVO(d.ClientConstColor.MODERN_LINK_BRIGHT_HOVERED), new u.HTMLLinkFormatVO(d.ClientConstColor.MODERN_DEFAULT_BRIGHT), new u.HTMLLinkFormatVO(d.ClientConstColor.MODERN_LINK_BRIGHT, a.GGSTextDecoration.UNDERLINE));
    var n = new l.HTMLTextCustomVO();
    n.addLocalizedTextVO(new r.LocalizedTextVO(e, t));
    n.linkFormats = i;
    this._textfield = f.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, n);
    if (this.isShown) {
      this.addEventListener();
    }
    var o = p.ClientConstUtils.isTlfMode ? this._textfield.size * 1.3 : 3;
    var s = Math.ceil(this._textfield.maxScrollV);
    this._scrollComponent.init(1, s, o, o);
    this._scrollComponent.setVisibility(s > 1);
    this._scrollComponent.scrollToPercent(0);
  };
  InfoCatalogPageScrollText.prototype.onComponentScroll = function () {
    if (this._textfield) {
      this._textfield.scrollV = this._scrollComponent.currentValue;
    }
  };
  InfoCatalogPageScrollText.prototype.onTextScroll = function (e = null) {
    if (!this._scrollComponent.isDragging) {
      this._scrollComponent.scrollToValue(this._textfield.scrollV, false);
    }
  };
  InfoCatalogPageScrollText.prototype.onMouseOverText = function (e) {
    f.CastleComponent.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
  };
  InfoCatalogPageScrollText.prototype.onMouseOutText = function (e) {
    f.CastleComponent.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_ARROW);
  };
  return InfoCatalogPageScrollText;
}(h.CastleItemRenderer);
exports.InfoCatalogPageScrollText = m;
var f = require("./14.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");