Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./4255.js");
var r = function (e) {
  function CastleBuyLevelData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleBuyLevelData, e);
  CastleBuyLevelData.prototype.parseXML = function (e) {
    this.levelUpPrices = [];
    var t = e.levelUpPrices;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new s.LevelUpPriceVO();
          a.parseXML(o);
          this.levelUpPrices.push(a);
        }
      }
    }
  };
  CastleBuyLevelData.prototype.getLevelUpCost = function (e, t) {
    if (this.levelUpPrices != null) {
      for (var i = 0, n = this.levelUpPrices; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.fromLevel == e && o.toLevel == t) {
          return o.c2Cost;
        }
      }
    }
    return 0;
  };
  return CastleBuyLevelData;
}(a.CastleBasicData);
exports.CastleBuyLevelData = r;
o.classImplementsInterfaces(r, "IUpdatable");