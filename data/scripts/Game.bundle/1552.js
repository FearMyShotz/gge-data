Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./65.js");
var r = createjs.Point;
var l = function (e) {
  function AFixedPositionBuildingVO() {
    var t = this;
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new r();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AFixedPositionBuildingVO, e);
  AFixedPositionBuildingVO.prototype.updateData = function () {
    this.updatePosition();
    e.prototype.updateData.call(this);
  };
  AFixedPositionBuildingVO.prototype.updatePosition = function () {
    var e = this.isoData.grid.origins.getOriginPos(this.posOrigin);
    if (e) {
      this._x = e.x + this.posOffset.x;
      this._y = e.y + this.posOffset.y;
    }
  };
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AIsoObjectVO.prototype, "isMovable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "canBeRotated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AEffectBuildingVO.prototype, "canBeRotated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AEffectBuildingVO.prototype, "isBuildingGroundViewAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "posOrigin", {
    get: function () {
      return this._posOrigin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    enumerable: true,
    configurable: true
  });
  return AFixedPositionBuildingVO;
}(s.AEffectBuildingVO);
exports.AFixedPositionBuildingVO = l;
var c = require("./309.js");
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO", "IRelativeGridBuildingVO");