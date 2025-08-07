Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function CastleSliderValueComponent(t, i, n, o, a = "", c = 0) {
    var u = this;
    u._barOffset = 0;
    u._barSize = 0;
    u.sliding = false;
    CONSTRUCTOR_HACK;
    (u = e.call(this, t, i, n) || this)._slider = o.slider;
    u._slider.actLikeButton = true;
    u._bar = o.slideBar;
    u._bar.actLikeButton = true;
    if (o.slideBar.otherBar) {
      o.slideBar.otherBar.actLikeButton = true;
    }
    u._barOffset = c;
    u._barSize = r.int(u._bar.width - u._barOffset * 2);
    u._slider.addEventListener(l.MOUSE_DOWN, u.bindFunction(u.mouseDown));
    u._slider.stage.addEventListener(l.MOUSE_MOVE, u.bindFunction(u.mouseMove));
    u._slider.stage.addEventListener(l.MOUSE_UP, u.bindFunction(u.mouseUp));
    u._bar.addEventListener(l.CLICK, u.bindFunction(u.onClickSlider));
    u._slider.toolTipText = s.Localize.text(a);
    u.isDisposed = false;
    return u;
  }
  n.__extends(CastleSliderValueComponent, e);
  CastleSliderValueComponent.prototype.mouseUp = function (e) {
    this.sliding = false;
  };
  CastleSliderValueComponent.prototype.onClickSlider = function (e) {
    var t = r.int(this._bar.x + e.localX);
    if (t > 0 && t < this._barSize) {
      this.setSlider(t);
    }
  };
  CastleSliderValueComponent.prototype.setSlider = function (e) {
    var t;
    var i = e;
    if ((t = Math.round(this.minValue + (i - this._barOffset - this._bar.x) / this._barSize * (this.maxValue - this.minValue))) != this.value) {
      this.dispatchUpdateByUserSignal(t);
      this.updateValue(t);
    }
  };
  CastleSliderValueComponent.prototype.mouseMove = function (e) {
    if (this.sliding) {
      var t = r.int(this._slider.x);
      var i = false;
      var n = 0;
      if (this._bar.mouseX < this._barOffset + CastleSliderValueComponent.SNAPPING_OFFSET_IN_PIXEL) {
        n = r.int(this.minValue);
        i = true;
      } else if (this._bar.mouseX > this._barSize + this._bar.x - +CastleSliderValueComponent.SNAPPING_OFFSET_IN_PIXEL) {
        n = r.int(this.maxValue);
        i = true;
      } else {
        t = r.int(this._bar.mouseX + this._barOffset);
      }
      if (!i) {
        n = Math.round(this.minValue + (t - this._barOffset - this._bar.x) / this._barSize * (this.maxValue - this.minValue));
      }
      if (n != this.value) {
        this.dispatchUpdateByUserSignal(n);
      }
    }
  };
  CastleSliderValueComponent.prototype.mouseDown = function (e) {
    this.sliding = true;
  };
  CastleSliderValueComponent.prototype.updateValue = function (t) {
    e.prototype.updateValue.call(this, t);
    var i = (t - this.minValue) / (this.maxValue - this.minValue);
    if (this._bar.fillBar) {
      this._bar.fillBar.width = i * this._barSize + this._barOffset;
    }
    this._slider.x = i * this._barSize + this._bar.x + this._barOffset;
  };
  CastleSliderValueComponent.prototype.dispose = function () {
    if (!this.isDisposed) {
      this._slider.removeEventListener(l.MOUSE_DOWN, this.bindFunction(this.mouseDown));
      this._slider.stage.removeEventListener(l.MOUSE_MOVE, this.bindFunction(this.mouseMove));
      this._slider.stage.removeEventListener(l.MOUSE_UP, this.bindFunction(this.mouseUp));
      this._bar.removeEventListener(l.CLICK, this.bindFunction(this.onClickSlider));
    }
    e.prototype.dispose.call(this);
  };
  CastleSliderValueComponent.__initialize_static_members = function () {
    CastleSliderValueComponent.SNAPPING_OFFSET_IN_PIXEL = 0;
  };
  return CastleSliderValueComponent;
}(o.AValueComponent);
exports.CastleSliderValueComponent = c;
a.classImplementsInterfaces(c, "IValueComponent");
c.__initialize_static_members();