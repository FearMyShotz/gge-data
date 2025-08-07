Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./54.js");
var l = require("./4.js");
var c = require("./56.js");
var u = function (e) {
  function CastleBuildingDistrictData(t) {
    var i = e.call(this) || this;
    i.createPossibleBuildingLists();
    return i;
  }
  n.__extends(CastleBuildingDistrictData, e);
  CastleBuildingDistrictData.prototype.createPossibleBuildingLists = function () {
    this._possibleBuildingsForType = new Map();
    for (var e = 0, t = Array.from(l.CastleModel.wodData.voSubList(c.CastleWodData.TYPE_BUILDING).values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        var n = d.castAs(i, "ABasicBuildingVO");
        if (n && (!n || n.districtTypeID && !n.isDistrict)) {
          if (!this._possibleBuildingsForType.get(n.districtTypeID)) {
            this._possibleBuildingsForType.set(n.districtTypeID, new Map());
          }
          var o = n.wodId.toString();
          if (n.name == "Deco") {
            o = n.name + n.type;
          }
          if (!this._possibleBuildingsForType.get(n.districtTypeID).get(o) && n.level == 1) {
            this._possibleBuildingsForType.get(n.districtTypeID).set(o, n);
          }
        }
      }
    }
    if (this._possibleBuildingsForType != null) {
      for (var a = 0, s = Array.from(this._possibleBuildingsForType.keys()); a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          var u = [];
          for (var p = 0, h = Array.from(this._possibleBuildingsForType.get(r).values()); p < h.length; p++) {
            var g = h[p];
            if (g !== undefined) {
              u.push(g);
            }
          }
          u.sort(CastleBuildingDistrictData.sortByName);
          this._possibleBuildingsForType.set(r, u);
        }
      }
    }
  };
  CastleBuildingDistrictData.sortByName = function (e, t) {
    var i = s.int(a.Localize.text(e.getNameString()).localeCompare(a.Localize.text(t.getNameString())));
    if (i != 0) {
      return i;
    } else {
      return 0;
    }
  };
  CastleBuildingDistrictData.prototype.getPossibleBuildingsForType = function (e, t, i) {
    var n = [];
    if (this._possibleBuildingsForType.has(e)) {
      this._possibleBuildingsForType.get(e).forEach(function (e) {
        if (e.isAvailableInAreaType(i)) {
          n.push(e);
        }
      });
    }
    return n;
  };
  return CastleBuildingDistrictData;
}(r.CastleBasicData);
exports.CastleBuildingDistrictData = u;
o.classImplementsInterfaces(u, "IUpdatable", "ICastleBasicData");
var d = require("./1.js");