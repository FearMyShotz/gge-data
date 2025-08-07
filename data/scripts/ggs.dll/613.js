var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = function (e) {
  function HeroTwoStateButton(t = null, n = true) {
    var i = e.call(this, t, n) || this;
    i._disp.mouse_over.visible = false;
    i._disp.addEventListener("mouseover", i.bindFunction(i.onRollOver));
    i._disp.addEventListener("mouseout", i.bindFunction(i.onRollOut));
    for (var a = 0; a < i._disp.numChildren; ++a) {
      var s = i._disp.getChildAt(a);
      if (s && s.name == "mc_ani") {
        s.play();
      }
    }
    return i;
  }
  a(HeroTwoStateButton, e);
  HeroTwoStateButton.prototype.onRollOut = function (e) {
    if (!this.isSelected) {
      this._disp.mouse_over.visible = false;
    }
  };
  HeroTwoStateButton.prototype.selected = function () {
    e.prototype.selected.call(this);
  };
  HeroTwoStateButton.prototype.deselected = function () {
    e.prototype.deselected.call(this);
    this._disp.mouse_over.visible = false;
  };
  HeroTwoStateButton.prototype.onRollOver = function (e) {
    if (!this.isSelected) {
      this._disp.mouse_over.visible = true;
    }
  };
  return HeroTwoStateButton;
}(require("./145.js").TwoStateButton);
exports.HeroTwoStateButton = s;