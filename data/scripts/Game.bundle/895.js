Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./232.js");
var r = require("./30.js");
var l = require("./72.js");
var c = require("./2145.js");
var u = createjs.MouseEvent;
var d = function (e) {
  function MultiSlider(t, i, n, o, a, s = true, r = null) {
    var l = e.call(this) || this;
    l._sliderAmount = 0;
    l._sliderWidth = NaN;
    l._sliderButtonWidth = NaN;
    l._borderLeft = NaN;
    l._borderRight = NaN;
    l._useBars = false;
    l._oneHundredPercentInPixel = NaN;
    l._enabled = true;
    l._lastUpdateSent = 0;
    l._disp = t;
    l._sliderAmount = i;
    l._sliderButtonWidth = n;
    l._sliderWidth = o;
    l._useBars = s;
    l._sliderButtonClass = a;
    l._toolTips = r;
    l.init();
    return l;
  }
  n.__extends(MultiSlider, e);
  MultiSlider.prototype.init = function () {
    this._borderLeft = this.sliderButtonWidth / 2;
    this._borderRight = this._sliderWidth - this.sliderButtonWidth / 2;
    this._oneHundredPercentInPixel = this._sliderWidth - this.sliderAmount * this.sliderButtonWidth;
    this._buttons = [];
    for (var e = 0; e < this._sliderAmount; e++) {
      var t = new c.MultiSliderButton(new this._sliderButtonClass(), this);
      t.addEventListener(u.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
      t.id = e;
      if (this._toolTips && this._toolTips.length > e) {
        t.disp.toolTipText = this._toolTips[e];
      }
      this._disp.addChild(t);
      this._buttons.push(t);
    }
    var i = 100 / (this._sliderAmount + 1);
    for (var n = 0; n < this._sliderAmount; n++) {
      this._buttons[n].selectedValue = i * (n + 1);
    }
    this._disp.parent.addEventListener(u.MOUSE_UP, this.bindFunction(this.onSliderUp));
    this._disp.parent.addEventListener(u.ROLL_OUT, this.bindFunction(this.onSliderUp));
    this._disp.parent.addEventListener(u.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.drawBars();
  };
  Object.defineProperty(MultiSlider.prototype, "enableComponent", {
    set: function (e) {
      this._enabled = e;
    },
    enumerable: true,
    configurable: true
  });
  MultiSlider.prototype.onSliderDown = function (e) {
    if (this._enabled) {
      var t = e.target.parent;
      this._lastUpdateSent = r.CachedTimer.getCachedTimer();
      this._selectedSliderButton ||= t;
    }
  };
  MultiSlider.prototype.onSliding = function (e) {
    if (this._selectedSliderButton) {
      this._selectedSliderButton.movePosition(this._disp.mouseX);
      this.updateslider();
      var t = r.CachedTimer.getCachedTimer();
      if (t - this._lastUpdateSent > MultiSlider.UDPATE_INTERVAL) {
        this._lastUpdateSent = t;
        this.dispatchEvent(new s.SliderEvent(s.SliderEvent.VALUE_CHANGED, this.getPercentValues()));
      }
    }
  };
  MultiSlider.prototype.onSliderUp = function (e) {
    if (this._selectedSliderButton) {
      this.dispatchEvent(new s.SliderEvent(s.SliderEvent.VALUE_CHANGED, this.getPercentValues()));
      this._selectedSliderButton = null;
      this.updateslider();
    }
  };
  MultiSlider.prototype.setSliderTo = function (e, t) {
    this.buttons[e].selectedValue = t;
    this.updateslider();
  };
  MultiSlider.prototype.updateslider = function () {
    this.drawBars();
  };
  MultiSlider.prototype.drawBars = function () {
    if (this._useBars) {
      for (var e = 0; e < this._sliderAmount; e++) {
        var t = this._buttons[e].buttonPosition / this._sliderWidth;
        this._disp["bar" + e].mc_mask.scaleX = t;
      }
      this._disp["bar" + this._sliderAmount].mc_mask.visible = false;
    }
  };
  MultiSlider.prototype.getPixelDistances = function () {
    var e = [];
    var t = 0;
    for (var i = 0; i < this._sliderAmount; i++) {
      var n = this._buttons[i];
      e.push(n.buttonLeft - t);
      t = n.buttonRight;
    }
    e.push(this._sliderWidth - t);
    return e;
  };
  MultiSlider.prototype.getPercentValues = function () {
    var e = this.getPixelDistances();
    var t = [];
    var i = 0;
    for (i = 0; i < e.length; i++) {
      t.push(a.int(e[i]) / this._oneHundredPercentInPixel);
    }
    for (i = 0; i < t.length; i++) {
      t[i] = o.MathBase.round(Math.max(Math.min(t[i], 100), 0), 2);
    }
    var n = 0;
    var s = 0;
    for (i = 0; i < t.length; i++) {
      n += t[i];
      if (t[i] >= t[s]) {
        s = i;
      }
    }
    t[s] += 1 - n;
    return t;
  };
  Object.defineProperty(MultiSlider.prototype, "borderLeft", {
    get: function () {
      return this._borderLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "borderRight", {
    get: function () {
      return this._borderRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "sliderWidth", {
    get: function () {
      return this._sliderWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "sliderButtonWidth", {
    get: function () {
      return this._sliderButtonWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "sliderAmount", {
    get: function () {
      return this._sliderAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "oneHundredPercentInPixel", {
    get: function () {
      return this._oneHundredPercentInPixel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "toolTips", {
    get: function () {
      return this._toolTips;
    },
    set: function (e) {
      for (var t = 0; t < this._buttons.length; t++) {
        if (e && e.length > t) {
          this._buttons[t].disp.toolTipText = e[t];
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  MultiSlider.prototype.dispose = function () {
    for (var e = 0; e < this._buttons.length; ++e) {
      this._buttons[e].removeEventListener(u.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
    }
    this._disp.parent.removeEventListener(u.MOUSE_UP, this.bindFunction(this.onSliderUp));
    this._disp.parent.removeEventListener(u.ROLL_OUT, this.bindFunction(this.onSliderUp));
    this._disp.parent.removeEventListener(u.PRESS_MOVE, this.bindFunction(this.onSliding));
    this._disp = null;
    this._buttons = null;
    this._selectedSliderButton = null;
    this._sliderButtonClass = null;
    this._toolTips = null;
  };
  MultiSlider.__initialize_static_members = function () {
    MultiSlider.UDPATE_INTERVAL = 250;
  };
  return MultiSlider;
}(l.CastleEventDispatcher);
exports.MultiSlider = d;
d.__initialize_static_members();