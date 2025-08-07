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
  function SmallButton(t = null, n = false) {
    var i = e.call(this, t, n) || this;
    i.mouseOverScale = 1.15;
    return i;
  }
  a(SmallButton, e);
  return SmallButton;
}(require("./54.js").BasicButton);
exports.SmallButton = s;