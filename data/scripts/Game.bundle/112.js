Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./44.js");
var d = function () {
  function PlayerHelper() {}
  PlayerHelper.isDungeonPlayer = function (e) {
    return e <= p.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID && e >= p.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_LAST_ID || e <= p.ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_FIRST_ID && e >= p.ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_LAST_ID;
  };
  PlayerHelper.isOutpostPlayer = function (e) {
    return e == s.OutpostConst.OUTPOST_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isMetropolPlayer = function (e) {
    return e == s.OutpostConst.METROPOL_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isCapitalPlayer = function (e) {
    return e == s.OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID || e == s.OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID || e == s.OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID || e == s.OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isEmptyMapObjectOwner = function (e) {
    var t = PlayerHelper.isDungeonPlayer(e);
    return t = (t = (t = (t = (t = (t = (t = t || PlayerHelper.isOutpostPlayer(e)) || PlayerHelper.isMetropolPlayer(e)) || PlayerHelper.isCapitalPlayer(e)) || PlayerHelper.isKingstowerPlayer(e)) || PlayerHelper.isMonumentPlayer(e)) || PlayerHelper.isLaboratoryPlayer(e)) || PlayerHelper.isMonumentDungeon(e);
  };
  PlayerHelper.isPlagueMonkPlayer = function (e) {
    return e == l.SpyConst.PLAGUEMONK_OWNER_ID;
  };
  PlayerHelper.isKingstowerPlayer = function (e) {
    return e == s.OutpostConst.KINGS_TOWER_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isMonumentPlayer = function (e) {
    return e == s.OutpostConst.MONUMENT_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isLaboratoryPlayer = function (e) {
    return e == s.OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID || e == s.OutpostConst.LABORATORY_ICE_OWNER_ID || e == s.OutpostConst.LABORATORY_DESERT_OWNER_ID || e == s.OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
  };
  PlayerHelper.isBossDungeonPlayer = function (e) {
    return e <= p.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID && e >= p.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_LAST_ID;
  };
  PlayerHelper.isMonumentDungeon = function (e) {
    return e == p.ClientConstNPCs.NPC_ID_MONUMENT;
  };
  PlayerHelper.isNPCPlayer = function (e) {
    return e < 0;
  };
  PlayerHelper.isAlienInvasion = function (e) {
    return e == p.ClientConstNPCs.NPC_ID_USER_INVASION || e == p.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION;
  };
  PlayerHelper.isNpcPvpPlayer = function (e) {
    return PlayerHelper.isAlienInvasion(e) || PlayerHelper.isCollectorPlayer(e);
  };
  PlayerHelper.isCollectorPlayer = function (e) {
    switch (e) {
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case p.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
        return true;
    }
    return false;
  };
  PlayerHelper.isDummyPlayer = function (e) {
    var t = h.CastleModel.otherPlayerData.getOwnerInfoVO(e);
    return !!t && t.isDummy;
  };
  PlayerHelper.isFactionPlayer = function (e) {
    return e == p.ClientConstNPCs.NPC_ID_FACTION_RED || e == p.ClientConstNPCs.NPC_ID_FACTION_BLUE;
  };
  PlayerHelper.isNomadPlayer = function (e) {
    return e <= p.ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID && e >= p.ClientConstNPCs.NPC_ID_NOMAD_CAMP_LAST_ID || e == p.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP;
  };
  PlayerHelper.isSamuraiPlayer = function (e) {
    return e == p.ClientConstNPCs.NPC_ID_SAMURAI_INVASION;
  };
  PlayerHelper.isInvasionPlayer = function (e) {
    return PlayerHelper.isFactionPlayer(e) || PlayerHelper.isNomadPlayer(e) || PlayerHelper.isSamuraiPlayer(e);
  };
  PlayerHelper.isEilandDungeonPlayer = function (e) {
    return e == p.ClientConstNPCs.NPC_ID_EILAND_DUNGEON;
  };
  PlayerHelper.isEilandVillagePlayer = function (e) {
    return e == p.ClientConstNPCs.NPC_ID_EILAND_VILLAGE;
  };
  PlayerHelper.getNPCCastleName = function (e, t, i = 0) {
    var s = "";
    if (i == o.WorldConst.AREA_TYPE_EVENT_DUNGEON) {
      s = "eventDungeon_castleName_" + t;
    } else if (PlayerHelper.isMonumentDungeon(t)) {
      s = "monument";
    } else if (PlayerHelper.isDungeonPlayer(t)) {
      s = t == p.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER ? "dialog_treasureMap_DungeonTooltip" : u.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_" + e);
    } else if (PlayerHelper.isNomadPlayer(t)) {
      s = t == p.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP ? "kingdom_khanCamp_castleName_" + e : "kingdom_nomad_castleName_" + e;
    } else if (PlayerHelper.isSamuraiPlayer(t)) {
      s = "kingdom_samurai_castleName_" + e;
    } else if (t == p.ClientConstNPCs.NPC_ID_USER_INVASION) {
      s = "alienInvasion_castleName";
    } else if (t == p.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION) {
      s = "redAlienInvasion_castleName";
    } else if (PlayerHelper.isBossDungeonPlayer(t)) {
      s = "kingdom_bossDungeon_castleName_" + e;
    } else if (PlayerHelper.isEilandDungeonPlayer(t)) {
      s = "kingdom_dungeon_castleName_" + n.WorldIsland.KINGDOM_ID;
    } else if (r.VillageConst.isVillagePlayer(t) || i == o.WorldConst.AREA_TYPE_VILLAGE || i == o.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
      s = t == p.ClientConstNPCs.NPC_ID_EILAND_VILLAGE || i == o.WorldConst.AREA_TYPE_ISLE_RESOURCE ? "kingdom_eiLand_village" : "village";
    } else if (PlayerHelper.isOutpostPlayer(t) || i == o.WorldConst.AREA_TYPE_OUTPOST) {
      s = "outpost";
    } else if (PlayerHelper.isCapitalPlayer(t) || i == o.WorldConst.AREA_TYPE_CAPITAL) {
      s = u.SpecialServerHelper.checkTextIDForSkinText("capital");
    } else if (PlayerHelper.isMetropolPlayer(t) || i == o.WorldConst.AREA_TYPE_METROPOL) {
      s = u.SpecialServerHelper.checkTextIDForSkinText("metropol");
    } else if (PlayerHelper.isKingstowerPlayer(t) || i == o.WorldConst.AREA_TYPE_KINGS_TOWER) {
      s = u.SpecialServerHelper.checkTextIDForSkinText("kingstower");
    } else if (PlayerHelper.isMonumentPlayer(t) || i == o.WorldConst.AREA_TYPE_MONUMENT) {
      s = u.SpecialServerHelper.checkTextIDForSkinText("monument");
    } else if (PlayerHelper.isLaboratoryPlayer(t) || i == o.WorldConst.AREA_TYPE_LABORATORY) {
      s = "laboratory";
    } else if (PlayerHelper.isFactionPlayer(t)) {
      if (i == o.WorldConst.AREA_TYPE_FACTION_CAPITAL) {
        s = "faction_capital";
      } else if (i == o.WorldConst.AREA_TYPE_FACTION_TOWER) {
        s = "faction_tower";
      } else if (i == o.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
        s = "faction_village";
      } else if (i == o.WorldConst.AREA_TYPE_FACTION_CAPITAL) {
        s = "faction_capital";
      } else if (i == o.WorldConst.AREA_TYPE_FACTION_TOWER) {
        s = "faction_tower";
      } else if (i == o.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
        s = "faction_village";
      } else if (i == o.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) {
        s = t == a.DungeonConst.BLUE_FACTION_KING ? "dialog_berimondInvasion_blueCamp" : "dialog_berimondInvasion_redCamp";
      }
    } else if (t == p.ClientConstNPCs.NPC_ID_THORNKING_DUNGEON || t == p.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON || t == p.ClientConstNPCs.NPC_ID_SEEQUEEN_DUNGEON || t == p.ClientConstNPCs.NPC_ID_UNDERWORLD_DUNGEON) {
      s = "dialog_seasonEvent_2_Dungeon";
    } else if (t == p.ClientConstNPCs.NPC_ID_THORNKING_VILLAGE) {
      s = "village";
    } else if (t == p.ClientConstNPCs.NPC_ID_SEEQUEEN_SHIPS) {
      s = "dialog_seasonEvent_4_konvy";
    } else if (t == p.ClientConstNPCs.NPC_ID_UNDERWORLD_VILLAGE) {
      s = "dialog_seasonEvent_64_village";
    } else if (t == p.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON) {
      s = "dialog_treasureMap_DungeonTooltip";
    } else if (t == p.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE) {
      s = "DaimyoCastle";
    } else if (t == p.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP) {
      s = "township";
    } else if (i == o.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER) {
      s = "resourceTower_maya";
    } else if (i == o.WorldConst.AREA_TYPE_WOLF_KING) {
      s = "kingdom_dungeon_castleName_wolfgard";
    }
    return c.Localize.text(s);
  };
  PlayerHelper.isFactionInvasionPlayer = function (e) {
    return e == a.DungeonConst.BLUE_FACTION_KING || e == a.DungeonConst.RED_FACTION_KING;
  };
  return PlayerHelper;
}();
exports.PlayerHelper = d;
var p = require("./148.js");
var h = require("./4.js");