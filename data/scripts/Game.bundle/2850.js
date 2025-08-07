Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./35.js");
var l = function (e) {
  function FactionPUnittentBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionPUnittentBuildingVO, e);
  FactionPUnittentBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new a.LocalizedNumberVO(this.getEffectValue(r.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new a.LocalizedNumberVO(this.getEffectValue(r.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionPUnittentBuildingVO;
}(require("./642.js").PUnittentBuildingVO);
exports.FactionPUnittentBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");