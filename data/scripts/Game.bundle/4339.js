Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./4340.js");
var r = function (e) {
  function LevelUpData(t) {
    var i = this;
    i._levelUps = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXML(t);
    return i;
  }
  n.__extends(LevelUpData, e);
  LevelUpData.prototype.parseXML = function (e) {
    var t = [];
    var i = e.levelups;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var r = new s.LevelUpVO();
          r.parseXML(a);
          t.push(r);
        }
      }
    }
    this._levelUps = t;
  };
  LevelUpData.prototype.getLevelUp = function (e, t = false, i = false) {
    if (this._levelUps != null) {
      for (var n = 0, o = this._levelUps; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.checkLevelRange(e, t) && i == a.inSkipGroup) {
          return a;
        }
      }
    }
  };
  return LevelUpData;
}(a.CastleBasicData);
exports.LevelUpData = r;
o.classImplementsInterfaces(r, "IUpdatable");