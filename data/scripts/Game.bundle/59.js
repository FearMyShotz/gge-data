Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./413.js");
var r = require("./1198.js");
var l = require("./8.js");
var c = function (e) {
  function DynamicSizeScrollStrategyVertical(t = false, i = 0, n = false) {
    var o = this;
    o._visibleValue = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t, n) || this)._visibleValue = i;
    return o;
  }
  n.__extends(DynamicSizeScrollStrategyVertical, e);
  DynamicSizeScrollStrategyVertical.prototype.init = function () {
    e.prototype.init.call(this);
    this.placeSliderButton();
  };
  DynamicSizeScrollStrategyVertical.prototype.getPercentFactorOfMousePos = function (e = 0) {
    var t = (castAs(this.scrollVO.sliderLine, "Container").mouseY - e - this.scrollVO.sliderButton.height / 2) / this.getLineLength();
    return t = o.MathBase.clamp(t, 0, 1);
  };
  DynamicSizeScrollStrategyVertical.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.height - this.scrollVO.sliderButton.height;
  };
  DynamicSizeScrollStrategyVertical.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider && (this.scrollVO.sliderButton.y = this.getLineStartPos() + this.getLineLength() * this.percentFactor + this.scrollVO.sliderButton.height / 2, r.instanceOf_IDynamicSizeSlider(l.ButtonHelper.getBasicButton(castAs(this.scrollVO.sliderButton, "DisplayObject"))))) {
      var e = l.ButtonHelper.getBasicButton(castAs(this.scrollVO.sliderButton, "DisplayObject"));
      var t = castAs(e, "IDynamicSizeSlider");
      var i = o.MathBase.clamp(this._visibleValue / (this._scrollComponent.maxValue + this._visibleValue), 0, 1) * this.scrollVO.sliderLine.height;
      if (t != null) {
        t.setSize(Math.max(i, t.minSize));
      } else {
        e.setSize(Math.max(i, e.minSize));
      }
    }
  };
  Object.defineProperty(DynamicSizeScrollStrategyVertical.prototype, "visibleValue", {
    set: function (e) {
      this._visibleValue = e;
    },
    enumerable: true,
    configurable: true
  });
  DynamicSizeScrollStrategyVertical.prototype.initButtons = function () {
    l.ButtonHelper.initButtons([this.scrollVO.minButton, this.scrollVO.maxButton, this.scrollVO.plusButton, this.scrollVO.minusButton], u.ClickFeedbackButton, 1);
    l.ButtonHelper.initButtons([this.scrollVO.sliderButton], s.ClickFeedBackSliderButton, 1);
  };
  return DynamicSizeScrollStrategyVertical;
}(require("./414.js").SimpleScrollStrategyVertical);
exports.DynamicSizeScrollStrategyVertical = c;
a.classImplementsInterfaces(c, "ISimpleScrollStrategy", "IDynamicSizeScrollStrategy");
var u = require("./36.js");