Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function SliderValueComponent(t, n, i, a, s = 0) {
    var r = e.call(this, t, n, i) || this;
    r.sliding = false;
    r.snappingOffsetInPixel = 0;
    r.sliderContainer = a;
    r._barOffset = (r.sliderContainer.getSlider().width - 1) / 2;
    r._barSize = r.sliderContainer.getSliderBar().width - r._barOffset * 2;
    r.sliderContainer.getSlider().addEventListener("mousedown", r.bindFunction(r.mouseDown));
    r.snappingOffsetInPixel = s;
    r.isDisposed = false;
    return r;
  }
  i.__extends(SliderValueComponent, e);
  SliderValueComponent.prototype.mouseUp = function (e) {
    this.sliding = false;
    this.sliderContainer.getSlider().stage.removeEventListener("mousemove", this.bindFunction(this.mouseMove));
    this.sliderContainer.getSlider().stage.removeEventListener("pressup", this.bindFunction(this.mouseUp));
  };
  SliderValueComponent.prototype.mouseMove = function (e) {};
  SliderValueComponent.prototype.mouseDown = function (e) {
    this.sliding = true;
    this.sliderContainer.getSlider().stage.addEventListener("mousemove", this.bindFunction(this.mouseMove));
    this.sliderContainer.getSlider().stage.addEventListener("pressup", this.bindFunction(this.mouseUp));
  };
  SliderValueComponent.prototype.updateValue = function (t) {
    e.prototype.updateValue.call(this, t);
    var n = (t - this.minValue) / (this.maxValue - this.minValue);
    if (this.sliderContainer.getFilledBar()) {
      this.sliderContainer.getFilledBar().width = n * this._barSize + this._barOffset + this.sliderContainer.getSliderBar().x;
    }
    this.sliderContainer.getSlider().x = n * this._barSize + this.sliderContainer.getSlider().x + this._barOffset;
  };
  SliderValueComponent.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.sliderContainer.getSlider().removeEventListener("mousedown", this.bindFunction(this.mouseDown));
      this.sliderContainer.getSlider().stage.removeEventListener("mousemove", this.bindFunction(this.mouseMove));
      this.sliderContainer.getSlider().stage.removeEventListener("pressup", this.bindFunction(this.mouseUp));
    }
    e.prototype.dispose.call(this);
  };
  return SliderValueComponent;
}(require("./103.js").AValueComponent);
exports.SliderValueComponent = a;