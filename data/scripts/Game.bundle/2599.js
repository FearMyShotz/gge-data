Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = createjs.BitmapData;
var s = function (e) {
  function DashedLine(t, i = 0, n = 0, o = 1, a = 1) {
    var s = this;
    s._length = 0;
    s._weight = 0;
    s._color = 0;
    s._dashLength = 0;
    s._gapLength = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this)._length = t;
    s._weight = i;
    s._color = n;
    s._dashLength = o;
    s._gapLength = a;
    s.createDashStyle();
    return s;
  }
  n.__extends(DashedLine, e);
  DashedLine.prototype.createDashStyle = function () {
    this._bitmapData = new a(this._dashLength + this._gapLength, 1, true, 0);
    this._bitmapData.lock();
    var e = 0;
    for (e = 0; e < this._dashLength; e++) {
      this._bitmapData.setPixel32(e, 0, this._color | 4278190080);
    }
    this.drawLine();
  };
  DashedLine.prototype.drawLine = function () {
    this.graphics.clear();
    this.graphics.lineStyle(this._weight, 0, 1, true, "normal", "none");
    this.graphics.lineBitmapStyle(this._bitmapData, null, true, true);
    this.graphics.moveTo(0, 0);
    this.graphics.lineTo(this._length, 0);
  };
  Object.defineProperty(DashedLine.prototype, "length", {
    get: function () {
      return this._length;
    },
    set: function (e) {
      this._length = e;
      this.drawLine();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "weight", {
    get: function () {
      return this._weight;
    },
    set: function (e) {
      this._weight = e;
      this.drawLine();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "color", {
    get: function () {
      return this._color;
    },
    set: function (e) {
      this._color = e;
      this.createDashStyle();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "dashLength", {
    get: function () {
      return this._dashLength;
    },
    set: function (e) {
      this._dashLength = e;
      this.createDashStyle();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "gapLength", {
    get: function () {
      return this._gapLength;
    },
    set: function (e) {
      this._gapLength = e;
      this.createDashStyle();
    },
    enumerable: true,
    configurable: true
  });
  return DashedLine;
}(createjs.Shape);
exports.DashedLine = s;
o.classImplementsInterfaces(s, "Shape");