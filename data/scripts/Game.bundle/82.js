Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./340.js");
var a = require("./8.js");
var s = require("./95.js");
var r = require("./36.js");
var l = function (e) {
  function ModernSliderScrollComponent(t, i, n = false) {
    var o = this;
    o._dispInvisibleWhenNotScrollable = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t, i) || this)._dispInvisibleWhenNotScrollable = n;
    return o;
  }
  n.__extends(ModernSliderScrollComponent, e);
  ModernSliderScrollComponent.prototype.initButtons = function () {
    a.ButtonHelper.initButtons([this.scrollVO.sliderButton], o.ClickFeedBackHoverSliderButton, 1);
    a.ButtonHelper.initButtons([this.scrollVO.minusButton, this.scrollVO.plusButton, this.scrollVO.minButton, this.scrollVO.maxButton], r.ClickFeedbackButton, 1);
  };
  ModernSliderScrollComponent.prototype.setVisibility = function (t) {
    e.prototype.setVisibility.call(this, t);
    if (this._dispInvisibleWhenNotScrollable && this.scrollVO.sliderButton) {
      this.scrollVO.sliderButton.parent.visible = this.isVisible;
    }
  };
  return ModernSliderScrollComponent;
}(s.SimpleScrollComponent);
exports.ModernSliderScrollComponent = l;