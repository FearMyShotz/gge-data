Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./209.js");
var s = function (e) {
  function ABeachSurroundingsVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ABeachSurroundingsVO, e);
  Object.defineProperty(ABeachSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABeachSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABeachSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ABeachSurroundingsVO;
}(a.ASurroundingBuildingVO);
exports.ABeachSurroundingsVO = s;
o.classImplementsInterfaces(s, "IRelativeGridBuildingVO");