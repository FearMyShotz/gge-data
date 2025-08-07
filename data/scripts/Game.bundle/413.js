Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./36.js");
var s = function (e) {
  function ClickFeedBackSliderButton(t = null, i = false) {
    var n = e.call(this, t, i) || this;
    n._isVertical = true;
    n._isVertical = t.height > t.width;
    return n;
  }
  n.__extends(ClickFeedBackSliderButton, e);
  ClickFeedBackSliderButton.prototype.onMouseDown = function (t) {
    var i = this._isVertical ? this._disp.height : this._disp.width;
    e.prototype.onMouseDown.call(this, t);
    this.setSize(i);
  };
  ClickFeedBackSliderButton.prototype.onMouseUp = function (t) {
    var i = this._isVertical ? this._disp.height : this._disp.width;
    e.prototype.onMouseUp.call(this, t);
    this.setSize(i);
  };
  ClickFeedBackSliderButton.prototype.onRollOut = function (e) {
    var t = this._isVertical ? this._disp.height : this._disp.width;
    this._disp.gotoAndStop(a.ClickFeedbackButton.FRAME_DEFAULT);
    this.setSize(t);
  };
  ClickFeedBackSliderButton.prototype.setSize = function (e) {
    if (this._disp.bg) {
      if (this._isVertical) {
        this._disp.bg.height = e;
        this._disp.bg.y = 0;
      } else {
        this._disp.bg.width = e;
        this._disp.bg.x = 0;
      }
    }
  };
  Object.defineProperty(ClickFeedBackSliderButton.prototype, "minSize", {
    get: function () {
      if (this._disp.stripes) {
        if (this._isVertical) {
          return this._disp.stripes.height + 10;
        } else {
          return this._disp.stripes.width + 10;
        }
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return ClickFeedBackSliderButton;
}(a.ClickFeedbackButton);
exports.ClickFeedBackSliderButton = s;
o.classImplementsInterfaces(s, "MovieClip", "IDynamicSizeSlider");