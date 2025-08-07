Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./1258.js");
var l = require("./8.js");
var c = require("./413.js");
var u = require("./36.js");
var d = function (e) {
  function DynamicSliderAccordionComponent(t, i = null, n = null, o = true) {
    return e.call(this, t, i, n ? n.y : t.mc_mask.y, o) || this;
  }
  n.__extends(DynamicSliderAccordionComponent, e);
  DynamicSliderAccordionComponent.prototype.init = function () {
    l.ButtonHelper.initButton(this._disp.mc_slider.btn_minus, 1, u.ClickFeedbackButton);
    l.ButtonHelper.initButton(this._disp.mc_slider.btn_slider, 1, c.ClickFeedBackSliderButton);
    l.ButtonHelper.initButton(this._disp.mc_slider.btn_plus, 1, u.ClickFeedbackButton);
    this._sliderButton = this._disp.mc_slider.btn_slider.basicButton;
    e.prototype.init.call(this);
    if (a.instanceOfClass(this.scrollComponent.strategy, "DynamicSizeScrollStrategyVertical")) {
      this.scrollComponent.strategy.visibleValue = this._itemContainer.mask.height;
    }
  };
  DynamicSliderAccordionComponent.prototype.show = function () {
    e.prototype.show.call(this);
    this._disp.visible = true;
  };
  DynamicSliderAccordionComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._disp.visible = false;
    this.clear();
  };
  DynamicSliderAccordionComponent.prototype.updateSlider = function (e = false) {
    var t = 0;
    var i = 0;
    if (this._properties.isVertical) {
      i = this.applyLayout().height;
      t = s.int(Math.max(0, i - this._itemContainer.mask.height));
    } else {
      i = this.applyLayout().width;
      t = s.int(Math.max(0, i - this._itemContainer.mask.width));
    }
    var n = s.int(e ? 0 : this.scrollComponent.currentValue);
    this.scrollComponent.init(0, t, this._properties.scrollStepPixels, this._properties.scrollStepPixels);
    this.scrollComponent.scrollToValue(Math.min(n, t));
    this.disp.mc_slider.visible = t > 0;
    this.scrollComponent.setVisibility(t > 0);
  };
  Object.defineProperty(DynamicSliderAccordionComponent.prototype, "sliderButton", {
    get: function () {
      return this._sliderButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicSliderAccordionComponent.prototype, "numItems", {
    get: function () {
      return this.items.length;
    },
    enumerable: true,
    configurable: true
  });
  return DynamicSliderAccordionComponent;
}(r.AccordionComponent);
exports.DynamicSliderAccordionComponent = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");