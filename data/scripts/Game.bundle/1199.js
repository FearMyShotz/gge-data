Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./33.js");
var u = function () {
  function BuildingCostHelper() {}
  BuildingCostHelper.getUpgradeCostList = function (e) {
    var t = e.getUpgradeVO();
    var i = l.CastleModel.areaData.activeCommonInfo.builderDiscount * e.builderMultiplier;
    var u = l.CastleModel.subscriptionData.isEffectTypeActive(c.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS);
    if (u) {
      i += l.CastleModel.subscriptionData.getEffectValue(c.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS) * -1 / 100;
    }
    if (l.CastleModel.kingdomData.activeKingdomID == s.FactionConst.KINGDOM_ID) {
      var C = n.castAs(l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (C && !C.isOneLMSActive) {
        i = C.ownFaction == s.FactionConst.BLUE_FACTION ? Math.max(i, s.FactionConst.getCostReductionBonus(1 - C.factionBalanceRed)) : Math.max(i, s.FactionConst.getCostReductionBonus(C.factionBalanceRed));
      }
    }
    var _ = l.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(e, true);
    var m = new g.CollectableList();
    if (t) {
      for (var f = 0, O = t.costs.getContainingTypes(); f < O.length; f++) {
        var E = O[f];
        var y = r.int(t.getCost(E));
        if (E.type == p.CollectableEnum.C2 && _) {
          y = o.instanceOfClass(_, "PrimeSaleUpgradeComponent") ? r.int(_.getFinalPriceC2ForNextUpgrade(t)) : _.finalePriceC2;
        }
        var b = d.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(E.type) >= 0;
        if (b) {
          y *= 1 - i;
        }
        m.addItem(h.CollectableHelper.createVO(E.type, y, E.id, u && b));
      }
    }
    return m;
  };
  return BuildingCostHelper;
}();
exports.BuildingCostHelper = u;
var d = require("./86.js");
var p = require("./12.js");
var h = require("./45.js");
var g = require("./48.js");