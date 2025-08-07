Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./3.js");
var O = require("./6.js");
var E = require("./231.js");
var y = require("./18.js");
var b = require("./277.js");
var D = require("./37.js");
var I = require("./87.js");
var T = require("./44.js");
var v = require("./137.js");
var S = require("./15.js");
var A = require("./4.js");
var L = require("./136.js");
var P = require("./371.js");
var M = require("./426.js");
var R = require("./707.js");
var V = require("./164.js");
var x = require("./430.js");
var w = require("./354.js");
var B = require("./435.js");
var F = require("./263.js");
var N = require("./771.js");
var k = require("./819.js");
var U = require("./1088.js");
var G = require("./1635.js");
var H = require("./517.js");
var j = require("./601.js");
var W = require("./1075.js");
var Y = require("./1753.js");
var K = require("./264.js");
var z = require("./573.js");
var q = require("./159.js");
var X = require("./146.js");
var Q = createjs.Point;
var J = function (e) {
  function ShowHowToDoQuestconditionCommand() {
    var t = this;
    t.canGoOn = true;
    t.waitingFunctions = [];
    t.onWaitingState = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ShowHowToDoQuestconditionCommand, e);
  ShowHowToDoQuestconditionCommand.prototype.execute = function (e = null) {
    if (!this.onWaitingState) {
      var t;
      var i;
      this.questVO = e[0];
      this.conditionVO = e[1];
      this.canGoOn = true;
      ShowHowToDoQuestconditionCommand.layoutManager.hideAllDialogs();
      if (this.questVO) {
        var n = this.questVO.mapID > -1 ? this.questVO.mapID : this.questVO.triggerKingdomID;
        if (ee.FlashBlockHelper.checkFlashBlock(n)) {
          return;
        }
      }
      switch (this.conditionVO.conditionType) {
        case b.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
          this.go(this.bindFunction(this.toIsoState));
          if (O.int(this.conditionVO.conditionData.length) > 1) {
            t = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
            i = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[1]);
            this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), t, i);
          } else {
            if ((t = l.castAs(A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]), "ABasicBuildingVO")).level == 1 && !u.instanceOfClass(t, "GuardTowerVO") || u.instanceOfClass(t, "CastlewallDefenceVO")) {
              this.go(this.bindFunction(this.toDecoState));
            }
            this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), t);
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_DECOS:
        case b.ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
          t = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          this.go(this.bindFunction(this.toDecoShopTab), y.ClientConstCastle.CATEGORY_DECO, t);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_STORAGE:
          t = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          this.go(this.bindFunction(this.toDecoShopTab), y.ClientConstCastle.CATEGORY_STORAGE, t);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_TOOL_START:
        case b.ClientConstQuestCondition.QUESTTYPE_UNITS:
        case b.ClientConstQuestCondition.QUESTTYPE_TOOLS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toRecruitDialog));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
        case b.ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
          if (g.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.questVO.mapID) > -1) {
            var o = l.castAs(A.CastleModel.specialEventData.activeSeasonVO, "ASeasonEventVO");
            if (o && o.treasureMapVO.isTroopsTransferActive) {
              this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
            } else {
              this.go(this.bindFunction(this.toDialog), ge.CastleTransferTroopsDialog, new Ce.CastleTransferTroopsToSeasonProperties());
            }
          } else {
            this.go(this.bindFunction(this.toIsoState));
            this.go(this.bindFunction(this.toRecruitSoldiers));
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_RECRUIT_UNITS:
        case b.ClientConstQuestCondition.QUESTTYPE_REQUEST_ALLIANCE_HELP:
        case b.ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
        case b.ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
          this.toAnyValidRecruitmentCastle(y.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_PRODUCE_TOOLS:
          this.toAnyValidRecruitmentCastle(y.ClientConstCastle.UNIT_CATEGORY_TOOLS);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
          this.handleHealUnitsCondition();
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
          a.CommandController.instance.executeCommand(te.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
        case b.ClientConstQuestCondition.QUESTTYPE_SABOTAGE:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(this.bindFunction(this.toNextEnemy));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(this.bindFunction(this.toNextDifferentEnemy));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
        case b.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
          var r = this.questVO.triggerKingdomID;
          if (r == -1) {
            r = O.int(A.CastleModel.kingdomData.activeKingdomID);
          }
          if (A.CastleModel.kingdomData.isKingdomUnlocked(r)) {
            this.go(this.bindFunction(this.toWorldMap));
            if (!this.isFactionQuest()) {
              var c = O.int(this.conditionVO.conditionData[0] > 0 ? this.conditionVO.conditionData[0] : -2);
              this.go(ShowHowToDoQuestconditionCommand.toNextDungeon, r, c);
            }
          } else {
            ShowHowToDoQuestconditionCommand.layoutManager.state = le.CastleLayoutManager.STATE_KINGDOMMAP;
            if (A.CastleModel.kingdomData.isKingdomUnlockable(A.CastleModel.kingdomData.getKingdomVOByID(r))) {
              A.CastleModel.kingdomData.tempTargetSpaceID = r;
              this.go(this.bindFunction(this.toDialog), _e.CastleHandleKingdomDialog, new me.CastleHandleKingdomDialogProperties(A.CastleModel.kingdomData.getKingdomVOByID(r)));
            }
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
        case b.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
          this.go(this.bindFunction(this.toWorldMap));
          if (!this.isFactionQuest()) {
            this.go(this.bindFunction(this.toNextEnemy));
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_SPY:
          this.go(this.bindFunction(this.toWorldMap));
          if (this.conditionVO.conditionData[0] != 0 || Pe.ABGHelper.isOnABGAndTower) {
            this.go(this.bindFunction(this.toNextEnemy));
          } else {
            this.go(ShowHowToDoQuestconditionCommand.toNextDungeon, this.questVO.triggerKingdomID, -2);
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
          t = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(127);
          i = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(205);
          while (t.hasUserLevelAndEffectsForUpgrade() && i.hasUserLevelAndEffectsForUpgrade()) {
            t = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(t.upgradeWodID);
            i = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(i.upgradeWodID);
          }
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), t, i);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(ce.CastleAllianceTeaserDialog);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
          ShowHowToDoQuestconditionCommand.layoutManager.state = le.CastleLayoutManager.STATE_KINGDOMMAP;
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
          if (A.CastleModel.specialEventData.activeSeasonVO && !A.CastleModel.specialEventData.activeSeasonVO.finished) {
            if (ShowHowToDoQuestconditionCommand.layoutManager.isInEventState) {
              this.go(this.bindFunction(this.toHomeCastleIsoState));
            }
            this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_OUTPOST, this.questVO.triggerKingdomID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_VILLAGE, this.questVO.triggerKingdomID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_BOSS_DUNGEON, this.questVO.triggerKingdomID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        case b.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
        case b.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        case b.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
          if (A.CastleModel.specialEventData.activeSeasonVO) {
            if (A.CastleModel.specialEventData.activeSeasonVO.isLocked) {
              this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
            } else {
              if (this.conditionVO.conditionData[0] != null) {
                var f = A.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getNodeById(this.conditionVO.conditionData[0]);
                if (f != null && f.nodeType == ae.TMapNodeVO.NODE_TYPE_PORT) {
                  this.go(this.bindFunction(this.toIsoState));
                  this.go(this.bindFunction(this.toAndCenterShip));
                  break;
                }
              }
              this.go(this.bindFunction(this.toSeasonMap));
            }
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
          this.go(this.bindFunction(this.toWorldMap), false, h.FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_FACTION_CAMP, h.FactionConst.KINGDOM_ID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
          this.go(this.bindFunction(this.toWorldMap), false, h.FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_FACTION_VILLAGE, h.FactionConst.KINGDOM_ID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
          this.go(this.bindFunction(this.toWorldMap), false, h.FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_FACTION_CAPITAL, h.FactionConst.KINGDOM_ID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
          if (A.CastleModel.kingdomData.isKingdomUnlocked(m.WorldIsland.KINGDOM_ID)) {
            this.go(this.bindFunction(this.toWorldMap), true, m.WorldIsland.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_ISLE_DUNGEON, m.WorldIsland.KINGDOM_ID);
          } else {
            ShowHowToDoQuestconditionCommand.layoutManager.state = le.CastleLayoutManager.STATE_KINGDOMMAP;
            if (A.CastleModel.kingdomData.isKingdomUnlockable(A.CastleModel.kingdomData.getKingdomVOByID(m.WorldIsland.KINGDOM_ID))) {
              A.CastleModel.kingdomData.tempTargetSpaceID = m.WorldIsland.KINGDOM_ID;
              this.go(this.bindFunction(this.toDialog), _e.CastleHandleKingdomDialog, new me.CastleHandleKingdomDialogProperties(A.CastleModel.kingdomData.getKingdomVOByID(m.WorldIsland.KINGDOM_ID)));
            }
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
          this.go(this.bindFunction(this.toWorldMap), true, m.WorldIsland.KINGDOM_ID);
          this.go(this.bindFunction(this.toNextEnemy), -1, m.WorldIsland.KINGDOM_ID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
          var D = l.castAs(A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_FACTION_INVASION), "FactionInvasionEventVO");
          if (D) {
            this.go(this.bindFunction(this.toWorldMap), true, C.WorldClassic.KINGDOM_ID);
            var I = 0;
            I = D.bluePoints == D.redPoints ? O.int(Math.random() < 0.5 ? d.DungeonConst.BLUE_FACTION_KING : d.DungeonConst.RED_FACTION_KING) : O.int(D.bluePoints > D.redPoints ? d.DungeonConst.RED_FACTION_KING : d.DungeonConst.BLUE_FACTION_KING);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, C.WorldClassic.KINGDOM_ID, -3, I);
          } else if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_FACTION)) {
            this.handleFactionTowerCondition();
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
          this.go(this.bindFunction(this.toWorldMap), true, m.WorldIsland.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_ISLE_RESOURCE, m.WorldIsland.KINGDOM_ID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
          X.CastleOpenShopExecutor.open(X.CastleOpenShopExecutor.SOURCE_QUEST_BUY_RUBIES, Ve.CXFSourceTrackingConstants.SOURCE_QUEST_BUY_RUBIES);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
        case b.ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
          X.CastleOpenShopExecutor.open(X.CastleOpenShopExecutor.SOURCE_QUEST_VISIT_SHOP, Ve.CXFSourceTrackingConstants.SOURCE_QUEST_VISIT_SHOP);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_RESEARCH:
          var S = A.CastleModel.researchData.researchVOs.get(this.conditionVO.conditionData[0]);
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(be.CastleResearchDialog, new N.CastleResearchDialogProperties(S, null));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
          if (s.EnvGlobalsHandler.globals.isOnSpecialServer) {
            return;
          }
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(Ee.CastlePremiumMarketPlaceDialog, new P.CastlePremiumMarketPlaceDialogProperties(y.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.centerOnWishingWell));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_NOMADINVASION_VENDOR)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toNomadInvasionDialog, De.CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_MEDALS:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_NOMADINVASION_VENDOR)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toNomadInvasionDialog, De.CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog, Ie.CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            var L = A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_SAMURAI_INVASION);
            this.go(ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog, L.daimyoInfoVO.isEnabled ? Ie.CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO : Ie.CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_SAMURAI_CAMPS:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toWorldMap), true, C.WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_SAMURAI_CAMP, C.WorldClassic.KINGDOM_ID, -3, d.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true, C.WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_NOMAD_CAMP, C.WorldClassic.KINGDOM_ID, -3, d.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
          var F = l.castAs(A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO");
          if (F && F.khanCampBarVO) {
            this.go(this.bindFunction(this.toWorldMap), true, C.WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, C.WorldClassic.KINGDOM_ID, -3, d.DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_SPEND_RUBIES:
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(Ee.CastlePremiumMarketPlaceDialog, new P.CastlePremiumMarketPlaceDialogProperties(ie.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_WRITE_ALLIANCECHAT:
          this.toAllianceDialog(E.ClientConstAlliance.CAT_COMMUNICATION);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_SEND_RESOURCES_PLAYER:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_CASTLE, this.questVO.triggerKingdomID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_USE_FORGE_ALLIANCE:
          this.toAllianceDialog(E.ClientConstAlliance.CAT_FORGE);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_USE_FORGE:
          A.CastleModel.smartfoxClient.sendCommandVO(new j.C2SGetGemInventory());
          A.CastleModel.smartfoxClient.sendCommandVO(new H.C2SGetEquipmentInventory());
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(Me.CastleEquipmentDialog, new Re.CastleEquipmentDialogProperties(null, -1, false, -1, Me.CastleEquipmentDialog.CRAFTING));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_CITIZEN:
          this.go(this.bindFunction(this.toIsoState));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COLLECT_FROM_CARRIAGE:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.toAnCenterResourceCart));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_COMPLETE_MERCENARY_MISSION:
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(Oe.CastleMercenaryOverviewDialog);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDialog), fe.CastleSlumDonateCharacterDialog);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toPrivateEventDialog), oe.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER.privateEventID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(Ee.CastlePremiumMarketPlaceDialog, new P.CastlePremiumMarketPlaceDialogProperties(y.ClientConstCastle.CATEGORY_MARKETPLACE_CREST));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.toDialog), pe.CastleConstructionItemsMainDialog, new he.CastleConstructionItemsMainDialogProperties());
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
          this.go(this.bindFunction(this.toAndConnectToFacebook));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_ALIEN_CAMP, C.WorldClassic.KINGDOM_ID, -1, d.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
          } else if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, C.WorldClassic.KINGDOM_ID, -1, d.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS:
          if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_FACTION)) {
            this.handleFactionTowerCondition();
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
          if (A.CastleModel.kingdomData.activeKingdomID == h.FactionConst.KINGDOM_ID || A.CastleModel.kingdomData.activeKingdomID == m.WorldIsland.KINGDOM_ID) {
            this.go(this.bindFunction(this.toWorldMap), true, A.CastleModel.kingdomData.activeKingdomID);
            this.go(this.bindFunction(this.toNextEnemy), -1, A.CastleModel.kingdomData.activeKingdomID);
          } else {
            this.go(this.bindFunction(this.toWorldMap), true);
            if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)) {
              this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_ALIEN_CAMP, C.WorldClassic.KINGDOM_ID, -1, d.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
            } else if (A.CastleModel.specialEventData.isEventActive(p.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)) {
              this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, C.WorldClassic.KINGDOM_ID, -1, d.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
            } else {
              this.go(this.bindFunction(this.toNextEnemy), true);
            }
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(ShowHowToDoQuestconditionCommand.toLTPEDialog);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
          if (v.TempServerHelper.tmpServerEvent) {
            v.TempServerHelper.tmpServerEvent.openDialog();
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER:
          if (!s.EnvGlobalsHandler.globals.loginIsKeyBased && !s.EnvGlobalsHandler.globals.isOnSpecialServer && !T.SpecialServerHelper.isOnKeyLoginToNormalLoginServer) {
            re.CastleDialogHandler.getInstance().registerDefaultDialogs(w.OptionsDialog, new B.OptionsDialogProperties(w.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          }
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
        case b.ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
          V.GeneralsHelper.showGeneralsHubDialog();
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleDefenceDialog, new R.CastleDefenceDialogProperties(A.CastleModel.userData.castleList.getHomeCastle()));
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
        case b.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
          this.go(this.bindFunction(this.toWorldMap), true, C.WorldClassic.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, _.WorldConst.AREA_TYPE_WOLF_KING, C.WorldClassic.KINGDOM_ID, -3, d.DungeonConst.BASIC_WOLF_KING_PLAYER_ID);
          break;
        case b.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
          re.CastleDialogHandler.getInstance().registerDefaultDialogs(x.GeneralsOverviewDialog);
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.handleHealUnitsCondition = function () {
    var e = A.CastleModel.userCastleListDetailed.getCastlesWithHospitalsList();
    if (e && e.length != 0) {
      var t;
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        var i = A.CastleModel.areaData.activeArea.isFactionCamp ? Z.IsoObjectEnum.FACTION_HOSPITAL : Z.IsoObjectEnum.HOSPITAL;
        if (l.castAs($.Iso.data.objects.provider.getObjectByType(i), "ABasicBuildingVO")) {
          t = A.CastleModel.areaData.activeArea.areaInfo;
        }
      }
      if (!t && e != null) {
        for (var n = 0, o = e; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && a.kingdomID == A.CastleModel.kingdomData.activeKingdomID) {
            t = A.CastleModel.userData.castleList.getCastleVOByID(a.areaID, a.kingdomID);
          }
        }
      }
      t ||= A.CastleModel.userData.castleList.getCastleVOByID(e[0].areaID, e[0].kingdomID);
      this.go(this.bindFunction(this.toIsoState), t);
      this.go(this.bindFunction(this.toDialog), ye.CastleRecruitDialog, new F.CastleRecruitDialogProperties(y.ClientConstCastle.CATEGORY_HOSPITAL));
    } else {
      this.go(this.bindFunction(this.toIsoState));
      var s = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(y.ClientConstCastle.HOSPITAL_BUILDING_WOD);
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), s);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.handleFactionTowerCondition = function () {
    var e = A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_FACTION);
    if (e.isLocked) {
      ShowHowToDoQuestconditionCommand.layoutManager.state = le.CastleLayoutManager.STATE_KINGDOMMAP;
      this.go(this.bindFunction(this.toFactionMainDialog));
    } else if (e.isSpectator) {
      this.showEventNotRunningAlert();
    } else {
      this.go(this.bindFunction(this.toWorldMap), true, h.FactionConst.KINGDOM_ID);
      this.go(ShowHowToDoQuestconditionCommand.toNextFactionTower);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toPrivateEventDialog = function (e) {
    var t = A.CastleModel.specialEventData.getActivePrivateEventByEventId(e);
    if (t) {
      a.CommandController.instance.executeCommand(te.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [t, false]);
    } else {
      this.canGoOn = false;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAnyValidRecruitmentCastle = function (e) {
    this.go(this.bindFunction(this.toIsoState), this.findValidCastleForCategory(e));
    if (e == y.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.go(this.bindFunction(this.toProduceTools));
    } else {
      this.go(this.bindFunction(this.toRecruitSoldiers));
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.findValidCastleForCategory = function (e) {
    if (A.CastleModel.permanentCastleData.getCurrentCastle() && this.hasUnlockedUnits(e, A.CastleModel.permanentCastleData.getCurrentCastle())) {
      return A.CastleModel.areaData.activeAreaInfo;
    }
    for (var t = 0, i = A.CastleModel.userData.getCastleList(true); t < i.length; t++) {
      var n = i[t];
      if (this.hasUnlockedUnits(e, A.CastleModel.permanentCastleData.getCastleByAreaInfo(n))) {
        return n;
      }
    }
    this.canGoOn = false;
    return null;
  };
  ShowHowToDoQuestconditionCommand.prototype.hasUnlockedUnits = function (e, t) {
    var i;
    if (e == y.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      i = t.unitsVO.unlockedTools;
    } else if (e == y.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
      i = t.unitsVO.unlockedSoldiers;
    }
    if (t == A.CastleModel.permanentCastleData.getCurrentCastle()) {
      var n = 0;
      if (i != null) {
        for (var o = 0, a = i; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined && s.isAvailableByLevel) {
            n++;
          }
        }
      }
      return n > 0;
    }
    return i.length > 0;
  };
  ShowHowToDoQuestconditionCommand.prototype.toAllianceDialog = function (e) {
    if (A.CastleModel.userData.isInAlliance) {
      re.CastleDialogHandler.getInstance().registerDefaultDialogs(ue.CastleAllianceDialog, new L.CastleAllianceDialogProperties(e));
    } else {
      re.CastleDialogHandler.getInstance().registerDefaultDialogs(ce.CastleAllianceTeaserDialog);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toDialog = function (e, t = null) {
    re.CastleDialogHandler.getInstance().registerDefaultDialogs(e, t);
  };
  ShowHowToDoQuestconditionCommand.prototype.toFactionMainDialog = function () {
    a.CommandController.instance.executeCommand(te.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
  };
  ShowHowToDoQuestconditionCommand.prototype.centerOnWishingWell = function () {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle && A.CastleModel.areaData.activeArea.isMyMainCastle) {
      var e = $.Iso.renderer.objects.provider.getObjectByType(Z.IsoObjectEnum.RUBY_WISHING_WELL);
      if (u.instanceOfClass(e, "RubyWishingWellFixedPositionBuildingVE")) {
        this.centerOnBasicBuilding(e);
      }
    } else {
      ShowHowToDoQuestconditionCommand.controller.addEventListener(D.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onWishingJAAArrived));
      a.CommandController.instance.executeCommand(te.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.onWishingJAAArrived = function (e) {
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(D.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onWishingJAAArrived));
    this.centerOnWishingWell();
  };
  ShowHowToDoQuestconditionCommand.toNomadInvasionDialog = function (e) {
    if (l.castAs(A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO")) {
      re.CastleDialogHandler.getInstance().registerDefaultDialogs(De.CastleAllianceNomadInvasionDialog, new k.CastleAllianceNomadInvasionEventDialogProperties(e));
    }
  };
  ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog = function (e) {
    var t = l.castAs(A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (t) {
      re.CastleDialogHandler.getInstance().registerDefaultDialogs(Ie.CastleAllianceSamuraiInvasionDialog, new U.CastleAllianceSamuraiInvasionEventDialogProperties(t, e));
    }
  };
  ShowHowToDoQuestconditionCommand.toLTPEDialog = function () {
    var e = l.castAs(A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT), "LongTermPointEventEventVO");
    if (e) {
      e.openDialog();
    }
  };
  ShowHowToDoQuestconditionCommand.toSeasonEventDialog = function () {
    A.CastleModel.kingdomData.tempTargetSpaceID = A.CastleModel.specialEventData.activeSeasonVO.mapID;
    re.CastleDialogHandler.getInstance().registerDefaultDialogs(Te.CastleHandleSeasonDialog, new ve.CastleHandleSeasonDialogProperties(A.CastleModel.specialEventData.activeSeasonVO));
  };
  ShowHowToDoQuestconditionCommand.toNearestMapObject = function (e, t, i = -3, n = -1) {
    A.CastleModel.smartfoxClient.sendCommandVO(new K.C2SFindNextMapObjectVO(e, t, i, -1, n));
  };
  ShowHowToDoQuestconditionCommand.toNextDungeon = function (e, t = -2) {
    ShowHowToDoQuestconditionCommand.toNearestMapObject(A.CastleModel.kingdomData.getKingdomVOByID(e).dungeonType, e, t);
  };
  ShowHowToDoQuestconditionCommand.prototype.toNextEnemy = function (e = -1, t = -1) {
    var i = O.int(Math.max(t > -1 ? t : this.questVO.triggerKingdomID, 0));
    var n = A.CastleModel.userData.castleList.getMainCastleByKingdomID(i);
    A.CastleModel.smartfoxClient.sendCommandVO(new Y.C2SFindNextEnemyCastleVO(n.absAreaPosX, n.absAreaPosY, 0, e));
  };
  ShowHowToDoQuestconditionCommand.prototype.toNextDifferentEnemy = function () {
    var e = A.CastleModel.userData.castleList.getMainCastleByKingdomID(this.questVO.triggerKingdomID > -1 ? this.questVO.triggerKingdomID : 0);
    A.CastleModel.smartfoxClient.sendCommandVO(new Y.C2SFindNextEnemyCastleVO(e.absAreaPosX, e.absAreaPosY, A.CastleModel.questData.currentSearchEnemyCounter % y.ClientConstCastle.MAX_FINDABLE_ENEMY_COUNTER));
    A.CastleModel.questData.increaseCurrentSearchEnemyCounter();
  };
  ShowHowToDoQuestconditionCommand.toNextFactionTower = function () {
    A.CastleModel.smartfoxClient.sendCommandVO(new W.C2SFindNextTowerVO());
  };
  ShowHowToDoQuestconditionCommand.prototype.toSeasonMap = function () {
    A.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(function () {
      ShowHowToDoQuestconditionCommand.layoutManager.state = le.CastleLayoutManager.STATE_SEASON_WORLDMAP;
      if (this.conditionVO) {
        a.CommandController.instance.executeCommand(te.IngameClientCommands.SWITCH_SEASON_MAP_CENTER_AND_HIGHLIGHT_DUNGEONS, this.conditionVO);
      }
    });
  };
  ShowHowToDoQuestconditionCommand.prototype.toWorldMap = function (e = false, t = -1) {
    var i = O.int(Math.max(t > -1 ? t : this.questVO.triggerKingdomID, 0));
    if (i != A.CastleModel.kingdomData.activeKingdomID) {
      this.onWaitingState = true;
      ShowHowToDoQuestconditionCommand.controller.addEventListener(D.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    }
    var n = A.CastleModel.userData.castleList.getMainCastleByKingdomID(i);
    if (i == h.FactionConst.KINGDOM_ID && !n) {
      A.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_FACTION).openDialog();
      this.canGoOn = false;
      return;
    }
    if (e) {
      a.CommandController.instance.executeCommand(te.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, n);
    } else {
      a.CommandController.instance.executeCommand(te.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [i, n.absAreaPosX, n.absAreaPosY]);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toProduceTools = function () {
    if (this.hasUnlockedUnits(y.ClientConstCastle.UNIT_CATEGORY_TOOLS, A.CastleModel.permanentCastleData.getCurrentCastle())) {
      this.go(this.bindFunction(this.toDialog), ye.CastleRecruitDialog, new F.CastleRecruitDialogProperties(y.ClientConstCastle.UNIT_CATEGORY_TOOLS));
    } else {
      var e = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(y.ClientConstCastle.BARRACKS_BUILDING_WOD_ID);
      if (e.level == 1) {
        this.go(this.bindFunction(this.toDecoState));
      }
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), e);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toRecruitSoldiers = function () {
    if (this.hasUnlockedUnits(y.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, A.CastleModel.permanentCastleData.getCurrentCastle())) {
      this.go(this.bindFunction(this.toDialog), ye.CastleRecruitDialog, new F.CastleRecruitDialogProperties(y.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    } else {
      var e = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_BUILDING).get(y.ClientConstCastle.BARRACKS_BUILDING_WOD_ID);
      if (e.level == 1) {
        this.go(this.bindFunction(this.toDecoState));
      }
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), e);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toRecruitDialog = function () {
    var e = [];
    for (var t = 0; t < this.conditionVO.conditionData.length; t++) {
      var i = A.CastleModel.wodData.voSubList(ne.CastleWodData.TYPE_UNIT).get(this.conditionVO.conditionData[t]);
      e.push(i);
    }
    if (u.instanceOfClass(e[0], "ToolUnitVO")) {
      if (e[0].name == y.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP) {
        if (!A.CastleModel.militaryData.isBuildingCategoryAllowed(y.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
          this.canGoOn = false;
          return;
        }
        re.CastleDialogHandler.getInstance().registerDefaultDialogs(ye.CastleRecruitDialog, new F.CastleRecruitDialogProperties(y.ClientConstCastle.UNIT_CATEGORY_TOOLS, y.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK));
      } else {
        if (!A.CastleModel.militaryData.isBuildingCategoryAllowed(y.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP)) {
          this.canGoOn = false;
          return;
        }
        re.CastleDialogHandler.getInstance().registerDefaultDialogs(ye.CastleRecruitDialog, new F.CastleRecruitDialogProperties(y.ClientConstCastle.UNIT_CATEGORY_TOOLS, y.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE));
      }
    } else {
      if (!(A.CastleModel.areaData.activeArea.isFactionCamp ? A.CastleModel.militaryData.isBuildingCategoryAllowed(y.ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS) : A.CastleModel.militaryData.isBuildingCategoryAllowed(y.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS))) {
        this.canGoOn = false;
        return;
      }
      re.CastleDialogHandler.getInstance().registerDefaultDialogs(ye.CastleRecruitDialog, new F.CastleRecruitDialogProperties(A.CastleModel.areaData.activeArea.isFactionCamp ? y.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : y.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    }
    Le.CastleTutorialController.getInstance().waitForExternalDialogShow(ye.CastleRecruitDialog, function () {
      var t = A.CastleModel.areaData.activeArea.isFactionCamp ? y.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : y.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
      for (var i = ShowHowToDoQuestconditionCommand.layoutManager.getDialog(ye.CastleRecruitDialog).subLayer.get(t); i.shopCurrentPage < i.shopMaxPage;) {
        for (var n = 0, o = i.currentShownUnits; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && e != null) {
            for (var s = 0, r = e; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined && a.wodId == l.wodId) {
                return;
              }
            }
          }
        }
        i.shopCurrentPage = O.int(Math.min(i.shopMaxPage, i.shopCurrentPage + 1));
        i.fillShopItemsByGroup();
      }
    });
  };
  ShowHowToDoQuestconditionCommand.prototype.toAnCenterResourceCart = function () {
    var e = $.Iso.data.objects.surroundings.getResourceCarts();
    if (e.length >= 1) {
      this.toAndCenterIsoObject(e[0]);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndCenterShip = function () {
    var e = $.Iso.data.objects.provider.getObjectByType(Z.IsoObjectEnum.SHIP);
    if (e) {
      this.toAndCenterIsoObject(e);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndCenterIsoObject = function (e) {
    if (e) {
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        var t = new Q(e.x, e.y);
        if (e.hasOwnProperty("posOffset")) {
          t.add(e.posOffset);
        }
        $.Iso.renderer.camera.scrollToGridPos(t);
      } else {
        this.canGoOn = false;
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndCenterBuildingForUpdate = function (e, t = null) {
    if (e) {
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        if (u.instanceOfClass(e, "CastlewallDefenceVO")) {
          this.go(this.bindFunction(this.toDecoShopTab), e.getLowestDowngradeVO().shopCategory, e, t);
        } else {
          var i = $.Iso.renderer.objects.innerBuildings.list;
          (i = i.concat($.Iso.renderer.objects.defenceObjects.towers)).push($.Iso.renderer.objects.defenceObjects.gate);
          i.push($.Iso.renderer.objects.defenceObjects.moat);
          var n;
          var o = [];
          if (i != null) {
            for (var a = 0, s = i; a < s.length; a++) {
              var r = s[a];
              if (r !== undefined && r) {
                if (r.buildingVO.name == e.name && r.vo.group == e.group && (r.buildingVO.level < e.level || r.buildingVO.level <= e.level && (r.buildingVO.buildingState == I.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || r.buildingVO.buildingState == I.IsoBuildingStateEnum.UPGRADE_STOPPED || r.buildingVO.buildingState == I.IsoBuildingStateEnum.BUILD_IN_PROGRESS || r.buildingVO.buildingState == I.IsoBuildingStateEnum.BUILD_STOPPED))) {
                  o.push(r);
                }
                if (t && r.buildingVO.name == t.name && r.vo.group == t.group && (r.buildingVO.level < t.level || r.buildingVO.level <= t.level && (r.buildingVO.buildingState == I.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || r.buildingVO.buildingState == I.IsoBuildingStateEnum.UPGRADE_STOPPED || r.buildingVO.buildingState == I.IsoBuildingStateEnum.BUILD_IN_PROGRESS || r.buildingVO.buildingState == I.IsoBuildingStateEnum.BUILD_STOPPED))) {
                  o.push(r);
                }
              }
            }
          }
          o.sort(ShowHowToDoQuestconditionCommand.sortBuildingsByLevel);
          if (o != null) {
            for (var l = 0, c = o; l < c.length; l++) {
              var d = c[l];
              if (d !== undefined && d.buildingVO.buildingState != I.IsoBuildingStateEnum.BUILD_IN_PROGRESS && d.buildingVO.buildingState != I.IsoBuildingStateEnum.BUILD_STOPPED && d.buildingVO.buildingState != I.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS && d.buildingVO.buildingState != I.IsoBuildingStateEnum.UPGRADE_STOPPED && d.buildingVO.buildingState != I.IsoBuildingStateEnum.REPAIR_IN_PROGRESS && d.buildingVO.buildingState != I.IsoBuildingStateEnum.REPAIR_STOPPED && d.buildingVO.buildingState != I.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS && d.buildingVO.buildingState != I.IsoBuildingStateEnum.DISASSEMBLE_STOPPED) {
                n = d;
                break;
              }
            }
          }
          if (!n && o.length > 0) {
            if (!$.Iso.data.objects.provider.hasMaxAmountOfObjectsByType(o[0].buildingVO)) {
              this.go(this.bindFunction(this.toDecoState));
              this.go(this.bindFunction(this.toDecoShopTab), e.getLowestDowngradeVO().shopCategory, e, t);
              return;
            }
            n = o[0];
          } else if (!n || u.instanceOfClass(n, "BasicMoatVE") || u.instanceOfClass(n, "PremiumMoatVE")) {
            this.go(this.bindFunction(this.toDecoState));
            this.go(this.bindFunction(this.toDecoShopTab), e.getLowestDowngradeVO().shopCategory, e, t);
            return;
          }
          if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastleBuildMode && u.instanceOfClass(e, "GuardTowerVO")) {
            ShowHowToDoQuestconditionCommand.layoutManager.getPanel(Se.CastleDecoShopPanel).changeCategory(y.ClientConstCastle.CATEGORY_DEFENCE);
          }
          this.centerOnBasicBuilding(n);
        }
      } else {
        this.canGoOn = false;
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.centerOnBasicBuilding = function (e) {
    if (e && !A.CastleModel.tutorialData.isTutorialActive) {
      $.Iso.renderer.camera.scrollToGridPos(e.vo.pos);
      $.Iso.renderer.mouse.changeSelectedTarget(e);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toDecoShopTab = function (e = null, t = null, i = null) {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastleBuildMode) {
      if (u.instanceOfClass(t, "CastlewallDefenceVO")) {
        e = t.shopCategory;
      }
      if (e && e != y.ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
        var n = ShowHowToDoQuestconditionCommand.layoutManager.getPanel(Se.CastleDecoShopPanel);
        var o = Ae.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e);
        n.revertHighLightFilters();
        if (t || i) {
          var a = -1;
          for (var s = 0; s < o.length; s++) {
            var r = o[s];
            if (r.isAvailableByLevelAndEffect) {
              var l = O.int(s / Se.CastleDecoShopPanel.ITEMS_PER_PAGE);
              var c = O.int(s % Se.CastleDecoShopPanel.ITEMS_PER_PAGE);
              if (ShowHowToDoQuestconditionCommand.buildingsAreEqual(t, r)) {
                n.changeCategory(e, l, true);
                n.highLightFilteredArrayIndex(c);
                a = l;
              } else if (ShowHowToDoQuestconditionCommand.buildingsAreEqual(i, r)) {
                if (a == -1 || a == l) {
                  n.changeCategory(e, l, true);
                  n.highLightFilteredArrayIndex(c);
                }
              }
            }
          }
        } else {
          n.changeCategory(e);
        }
      }
    } else {
      this.canGoOn = false;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndConnectToFacebook = function () {
    if (A.CastleModel.userData.isConnectedToFacebook && se.CastleFacebookModule.hasAuthResponse) {
      A.CastleModel.smartfoxClient.sendCommandVO(new G.C2SMapFacebookVO(true, se.CastleFacebookModule.userID, se.CastleFacebookModule.accessToken, se.CastleFacebookModule.appID));
    } else {
      a.CommandController.instance.executeCommand(te.IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  };
  ShowHowToDoQuestconditionCommand.buildingsAreEqual = function (e, t) {
    if (!e || !t) {
      return false;
    }
    var i = true;
    if (e.objectType == Z.IsoObjectEnum.DECO) {
      i = e.type == t.type;
    }
    return !!e && !!t && e.name == t.name && e.group == t.group && i;
  };
  ShowHowToDoQuestconditionCommand.prototype.toDecoState = function () {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
      $.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    } else {
      this.canGoOn = false;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.go = function (e) {
    var t = this;
    var i = [];
    for (var n = 1; n < arguments.length; n++) {
      i[n - 1] = arguments[n];
    }
    if (this.canGoOn) {
      if (this.onWaitingState) {
        this.waitingFunctions.push(function () {
          i.unshift(e);
          t.go.apply(t, i);
        });
      } else {
        e.apply(this, i);
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toHomeCastleIsoState = function () {
    if (!A.CastleModel.areaData.activeArea.isMyHomeCastle || !ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
      var e = A.CastleModel.userData.castleList.getHomeCastle();
      ShowHowToDoQuestconditionCommand.controller.addEventListener(D.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      if (A.CastleModel.worldmapData) {
        A.CastleModel.worldmapData.allowGAARequests = false;
      }
      A.CastleModel.smartfoxClient.sendCommandVO(new q.C2SJoinCastleVO(e.objectId, e.kingdomID));
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toIsoState = function (e) {
    var t;
    if (e === undefined) {
      e = null;
    }
    if (this.questVO && (this.questVO.mapID == -1 || this.questVO.eventID == p.EventConst.EVENTTYPE_FACTION || e)) {
      if (!(t = e || A.CastleModel.userData.castleList.getMainCastleByKingdomID(this.questVO.triggerKingdomID))) {
        this.canGoOn = false;
        return;
      }
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle && A.CastleModel.kingdomData.activeKingdomID == this.questVO.triggerKingdomID && A.CastleModel.areaData.activeAreaInfo.objectId == t.objectId) {
        return;
      }
      ShowHowToDoQuestconditionCommand.controller.addEventListener(D.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      if (A.CastleModel.worldmapData) {
        A.CastleModel.worldmapData.allowGAARequests = false;
      }
      A.CastleModel.smartfoxClient.sendCommandVO(new q.C2SJoinCastleVO(t.objectId, t.kingdomID));
    } else {
      if (!A.CastleModel.specialEventData.activeSeasonVO || !A.CastleModel.specialEventData.activeSeasonVO.treasureMapVO || A.CastleModel.specialEventData.activeSeasonVO.finished) {
        this.canGoOn = false;
        return;
      }
      ShowHowToDoQuestconditionCommand.controller.addEventListener(D.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      A.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(function () {
        A.CastleModel.smartfoxClient.sendCommandVO(new z.C2SJoinCampVO(A.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
      });
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.onServerMessageArrived = function (e) {
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(D.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(D.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    this.onWaitingState = false;
    this.executeFunctionList();
  };
  ShowHowToDoQuestconditionCommand.prototype.executeFunctionList = function () {
    for (var e = 0; e < this.waitingFunctions.length; e++) {
      this.waitingFunctions[e]();
    }
    this.waitingFunctions = [];
  };
  ShowHowToDoQuestconditionCommand.sortBuildingsByLevel = function (e, t) {
    if (e.buildingVO.level < t.buildingVO.level) {
      return 1;
    } else if (e.buildingVO.level > t.buildingVO.level || e.buildingVO.efficiency > t.buildingVO.efficiency) {
      return -1;
    } else {
      return 0;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.isFactionQuest = function () {
    return u.instanceOfClass(this.conditionVO, "CastleQuestConditionVO") && this.conditionVO.isFactionQuest;
  };
  ShowHowToDoQuestconditionCommand.prototype.showEventNotRunningAlert = function () {
    re.CastleDialogHandler.getInstance().registerDefaultDialogs(de.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(f.Localize.text("generic_alert_information"), f.Localize.text("alert_eventNotRunning")));
  };
  Object.defineProperty(ShowHowToDoQuestconditionCommand, "layoutManager", {
    get: function () {
      return le.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShowHowToDoQuestconditionCommand, "controller", {
    get: function () {
      return S.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ShowHowToDoQuestconditionCommand;
}(r.SimpleCommand);
exports.ShowHowToDoQuestconditionCommand = J;
var Z = require("./80.js");
var $ = require("./34.js");
var ee = require("./160.js");
var te = require("./29.js");
var ie = require("./170.js");
var ne = require("./56.js");
var oe = require("./1754.js");
var ae = require("./735.js");
var se = require("./193.js");
var re = require("./9.js");
var le = require("./17.js");
var ce = require("./388.js");
var ue = require("./125.js");
var de = require("./38.js");
var pe = require("./323.js");
var he = require("./357.js");
var ge = require("./664.js");
var Ce = require("./1755.js");
var _e = require("./1756.js");
var me = require("./1766.js");
var fe = require("./1613.js");
var Oe = require("./1612.js");
var Ee = require("./315.js");
var ye = require("./225.js");
var be = require("./450.js");
var De = require("./822.js");
var Ie = require("./1094.js");
var Te = require("./1098.js");
var ve = require("./1100.js");
var Se = require("./260.js");
var Ae = require("./627.js");
var Le = require("./828.js");
var Pe = require("./53.js");
var Me = require("./246.js");
var Re = require("./350.js");
var Ve = require("./107.js");
c.classImplementsInterfaces(J, "ISimpleCommand");