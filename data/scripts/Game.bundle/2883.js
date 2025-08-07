Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./97.js");
var l = function (e) {
  function OfficersSchoolBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OfficersSchoolBuildingVO, e);
  OfficersSchoolBuildingVO.prototype.createInfoPanelItems = function (e) {
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(r.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  OfficersSchoolBuildingVO.prototype.createInfoDialogItems = function (e) {
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return OfficersSchoolBuildingVO;
}(require("./452.js").AProductionBuildingVO);
exports.OfficersSchoolBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICos#tVO", "IInventoryVO");