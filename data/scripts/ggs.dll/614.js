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
  function Icon_PlaqueCR() {
    return e.call(this) || this;
  }
  a(Icon_PlaqueCR, e);
  Icon_PlaqueCR.prototype.getOriginWidth = function () {
    return 26.05;
  };
  Icon_PlaqueCR.prototype.getOriginHeight = function () {
    return 32;
  };
  return Icon_PlaqueCR;
}(require("./210.js").BaseContentReplacer);
exports.Icon_PlaqueCR = s;