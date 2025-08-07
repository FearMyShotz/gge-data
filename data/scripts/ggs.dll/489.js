Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./35.js");
var a = createjs.Point;
var s = function () {
  function Vector2D(e = 0, t = 0) {
    this.x = e;
    this.y = t;
    this._length = 0;
  }
  Object.defineProperty(Vector2D.prototype, "length", {
    get: function () {
      if (this._oldX != this.x || this._oldY != this.y) {
        this._oldX = this.x;
        this._oldY = this.y;
        this._length = Math.sqrt(this.x * this.x + this.y * this.y);
      }
      return this._length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Vector2D.prototype, "lengthSq", {
    get: function () {
      return this.x * this.x + this.y * this.y;
    },
    enumerable: true,
    configurable: true
  });
  Vector2D.prototype.isZero = function () {
    return this.x == 0 || this.y == 0;
  };
  Vector2D.is2ndInFOVof1st = function (e, t, n, i) {
    var a = i.copy();
    a.subtract(e);
    a.normalize();
    return t.dotOf(a) >= Math.cos(n / 2);
  };
  Vector2D.pointToVector = function (e) {
    return new Vector2D(e.x, e.y);
  };
  Vector2D.rotToHeading = function (e) {
    return new Vector2D(Math.cos(e), Math.sin(e));
  };
  Vector2D.prototype.toString = function () {
    return "( " + this.x + ", " + this.y + " )";
  };
  Vector2D.prototype.toPoint = function () {
    return new a(this.x, this.y);
  };
  Vector2D.prototype.toRotation = function () {
    var e = Math.atan(this.y / this.x);
    if (this.y < 0 && this.x > 0) {
      return e;
    } else if (this.y < 0 && this.x < 0 || this.y > 0 && this.x < 0) {
      return e + 3.141592653589793;
    } else {
      return e + 6.283185307179586;
    }
  };
  Vector2D.prototype.Set = function (e, t) {
    this.x = e;
    this.y = t;
  };
  Vector2D.prototype.copy = function () {
    var e = new Vector2D(this.x, this.y);
    e._length = this._length;
    e._oldX = this.x;
    e._oldY = this.y;
    return e;
  };
  Vector2D.prototype.normalize = function () {
    if (this.length != 0) {
      this.x /= this._length;
      this.y /= this._length;
    }
  };
  Vector2D.prototype.reflect = function (e) {
    this.v1 = e.getReverse();
    this.v1.multiply(this.dotOf(e) * 2);
    this.addTo(this.v1);
  };
  Vector2D.prototype.addTo = function (e) {
    this.x += e.x;
    this.y += e.y;
  };
  Vector2D.prototype.subtract = function (e) {
    this.x -= e.x;
    this.y -= e.y;
  };
  Vector2D.prototype.multiply = function (e) {
    this.x *= e;
    this.y *= e;
  };
  Vector2D.prototype.divide = function (e) {
    if (e == 0) {
      i.warn("Illegal Divide by Zero!");
    } else {
      this.x /= e;
      this.y /= e;
    }
  };
  Vector2D.prototype.truncate = function (e) {
    if (this.lengthSq > e * e) {
      this.normalize();
      this.multiply(e);
    }
  };
  Vector2D.prototype.wrapAround = function (e, t) {
    if (this.x > t.x) {
      this.x = e.x + (this.x - t.x);
    } else if (this.x < e.x) {
      this.x = t.x + this.x;
    }
    if (this.y < e.y) {
      this.y = t.y + this.y;
    } else if (this.y > t.y) {
      this.y = e.y + (this.y - t.y);
    }
  };
  Vector2D.prototype.addedTo = function (e) {
    return new Vector2D(this.x + e.x, this.y + e.y);
  };
  Vector2D.prototype.subtractedBy = function (e) {
    return new Vector2D(this.x - e.x, this.y - e.y);
  };
  Vector2D.prototype.multipliedBy = function (e) {
    return new Vector2D(this.x * e, this.y * e);
  };
  Vector2D.prototype.dividedBy = function (e) {
    if (e == 0) {
      i.warn("Illegal Divide by Zero!");
      return new Vector2D();
    } else {
      return new Vector2D(this.x / e, this.y / e);
    }
  };
  Vector2D.prototype.getNormalized = function () {
    if (this.length == 0) {
      return new Vector2D();
    } else {
      return new Vector2D(this.x / this._length, this.y / this._length);
    }
  };
  Vector2D.prototype.getReverse = function () {
    return new Vector2D(-this.x, -this.y);
  };
  Vector2D.prototype.sign = function (e) {
    if (this.y * e.x > this.x * e.y) {
      return -1;
    } else {
      return 1;
    }
  };
  Vector2D.prototype.isParallelTo = function (e) {
    this.v1 = this.copy();
    this.v1.normalize();
    this.v2 = e.copy();
    this.v2.normalize();
    return this.v1.x == this.v2.x && this.v1.y == this.v2.y || this.v1.x == -this.v2.x && this.v1.y == -this.v2.y;
  };
  Vector2D.prototype.getPerp = function () {
    return new Vector2D(-this.y, this.x);
  };
  Vector2D.prototype.dotOf = function (e) {
    return this.x * e.x + this.y * e.y;
  };
  Vector2D.prototype.crossOf = function (e) {
    return this.x * e.y - this.y * e.x;
  };
  Vector2D.prototype.angleTo = function (e) {
    return Math.acos(this.dotOf(e) / (this.length * e.length));
  };
  Vector2D.prototype.perpDotOf = function (e) {
    return this.getPerp().dotOf(e);
  };
  Vector2D.prototype.projectionOn = function (e) {
    this.v1 = e.copy();
    this.v1.multiply(this.dotOf(e) / e.dotOf(e));
    return this.v1;
  };
  Vector2D.prototype.distanceTo = function (e) {
    var t = e.x - this.x;
    var n = e.y - this.y;
    return Math.sqrt(n * n + t * t);
  };
  Vector2D.prototype.distanceSqTo = function (e) {
    var t = e.y - this.y;
    var n = e.x - this.x;
    return n * n + t * t;
  };
  Vector2D.prototype.isInsideRegion = function (e, t) {
    return !(this.x < e.x) && !(this.x > e.x + t.x) && !(this.y < e.y) && !(this.y > e.y + t.y);
  };
  return Vector2D;
}();
exports.Vector2D = s;