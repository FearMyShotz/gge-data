Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function VerticalSliderStrategy() {}
  VerticalSliderStrategy.prototype.getElementLength = function (e) {
    return e.height;
  };
  VerticalSliderStrategy.prototype.getPosition = function (e) {
    return e.y;
  };
  VerticalSliderStrategy.prototype.getMouseValue = function (e) {
    return e.localY;
  };
  VerticalSliderStrategy.prototype.transformMousePosition = function (e, t) {
    return this.getPosition(e) + this.getMouseValue(t);
  };
  VerticalSliderStrategy.prototype.setPosition = function (e, t) {
    e.y = t;
  };
  VerticalSliderStrategy.prototype.getMousePosition = function (e) {
    return e.mouseY;
  };
  VerticalSliderStrategy.prototype.getElementScale = function (e) {
    return e.scaleY;
  };
  return VerticalSliderStrategy;
}();
exports.VerticalSliderStrategy = o;
n.classImplementsInterfaces(o, "ISliderChangeStrategy");