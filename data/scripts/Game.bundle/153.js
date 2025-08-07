Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = function (e) {
  function KingdomEnum(t, i, n, a = 0, s = 0, r = 0) {
    var l = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    l._id = 0;
    l._symbolColor = 0;
    l._symbolBgColor = 0;
    l._mapBackgroundColor = 0;
    l._xmlName = i;
    l._id = n;
    l._symbolColor = a;
    l._symbolBgColor = s;
    l._mapBackgroundColor = r;
    return l;
  }
  n.__extends(KingdomEnum, e);
  KingdomEnum.getTypeById = function (e) {
    return this.getByProperty(KingdomEnum, "id", e, KingdomEnum.CLASSIC);
  };
  KingdomEnum.getTypeByXMLName = function (e) {
    return this.getByProperty(KingdomEnum, "xmlName", e, KingdomEnum.CLASSIC);
  };
  KingdomEnum.getNPCOwnerList = function () {
    return [KingdomEnum.CLASSIC, KingdomEnum.DESSERT, KingdomEnum.ICE, KingdomEnum.VOLCANO, KingdomEnum.FACTION, KingdomEnum.ISLAND];
  };
  Object.defineProperty(KingdomEnum.prototype, "isForeignKingdom", {
    get: function () {
      switch (this) {
        case KingdomEnum.CLASSIC:
        case KingdomEnum.ICE:
        case KingdomEnum.DESSERT:
        case KingdomEnum.VOLCANO:
        case KingdomEnum.ISLAND:
          return true;
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "xmlName", {
    get: function () {
      return this._xmlName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "symbolColor", {
    get: function () {
      return this._symbolColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "symbolBgColor", {
    get: function () {
      return this._symbolBgColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "mapBackgroundColor", {
    get: function () {
      return this._mapBackgroundColor;
    },
    enumerable: true,
    configurable: true
  });
  KingdomEnum.__initialize_static_members = function () {
    KingdomEnum.CLASSIC = new KingdomEnum("classic", "Classic", r.WorldClassic.KINGDOM_ID, 2957851, 8295963, 8494642);
    KingdomEnum.DESSERT = new KingdomEnum("desert", "Dessert", l.WorldDessert.KINGDOM_ID, 16366401, 11010048, 16043657);
    KingdomEnum.ICE = new KingdomEnum("ice", "Icecream", c.WorldIce.KINGDOM_ID, 15921906, 18298, 15921906);
    KingdomEnum.VOLCANO = new KingdomEnum("volcano", "Volcano", d.WorldVolcano.KINGDOM_ID, 14835968, 2302755, 5457207);
    KingdomEnum.ISLAND = new KingdomEnum("island", "Eiland", u.WorldIsland.KINGDOM_ID, 16777215, 760717, 758204);
    KingdomEnum.FACTION = new KingdomEnum("faction", "Faction", a.FactionConst.KINGDOM_ID, 1973790, 8353558, 8356408);
    KingdomEnum.SEAQUEEN = new KingdomEnum("seaqueen", "Seaqueen", s.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY, 990246, 15132638);
    KingdomEnum.THORNKING = new KingdomEnum("thornking", "Thornking", s.TreasureMapsConst.MAP_ID_THORNKING_EASY, 2498586, 7704832);
    KingdomEnum.UNDERWORLD = new KingdomEnum("underworld", "Underworld", s.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, 1340548, 1450019);
    KingdomEnum.ALLIANCE_BATTLE_GROUND_MAYA = new KingdomEnum("maya", "Maya", 1001, 16494651, 1791030);
  };
  return KingdomEnum;
}(require("./84.js").CastleEnum);
exports.KingdomEnum = p;
p.__initialize_static_members();