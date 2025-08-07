Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleBookmarkHelper() {}
  CastleBookmarkHelper.isBookmarkableForPlayer = function (e) {
    if (!e) {
      return false;
    }
    if (e.isOwnMapobject) {
      return false;
    }
    switch (e.areaType) {
      case o.WorldConst.AREA_TYPE_EMPTY:
      case o.WorldConst.AREA_TYPE_NO_LANDMARK:
      case o.WorldConst.AREA_TYPE_PLAGUE_AREA:
      case o.WorldConst.AREA_TYPE_SHADOW_AREA:
      case o.WorldConst.AREA_TYPE_TREASURE_CAMP:
      case o.WorldConst.AREA_TYPE_TREASURE_DUNGEON:
      case o.WorldConst.AREA_TYPE_TROOP_HOSTEL:
        return false;
    }
    return true;
  };
  CastleBookmarkHelper.isBookmarkableForAlliance = function (e) {
    if (!e) {
      return false;
    }
    switch (e.areaType) {
      case o.WorldConst.AREA_TYPE_EMPTY:
      case o.WorldConst.AREA_TYPE_DUNGEON:
      case o.WorldConst.AREA_TYPE_TREASURE_DUNGEON:
      case o.WorldConst.AREA_TYPE_TREASURE_CAMP:
      case o.WorldConst.AREA_TYPE_SHADOW_AREA:
      case o.WorldConst.AREA_TYPE_EVENT_DUNGEON:
      case o.WorldConst.AREA_TYPE_NO_LANDMARK:
      case o.WorldConst.AREA_TYPE_PLAGUE_AREA:
      case o.WorldConst.AREA_TYPE_ALIEN_CAMP:
      case o.WorldConst.AREA_TYPE_RED_ALIEN_CAMP:
      case o.WorldConst.AREA_TYPE_NOMAD_CAMP:
      case o.WorldConst.AREA_TYPE_SAMURAI_CAMP:
      case o.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP:
      case o.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP:
      case o.WorldConst.AREA_TYPE_DAIMYO_CASTLE:
      case o.WorldConst.AREA_TYPE_WOLF_KING:
        return false;
      case o.WorldConst.AREA_TYPE_LABORATORY:
      case o.WorldConst.AREA_TYPE_MONUMENT:
        return true;
    }
    return !e.isOwnMapobject;
  };
  CastleBookmarkHelper.getBookmarkButtonConfiguration = function (e) {
    var t = CastleBookmarkHelper.isBookmarkableForPlayer(e);
    var i = s.CastleModel.bookmarkData.isPlayerListFull;
    var n = s.CastleModel.userData.isInAlliance;
    var o = CastleBookmarkHelper.isBookmarkableForAlliance(e);
    var a = s.CastleModel.bookmarkData.isAllianceListFull;
    var c = s.CastleModel.bookmarkData.getBookmarkForWMO(e, l.EWorldmapBookmarkType.getPlayerTypes()) != null;
    var u = t && !i;
    var d = o && n && !a;
    var p = s.CastleModel.userData.getSetBookmarkTooltipInner(u, d, c, a, i, false);
    if (u) {
      return CastleBookmarkHelper.pack(true, p, r.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_PLAYER_BOOKMARK);
    } else if (d) {
      return CastleBookmarkHelper.pack(true, p, r.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_ALLIANCE_BOOKMARK);
    } else {
      return CastleBookmarkHelper.pack(false, p);
    }
  };
  CastleBookmarkHelper.pack = function (e, t, i = a.int(r.ButtonBookmarkConfigVO.ACTION_NONE)) {
    return new r.ButtonBookmarkConfigVO(e, t, i);
  };
  return CastleBookmarkHelper;
}();
exports.CastleBookmarkHelper = n;
var o = require("./5.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./1291.js");
var l = require("./203.js");