Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function AreaTypeSectorMap(e) {
    this.markCounter = 0;
    this.map = e;
  }
  AreaTypeSectorMap.prototype.put = function (e, t, i, n, o) {
    this.fillWith(AreaTypeSectorMap.BLOCKED_BY_DECO, t, i, n, o);
    this.map[i][t] = e;
  };
  AreaTypeSectorMap.prototype.getFreePositionsForElements = function (e, t) {
    this.markCounter++;
    var i = [];
    for (var o = 0; o < a.WorldConst.SECTOR_HEIGHT; o++) {
      for (var s = 0; s < a.WorldConst.SECTOR_WIDTH; s++) {
        if (this.isFreeForElementAt(s, o, e, t)) {
          i.push(new n(s, o));
          this.fillWith(this.currentBlockedMarker, s, o, e, t);
        }
      }
    }
    return i;
  };
  AreaTypeSectorMap.prototype.getAsMap = function () {
    return this.map;
  };
  AreaTypeSectorMap.prototype.fillWith = function (e, t, i, n, o) {
    for (var s = 0; s < o; s++) {
      for (var r = 0; r < n; r++) {
        if (!(i + s > a.WorldConst.SECTOR_HEIGHT) && !(t + r > a.WorldConst.SECTOR_WIDTH)) {
          this.map[i + s][t + r] = e;
        }
      }
    }
  };
  AreaTypeSectorMap.prototype.isFreeForElementAt = function (e, t, i, n) {
    if (e < 0 || t < 0 || e + i > a.WorldConst.SECTOR_WIDTH || t + n > a.WorldConst.SECTOR_HEIGHT) {
      return false;
    }
    for (var o = 0; o < n; o++) {
      for (var r = 0; r < i; r++) {
        var l = s.int(this.map[t + o][e + r]);
        if (!this.isInterpretedAsFree(l)) {
          return false;
        }
      }
    }
    return true;
  };
  AreaTypeSectorMap.prototype.isInterpretedAsFree = function (e) {
    return e == a.WorldConst.AREA_TYPE_EMPTY || e > AreaTypeSectorMap.BLOCKED_BY_DECO && e < this.currentBlockedMarker;
  };
  Object.defineProperty(AreaTypeSectorMap.prototype, "currentBlockedMarker", {
    get: function () {
      return AreaTypeSectorMap.BLOCKED_BY_DECO + this.markCounter;
    },
    enumerable: true,
    configurable: true
  });
  AreaTypeSectorMap.__initialize_static_members = function () {
    AreaTypeSectorMap.BLOCKED_BY_DECO = 65536;
  };
  return AreaTypeSectorMap;
}();
exports.AreaTypeSectorMap = o;
var a = require("./5.js");
var s = require("./6.js");
o.__initialize_static_members();