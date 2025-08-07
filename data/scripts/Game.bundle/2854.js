Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./35.js");
var l = function (e) {
  function FactionUnittentBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionUnittentBuildingVO, e);
  FactionUnittentBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new a.LocalizedNumberVO(this.getEffectValue(r.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new a.LocalizedNumberVO(this.getEffectValue(r.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionUnittentBuildingVO;
}(require("./454.js").UnittentBuildingVO);
exports.FactionUnittentBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");