Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SimpleScrollVO(e = null, t = null, i = null, n = null, o = null, a = null, s = null, r = null) {
    this._visualElements = [];
    this._mouseWheelElements = [];
    this.addMinusButton(e);
    this.addPlusButton(t);
    this.addMinButton(i);
    this.addMaxButton(n);
    this.addSliderLine(o);
    this.addSliderButton(a);
    this.addVisualElements(s);
    this.addMouseWheelElements(r);
  }
  SimpleScrollVO.prototype.reset = function () {
    this._minusButton = this._plusButton = this._minButton = this._maxButton = this._sliderLine = this._sliderButton = null;
    this._visualElements = [];
    this._mouseWheelElements = [];
  };
  SimpleScrollVO.prototype.addMinusButton = function (e) {
    this._minusButton = e;
    return this;
  };
  SimpleScrollVO.prototype.addPlusButton = function (e) {
    this._plusButton = e;
    return this;
  };
  SimpleScrollVO.prototype.addMinButton = function (e) {
    this._minButton = e;
    return this;
  };
  SimpleScrollVO.prototype.addMaxButton = function (e) {
    this._maxButton = e;
    return this;
  };
  SimpleScrollVO.prototype.addSliderLine = function (e) {
    this._sliderLine = e;
    return this;
  };
  SimpleScrollVO.prototype.addSliderBackground = function (e) {
    this._sliderBackground = e;
    return this;
  };
  SimpleScrollVO.prototype.addSliderButton = function (e) {
    this._sliderButton = e;
    return this;
  };
  SimpleScrollVO.prototype.addVisualElements = function (e) {
    this._visualElements = e;
    if (!e) {
      this._visualElements = [];
    }
    return this;
  };
  SimpleScrollVO.prototype.addMouseWheelElements = function (e) {
    this._mouseWheelElements = e;
    if (!e) {
      this._mouseWheelElements = [];
    }
    return this;
  };
  SimpleScrollVO.prototype.initByParent = function (e) {
    this.reset();
    if (e) {
      this.addMinusButton(e.getChildByName("btn_minus"));
      this.addPlusButton(e.getChildByName("btn_plus"));
      this.addMinButton(e.getChildByName("btn_min"));
      this.addMaxButton(e.getChildByName("btn_max"));
      this.addSliderButton(e.getChildByName("btn_slider"));
      this.addSliderLine(e.getChildByName("mc_sliderLine"));
    }
    return this;
  };
  Object.defineProperty(SimpleScrollVO.prototype, "hasSlider", {
    get: function () {
      return !!this.sliderButton && !!this.sliderLine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "stage", {
    get: function () {
      if (this.sliderLine) {
        return this.sliderLine.stage;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "sliderLine", {
    get: function () {
      return this._sliderLine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "sliderButton", {
    get: function () {
      return this._sliderButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "sliderBackground", {
    get: function () {
      return this._sliderBackground;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "visualElements", {
    get: function () {
      return this._visualElements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "mouseWheelElements", {
    get: function () {
      return this._mouseWheelElements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "plusButton", {
    get: function () {
      return this._plusButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "minusButton", {
    get: function () {
      return this._minusButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "minButton", {
    get: function () {
      return this._minButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "maxButton", {
    get: function () {
      return this._maxButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "allElements", {
    get: function () {
      var e = [];
      if (this.maxButton) {
        e.push(this.maxButton);
      }
      if (this.minButton) {
        e.push(this.minButton);
      }
      if (this.minusButton) {
        e.push(this.minusButton);
      }
      if (this.plusButton) {
        e.push(this.plusButton);
      }
      if (this.sliderBackground) {
        e.push(this.sliderBackground);
      }
      if (this.sliderButton) {
        e.push(this.sliderButton);
      }
      if (this.sliderLine) {
        e.push(this.sliderLine);
      }
      return e = e.concat(this.visualElements);
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollVO;
}();
exports.SimpleScrollVO = n;