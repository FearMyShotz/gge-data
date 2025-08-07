Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./413.js");
var r = require("./1198.js");
var l = require("./8.js");
var c = require("./189.js");
var u = require("./36.js");
var d = function (e) {
  function DynamicSizeScrollStrategyHorizontal(t = false, i = 0) {
    var n = this;
    n._visibleValue = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._visibleValue = i;
    return n;
  }
  n.__extends(DynamicSizeScrollStrategyHorizontal, e);
  DynamicSizeScrollStrategyHorizontal.prototype.init = function () {
    e.prototype.init.call(this);
    this.placeSliderButton();
  };
  DynamicSizeScrollStrategyHorizontal.prototype.getPercentFactorOfMousePos = function (e = 0) {
    var t = (this.scrollVO.sliderLine.mouseX - e - this.getSliderButtonWidth() / 2) / this.getLineLength();
    return t = o.MathBase.clamp(t, 0, 1);
  };
  DynamicSizeScrollStrategyHorizontal.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.width - this.getSliderButtonWidth();
  };
  DynamicSizeScrollStrategyHorizontal.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider && (this.scrollVO.sliderButton.x = this.getLineStartPos() + this.getLineLength() * this.percentFactor + this.getSliderButtonWidth() / 2, r.instanceOf_IDynamicSizeSlider(l.ButtonHelper.getBasicButton(this.scrollVO.sliderButton)))) {
      var e = l.ButtonHelper.getBasicButton(this.scrollVO.sliderButton);
      var t = o.MathBase.clamp(this._visibleValue / (this._scrollComponent.maxValue + this._visibleValue), 0, 1) * this.scrollVO.sliderLine.width;
      e.setSize(Math.max(t, e.minSize));
    }
  };
  Object.defineProperty(DynamicSizeScrollStrategyHorizontal.prototype, "visibleValue", {
    set: function (e) {
      this._visibleValue = e;
    },
    enumerable: true,
    configurable: true
  });
  DynamicSizeScrollStrategyHorizontal.prototype.getSliderButtonWidth = function () {
    if (this.scrollVO.sliderButton.skewX != 0 || this.scrollVO.sliderButton.rotation != 0) {
      return this.scrollVO.sliderButton.height;
    } else {
      return this.scrollVO.sliderButton.width;
    }
  };
  DynamicSizeScrollStrategyHorizontal.prototype.initButtons = function () {
    l.ButtonHelper.initButtons([this.scrollVO.minButton, this.scrollVO.maxButton, this.scrollVO.plusButton, this.scrollVO.minusButton], u.ClickFeedbackButton, 1);
    l.ButtonHelper.initButtons([this.scrollVO.sliderButton], s.ClickFeedBackSliderButton, 1);
  };
  return DynamicSizeScrollStrategyHorizontal;
}(c.SimpleScrollStrategyHorizontal);
exports.DynamicSizeScrollStrategyHorizontal = d;
a.classImplementsInterfaces(d, "ISimpleScrollStrategy", "IDynamicSizeScrollStrategy");