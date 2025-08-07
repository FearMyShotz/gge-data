Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./209.js");
var r = createjs.Point;
var l = function (e) {
  function FogSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Fog";
    t._width = 0;
    t._height = 0;
    t._posOrigin = a.IsoGridOriginEnum.TOP_CORNER;
    t._posOffset = new r(-45, -45);
    return t;
  }
  n.__extends(FogSurroundingsVO, e);
  Object.defineProperty(FogSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FogSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FogSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FogSurroundingsVO;
}(s.ASurroundingBuildingVO);
exports.FogSurroundingsVO = l;
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");