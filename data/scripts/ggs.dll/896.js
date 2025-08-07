Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function SimpleRandom(e) {
    this.seed = 0;
    this.seed = e ^ 3740067437;
  }
  SimpleRandom.prototype.next = function () {
    var e = this.seed;
    e = this.toInt32(e, 16807) % 2147483647;
    e = (this.toInt32(e, 14903917) + 11) % 2147483647;
    this.seed = e;
    return this.seed;
  };
  SimpleRandom.prototype.toInt32 = function (e, t) {
    var n = e * t;
    var i = n >> 0;
    var a = e % 255 * t % 255 - n % 255;
    if (Math.abs(a) > 3) {
      a = Math.sign(a) * (Math.abs(a) - 255);
    }
    return i += a;
  };
  SimpleRandom.prototype.nextInt = function (e) {
    return this.nextInt2() % e;
  };
  SimpleRandom.prototype.nextInt2 = function () {
    return Math.abs(this.next());
  };
  return SimpleRandom;
}();
exports.SimpleRandom = i;