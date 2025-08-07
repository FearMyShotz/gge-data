Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoObjectGroupEnum(t, i, n) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, o.BasicEnum.instantiationKey) || this)._dataClass = i;
    a._viewClass = n;
    return a;
  }
  n.__extends(IsoObjectGroupEnum, e);
  Object.defineProperty(IsoObjectGroupEnum.prototype, "needsAdvancedUpdates", {
    get: function () {
      switch (this) {
        case IsoObjectGroupEnum.BACKGROUND:
        case IsoObjectGroupEnum.EFFECTS:
        case IsoObjectGroupEnum.FLOOR_MARKS:
        case IsoObjectGroupEnum.EXPANSIONS:
        case IsoObjectGroupEnum.MOVEMENTS:
        case IsoObjectGroupEnum.JUDGEMENTS:
        case IsoObjectGroupEnum.TREASURE_CHESTS:
        case IsoObjectGroupEnum.EVENT_BUILDINGS:
        case IsoObjectGroupEnum.UNKNOWN:
          return false;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoObjectGroupEnum.prototype, "dataClass", {
    get: function () {
      return this._dataClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoObjectGroupEnum.prototype, "viewClass", {
    get: function () {
      return this._viewClass;
    },
    enumerable: true,
    configurable: true
  });
  IsoObjectGroupEnum.__initialize_static_members = function () {
    IsoObjectGroupEnum.UNKNOWN = new IsoObjectGroupEnum("unknown", null, null);
    IsoObjectGroupEnum.BACKGROUND = new IsoObjectGroupEnum("background", s.IsoDataObjectGroupBackground, m.IsoViewObjectGroupBackground);
    IsoObjectGroupEnum.GROUNDS = new IsoObjectGroupEnum("ground", d.IsoDataObjectGroupGround, I.IsoViewObjectGroupGround);
    IsoObjectGroupEnum.DEFENCE = new IsoObjectGroupEnum("defence", r.IsoDataObjectGroupDefence, f.IsoViewObjectGroupDefence);
    IsoObjectGroupEnum.INNER_BUILDINGS = new IsoObjectGroupEnum("innerBuilding", p.IsoDataObjectGroupInnerBuilding, T.IsoViewObjectGroupInnerBuilding);
    IsoObjectGroupEnum.EVENT_BUILDINGS = new IsoObjectGroupEnum("eventBuilding", l.IsoDataObjectGroupEvent, E.IsoViewObjectGroupEvent);
    IsoObjectGroupEnum.TREASURE_CHESTS = new IsoObjectGroupEnum("treasureChest", _.IsoDataObjectGroupTreasureChest, L.IsoViewObjectGroupTreasureChest);
    IsoObjectGroupEnum.SURROUNDINGS = new IsoObjectGroupEnum("surrounding", C.IsoDataObjectGroupSurrounding, A.IsoViewObjectGroupSurrounding);
    IsoObjectGroupEnum.FIXED_POSITIONS = new IsoObjectGroupEnum("fixedPosition", u.IsoDataObjectGroupFixedPosition, b.IsoViewObjectGroupFixedPosition);
    IsoObjectGroupEnum.JUDGEMENTS = new IsoObjectGroupEnum("judgements", h.IsoDataObjectGroupJudgement, v.IsoViewObjectGroupJudgements);
    IsoObjectGroupEnum.EFFECTS = new IsoObjectGroupEnum("effects", null, O.IsoViewObjectGroupEffect);
    IsoObjectGroupEnum.FLOOR_MARKS = new IsoObjectGroupEnum("floorMark", null, D.IsoViewObjectGroupFloorMark);
    IsoObjectGroupEnum.EXPANSIONS = new IsoObjectGroupEnum("expansion", c.IsoDataObjectGroupExpansion, y.IsoViewObjectGroupExpansion);
    IsoObjectGroupEnum.MOVEMENTS = new IsoObjectGroupEnum("movements", g.IsoDataObjectGroupMovement, S.IsoViewObjectGroupMovement);
  };
  return IsoObjectGroupEnum;
}(require("./84.js").CastleEnum);
exports.IsoObjectGroupEnum = a;
var s = require("./2041.js");
var r = require("./2735.js");
var l = require("./2744.js");
var c = require("./2752.js");
var u = require("./2753.js");
var d = require("./2755.js");
var p = require("./2756.js");
var h = require("./2757.js");
var g = require("./2760.js");
var C = require("./2764.js");
var _ = require("./2774.js");
var m = require("./2775.js");
var f = require("./2776.js");
var O = require("./2807.js");
var E = require("./2808.js");
var y = require("./2809.js");
var b = require("./2810.js");
var D = require("./2811.js");
var I = require("./2813.js");
var T = require("./2814.js");
var v = require("./2815.js");
var S = require("./2817.js");
var A = require("./2818.js");
var L = require("./2819.js");
a.__initialize_static_members();