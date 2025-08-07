Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./1218.js");
var l = require("./69.js");
var c = require("./1921.js");
var u = function () {
  function ABasicSectorGenerator() {}
  ABasicSectorGenerator.prototype.generateDecoObjects = function (e, t, i) {
    var o = s.int(e * a.WorldConst.SECTOR_WIDTH);
    var r = s.int(t * a.WorldConst.SECTOR_HEIGHT);
    this.rand = new n.SimpleRandom(o * a.WorldConst.SEED_VALUE_1 + r * a.WorldConst.SEED_VALUE_2);
    var l = new c.AreaTypeSectorMap(i);
    this.setDecoElements(l);
    return l.getAsMap();
  };
  ABasicSectorGenerator.prototype.setDecoElements = function (e) {
    var t;
    var i = this.decoTypeCount;
    for (var n = s.int(i.length), o = 0, a = 0, l = 0; l < n; l++) {
      o = s.int(i[l][0]);
      a = s.int(i[l][1]);
      t = r.ClientConstWorldmapDeco.DECO_OBJECT_LIST.get(o);
      this.placeDecoObjects(e, t, a);
    }
  };
  ABasicSectorGenerator.prototype.placeDecoObjects = function (e, t, i) {
    var n;
    var o = e.getFreePositionsForElements(t.width, t.height);
    for (var a = s.int(Math.min(i, o.length)), r = 0, l = 0; l < a; l++) {
      r = s.int(this.rand.nextInt(o.length));
      n = o.splice(r, 1).shift();
      e.put(-(t.decoId + 1), n.x, n.y, t.width, t.height);
    }
  };
  Object.defineProperty(ABasicSectorGenerator.prototype, "worldData", {
    get: function () {
      throw new l.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicSectorGenerator.prototype, "kingdomID", {
    get: function () {
      throw new l.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicSectorGenerator.prototype, "resourceSpotAreaType", {
    get: function () {
      throw new l.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicSectorGenerator.prototype, "decoTypeCount", {
    get: function () {
      return ABasicSectorGenerator.DEFAULT_DECO_TYPE_COUNT;
    },
    enumerable: true,
    configurable: true
  });
  ABasicSectorGenerator.__initialize_static_members = function () {
    ABasicSectorGenerator.DEFAULT_DECO_TYPE_COUNT = [[14, 3], [13, 3], [12, 3], [9, 1], [10, 1], [11, 1], [5, 2], [7, 2], [4, 2], [8, 1], [3, 2], [2, 1], [19, 5], [18, 5], [17, 10], [16, 3], [15, 3], [6, 1], [1, 1], [0, 2]];
  };
  return ABasicSectorGenerator;
}();
exports.ABasicSectorGenerator = u;
o.classImplementsInterfaces(u, "ICastleSectorGenerator");
u.__initialize_static_members();