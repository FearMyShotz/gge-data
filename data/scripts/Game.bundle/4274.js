Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleDungeonData(e) {
    this.generateData(e);
  }
  CastleDungeonData.prototype.generateData = function (e) {
    var t = e.dungeons;
    this.maxVictories = new Map();
    this.dungeons = new Map();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          var l = parseInt(a.skipCosts || "");
          var c = parseInt(a.kID || "");
          var u = parseInt(a.countVictories || "");
          var d = new r.DungeonVO(c, u, l);
          if (!o.DictionaryUtil.containsKey(this.dungeons, c)) {
            this.dungeons.set(c, new Map());
          }
          this.dungeons.get(c)[u] = d;
          var p = s.int(-Number.MAX_VALUE);
          if (o.DictionaryUtil.containsKey(this.maxVictories, c)) {
            p = s.int(this.maxVictories.get(c));
          }
          if (u > p) {
            this.maxVictories.set(c, u);
          }
        }
      }
    }
  };
  CastleDungeonData.prototype.getMaxLevel = function (e) {
    return s.int(a.DungeonConst.getLevel(this.maxVictories.get(e), e));
  };
  CastleDungeonData.prototype.getDungeon = function (e, t) {
    var i = s.int(Math.min(this.maxVictories.get(e), t));
    return this.dungeons.get(e)[i];
  };
  return CastleDungeonData;
}();
exports.CastleDungeonData = n;
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./4275.js");