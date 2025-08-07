Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./72.js");
var s = require("./4348.js");
var r = function (e) {
  function GachaData() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GachaData, e);
  GachaData.prototype.init = function (e) {
    var t = this;
    this.reset();
    var i = e.gachaEvents;
    if (i != null) {
      i.forEach(function (e) {
        var i = new s.GachaXmlVO();
        i.init(e);
        t._gachaVOs.set(i.gachaID, i);
      });
    }
  };
  GachaData.prototype.reset = function () {
    this._gachaVOs = new Map();
  };
  GachaData.prototype.getGachaVOs = function (e, t, i) {
    var n = [];
    this._gachaVOs.forEach(function (o) {
      if (o.eventID == e && o.rewardSetID == t && o.leagueTypeIDs.indexOf(i) != -1) {
        n.push(o);
      }
    });
    return n;
  };
  GachaData.prototype.getGachaVOByLevel = function (e, t, i, n) {
    for (var o = this.getGachaVOs(e, t, i), a = 0; a < o.length; a++) {
      var s = o[a];
      if (s.gachaLevel == n) {
        return s;
      }
    }
    return o[0] || null;
  };
  GachaData.prototype.getCurrentGachaVO = function (e, t, i, n) {
    for (var o = this.getGachaVOs(e, t, i), a = 0; a < o.length; a++) {
      var s = o[a];
      if (n >= s.minPulls && n <= s.maxPulls) {
        return s;
      }
    }
    return o[0] || null;
  };
  GachaData.prototype.getGachaVOByID = function (e) {
    return this._gachaVOs.get(e);
  };
  GachaData.prototype.getAllGachaVOs = function () {
    return this._gachaVOs;
  };
  return GachaData;
}(a.CastleEventDispatcher);
exports.GachaData = r;
o.classImplementsInterfaces(r, "ICastleBasicData");