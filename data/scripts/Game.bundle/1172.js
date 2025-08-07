Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./22.js");
var l = require("./65.js");
var c = require("./85.js");
var u = require("./12.js");
var d = require("./16.js");
var p = require("./4.js");
var h = require("./3.js");
var g = function (e) {
  function RelicBreweryBuildingVO() {
    var t = this;
    t.honeyRatio = 0;
    t.foodRatio = 0;
    t.meadProduction = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(RelicBreweryBuildingVO, e);
  RelicBreweryBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this.honeyRatio = s.int(r.CastleXMLUtils.getIntAttribute("honeyRatio", t));
    this.foodRatio = s.int(r.CastleXMLUtils.getIntAttribute("foodRatio", t));
    this.meadProduction = s.int(r.CastleXMLUtils.getIntAttribute("meadProduction", t));
  };
  RelicBreweryBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Mead_Rate, "RelicBrewery_meadProductionRate", new h.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [p.CastleModel.breweryData.percentForMead]));
    t.addInfoItem(Library.CastleInterfaceElements.Icon_Mead, "RelicBrewery_meadPerHour", new c.CastleLocalizedNumberVO(s.int(p.CastleModel.areaData.activeCommonInfo.meadBaseProduction), {
      compactThreshold: 1000000
    }));
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MeadStorage, "meadStorage_capacityBonus_tt", new c.CastleLocalizedNumberVO(this.maxStorageValue), d.ClientConstColor.FONT_DEFAULT_COLOR, true);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new c.CastleLocalizedNumberVO(this.decoPoints), d.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  RelicBreweryBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FoodToMead, "dialog_buildingInfo_foodMeadConversion", new h.TextVO(this.foodRatio.toString() + " : 1"), d.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HoneyToMead, "dialog_buildingInfo_honeyMeadConversion", new h.TextVO(this.honeyRatio.toString() + " : 1"), d.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MeadStorage, "meadStorage_capacityBonus_tt", new c.CastleLocalizedNumberVO(this.maxStorageValue), d.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might_starOnly_noShadow, "playerMight", new h.LocalizedNumberVO(this.mightValue));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new c.CastleLocalizedNumberVO(this.decoPoints), d.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(RelicBreweryBuildingVO.prototype, "resourceType", {
    get: function () {
      return u.CollectableEnum.MEAD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBreweryBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBreweryBuildingVO.prototype, "isOverseerBoosted", {
    get: function () {
      var e = p.CastleModel.boostData.getOverseer(this.resourceType);
      return !!e && e.isActive;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBreweryBuildingVO;
}(l.AEffectBuildingVO);
exports.RelicBreweryBuildingVO = g;
a.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");