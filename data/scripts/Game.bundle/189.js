Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./8.js");
var s = function () {
  function SimpleScrollStrategyHorizontal(e = false) {
    this._disableButtons = false;
    this._refDispWidth = 0;
    this._disableButtons = e;
  }
  SimpleScrollStrategyHorizontal.prototype.init = function () {};
  SimpleScrollStrategyHorizontal.prototype.destroy = function () {
    this._scrollComponent = null;
  };
  SimpleScrollStrategyHorizontal.prototype.apply = function () {
    this.placeSliderButton();
    this._refDispWidth = 0;
    if (this._scrollComponent.isEnabled && this._scrollComponent.isVisible) {
      var e = this.percentFactor < 1 && this._scrollComponent.maxValue > 0;
      if (this._disableButtons) {
        if (this.scrollVO.minusButton) {
          a.ButtonHelper.enableButton(this.scrollVO.minusButton, this.percentFactor > 0);
        }
        if (this.scrollVO.plusButton) {
          a.ButtonHelper.enableButton(this.scrollVO.plusButton, e);
        }
        if (this.scrollVO.minButton) {
          a.ButtonHelper.enableButton(this.scrollVO.minButton, this.percentFactor > 0);
        }
        if (this.scrollVO.maxButton) {
          a.ButtonHelper.enableButton(this.scrollVO.maxButton, e);
        }
      } else {
        if (this.scrollVO.minusButton) {
          this.scrollVO.minusButton.visible = this.percentFactor > 0;
        }
        if (this.scrollVO.plusButton) {
          this.scrollVO.plusButton.visible = e;
        }
        if (this.scrollVO.minButton) {
          this.scrollVO.minButton.visible = this.percentFactor > 0;
        }
        if (this.scrollVO.maxButton) {
          this.scrollVO.maxButton.visible = e;
        }
      }
    }
  };
  SimpleScrollStrategyHorizontal.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderButton.x = this.getLineStartPos() + this.getLineLength() * this.percentFactor;
    }
  };
  SimpleScrollStrategyHorizontal.prototype.getScorllDiffValueFromContentTouchMove = function (e, t, i, n) {
    if (this._refDispWidth === 0) {
      this._refDispWidth = i.width;
    }
    if (this._refDispWidth > n) {
      this._refDispWidth = n;
    }
    return (t.x - e.x) * n / (this._refDispWidth * 2);
  };
  SimpleScrollStrategyHorizontal.prototype.getPercentFactorOfMousePos = function (e = 0) {
    var t = (this.scrollVO.sliderLine.mouseX - e) / this.getLineLength();
    return t = n.MathBase.clamp(t, 0, 1);
  };
  SimpleScrollStrategyHorizontal.prototype.getLineStartPos = function () {
    var e = this.scrollVO.sliderLine.getBounds(null);
    var t = this.scrollVO.sliderLine.localToGlobal(e.topLeft);
    return this.scrollVO.sliderButton.parent.globalToLocal(t).x;
  };
  SimpleScrollStrategyHorizontal.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.getBounds(null).width;
  };
  Object.defineProperty(SimpleScrollStrategyHorizontal.prototype, "percentFactor", {
    get: function () {
      return this._scrollComponent.currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollStrategyHorizontal.prototype, "scrollVO", {
    get: function () {
      return this._scrollComponent.scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollStrategyHorizontal.prototype.assignScrollComponent = function (e) {
    this._scrollComponent = e;
  };
  Object.defineProperty(SimpleScrollStrategyHorizontal.prototype, "isVertical", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollStrategyHorizontal;
}();
exports.SimpleScrollStrategyHorizontal = s;
o.classImplementsInterfaces(s, "ISimpleScrollStrategy");