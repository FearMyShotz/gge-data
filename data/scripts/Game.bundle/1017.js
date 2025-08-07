Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./44.js");
var l = require("./33.js");
var c = function (e) {
  function GuardpostBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GuardpostBuildingVO, e);
  GuardpostBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Guards, "guards", new a.LocalizedNumberVO(this.guards));
    if (!r.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new a.LocalizedNumberVO(this.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
    if (!r.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new a.LocalizedNumberVO(this.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
  };
  GuardpostBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Guards, "guards", new a.LocalizedNumberVO(this.guards), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (!r.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new a.LocalizedNumberVO(this.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (!r.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new a.LocalizedNumberVO(this.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return GuardpostBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.GuardpostBuildingVO = c;
o.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");