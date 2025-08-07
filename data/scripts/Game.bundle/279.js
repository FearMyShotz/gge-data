Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AccordionComponentProperties(e = AccordionComponentProperties.SCROLL_DURATION, t = AccordionComponentProperties.SCROLL_STEP_PIXELS, i = true, n = true, o = null, a = false) {
    this.scrollDuration = AccordionComponentProperties.SCROLL_DURATION;
    this.scrollStepPixels = AccordionComponentProperties.SCROLL_STEP_PIXELS;
    this.isVertical = true;
    this.onlyOneActiveItem = true;
    this.scrollStrategy = null;
    this.disableButtons = false;
    this.scrollToOpened = false;
    this.scrollDuration = e;
    this.scrollStepPixels = t;
    this.isVertical = i;
    this.onlyOneActiveItem = n;
    this.scrollStrategy = o;
    this.disableButtons = a;
  }
  AccordionComponentProperties.__initialize_static_members = function () {
    AccordionComponentProperties.SCROLL_DURATION = 0.2;
    AccordionComponentProperties.SCROLL_STEP_PIXELS = 20;
  };
  return AccordionComponentProperties;
}();
exports.AccordionComponentProperties = n;
n.__initialize_static_members();