Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./192.js");
var u = require("./72.js");
var d = require("./4.js");
var p = function (e) {
  function CastleKingdomData(t) {
    var i = e.call(this) || this;
    i._kingdomID = -1;
    i._willBecomeFaction = -1;
    i.tempTargetSpaceID = 0;
    i._kingdomVOs = new Map();
    var n = t.kingdoms;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = new _.CastleKingdomVO();
          r.fillFromParamXML(s);
          i._kingdomVOs.set(r.kID, r);
        }
      }
    }
    var l = t.slums;
    if (l != null) {
      for (var c = 0, u = l; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined) {
          var p = new m.CastleSlumDataVO();
          p.fillFromParamXML(d);
          i._kingdomVOs.get(p.kID).slumVOs.push(p);
        }
      }
    }
    var g = t.villages;
    if (g != null) {
      for (var C = 0, E = g; C < E.length; C++) {
        var y = E[C];
        if (y !== undefined) {
          var b = new f.KingdomVillagesInfoVO();
          b.fillFromParamXML(y);
          i._kingdomVOs.get(b.kID).villagesInfo = b;
        }
      }
    }
    i._eilandRewards = new h.CastleEilandRewardsVO(t);
    i._stormIslandsPreBuildCastles = [];
    if (t.islandPreBuiltCastles) {
      for (var D = 0, I = t.islandPreBuiltCastles; D < I.length; D++) {
        var T = I[D];
        if (T !== undefined) {
          var v = new O.SpecialServerPreBuiltCastleVO();
          v.parseXML(T);
          i._stormIslandsPreBuildCastles.push(v);
        }
      }
    }
    return i;
  }
  n.__extends(CastleKingdomData, e);
  CastleKingdomData.prototype.parse_KPI = function (e) {
    if (e) {
      if (e.UL) {
        for (var t = 0, i = e.UL; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            this.getKingdomVOByID(n.KID).parseUnlockInfo(n);
          }
        }
      }
      this._unitTransfers = [];
      if (e.UT) {
        for (var s = 0, r = e.UT; s < r.length; s++) {
          var l = r[s];
          if (l !== undefined) {
            var u = new C.CastleKingdomUnitTransferVO();
            u.fillFromParamObject(l);
            this._unitTransfers.push(u);
          }
        }
      }
      this._goodsTransfers = [];
      if (e.RT) {
        for (var p = 0, h = e.RT; p < h.length; p++) {
          var _ = h[p];
          if (_ !== undefined) {
            var m = new g.CastleKingdomGoodsTransferVO();
            m.fillFromParamObject(_);
            this._goodsTransfers.push(m);
          }
        }
      }
      if (e.fki) {
        var f = o.castAs(d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (f) {
          f.parse_FKI(e.fki);
        }
      }
      this.dispatchEvent(new c.CastleKingdomEvent(c.CastleKingdomEvent.KINGDOMDATA_ARRIVED));
    }
  };
  Object.defineProperty(CastleKingdomData.prototype, "activeKingdomID", {
    get: function () {
      return this._kingdomID;
    },
    set: function (e) {
      var t = this._kingdomID;
      this._willBecomeFaction = -1;
      this._kingdomID = e;
      if (t != this._kingdomID) {
        this.dispatchEvent(new c.CastleKingdomEvent(c.CastleKingdomEvent.KINGDOM_SWITCHED));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "activeKingdomVO", {
    get: function () {
      return this._kingdomVOs.get(this.activeKingdomID);
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomData.prototype.getKingdomThatIsReadyForUnlock = function () {
    for (var e = 0, t = r.WorldConst.WORLD_IDS; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && r.WorldConst.isLaboratoryKingdom(i)) {
        var n = this.getKingdomVOByID(i);
        if (n && n.canBeUnlockedEarlyWithC2 && d.CastleModel.userData.userLevel >= n.minPremiumUnlockLevel && d.CastleModel.userData.userLevel < n.minNonPremiumUnlockLevel && !n.isPaid) {
          return n;
        }
      }
    }
    return null;
  };
  CastleKingdomData.prototype.getKingdomVOByID = function (e) {
    return this._kingdomVOs.get(e);
  };
  CastleKingdomData.prototype.getIncomingGoodsTransferByKingdomID = function (e) {
    if (this._goodsTransfers != null) {
      for (var t = 0, i = this._goodsTransfers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.targetKingdomID === e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleKingdomData.prototype.getIncomingUnitsTransferByKingdomID = function (e) {
    if (this._unitTransfers != null) {
      for (var t = 0, i = this._unitTransfers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.targetKingdomID === e) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleKingdomData.prototype, "numUnlockedKingdoms", {
    get: function () {
      var e = 0;
      if (this._kingdomVOs != null) {
        for (var t = 0, i = Array.from(this._kingdomVOs.values()); t < i.length; t++) {
          var n = i[t];
          if (n.isPaid && n.kID != s.FactionConst.KINGDOM_ID) {
            e++;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "minNonPremiumUnlockLevelForKingdoms", {
    get: function () {
      var e = 99;
      if (this._kingdomVOs != null) {
        for (var t = 0, i = Array.from(this._kingdomVOs.values()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.minNonPremiumUnlockLevel < e && n.minNonPremiumUnlockLevel > 0) {
            e = n.minNonPremiumUnlockLevel;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomData.prototype.isKingdomUnlockable = function (e) {
    if (e.requiredKingdomID <= 0) {
      return true;
    }
    if (this._kingdomVOs != null) {
      for (var t = 0, i = Array.from(this._kingdomVOs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.kID == e.requiredKingdomID) {
          return n.isPaid;
        }
      }
    }
    return false;
  };
  CastleKingdomData.prototype.isAnyKingdomUnlocked = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.isKingdomUnlocked(n)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleKingdomData.prototype.isKingdomUnlocked = function (e) {
    var t = this._kingdomVOs.get(e);
    return !!t && t.isPaid;
  };
  CastleKingdomData.prototype.getSlumVOByPartPayPriceId = function (e) {
    if (this._kingdomVOs != null) {
      for (var t = 0, i = Array.from(this._kingdomVOs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          for (var o = 0, a = n.slumVOs; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && s.partpaypriceVO != null && s.partpaypriceVO.id == e) {
              return s;
            }
          }
        }
      }
    }
    return null;
  };
  CastleKingdomData.prototype.canPlayerGoToKingdom = function (e) {
    if (e == s.FactionConst.KINGDOM_ID && !d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION)) {
      return false;
    }
    var t = this.getKingdomVOByID(e);
    return d.CastleModel.userData.userLevel >= t.minLevel && t.isPaid;
  };
  Object.defineProperty(CastleKingdomData.prototype, "eilandRewards", {
    get: function () {
      return this._eilandRewards;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomData.prototype.resetEilandData = function () {
    this.getKingdomVOByID(l.WorldIsland.KINGDOM_ID).resetUnlockData();
  };
  Object.defineProperty(CastleKingdomData.prototype, "willBecomeFaction", {
    get: function () {
      return this._willBecomeFaction;
    },
    set: function (e) {
      this._willBecomeFaction = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "kingdomVOs", {
    get: function () {
      return this._kingdomVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "stormIslandsPreBuildCastles", {
    get: function () {
      return this._stormIslandsPreBuildCastles;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomData;
}(u.CastleEventDispatcher);
exports.CastleKingdomData = p;
var h = require("./668.js");
var g = require("./5381.js");
var C = require("./5382.js");
var _ = require("./5383.js");
var m = require("./5384.js");
var f = require("./5385.js");
var O = require("./1160.js");