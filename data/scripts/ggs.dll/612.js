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
var s = require("./54.js");
var r = require("./3.js");
var o = createjs.GlowFilter;
var l = function (e) {
  function BigGlowableButton() {
    var t = e.call(this) || this;
    t._glowable = false;
    t.mouseOverScale = 1.025;
    return t;
  }
  a(BigGlowableButton, e);
  BigGlowableButton.prototype.init = function () {
    e.prototype.init.call(this);
    this._glowable = true;
  };
  BigGlowableButton.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (this._glowable && this._disp.enabled) {
      this.useFilters(BigGlowableButton.GLOW_FILTER);
    }
  };
  BigGlowableButton.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    if (this._disp.enabled) {
      this.useFilters(BigGlowableButton.NO_FILTER);
    }
  };
  BigGlowableButton.GLOW_FILTER = [new o(16774335, 1, 4.5, 4.5, 2, r.BitmapFilterQuality.HIGH)];
  BigGlowableButton.NO_FILTER = [];
  return BigGlowableButton;
}(s.BasicButton);
exports.BigGlowableButton = l;