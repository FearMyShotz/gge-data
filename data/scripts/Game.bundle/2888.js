Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./285.js");
var l = require("./12.js");
var c = require("./2.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./33.js");
var h = function (e) {
  function RelicBeekeeperBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RelicBeekeeperBuildingVO, e);
  RelicBeekeeperBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourHoney, "basicProduktion", new a.LocalizedNumberVO(c.MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor2(p.EffectTypeEnum.EFFECT_TYPE_HONEY_PRODUCTION_INCREASE), false);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Honey, "utilization", new u.LocalizedTextVO(c.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new u.LocalizedTextVO(c.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), s.ClientConstColor.FONT_DEFAULT_COLOR, false);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourHoney, {
      t: "xPerHour",
      p: [d.Localize.text("honey")]
    }, new a.LocalizedNumberVO(c.MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor2(p.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_HONEY_PRODUCTION), false);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  RelicBeekeeperBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourHoney, "honeyproduction", new a.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HoneyStorage, "honeyStorage_capacityBonus_tt", new a.LocalizedNumberVO(this.maxStorageValue), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(RelicBeekeeperBuildingVO.prototype, "resourceType", {
    get: function () {
      return l.CollectableEnum.HONEY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBeekeeperBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBeekeeperBuildingVO;
}(r.AResourceProductionBuildingVO);
exports.RelicBeekeeperBuildingVO = h;
o.classImplementsInterfaces(h, "IShopVO", "ICostVO", "IInventoryVO");