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
  function RelicFarmBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RelicFarmBuildingVO, e);
  RelicFarmBuildingVO.prototype.createInfoPanelItems = function (e) {
    var t = d.CastleModel.subscriptionData.isEffectTypeActive(h.EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "basicProduktion", new c.LocalizedNumberVO(a.MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor(p.CastleEffectEnum.FOODPRODUCTION));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Farm, "utilization", new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), u.ClientConstColor.FONT_DEFAULT_COLOR, false, t);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, {
      t: "xPerHour",
      p: [r.Localize.text("food")]
    }, new c.LocalizedNumberVO(a.MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor(p.CastleEffectEnum.UNBOOSTEDFOODPRODUCTION), false, t);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FoodStorage, "foodStorage_capacityBonus_tt", new c.LocalizedNumberVO(this.maxStorageValue), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new c.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(p.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  RelicFarmBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FoodStorage, "foodStorage_capacityBonus_tt", new c.LocalizedNumberVO(this.maxStorageValue), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new c.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(p.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  RelicFarmBuildingVO.prototype.createStorageDialogItems = function (t) {
    e.prototype.createStorageDialogItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "foodproduction", new c.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)));
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new c.LocalizedNumberVO(this.decoPoints));
    }
  };
  return RelicFarmBuildingVO;
}(require("./634.js").FarmBuildingVO);
exports.RelicFarmBuildingVO = g;
s.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");