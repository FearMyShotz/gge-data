Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = function (e) {
  function GlassboostBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GlassboostBuildingVO, e);
  GlassboostBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Boost_Glass, "glasbooster", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.resourceBoosts.getAmountOrDefaultByType(c.CollectableEnum.GLASS)]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return GlassboostBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.GlassboostBuildingVO = l;
var c = require("./12.js");
a.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");