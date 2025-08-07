Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./188.js");
var c = require("./685.js");
var u = require("./243.js");
var d = require("./410.js");
var p = require("./53.js");
var h = require("./30.js");
var g = require("./15.js");
var C = require("./72.js");
var _ = require("./213.js");
var m = require("./4.js");
var f = require("./35.js");
var O = function (e) {
  function CastleTitleData(t) {
    var i = e.call(this) || this;
    i.amountOfPossibleTitles = 0;
    i._allPossibleTitles = new Map();
    i._allTitlesBerimondByOrder = [];
    i._allTitlesFameByOrder = [];
    i._allTitlesIslandByOrder = [];
    i._allTitlesAllianceCityByOrder = [];
    i._thisUsersTitlesBerimondByOrder = [];
    i._thisUsersTitlesFameByOrder = [];
    i._mixedIslandTitles = [];
    i._thisUsersCurrentIslandTitle = CastleTitleData.NULL_TITLE;
    i._thisUsersCurrentAllianceCityTitle = CastleTitleData.NULL_TITLE;
    i._thisUsersGloryPoints = 0;
    i._thisUsersBraveryPoints = 0;
    i._thisUsersIslandPoints = 0;
    i._thisUsersHighestEverGloryPoints = 0;
    i._thisUsersHighestEverBraveryPoints = 0;
    i._topXGloryResetTimestamp = 0;
    i._topXBraveryResetTimestamp = 0;
    i._currentTopXRankBerimond = 0;
    i._currentTopXRankGlory = 0;
    i._currentIslandTitleID = 0;
    i._currentAllianceCityTitleID = 0;
    i.parseFromXML(t);
    return i;
  }
  n.__extends(CastleTitleData, e);
  CastleTitleData.prototype.parseFromXML = function (e) {
    this.amountOfPossibleTitles = 0;
    this._mixedIslandTitles = [];
    for (var t = 0, i = e.titles; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new E.TitleVO();
        o.parseXml(n);
        this._allPossibleTitles.set(o.titleID, o);
        this.amountOfPossibleTitles++;
      }
    }
    this.setupNextTitles();
    this.orderTitlesInSystem(l.ClientConstTitle.BRAVERY_TITLE, this._allTitlesBerimondByOrder);
    this.orderTitlesInSystem(l.ClientConstTitle.GLORY_TITLE, this._allTitlesFameByOrder);
    this.orderTitlesInSystem(l.ClientConstTitle.ISLAND_TITLE, this._allTitlesIslandByOrder);
  };
  CastleTitleData.prototype.setupNextTitles = function () {
    if (this._allPossibleTitles != null) {
      for (var e = 0, t = Array.from(this._allPossibleTitles.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          if (i.previousTitleID != -1) {
            this._allPossibleTitles.get(i.previousTitleID).nextTitleID = i.titleID;
          }
          if (i.hasOneOrMoreEffectTypes([f.EffectTypeEnum.EFFECT_TYPE_ISLAND_KING])) {
            this._islandKingTitle = i;
          }
        }
      }
    }
  };
  CastleTitleData.prototype.parseO = function (e) {
    if (e.OID == m.CastleModel.userData.playerID) {
      this._currentIslandTitleID = s.int(e.TI);
      g.CastleBasicController.getInstance().dispatchEvent(new u.CastleEilandEvent(u.CastleEilandEvent.NEW_EILAND_TITLE));
    }
  };
  CastleTitleData.prototype.parseAPT = function (e) {
    if (e.TI) {
      this._currentIslandTitleID = s.int(e.TI);
      this._thisUsersCurrentIslandTitle = this._allPossibleTitles.get(this._currentIslandTitleID);
      m.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetCastleProductionDataVO());
      g.CastleBasicController.getInstance().dispatchEvent(new u.CastleEilandEvent(u.CastleEilandEvent.NEW_EILAND_TITLE));
    }
  };
  CastleTitleData.prototype.parseUAR = function (e) {
    this._suffixTitleSystem = e.SFX;
    this._prefixTitleSystem = e.PFX;
    var t = e.BTM;
    var i = e.FTM;
    var n = e.ITM;
    this._currentTopXRankBerimond = s.int(t.CTXT);
    this._currentTopXRankGlory = s.int(i.CTXT);
    this.parseIslandDataFromServer(n);
    if (e.ATM !== undefined) {
      this.parseAllianceCityDataFromServer(e.ATM);
    }
    this._topXGloryResetTimestamp = s.int(h.CachedTimer.getCachedTimer() + i.RS * r.ClientConstTime.SEC_2_MILLISEC);
    this._topXBraveryResetTimestamp = s.int(h.CachedTimer.getCachedTimer() + t.RS * r.ClientConstTime.SEC_2_MILLISEC);
    this.assignTopXThresholds(l.ClientConstTitle.GLORY_TITLE, i.NTFP);
    this.assignTopXThresholds(l.ClientConstTitle.BRAVERY_TITLE, t.NTFP);
    this.assignTop1PlayerID(l.ClientConstTitle.GLORY_TITLE, i.TOID);
    this.assignTop1PlayerID(l.ClientConstTitle.BRAVERY_TITLE, t.TOID);
    this._thisUsersTitlesFameByOrder = [];
    this._thisUsersTitlesBerimondByOrder = [];
    this.setupThisUsersTitlesinSystem(this._allTitlesFameByOrder, this._thisUsersTitlesFameByOrder, this._thisUsersGloryPoints, this._currentTopXRankGlory);
    this.setupThisUsersTitlesinSystem(this._allTitlesBerimondByOrder, this._thisUsersTitlesBerimondByOrder, this._thisUsersBraveryPoints, this._currentTopXRankBerimond);
    this.dispatchEvent(new d.CastleTitleDataEvent(d.CastleTitleDataEvent.TITLE_DATA_UPDATED));
  };
  CastleTitleData.prototype.parseIslandDataFromServer = function (e) {
    this.resetIslandTitle();
    var t = e.TID;
    if (t > -1) {
      this._currentIslandTitleID = t;
      this._thisUsersCurrentIslandTitle = this._allPossibleTitles.get(this._currentIslandTitleID) || CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.parseAllianceCityDataFromServer = function (e) {
    if (this._allTitlesAllianceCityByOrder != null) {
      for (var t = 0, i = this._allTitlesAllianceCityByOrder; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.resetAssignment();
        }
      }
    }
    var o = -1;
    if (e.TID !== undefined && e.PID !== undefined) {
      this._allPossibleTitles.get(e.TID).currentAssigneePID = e.PID;
      s.int(m.CastleModel.userData.playerID);
      if (e.PID == m.CastleModel.userData.playerID) {
        o = s.int(e.TID);
      }
    }
    if (o > 0) {
      this._currentAllianceCityTitleID = o;
      this._thisUsersCurrentAllianceCityTitle = this._allPossibleTitles.get(this._currentAllianceCityTitleID);
    } else {
      this._currentAllianceCityTitleID = -1;
      this._thisUsersCurrentAllianceCityTitle = CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.parseIOT = function (e) {};
  CastleTitleData.prototype.parseUFA = function (e) {
    this._thisUsersGloryPoints = y(e.CF) ? parseInt(e.CF) : e.CF;
    this._thisUsersHighestEverGloryPoints = y(e.HF) ? parseInt(e.HF) : e.HF;
    this._thisUsersTitlesFameByOrder = [];
    this.setupThisUsersTitlesinSystem(this._allTitlesFameByOrder, this._thisUsersTitlesFameByOrder, this._thisUsersGloryPoints, this._currentTopXRankGlory);
    this._thisUsersHighestEverGloryTitle = this.setupThisUsersHighestTitleinSystem(this._allTitlesFameByOrder, this._thisUsersHighestEverGloryPoints);
    this.dispatchEvent(new d.CastleTitleDataEvent(d.CastleTitleDataEvent.TITLE_DATA_UPDATED));
  };
  CastleTitleData.prototype.parseUFP = function (e) {
    this._thisUsersBraveryPoints = parseInt(e.CFP);
    this._thisUsersHighestEverBraveryPoints = parseInt(e.HFP);
    this._thisUsersTitlesBerimondByOrder = [];
    this.setupThisUsersTitlesinSystem(this._allTitlesBerimondByOrder, this._thisUsersTitlesBerimondByOrder, this._thisUsersBraveryPoints, this._currentTopXRankBerimond);
    this._thisUsersHighestEverBraveryTitle = this.setupThisUsersHighestTitleinSystem(this._allTitlesBerimondByOrder, this._thisUsersHighestEverBraveryPoints);
    this.dispatchEvent(new d.CastleTitleDataEvent(d.CastleTitleDataEvent.TITLE_DATA_UPDATED));
  };
  CastleTitleData.prototype.parseUHT = function (e) {
    if (e) {
      this._topXGloryResetTimestamp = h.CachedTimer.getCachedTimer() + parseInt(e.RS) * r.ClientConstTime.SEC_2_MILLISEC;
      this.dispatchEvent(new d.CastleTitleDataEvent(d.CastleTitleDataEvent.TITLE_DATA_UPDATED));
    }
  };
  CastleTitleData.prototype.parseSTE = function (e) {
    if (e.SFX) {
      this._suffixTitleSystem = e.SFX;
    }
    if (e.PFX) {
      this._prefixTitleSystem = e.PFX;
    }
  };
  CastleTitleData.prototype.assignTop1PlayerID = function (e, t) {
    this.getHighestPossibleTitleInSystem(e).currentAssigneePID = t;
  };
  CastleTitleData.prototype.assignTopXThresholds = function (e, t) {
    var i = this.getTitlesFromSystem(e);
    for (var n = 0; n < t.length; n++) {
      var o = s.int(t[n]);
      i[i.length - 1 - n].threshold = o;
    }
  };
  CastleTitleData.prototype.setupThisUsersTitlesinSystem = function (e, t, i, n) {
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          if ((!!s.isTopXTitle || !(s.threshold <= i)) && (!s.isTopXTitle || !(n > 0) || !(s.topX >= n))) {
            break;
          }
          t.push(s);
        }
      }
    }
  };
  CastleTitleData.prototype.setupThisUsersHighestTitleinSystem = function (e, t) {
    var i;
    for (var n = 0; e.length > n && e[n].threshold <= t;) {
      i = e[n];
      n++;
    }
    return i;
  };
  CastleTitleData.prototype.orderTitlesInSystem = function (e, t) {
    var i = s.int(Number.MAX_VALUE);
    var n = 0;
    var o = 0;
    if (this._allPossibleTitles != null) {
      for (var a = 0, r = Array.from(this._allPossibleTitles.values()); a < r.length; a++) {
        var l = r[a];
        if (l !== undefined && l.titleSystem == e) {
          n++;
          if (l.previousTitleID < 0) {
            i = l.titleID;
          }
        }
      }
    }
    for (var c = this._allPossibleTitles.get(i); c && o <= n;) {
      t[o] = c;
      c.orderInSystem = o;
      o++;
      c = this._allPossibleTitles.get(c.nextTitleID);
    }
  };
  CastleTitleData.prototype.verifyTitleData = function () {
    var e = 0;
    if (this._allPossibleTitles != null) {
      for (var t = 0, i = Array.from(this._allPossibleTitles.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (n.previousTitleID == -1 && n.titleSystem != l.ClientConstTitle.ISLAND_TITLE && e++, !l.ClientConstTitle.isValidTitleSystem(n.titleSystem))) {
          throw new Error("CastleTitleData.verifyTitleData ... title has no known system ID:" + n.titleID);
        }
      }
    }
    if (e != 3) {
      o.warn("CastleTitleData.verifyTitleData ... we have an incorrect amount Titles Without a PreviosTitle ID!!!");
    }
    if (this._allTitlesBerimondByOrder.length + this._allTitlesFameByOrder.length + this._allTitlesIslandByOrder.length + this._allTitlesAllianceCityByOrder.length != this.amountOfPossibleTitles) {
      throw new Error("CastleTitleData.verifyTitleData ... titleSystem VectorLengths do NOT match totalVectorLength!!! " + this.amountOfPossibleTitles);
    }
  };
  Object.defineProperty(CastleTitleData.prototype, "thisUsersTitles", {
    get: function () {
      return [].concat(this._thisUsersTitlesFameByOrder, this._thisUsersTitlesBerimondByOrder, this.getUsersTitleVectorFromSystem(l.ClientConstTitle.ISLAND_TITLE));
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleData.prototype.getTitlesFromSystem = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return this._allTitlesBerimondByOrder;
      case l.ClientConstTitle.GLORY_TITLE:
        return this._allTitlesFameByOrder;
      case l.ClientConstTitle.ISLAND_TITLE:
        return this._allTitlesIslandByOrder;
      default:
        return this.getAllPossibleTitlesVector();
    }
  };
  CastleTitleData.prototype.getHighestPossibleTitleInSystem = function (e) {
    var t = this.getTitlesFromSystem(e);
    return t[t.length - 1];
  };
  CastleTitleData.prototype.getDisplayableTitles = function (e = l.ClientConstTitle.DISPLAYTYPE_PREFIX) {
    var t = new Map();
    var i = [];
    if (this.thisUsersTitles != null) {
      for (var n = 0, o = this.thisUsersTitles; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && e == a.displayType) {
          var s = t.get(a.titleSystem);
          if (!s || a.orderInSystem > s.orderInSystem) {
            t.set(a.titleSystem, a);
          }
        }
      }
    }
    if (t != null) {
      for (var r = 0, c = Array.from(t.values()); r < c.length; r++) {
        var u = c[r];
        if (u !== undefined) {
          i.push(u);
        }
      }
    }
    return i;
  };
  CastleTitleData.prototype.getProgressForNextTitleInSystem = function (e) {
    var t = this.getHighestTitleCurrentlyHeldByThisUser(e);
    if (t.nextTitleID == -1) {
      return 1;
    }
    var i = this.getNextTitle(t.titleID);
    return this.getProgressTo(i);
  };
  CastleTitleData.prototype.getProgressPointsForNextTitleInSystem = function (e) {
    return s.int(this.calculateNextTitleInt(e, 0, this.bindFunction(this.getProgressPointsTo)));
  };
  CastleTitleData.prototype.calculateNextTitleInt = function (e, t, i) {
    var n = this.getHighestTitleCurrentlyHeldByThisUser(e);
    if (n.nextTitleID == -1) {
      return t;
    }
    var o = this.getNextTitle(n.titleID);
    return s.int(i(o));
  };
  CastleTitleData.prototype.getCurrentThreshold = function (e) {
    var t = this.getHighestTitleCurrentlyHeldByThisUser(e);
    return s.int(t ? t.threshold : 0);
  };
  CastleTitleData.prototype.getProgressPointsTo = function (e) {
    if (!e) {
      return 0;
    }
    var t = this.getCurrentThreshold(e.titleSystem);
    return s.int(e.threshold - t) - s.int(this.getPointsInSystem(e.titleSystem) - t);
  };
  CastleTitleData.prototype.getProgressTo = function (e) {
    if (!e) {
      return 0;
    }
    var t = this.getHighestTitleCurrentlyHeldByThisUser(e.titleSystem);
    var i = Math.max(t.threshold, 0);
    var n = s.int(e.threshold - i);
    var o = s.int(this.getPointsInSystem(e.titleSystem) - i);
    if (n == 0) {
      return 1;
    } else {
      return _.CastleMathHelper.clamp(o / n, 0, 1);
    }
  };
  CastleTitleData.prototype.getTitleByTitleID = function (e) {
    return this._allPossibleTitles.get(e) || CastleTitleData.NULL_TITLE;
  };
  CastleTitleData.prototype.getAllPossibleTitlesVector = function () {
    var e = [];
    if (this._allPossibleTitles != null) {
      for (var t = 0, i = Array.from(this._allPossibleTitles.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n);
        }
      }
    }
    return e;
  };
  CastleTitleData.prototype.getUsersTitleVectorFromSystem = function (e) {
    var t;
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return this._thisUsersTitlesBerimondByOrder;
      case l.ClientConstTitle.GLORY_TITLE:
        return this._thisUsersTitlesFameByOrder;
      case l.ClientConstTitle.ISLAND_TITLE:
        t = [];
        if (this._thisUsersCurrentIslandTitle && this._thisUsersCurrentIslandTitle != CastleTitleData.NULL_TITLE) {
          t.push(this._thisUsersCurrentIslandTitle);
          for (var i = this.getTitleByTitleID(this._thisUsersCurrentIslandTitle.previousTitleID); i && i != CastleTitleData.NULL_TITLE;) {
            t.unshift(i);
            i = this.getTitleByTitleID(i.previousTitleID);
          }
        }
        return t;
      default:
        return null;
    }
  };
  CastleTitleData.prototype.getUsersTitleVectorFromSystemByDisplayType = function (e, t) {
    var i = [];
    for (var n = 0, o = this.getUsersTitleVectorFromSystem(e); n < o.length; n++) {
      var a = o[n];
      if (a.displayType == t) {
        i.push(a);
      }
    }
    return i;
  };
  CastleTitleData.prototype.getHighestTitleEverHeldByThisUser = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return this._thisUsersHighestEverBraveryTitle;
      case l.ClientConstTitle.GLORY_TITLE:
        return this._thisUsersHighestEverGloryTitle;
      default:
        return CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.getHighestTitleCurrentlyHeldByThisUser = function (e) {
    if (this.getUsersTitleVectorFromSystem(e).length > 0) {
      return this.getUsersTitleVectorFromSystem(e)[this.getUsersTitleVectorFromSystem(e).length - 1];
    } else {
      return CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.getNextTitle = function (e) {
    return this._allPossibleTitles.get(this._allPossibleTitles.get(e).nextTitleID);
  };
  Object.defineProperty(CastleTitleData.prototype, "isSuffixAvailable", {
    get: function () {
      return this.getDisplayableTitles(l.ClientConstTitle.DISPLAYTYPE_SUFFIX).length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleData.prototype.getSelectedTitleByDisplayType = function (e) {
    var t;
    if (e == l.ClientConstTitle.DISPLAYTYPE_SUFFIX) {
      t = this.getUsersTitleVectorFromSystemByDisplayType(this._suffixTitleSystem, e);
    } else if (e == l.ClientConstTitle.DISPLAYTYPE_PREFIX) {
      t = this.getUsersTitleVectorFromSystemByDisplayType(this._prefixTitleSystem, e);
    }
    if (t && t.length != 0) {
      return t[t.length - 1];
    } else {
      return CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.getSelectedTitleSystem = function (e) {
    if (e == l.ClientConstTitle.DISPLAYTYPE_PREFIX) {
      return this._prefixTitleSystem;
    } else if (e == l.ClientConstTitle.DISPLAYTYPE_SUFFIX) {
      return this._suffixTitleSystem;
    } else {
      return "";
    }
  };
  CastleTitleData.prototype.getPointsInSystem = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return this._thisUsersBraveryPoints;
      case l.ClientConstTitle.GLORY_TITLE:
        return this._thisUsersGloryPoints;
      case l.ClientConstTitle.ISLAND_TITLE:
        return this._thisUsersIslandPoints;
      default:
        return -1;
    }
  };
  CastleTitleData.prototype.getTopXRankInSystem = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return this._currentTopXRankBerimond;
      case l.ClientConstTitle.GLORY_TITLE:
        return this._currentTopXRankGlory;
      case l.ClientConstTitle.ISLAND_TITLE:
        return this._currentIslandTitleID;
      default:
        return -1;
    }
  };
  CastleTitleData.prototype.getRankTimerRemainingSecondsOfSystem = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return (this._topXBraveryResetTimestamp - h.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
      case l.ClientConstTitle.GLORY_TITLE:
        return (this._topXGloryResetTimestamp - h.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
      default:
        return -1;
    }
  };
  CastleTitleData.prototype.getMaxDefaultThresholdInSystem = function (e) {
    var t = 0;
    for (var i = 0, n = this.getTitlesFromSystem(e); i < n.length; i++) {
      var o = n[i];
      if (!o.isTopXTitle && o.threshold >= t) {
        t = o.threshold;
      }
    }
    return t;
  };
  CastleTitleData.prototype.isSystemAvailable = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
        return !p.ABGHelper.isOnABGServer && (this._thisUsersHighestEverBraveryPoints > 0 || !!m.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION));
      case l.ClientConstTitle.GLORY_TITLE:
        return true;
      case l.ClientConstTitle.ISLAND_TITLE:
      default:
        return false;
    }
  };
  CastleTitleData.prototype.isDecaying = function (e) {
    switch (e) {
      case l.ClientConstTitle.BRAVERY_TITLE:
      case l.ClientConstTitle.GLORY_TITLE:
        return true;
      default:
        return false;
    }
  };
  CastleTitleData.prototype.hasIslandTitleSelected = function () {
    return this.getSelectedTitleByDisplayType(l.ClientConstTitle.DISPLAYTYPE_PREFIX).titleSystem == l.ClientConstTitle.ISLAND_TITLE || this.getSelectedTitleByDisplayType(l.ClientConstTitle.DISPLAYTYPE_SUFFIX).titleSystem == l.ClientConstTitle.ISLAND_TITLE;
  };
  CastleTitleData.prototype.resetIslandTitle = function () {
    this._currentIslandTitleID = -1;
    this._thisUsersCurrentIslandTitle = CastleTitleData.NULL_TITLE;
  };
  Object.defineProperty(CastleTitleData.prototype, "islandKingTitle", {
    get: function () {
      return this._islandKingTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleData.prototype, "mixedIslandTitles", {
    get: function () {
      return this._mixedIslandTitles;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleData.prototype.getAllAssignedUserTitles = function () {
    var e = this.thisUsersTitles;
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isAssigned) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleTitleData.__initialize_static_members = function () {
    CastleTitleData.NULL_TITLE = new E.TitleVO();
  };
  return CastleTitleData;
}(C.CastleEventDispatcher);
exports.CastleTitleData = O;
var E = require("./2028.js");
var y = require("./2029.js").util.isString;
O.__initialize_static_members();