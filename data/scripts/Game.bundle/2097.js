Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function HorizontalSliderStrategy() {}
  HorizontalSliderStrategy.prototype.getElementLength = function (e) {
    return e.width;
  };
  HorizontalSliderStrategy.prototype.setPosition = function (e, t) {
    e.x = t;
  };
  HorizontalSliderStrategy.prototype.getPosition = function (e) {
    return e.x;
  };
  HorizontalSliderStrategy.prototype.getMouseValue = function (e) {
    return e.localX;
  };
  HorizontalSliderStrategy.prototype.transformMousePosition = function (e, t) {
    return this.getPosition(e) + this.getMouseValue(t);
  };
  HorizontalSliderStrategy.prototype.getMousePosition = function (e) {
    return e.mouseX;
  };
  HorizontalSliderStrategy.prototype.getElementScale = function (e) {
    return e.scaleX;
  };
  return HorizontalSliderStrategy;
}();
exports.HorizontalSliderStrategy = o;
n.classImplementsInterfaces(o, "ISliderChangeStrategy");