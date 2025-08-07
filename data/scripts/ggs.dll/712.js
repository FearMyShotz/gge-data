var i = require("./273.js");
var a = require("./713.js");
var s = require("./274.js").Buffer;
var r = new Array(16);
function MD5() {
  a.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
}
function rotl(e, t) {
  return e << t | e >>> 32 - t;
}
function fnF(e, t, n, i, a, s, r) {
  return rotl(e + (t & n | ~t & i) + a + s | 0, r) + t | 0;
}
function fnG(e, t, n, i, a, s, r) {
  return rotl(e + (t & i | n & ~i) + a + s | 0, r) + t | 0;
}
function fnH(e, t, n, i, a, s, r) {
  return rotl(e + (t ^ n ^ i) + a + s | 0, r) + t | 0;
}
function fnI(e, t, n, i, a, s, r) {
  return rotl(e + (n ^ (t | ~i)) + a + s | 0, r) + t | 0;
}
i(MD5, a);
MD5.prototype._update = function () {
  var e = r;
  for (var t = 0; t < 16; ++t) {
    e[t] = this._block.readInt32LE(t * 4);
  }
  var n = this._a;
  var i = this._b;
  var a = this._c;
  var s = this._d;
  i = fnI(i = fnI(i = fnI(i = fnI(i = fnH(i = fnH(i = fnH(i = fnH(i = fnG(i = fnG(i = fnG(i = fnG(i = fnF(i = fnF(i = fnF(i = fnF(i, a = fnF(a, s = fnF(s, n = fnF(n, i, a, s, e[0], 3614090360, 7), i, a, e[1], 3905402710, 12), n, i, e[2], 606105819, 17), s, n, e[3], 3250441966, 22), a = fnF(a, s = fnF(s, n = fnF(n, i, a, s, e[4], 4118548399, 7), i, a, e[5], 1200080426, 12), n, i, e[6], 2821735955, 17), s, n, e[7], 4249261313, 22), a = fnF(a, s = fnF(s, n = fnF(n, i, a, s, e[8], 1770035416, 7), i, a, e[9], 2336552879, 12), n, i, e[10], 4294925233, 17), s, n, e[11], 2304563134, 22), a = fnF(a, s = fnF(s, n = fnF(n, i, a, s, e[12], 1804603682, 7), i, a, e[13], 4254626195, 12), n, i, e[14], 2792965006, 17), s, n, e[15], 1236535329, 22), a = fnG(a, s = fnG(s, n = fnG(n, i, a, s, e[1], 4129170786, 5), i, a, e[6], 3225465664, 9), n, i, e[11], 643717713, 14), s, n, e[0], 3921069994, 20), a = fnG(a, s = fnG(s, n = fnG(n, i, a, s, e[5], 3593408605, 5), i, a, e[10], 38016083, 9), n, i, e[15], 3634488961, 14), s, n, e[4], 3889429448, 20), a = fnG(a, s = fnG(s, n = fnG(n, i, a, s, e[9], 568446438, 5), i, a, e[14], 3275163606, 9), n, i, e[3], 4107603335, 14), s, n, e[8], 1163531501, 20), a = fnG(a, s = fnG(s, n = fnG(n, i, a, s, e[13], 2850285829, 5), i, a, e[2], 4243563512, 9), n, i, e[7], 1735328473, 14), s, n, e[12], 2368359562, 20), a = fnH(a, s = fnH(s, n = fnH(n, i, a, s, e[5], 4294588738, 4), i, a, e[8], 2272392833, 11), n, i, e[11], 1839030562, 16), s, n, e[14], 4259657740, 23), a = fnH(a, s = fnH(s, n = fnH(n, i, a, s, e[1], 2763975236, 4), i, a, e[4], 1272893353, 11), n, i, e[7], 4139469664, 16), s, n, e[10], 3200236656, 23), a = fnH(a, s = fnH(s, n = fnH(n, i, a, s, e[13], 681279174, 4), i, a, e[0], 3936430074, 11), n, i, e[3], 3572445317, 16), s, n, e[6], 76029189, 23), a = fnH(a, s = fnH(s, n = fnH(n, i, a, s, e[9], 3654602809, 4), i, a, e[12], 3873151461, 11), n, i, e[15], 530742520, 16), s, n, e[2], 3299628645, 23), a = fnI(a, s = fnI(s, n = fnI(n, i, a, s, e[0], 4096336452, 6), i, a, e[7], 1126891415, 10), n, i, e[14], 2878612391, 15), s, n, e[5], 4237533241, 21), a = fnI(a, s = fnI(s, n = fnI(n, i, a, s, e[12], 1700485571, 6), i, a, e[3], 2399980690, 10), n, i, e[10], 4293915773, 15), s, n, e[1], 2240044497, 21), a = fnI(a, s = fnI(s, n = fnI(n, i, a, s, e[8], 1873313359, 6), i, a, e[15], 4264355552, 10), n, i, e[6], 2734768916, 15), s, n, e[13], 1309151649, 21), a = fnI(a, s = fnI(s, n = fnI(n, i, a, s, e[4], 4149444226, 6), i, a, e[11], 3174756917, 10), n, i, e[2], 718787259, 15), s, n, e[9], 3951481745, 21);
  this._a = this._a + n | 0;
  this._b = this._b + i | 0;
  this._c = this._c + a | 0;
  this._d = this._d + s | 0;
};
MD5.prototype._digest = function () {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  var e = s.allocUnsafe(16);
  e.writeInt32LE(this._a, 0);
  e.writeInt32LE(this._b, 4);
  e.writeInt32LE(this._c, 8);
  e.writeInt32LE(this._d, 12);
  return e;
};
module.exports = MD5;