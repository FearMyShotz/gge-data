Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BasicSliderValueContainer(e) {
    this.slider = e.getChildByName("slider");
    this.sliderBar = e.getChildByName("slideBar");
    this.filledBar = this.sliderBar.getChildByName("fillBar");
  }
  BasicSliderValueContainer.prototype.getSlider = function () {
    return this.slider;
  };
  BasicSliderValueContainer.prototype.getSliderBar = function () {
    return this.sliderBar;
  };
  BasicSliderValueContainer.prototype.getFilledBar = function () {
    return this.filledBar;
  };
  return BasicSliderValueContainer;
}();
exports.BasicSliderValueContainer = i;