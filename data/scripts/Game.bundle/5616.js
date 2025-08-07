Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./339.js");
var r = require("./1968.js");
var l = function (e) {
  function DaimyoCastleXmlData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(DaimyoCastleXmlData, e);
  DaimyoCastleXmlData.prototype.getXmlList = function (e) {
    return e.daimyoCastles;
  };
  DaimyoCastleXmlData.prototype.getNewNode = function () {
    return new r.DaimyoXmlVO();
  };
  DaimyoCastleXmlData.prototype.getDaimyoCastle = function (e, t, i) {
    if (i != undefined && i > 0) {
      return a.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(i);
    }
    if (this._nodes != null) {
      for (var n = 0, o = Array.from(this._nodes.values()); n < o.length; n++) {
        var s = o[n];
        if (s !== undefined && s.rank == e && (t == -1 || s.level == t)) {
          return s;
        }
      }
    }
    return null;
  };
  DaimyoCastleXmlData.prototype.getDaimyoCastleByID = function (e, t) {
    if (t != undefined && t > 0) {
      return a.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(t);
    }
    if (this._nodes != null) {
      for (var i = 0, n = Array.from(this._nodes.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.id == e) {
          return o;
        }
      }
    }
    return null;
  };
  return DaimyoCastleXmlData;
}(s.CastleXmlData);
exports.DaimyoCastleXmlData = l;
o.classImplementsInterfaces(l, "IUpdatable", "ICastleBasicData");