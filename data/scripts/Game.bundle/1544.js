Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = function (e) {
  function HouseoffireBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HouseoffireBuildingVO, e);
  HouseoffireBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FireProtection, "fireBrigadeBoost", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [String(this.fireBrigadeBoost)]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return HouseoffireBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.HouseoffireBuildingVO = c;
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");