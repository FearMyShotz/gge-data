Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./137.js");
var p = require("./4.js");
var h = require("./386.js");
var g = createjs.Point;
var C = function () {
  function MapHelper() {}
  MapHelper.pixelPosToSectorGridPos = function (e) {
    return new g(Math.floor(e.x / u.ClientConstCastle.SECTORPIXELSIZE_X), Math.floor(e.y / u.ClientConstCastle.SECTORPIXELSIZE_Y));
  };
  MapHelper.pixelPosToAreaGridPos = function (e) {
    return new g(Math.floor(e.x / u.ClientConstCastle.MAPTILESIZE_X), Math.floor(e.y / u.ClientConstCastle.MAPTILESIZE_Y));
  };
  MapHelper.pixelPosToAreaGridPosUnrounded = function (e) {
    return new g(e.x / u.ClientConstCastle.MAPTILESIZE_X, e.y / u.ClientConstCastle.MAPTILESIZE_Y);
  };
  MapHelper.sectorGridPosToPixelpos = function (e) {
    return new g(e.x * a.WorldConst.SECTOR_WIDTH * u.ClientConstCastle.MAPTILESIZE_X, e.y * a.WorldConst.SECTOR_HEIGHT * u.ClientConstCastle.MAPTILESIZE_Y);
  };
  MapHelper.getDistanceByMapobjects = function (e, t, i = true, o = -1) {
    if (o == u.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) {
      return r.TravelConst.COLLECTOR_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_ALIEN_CAMP) > -1 && i) {
      return r.TravelConst.ALIEN_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) > -1 && i) {
      return r.TravelConst.ALIEN_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_NOMAD_CAMP) > -1 && i) {
      return r.TravelConst.NOMAD_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) > -1 && i) {
      return r.TravelConst.ALLIANCE_INVASION_CAMP_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_SAMURAI_CAMP) > -1 && i) {
      return r.TravelConst.SAMURAI_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_DAIMYO_CASTLE) > -1 && i) {
      return r.TravelConst.DAIMYO_CASTLE_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) > -1 && i) {
      return r.TravelConst.DAIMYO_TOWNSHIP_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) > -1 && i) {
      return r.TravelConst.FACTION_TRAVEL_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) > -1 && i) {
      return r.TravelConst.ALLIANCE_BATTLE_GROUND_TOWER_DISTANCE;
    }
    if ([t.areaType, e.areaType].indexOf(a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER) > -1 && i) {
      return r.TravelConst.ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_DISTANCE;
    }
    if (t.areaType == a.WorldConst.AREA_TYPE_FACTION_VILLAGE || t.areaType == a.WorldConst.AREA_TYPE_FACTION_TOWER || t.areaType == a.WorldConst.AREA_TYPE_FACTION_CAPITAL) {
      if (MapHelper.factionEventVO) {
        var s = c.int(t.specialCampID);
        return MapHelper.factionEventVO.distanceMap.get(s);
      }
    } else if (MapHelper.isTempServerRankSwapAttack(t, o)) {
      return r.TravelConst.TEMPSERVER_RANKSWAP_TRAVEL_DISTANCE;
    }
    return n.MathBase.round(MapHelper.getShortestDistance(e.absAreaPos, t.absAreaPos), 1);
  };
  MapHelper.getShortestDistance = function (e, t) {
    if (!e || !t) {
      return 0;
    }
    var i = c.int(e.y - t.y);
    var n = Math.abs(e.x - t.x);
    var o = u.ClientConstCastle.WORLD_WIDTH - n;
    var a = c.int(Math.min(n, o));
    var s = Math.sqrt(a * a + i * i);
    return s = Math.round(s * 10) / 10;
  };
  MapHelper.getRotationToShortestDistance = function (e, t) {
    var i = e.x - t.x;
    var n = e.y - t.y;
    if (Math.abs(i) > u.ClientConstCastle.WORLD_WIDTH / 2) {
      if (i > 0) {
        i -= u.ClientConstCastle.WORLD_WIDTH;
      } else {
        i += u.ClientConstCastle.WORLD_WIDTH;
      }
    }
    return Math.atan2(n, i) * 180 / Math.PI - 90;
  };
  MapHelper.areaToPixelTopLeft = function (e) {
    var t = new g();
    t.x = e.x * u.ClientConstCastle.MAPTILESIZE_X;
    t.y = e.y * u.ClientConstCastle.MAPTILESIZE_Y;
    return t;
  };
  MapHelper.areaToPixelCenter = function (e) {
    var t = new g();
    t.x = e.x * u.ClientConstCastle.MAPTILESIZE_X;
    t.y = e.y * u.ClientConstCastle.MAPTILESIZE_Y;
    t.x += u.ClientConstCastle.MAPTILESIZE_X / 2;
    t.y += u.ClientConstCastle.MAPTILESIZE_Y / 2;
    return t;
  };
  MapHelper.getRealPos = function (e) {
    var t = new g();
    t.y = e.y;
    if (e.x % u.ClientConstCastle.WORLD_WIDTH < 0) {
      t.x = e.x % u.ClientConstCastle.WORLD_WIDTH + u.ClientConstCastle.WORLD_WIDTH;
    } else {
      t.x = e.x % u.ClientConstCastle.WORLD_WIDTH;
    }
    return t;
  };
  Object.defineProperty(MapHelper, "factionEventVO", {
    get: function () {
      return p.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  MapHelper.isTempServerRankSwapAttack = function (e, t) {
    return !!o.EnvGlobalsHandler.globals.isOnTemporaryServer && e.areaType == a.WorldConst.AREA_TYPE_CASTLE && e.kingdomID == s.WorldClassic.KINGDOM_ID && t == u.ClientConstCastle.ACTION_TYPE_ATTACK && !!d.TempServerHelper.tmpServerEvent && d.TempServerHelper.tmpServerEvent.settingVO.scoringSystem == h.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
  };
  return MapHelper;
}();
exports.MapHelper = C;