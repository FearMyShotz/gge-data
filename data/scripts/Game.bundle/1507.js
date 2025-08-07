Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./209.js");
var r = createjs.Point;
var l = function (e) {
  function HarborSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Harbor";
    t._width = 6;
    t._height = 6;
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new r(33, 7);
    return t;
  }
  n.__extends(HarborSurroundingsVO, e);
  Object.defineProperty(HarborSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HarborSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HarborSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return HarborSurroundingsVO;
}(s.ASurroundingBuildingVO);
exports.HarborSurroundingsVO = l;
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");