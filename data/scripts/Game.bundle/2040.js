Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function IsoHelperWalkmap() {
    this.walkMapCache = new Map();
    this.spawnPointCache = new Map();
  }
  IsoHelperWalkmap.prototype.generateWalkmap = function (e) {
    var t = this.walkMapCache.get(e);
    if (t === undefined) {
      var i = this.getBitmapData(e);
      if (i) {
        var n = this.getWalkMapFromBitmapData(i);
        var o = n.walkMap;
        var a = n.spawnPoints;
        this.spawnPointCache.add(e, a);
        this.walkMapCache.add(e, o);
        t = o;
      } else {
        t = null;
        this.walkMapCache.add(e, t);
        this.spawnPointCache.add(e, []);
      }
    }
    return t;
  };
  IsoHelperWalkmap.prototype.getSpawnPoints = function (e) {
    var t = this.spawnPointCache.get(e);
    if (t === undefined) {
      var i = this.getBitmapData(e);
      if (i) {
        var n = this.getWalkMapFromBitmapData(i);
        var o = n.walkMap;
        var a = n.spawnPoints;
        this.spawnPointCache.add(e, a);
        this.walkMapCache.add(e, o);
        t = a;
      } else {
        t = [];
        this.spawnPointCache.add(e, t);
        this.walkMapCache.add(e, null);
      }
    }
    return t;
  };
  IsoHelperWalkmap.prototype.getWalkMapFromBitmapData = function (e) {
    var t;
    var i = Array(e.height);
    var o = [];
    for (var a = 0; a < e.height; a++) {
      i[a] = Array(e.width);
      for (var s = 0; s < e.width; s++) {
        t = e.getPixel(s, a);
        i[a][s] = t != IsoHelperWalkmap.BLOCKED;
        if (t > IsoHelperWalkmap.SPAWNPOINT || t == IsoHelperWalkmap.SPAWNPOINT2) {
          o.push(new n(s, a));
        }
      }
    }
    return {
      walkMap: i,
      spawnPoints: o
    };
  };
  IsoHelperWalkmap.prototype.getBitmapData = function (e) {
    var t;
    if (/wall|guard_tower|crane|deco|event|moat|gate|univ|forg/i.test(e)) {
      return null;
    }
    try {
      if (t = a.getDefinitionByNameFromLibrary(e)) {
        return new t();
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  };
  IsoHelperWalkmap.prototype.createWalkmapWithWalkableL = function (e) {
    for (var t = Array(e.y), i = 0; i < t.length; ++i) {
      t[i] = Array(e.x);
      for (var n = 0; n < t[i].length; ++n) {
        t[i][n] = i == t.length - 1 || n == t[i].length - 1;
      }
    }
    return t;
  };
  IsoHelperWalkmap.prototype.createWalkmapFullBlocked = function (e) {
    var t = new n(Math.floor(e.x), Math.floor(e.y));
    if (t.x <= 0 || t.y <= 0) {
      return [];
    }
    for (var i = Array(e.y), o = 0; o < i.length; ++o) {
      i[o] = Array(e.x);
      for (var a = 0; a < i[o].length; ++a) {
        i[o][a] = false;
      }
    }
    return i;
  };
  IsoHelperWalkmap.prototype.mirrorWalkmap = function (e) {
    var t = Array(e[0].length);
    for (var i = 0; i < e[0].length; ++i) {
      t[i] = Array(e.length);
      for (var n = 0; n < e.length; ++n) {
        t[i][n] = e[n][i];
      }
    }
    return t;
  };
  IsoHelperWalkmap.prototype.mirrorSpawnPoints = function (e) {
    var t = new Array(e.length);
    for (var i = 0; i < e.length; ++i) {
      t[i] = new n(e[i].y, e[i].x);
    }
    return t;
  };
  IsoHelperWalkmap.__initialize_static_members = function () {
    IsoHelperWalkmap.WALKABLE = 16777215;
    IsoHelperWalkmap.BLOCKED = 0;
    IsoHelperWalkmap.SPAWNPOINT = 16711680;
    IsoHelperWalkmap.SPAWNPOINT2 = 16711681;
  };
  return IsoHelperWalkmap;
}();
exports.IsoHelperWalkmap = o;
var a = require("./1.js");
o.__initialize_static_members();