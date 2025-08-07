Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./209.js");
var r = createjs.Point;
var l = function (e) {
  function CliffsSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Cliffs";
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new r(13, 9);
    return t;
  }
  n.__extends(CliffsSurroundingsVO, e);
  Object.defineProperty(CliffsSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CliffsSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CliffsSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CliffsSurroundingsVO;
}(s.ASurroundingBuildingVO);
exports.CliffsSurroundingsVO = l;
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");