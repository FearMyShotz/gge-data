Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./277.js");
var _ = require("./272.js");
var m = require("./4.js");
var f = require("./1640.js");
var O = function (e) {
  function CastleQuestConditionVO() {
    return e.call(this) || this;
  }
  n.__extends(CastleQuestConditionVO, e);
  Object.defineProperty(CastleQuestConditionVO.prototype, "conditionCounter", {
    get: function () {
      return this._conditionCounter;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ABasicQuestConditionVO.prototype, "conditionCounter").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "conditionMaxCounter", {
    get: function () {
      return this._conditionMaxCounter;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ABasicQuestConditionVO.prototype, "conditionMaxCounter").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "conditionData", {
    get: function () {
      return this._conditionData;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ABasicQuestConditionVO.prototype, "conditionData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "isDonationQuest", {
    get: function () {
      switch (this._conditionType) {
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        case C.ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
          return true;
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "isFactionQuest", {
    get: function () {
      return this.getCurrentQuest().triggerKingdomID == l.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestConditionVO.prototype.getConditionIcon = function () {
    switch (this._conditionType) {
      case C.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
        var e = m.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_BUILDING).get(this._conditionData[0]);
        if (e.level == 1) {
          if (s.instanceOfClass(e, "DwellingBuildingVO")) {
            return 1;
          } else {
            return 15;
          }
        } else {
          return 10;
        }
      case C.ClientConstQuestCondition.QUESTTYPE_TOOL_START:
      case C.ClientConstQuestCondition.QUESTTYPE_TOOLS:
        return 2;
      case C.ClientConstQuestCondition.QUESTTYPE_UNITS:
        return 15;
      case C.ClientConstQuestCondition.QUESTTYPE_DECOS:
      case C.ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
        return 1;
      case C.ClientConstQuestCondition.QUESTTYPE_INSTANTBUILD:
        return 3;
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
      case C.ClientConstQuestCondition.QUESTTYPE_BRIBE_TAXCOLLECTOR:
        return 4;
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return 5;
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return 6;
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return 7;
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return 8;
      case C.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        if (this.getCurrentQuest().eventID == r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return 27;
        } else if ([1075, 1072, 1073].indexOf(this._questID) >= 0) {
          return 22;
        } else {
          return 10;
        }
      case C.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
        return 9;
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
        return 11;
      case C.ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
      case C.ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
      case C.ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
      case C.ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
        return 12;
      case C.ClientConstQuestCondition.QUESTTYPE_SPY:
        return 13;
      case C.ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
        return 14;
      case C.ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
        if (_.TMapHelper.isUnderworldMap(this._conditionData[0])) {
          return 27;
        } else if (_.TMapHelper.isSeaQueenMap(this._conditionData[0])) {
          return 22;
        } else {
          return 16;
        }
      case C.ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
        return 17;
      case C.ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
        return 18;
      case C.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        if (this._conditionData[0] == r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return 28;
        } else if (this._conditionData[0] == r.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
          return 21;
        } else {
          return 19;
        }
      case C.ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
        return 19;
      case C.ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
        var t = o.castAs(m.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (t && t.ownFaction == l.FactionConst.BLUE_FACTION) {
          return 42;
        } else {
          return 43;
        }
      case C.ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
      case C.ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
        return 20;
      case C.ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
        return 10;
      case C.ClientConstQuestCondition.QUESTTYPE_JOIN_AREA:
        return 23;
      case C.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        if (this.getCurrentQuest().eventID == r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return 27;
        } else if (_.TMapHelper.isSeaQueenMap(this._conditionData[0])) {
          return 22;
        } else {
          return 16;
        }
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        return 24;
      case C.ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
        return 25;
      case C.ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
        return 26;
      case C.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
      case C.ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
      case C.ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
        return 29;
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
        return 30;
      case C.ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
        return 31;
      case C.ClientConstQuestCondition.QUESTTYPE_RESEARCH:
        return 32;
      case C.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
        return 33;
      case C.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
        return 34;
      case C.ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
        return 35;
      case C.ClientConstQuestCondition.QUESTTYPE_MINUTESKIP:
        return 36;
      case C.ClientConstQuestCondition.QUESTTYPE_CONSTRUCTION_ALLIANCE_HELP:
        return 37;
      case C.ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
        return 20;
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
      case C.ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
        return 38;
      case C.ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
        return 40;
      case C.ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
        return 39;
      case C.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
        return 41;
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
        return 30;
      case C.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
        return 12;
      case C.ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
        return 44;
      default:
        return 0;
    }
  };
  CastleQuestConditionVO.prototype.getConditionHelpIconVO = function () {
    switch (this._conditionType) {
      case C.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
        return m.CastleModel.wodData.getBuildingVOById(this._conditionData[0]);
      case C.ClientConstQuestCondition.QUESTTYPE_TOOLS:
      case C.ClientConstQuestCondition.QUESTTYPE_UNITS:
        return m.CastleModel.wodData.getUnitVOByWodId(this._conditionData[0]);
    }
    return null;
  };
  CastleQuestConditionVO.prototype.getConditionText = function () {
    switch (this._conditionType) {
      case C.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
        var e;
        if (this._conditionData.length == 1) {
          if ((e = o.castAs(m.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_BUILDING).get(this._conditionData[0]), "ABasicBuildingVO")).level == 1) {
            if (s.instanceOfClass(e, "DecoBuildingVO")) {
              return h.Localize.text("questCondition_BuildBuildings", [h.Localize.text(e.getNameString())]);
            } else {
              return h.Localize.text("questCondition_BuildBuildings_withLevel", [h.Localize.text(e.getNameString()), e.level]);
            }
          } else {
            return h.Localize.text("questCondition_UpgradeBuilding", [h.Localize.text(e.getNameString()), e.level]);
          }
        }
        var t = [];
        var i = [];
        for (var n = 0; n < this._conditionData.length && !(n >= 2); n++) {
          e = m.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_BUILDING).get(this._conditionData[n]);
          t.push(h.Localize.text(e.getNameString()));
          i.push(e.level);
        }
        if (i[0] != i[1]) {
          return h.Localize.text("questCondition_BuildNormalOrLegendaryBuildings_withLevel", [t[0], i[0], t[1], i[1]]);
        } else if (i[0] == 1) {
          return h.Localize.text("questCondition_BuildMultipleBuildings_withLevel", t.concat(i));
        } else {
          return h.Localize.text("questCondition_UpgradeMultipleBuildings", t.concat(i));
        }
      case C.ClientConstQuestCondition.QUESTTYPE_TOOL_START:
        var a = m.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_UNIT).get(this._conditionData[0]);
        return h.Localize.text("questCondition_startRecruit", [h.Localize.text(a.getNameString())]);
      case C.ClientConstQuestCondition.QUESTTYPE_TOOLS:
      case C.ClientConstQuestCondition.QUESTTYPE_UNITS:
        var r = "";
        for (var l = 0; l < this._conditionData.length; l++) {
          var _ = m.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_UNIT).get(this._conditionData[l]);
          if (!_.isResearchLocked) {
            if (l != 0) {
              r += " / ";
            }
            r += h.Localize.text(_.getNameString() + "_short") != _.getNameString() + "_short" ? h.Localize.text(_.getNameString() + "_short") : h.Localize.text(_.getNameString());
          }
        }
        return h.Localize.text("questCondition_Recruit", [r]);
      case C.ClientConstQuestCondition.QUESTTYPE_DECOS:
        return h.Localize.text("questCondition_ownDecorations");
      case C.ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
        return h.Localize.text("questCondition_ownExpansions");
      case C.ClientConstQuestCondition.QUESTTYPE_INSTANTBUILD:
        return h.Localize.text("questCondition_instantBuild");
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
        return h.Localize.text("questCondition_collectTax");
      case C.ClientConstQuestCondition.QUESTTYPE_BRIBE_TAXCOLLECTOR:
        return h.Localize.text("questCondition_bribeTaxCollector");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return h.Localize.text("questCondition_donateStone");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return h.Localize.text("questCondition_donateFood");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return h.Localize.text("questCondition_donateWood");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return h.Localize.text("questCondition_donateC1");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        return h.Localize.text("questCondition_donateCoal");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        return h.Localize.text("questCondition_donateOil");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        return h.Localize.text("questCondition_donateGlass");
      case C.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        return h.Localize.text("questCondition_donateIron");
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
        return h.Localize.text("questCondition_wonBattles");
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
        return h.Localize.text("questCondition_countPopulation");
      case C.ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
        return h.Localize.text("questCondition_lootResources");
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
        var f = this.getCurrentQuest();
        if (f.triggerKingdomID == d.WorldIce.KINGDOM_ID) {
          return h.Localize.text("questCondition_count_castleName_2", [this._conditionData[0]]);
        } else if (f.triggerKingdomID == u.WorldDessert.KINGDOM_ID) {
          return h.Localize.text("pointsEvent_defeatDungeonDessert_condition_01", [this._conditionData[0]]);
        } else if (f.triggerKingdomID == p.WorldVolcano.KINGDOM_ID) {
          return h.Localize.text("pointsEvent_countDungeons_3_condition", [this._conditionData[0]]);
        } else {
          return h.Localize.text("questCondition_countDungeons", [this._conditionData[0]]);
        }
      case C.ClientConstQuestCondition.QUESTTYPE_SPY:
        if (g.int(this._conditionData[0]) == c.SpyConst.QUEST_ID_DEFENSE) {
          return h.Localize.text("questCondition_spyCountMilitary");
        }
        if (g.int(this._conditionData[0]) == c.SpyConst.QUEST_ID_ECO) {
          return h.Localize.text("questCondition_spyCountEco");
        }
        break;
      case C.ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
        var O = this._conditionMaxCounter > 1 ? "questCondition_outposts" : "questCondition_outpost";
        return h.Localize.text(O, [this._conditionMaxCounter]);
      case C.ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
        return h.Localize.text("questCondition_startTreasureMap");
      case C.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        return h.Localize.text("questCondition_treasureNode_" + this._questID);
      case C.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
        return h.Localize.text("questCondition_treasureDungeons_" + this._conditionData[0]);
      case C.ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
        return h.Localize.text("questCondition_joinAlliance");
      case C.ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
        return h.Localize.text("questCondition_startKingdom", [m.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
      case C.ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
        if (this.conditionMaxCounter == 1) {
          return h.Localize.text("questCondition_village", [m.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
        } else {
          return h.Localize.text("questCondition_villages", [m.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
        }
      case C.ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
        return h.Localize.text("questCondition_bossDungeon", [m.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
      case C.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        return h.Localize.text("questCondition_treasureVillages_" + this._conditionData[0]);
      case C.ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
        return h.Localize.text("questCondition_conquerFactionVillage");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
        return h.Localize.text("questCondition_defeatedFactionCapitalOnMap");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
        return h.Localize.text("questCondition_defeatedFactionTowersOnMap");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
        return h.Localize.text("questCondition_defeatFactionCamp");
      case C.ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
        var y = m.CastleModel.equipData.getRareStringFromRareID(parseInt(this._conditionData[0]));
        var b = h.Localize.text("equipment_rarity_" + y.toLowerCase());
        return h.Localize.text("questCondition_findEquipment", [b]);
      case C.ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
        return h.Localize.text("questCondition_anyunits_off");
      case C.ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
        return h.Localize.text("questCondition_anyunits_deff");
      case C.ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
        var D = m.CastleModel.kingdomData.getSlumVOByPartPayPriceId(parseInt(this._conditionData[0]));
        return h.Localize.text("questCondition_upgradeVillages", [D ? D.level : 0]);
      case C.ClientConstQuestCondition.QUESTTYPE_JOIN_AREA:
        return h.Localize.text("questCondition_wordlmap");
      case C.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        return h.Localize.text("questCondition_treasureNode_1043");
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        return h.Localize.text("questCondition_collectKhanTablets");
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
        return h.Localize.text("questCondition_collectSamuraiTokens");
      case C.ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
        return h.Localize.text("questCondition_spendSamuraiTokens");
      case C.ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
        return h.Localize.text("questCondition_lawAndOrder");
      case C.ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
        return h.Localize.text("questCondition_conquerResourceIsle");
      case C.ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
        return h.Localize.text("questCondition_lootAquamarine_npc");
      case C.ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
        return h.Localize.text("questCondition_lootAquamarine_pvp");
      case C.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
        return h.Localize.text("questCondition_buyGold");
      case C.ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
        return h.Localize.text("questCondition_visitShop");
      case C.ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
        return h.Localize.text("questCondition_buyMinAmountOfRubies", [this._conditionData[0]]);
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
        return h.Localize.text("questCondition_collectFame");
      case C.ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
        return h.Localize.text("questCondition_healSoldiers");
      case C.ClientConstQuestCondition.QUESTTYPE_RESEARCH:
        var I = "research_" + m.CastleModel.researchData.researchVOs.get(this._conditionData[0]).groupID + "_title";
        var T = g.int(m.CastleModel.researchData.researchVOs.get(this._conditionData[0]).level);
        return h.Localize.text("questCondition_researchTech", [I, T]);
      case C.ClientConstQuestCondition.QUESTTYPE_MINUTESKIP:
        return h.Localize.text("questcondition_timeSkip_useSpecificSkip");
      case C.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
        return h.Localize.text("dialog_referFriend_inviteDialog_friends");
      case C.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
        return h.Localize.text("questCondition_spendKhanTablets");
      case C.ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
        return h.Localize.text("questCondition_wishingWell");
      case C.ClientConstQuestCondition.QUESTTYPE_CONSTRUCTION_ALLIANCE_HELP:
        return h.Localize.text("questcondition_requestAllianceHelp_construction");
      case C.ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
        return h.Localize.text("questCondition_buyPackage");
      case C.ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
        return h.Localize.text("questCondition_changeCrest");
      case C.ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
        return h.Localize.text("questCondition_collectGallantryPoints");
      case C.ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
        return h.Localize.text("questCondition_assignCI");
      case C.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
        return h.Localize.text("questCondition_connectToFacebook");
      case C.ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
        return h.Localize.text("questCondition_recruitedAttackUnitsWithMinStrength", [this._conditionData[0]]);
      case C.ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
        return h.Localize.text("questCondition_recruitedDefenderUnitsWithMinStrength", [this._conditionData[0]]);
      case C.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
        return h.Localize.text("questCondition_lootResourcesPvp");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
        return h.Localize.text("questCondition_defeatKhanCamps");
      case C.ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
        return h.Localize.text("questCondition_collectRage");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
        return h.Localize.text("questCondition_defendKhanAttacks");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
        return h.Localize.text("questCondition_defeatNomads");
      case C.ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
        return h.Localize.text("questCondition_joinTempServer");
      case C.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
        return h.Localize.text("questCondition_goToGeneralsInn");
      case C.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
        return h.Localize.text("questCondition_assignToBaron104");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
        return h.Localize.text("questCondition_tauntWolfFortress");
      case C.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        return h.Localize.text("questCondition_assignToGeneral104");
      case C.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
        return h.Localize.text("questCondition_defeatWolfFortress");
      case C.ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
        return h.Localize.text("questCondition_gachaDrawFatKing");
      case C.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
        return h.Localize.text("questCondition_goToGeneralsOverview");
    }
    return h.Localize.text("questCondition_" + this._conditionType);
  };
  Object.defineProperty(CastleQuestConditionVO.prototype, "hasConditionShowHowTo", {
    get: function () {
      if (this.conditionType == C.ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER) {
        return !m.CastleModel.userData.hasSentMailVerification && !m.CastleModel.userData.hasValidatedEmail;
      } else {
        return C.ClientConstQuestCondition.hasShowHowToFunction(this.conditionType);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestConditionVO.prototype.getCurrentQuest = function () {
    if (m.CastleModel.questData.isQuestActive(this._questID)) {
      return m.CastleModel.questData.getActiveQuestByID(this._questID);
    } else {
      return m.CastleModel.questData.getQuestPrototype(this._questID);
    }
  };
  return CastleQuestConditionVO;
}(f.ABasicQuestConditionVO);
exports.CastleQuestConditionVO = O;
var E = require("./56.js");
a.classImplementsInterfaces(O, "IShowMeQuestConditionVO");