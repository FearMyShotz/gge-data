Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./209.js");
var r = createjs.Point;
var l = function (e) {
  function SeaShieldSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "SeaShield";
    t._height = 4;
    t._width = 4;
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new r(5, -4);
    return t;
  }
  n.__extends(SeaShieldSurroundingsVO, e);
  Object.defineProperty(SeaShieldSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SeaShieldSurroundingsVO;
}(s.ASurroundingBuildingVO);
exports.SeaShieldSurroundingsVO = l;
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");