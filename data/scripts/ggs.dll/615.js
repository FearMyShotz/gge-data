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
  function TwoStateIconZoomButton(t = null, n = false) {
    return e.call(this, t, n) || this;
  }
  a(TwoStateIconZoomButton, e);
  TwoStateIconZoomButton.prototype.selected = function () {
    this._disp.gotoAndStop(2);
  };
  TwoStateIconZoomButton.prototype.deselected = function () {
    this._disp.gotoAndStop(1);
  };
  TwoStateIconZoomButton.prototype.init = function () {
    e.prototype.init.call(this);
    this.initIconScale = this._disp.icon.scaleX;
  };
  TwoStateIconZoomButton.prototype.onRollOut = function (e) {
    if (this.enabled) {
      this._disp.icon.scaleX = this._disp.icon.scaleY = this.initIconScale;
    }
  };
  TwoStateIconZoomButton.prototype.onRollOver = function (e) {
    if (this.enabled) {
      this._disp.icon.scaleX = this._disp.icon.scaleY = this.initIconScale * this._mouseOverScale;
    }
  };
  return TwoStateIconZoomButton;
}(require("./54.js").BasicButton);
exports.TwoStateIconZoomButton = s;