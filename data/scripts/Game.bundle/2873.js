Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./4.js");
var c = function (e) {
  function LegendTempleBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LegendTempleBuildingVO, e);
  LegendTempleBuildingVO.prototype.getInfoTooltipLine3 = function () {
    return a.Localize.text("legendtemple_pointsLeft", [l.CastleModel.legendSkillData.availablePoints]);
  };
  LegendTempleBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return LegendTempleBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.LegendTempleBuildingVO = c;
o.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");