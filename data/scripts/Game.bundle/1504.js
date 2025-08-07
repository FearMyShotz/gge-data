Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./105.js");
var r = function (e) {
  function EilandSlumSurroundingVO(t, i) {
    var n = e.call(this, t, i) || this;
    n._name = "EilandSlum";
    n._posOrigin = s.IsoGridOriginEnum.BOTTOM_CORNER;
    return n;
  }
  n.__extends(EilandSlumSurroundingVO, e);
  EilandSlumSurroundingVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text("dialog_eiland_aquamarinShop_tooltip");
  };
  EilandSlumSurroundingVO.prototype.getInfoTooltipLine2 = function () {
    return a.Localize.text("clickToOpen");
  };
  EilandSlumSurroundingVO.prototype.getInfoTooltipLine3 = function () {
    return "";
  };
  return EilandSlumSurroundingVO;
}(require("./1008.js").SlumSurroundingsVO);
exports.EilandSlumSurroundingVO = r;
o.classImplementsInterfaces(r, "IRelativeGridBuildingVO");