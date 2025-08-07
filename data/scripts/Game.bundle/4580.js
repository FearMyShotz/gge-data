Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleBezier(e, t, i, n, o, a) {
    this._x0 = 0;
    this._y0 = 0;
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
    this._x0 = e;
    this._y0 = t;
    this._x1 = i;
    this._y1 = n;
    this._x2 = o;
    this._y2 = a;
  }
  CastleBezier.prototype.position = function (e, t) {
    var i = 1 - t;
    var n = i * i;
    var o = i * 2 * t;
    var a = t * t;
    e.x = n * this._x0 + o * this._x1 + a * this._x2;
    e.y = n * this._y0 + o * this._y1 + a * this._y2;
  };
  CastleBezier.prototype.slope = function (e, t) {
    var i = (1 - t) * 2;
    var n = t * 2;
    e.x = i * (this._x1 - this._x0) + n * (this._x2 - this._x1);
    e.y = i * (this._y1 - this._y0) + n * (this._y2 - this._y1);
  };
  CastleBezier.prototype.speed = function (e) {
    var t = (1 - e) * 2;
    var i = e * 2;
    var n = t * (this._x1 - this._x0) + i * (this._x2 - this._x1);
    var o = t * (this._y1 - this._y0) + i * (this._y2 - this._y1);
    return Math.sqrt(n * n + o * o);
  };
  CastleBezier.prototype.angle = function (e) {
    var t = (1 - e) * 2;
    var i = e * 2;
    var n = t * (this._x1 - this._x0) + i * (this._x2 - this._x1);
    var o = t * (this._y1 - this._y0) + i * (this._y2 - this._y1);
    return Math.atan2(o, n);
  };
  CastleBezier.prototype.draw = function (e) {
    e.moveTo(this._x0, this._y0);
    e.curveTo(this._x1, this._y1, this._x2, this._y2);
  };
  Object.defineProperty(CastleBezier.prototype, "x0", {
    get: function () {
      return this._x0;
    },
    set: function (e) {
      this._x0 = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBezier.prototype, "x2", {
    get: function () {
      return this._x2;
    },
    set: function (e) {
      this._x2 = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBezier;
}();
exports.CastleBezier = n;