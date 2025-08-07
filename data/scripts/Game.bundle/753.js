Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./4.js");
var p = require("./35.js");
var h = require("./230.js");
var g = require("./112.js");
var C = require("./5.js");
var _ = function () {
  function CastleFameHelper() {}
  CastleFameHelper.canEarnHonorOrFame = function (e, t) {
    return CastleFameHelper.canEarnOrLoseHonor(e, t) || CastleFameHelper.canEarnFame(e, t);
  };
  CastleFameHelper.canEarnOrLoseHonor = function (e, t) {
    var i = c.int(e.ownerInfo.playerID);
    var n = e.ownerInfo != null;
    var o = t == u.ClientConstCastle.ACTION_TYPE_ATTACK || t == u.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK;
    var a = e.kingdomID == C.WorldIsland.KINGDOM_ID;
    var s = e.areaType == l.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER;
    var r = g.PlayerHelper.isNPCPlayer(i);
    return o && n && !r && !a && !s && !CastleFameHelper.isFactionFight(e);
  };
  CastleFameHelper.canEarnFame = function (e, t) {
    var i = c.int(CastleFameHelper.getUncappedEstimatedHonor(e, t));
    var o = n.instanceOfClass(e, "AAlienInvasionMapobjectVO");
    var a = e.kingdomID == C.WorldIsland.KINGDOM_ID;
    var s = c.int(e.ownerInfo.playerID);
    var r = g.PlayerHelper.isNPCPlayer(s);
    return i >= 0 && CastleFameHelper.canEarnOrLoseHonor(e, t) || o || (CastleFameHelper.isFactionFight(e) || a) && CastleFameHelper.isAnAttack(t) && !r;
  };
  CastleFameHelper.isFactionFight = function (e) {
    return e.kingdomID == r.FactionConst.KINGDOM_ID;
  };
  CastleFameHelper.getEstimatedHonor = function (e, t) {
    var i = c.int(CastleFameHelper.getUncappedEstimatedHonor(e, t));
    if (d.CastleModel.userData.userHonor + i < 0) {
      i = c.int(-d.CastleModel.userData.userHonor);
    }
    return i;
  };
  CastleFameHelper.getUncappedEstimatedHonor = function (e, t) {
    if (!CastleFameHelper.canEarnOrLoseHonor(e, t)) {
      return 0;
    }
    var i = 0;
    var o = 1 + d.CastleModel.researchData.getResearchEffectValue(p.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS).strength / 100;
    switch (t) {
      case u.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
      case u.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        i = 0;
        break;
      default:
        if (n.instanceOfClass(e, "AAlienInvasionMapobjectVO")) {
          i = 0;
        } else {
          if ((i = c.int(a.CombatConst.getHonorChange(d.CastleModel.userData.userHonor, e.controllerWorldMapOwnerInfoVO.honor, d.CastleModel.userData.userLevel, e.controllerWorldMapOwnerInfoVO.playerLevel, true) * o)) > 0 && d.CastleModel.userData.isLegend && e.controllerWorldMapOwnerInfoVO.isLegend) {
            i = c.int(i * (1 + d.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(h.CastleLegendSkillEffectsEnum.HONOR_BONUS) / 100));
          }
          if (e.areaType == l.WorldConst.AREA_TYPE_CAPITAL && d.CastleModel.userData.isLegend && e.controllerWorldMapOwnerInfoVO.playerLevel < 51) {
            i = Math.max(0, i);
          }
        }
    }
    return i;
  };
  CastleFameHelper.getEstimatedFameBonus = function (e, t) {
    if (!CastleFameHelper.canEarnFame(e, t)) {
      return 0;
    }
    var i = 0;
    var o = 0;
    o = n.instanceOfClass(e, "AAlienInvasionMapobjectVO") ? e.dungeonLevel : e.controllerWorldMapOwnerInfoVO.playerLevel;
    if (d.CastleModel.userData.userLevel - o > a.CombatConst.getMaxLevelDif2(d.CastleModel.userData.userLevel)) {
      i = 0;
    } else {
      var s = c.int(d.CastleModel.userData.userHonor);
      i = Math.round(a.CombatConst.getFameBonusForHonor(s) * 100);
    }
    return Math.round(i);
  };
  CastleFameHelper.isAnAttack = function (e) {
    var t = false;
    switch (e) {
      case u.ClientConstCastle.ACTION_TYPE_ATTACK:
      case u.ClientConstCastle.ACTION_TYPE_CONQUERATTACK:
      case u.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
      case u.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
      case u.ClientConstCastle.ACTION_TYPE_TREASUREATTACK:
      case u.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
      case u.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
      case u.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK:
      case u.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
      case u.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        t = true;
    }
    return t;
  };
  CastleFameHelper.getFameBoosterBonus = function (e = true, t = true) {
    var i = 0;
    var n = 0;
    if (e) {
      var o = CastleFameHelper.privateFameBooster.remainingTimeInSeconds > 0 ? CastleFameHelper.privateFameBooster.bonusPercentage : 0;
      var a = CastleFameHelper.gloryBoosterEventVO ? CastleFameHelper.gloryBoosterEventVO.bonusPercentage : 0;
      i = Math.max(o, a);
    }
    if (t) {
      n = CastleFameHelper.personalFameBooster.remainingTimeInSeconds > 0 ? CastleFameHelper.personalFameBooster.bonusPercentage : 0;
    }
    return i + n;
  };
  CastleFameHelper.isOfferBonusBetterThanEvent = function () {
    var e = CastleFameHelper.privateFameBooster.remainingTimeInSeconds > 0 ? CastleFameHelper.privateFameBooster.bonusPercentage : 0;
    var t = CastleFameHelper.gloryBoosterEventVO ? CastleFameHelper.gloryBoosterEventVO.bonusPercentage : 0;
    if (e != t) {
      return e > t;
    } else {
      return (CastleFameHelper.privateFameBooster ? CastleFameHelper.privateFameBooster.remainingTimeInSeconds : 0) > (CastleFameHelper.gloryBoosterEventVO ? CastleFameHelper.gloryBoosterEventVO.remainingEventTimeInSeconds : 0);
    }
  };
  Object.defineProperty(CastleFameHelper, "privateFameBooster", {
    get: function () {
      return d.CastleModel.boostData.getBoosterByID(o.BoosterConst.GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameHelper, "personalFameBooster", {
    get: function () {
      return d.CastleModel.boostData.getBoosterByID(o.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameHelper, "gloryBoosterEventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_GLORY_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFameHelper;
}();
exports.CastleFameHelper = _;