Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./105.js");
var l = require("./209.js");
var c = createjs.Point;
var u = function (e) {
  function ShipSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Ship";
    t._type = "Level" + s.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel;
    t._width = 6;
    t._height = 6;
    t._posOrigin = r.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new c(32, -1);
    return t;
  }
  n.__extends(ShipSurroundingsVO, e);
  ShipSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    if (this.isClickAvailable) {
      return a.Localize.text("clickToUpgrade");
    } else {
      return "";
    }
  };
  Object.defineProperty(ShipSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      var e = s.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      return e.portLevel < e.maxPortLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ShipSurroundingsVO;
}(l.ASurroundingBuildingVO);
exports.ShipSurroundingsVO = u;
o.classImplementsInterfaces(u, "IRelativeGridBuildingVO");