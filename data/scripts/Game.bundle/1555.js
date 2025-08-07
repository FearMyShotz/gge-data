Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./105.js");
var r = function (e) {
  function ATreasurechestSurroundingsVO() {
    var t = e.call(this) || this;
    t._type = "Treasurechest";
    t._posOrigin = s.IsoGridOriginEnum.TOP_CORNER;
    return t;
  }
  n.__extends(ATreasurechestSurroundingsVO, e);
  ATreasurechestSurroundingsVO.prototype.getVisualClassName = function () {
    return this._type + "_" + this._group;
  };
  ATreasurechestSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text("eventBuilding_treasure");
  };
  ATreasurechestSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    return a.Localize.text("clickToSalvage");
  };
  Object.defineProperty(ATreasurechestSurroundingsVO.prototype, "offerVO", {
    get: function () {
      return this._offerVO;
    },
    set: function (e) {
      this._offerVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return ATreasurechestSurroundingsVO;
}(require("./209.js").ASurroundingBuildingVO);
exports.ATreasurechestSurroundingsVO = r;
o.classImplementsInterfaces(r, "IRelativeGridBuildingVO");