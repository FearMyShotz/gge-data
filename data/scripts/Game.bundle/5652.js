Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./5653.js");
var a = require("./5654.js");
var s = require("./5655.js");
var r = require("./15.js");
var l = require("./1697.js");
var c = require("./4.js");
var u = require("./5656.js");
var d = require("./5657.js");
var p = require("./375.js");
var h = require("./658.js");
var g = function () {
  function SamuraiDaimyoDataServer() {
    this._ownHighscoreRank = 0;
    this._ownHighscorePoints = 0;
    this._contractsCastles = [];
    this._contractsTownships = [];
    this._castles = [];
    this._townships = [];
    this._eventEndDialogData = [];
  }
  SamuraiDaimyoDataServer.prototype.requestGDW = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SGetDaimyoWarEffortsEventVO());
  };
  SamuraiDaimyoDataServer.prototype.parseGDW = function (e) {
    this._ownHighscoreRank = n.int(e.OR);
    this._ownHighscorePoints = n.int(e.TWE);
    this._castleWarEfforts = new Map();
    var t = 0;
    var i = 0;
    for (var o = 0, a = e.CWES; o < a.length; o++) {
      var s = a[o];
      if (s !== undefined) {
        t = n.int(s[0]);
        i = n.int(s[1]);
        this._castleWarEfforts.set(t, i);
      }
    }
    this._townshipWarEfforts = new Map();
    for (var l = 0, c = e.TWES; l < c.length; l++) {
      var u = c[l];
      if (u !== undefined) {
        t = n.int(u[0]);
        i = n.int(u[1]);
        this._townshipWarEfforts.set(t, i);
      }
    }
    r.CastleBasicController.getInstance().dispatchEvent(new h.SamuraiDaimyoEvent(h.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED));
  };
  SamuraiDaimyoDataServer.prototype.requestGDC = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new o.C2SGetDaimyoAllianceContractsEventVO());
  };
  SamuraiDaimyoDataServer.prototype.parseGDC = function (e) {
    if (e.DCC) {
      this._contractsCastles = [];
      for (var t = 0, i = e.DCC; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._contractsCastles.push(new d.SamuraiDaimyoContractProgressVO(n));
        }
      }
      this._contractsCastles.sort(SamuraiDaimyoDataServer.sortContracts);
    }
    if (e.DTC) {
      this._contractsTownships = [];
      for (var o = 0, a = e.DTC; o < a.length; o++) {
        n = a[o];
        this._contractsTownships.push(new d.SamuraiDaimyoContractProgressVO(n));
      }
      this._contractsTownships.sort(SamuraiDaimyoDataServer.sortContracts);
    }
    r.CastleBasicController.getInstance().dispatchEvent(new h.SamuraiDaimyoEvent(h.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED));
  };
  SamuraiDaimyoDataServer.prototype.requestGDA = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new a.C2SGetDaimyoAreasEventVO());
  };
  SamuraiDaimyoDataServer.prototype.parseGDA = function (e) {
    if (e.DC) {
      this._castles = [];
      for (var t = 0, i = e.DC; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._castles.push(new u.SamuraiDaimyoAreaVO(p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, n));
        }
      }
      this._castles.sort(SamuraiDaimyoDataServer.sortAreas);
    }
    if (e.DT) {
      this._townships = [];
      for (var o = 0, a = e.DT; o < a.length; o++) {
        n = a[o];
        this._townships.push(new u.SamuraiDaimyoAreaVO(p.SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP, n));
      }
      this._townships.sort(SamuraiDaimyoDataServer.sortAreas);
    }
    r.CastleBasicController.getInstance().dispatchEvent(new h.SamuraiDaimyoEvent(h.SamuraiDaimyoEvent.ON_AREAS_UPDATED));
  };
  SamuraiDaimyoDataServer.sortContracts = function (e, t) {
    return e.id - t.id;
  };
  SamuraiDaimyoDataServer.sortAreas = function (e, t) {
    return e.rank - t.rank;
  };
  SamuraiDaimyoDataServer.prototype.parseEventEndDialogData = function (e, t) {
    var i = new l.SamuraiEventEndDialogItemVO();
    i.parseServerObject(e, t);
    var n = false;
    for (var o = 0; o < this._eventEndDialogData.length; ++o) {
      var a = this._eventEndDialogData[o];
      if (i.itemType == a.itemType) {
        if (i.rank > 0) {
          a.rank = i.rank;
        }
        a.rewards.addList(i.rewards);
        n = true;
        break;
      }
    }
    if (!n) {
      this._eventEndDialogData.push(i);
      this._eventEndDialogData.sort(this.bindFunction(this.sortData));
    }
    r.CastleBasicController.getInstance().dispatchEvent(new h.SamuraiDaimyoEvent(h.SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED, [e, t]));
  };
  SamuraiDaimyoDataServer.prototype.clearEventEndDialogData = function () {
    this._eventEndDialogData = [];
  };
  SamuraiDaimyoDataServer.prototype.sortData = function (e, t) {
    return l.SamuraiEventEndDialogItemVO.TYPE_SORT_ORDER.indexOf(e.itemType) - l.SamuraiEventEndDialogItemVO.TYPE_SORT_ORDER.indexOf(t.itemType);
  };
  SamuraiDaimyoDataServer.prototype.getArea = function (e, t) {
    var i = e == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? this._castles : this._townships;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && t == a.rank) {
          return a;
        }
      }
    }
    return null;
  };
  SamuraiDaimyoDataServer.prototype.getXmlContract = function (e, t) {
    var i = e == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? this._contractsCastles : this._contractsTownships;
    var n = c.CastleModel.samuraiDaimyoData.xml.getContractsList(e);
    if (i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && n != null) {
          for (var r = 0, l = Array.from(n.values()); r < l.length; r++) {
            var u = l[r];
            if (u !== undefined && t == u.rank && s.id == u.id) {
              return u;
            }
          }
        }
      }
    }
    return null;
  };
  SamuraiDaimyoDataServer.prototype.getContractProgress = function (e, t) {
    var i = e == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? this._contractsCastles : this._contractsTownships;
    var n = c.CastleModel.samuraiDaimyoData.xml.getContractsList(e);
    if (i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && n != null) {
          for (var r = 0, l = Array.from(n.values()); r < l.length; r++) {
            var u = l[r];
            if (u !== undefined && t == u.rank && s.id == u.id) {
              return s;
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "ownHighscoreRank", {
    get: function () {
      return this._ownHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "ownHighscorePoints", {
    get: function () {
      return this._ownHighscorePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "contractsCastles", {
    get: function () {
      return this._contractsCastles;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "contractsTownships", {
    get: function () {
      return this._contractsTownships;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "castles", {
    get: function () {
      return this._castles;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "townships", {
    get: function () {
      return this._townships;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataServer.prototype, "eventEndDialogData", {
    get: function () {
      return this._eventEndDialogData;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoDataServer.prototype.getCastleWarEffort = function (e) {
    return n.int(this._castleWarEfforts.get(e) || 0);
  };
  SamuraiDaimyoDataServer.prototype.getTownshipWarEffort = function (e) {
    return n.int(this._townshipWarEfforts.get(e) || 0);
  };
  return SamuraiDaimyoDataServer;
}();
exports.SamuraiDaimyoDataServer = g;