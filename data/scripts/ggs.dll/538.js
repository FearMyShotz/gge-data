Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./539.js");
exports.convertHexToRgba = i.convertHexToRgba;
var a = require("./2.js");
var s = require("./16.js");
var r = a.getLogger(s.CREATEJS_UTILITIES_LOGGER);
createjs.Graphics.prototype.p = createjs.Graphics.prototype.decodePath = function (e, t, n) {
  t ||= 0;
  n ||= 0;
  var i = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
  var a = [2, 2, 4, 6, 0];
  for (var s = 0, r = e.length, o = [], l = 0, u = 0, c = createjs.Graphics.BASE_64; s < r;) {
    var _ = e.charAt(s);
    var d = c[_];
    var m = d >> 3;
    var h = i[m];
    if (!h || d & 3) {
      throw "bad path data (@" + s + "): " + _;
    }
    var p = a[m];
    if (!m) {
      l = u = 0;
    }
    o.length = 0;
    s++;
    var g = 2 + (d >> 2 & 1);
    for (var E = 0; E < p; E++) {
      var C = c[e.charAt(s)];
      var f = C >> 5 ? -1 : 1;
      C = (C & 31) << 6 | c[e.charAt(s + 1)];
      if (g == 3) {
        C = C << 6 | c[e.charAt(s + 2)];
      }
      C = f * C / 10;
      if (E % 2) {
        u = C += u;
        o[E] = u + n;
      } else {
        l = C += l;
        o[E] = l + t;
      }
      s += g;
    }
    h.apply(this, o);
  }
  return this;
};
createjs.Graphics.prototype.lineStyle = function (e = NaN, t = 0, n) {
  var a = i.convertHexToRgba(t, n);
  this.setStrokeStyle(e);
  this.beginStroke(a);
  return this;
};
var o = createjs.Graphics.prototype.beginFill;
createjs.Graphics.prototype.beginFill = function (e, t) {
  if (e != null) {
    e = i.convertHexToRgba(e, t);
  }
  o.apply(this, [e]);
  return this;
};
createjs.Graphics.prototype.beginGradientFill = function (e, t, n, a, s = null, r = "pad", o = "rgb", l = 0) {
  for (var u = 0; u < a.length; u++) {
    if (a[u] > 1) {
      a[u] = a[u] / 255;
    }
    if (n[u] > 1) {
      n[u] = n[u] / 255;
    }
  }
  var c = t.map(function (e) {
    return i.convertHexToRgba(e);
  });
  if (s) {
    var _ = s != null ? s.clone() : new createjs.Matrix2D();
    if (e === "radial") {
      var d = s.transformPoint(1638.4, 0);
      this.beginRadialGradientFill(c, a, _.tx, _.ty, 0, _.tx, _.ty, (d.x - _.tx) / 2);
    } else {
      _.tx -= s.a * 1638.4 / 2;
      _.ty -= s.d * 1638.4 / 2;
      var m = _.transformPoint(0, 0);
      var h = _.transformPoint(1638.4, 0);
      this.beginLinearGradientFill(c, a, m.x, m.y, h.x, h.y);
    }
  }
};
var l = createjs.Graphics.prototype.beginBitmapFill;
createjs.Graphics.prototype.beginBitmapFill = function (e, t, n) {
  if (e instanceof createjs.Bitmap) {
    e = e.bitmapData.canvas;
  }
  if (e instanceof createjs.BitmapData) {
    e = e.canvas;
  }
  return l.apply(this, [e, t, n]);
};
createjs.Graphics.prototype.lineBitmapStyle = function (e, t = null, n = true, i = false) {
  r.warn("Graphics.lineBitmapStyle - is mocked method");
};
createjs.Graphics.prototype.copyFrom = function (e) {
  r.warn("Please use graphics = Object.create(sourceGraphics); instead of copyFrom()");
};
var u = createjs.Graphics.prototype.drawRect;
createjs.Graphics.prototype.r = createjs.Graphics.prototype.drawRect = function (e, t, n, i) {
  this._updateBounds(e, t, n, i);
  return u.apply(this, [e, t, n, i]);
};
var c = createjs.Graphics.prototype.drawRoundRect;
createjs.Graphics.prototype.rr = createjs.Graphics.prototype.drawRoundRect = function (e, t, n, i, a) {
  this._updateBounds(e, t, n, i);
  return c.apply(this, [e, t, n, i, a]);
};
var _ = createjs.Graphics.prototype.lineTo;
createjs.Graphics.prototype.lt = createjs.Graphics.prototype.lineTo = function (e, t) {
  this.bounds.left = Math.min(this.bounds.left, e);
  this.bounds.right = Math.max(this.bounds.right, e);
  this.bounds.top = Math.min(this.bounds.top, t, t);
  this.bounds.bottom = Math.max(this.bounds.bottom, t);
  return _.apply(this, [e, t]);
};
createjs.Graphics.prototype._updateBounds = function (e, t, n, i) {
  if (this._instructions.length || this._activeInstructions.length) {
    this.bounds.x = Math.min(this.bounds.x, e);
    this.bounds.width = Math.max(this.bounds.width, n);
    this.bounds.y = Math.min(this.bounds.y, t);
    this.bounds.height = Math.max(this.bounds.height, i);
  } else {
    this.bounds.x = e;
    this.bounds.width = n;
    this.bounds.y = t;
    this.bounds.height = i;
  }
};
Object.defineProperty(createjs.Graphics.prototype, "bounds", {
  get: function () {
    this._bounds ||= new createjs.Rectangle();
    return this._bounds;
  },
  set: function (e) {
    this._bounds = e;
  },
  enumerable: true,
  configurable: true
});