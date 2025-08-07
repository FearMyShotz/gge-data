Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./23.js");
var a = require("./23.js");
var s = require("./57.js");
var r = require("./8.js");
var l = require("./40.js");
var c = require("./237.js");
var u = function (e) {
  function ToggleSwitchButton(t) {
    var i = e.call(this, t) || this;
    i._value = false;
    r.ButtonHelper.initBasicButtons([i.disp]);
    i.disp.gotoAndStop(1);
    new c.ClickFeedbackHoverBehaviour(i.disp).addEventListener();
    i._changeSignal = new s.Signal();
    i.addEventListener();
    return i;
  }
  n.__extends(ToggleSwitchButton, e);
  ToggleSwitchButton.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.isEnabled) {
      this.toggle();
    }
  };
  ToggleSwitchButton.prototype.toggle = function () {
    this.setValue(!this.value, true);
    this._changeSignal.dispatch(this.value);
  };
  ToggleSwitchButton.prototype.setValue = function (e, t = false) {
    this._value = e;
    var i = this._value ? this.disp.toggle_off.x : this.disp.toggle_on.x;
    if (t) {
      o.TweenMax.killTweensOf(this.disp.toggle_slider);
      o.TweenMax.to(this.disp.toggle_slider, 0.3, {
        x: i,
        ease: a.Power1.easeOut
      });
    } else {
      this.disp.toggle_slider.x = i;
    }
  };
  ToggleSwitchButton.prototype.enableComponent = function (t) {
    e.prototype.enableComponent.call(this, t);
    r.ButtonHelper.enableButton(this.disp, t);
  };
  Object.defineProperty(ToggleSwitchButton.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToggleSwitchButton.prototype, "changeSignal", {
    get: function () {
      return this._changeSignal;
    },
    enumerable: true,
    configurable: true
  });
  return ToggleSwitchButton;
}(l.CastleItemRenderer);
exports.ToggleSwitchButton = u;