Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.ColorMatrixFilter;
var a = createjs.ColorTransform;
var s = function () {
  function ColorMatrix(e = null) {
    if (e instanceof ColorMatrix) {
      this.matrix = e.matrix.concat();
    } else if (e instanceof Array) {
      this.matrix = e.concat();
    } else {
      this.reset();
    }
  }
  ColorMatrix.prototype.reset = function () {
    this.matrix = ColorMatrix.IDENTITY.concat();
  };
  ColorMatrix.prototype.clone = function () {
    return new ColorMatrix(this.matrix);
  };
  ColorMatrix.prototype.adjustSaturation = function (e) {
    var t = 1 - e;
    var n = t * ColorMatrix.r_lum;
    var i = t * ColorMatrix.g_lum;
    var a = t * ColorMatrix.b_lum;
    var s = [n + e, i, a, 0, 0, n, i + e, a, 0, 0, n, i, a + e, 0, 0, 0, 0, 0, 1, 0];
    this.concat(s);
  };
  ColorMatrix.prototype.adjustContrast = function (e, t, n) {
    t = t || e;
    n = n || e;
    var i = [e += 1, 0, 0, 0, (1 - e) * 128, 0, t += 1, 0, 0, (1 - t) * 128, 0, 0, n += 1, 0, (1 - n) * 128, 0, 0, 0, 1, 0];
    this.concat(i);
  };
  ColorMatrix.prototype.adjustBrightness = function (e, t, n) {
    var i = [1, 0, 0, 0, e, 0, 1, 0, 0, t = t || e, 0, 0, 1, 0, n = n || e, 0, 0, 0, 1, 0];
    this.concat(i);
  };
  ColorMatrix.prototype.adjustHue = function (e) {
    e *= Math.PI / 180;
    var t = Math.cos(e);
    var n = Math.sin(e);
    var i = 0.213;
    var a = 0.715;
    var s = 0.072;
    var r = [i + t * 0.787 + n * -i, a + t * -a + n * -a, s + t * -s + n * 0.928, 0, 0, i + t * -i + n * 0.143, a + t * (1 - a) + n * 0.14, s + t * -s + n * -0.283, 0, 0, i + t * -i + n * -0.787, a + t * -a + n * a, s + t * 0.928 + n * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
    this.concat(r);
  };
  ColorMatrix.prototype.colorize = function (e, t) {
    var n = (e >> 16 & 255) / 255;
    var i = (e >> 8 & 255) / 255;
    var a = (e & 255) / 255;
    var s = 1 - t;
    var r = [s + t * n * ColorMatrix.r_lum, t * n * ColorMatrix.g_lum, t * n * ColorMatrix.b_lum, 0, 0, t * i * ColorMatrix.r_lum, s + t * i * ColorMatrix.g_lum, t * i * ColorMatrix.b_lum, 0, 0, t * a * ColorMatrix.r_lum, t * a * ColorMatrix.g_lum, s + t * a * ColorMatrix.b_lum, 0, 0, 0, 0, 0, 1, 0];
    this.concat(r);
  };
  ColorMatrix.prototype.fill = function (e) {
    var t = [0, 0, 0, 0, e >> 16 & 255, 0, 0, 0, 0, e >> 8 & 255, 0, 0, 0, 0, e & 255, 0, 0, 0, 1, 0];
    this.concat(t);
  };
  ColorMatrix.prototype.setAlpha = function (e) {
    var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, e, 0];
    this.concat(t);
  };
  ColorMatrix.prototype.desaturate = function () {
    var e = [ColorMatrix.r_lum, ColorMatrix.g_lum, ColorMatrix.b_lum, 0, 0, ColorMatrix.r_lum, ColorMatrix.g_lum, ColorMatrix.b_lum, 0, 0, ColorMatrix.r_lum, ColorMatrix.g_lum, ColorMatrix.b_lum, 0, 0, 0, 0, 0, 1, 0];
    this.concat(e);
  };
  ColorMatrix.prototype.invert = function () {
    this.concat([1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0]);
  };
  ColorMatrix.prototype.threshold = function (e) {
    var t = [ColorMatrix.r_lum * 256, ColorMatrix.g_lum * 256, ColorMatrix.b_lum * 256, 0, e * -256, ColorMatrix.r_lum * 256, ColorMatrix.g_lum * 256, ColorMatrix.b_lum * 256, 0, e * -256, ColorMatrix.r_lum * 256, ColorMatrix.g_lum * 256, ColorMatrix.b_lum * 256, 0, e * -256, 0, 0, 0, 1, 0];
    this.concat(t);
  };
  ColorMatrix.prototype.randomize = function (e) {
    var t = 1 - e;
    var n = [t + e * (Math.random() - Math.random()), e * (Math.random() - Math.random()), e * (Math.random() - Math.random()), 0, e * 255 * (Math.random() - Math.random()), e * (Math.random() - Math.random()), t + e * (Math.random() - Math.random()), e * (Math.random() - Math.random()), 0, e * 255 * (Math.random() - Math.random()), e * (Math.random() - Math.random()), e * (Math.random() - Math.random()), t + e * (Math.random() - Math.random()), 0, e * 255 * (Math.random() - Math.random()), 0, 0, 0, 1, 0];
    this.concat(n);
  };
  ColorMatrix.prototype.setChannels = function (e, t, n, i) {
    var a = ((e & 1) == 1 ? 1 : 0) + ((e & 2) == 2 ? 1 : 0) + ((e & 4) == 4 ? 1 : 0) + ((e & 8) == 8 ? 1 : 0);
    if (a > 0) {
      a = 1 / a;
    }
    var s = ((t & 1) == 1 ? 1 : 0) + ((t & 2) == 2 ? 1 : 0) + ((t & 4) == 4 ? 1 : 0) + ((t & 8) == 8 ? 1 : 0);
    if (s > 0) {
      s = 1 / s;
    }
    var r = ((n & 1) == 1 ? 1 : 0) + ((n & 2) == 2 ? 1 : 0) + ((n & 4) == 4 ? 1 : 0) + ((n & 8) == 8 ? 1 : 0);
    if (r > 0) {
      r = 1 / r;
    }
    var o = ((i & 1) == 1 ? 1 : 0) + ((i & 2) == 2 ? 1 : 0) + ((i & 4) == 4 ? 1 : 0) + ((i & 8) == 8 ? 1 : 0);
    if (o > 0) {
      o = 1 / o;
    }
    var l = [(e & 1) == 1 ? a : 0, (e & 2) == 2 ? a : 0, (e & 4) == 4 ? a : 0, (e & 8) == 8 ? a : 0, 0, (t & 1) == 1 ? s : 0, (t & 2) == 2 ? s : 0, (t & 4) == 4 ? s : 0, (t & 8) == 8 ? s : 0, 0, (n & 1) == 1 ? r : 0, (n & 2) == 2 ? r : 0, (n & 4) == 4 ? r : 0, (n & 8) == 8 ? r : 0, 0, (i & 1) == 1 ? o : 0, (i & 2) == 2 ? o : 0, (i & 4) == 4 ? o : 0, (i & 8) == 8 ? o : 0, 0];
    this.concat(l);
  };
  ColorMatrix.prototype.blend = function (e, t) {
    var n = 1 - t;
    for (var i = 0; i < 20; i++) {
      this.matrix[i] = n * this.matrix[i] + t * e.matrix[i];
    }
  };
  ColorMatrix.prototype.concat = function (e) {
    var t = new Array();
    var n = 0;
    for (var i = 0; i < 4; i++) {
      for (var a = 0; a < 5; a++) {
        t[n + a] = e[n] * this.matrix[a] + e[n + 1] * this.matrix[a + 5] + e[n + 2] * this.matrix[a + 10] + e[n + 3] * this.matrix[a + 15] + (a == 4 ? e[n + 4] : 0);
      }
      n += 5;
    }
    this.matrix = t;
  };
  Object.defineProperty(ColorMatrix.prototype, "filter", {
    get: function () {
      return new i(this.matrix);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorMatrix.prototype, "transformMatrix", {
    get: function () {
      return new a(1, 1, 1, 1, this.matrix[4] / 255, this.matrix[9] / 255, this.matrix[14] / 255);
    },
    enumerable: true,
    configurable: true
  });
  ColorMatrix.r_lum = 0.3086;
  ColorMatrix.g_lum = 0.6094;
  ColorMatrix.b_lum = 0.082;
  ColorMatrix.IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  return ColorMatrix;
}();
exports.ColorMatrix = s;