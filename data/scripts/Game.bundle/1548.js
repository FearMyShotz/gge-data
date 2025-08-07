Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = function (e) {
  function OilboostBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OilboostBuildingVO, e);
  OilboostBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Boost_Oliveoil, "oilbooster", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this._resourceBoosts.getAmountOrDefaultByType(c.CollectableEnum.OIL)]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return OilboostBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.OilboostBuildingVO = l;
var c = require("./12.js");
a.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");