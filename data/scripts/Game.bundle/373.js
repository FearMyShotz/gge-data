Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleListVO() {
    this._ownerID = 0;
    this._castles = new Map();
    this._villages = [];
  }
  CastleListVO.prototype.parseCastleList = function (e, t) {
    this._castles = new Map();
    for (var i = 0, n = e.C; i < n.length; i++) {
      var s = n[i];
      if (s !== undefined) {
        var r = [];
        for (var l = 0, c = s.AI; l < c.length; l++) {
          var u = c[l];
          if (u !== undefined) {
            var d = a.WorldmapObjectFactory.parseWorldMapArea(u.AI);
            if (u.OGT) {
              d.remainingOpenGateTime = p.int(u.OGT);
            }
            if (u.OGC) {
              d.openGateCounter = p.int(u.OGC);
            }
            d.remainingAbandonOutpostTime = p.int(u.AOT);
            d.remainingCancelAbandonOutpostTime = p.int(u.CAT);
            d.remainingCooldownAbandonOutpostTime = p.int(u.TA);
            d.ownerInfo = t;
            r.push(d);
          }
        }
        r.sort(o.ClientConstSort.sortByMapObject);
        this._castles.set(s.KID, r);
      }
    }
  };
  CastleListVO.prototype.parseAllianceCity = function (e, t) {
    if (!!e && !!e.AI && !(e.AI.length <= 0) && !(e.AI[0].length <= 0)) {
      var i = a.WorldmapObjectFactory.parseWorldMapArea(e.AI[0][0]);
      i.ownerInfo = t;
      var n = this._castles.get(c.WorldClassic.KINGDOM_ID);
      n.push(i);
      n.sort(o.ClientConstSort.sortByMapObject);
    }
  };
  CastleListVO.prototype.parseABGTower = function (e) {
    if (e && e.length != 0) {
      var t = a.WorldmapObjectFactory.parseWorldMapArea(e[0]);
      this._castles.get(c.WorldClassic.KINGDOM_ID).push(t);
    }
  };
  CastleListVO.prototype.parseVillageList = function (e, t) {
    this._villages = [];
    if (e) {
      for (var i = 0, n = e.VI; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = o[0];
          var r = a.WorldmapObjectFactory.parseWorldMapArea(s);
          r.ownerInfo = t;
          this._villages.push(r);
        }
      }
      this._villages.sort(this.bindFunction(this.villageSorter));
    }
  };
  CastleListVO.prototype.villageSorter = function (e, t) {
    if (e.kingdomID == t.kingdomID) {
      return p.int(e.areaNameString.localeCompare(t.areaNameString));
    } else if (e.kingdomID == d.WorldIce.KINGDOM_ID) {
      return -1;
    } else if (t.kingdomID == d.WorldIce.KINGDOM_ID) {
      return 1;
    } else {
      return e.kingdomID - t.kingdomID;
    }
  };
  CastleListVO.prototype.resetOpenGateCounter = function () {
    if (this._castles) {
      for (var e = 0, t = Array.from(this._castles.values()); e < t.length; e++) {
        var i = t[e];
        if (i) {
          for (var n = 0, o = i; n < o.length; n++) {
            var a = o[n];
            if (a) {
              a.openGateCounter = 0;
            }
          }
        }
      }
    }
  };
  CastleListVO.prototype.addCastle = function (e, t) {
    if (!this._castles.get(t)) {
      this._castles.set(t, []);
    }
    this._castles.get(t).push(e);
  };
  CastleListVO.prototype.getFilteredList = function (e = -1) {
    if (e < 0) {
      var t = [];
      if (this._castles != null) {
        for (var i = 0, n = Array.from(this._castles.values()); i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && o != null) {
            for (var a = 0, s = o; a < s.length; a++) {
              var r = s[a];
              if (r !== undefined) {
                t.push(r);
              }
            }
          }
        }
      }
      return t;
    }
    return this._castles.get(e);
  };
  CastleListVO.prototype.getMapVOByAreaType = function (e, t = -1) {
    var i = this.getFilteredList(t);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.areaType == e) {
          return a;
        }
      }
    }
    return null;
  };
  CastleListVO.prototype.filter = function (e) {
    return this.getFilteredList().filter(e);
  };
  CastleListVO.prototype.getMainCastlesInKingdoms = function (e = null) {
    var t = false;
    var i = this.getFilteredList();
    var n = [];
    if (i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && (s.areaType == u.WorldConst.AREA_TYPE_CASTLE || s.areaType == u.WorldConst.AREA_TYPE_KINGDOM_CASTLE)) {
          if (e && e.length > 0) {
            t = false;
            for (var r = 0; r < e.length; ++r) {
              if (s.kingdomID == e[r]) {
                t = true;
                break;
              }
            }
          }
          if (!t) {
            n.push(s);
          }
        }
      }
    }
    return n;
  };
  CastleListVO.prototype.getHomeCastle = function () {
    return this.getMapVOByAreaType(u.WorldConst.AREA_TYPE_CASTLE, c.WorldClassic.KINGDOM_ID);
  };
  CastleListVO.prototype.getCapital = function () {
    return this.getMapVOByAreaType(u.WorldConst.AREA_TYPE_CAPITAL);
  };
  CastleListVO.prototype.getMetropol = function () {
    return this.getMapVOByAreaType(u.WorldConst.AREA_TYPE_METROPOL, c.WorldClassic.KINGDOM_ID);
  };
  CastleListVO.prototype.getMainFactionCastle = function () {
    var e = this.getFilteredList(l.FactionConst.KINGDOM_ID);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.factionEventVO && n.areaType == u.WorldConst.AREA_TYPE_FACTION_CAMP && n.objectId == this.factionEventVO.mainCampID) {
          return n;
        }
      }
    }
    return null;
  };
  CastleListVO.prototype.getKingdomIdByCastleId = function (e) {
    var t = this.getFilteredList();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.objectId == e) {
          return o.kingdomID;
        }
      }
    }
    return p.int(c.WorldClassic.KINGDOM_ID);
  };
  Object.defineProperty(CastleListVO.prototype, "factionEventVO", {
    get: function () {
      return h.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.getCastleVOByID = function (e, t = -1) {
    var i = this.getFilteredList(t);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.objectId == e) {
          return a;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleListVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    set: function (e) {
      this._ownerID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "list", {
    get: function () {
      var e = this.getFilteredList();
      e.sort(o.ClientConstSort.sortByMapObject);
      e.sort(o.ClientConstSort.sortByKingdomIdAndKingstowerAtEnd);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listForActionPanel", {
    get: function () {
      var e = this.composeActionPanelList();
      e.sort(o.ClientConstSort.sortByKingdomId);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listForPlayerInfo", {
    get: function () {
      var e = [];
      e.push(u.WorldConst.AREA_TYPE_ISLE_RESOURCE);
      var t = this.listOfCastlesWithoutAreaTypesAndEventCamps(e);
      t.sort(o.ClientConstSort.sortByMapObject);
      t.sort(o.ClientConstSort.sortByKingdomId);
      return t;
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.composeActionPanelList = function () {
    var e = [];
    if (this._castles != null) {
      for (var t = 0, i = Array.from(this._castles.values()); t < i.length; t++) {
        var n = i[t];
        if (n != null) {
          for (var o = 0, a = n; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && (s.areaType != u.WorldConst.AREA_TYPE_FACTION_CAMP || this.factionEventVO && s.objectId == this.factionEventVO.mainCampID)) {
              e.push(s);
            }
          }
        }
      }
    }
    return e;
  };
  Object.defineProperty(CastleListVO.prototype, "playerInfoCastlerList", {
    get: function () {
      return this.composeActionPanelList().sort(this.bindFunction(this.villageSorter));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listOfAllFactionCamps", {
    get: function () {
      if (this._castles.get(l.FactionConst.KINGDOM_ID)) {
        return this._castles.get(l.FactionConst.KINGDOM_ID).sort(o.ClientConstSort.sortByFactionCamp);
      } else {
        return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.listOfCastlesWithoutAreaTypesAndEventCamps = function (e) {
    var t = this.listOfCastlesWithoutEventCamps;
    var i = [];
    var n = false;
    if (t != null) {
      for (var o = 0, a = t; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          n = false;
          if (e != null) {
            for (var r = 0, l = e; r < l.length; r++) {
              var c = l[r];
              if (c !== undefined && s.areaType == c) {
                n = true;
              }
            }
          }
          if (!n) {
            i.push(s);
          }
        }
      }
    }
    return i;
  };
  Object.defineProperty(CastleListVO.prototype, "listOfCastlesWithoutEventCamps", {
    get: function () {
      var e = [];
      if (this.list != null) {
        for (var t = 0, i = this.list; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.kingdomID != l.FactionConst.KINGDOM_ID) {
            e.push(n);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listWithoutOcupiedOutposts", {
    get: function () {
      var e = [];
      if (this.list != null) {
        for (var t = 0, i = this.list; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (!n.isUnderConquerControl) {
              e.push(n);
            }
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listWithoutLandmarksUnoccupied", {
    get: function () {
      var e = [];
      if (this.list != null) {
        for (var t = 0, i = this.list; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (!n.isUnderConquerControl && (n.areaType == u.WorldConst.AREA_TYPE_CASTLE || n.areaType == u.WorldConst.AREA_TYPE_OUTPOST)) {
              e.push(n);
            }
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "listWithoutOcupiedOrDestroyedFactionCamps", {
    get: function () {
      var e = [];
      if (this.listOfAllFactionCamps != null) {
        for (var t = 0, i = this.listOfAllFactionCamps; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (!n.isUnderConquerControl && (!s.instanceOfClass(n, "FactionInteractiveMapobjectVO") || !n.isDestroyed)) {
              e.push(n);
            }
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "castleAmount", {
    get: function () {
      return this.getFilteredList().length;
    },
    enumerable: true,
    configurable: true
  });
  CastleListVO.prototype.getMainCastleByKingdomID = function (e) {
    var t = this.getFilteredList(e);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && (o.areaType == u.WorldConst.AREA_TYPE_CASTLE || o.areaType == u.WorldConst.AREA_TYPE_KINGDOM_CASTLE || o.areaType == u.WorldConst.AREA_TYPE_FACTION_CAMP && o.objectId == this.factionEventVO.mainCampID)) {
          o.ownerInfo = h.CastleModel.otherPlayerData.getOwnerInfoVO(this._ownerID);
          return o;
        }
      }
    }
    return null;
  };
  CastleListVO.prototype.hasCastleInKingdom = function (e) {
    return this.getMainCastleByKingdomID(e) != null;
  };
  Object.defineProperty(CastleListVO.prototype, "sortedVillages", {
    get: function () {
      var e = [];
      if (this._villages != null) {
        for (var t = 0, i = this._villages; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (!s.instanceOfClass(n, "ResourceIsleMapobjectVO")) {
              e.push(n);
            }
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListVO.prototype, "hasVillages", {
    get: function () {
      return this.sortedVillages.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleListVO;
}();
exports.CastleListVO = n;
var o = require("./75.js");
var a = require("./147.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./6.js");
var h = require("./4.js");