Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./483.js");
var c = require("./54.js");
var u = require("./4.js");
var d = require("./5646.js");
var p = function (e) {
  function PrebuiltCastleData(t) {
    var i = e.call(this) || this;
    i._nodesBySpaceId = new Map();
    i._castleTransportationBuildings = [];
    i.parseXML(t);
    return i;
  }
  n.__extends(PrebuiltCastleData, e);
  PrebuiltCastleData.prototype.parseXML = function (e) {
    this._nodesByCastleId = this.parsePreBuiltCastles(e.prebuiltcastles);
    var t = PrebuiltCastleData.parseBuildingPositions(e.buildingPositions);
    PrebuiltCastleData.addBuildingsToPrebuiltCastles(this._nodesByCastleId, t);
  };
  PrebuiltCastleData.prototype.parsePreBuiltCastles = function (e) {
    var t = new Map();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new h.PrebuiltCastleItemVO();
          a.parseXML(o);
          for (var s = 0, r = a.spaceIds; s < r.length; s++) {
            var l = r[s];
            if (l !== undefined) {
              if (!this._nodesBySpaceId.get(l)) {
                this._nodesBySpaceId.set(l, []);
              }
              this._nodesBySpaceId.get(l).push(a);
            }
          }
          t.set(a.id, a);
        }
      }
    }
    return t;
  };
  PrebuiltCastleData.parseBuildingPositions = function (e) {
    var t = new Map();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = parseInt(o.buildingWodID || "");
          var s = parseInt(o.preBuiltCastleID || "");
          if (a != r.ClientConstCastle.START_GROUND_WOD_ID && a != r.ClientConstCastle.EXTENSION_GROUND_WOD_ID) {
            if (!t.get(s)) {
              t.set(s, new Map());
            }
            if (t.get(s).get(a)) {
              t.get(s).set(a, t.get(s).get(a) + 1);
            } else {
              t.get(s).set(a, 1);
            }
          }
        }
      }
    }
    return t;
  };
  PrebuiltCastleData.addBuildingsToPrebuiltCastles = function (e, t) {
    if (t != null) {
      for (var i = 0, n = Array.from(t.keys()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = t.get(o);
          if (e.get(o)) {
            e.get(o).setBuildings(PrebuiltCastleData.createBuildingsVector(a));
          }
        }
      }
    }
  };
  PrebuiltCastleData.createBuildingsVector = function (e) {
    var t = [];
    var i = false;
    var n = false;
    if (e != null) {
      for (var o = 0, r = Array.from(e.keys()); o < r.length; o++) {
        var l = r[o];
        if (l !== undefined) {
          var c = u.CastleModel.wodData.getBuildingVOById(s.int(l));
          i = i || a.instanceOfClass(c, "BasicGateVO");
          if (c.wallBonus > 0) {
            n = true;
          }
          t.push(new d.PrebuiltCastleBuildingVO(c, e.get(l)));
        }
      }
    }
    if (!i) {
      t.push(new d.PrebuiltCastleBuildingVO(u.CastleModel.wodData.getBuildingVOById(PrebuiltCastleData.BASE_GATE_WOD_ID), 1));
    }
    if (!n) {
      t.push(new d.PrebuiltCastleBuildingVO(u.CastleModel.wodData.getBuildingVOById(PrebuiltCastleData.BASE_WALL_WOD_ID), 1));
    }
    t.sort(PrebuiltCastleData.sortOrderCastleBuildings);
    return t;
  };
  PrebuiltCastleData.sortOrderCastleBuildings = function (e, t) {
    return t.buildingVO.getBuildDuration() - e.buildingVO.getBuildDuration();
  };
  PrebuiltCastleData.prototype.getCastles = function (e) {
    return this._nodesBySpaceId.get(e);
  };
  PrebuiltCastleData.prototype.getCastleByID = function (e) {
    return this._nodesByCastleId.get(e);
  };
  Object.defineProperty(PrebuiltCastleData.prototype, "castleTransportationBuildings", {
    get: function () {
      return this._castleTransportationBuildings;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleData.prototype.parseCastleTransportationBuildings = function (e) {
    this._castleTransportationBuildings = [];
    var t;
    var i;
    var n;
    for (var o = e.BL, a = 0; a < o.length; a++) {
      t = o[a][0];
      i = o[a][1];
      if ((n = u.CastleModel.wodData.getBuildingVOById(t)) instanceof l.ABasicBuildingVO) {
        var s = new d.PrebuiltCastleBuildingVO(n, i);
        this._castleTransportationBuildings.push(s);
      }
    }
    C.CastleBasicController.getInstance().dispatchEvent(new g.CastlePrebuiltCastleDataEvent(g.CastlePrebuiltCastleDataEvent.MAIN_CASTLE_BUILDINGS_UPDATED));
  };
  PrebuiltCastleData.BASE_GATE_WOD_ID = 450;
  PrebuiltCastleData.BASE_WALL_WOD_ID = 501;
  return PrebuiltCastleData;
}(c.CastleBasicData);
exports.PrebuiltCastleData = p;
var h = require("./5647.js");
var g = require("./1394.js");
var C = require("./15.js");
o.classImplementsInterfaces(p, "IUpdatable");