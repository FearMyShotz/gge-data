Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function StorageBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StorageBuildingVO, e);
  StorageBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new a.LocalizedNumberVO(this.maxStorageValue), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return StorageBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.StorageBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");