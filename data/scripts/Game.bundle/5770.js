Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./5771.js");
var r = require("./5772.js");
var l = require("./5773.js");
var c = require("./1096.js");
var u = require("./5774.js");
var d = function (e) {
  function CastleEventDifficultyScalingData(t) {
    var i = e.call(this) || this;
    i._eventAutoScalingDifficultiesVOsByEventID = new Map();
    i._eventAutoScalingDifficultiesVOsByDifficultyID = new Map();
    i._eventAutoScalingDifficultyEffectVOsByDifficultyID = new Map();
    i._eventAutoScalingDifficultyTypeVOsByDifficultyID = new Map();
    i._eventAutoScalingsVOsByDifficultyID = new Map();
    i._eventAutoScalingCamps = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleEventDifficultyScalingData, e);
  CastleEventDifficultyScalingData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.eventAutoScalingDifficultyTypes; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new c.EventAutoScalingDifficultyTypeVO();
        o.parseXML(n);
        this._eventAutoScalingDifficultyTypeVOsByDifficultyID.set(o.difficultyTypeID, o);
      }
    }
    for (var a = 0, d = e.eventAutoScalingDifficulties; a < d.length; a++) {
      var p = d[a];
      if (p !== undefined) {
        var h = new r.EventAutoScalingDifficultyVO();
        h.parseXML(p);
        if (!this._eventAutoScalingDifficultiesVOsByEventID.get(h.eventID)) {
          this._eventAutoScalingDifficultiesVOsByEventID.set(h.eventID, []);
        }
        this._eventAutoScalingDifficultiesVOsByDifficultyID.set(h.difficultyID, h);
        this._eventAutoScalingDifficultiesVOsByEventID.get(h.eventID).push(h);
      }
    }
    for (var g = 0, C = e.eventAutoScalingLordEffects; g < C.length; g++) {
      var _ = C[g];
      if (_ !== undefined) {
        var m = new l.EventAutoScalingDifficultyEffectVO();
        m.parseXML(_);
        if (!this._eventAutoScalingDifficultyEffectVOsByDifficultyID.get(m.difficultyID)) {
          this._eventAutoScalingDifficultyEffectVOsByDifficultyID.set(m.difficultyID, []);
        }
        this._eventAutoScalingDifficultyEffectVOsByDifficultyID.get(m.difficultyID).push(m);
      }
    }
    for (var f = 0, O = e.eventAutoScalings; f < O.length; f++) {
      var E = O[f];
      if (E !== undefined) {
        var y = new u.EventAutoScalingVO();
        y.parseXML(E);
        this._eventAutoScalingsVOsByDifficultyID.set(y.difficultyID, y);
      }
    }
    for (var b = 0, D = e.eventAutoScalingCamps; b < D.length; b++) {
      var I = D[b];
      if (I !== undefined) {
        var T = new s.DifficultyScalingCampXmlVO();
        T.parseXML(I);
        this._eventAutoScalingCamps.set(T.id, T);
      }
    }
  };
  CastleEventDifficultyScalingData.prototype.getDifficultyTypesByTypeID = function (e) {
    return this._eventAutoScalingDifficultyTypeVOsByDifficultyID.get(e);
  };
  CastleEventDifficultyScalingData.prototype.getDifficultiesByEventID = function (e) {
    return this._eventAutoScalingDifficultiesVOsByEventID.get(e);
  };
  CastleEventDifficultyScalingData.prototype.getDifficultyVOByDifficultyID = function (e) {
    return this._eventAutoScalingDifficultiesVOsByDifficultyID.get(e);
  };
  CastleEventDifficultyScalingData.prototype.getDifficultyEffectsByDifficultyID = function (e) {
    return this._eventAutoScalingDifficultyEffectVOsByDifficultyID.get(e);
  };
  CastleEventDifficultyScalingData.prototype.getAutoScalingByDifficultyID = function (e) {
    return this._eventAutoScalingsVOsByDifficultyID.get(e);
  };
  CastleEventDifficultyScalingData.prototype.getCampByEventAutoScalingCampID = function (e) {
    return this._eventAutoScalingCamps.get(e);
  };
  return CastleEventDifficultyScalingData;
}(a.CastleBasicData);
exports.CastleEventDifficultyScalingData = d;
o.classImplementsInterfaces(d, "IUpdatable", "ICastleBasicData");