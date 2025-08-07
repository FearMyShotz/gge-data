Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./1499.js");
var r = createjs.Point;
var l = function (e) {
  function AExpandingResourceFieldVO() {
    var t = this;
    t._fieldAmount = 0;
    t._totalWidth = 0;
    t._totalHeight = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AExpandingResourceFieldVO, e);
  AExpandingResourceFieldVO.prototype.updateData = function () {
    this._fieldAmount = this.getFieldAmount();
    this.updateDimension();
    e.prototype.updateData.call(this);
  };
  AExpandingResourceFieldVO.prototype.updateDimension = function () {
    this._totalWidth = a.int(this._width);
    this._totalHeight = a.int(this._height);
  };
  AExpandingResourceFieldVO.prototype.updateBounds = function () {
    this._x2 = this._x + this._totalWidth - 1;
    this._y2 = this._y + this._totalHeight - 1;
  };
  AExpandingResourceFieldVO.prototype.getFieldAmount = function () {
    return 0;
  };
  AExpandingResourceFieldVO.prototype.getLastPartStartOffset = function () {
    return new r();
  };
  AExpandingResourceFieldVO.prototype.getWorkPointsByIndex = function (e) {
    return null;
  };
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "fieldAmount", {
    get: function () {
      return this._fieldAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "totalWidth", {
    get: function () {
      return this._totalWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "totalHeight", {
    get: function () {
      return this._totalHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "rotatedWidth", {
    get: function () {
      return this._totalWidth;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AResourceFieldVO.prototype, "rotatedWidth").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "rotatedHeight", {
    get: function () {
      return this._totalHeight;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AResourceFieldVO.prototype, "rotatedHeight").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AExpandingResourceFieldVO;
}(s.AResourceFieldVO);
exports.AExpandingResourceFieldVO = l;
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");