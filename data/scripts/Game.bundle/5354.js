Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function MapmovementFactory() {}
  MapmovementFactory.parseMapMovement = function (e) {
    if (!e) {
      return null;
    }
    var t;
    switch (g.int(e.M.T)) {
      case h.ClientConstCastle.MOVEMENTTYPE_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_NPC_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_FACTION_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CITY_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CAMP_TAUNT_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CAMP_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_COLLECTOR:
      case h.ClientConstCastle.MOVEMENTTYPE_COLLECTOR_TEMP_SERVER:
      case h.ClientConstCastle.MOVEMENTTYPE_RANKSWAP_TEMP_SERVER:
      case h.ClientConstCastle.MOVEMENTTYPE_DAIMYO_CASTLE_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_DAIMYO_TAUNT_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_BATTLE_GROUND_COLLECTOR_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_TEMPSERVER_PVE_CHARGE:
      case h.ClientConstCastle.MOVEMENTTYPE_TEMPSERVER_PVP_CHARGE:
      case h.ClientConstCastle.MOVEMENTTYPE_ABG_ALLIANCE_TOWER_ATTACK:
      case h.ClientConstCastle.MOVEMENTTYPE_WOLFKING_TAUNT_ATTACK:
        t = new a.ArmyAttackMapmovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_ALIEN_ATTACK:
        t = new o.AlienAttackMovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_DEFENCE:
      case h.ClientConstCastle.MOVEMENTTYPE_DAIMYO_TOWNSHIP_DEFENSE:
      case h.ClientConstCastle.MOVEMENTTYPE_ABG_ALLIANCE_TOWER_SUPPORT:
        t = new d.SupportDefenceMapmovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_TRAVEL:
        t = new s.ArmyTravelMapMovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_SPY:
        t = new u.SpyMapmovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_PLAGUEMONK:
        t = new l.PlaguemonkMapmovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_MARKET:
        t = new r.MarketMapmovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_SIEGE:
      case h.ClientConstCastle.MOVEMENTTYPE_OCCUPY_FACTION:
        t = new c.SiegeMapmovementVO();
        break;
      case h.ClientConstCastle.MOVEMENTTYPE_TREASUREHUNT:
        t = new p.TreasureHuntMovementVO();
    }
    t.loadFromParamObject(e);
    return t;
  };
  return MapmovementFactory;
}();
exports.MapmovementFactory = n;
var o = require("./933.js");
var a = require("./385.js");
var s = require("./733.js");
var r = require("./1324.js");
var l = require("./1325.js");
var c = require("./935.js");
var u = require("./1326.js");
var d = require("./1327.js");
var p = require("./1328.js");
var h = require("./18.js");
var g = require("./6.js");