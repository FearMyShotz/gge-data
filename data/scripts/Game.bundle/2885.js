Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./12.js");
var l = function (e) {
  function RefineryBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RefineryBuildingVO, e);
  RefineryBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_WoodStorage, "woodStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(r.CollectableEnum.WOOD)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_StoneStorage, "stoneStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(r.CollectableEnum.STONE)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return RefineryBuildingVO;
}(require("./783.js").ACraftingBuildingVO);
exports.RefineryBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");