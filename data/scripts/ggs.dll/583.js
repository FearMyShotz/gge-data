Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = function (e) {
  function Matrix() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(Matrix, e);
  Matrix.prototype.createGradientBox = function (e, t, n = 0, i = 0, a = 0) {
    this.createBox(e / 1638.4, t / 1638.4, n, i + e / 2, a + t / 2);
  };
  Matrix.prototype.createBox = function (e, t, n = 0, i = 0, a = 0) {
    if (n !== 0) {
      var s = Math.cos(n);
      var r = Math.sin(n);
      this.a = s * e;
      this.b = r * t;
      this.c = -r * e;
      this.d = s * t;
    } else {
      this.a = e;
      this.b = 0;
      this.c = 0;
      this.d = t;
    }
    this.tx = i;
    this.ty = a;
  };
  Matrix.DEG_TO_RAD = Math.PI / 180;
  return Matrix;
}(createjs.Matrix2D);
exports.Matrix = a;