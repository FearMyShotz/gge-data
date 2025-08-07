Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./72.js");
var s = require("./4.js");
var r = require("./4248.js");
var l = require("./4249.js");
var c = require("./335.js");
var u = function (e) {
  function CastleAllianceCrestData(t) {
    var i = e.call(this) || this;
    i._allianceLayouts = new Map();
    i._allianceColors = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleAllianceCrestData, e);
  CastleAllianceCrestData.prototype.parseXML = function (e) {
    var t = e.allianceCoatLayouts;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new l.AllianceCrestLayoutVO();
          a.parseXML(o);
          this._allianceLayouts.set(a.allianceCoatLayoutID, a);
        }
      }
    }
    var s = e.allianceCoatColors;
    if (s != null) {
      for (var c = 0, u = s; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined) {
          var p = new r.AllianceCrestColorVO();
          p.parseXML(d);
          this._allianceColors.set(p.allianceCoatColorID, p);
        }
      }
    }
  };
  CastleAllianceCrestData.prototype.createRandomCrest = function () {
    var e = new c.AllianceCrestVO();
    var t = [];
    for (var i = 0, n = Array.from(this._allianceLayouts.values()); i < n.length; i++) {
      var a = n[i];
      if (a.maxDuration <= 0 || s.CastleModel.allianceData.myAllianceVO.getRemainingSecondsForLayout(a.allianceCoatLayoutID) > 0) {
        t.push(a);
      }
    }
    for (var r = t[o.MathBase.random(0, t.length - 1, true)], l = r.allianceCoatLayoutID, u = this._allianceColors.size, d = [], p = 0; p < r.noofColors; p++) {
      var h = o.MathBase.random(1, u, true);
      d.push(h);
    }
    e.fillFromArray([l, d]);
    return e;
  };
  CastleAllianceCrestData.prototype.getRandomColor = function () {
    var e = [];
    for (var t = 0, i = Array.from(this._allianceColors.values()); t < i.length; t++) {
      var n = i[t];
      e.push(n.allianceCoatColorID);
    }
    var a = e[o.MathBase.random(0, e.length - 1, true)];
    return this.getColorVOById(a);
  };
  CastleAllianceCrestData.prototype.getLayoutVOById = function (e) {
    return this._allianceLayouts.get(e);
  };
  CastleAllianceCrestData.prototype.getColorVOById = function (e) {
    return this._allianceColors.get(e);
  };
  CastleAllianceCrestData.prototype.getFreeLayouts = function () {
    var e = [];
    for (var t = 0, i = Array.from(this._allianceLayouts.values()); t < i.length; t++) {
      var n = i[t];
      if (n.maxDuration <= 0) {
        e.push(n);
      }
    }
    return e;
  };
  CastleAllianceCrestData.prototype.getPremiumLayouts = function () {
    var e = [];
    for (var t = 0, i = Array.from(this._allianceLayouts.values()); t < i.length; t++) {
      var n = i[t];
      if (n.maxDuration > 0) {
        e.push(n);
      }
    }
    return e;
  };
  CastleAllianceCrestData.prototype.getAllColors = function () {
    var e = [];
    for (var t = 0, i = Array.from(this._allianceColors.values()); t < i.length; t++) {
      var n = i[t];
      e.push(n);
    }
    return e;
  };
  return CastleAllianceCrestData;
}(a.CastleEventDispatcher);
exports.CastleAllianceCrestData = u;