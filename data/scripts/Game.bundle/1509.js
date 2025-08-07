Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = function (e) {
  function OutpostSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Outpost";
    t._height = 6;
    t._width = 9;
    t._posOrigin = a.IsoGridOriginEnum.BOTTOM_CORNER;
    t._minLevel = 7;
    t._maxLevel = 13;
    return t;
  }
  n.__extends(OutpostSurroundingsVO, e);
  OutpostSurroundingsVO.prototype.updatePosition = function () {
    var t = this.isoData.objects.surroundings.getFoodField();
    if (t) {
      this._posOffset = t.getLastPartStartOffset();
      this._posOffset.x = 21;
      this._posOffset.y = -9;
    }
    e.prototype.updatePosition.call(this);
  };
  return OutpostSurroundingsVO;
}(require("./209.js").ASurroundingBuildingVO);
exports.OutpostSurroundingsVO = s;
o.classImplementsInterfaces(s, "IRelativeGridBuildingVO");