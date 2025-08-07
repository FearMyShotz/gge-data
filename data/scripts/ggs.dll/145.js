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
  function TwoStateButton(t = null, n = false) {
    return e.call(this, t, n) || this;
  }
  a(TwoStateButton, e);
  Object.defineProperty(TwoStateButton.prototype, "isSelected", {
    get: function () {
      return this._disp.currentFrame == 1;
    },
    enumerable: true,
    configurable: true
  });
  TwoStateButton.prototype.selected = function () {
    this._disp.gotoAndStop(2);
  };
  TwoStateButton.prototype.deselected = function () {
    this._disp.gotoAndStop(1);
  };
  return TwoStateButton;
}(require("./54.js").BasicButton);
exports.TwoStateButton = s;