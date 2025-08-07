Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./128.js");
var a = function () {
  function IntRectangle(e = 0, t = 0, n = 0, i = 0) {
    this.x = e;
    this.y = t;
    this.width = n;
    this.height = i;
  }
  IntRectangle.fromRectangle = function (e) {
    return new IntRectangle(e.x, e.y, e.width, e.height);
  };
  Object.defineProperty(IntRectangle.prototype, "bottom", {
    get: function () {
      return this.y + this.height;
    },
    set: function (e) {
      this.height += e - this.bottom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "bottomRight", {
    get: function () {
      return new i.IntPoint(this.x + this.width, this.y + this.height);
    },
    set: function (e) {
      this.right = e.x;
      this.bottom = e.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "left", {
    get: function () {
      return this.x;
    },
    set: function (e) {
      this.width -= e - this.x;
      this.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "right", {
    get: function () {
      return this.x + this.width;
    },
    set: function (e) {
      this.width += e - this.right;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "size", {
    get: function () {
      return new i.IntPoint(this.width, this.height);
    },
    set: function (e) {
      this.width = e.x;
      this.height = e.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "top", {
    get: function () {
      return this.y;
    },
    set: function (e) {
      this.height -= e - this.y;
      this.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "topLeft", {
    get: function () {
      return new i.IntPoint(this.x, this.y);
    },
    set: function (e) {
      this.left = e.x;
      this.top = e.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "center", {
    get: function () {
      return new i.IntPoint(this.left + (this.width >> 1), this.top + (this.height >> 1));
    },
    enumerable: true,
    configurable: true
  });
  IntRectangle.prototype.clone = function () {
    return new IntRectangle(this.x, this.y, this.width, this.height);
  };
  IntRectangle.prototype.contains = function (e, t) {
    return e >= this.left && e <= this.right && t >= this.top && t <= this.bottom;
  };
  IntRectangle.prototype.containsPoint = function (e) {
    return this.contains(e.x, e.y);
  };
  IntRectangle.prototype.containsRect = function (e) {
    return e.left >= this.left && e.right <= this.right && e.top >= this.top && e.bottom <= this.bottom;
  };
  IntRectangle.prototype.equals = function (e) {
    return e.x == this.x && e.y == this.y && e.width == this.width && e.height == this.height;
  };
  IntRectangle.prototype.intersection = function (e) {
    var t = new IntRectangle();
    t.left = Math.max(this.left, e.left);
    t.right = Math.min(this.right, e.right);
    t.top = Math.max(this.top, e.top);
    t.bottom = Math.min(this.bottom, e.bottom);
    if (!(t.left < t.right) || !(t.top < t.bottom)) {
      t.setEmpty();
    }
    return t;
  };
  IntRectangle.prototype.intersects = function (e) {
    return !this.intersection(e).isEmpty();
  };
  IntRectangle.prototype.isEmpty = function () {
    return this.width == 0 || this.height == 0;
  };
  IntRectangle.prototype.offset = function (e, t) {
    this.x += e;
    this.y += t;
  };
  IntRectangle.prototype.offsetPoint = function (e) {
    this.offset(e.x, e.y);
  };
  IntRectangle.prototype.setEmpty = function () {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  IntRectangle.prototype.toString = function () {
    return "IntRect (x:" + this.x + ", y:" + this.y + ", width:" + this.width + ", height:" + this.height + ")";
  };
  IntRectangle.prototype.union = function (e) {
    var t = new IntRectangle();
    t.left = Math.min(this.left, e.left);
    t.right = Math.max(this.right, e.right);
    t.top = Math.min(this.top, e.top);
    t.bottom = Math.max(this.bottom, e.bottom);
    return t;
  };
  return IntRectangle;
}();
exports.IntRectangle = a;