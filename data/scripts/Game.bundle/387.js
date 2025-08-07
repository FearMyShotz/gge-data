Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./6.js");
var m = require("./116.js");
var f = require("./368.js");
var O = require("./148.js");
var E = require("./153.js");
var y = require("./44.js");
var b = require("./4.js");
var D = require("./308.js");
var I = m.getLogger("CastleNPCOwnerFactory");
var T = function () {
  function CastleNPCOwnerFactory() {}
  CastleNPCOwnerFactory.getOwner = function (e) {
    if (e > 0) {
      n.error("ownerID " + e + " is not a NPC ID!");
      return null;
    }
    var t;
    switch (e) {
      case O.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER:
        t = CastleNPCOwnerFactory.generateEventOwner(-1, e);
        break;
      case O.ClientConstNPCs.NPC_ID_THORNKING_DUNGEON:
      case O.ClientConstNPCs.NPC_ID_THORNKING_VILLAGE:
      case O.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON:
        t = CastleNPCOwnerFactory.generateEventOwner(d.EventConst.EVENTTYPE_CRUSADE_THORNKING, e);
        break;
      case O.ClientConstNPCs.NPC_ID_SEEQUEEN_DUNGEON:
      case O.ClientConstNPCs.NPC_ID_SEEQUEEN_SHIPS:
        t = CastleNPCOwnerFactory.generateEventOwner(d.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN, e);
        break;
      case O.ClientConstNPCs.NPC_ID_UNDERWORLD_DUNGEON:
      case O.ClientConstNPCs.NPC_ID_UNDERWORLD_VILLAGE:
        t = CastleNPCOwnerFactory.generateEventOwner(d.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD, e);
        break;
      case O.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON:
        t = CastleNPCOwnerFactory.generateTreasureHuntDungeonNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_TUTORIAL_DUNGEON_OWNER:
        t = CastleNPCOwnerFactory.generateTutorialDungeonNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_USER_INVASION:
        t = CastleNPCOwnerFactory.generateUserInvasionNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION:
        t = CastleNPCOwnerFactory.generateRedAlienInvasionNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_SAMURAI_INVASION:
        t = CastleNPCOwnerFactory.generateSamuraiInvasionNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE:
        t = CastleNPCOwnerFactory.generateDaimyoCastleNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP:
        t = CastleNPCOwnerFactory.generateKhanCampNPC();
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL2:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS3:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS4:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN3:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING2:
        t = CastleNPCOwnerFactory.generateCollectorNPC(e);
        break;
      case O.ClientConstNPCs.NPC_ID_ABG_CULTISTS:
        t = CastleNPCOwnerFactory.generateABGOwner(e);
        break;
      case O.ClientConstNPCs.NPC_ID_WOLFKING:
        t = CastleNPCOwnerFactory.generateWolfkingNPC();
        break;
      default:
        I.warn("Unknown NPC owner ID " + e + ".");
        return S.WorldMapOwnerInfoVO.createDummy();
    }
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.generateStandardNPCOwner = function () {
    var e = [];
    (e = e.concat(CastleNPCOwnerFactory.generateDungeonNPCs(), CastleNPCOwnerFactory.generateKingdomDungeonNPCs(), CastleNPCOwnerFactory.generateKingdomBossDungeonNPCs(), CastleNPCOwnerFactory.generateNomadNPCs(), CastleNPCOwnerFactory.generateVillageNPCs(), CastleNPCOwnerFactory.generatEventDungeonNPCs())).push(CastleNPCOwnerFactory.generateOutpostNPC(), CastleNPCOwnerFactory.generateCapitalNPC(), CastleNPCOwnerFactory.generateCapitalNPCIce(), CastleNPCOwnerFactory.generateCapitalNPCDesert(), CastleNPCOwnerFactory.generateCapitalNPCVolcano(), CastleNPCOwnerFactory.generateMetropolNPC(), CastleNPCOwnerFactory.generatePlagueMonkNPC(), CastleNPCOwnerFactory.generateBlueFactionNPC(), CastleNPCOwnerFactory.generateRedFactionNPC(), CastleNPCOwnerFactory.generateKingstowerNPC(), CastleNPCOwnerFactory.generateMonumentNPC(), CastleNPCOwnerFactory.generateLaboratoryNPC(h.WorldClassic.KINGDOM_ID), CastleNPCOwnerFactory.generateLaboratoryNPC(r.WorldIce.KINGDOM_ID), CastleNPCOwnerFactory.generateLaboratoryNPC(l.WorldDessert.KINGDOM_ID), CastleNPCOwnerFactory.generateLaboratoryNPC(a.WorldVolcano.KINGDOM_ID), CastleNPCOwnerFactory.generateUnknownNPC());
    return e;
  };
  CastleNPCOwnerFactory.generateWolfkingNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_WOLFKING);
    e.playerName = C.Localize.text("wolfgard_playerName");
    e.playerLevel = -1;
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2968662);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_WOLFKING, 11788776);
    e.crest = t;
    return e;
  };
  CastleNPCOwnerFactory.generateUserInvasionNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_USER_INVASION);
    e.playerName = C.Localize.text("alienInvasion_playerName");
    e.playerLevel = -1;
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 6179448);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_ALIEN, 12115422);
    e.crest = t;
    return e;
  };
  CastleNPCOwnerFactory.generateRedAlienInvasionNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION);
    e.playerName = C.Localize.text("redAlienInvasion_playerName");
    e.playerLevel = -1;
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 8986953);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_REDALIEN, 15921906);
    e.crest = t;
    return e;
  };
  CastleNPCOwnerFactory.generateSamuraiInvasionNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_SAMURAI_INVASION);
    e.playerName = C.Localize.text("samurai_playerName");
    e.playerLevel = -1;
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2898774);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_SAMURAI, 16770451);
    e.crest = t;
    return e;
  };
  CastleNPCOwnerFactory.generateDaimyoCastleNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE);
    e.playerName = C.Localize.text("samurai_playerName");
    e.playerLevel = -1;
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2898774);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_SAMURAI, 16770451);
    e.crest = t;
    return e;
  };
  CastleNPCOwnerFactory.generateEventOwner = function (e = -1, t = _.int(O.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER)) {
    var i = new S.WorldMapOwnerInfoVO();
    i.playerID = t;
    i.playerName = C.Localize.text("dialog_seasonEvent_" + e + "_DungeonOwner");
    i.crest = CastleNPCOwnerFactory.getCrusadeCrest(e);
    return i;
  };
  CastleNPCOwnerFactory.generateTutorialDungeonNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_TUTORIAL_DUNGEON_OWNER);
    e.playerName = C.Localize.text("dungeon_playerName_RandomDungeonEvent");
    e.playerLevel = 42;
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isDungeonOwner = true;
    return e;
  };
  CastleNPCOwnerFactory.generateDungeonNPCs = function () {
    var e = [];
    for (var t = 0; t < o.DungeonConst.DUNGEON_PLAYER_NAME_COUNT; t++) {
      e.push(CastleNPCOwnerFactory.generateDungeonPlayer(t));
    }
    return e;
  };
  CastleNPCOwnerFactory.generateDungeonPlayer = function (e) {
    var t = new S.WorldMapOwnerInfoVO();
    t.playerID = _.int(o.DungeonConst.getDungeonOwnerID(h.WorldClassic.KINGDOM_ID, e));
    t.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("dungeon_playerName"));
    t.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.generateABGOwner = function (e) {
    var t = new S.WorldMapOwnerInfoVO();
    t.playerID = e;
    t.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_-222"));
    t.crest = CastleNPCOwnerFactory.getDefaultABGCrest();
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.generateKingdomDungeonNPCs = function () {
    var e = [];
    for (var t = 1; t < E.KingdomEnum.getNPCOwnerList().length; t++) {
      e.push(CastleNPCOwnerFactory.generateKingdomDungeonPlayer(t));
    }
    return e;
  };
  CastleNPCOwnerFactory.generateKingdomDungeonPlayer = function (e) {
    var t = new S.WorldMapOwnerInfoVO();
    var i = _.int(o.DungeonConst.getDungeonOwnerID(e, 0));
    t.playerID = i;
    t.playerName = C.Localize.text("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName(String(i)));
    t.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(e);
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.generateKingdomBossDungeonNPCs = function () {
    var e = [];
    for (var t = 1; t < 4; t++) {
      e.push(CastleNPCOwnerFactory.generateKingdomBossDungeonPlayer(t));
    }
    return e;
  };
  CastleNPCOwnerFactory.generateKingdomBossDungeonPlayer = function (e) {
    var t = new S.WorldMapOwnerInfoVO();
    var i = _.int(o.DungeonConst.getBossDungeonOwnerID(e));
    t.playerID = i;
    t.playerName = C.Localize.text("kingdom_boss_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("" + i));
    t.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(e);
    t.isDungeonOwner = true;
    t.isShareableDungeon = true;
    return t;
  };
  CastleNPCOwnerFactory.generateNomadNPCs = function () {
    var e = [];
    for (var t = 0; t < o.DungeonConst.NOMAD_CAMP_COUNT; t++) {
      var i = _.int(O.ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID - t);
      e.push(CastleNPCOwnerFactory.generateNomadPlayer(i));
    }
    return e;
  };
  CastleNPCOwnerFactory.generateNomadPlayer = function (e) {
    var t;
    (t = new S.WorldMapOwnerInfoVO()).playerID = e;
    t.playerName = C.Localize.text("nomad_playerName");
    t.playerLevel = -1;
    var i = new D.CrestVO();
    i.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1009082);
    i.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_NOMAD, 14408394);
    t.crest = i;
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.generateKhanCampNPC = function () {
    var e;
    (e = new S.WorldMapOwnerInfoVO()).playerID = _.int(O.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP);
    e.playerName = C.Localize.text("nomad_playerName");
    e.playerLevel = -1;
    e.isShareableDungeon = false;
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1009082);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_NOMAD, 14408394);
    e.crest = t;
    e.isDungeonOwner = true;
    return e;
  };
  CastleNPCOwnerFactory.generateCollectorNPC = function (e) {
    var t;
    var i = b.CastleModel.collectEventData.getCollectInfoVOByID(Math.abs(e - o.DungeonConst.BASIC_COLLECTOR_PLAYER_ID)).collectorEventSkinName;
    (t = new S.WorldMapOwnerInfoVO()).playerID = e;
    t.playerName = C.Localize.text("dialog_collector_battlelog_attackerName_0_" + i);
    t.playerLevel = -1;
    var n = new D.CrestVO();
    switch (e) {
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN3:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2311175);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_HALLOWEEN, 10418537);
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS3:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS4:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1257822);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_CHRISTMAS, 14498576);
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL2:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 5716113);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_CARNIVAL, 16765798);
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING2:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 15376694);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_SPRING, 1912371);
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 3158323);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_ELEMENTAL, 13558473);
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 3899525);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_SUMMER, 15255878);
        break;
      case O.ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
        n.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 15379489);
        n.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_COLLECTOR_10TH_ANNIVERSARY, 11473426);
    }
    t.crest = n;
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.generateVillageNPCs = function () {
    var e = [];
    e.push(CastleNPCOwnerFactory.generateVillageNPC(h.WorldClassic.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(r.WorldIce.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(l.WorldDessert.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(a.WorldVolcano.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(s.WorldIsland.KINGDOM_ID));
    return e;
  };
  CastleNPCOwnerFactory.generateVillageNPC = function (e = 1) {
    var t = new S.WorldMapOwnerInfoVO();
    var i = _.int(o.DungeonConst.getDungeonOwnerID(e, 0));
    t.playerID = _.int(g.VillageConst.getVillageDefaultOwnerID(e));
    t.playerName = C.Localize.text("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("" + i));
    t.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(e);
    t.isDungeonOwner = true;
    t.isShareableDungeon = true;
    return t;
  };
  CastleNPCOwnerFactory.generateRedFactionNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_FACTION_RED);
    e.playerName = C.Localize.text("red_faction");
    e.factionID = _.int(p.FactionConst.RED_FACTION);
    e.crest = v.FactionEventVO.RED_CREST_VO;
    e.isDungeonOwner = true;
    return e;
  };
  CastleNPCOwnerFactory.generateUnknownNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = -366;
    e.playerName = C.Localize.text("Unknown_name");
    return e;
  };
  CastleNPCOwnerFactory.generateBlueFactionNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_FACTION_BLUE);
    e.playerName = C.Localize.text("blue_faction");
    e.factionID = _.int(p.FactionConst.BLUE_FACTION);
    e.crest = v.FactionEventVO.BLUE_CREST_VO;
    e.isDungeonOwner = true;
    return e;
  };
  CastleNPCOwnerFactory.generateTreasureHuntDungeonNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(O.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON);
    e.playerName = C.Localize.text("dialog_treasureMap_DungeonOwner");
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isDungeonOwner = true;
    return e;
  };
  CastleNPCOwnerFactory.generateOutpostNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.OUTPOST_DEFAULT_OWNER_ID);
    e.playerLevel = _.int(c.OutpostConst.OUTPOST_DEFAULT_LEVEL);
    e.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isOutpostOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateCapitalNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID);
    e.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    e.playerLevel = _.int(b.CastleModel.landmark.defaultLandmark.defaultLevel);
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isOutpostOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateCapitalNPCIce = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID);
    e.playerName = C.Localize.text("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("-221"));
    e.playerLevel = _.int(b.CastleModel.landmark.defaultLandmark.defaultLevel);
    e.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(r.WorldIce.KINGDOM_ID);
    e.isOutpostOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateCapitalNPCDesert = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID);
    e.playerLevel = _.int(b.CastleModel.landmark.defaultLandmark.defaultLevel);
    e.playerName = C.Localize.text("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("-220"));
    e.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(l.WorldDessert.KINGDOM_ID);
    e.isOutpostOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateCapitalNPCVolcano = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID);
    e.playerLevel = _.int(b.CastleModel.landmark.defaultLandmark.defaultLevel);
    e.playerName = C.Localize.text("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("-222"));
    e.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(a.WorldVolcano.KINGDOM_ID);
    e.isOutpostOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateMetropolNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.METROPOL_DEFAULT_OWNER_ID);
    e.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    e.playerLevel = _.int(b.CastleModel.landmark.defaultLandmark.defaultLevel);
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isOutpostOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateKingstowerNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.KINGS_TOWER_DEFAULT_OWNER_ID);
    e.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    e.playerLevel = _.int(c.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL);
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isDungeonOwner = true;
    e.isShareableDungeon = true;
    e.isKingstowerOwner = true;
    return e;
  };
  CastleNPCOwnerFactory.generateMonumentNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(c.OutpostConst.MONUMENT_DEFAULT_OWNER_ID);
    e.playerName = C.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    e.playerLevel = _.int(c.OutpostConst.MONUMENT_DEFAULT_LEVEL);
    e.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    e.isMonumentOwner = true;
    e.isDungeonOwner = true;
    e.isShareableDungeon = true;
    return e;
  };
  CastleNPCOwnerFactory.generateLaboratoryNPC = function (e) {
    var t = new S.WorldMapOwnerInfoVO();
    t.playerID = _.int(c.OutpostConst.getLaboratoryDefaultOwnerFor(e));
    var i = _.int(o.DungeonConst.getDungeonOwnerID(e, 0));
    t.playerName = C.Localize.text("kingdom_dungeon_playerName_" + (e == h.WorldClassic.KINGDOM_ID ? "classic" : CastleNPCOwnerFactory.cleanPlayerName(String(i))));
    t.playerLevel = _.int(c.OutpostConst.LABORATORY_DEFAULT_LEVEL);
    t.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(e);
    t.isDungeonOwner = true;
    t.isShareableDungeon = true;
    return t;
  };
  CastleNPCOwnerFactory.generatePlagueMonkNPC = function () {
    var e = new S.WorldMapOwnerInfoVO();
    e.playerID = _.int(u.SpyConst.PLAGUEMONK_OWNER_ID);
    e.playerName = C.Localize.text("plagueMonkOwner");
    var t = new D.CrestVO();
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2960653);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_SHADOW, 5854994);
    e.crest = t;
    return e;
  };
  CastleNPCOwnerFactory.generatEventDungeonNPCs = function () {
    var e = [];
    for (var t = 0, i = O.ClientConstNPCs.EVENT_DUNGEON_NPCs; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        e.push(CastleNPCOwnerFactory.generateEventDungeonNPC(n));
      }
    }
    return e;
  };
  CastleNPCOwnerFactory.generateEventDungeonNPC = function (e) {
    var t = new S.WorldMapOwnerInfoVO();
    t.playerID = e;
    t.playerName = C.Localize.text("eventDungeon_playerName_" + e);
    t.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    t.isDungeonOwner = true;
    return t;
  };
  CastleNPCOwnerFactory.getDefaultBanditCrest = function () {
    var e = new D.CrestVO();
    e.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1710618);
    e.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_DEFAULT, 15001048);
    return e;
  };
  CastleNPCOwnerFactory.getDefaultABGCrest = function () {
    var e = new D.CrestVO();
    e.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1791030);
    e.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, f.ClientConstCrest.NPC_SYMBOL_ABG_MAYA, 16494651);
    return e;
  };
  CastleNPCOwnerFactory.getKingdomOwnerCrest = function (e) {
    var t = new D.CrestVO();
    var i = 0;
    var n = 0;
    var o = 0;
    switch (e) {
      case h.WorldClassic.KINGDOM_ID:
        return CastleNPCOwnerFactory.getDefaultBanditCrest();
      case l.WorldDessert.KINGDOM_ID:
        i = 16366401;
        n = 11010048;
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_DESSERT);
        break;
      case r.WorldIce.KINGDOM_ID:
        i = 15921906;
        n = 18298;
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_ICECREAM);
        break;
      case a.WorldVolcano.KINGDOM_ID:
        i = 15782781;
        n = 2171169;
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_VOLCANO);
        break;
      case s.WorldIsland.KINGDOM_ID:
        i = 16777215;
        n = 760717;
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_ISLAND);
    }
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, n);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, o, i);
    return t;
  };
  CastleNPCOwnerFactory.getCrusadeCrest = function (e) {
    var t = new D.CrestVO();
    var i = 0;
    var n = 0;
    var o = 0;
    switch (e) {
      case d.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_THORNKING);
        i = 0;
        n = 7704832;
        break;
      case d.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_SEAQUEEN);
        i = 0;
        n = 15198431;
        break;
      case d.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_UNDERWORLD);
        i = 1340548;
        n = 1450019;
        break;
      default:
        o = _.int(f.ClientConstCrest.NPC_SYMBOL_DEFAULT);
        i = 14408394;
        n = 1644825;
    }
    t.setBackground(f.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, n);
    t.setSymbols(f.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, o, i);
    return t;
  };
  CastleNPCOwnerFactory.cleanPlayerName = function (e) {
    return e.split("-").join("NPC_");
  };
  return CastleNPCOwnerFactory;
}();
exports.CastleNPCOwnerFactory = T;
var v = require("./202.js");
var S = require("./316.js");