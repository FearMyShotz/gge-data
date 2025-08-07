Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./97.js");
var u = function (e) {
  function DrillgroundBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DrillgroundBuildingVO, e);
  DrillgroundBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost + this.getConstructionItemEffectValue(c.CastleEffectEnum.RECRUITSPEEDBOOST)]), this.getInfoItemTextColor(c.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(c.CastleEffectEnum.DECOPOINTS), true);
  };
  DrillgroundBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return DrillgroundBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.DrillgroundBuildingVO = u;
a.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");