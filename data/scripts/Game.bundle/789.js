Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./33.js");
var c = require("./285.js");
var u = function (e) {
  function FactionMaintentBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionMaintentBuildingVO, e);
  FactionMaintentBuildingVO.prototype.getFinalProductionValue = function () {
    return this.getBaseProductionValue() * this.getFinalProductivityFactor();
  };
  FactionMaintentBuildingVO.prototype.getBaseProductivityFactor = function () {
    return 1;
  };
  Object.defineProperty(FactionMaintentBuildingVO.prototype, "resourceType", {
    get: function () {
      return d.CollectableEnum.FOOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionMaintentBuildingVO.prototype.createInfoPanelItems = function (e) {
    var t = p.Iso.data.areaData.storage;
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, {
      t: "xPerHour",
      p: [a.Localize.text("food")]
    }, new s.LocalizedNumberVO(t.getItem(d.CollectableEnum.FOOD).productionPerSec));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, {
      t: "xPerHour",
      p: [a.Localize.text("wood")]
    }, new s.LocalizedNumberVO(t.getItem(d.CollectableEnum.WOOD).productionPerSec));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, {
      t: "xPerHour",
      p: [a.Localize.text("stone")]
    }, new s.LocalizedNumberVO(t.getItem(d.CollectableEnum.STONE).productionPerSec));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new s.LocalizedNumberVO(this.maxStorageValue), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new s.LocalizedNumberVO(this.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionMaintentBuildingVO;
}(c.AResourceProductionBuildingVO);
exports.FactionMaintentBuildingVO = u;
var d = require("./12.js");
var p = require("./34.js");
o.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");