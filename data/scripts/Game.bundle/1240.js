Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DetailViewCreator() {}
  DetailViewCreator.createDetailViewFromIWorldmapObject = function (e, t, i, n) {
    var a;
    if (o.SpecialServerHelper.skinName == o.SpecialServerHelper.SKIN_MAYA && (a = DetailViewCreator.getMayaDetailView(e, t, i, n))) {
      return a;
    } else {
      return DetailViewCreator.getDefaultDetailView(e, t, i, n);
    }
  };
  DetailViewCreator.getMayaDetailView = function (e, t, i, n) {
    if (s.instanceOfClass(e, "DungeonMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "Dungeon");
    } else if (s.instanceOfClass(e, "CastleMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "Castle");
    } else if (s.instanceOfClass(e, "CapitalMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "Capital");
    } else if (s.instanceOfClass(e, "MetropolMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "Metropolis");
    } else if (s.instanceOfClass(e, "KingstowerMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "Kingstower");
    } else if (s.instanceOfClass(e, "OutpostMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "Outpost");
    } else if (s.instanceOfClass(e, "ABGAllianceTowerMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "AllianceTower");
    } else if (s.instanceOfClass(e, "ABGResourceTowerMapobjectVO")) {
      return new v.AABGDetailView(e, t, i, n, "ResourceTower");
    } else {
      return null;
    }
  };
  DetailViewCreator.getDefaultDetailView = function (e, t, i, n) {
    if (e) {
      if (s.instanceOfClass(e, "TMapNodeVO")) {
        return new a.EventTreasurmapDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "DungeonMapobjectVO")) {
        return new u.DungeonDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "CastleMapobjectVO")) {
        return new l.CastleDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "CapitalMapobjectVO")) {
        return new l.CastleDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "MetropolMapobjectVO")) {
        return new l.CastleDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "OutpostMapobjectVO")) {
        return new l.CastleDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "VillageMapobjectVO")) {
        return new D.VillageDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "BossdungeonMapobjectVO")) {
        return new r.BossDungeonDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "EventdungeonMapobjectVO")) {
        return new d.EventDungeonDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "FactionTowerMapobjectVO")) {
        return new C.FactionTowerDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "FactionCapitalMapobjectVO")) {
        return new h.FactionCapitalDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "FactionVillageMapobjectVO")) {
        return new _.FactionVillageDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "FactionCampMapobjectVO")) {
        return new p.FactionCampDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "AAlienInvasionMapobjectVO")) {
        return new l.CastleDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "NomadCampMapObjectVO")) {
        return new y.NomadCampDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "NomadKhanCampMapObjectVO")) {
        return new m.KhanCampDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "KingstowerMapobjectVO")) {
        return new f.KingstowerDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "MonumentMapobjectVO")) {
        return new E.MonumentDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "LaboratoryMapobjectVO")) {
        return new O.LaboratoryDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "SamuraiCampMapObjectVO")) {
        return new b.SamuraiCampDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "FactionInvasionCampMapObjectVO")) {
        return new g.FactionInvasionCampDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "DaimyoCastleMapObjectVO")) {
        return new I.DaimyoCastleDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "DaimyoTownshipMapObjectVO")) {
        return new T.DaimyoTownshipDetailView(e, t, i, n);
      } else if (s.instanceOfClass(e, "WolfkingCastleMapObjectVO")) {
        return new S.WolfkingCastleDetailView(e, t, i, n);
      } else {
        return null;
      }
    } else {
      return new c.DefaultDetailView(e, t, i, n);
    }
  };
  return DetailViewCreator;
}();
exports.DetailViewCreator = n;
var o = require("./44.js");
var a = require("./2155.js");
var s = require("./1.js");
var r = require("./2156.js");
var l = require("./2157.js");
var c = require("./2158.js");
var u = require("./2159.js");
var d = require("./2160.js");
var p = require("./2161.js");
var h = require("./2162.js");
var g = require("./2163.js");
var C = require("./2164.js");
var _ = require("./2165.js");
var m = require("./2166.js");
var f = require("./2167.js");
var O = require("./2168.js");
var E = require("./2169.js");
var y = require("./1241.js");
var b = require("./2170.js");
var D = require("./2171.js");
var I = require("./2172.js");
var T = require("./2173.js");
var v = require("./2174.js");
var S = require("./2175.js");