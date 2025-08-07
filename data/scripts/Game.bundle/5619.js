Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./339.js");
var r = require("./1969.js");
var l = function (e) {
  function DaimyoTownshipXmlData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(DaimyoTownshipXmlData, e);
  DaimyoTownshipXmlData.prototype.getXmlList = function (e) {
    return e.daimyoTownships;
  };
  DaimyoTownshipXmlData.prototype.getNewNode = function () {
    return new r.DaimyoXmlVO();
  };
  DaimyoTownshipXmlData.prototype.getDaimyoTownship = function (e, t, i) {
    if (i > 0) {
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
  DaimyoTownshipXmlData.prototype.getDaimyoTownshipByID = function (e, t) {
    if (t > 0) {
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
  return DaimyoTownshipXmlData;
}(s.CastleXmlData);
exports.DaimyoTownshipXmlData = l;
o.classImplementsInterfaces(l, "IUpdatable", "ICastleBasicData");