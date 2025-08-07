Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceLandmarksList() {
    this._capitals = [];
    this._metropols = [];
    this._kingstowers = [];
    this._monuments = [];
    this._laboratories = [];
    this._currentActiveSortAlgorithm = 0;
  }
  Object.defineProperty(AllianceLandmarksList.prototype, "completeListCount", {
    get: function () {
      return this.completeList.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "hasCapital", {
    get: function () {
      return this._capitals.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "hasMetropol", {
    get: function () {
      return this._metropols.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "hasKingstower", {
    get: function () {
      return this._kingstowers.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLandmarksList.prototype.getKingstowerBonus = function () {
    return _.int(this.kingstowers.length * d.OutpostConst.KINGS_TOWER_BONUS);
  };
  AllianceLandmarksList.prototype.getMonumentBonus = function () {
    var e = 0;
    if (this._monuments != null) {
      for (var t = 0, i = this._monuments; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.landmarkBonus > e) {
          e = _.int(n.landmarkBonus);
        }
      }
    }
    return e;
  };
  AllianceLandmarksList.prototype.getLaboratoryKingdomResourceBonus = function (e) {
    var t = 0;
    if (this._laboratories != null) {
      for (var i = 0, n = this._laboratories; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.kingdomID == e && o.landmarkBonus > t) {
          t = _.int(o.landmarkBonus);
        }
      }
    }
    return t;
  };
  AllianceLandmarksList.prototype.getMetropolBonus = function () {
    return f.CastleModel.areaData.activeCommonInfo.metropolBoost;
  };
  Object.defineProperty(AllianceLandmarksList.prototype, "fameBoost", {
    get: function () {
      var e = 0;
      if (this._monuments != null) {
        for (var t = 0, i = this._monuments; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && e < n.landmarkBonus) {
            e = _.int(n.landmarkBonus);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLandmarksList.prototype.parseCompleteLandmarksList = function (e) {
    this.parseCapitalList(e.ACA);
    this.parseMetropolList(e.ATC);
    this.parseKingstowerList(e.AKT);
    this.parseMonumentList(e.AMO);
    this.parseLaboratoryList(e.ALA);
  };
  AllianceLandmarksList.prototype.parseSLL = function (e) {
    this.parseLaboratoryList(e.ALA);
  };
  AllianceLandmarksList.prototype.parseCapitalList = function (e) {
    this._capitals = [];
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = new o.CapitalMapobjectVO();
        i.parseAreaInfo(e[t]);
        this._capitals.push(i);
      }
    }
  };
  AllianceLandmarksList.prototype.parseMetropolList = function (e) {
    this._metropols = [];
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = new r.MetropolMapobjectVO();
        i.parseAreaInfo(e[t]);
        this._metropols.push(i);
      }
    }
  };
  AllianceLandmarksList.prototype.parseKingstowerList = function (e) {
    this._kingstowers = [];
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = new a.KingstowerMapobjectVO();
        i.parseAreaInfo(e[t]);
        this._kingstowers.push(i);
      }
    }
  };
  AllianceLandmarksList.prototype.parseMonumentList = function (e) {
    this._monuments = [];
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = new l.MonumentMapobjectVO();
        i.parseAreaInfo(e[t]);
        this._monuments.push(i);
      }
    }
  };
  AllianceLandmarksList.prototype.parseLaboratoryList = function (e) {
    this._laboratories = [];
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = new s.LaboratoryMapobjectVO();
        i.parseAreaInfo(e[t]);
        this._laboratories.push(i);
      }
      m.CastleBasicController.getInstance().dispatchEvent(new c.LaboratoryEvent(c.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED));
    }
  };
  AllianceLandmarksList.prototype.getKingdomOrderIndex = function (e) {
    for (var t = 0; t < AllianceLandmarksList.KINGDOMS_ORDER.length; ++t) {
      if (e.kingdomID == AllianceLandmarksList.KINGDOMS_ORDER[t]) {
        return t;
      }
    }
    return -1;
  };
  AllianceLandmarksList.prototype.getLandmarksOrderIndex = function (e) {
    for (var t = 0; t < AllianceLandmarksList.LANDMARKS_ORDER.length; ++t) {
      if (u.instanceOfClass(e, "LANDMARKS_ORDER[i]")) {
        return t;
      }
    }
    return -1;
  };
  AllianceLandmarksList.prototype.getLowLevelCompareFunction = function (e) {
    switch (e) {
      case AllianceLandmarksList.SORT_BY_USER:
        return this.bindFunction(this.lowLevelSortByUser);
      case AllianceLandmarksList.SORT_BY_LEVEL:
        return this.bindFunction(this.lowLevelSortByLevel);
      case AllianceLandmarksList.SORT_BY_KINGDOM:
        return this.bindFunction(this.lowLevelSortByKingdom);
      default:
      case AllianceLandmarksList.SORT_BY_LANDMARK:
        return this.bindFunction(this.lowLevelSortByLandmark);
    }
  };
  AllianceLandmarksList.prototype.getSortProcessesBySortType = function (e) {
    switch (e) {
      case AllianceLandmarksList.SORT_BY_USER:
        return AllianceLandmarksList.SORT_BY_USER_PROCESSES;
      case AllianceLandmarksList.SORT_BY_LEVEL:
        return AllianceLandmarksList.SORT_BY_LEVEL_PROCESSES;
      case AllianceLandmarksList.SORT_BY_KINGDOM:
        return AllianceLandmarksList.SORT_BY_KINGDOM_PROCESSES;
      default:
      case AllianceLandmarksList.SORT_BY_LANDMARK:
        return AllianceLandmarksList.SORT_BY_LANDMARK_PROCESSES;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByLandmark = function (e, t) {
    var i = _.int(this.getLandmarksOrderIndex(e));
    var n = _.int(this.getLandmarksOrderIndex(t));
    if (i > n) {
      return 1;
    } else if (i < n) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByUser = function (e, t) {
    if (e.ownerInfo.playerName > t.ownerInfo.playerName) {
      return 1;
    } else if (e.ownerInfo.playerName < t.ownerInfo.playerName) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByLevel = function (e, t) {
    if (e.ownerInfo.playerLevel < t.ownerInfo.playerLevel) {
      return 1;
    } else if (e.ownerInfo.playerLevel > t.ownerInfo.playerLevel) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.lowLevelSortByKingdom = function (e, t) {
    if (this.getKingdomOrderIndex(e) > this.getKingdomOrderIndex(t)) {
      return 1;
    } else if (this.getKingdomOrderIndex(e) < this.getKingdomOrderIndex(t)) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceLandmarksList.prototype.highLevelSort = function (e, t) {
    for (var i = this.getSortProcessesBySortType(this._currentActiveSortAlgorithm), n = 0; n < i.length; ++n) {
      var o = _.int(this.getLowLevelCompareFunction(i[n])(e, t));
      if (o != 0) {
        return o;
      }
    }
    return 0;
  };
  AllianceLandmarksList.prototype.getCompleteListBySortType = function (e, t = false) {
    this._currentActiveSortAlgorithm = e;
    var i = this.completeList.sort(this.bindFunction(this.highLevelSort));
    if (t) {
      i.reverse();
    }
    return i;
  };
  Object.defineProperty(AllianceLandmarksList.prototype, "completeList", {
    get: function () {
      var e = [];
      return e = (e = (e = (e = (e = e.concat(this.capitals)).concat(this.metropols)).concat(this.kingstowers)).concat(this.monuments)).concat(this.laboratories);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "capitals", {
    get: function () {
      return this._capitals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "metropols", {
    get: function () {
      return this._metropols;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "kingstowers", {
    get: function () {
      return this._kingstowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "monuments", {
    get: function () {
      return this._monuments;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLandmarksList.prototype, "laboratories", {
    get: function () {
      return this._laboratories;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLandmarksList.__initialize_static_members = function () {
    AllianceLandmarksList.SORT_BY_LANDMARK_PROCESSES = [AllianceLandmarksList.SORT_BY_LANDMARK, AllianceLandmarksList.SORT_BY_LEVEL, AllianceLandmarksList.SORT_BY_USER, AllianceLandmarksList.SORT_BY_KINGDOM];
    AllianceLandmarksList.SORT_BY_USER_PROCESSES = [AllianceLandmarksList.SORT_BY_USER, AllianceLandmarksList.SORT_BY_KINGDOM];
    AllianceLandmarksList.SORT_BY_LEVEL_PROCESSES = [AllianceLandmarksList.SORT_BY_LEVEL, AllianceLandmarksList.SORT_BY_USER, AllianceLandmarksList.SORT_BY_KINGDOM];
    AllianceLandmarksList.SORT_BY_KINGDOM_PROCESSES = [AllianceLandmarksList.SORT_BY_KINGDOM, AllianceLandmarksList.SORT_BY_LANDMARK, AllianceLandmarksList.SORT_BY_LEVEL, AllianceLandmarksList.SORT_BY_USER];
    AllianceLandmarksList.LANDMARKS_ORDER = [o.CapitalMapobjectVO, r.MetropolMapobjectVO, a.KingstowerMapobjectVO, l.MonumentMapobjectVO, s.LaboratoryMapobjectVO];
    AllianceLandmarksList.KINGDOMS_ORDER = [p.WorldClassic.KINGDOM_ID, g.WorldIce.KINGDOM_ID, h.WorldDessert.KINGDOM_ID, C.WorldVolcano.KINGDOM_ID];
  };
  AllianceLandmarksList.SORT_BY_LANDMARK = 0;
  AllianceLandmarksList.SORT_BY_USER = 1;
  AllianceLandmarksList.SORT_BY_LEVEL = 2;
  AllianceLandmarksList.SORT_BY_KINGDOM = 3;
  return AllianceLandmarksList;
}();
exports.AllianceLandmarksList = n;
var o = require("./499.js");
var a = require("./508.js");
var s = require("./703.js");
var r = require("./577.js");
var l = require("./578.js");
var c = require("./423.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./6.js");
var m = require("./15.js");
var f = require("./4.js");
n.__initialize_static_members();