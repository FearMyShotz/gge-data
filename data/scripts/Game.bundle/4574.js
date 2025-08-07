Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./559.js");
var r = function (e) {
  function CastleEilandSectorGenerator() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleEilandSectorGenerator, e);
  Object.defineProperty(CastleEilandSectorGenerator.prototype, "worldData", {
    get: function () {
      return new a.WorldIsland();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "worldData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return a.WorldIsland.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandSectorGenerator.prototype, "decoTypeCount", {
    get: function () {
      return CastleEilandSectorGenerator.EILAND_DECO_TYPE_COUNT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "decoTypeCount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandSectorGenerator.__initialize_static_members = function () {
    CastleEilandSectorGenerator.EILAND_DECO_TYPE_COUNT = [[9, 3], [12, 1], [10, 2], [14, 2], [5, 2], [4, 1], [11, 2], [3, 1], [13, 1], [2, 1], [19, 1], [17, 2], [16, 3], [15, 3], [1, 2], [0, 2], [18, 2]];
  };
  return CastleEilandSectorGenerator;
}(s.ABasicSectorGenerator);
exports.CastleEilandSectorGenerator = r;
o.classImplementsInterfaces(r, "ICastleSectorGenerator");
r.__initialize_static_members();