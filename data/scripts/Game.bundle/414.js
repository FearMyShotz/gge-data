Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./8.js");
var s = function () {
  function SimpleScrollStrategyVertical(e = false, t = false) {
    this._disableButtons = false;
    this._invisibleWhenNotScrollable = false;
    this._refDispHeight = 0;
    this._disableButtons = e;
    this._invisibleWhenNotScrollable = t;
  }
  SimpleScrollStrategyVertical.prototype.init = function () {};
  SimpleScrollStrategyVertical.prototype.destroy = function () {
    this._scrollComponent = null;
  };
  SimpleScrollStrategyVertical.prototype.apply = function () {
    var e = this._scrollComponent.maxValue == this._scrollComponent.currentValue && this._scrollComponent.currentValue == this._scrollComponent.minValue;
    this._refDispHeight = 0;
    if (this._scrollComponent.isEnabled && this._scrollComponent.isVisible) {
      var t = this.percentFactor < 1 && this._scrollComponent.maxValue > 0;
      if (this._disableButtons) {
        if (this.scrollVO.minusButton) {
          a.ButtonHelper.enableButton(this.scrollVO.minusButton, !e && this.percentFactor > 0);
        }
        if (this.scrollVO.plusButton) {
          a.ButtonHelper.enableButton(this.scrollVO.plusButton, !e && t);
        }
        if (this.scrollVO.minButton) {
          a.ButtonHelper.enableButton(this.scrollVO.minButton, !e && this.percentFactor > 0);
        }
        if (this.scrollVO.maxButton) {
          a.ButtonHelper.enableButton(this.scrollVO.maxButton, !e && t);
        }
        if (this.scrollVO.sliderButton) {
          a.ButtonHelper.enableButton(this.scrollVO.sliderButton, !e);
        }
        if (this._invisibleWhenNotScrollable) {
          if (this.scrollVO.minusButton) {
            this.scrollVO.minusButton.visible = !e;
          }
          if (this.scrollVO.plusButton) {
            this.scrollVO.plusButton.visible = !e;
          }
          if (this.scrollVO.minButton) {
            this.scrollVO.minButton.visible = !e;
          }
          if (this.scrollVO.maxButton) {
            this.scrollVO.maxButton.visible = !e;
          }
          if (this.scrollVO.sliderButton) {
            this.scrollVO.sliderButton.visible = !e;
          }
          if (this.scrollVO.sliderLine) {
            this.scrollVO.sliderLine.visible = !e;
          }
          if (this.scrollVO.sliderBackground) {
            this.scrollVO.sliderBackground.visible = !e;
          }
        }
      } else {
        if (this.scrollVO.minusButton) {
          this.scrollVO.minusButton.visible = !e && this.percentFactor > 0;
        }
        if (this.scrollVO.plusButton) {
          this.scrollVO.plusButton.visible = !e && t;
        }
        if (this.scrollVO.minButton) {
          this.scrollVO.minButton.visible = !e && this.percentFactor > 0;
        }
        if (this.scrollVO.maxButton) {
          this.scrollVO.maxButton.visible = !e && t;
        }
        if (this.scrollVO.sliderButton) {
          this.scrollVO.sliderButton.visible = !e;
        }
        if (this.scrollVO.sliderLine) {
          this.scrollVO.sliderLine.visible = !e;
        }
        if (this.scrollVO.sliderBackground) {
          this.scrollVO.sliderBackground.visible = !e;
        }
      }
    }
    this.placeSliderButton();
  };
  SimpleScrollStrategyVertical.prototype.getScorllDiffValueFromContentTouchMove = function (e, t, i, n) {
    if (this._refDispHeight === 0) {
      this._refDispHeight = i.height;
    }
    if (this._refDispHeight > n) {
      this._refDispHeight = n;
    }
    return (t.y - e.y) * n / (this._refDispHeight * 2);
  };
  SimpleScrollStrategyVertical.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderButton.y = this.getLineStartPos() + this.getLineLength() * this.percentFactor;
    }
  };
  SimpleScrollStrategyVertical.prototype.getPercentFactorOfMousePos = function (e = 0) {
    var t = (castAs(this.scrollVO.sliderLine, "Container").mouseY - e) / this.getLineLength();
    return t = n.MathBase.clamp(t, 0, 1);
  };
  SimpleScrollStrategyVertical.prototype.getLineStartPos = function () {
    var e = this.scrollVO.sliderLine.getBounds(null);
    var t = this.scrollVO.sliderLine.localToGlobal(e.topLeft);
    return this.scrollVO.sliderButton.parent.globalToLocal(t).y;
  };
  SimpleScrollStrategyVertical.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.getBounds(null).height;
  };
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "percentFactor", {
    get: function () {
      return this._scrollComponent.currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "scrollVO", {
    get: function () {
      return this._scrollComponent.scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollStrategyVertical.prototype.assignScrollComponent = function (e) {
    this._scrollComponent = e;
  };
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "disableButtons", {
    get: function () {
      return this._disableButtons;
    },
    set: function (e) {
      this._disableButtons = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "isVertical", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollStrategyVertical;
}();
exports.SimpleScrollStrategyVertical = s;
o.classImplementsInterfaces(s, "ISimpleScrollStrategy");