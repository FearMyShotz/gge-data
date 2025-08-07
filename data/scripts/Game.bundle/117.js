Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTitleSystemHelper() {}
  CastleTitleSystemHelper.setTitleSystemIcon = function (e, t, i) {
    d.MovieClipHelper.clearMovieClip(e);
    if (s.ClientConstTitle.VALID_TITLE_SYSTEMS.indexOf(t) != -1) {
      var n = "TitleSystemIcon_" + t;
      var o = new T.CastleGoodgameExternalClip(n, l.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false);
      var a = new c.ClipSizeComponent(i.x, i.y);
      a.clipSizeChanged.add(CastleTitleSystemHelper.onClipSizeChanged);
      o.clipSizeComponent = a;
      e.addChild(o.asDisplayObject());
      e.toolTipText = CastleTitleSystemHelper.getTitleSystemTextID(t);
      e.mouseChildren = false;
    }
  };
  CastleTitleSystemHelper.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    t.x = e.clipSizeComponent.offsetX;
    t.y = e.clipSizeComponent.offsetY;
  };
  CastleTitleSystemHelper.getTitleSystemTextID = function (e, t = true) {
    var i = t ? "_plural" : "_singular";
    var n = "";
    switch (e) {
      case s.ClientConstTitle.GLORY_TITLE:
        n = s.ClientConstTitle.SYSTEM_GLORY_TEXT;
        break;
      case s.ClientConstTitle.BRAVERY_TITLE:
        n = s.ClientConstTitle.SYSTEM_FACTION_TEXT;
        break;
      case s.ClientConstTitle.ISLAND_TITLE:
        n = s.ClientConstTitle.SYSTEM_ISLAND_TEXT;
    }
    return n + i;
  };
  CastleTitleSystemHelper.getTitleSystemPointsTextID = function (e) {
    switch (e) {
      case s.ClientConstTitle.GLORY_TITLE:
        return "dialog_fame_fame";
      case s.ClientConstTitle.BRAVERY_TITLE:
        return "dialog_berimond_nobilityPoints";
    }
    return "";
  };
  CastleTitleSystemHelper.isIslandKing = function (e) {
    return !!e.playerPrefix && !!e.playerPrefix.boni && e.playerPrefix.isKing || !!e.playerSuffix && !!e.playerSuffix.boni && e.playerSuffix.isKing;
  };
  CastleTitleSystemHelper.getAttackBoost = function (e, t, i) {
    return E.int(CastleTitleSystemHelper.returnTitleEffectValue(D.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, -1, t, i).strength);
  };
  CastleTitleSystemHelper.returnTitleEffectValues = function (e, t = -1, i = -1, n = -1) {
    var o = new e[0].valueClass();
    if (e != null) {
      for (var a = 0, s = e; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          o.add(CastleTitleSystemHelper.returnTitleEffectValue(r, t, i, n), null);
        }
      }
    }
    return o;
  };
  CastleTitleSystemHelper.returnTitleEffectValue = function (e, t = -1, i = -1, n = -1) {
    var o = new e.valueClass();
    if (g.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(n) > -1) {
      return o;
    } else {
      return (o = I.CastleEffectsHelper.getTotalEffectValue(this.returnTitleEffectsByType(e, new b.CastleEffectConditionVO(i, n, t)), true)) || new e.valueClass();
    }
  };
  CastleTitleSystemHelper.returnTitleEffectsByType = function (e, t = null) {
    t = t || new b.CastleEffectConditionVO();
    if (g.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(t.spaceId) > -1) {
      return [];
    }
    var i = [];
    y.CastleModel.titleData.thisUsersTitles.forEach(function (n) {
      if (n.hasEffects()) {
        var o = n.getBonusVOByEffectType(e);
        if (o && o.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
          i.push(o);
        }
      }
    });
    return i;
  };
  CastleTitleSystemHelper.isWodIdUnlocked = function (e) {
    for (var t = 0, i = y.CastleModel.titleData.thisUsersTitles; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        for (var o = 0, a = n.boni; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined) {
            if (p.instanceOfClass(s.effectValue, "EffectValueWodID")) {
              if (s.effectValue.hasWodId(e)) {
                return true;
              }
            } else if (s.strength == e) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo = function (e) {
    if (e.playerPrefix && e.playerSuffix && e.playerPrefix != o.CastleTitleData.NULL_TITLE && e.playerSuffix != o.CastleTitleData.NULL_TITLE) {
      var t = "";
      if (CastleTitleSystemHelper.needsJapaneseSuffixSuffix) {
        t = "_jap";
        if (e.playerPrefix.isKing) {
          t += "_stormlord";
        }
      }
      return m.Localize.text("playerTitle_composition_prefix_suffix", [new f.LocalizedTextVO(e.playerPrefix.textID), new O.TextVO(e.playerName), new f.LocalizedTextVO(e.playerSuffix.textID + t)]);
    }
    if (e.playerPrefix && e.playerPrefix != o.CastleTitleData.NULL_TITLE) {
      return m.Localize.text("playerTitle_composition_prefix", [new f.LocalizedTextVO(e.playerPrefix.textID), new O.TextVO(e.playerName)]);
    } else {
      return e.playerName;
    }
  };
  Object.defineProperty(CastleTitleSystemHelper, "needsJapaneseSuffixSuffix", {
    get: function () {
      return u.GGSCountryController.instance.currentCountry.ggsLanguageCode == r.BasicConstants.LANGUAGE_JAPANESE || u.GGSCountryController.instance.currentCountry.ggsLanguageCode == r.BasicConstants.LANGUAGE_CHINESE_SIMPLE || u.GGSCountryController.instance.currentCountry.ggsLanguageCode == r.BasicConstants.LANGUAGE_CHINESE_TRADITIONAL;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSystemHelper.getTitleRewardText = function (e) {
    if (e.rewardID > -1) {
      var t = "";
      for (var i = 0, n = y.CastleModel.rewardData.getListById(e.rewardID).list; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (t != "") {
            t += " ";
          }
          t += m.Localize.text("generic_amount_reward", [o.amount, o.getTooltipTextId()]);
        }
      }
      return new f.LocalizedTextVO(t);
    }
    if (e.boni) {
      var s;
      var r = e.boni;
      if (e.hasOneOrMoreEffectTypes([D.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST])) {
        s = e.getBoniVOByFirstFoundEffectType([D.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST]);
        var l = y.CastleModel.wodData.createVObyWOD(s.effectValue.firstWodID, a.CastleWodData.TYPE_UNIT);
        return new f.LocalizedTextVO("dialog_nobility_rewardRecruitementSpeedBoost", [s.strength, l.getNameString()]);
      }
      if (e.hasOneOrMoreEffectTypes([D.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE])) {
        s = e.getBoniVOByFirstFoundEffectType([D.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE]);
        var c = y.CastleModel.wodData.createVObyWOD(s.effectValue.firstWodID, a.CastleWodData.TYPE_UNIT);
        return new f.LocalizedTextVO("dialog_fame_rewardBoost", [s.strength, m.Localize.text(c.getNameString())]);
      }
      if (e.hasAllEffectTypes([D.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, D.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST])) {
        return new f.LocalizedTextVO("dialog_eiland_fameLoot_malus", [e.getBoniVOByFirstFoundEffectType([D.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, D.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST]).strength]);
      }
      if (r != null) {
        for (var u = 0, d = r; u < d.length; u++) {
          var p = d[u];
          if (p !== undefined) {
            var g = p.effect;
            switch (p.effect.effectTypeID) {
              case D.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardAttackIncreaseYard", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST.id:
                return new f.LocalizedTextVO("dialog_eiland_publicOrder_malus", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST.id:
                return new f.LocalizedTextVO("dialog_eiland_spy_bonus", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardToolProductionSpeedBoost", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS.id:
                var O = y.CastleModel.wodData.createVObyWOD(p.strength, a.CastleWodData.TYPE_UNIT);
                return new f.LocalizedTextVO("dialog_fame_rewardUnlockUnit", [O.getNameString()]);
              case D.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardUnitAmountIncreaseFlank", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardUnitAmountIncreaseFront", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_FACTION_POINT_GAIN_BOOST.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardNobilityBoost", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_FACTION_POINT_GAIN_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_MORALE_BOOST.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardMoralBoost", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_MORALE_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardLootBoost", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST.id:
                return new f.LocalizedTextVO("dialog_fame_reward_C1Bonus", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS.id:
                return new f.LocalizedTextVO("dialog_fame_rewardFameBoost", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_FAME_GAIN_BOOST.id:
                return new f.LocalizedTextVO("dialog_fame_AllyFameBoost_desc", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_FAME_GAIN_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_AUXILIARY_CAPACITY_BOOST.id:
                return new f.LocalizedTextVO("dialog_nobility_rewardAuxiliaryCapacity", [e.getBonusVOByEffectType(D.EffectTypeEnum.EFFECT_TYPE_AUXILIARY_CAPACITY_BOOST).strength]);
              case D.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS.id:
                if (p.effect.spaceIDs.length > 0 && p.effect.spaceIDs[0] == h.FactionConst.KINGDOM_ID) {
                  return new f.LocalizedTextVO("dialog_nobility_rewardMovementBoost", [p.strength]);
                } else {
                  return new f.LocalizedTextVO("dialog_fame_rewardMovementBoost", [p.strength]);
                }
              case D.EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST.id:
                if (g.areaTypes.length == 1 && g.areaTypes[0] == _.WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
                  return new f.LocalizedTextVO("dialog_nobility_rewardFoodBoostKingdoms", [p.strength]);
                } else if (g.spaceIDs.length == 1 && g.spaceIDs[0] == C.WorldClassic.KINGDOM_ID) {
                  return new f.LocalizedTextVO("dialog_nobility_rewardFoodBoostMainKingdom", [p.strength]);
                } else {
                  return new f.LocalizedTextVO("dialog_eiland_foodProduction_bonus", [p.strength]);
                }
              case D.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.id:
                if (g.effectID == CastleTitleSystemHelper.EFFECT_ATTACK_BONUS) {
                  return new f.LocalizedTextVO("dialog_fame_rewardAttackBoost", [p.strength]);
                }
                if (g.effectID == CastleTitleSystemHelper.EFFECT_ATTACK_BONUS_PVP) {
                  return new f.LocalizedTextVO("dialog_fame_rewardAttackBoostPvp", [p.strength]);
                }
                break;
              default:
                return new f.LocalizedTextVO(p.effect.defaultTextID, [p.strength]);
            }
          }
        }
      }
    }
    return new f.LocalizedTextVO("-");
  };
  CastleTitleSystemHelper.getSingleMoreImportantTitle = function (e) {
    if (e.playerSuffix != null && e.playerSuffix != o.CastleTitleData.NULL_TITLE) {
      return m.Localize.text(e.playerSuffix.textID);
    } else if (e.playerPrefix != null && e.playerPrefix != o.CastleTitleData.NULL_TITLE) {
      return m.Localize.text(e.playerPrefix.textID);
    } else {
      return e.playerName;
    }
  };
  CastleTitleSystemHelper.getSummedEffectValueFromTitles = function (e, t) {
    var i = 0;
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i += a.getEffectValueByType(t).strength;
        }
      }
    }
    return i;
  };
  CastleTitleSystemHelper.EFFECT_ATTACK_BONUS_PVP = 47;
  CastleTitleSystemHelper.EFFECT_ATTACK_BONUS = 48;
  return CastleTitleSystemHelper;
}();
exports.CastleTitleSystemHelper = n;
var o = require("./566.js");
var a = require("./56.js");
var s = require("./188.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./6.js");
var y = require("./4.js");
var b = require("./142.js");
var D = require("./33.js");
var I = require("./110.js");
var T = require("./24.js");