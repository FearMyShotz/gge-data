Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleAllianceFameData(e) {
    this.allianceFameVOs = [];
    var t = e.alliancefameranks;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          var s = new o.AllianceFameLevelVO();
          s.fillFromParamXML(a);
          this.allianceFameVOs.push(s);
        }
      }
    }
  }
  CastleAllianceFameData.prototype.getFameVOByLevel = function (e) {
    if (this.allianceFameVOs != null) {
      for (var t = 0, i = this.allianceFameVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.level === e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleAllianceFameData.prototype.getFamePointsForLevel = function (e) {
    var t = this.getFameVOByLevel(e);
    if (t) {
      return t.threshHold;
    } else {
      return 0;
    }
  };
  CastleAllianceFameData.prototype.getLevelFromFamePoints = function (e) {
    var t;
    this.allianceFameVOs.sort(this.bindFunction(this.sortFameByLevel));
    if (this.allianceFameVOs != null) {
      for (var i = 0, n = this.allianceFameVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.threshHold <= e) {
          t = o;
        }
      }
    }
    if (t) {
      return t.level;
    } else {
      return 0;
    }
  };
  CastleAllianceFameData.prototype.sortFameByLevel = function (e, t) {
    if (e.level < t.level) {
      return -1;
    } else if (e.level > t.level) {
      return 1;
    } else {
      return 0;
    }
  };
  return CastleAllianceFameData;
}();
exports.CastleAllianceFameData = n;
var o = require("./5351.js");