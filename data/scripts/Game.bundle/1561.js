Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = require("./80.js");
var a = require("./33.js");
var s = require("./142.js");
var r = require("./5.js");
var l = require("./110.js");
var c = function () {
  function BreweryHelper() {}
  BreweryHelper.getOverseerBoost = function () {
    if (n.CastleModel.boostData.overseerMeadVO.isActive) {
      return n.CastleModel.boostData.overseerMeadVO.bonusValue;
    } else {
      return 0;
    }
  };
  BreweryHelper.getBuildingBoost = function () {
    var e = n.CastleModel.areaData.activeArea.isoData.objects.provider.getFunctionalBuildingByType(o.IsoObjectEnum.BARREL_WORKSHOP);
    var t = e ? e.meadBoost : 0;
    return t += n.CastleModel.areaData.activeConstructionList.getEffectValue(a.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, new s.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getBuildingBonus = function () {
    var e = 0;
    return e += n.CastleModel.areaData.activeConstructionList.getEffectValue(a.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION, new s.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCIBaseBonus = function () {
    return n.CastleModel.areaData.activeConstructionItems.getEffectValue(a.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_INCREASE, new s.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCIBonus = function () {
    return n.CastleModel.areaData.activeConstructionItems.getEffectValue(a.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION, new s.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCIBoost = function () {
    return n.CastleModel.areaData.activeConstructionItems.getEffectValue(a.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, new s.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCrestBoost = function () {
    return n.CastleModel.userData.playerCrest.getEffectValue(a.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, new s.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getAllianceLayoutBonus = function () {
    if (!n.CastleModel.allianceData.myAllianceVO) {
      return 0;
    }
    var e = n.CastleModel.allianceData.myAllianceVO.getLayoutEffectsByType(a.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION);
    if (e.length == 0) {
      return 0;
    } else {
      return e[0].strength;
    }
  };
  BreweryHelper.getBaronBonus = function () {
    var e = n.CastleModel.lordData.getBaronByCastleId(n.CastleModel.areaData.activeAreaInfo.objectId);
    if (e) {
      return l.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, a.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION, n.CastleModel.areaData.activeAreaInfo.areaType).strength;
    } else {
      return 0;
    }
  };
  BreweryHelper.getBaronBoost = function () {
    var e = n.CastleModel.lordData.getBaronByCastleId(n.CastleModel.areaData.activeAreaInfo.objectId);
    if (e) {
      return l.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, a.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, n.CastleModel.areaData.activeAreaInfo.areaType).strength;
    } else {
      return 0;
    }
  };
  BreweryHelper.getResearchBoost = function () {
    return n.CastleModel.researchData.getResearchEffectValue(a.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST).strength;
  };
  BreweryHelper.getTotalBonus = function () {
    return BreweryHelper.getCIBonus() + BreweryHelper.getBaronBonus() + BreweryHelper.getBuildingBonus() + BreweryHelper.getAllianceLayoutBonus();
  };
  BreweryHelper.getTotalBoost = function () {
    var e = 1 + (BreweryHelper.getOverseerBoost() + BreweryHelper.getBuildingBoost() + BreweryHelper.getCIBoost() + BreweryHelper.getCrestBoost() + BreweryHelper.getBaronBoost() + BreweryHelper.getResearchBoost()) / 100;
    var t = n.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor();
    return r.ResourceConst.getCombinedProductionModifier(e, t, 1);
  };
  return BreweryHelper;
}();
exports.BreweryHelper = c;