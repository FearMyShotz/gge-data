Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./22.js");
var d = require("./44.js");
var p = require("./4.js");
var h = require("./33.js");
var g = function (e) {
  function StrongholdBuildingVO() {
    var t = this;
    t._hiddenSoldiersSpace = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(StrongholdBuildingVO, e);
  StrongholdBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._hiddenSoldiersSpace = l.int(u.CastleXMLUtils.getIntAttribute("hiddenSoldiersSpace", t));
  };
  StrongholdBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Units, "dialog_stronghold_capacity", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [p.CastleModel.militaryData.strongholdUnitCount, p.CastleModel.militaryData.currentHiddenSoldierCapacity]));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (!d.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
    if (!d.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new s.LocalizedNumberVO(this.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
  };
  StrongholdBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Units, "dialog_stronghold_capacity", new s.LocalizedNumberVO(this._hiddenSoldiersSpace), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (!d.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (!d.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new s.LocalizedNumberVO(this.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(StrongholdBuildingVO.prototype, "hiddenSoldiersSpace", {
    get: function () {
      return this._hiddenSoldiersSpace;
    },
    enumerable: true,
    configurable: true
  });
  return StrongholdBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.StrongholdBuildingVO = g;
a.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");