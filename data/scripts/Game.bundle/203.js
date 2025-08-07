Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function EWorldmapBookmarkType(t, i) {
    var n = this;
    n._typeIndex = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._typeIndex = i;
    return n;
  }
  n.__extends(EWorldmapBookmarkType, e);
  EWorldmapBookmarkType.getTypeById = function (e) {
    return this.getByProperty(EWorldmapBookmarkType, "typeIndex", e, null);
  };
  EWorldmapBookmarkType.getPlayerTypes = function () {
    var e = [];
    e.push(EWorldmapBookmarkType.PLAYER_ENEMY);
    e.push(EWorldmapBookmarkType.PLAYER_FRIEND);
    return e;
  };
  EWorldmapBookmarkType.getAllianceTypes = function () {
    var e = [];
    e.push(EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK);
    e.push(EWorldmapBookmarkType.ALLIANCE_DEFEND);
    e.push(EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER);
    return e;
  };
  Object.defineProperty(EWorldmapBookmarkType.prototype, "typeIndex", {
    get: function () {
      return this._typeIndex;
    },
    enumerable: true,
    configurable: true
  });
  EWorldmapBookmarkType.__initialize_static_members = function () {
    EWorldmapBookmarkType.PLAYER_ENEMY = new EWorldmapBookmarkType("bookmark_player_enemy", a.AllianceConst.BOOKMARK_TYPE_PLAYER_ENEMY);
    EWorldmapBookmarkType.PLAYER_FRIEND = new EWorldmapBookmarkType("bookmark_player_friend", a.AllianceConst.BOOKMARK_TYPE_PLAYER_FRIEND);
    EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK = new EWorldmapBookmarkType("bookmark_alliance_free_attack", a.AllianceConst.BOOKMARK_TYPE_ALLIANCE_FREE_ATTACK);
    EWorldmapBookmarkType.ALLIANCE_DEFEND = new EWorldmapBookmarkType("bookmark_alliance_defend", a.AllianceConst.BOOKMARK_TYPE_ALLIANCE_DEFEND);
    EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER = new EWorldmapBookmarkType("bookmark_alliance_attack_order", a.AllianceConst.BOOKMARK_TYPE_ALLIANCE_ATTACK_ORDER);
  };
  return EWorldmapBookmarkType;
}(o.BasicEnum);
exports.EWorldmapBookmarkType = s;
s.__initialize_static_members();