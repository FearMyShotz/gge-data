Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleUserCastleListDetailed() {
    this._detailedCastleList = new Map();
  }
  CastleUserCastleListDetailed.prototype.parseData = function (e) {
    this._detailedCastleList = new Map();
    if (e.C) {
      var t;
      var i;
      for (var n = 0, o = e.C; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          t = [];
          for (var c = 0, u = a.AI; c < u.length; c++) {
            var d = u[c];
            if (d !== undefined) {
              (i = new s.DetailedCastleVO()).kingdomID = l.int(a.KID);
              i.parseData(d);
              t.push(i);
            }
          }
          this._detailedCastleList.set(a.KID, t);
        }
      }
      this.controller.dispatchEvent(new r.CastleDetailedCastleListEvent(r.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED));
    }
  };
  CastleUserCastleListDetailed.prototype.parse_rue = function (e) {
    if (e) {
      var t = l.int(e.AID);
      var i = l.int(e.SID);
      var n = this.getVObyCastleID(t, i);
      if (n) {
        var o = l.int(e.WID);
        var a = l.int(e.NUA);
        n.unitInventory.setUnit(o, a);
      }
    }
  };
  CastleUserCastleListDetailed.prototype.getVObyCastleID = function (e, t) {
    var i = this._detailedCastleList.get(t);
    if (i) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.areaID == e) {
          return a;
        }
      }
    }
    return null;
  };
  CastleUserCastleListDetailed.prototype.getMainCastleByKingdomID = function (e) {
    var t = this._detailedCastleList.get(e);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.getIsMyMainCastle(e)) {
          return o;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleUserCastleListDetailed.prototype, "detailedCastleList", {
    get: function () {
      return this._detailedCastleList;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserCastleListDetailed.prototype.updateDetailVO = function (e) {
    var t = this.getVObyCastleID(e.castleID, e.kingdomID);
    if (t) {
      for (var i = 0, n = a.ClientConstCollectable.GROUP_LIST_RESOURCES; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.setResource(o, e.resources.getAmountOrDefaultByType(o));
        }
      }
    }
  };
  CastleUserCastleListDetailed.prototype.getFilteredCastlesList = function (e) {
    var t = [];
    if (this.detailedCastleList != null) {
      for (var i = 0, n = Array.from(this.detailedCastleList.keys()); i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          var s = this.detailedCastleList.get(a);
          if (s != null) {
            for (var r = 0, l = s; r < l.length; r++) {
              var c = l[r];
              if (c !== undefined && e(c)) {
                t.push(c);
              }
            }
          }
        }
      }
    }
    t.sort(o.ClientConstSort.sortDetailedCastleVOByKingdomID);
    return t;
  };
  CastleUserCastleListDetailed.prototype.getCastlesWithBarracksList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterHasBarracks);
  };
  CastleUserCastleListDetailed.prototype.getCastlesWithWorkshopsList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterHasWorkshop);
  };
  CastleUserCastleListDetailed.prototype.getAllCastlesList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterTrue);
  };
  CastleUserCastleListDetailed.prototype.getCastlesWithHospitalsList = function () {
    return this.getFilteredCastlesList(CastleUserCastleListDetailed.filterHasHospital);
  };
  CastleUserCastleListDetailed.filterHasBarracks = function (e) {
    return e.hasBarracks;
  };
  CastleUserCastleListDetailed.filterHasWorkshop = function (e) {
    return e.hasSiegeWorkshop || e.hasDefenseWorkshop;
  };
  CastleUserCastleListDetailed.filterTrue = function (e) {
    return true;
  };
  CastleUserCastleListDetailed.filterHasHospital = function (e) {
    return e.hasHospital;
  };
  Object.defineProperty(CastleUserCastleListDetailed.prototype, "controller", {
    get: function () {
      return c.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleUserCastleListDetailed;
}();
exports.CastleUserCastleListDetailed = n;
var o = require("./75.js");
var a = require("./86.js");
var s = require("./5607.js");
var r = require("./218.js");
var l = require("./6.js");
var c = require("./15.js");