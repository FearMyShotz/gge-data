Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function TavernBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TavernBuildingVO, e);
  TavernBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Spy, "panel_multiinfo_spyLimit_2", new a.LocalizedNumberVO(this.spies));
  };
  TavernBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Spy, "panel_multiinfo_spyLimit_2", new a.LocalizedNumberVO(this.spies), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return TavernBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.TavernBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");