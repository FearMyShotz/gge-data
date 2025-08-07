Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./1501.js");
var r = createjs.Point;
var l = function (e) {
  function BeachBottomSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "BeachBottom";
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new r(15, 15);
    return t;
  }
  n.__extends(BeachBottomSurroundingsVO, e);
  return BeachBottomSurroundingsVO;
}(s.ABeachSurroundingsVO);
exports.BeachBottomSurroundingsVO = l;
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");