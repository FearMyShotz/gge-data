Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstEvent() {}
  ClientConstEvent.fillEventAreaTypes = function () {
    var e = new Map();
    e.set(o.EventConst.EVENTTYPE_DUNGEON, a.WorldConst.AREA_TYPE_EVENT_DUNGEON);
    e.set(o.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, a.WorldConst.AREA_TYPE_ALIEN_CAMP);
    e.set(o.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, a.WorldConst.AREA_TYPE_RED_ALIEN_CAMP);
    return e;
  };
  ClientConstEvent.getColossusSize = function (e, t) {
    switch (t) {
      case s.ClientConstCastle.COLOSS_DECO_WOD:
        return ClientConstEvent.colossusSize(e);
      case s.ClientConstCastle.COLOSS_RIDER_DECO_WOD:
        return ClientConstEvent.colossusRiderSize(e);
      case s.ClientConstCastle.COIN_COLOSSUS_DECO_WOD:
        return ClientConstEvent.coinColossusSize(e);
      default:
        return 1;
    }
  };
  ClientConstEvent.colossusSize = function (e) {
    if (e < ClientConstEvent.COLOSSUS_MIN_POINTS_LVL_2) {
      return 1;
    } else if (e < ClientConstEvent.COLOSSUS_MIN_POINTS_LVL_3) {
      return 2;
    } else {
      return 3;
    }
  };
  ClientConstEvent.colossusRiderSize = function (e) {
    if (e < ClientConstEvent.COLOSSUS_MIN_POINTS_LVL_2) {
      return 1;
    } else if (e < ClientConstEvent.COLOSSUS_RIDER_MIN_POINTS_LVL_3) {
      return 2;
    } else if (e < ClientConstEvent.COLOSSUS_RIDER_MIN_POINTS_LVL_4) {
      return 3;
    } else {
      return 4;
    }
  };
  ClientConstEvent.coinColossusSize = function (e) {
    if (e < ClientConstEvent.COLOSSUS_MIN_POINTS_LVL_2) {
      return 1;
    } else if (e < ClientConstEvent.COLOSSUS_RIDER_MIN_POINTS_LVL_3) {
      return 2;
    } else if (e < ClientConstEvent.COLOSSUS_RIDER_MIN_POINTS_LVL_4) {
      return 3;
    } else {
      return 4;
    }
  };
  ClientConstEvent.getUserInvasionGfxLevel = function (e) {
    if (e <= ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_1) {
      return 1;
    } else if (e <= ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_2) {
      return 2;
    } else if (e <= ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_3) {
      return 3;
    } else if (e <= ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_4) {
      return 4;
    } else {
      return 5;
    }
  };
  ClientConstEvent.__initialize_static_members = function () {
    ClientConstEvent.COLOSSUS_EVENTS = [o.EventConst.EVENTTYPE_COLOSSUS, o.EventConst.EVENTTYPE_HORSE_COLOSSUS, o.EventConst.EVENTTYPE_COIN_COLOSSUS];
    ClientConstEvent.COLOSSUS_MIN_POINTS_LVL_2 = 140;
    ClientConstEvent.COLOSSUS_MIN_POINTS_LVL_3 = 215;
    ClientConstEvent.COLOSSUS_RIDER_MIN_POINTS_LVL_3 = 200;
    ClientConstEvent.COLOSSUS_RIDER_MIN_POINTS_LVL_4 = 230;
    ClientConstEvent.EVENT_TO_AREA_TYPE = ClientConstEvent.fillEventAreaTypes();
    ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_1 = 10;
    ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_2 = 23;
    ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_3 = 49;
    ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_4 = 68;
    ClientConstEvent.USER_INVASION_MAX_LEVEL_GFX_5 = 70;
    ClientConstEvent.PRIMEDAY_DEFAULT = 0;
    ClientConstEvent.PRIMEDAY_USA = 1;
    ClientConstEvent.PRIMEDAY_ALIEN = 3;
    ClientConstEvent.PRIMEDAY_SUPER = 2;
    ClientConstEvent.PRIMEDAY_BERIMOND = 4;
    ClientConstEvent.PRIMEDAY_DEFENSE = 5;
    ClientConstEvent.PRIMEDAY_ATTACK = 6;
    ClientConstEvent.PRIMEDAY_EASTER = 7;
    ClientConstEvent.PRIMEDAY_WHEEL_OF_FORTUNE = 8;
    ClientConstEvent.PRIMEDAY_PARAGON_XP = 9;
    ClientConstEvent.PRIMEDAY_SUNDAY = 10;
    ClientConstEvent.PRIMEDAY_EVENING = 11;
    ClientConstEvent.PRIMEDAY_UNDERWORLD = 12;
    ClientConstEvent.PRIMEDAY_WISHING_WELL = 13;
    ClientConstEvent.PRIMEDAY_HALLOWEEN = 14;
    ClientConstEvent.PRIMEDAY_BLACK_FRIDAY = 15;
    ClientConstEvent.PRIMEDAY_WINTER = 16;
    ClientConstEvent.PRIMEDAY_SPRING_BUNNY = 17;
    ClientConstEvent.PRIMEDAY_MIDAS = 18;
    ClientConstEvent.PRIMEDAY_FURYS_BLADE = 19;
    ClientConstEvent.PRIMEDAY_WORLD_CUP = 20;
    ClientConstEvent.PRIMEDAY_BLOOD_CROW = 21;
    ClientConstEvent.PRIMEDAY_CHRISTMAS = 22;
    ClientConstEvent.PRIMEDAY_SUMMER = 23;
    ClientConstEvent.PRIMEDAY_ANNIVERSARY = 24;
    ClientConstEvent.PRIMEDAY_DEFAULT_CURRENCY = 100;
    ClientConstEvent.PRIMEDAY_USA_CURRENCY = 101;
    ClientConstEvent.PRIMEDAY_ALIEN_CURRENCY = 103;
    ClientConstEvent.PRIMEDAY_SUPER_CURRENCY = 102;
    ClientConstEvent.PRIMEDAY_BERIMOND_CURRENCY = 104;
    ClientConstEvent.PRIMEDAY_DEFENSE_CURRENCY = 105;
    ClientConstEvent.PRIMEDAY_ATTACK_CURRENCY = 106;
    ClientConstEvent.PRIMEDAY_EASTER_CURRENCY = 107;
    ClientConstEvent.PRIMEDAY_WHEEL_OF_FORTUNE_CURRENCY = 108;
    ClientConstEvent.PRIMEDAY_PARAGON_XP_CURRENCY = 109;
    ClientConstEvent.PRIMEDAY_SUNDAY_CURRENCY = 110;
    ClientConstEvent.PRIMEDAY_EVENING_CURRENCY = 111;
    ClientConstEvent.PRIMEDAY_UNDERWORLD_CURRENCY = 112;
    ClientConstEvent.PRIMEDAY_WISHING_WELL_CURRENCY = 113;
    ClientConstEvent.PRIMEDAY_HALLOWEEN_CURRENCY = 114;
    ClientConstEvent.PRIMEDAY_BLACK_FRIDAY_CURRENCY = 115;
    ClientConstEvent.PRIMEDAY_WINTER_CURRENCY = 116;
  };
  return ClientConstEvent;
}();
exports.ClientConstEvent = n;
var o = require("./5.js");
var a = require("./5.js");
var s = require("./18.js");
n.__initialize_static_members();