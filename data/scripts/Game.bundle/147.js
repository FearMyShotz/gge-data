Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./882.js");
var o = function () {
  function WorldmapObjectFactory() {}
  WorldmapObjectFactory.createRawWorldmapObjectVO = function (e) {
    if (WorldmapObjectFactory.mapObjectVOs.get(e)) {
      return new (WorldmapObjectFactory.mapObjectVOs.get(e))();
    } else {
      return null;
    }
  };
  WorldmapObjectFactory.parseWorldMapArea = function (e, t = true) {
    if (!e) {
      return null;
    }
    var i = k.int(e[0]);
    var n = WorldmapObjectFactory.createRawWorldmapObjectVO(i);
    switch (i) {
      case N.WorldConst.AREA_TYPE_DUNGEON:
        WorldmapObjectFactory.initDungeonByXY(n, e[1], e[2], e[6]);
    }
    if (t) {
      n.parseAreaInfo(e);
    }
    return n;
  };
  WorldmapObjectFactory.generateBossDungeonByXY = function (e, t, i) {
    var n = new s.BossdungeonMapobjectVO();
    WorldmapObjectFactory.initBossDungeonByXY(n, e, t, i);
    return n;
  };
  WorldmapObjectFactory.initDungeonByXY = function (e, t, i, n) {
    e.kingdomID = n;
    e.mapID = -1;
    e.absAreaPosX = t;
    e.absAreaPosY = i;
    var o = 0;
    if (n == F.WorldClassic.KINGDOM_ID) {
      var a = new w.SimpleRandom(e.absAreaPosX * e.absAreaPosY);
      o = k.int(x.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID - a.nextInt(B.DungeonConst.DUNGEON_PLAYER_NAME_COUNT));
    } else {
      o = k.int(x.ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_FIRST_ID - (n - 1));
    }
    e.ownerInfo = H.CastleModel.otherPlayerData.getOwnerInfoVO(o);
  };
  WorldmapObjectFactory.initBossDungeonByXY = function (e, t, i, n) {
    e.kingdomID = n;
    e.mapID = -1;
    e.absAreaPosX = t;
    e.absAreaPosY = i;
    e.ownerInfo = H.CastleModel.otherPlayerData.getOwnerInfoVO(x.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID - (n - 1));
  };
  WorldmapObjectFactory.__initialize_static_members = function () {
    var e;
    (e = new Map()).set(N.WorldConst.AREA_TYPE_CASTLE, l.CastleMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_OUTPOST, T.OutpostMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_TREASURE_CAMP, d.EventCampMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_PLAGUE_AREA, S.PlagueareaMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_KINGDOM_CASTLE, f.KingdomCastleMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_VILLAGE, V.VillageMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_KINGS_TOWER, O.KingstowerMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_BOSS_DUNGEON, s.BossdungeonMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_DUNGEON, u.DungeonMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_EVENT_DUNGEON, p.EventdungeonMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_CAPITAL, r.CapitalMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_FACTION_CAMP, h.FactionCampMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_FACTION_CAPITAL, g.FactionCapitalMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_FACTION_TOWER, _.FactionTowerMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_FACTION_VILLAGE, m.FactionVillageMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_TREASURE_DUNGEON, R.TreasureDungeonMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_ALIEN_CAMP, a.AlienInvasionMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, A.RedAlienInvasionMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_METROPOL, y.MetropolMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_ISLE_DUNGEON, c.DungeonIsleMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_ISLE_RESOURCE, L.ResourceIsleMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_EMPTY, U.DummyMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_MONUMENT, b.MonumentMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_LABORATORY, E.LaboratoryMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_NOMAD_CAMP, D.NomadCampMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_SAMURAI_CAMP, P.SamuraiCampMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, C.FactionInvasionCampMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, I.NomadKhanCampMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_DYNAMIC, v.PlaceholderMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_DAIMYO_CASTLE, j.DaimyoCastleMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP, W.DaimyoTownshipMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER, n.ABGAllianceTowerMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER, Y.ABGResourceTowerMapobjectVO);
    e.set(N.WorldConst.AREA_TYPE_WOLF_KING, G.WolfkingCastleMapObjectVO);
    e.set(N.WorldConst.AREA_TYPE_SHADOW_AREA, M.ShadowareaMapobjectVO);
    WorldmapObjectFactory.mapObjectVOs = e;
  };
  return WorldmapObjectFactory;
}();
exports.WorldmapObjectFactory = o;
var a = require("./2119.js");
var s = require("./883.js");
var r = require("./499.js");
var l = require("./501.js");
var c = require("./2128.js");
var u = require("./574.js");
var d = require("./732.js");
var p = require("./968.js");
var h = require("./596.js");
var g = require("./619.js");
var C = require("./2581.js");
var _ = require("./620.js");
var m = require("./757.js");
var f = require("./911.js");
var O = require("./508.js");
var E = require("./703.js");
var y = require("./577.js");
var b = require("./578.js");
var D = require("./2582.js");
var I = require("./2583.js");
var T = require("./500.js");
var v = require("./2584.js");
var S = require("./1405.js");
var A = require("./2585.js");
var L = require("./912.js");
var P = require("./2586.js");
var M = require("./2587.js");
var R = require("./603.js");
var V = require("./597.js");
var x = require("./148.js");
var w = require("./2.js");
var B = require("./5.js");
var F = require("./5.js");
var N = require("./5.js");
var k = require("./6.js");
var U = require("./1323.js");
var G = require("./967.js");
var H = require("./4.js");
var j = require("./526.js");
var W = require("./581.js");
var Y = require("./1415.js");
o.__initialize_static_members();