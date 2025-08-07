Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./97.js");
var l = require("./65.js");
var c = require("./12.js");
var u = require("./5.js");
var d = require("./4.js");
var p = function (e) {
  function StorehouseBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StorehouseBuildingVO, e);
  StorehouseBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new a.LocalizedNumberVO(this.maxStorageValue), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (d.CastleModel.areaData.activeArea && d.CastleModel.areaData.activeArea.areaInfo.kingdomID == u.WorldIsland.KINGDOM_ID) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AquamarineStorage, "storage_capacity_aquamarine", new a.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(c.CollectableEnum.AQUAMARINE)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(r.CastleEffectEnum.DECOPOINTS));
    }
  };
  return StorehouseBuildingVO;
}(l.AEffectBuildingVO);
exports.StorehouseBuildingVO = p;
o.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");