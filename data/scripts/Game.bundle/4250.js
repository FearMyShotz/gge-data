Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./339.js");
var r = require("./4251.js");
var l = function (e) {
  function CastleAllianceInvasionCampData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleAllianceInvasionCampData, e);
  CastleAllianceInvasionCampData.prototype.getXmlList = function (e) {
    return e.allianceInvasionCamps;
  };
  CastleAllianceInvasionCampData.prototype.getNewNode = function () {
    return new r.CastleAllianceInvasionCampNodeVO();
  };
  CastleAllianceInvasionCampData.prototype.getAllianceCamp = function (e, t) {
    if (t != undefined && t > 0) {
      return a.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(t);
    } else {
      return this._nodes.get(e);
    }
  };
  CastleAllianceInvasionCampData.prototype.getAllianceCampByLevel = function (e, t) {
    if (this._nodes != null) {
      for (var i = 0, n = Array.from(this._nodes.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.eventID == e && o.level == t) {
          return o;
        }
      }
    }
    return null;
  };
  return CastleAllianceInvasionCampData;
}(s.CastleXmlData);
exports.CastleAllianceInvasionCampData = l;
o.classImplementsInterfaces(l, "IUpdatable");