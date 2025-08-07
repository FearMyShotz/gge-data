Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function EmporiumBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EmporiumBuildingVO, e);
  EmporiumBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "foodbooster", new a.LocalizedNumberVO(this.alliFoodProductionBoost));
  };
  EmporiumBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "emporium_short_info", new a.LocalizedNumberVO(this.alliFoodProductionBoost), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return EmporiumBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.EmporiumBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");