Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./209.js");
var r = function (e) {
  function PathSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Path";
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset.x = 11;
    t._posOffset.y = -9;
    return t;
  }
  n.__extends(PathSurroundingsVO, e);
  Object.defineProperty(PathSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PathSurroundingsVO;
}(s.ASurroundingBuildingVO);
exports.PathSurroundingsVO = r;
o.classImplementsInterfaces(r, "IRelativeGridBuildingVO");