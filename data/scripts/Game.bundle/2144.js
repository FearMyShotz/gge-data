Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function MultiSliderButton(t, i) {
    var n = this;
    n.id = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._disp = t;
    n._disp.actLikeButton = true;
    n._disp.mouseChildren = false;
    n.addChild(n._disp);
    n._slider = i;
    return n;
  }
  n.__extends(MultiSliderButton, e);
  Object.defineProperty(MultiSliderButton.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "selectedValue", {
    set: function (e) {
      if (e < 0) {
        e = 0;
      } else if (e > 100) {
        e = 100;
      }
      this.buttonPosition = a.int(e / 100 * this._slider.oneHundredPercentInPixel + this._slider.sliderButtonWidth / 2 + this.id * this._slider.sliderButtonWidth);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "borderLeft", {
    get: function () {
      if (this.id == 0) {
        return this._slider.borderLeft;
      } else {
        return this._slider.buttons[this.id - 1].buttonRight + this._slider.sliderButtonWidth / 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "borderRight", {
    get: function () {
      if (this.id == this._slider.sliderAmount - 1) {
        return this._slider.borderRight;
      } else {
        return this._slider.buttons[this.id + 1].buttonLeft - this._slider.sliderButtonWidth / 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "buttonLeft", {
    get: function () {
      return this.x - this._slider.sliderButtonWidth / 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "buttonRight", {
    get: function () {
      return this.x + this._slider.sliderButtonWidth / 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "buttonPosition", {
    get: function () {
      return this.x;
    },
    set: function (e) {
      if (e > this._slider.borderRight) {
        e = this._slider.borderRight;
      } else if (e < this._slider.borderLeft) {
        e = this._slider.borderLeft;
      }
      this.x = e;
    },
    enumerable: true,
    configurable: true
  });
  MultiSliderButton.prototype.movePosition = function (e) {
    if (e > this.borderRight) {
      e = this.borderRight;
    } else if (e < this.borderLeft) {
      e = this.borderLeft;
    }
    this.x = e;
  };
  return MultiSliderButton;
}(require("./583.js").CastleMovieClip);
exports.MultiSliderButton = s;
o.classImplementsInterfaces(s, "MovieClip");