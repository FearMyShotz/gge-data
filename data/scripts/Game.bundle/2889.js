Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./16.js");
var d = require("./4.js");
var p = require("./97.js");
var h = require("./35.js");
var g = function (e) {
  function RelicQuarryBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RelicQuarryBuildingVO, e);
  RelicQuarryBuildingVO.prototype.createInfoPanelItems = function (e) {
    var t = d.CastleModel.subscriptionData.isEffectTypeActive(h.EffectTypeEnum.EFFECT_TYPE_STONE_PRODUCTION_BOOST);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, "basicProduktion", new c.LocalizedNumberVO(a.MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor(p.CastleEffectEnum.STONEPRODUCTION));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Rock, "utilization", new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), u.ClientConstColor.FONT_DEFAULT_COLOR, false, t);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, {
      t: "xPerHour",
      p: [r.Localize.text("stone")]
    }, new c.LocalizedNumberVO(a.MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor(p.CastleEffectEnum.UNBOOSTEDSTONEPRODUCTION), false, t);
    if (this.maxStorageValue > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "stoneStorage_capacityBonus_tt", new c.LocalizedNumberVO(this.maxStorageValue), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new c.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(p.CastleEffectEnum.DECOPOINTS));
    }
  };
  RelicQuarryBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
    if (this.maxStorageValue > 0) {
      t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "stoneStorage_capacityBonus_tt", new c.LocalizedNumberVO(this.maxStorageValue), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new c.LocalizedNumberVO(this.decoPoints), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  RelicQuarryBuildingVO.prototype.createStorageDialogItems = function (t) {
    e.prototype.createStorageDialogItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, "stoneproduction", new c.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)));
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new c.LocalizedNumberVO(this.decoPoints));
    }
  };
  return RelicQuarryBuildingVO;
}(require("./637.js").QuarryBuildingVO);
exports.RelicQuarryBuildingVO = g;
s.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");