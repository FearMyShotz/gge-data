Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./22.js");
var l = require("./4.js");
var c = require("./97.js");
var u = require("./635.js");
var d = require("./481.js");
var p = function (e) {
  function AResourceProductionBuildingVO() {
    var t = this;
    t._resourceProductions = new C.CollectableList();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AResourceProductionBuildingVO, e);
  AResourceProductionBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._resourceProductions = h.CollectableManager.parser.createGoodsListSave(new b.CollectableItemWoodVO(r.CastleXMLUtils.getIntAttribute("Woodproduction", t)), new y.CollectableItemStoneVO(r.CastleXMLUtils.getIntAttribute("Stoneproduction", t)), new m.CollectableItemFoodVO(r.CastleXMLUtils.getIntAttribute("Foodproduction", t)), new _.CollectableItemCoalVO(r.CastleXMLUtils.getIntAttribute("Coalproduction", t)), new E.CollectableItemOilVO(r.CastleXMLUtils.getIntAttribute("Oilproduction", t)), new f.CollectableItemGlassVO(r.CastleXMLUtils.getIntAttribute("Glassproduction", t)), new O.CollectableItemIronVO(r.CastleXMLUtils.getIntAttribute("Ironproduction", t)), new D.CollectableItemMeadVO(r.CastleXMLUtils.getIntAttribute("Meadproduction", t)), new d.CollectableItemBeefVO(r.CastleXMLUtils.getIntAttribute("Beefproduction", t)), new I.CollectableItemHoneyVO(r.CastleXMLUtils.getIntAttribute("Honeyproduction", t)));
  };
  AResourceProductionBuildingVO.prototype.getBaseProductionValue = function () {
    var e = this.resourceProductions.getAmountOrDefaultByType(this.resourceType);
    switch (this.resourceType) {
      case g.CollectableEnum.WOOD:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.WOODPRODUCTION);
        break;
      case g.CollectableEnum.STONE:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.STONEPRODUCTION);
        break;
      case g.CollectableEnum.FOOD:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.FOODPRODUCTION);
        break;
      case g.CollectableEnum.COAL:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.COALPRODUCTION);
        break;
      case g.CollectableEnum.OIL:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.OILPRODUCTION);
        break;
      case g.CollectableEnum.GLASS:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.GLASSPRODUCTION);
        break;
      case g.CollectableEnum.IRON:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.IRONPRODUCTION);
        break;
      case g.CollectableEnum.HONEY:
        e += this.getEffectValue(T.EffectTypeEnum.EFFECT_TYPE_HONEY_PRODUCTION_INCREASE).strength;
        break;
      case g.CollectableEnum.MEAD:
        e += this.getEffectValue(T.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_INCREASE).strength;
        break;
      case g.CollectableEnum.BEEF:
        e += this.getEffectValue(T.EffectTypeEnum.EFFECT_TYPE_BEEF_PRODUCTION_INCREASE).strength;
    }
    return e;
  };
  AResourceProductionBuildingVO.prototype.getFinalProductionValue = function () {
    var e = this.getBaseProductionValue();
    e *= this.getFinalProductivityFactor();
    switch (this.resourceType) {
      case g.CollectableEnum.WOOD:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.UNBOOSTEDWOODPRODUCTION);
        break;
      case g.CollectableEnum.STONE:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.UNBOOSTEDSTONEPRODUCTION);
        break;
      case g.CollectableEnum.FOOD:
        e += this.getConstructionItemEffectValue(c.CastleEffectEnum.UNBOOSTEDFOODPRODUCTION);
        break;
      case g.CollectableEnum.HONEY:
        e += this.getEffectValue(T.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_HONEY_PRODUCTION).strength;
        break;
      case g.CollectableEnum.MEAD:
        e += this.getEffectValue(T.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION).strength;
        break;
      case g.CollectableEnum.BEEF:
        e += this.getEffectValue(T.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_BEEF_PRODUCTION).strength;
    }
    return e;
  };
  AResourceProductionBuildingVO.prototype.getBaseProductivityFactor = function () {
    var e = l.CastleModel.areaData.getActiveStorageItem(this.resourceType).boostFactor;
    return l.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor() * e * this.getLaboratoryBoostFactor() * a.ConstructionConst.getDamageFactor(this.hitPoints);
  };
  AResourceProductionBuildingVO.prototype.getFinalProductivityFactor = function () {
    return this.efficiency / 100 * this.getBaseProductivityFactor();
  };
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AResourceProductionBuildingVO.prototype.getLaboratoryBoostFactor = function () {
    var e = this.isInfluencedByLaboratoryInKingdom;
    if (e) {
      return s.int(u.CastleLaboratoryEffectHelper.laboratoryResourceBonus(e.id)) / 100 + 1;
    } else {
      return 1;
    }
  };
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "isOverseerBoosted", {
    get: function () {
      var e = l.CastleModel.boostData.getOverseer(this.resourceType);
      return !!e && e.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "resourceType", {
    get: function () {
      return g.CollectableEnum.UNKNOWN;
    },
    enumerable: true,
    configurable: true
  });
  AResourceProductionBuildingVO.prototype.needsResourceTypeInCastle = function (t) {
    return this.resourceProductions.getAmountOrDefaultByType(t) > 0 || e.prototype.needsResourceTypeInCastle.call(this, t);
  };
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "resourceProductions", {
    get: function () {
      return this._resourceProductions;
    },
    enumerable: true,
    configurable: true
  });
  return AResourceProductionBuildingVO;
}(require("./452.js").AProductionBuildingVO);
exports.AResourceProductionBuildingVO = p;
var h = require("./50.js");
var g = require("./12.js");
var C = require("./48.js");
var _ = require("./504.js");
var m = require("./453.js");
var f = require("./505.js");
var O = require("./506.js");
var E = require("./507.js");
var y = require("./268.js");
var b = require("./269.js");
var D = require("./532.js");
var I = require("./636.js");
var T = require("./35.js");
o.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");