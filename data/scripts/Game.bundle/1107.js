Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./3856.js");
var l = require("./118.js");
var c = require("./15.js");
var u = require("./72.js");
var d = require("./4.js");
var p = function (e) {
  function CastleLordData(t) {
    var i = e.call(this) || this;
    i._barons = [];
    i._commanders = [];
    i._defaultLords = new Map();
    i._defaultLordsWithoutEquipment = new Map();
    var n = t.lords;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined) {
          var l = s.int(r.lordID || "");
          var c = new g.DefaultLordVO();
          c.parseFromXml(r);
          i._defaultLords.set(l, c);
          var u = new g.DefaultLordVO();
          u.parseFromXml(r, false);
          i._defaultLordsWithoutEquipment.set(l, u);
        }
      }
    }
    return i;
  }
  n.__extends(CastleLordData, e);
  CastleLordData.prototype.parse_GLI = function (e) {
    if (e) {
      this._barons = [];
      this._commanders = [];
      for (var t = 0, i = e.B; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new h.BaronVO();
          o.parseLord(n);
          if (this.isLordLocked(o.id)) {
            o.lock();
          }
          this._barons.push(o);
        }
      }
      for (var s = 0, r = e[a.CommKeys.COMMANDERS]; s < r.length; s++) {
        var c = r[s];
        if (c !== undefined) {
          var u = new C.CommanderVO();
          u.parseLord(c);
          if (this.isLordLocked(u.id)) {
            u.lock();
          }
          this._commanders.push(u);
        }
      }
      this._barons.sort(this.bindFunction(this.onSortBaron));
      this._commanders.sort(this.bindFunction(this.onSortLord));
      for (var p = 0; p < this._commanders.length; p++) {
        this._commanders[p].playerIndex = p + 1;
      }
      d.CastleModel.generalsData.updateAssignedLords();
      this.dispatchEvent(new l.CastleEquipmentEvent(l.CastleEquipmentEvent.LORDS_UPDATED));
    }
  };
  CastleLordData.prototype.onSortLord = function (e, t) {
    if (e.id > t.id) {
      return 1;
    } else if (t.id > e.id) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleLordData.prototype.onSortBaron = function (e, t) {
    if (e.baronOrderPosition > t.baronOrderPosition) {
      return 1;
    } else if (t.baronOrderPosition > e.baronOrderPosition) {
      return -1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleLordData.prototype, "numAvailableCommanders", {
    get: function () {
      var e = 0;
      if (this._commanders != null) {
        for (var t = 0, i = this._commanders; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.isAvailableForMovement) {
            e++;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "numAllCommanders", {
    get: function () {
      return this._commanders.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "numAvailableBarons", {
    get: function () {
      var e = 0;
      if (this._barons != null) {
        for (var t = 0, i = this._barons; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.isAvailableForMovement) {
            e++;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "numAllBarons", {
    get: function () {
      return this._barons.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "commanders", {
    get: function () {
      return this._commanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordData.prototype, "barons", {
    get: function () {
      return this._barons;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordData.prototype.dummyCapitalBarons = function (e) {
    var t = [];
    t.push(this.getDummyCapitalBaron(e));
    return t;
  };
  CastleLordData.prototype.getDummyCapitalBaron = function (e) {
    var t = new h.BaronVO();
    t.isDummyBaron = true;
    t.picID = a.EquipmentConst.getBaronCapitalPick(e);
    return t;
  };
  Object.defineProperty(CastleLordData.prototype, "dummyMetropolBarons", {
    get: function () {
      var e = [];
      e.push(this.getDummyMetropolBaron());
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordData.prototype.getDummyMetropolBaron = function () {
    var e = new h.BaronVO();
    e.isDummyBaron = true;
    e.picID = a.EquipmentConst.PICK_BARON_METROPOL;
    return e;
  };
  Object.defineProperty(CastleLordData.prototype, "factionBarons", {
    get: function () {
      var e = [];
      if (this._barons != null) {
        for (var t = 0, i = this._barons; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.picID == a.EquipmentConst.PICK_BARON_FACTION) {
            e.push(n);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordData.prototype.getDefaultLordsByType = function (e) {
    var t = [];
    if (this._defaultLords != null) {
      for (var i = 0, n = Array.from(this._defaultLords.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.type == e) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleLordData.prototype.getDefaultLordByID = function (e) {
    return this._defaultLords.get(e);
  };
  CastleLordData.prototype.getDefaultLordWithoutEquipmentByID = function (e) {
    return this._defaultLordsWithoutEquipment.get(e);
  };
  CastleLordData.prototype.getCommanderByID = function (e) {
    if (this._commanders != null) {
      for (var t = 0, i = this._commanders; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleLordData.prototype.getBaronByID = function (e) {
    if (this._barons != null) {
      for (var t = 0, i = this._barons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleLordData.prototype.getLordByID = function (e) {
    if (this.commanders != null) {
      for (var t = 0, i = this.commanders; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    if (this.barons != null) {
      for (var o = 0, a = this.barons; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.id == e) {
          return s;
        }
      }
    }
    if (this._defaultLords != null) {
      return this._defaultLords.get(e);
    } else {
      return null;
    }
  };
  CastleLordData.prototype.getBaronByCastleMapObjectVO = function (e) {
    var t = 0;
    t = o.instanceOfClass(e, "VillageMapobjectVO") || o.instanceOfClass(e, "KingstowerMapobjectVO") || o.instanceOfClass(e, "MonumentMapobjectVO") || o.instanceOfClass(e, "LaboratoryMapobjectVO") ? s.int(d.CastleModel.userData.castleList.getMainCastleByKingdomID(e.kingdomID).objectId) : e.objectId;
    return this.getBaronByCastleId(t);
  };
  CastleLordData.prototype.getBaronByCastleId = function (e) {
    if (this.barons != null) {
      for (var t = 0, i = this.barons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.lockedInCastleID == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleLordData.prototype.getTotalBaronEffectValue = function (e) {
    var t = 0;
    if (this.barons != null) {
      for (var i = 0, n = this.barons; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t += o.getEffectValue(e);
        }
      }
    }
    return t;
  };
  CastleLordData.prototype.lockLord = function (e) {
    var t = this.getLordByID(e);
    if (t) {
      this._lockedLordIDs ||= [];
      this._lockedLordIDs.push(e);
      t.lock();
    }
  };
  CastleLordData.prototype.unlockLords = function () {
    if (this.commanders != null) {
      for (var e = 0, t = this.commanders; e < t.length; e++) {
        o = t[e];
        if (o !== undefined) {
          o.unlock();
        }
      }
    }
    if (this.barons != null) {
      for (var i = 0, n = this.barons; i < n.length; i++) {
        var o;
        o = n[i];
        if (o !== undefined) {
          o.unlock();
        }
      }
    }
    this._lockedLordIDs = [];
  };
  CastleLordData.prototype.isLordLocked = function (e) {
    if (this._lockedLordIDs != null) {
      for (var t = 0, i = this._lockedLordIDs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e == n) {
          return true;
        }
      }
    }
    return false;
  };
  CastleLordData.prototype.assignGeneral = function (e, t = null) {
    var i = this.commanders.concat(this.barons);
    var n = e ? i.find(function (t) {
      return t.id == e.id;
    }) : null;
    if (n) {
      if (t) {
        var o = i.find(function (e) {
          return e.assignedGeneralVO == t;
        });
        if (o) {
          o.assignedGeneralVO = null;
        }
      }
      n.assignedGeneralVO = t;
      d.CastleModel.smartfoxClient.sendCommandVO(new r.C2SGeneralAssignLord(n.id, t ? t.generalID : -1));
      d.CastleModel.generalsData.updateAssignedLords();
      c.CastleBasicController.getInstance().dispatchEvent(new l.CastleEquipmentEvent(l.CastleEquipmentEvent.GENERAL_ASSIGNED));
    }
  };
  CastleLordData.prototype.getAssignedLord = function (e) {
    return this.commanders.concat(this.barons).find(function (t) {
      return t.assignedGeneralVO == e;
    });
  };
  CastleLordData.DEFAULT_LORD_TYPE_PREMIUM = "Premium";
  CastleLordData.DEFAULT_LORD_TYPE_TREASUREMAP = "Treasuremap";
  return CastleLordData;
}(u.CastleEventDispatcher);
exports.CastleLordData = p;
var h = require("./1321.js");
var g = require("./3857.js");
var C = require("./1322.js");