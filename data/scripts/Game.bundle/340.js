Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./20.js");
var s = function (e) {
  function ClickFeedBackHoverSliderButton(t = null, i = false) {
    var n = e.call(this, t, i) || this;
    n._isVertical = true;
    n._isVertical = t.height > t.width;
    return n;
  }
  n.__extends(ClickFeedBackHoverSliderButton, e);
  ClickFeedBackHoverSliderButton.prototype.onMouseDown = function (t) {
    var i = this._isVertical ? this._disp.height : this._disp.width;
    e.prototype.onMouseDown.call(this, t);
    this.setSize(i);
  };
  ClickFeedBackHoverSliderButton.prototype.onMouseUp = function (t) {
    var i = this._isVertical ? this._disp.height : this._disp.width;
    e.prototype.onMouseUp.call(this, t);
    this.setSize(i);
  };
  ClickFeedBackHoverSliderButton.prototype.onRollOut = function (e) {
    var t = this._isVertical ? this._disp.height : this._disp.width;
    this._disp.gotoAndStop(a.ClickFeedbackButtonHover.FRAME_DEFAULT);
    this.setSize(t);
  };
  ClickFeedBackHoverSliderButton.prototype.onRollOver = function (t) {
    var i = this._isVertical ? this._disp.height : this._disp.width;
    e.prototype.onRollOver.call(this, t);
    this.setSize(i);
  };
  ClickFeedBackHoverSliderButton.prototype.setSize = function (e) {
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
  Object.defineProperty(ClickFeedBackHoverSliderButton.prototype, "minSize", {
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
  return ClickFeedBackHoverSliderButton;
}(a.ClickFeedbackButtonHover);
exports.ClickFeedBackHoverSliderButton = s;
o.classImplementsInterfaces(s, "MovieClip", "IDynamicSizeSlider");