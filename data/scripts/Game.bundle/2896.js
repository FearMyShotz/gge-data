Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./12.js");
var l = function (e) {
  function ToolsmithBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ToolsmithBuildingVO, e);
  ToolsmithBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_CoalStorage, "coalStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(r.CollectableEnum.COAL)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_OilStorage, "oilStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(r.CollectableEnum.OIL)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GlassStorage, "glassStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(r.CollectableEnum.GLASS)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_IronStorage, "ironStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(r.CollectableEnum.IRON)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return ToolsmithBuildingVO;
}(require("./783.js").ACraftingBuildingVO);
exports.ToolsmithBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");