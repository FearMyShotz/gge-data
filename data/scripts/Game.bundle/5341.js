Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./231.js");
var u = require("./28.js");
var d = require("./312.js");
var p = require("./30.js");
var h = require("./54.js");
var g = require("./5342.js");
var C = require("./4.js");
var _ = require("./5343.js");
var m = require("./5344.js");
var f = function (e) {
  function AllianceHelpRequestData(t) {
    var i = this;
    i._unitHealTimeReduction = 0;
    i._decreaseBuildingTimeAbsolute = 0;
    i._nextHelpRepairTimeStamp = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseNeededProgressValues(t);
    i._requests = [];
    return i;
  }
  n.__extends(AllianceHelpRequestData, e);
  AllianceHelpRequestData.prototype.parseNeededProgressValues = function (e) {
    this._neededProgressValues = new Map();
    var t = e.alliancehelprequests;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = parseInt(o.allianceHelpRequestID || "");
          var r = parseInt(o.maxHelpersCount || "");
          this._neededProgressValues.set(s, r);
          if (s == a.AllianceConst.ALLIANCE_HELP_HEAL_UNIT) {
            this._unitHealTimeReduction = parseInt(o.unitHealTimeReduction || "");
          } else if (s == a.AllianceConst.ALLIANCE_HELP_BUILD) {
            this._decreaseBuildingTimeAbsolute = parseInt(o.decreaseBuildingTimeAbsolute || "");
          }
        }
      }
    }
  };
  Object.defineProperty(AllianceHelpRequestData.prototype, "visibleRequests", {
    get: function () {
      if (C.CastleModel.userData.isInAlliance) {
        var e = this._requests.filter(this.bindFunction(this.isVisibleInList));
        e.sort(this.bindFunction(this.sortList));
        return e;
      }
      return [];
    },
    enumerable: true,
    configurable: true
  });
  AllianceHelpRequestData.prototype.executeUpdate = function (e) {
    var t = p.CachedTimer.getCachedTimer();
    var i = 0;
    var n = false;
    for (var o = l.int(this._requests.length - 1); o > -1; o--) {
      var a = this._requests[o];
      i = t - a.timeStamp;
      var s = a.remainingTime != -1 && a.remainingTime - i <= 0;
      var r = a.alreadyConfirmed && !a.isOwnPlayer;
      if (s || r) {
        this._requests.splice(o, 1);
        n = true;
      }
    }
    if (n) {
      this.dispatchUpdateEvent();
    }
  };
  Object.defineProperty(AllianceHelpRequestData.prototype, "clickAbleRequestCount", {
    get: function () {
      return this.visibleRequests.filter(this.bindFunction(this.isClickAbleRequest)).length;
    },
    enumerable: true,
    configurable: true
  });
  AllianceHelpRequestData.prototype.cleanRequests = function () {
    this._requests = [];
  };
  AllianceHelpRequestData.prototype.parse_AHF = function (e) {
    var t = e.PN;
    var i = this.getRequestVOById(e.LID);
    var n = l.int(e.WID ? e.WID : 0);
    if (i) {
      O.CastleLayoutManager.getInstance().showFlashUIComponent(E.CastleAllianceHelpFeedbackComponent, new g.CastleAllianceHelpFeedbackComponentProperties(t, i, n));
    }
  };
  AllianceHelpRequestData.prototype.parse_AHL = function (e) {
    if (e) {
      this._requests = [];
      var t;
      var i = e.AHL;
      if (i != null) {
        for (var n = 0, o = i; n < o.length; n++) {
          var s = o[n];
          if (s !== undefined) {
            t = new m.AllianceHelpRequestVO();
            this.parseHelpRequestEntry(t, s);
            this._requests.push(t);
          }
        }
      }
      this._nextHelpRepairTimeStamp = e.TSL != -1 ? p.CachedTimer.getCachedTimer() + (a.AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN * u.ClientConstTime.SEC_2_MILLISEC - e.TSL * u.ClientConstTime.SEC_2_MILLISEC) : e.TSL;
      this.dispatchUpdateEvent();
    }
  };
  AllianceHelpRequestData.prototype.parse_AHH = function (e) {
    var t = l.int(e.LID);
    var i = this.getRequestVOById(t);
    if (i) {
      this.parseHelpRequestEntry(i, e);
      if (i.progress == i.neededProgress) {
        this.dispatchEvent(new d.CastleAllianceHelpRequestDataEvent(d.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, i));
      }
    } else {
      i = new m.AllianceHelpRequestVO();
      this.parseHelpRequestEntry(i, e);
      this._requests.push(i);
    }
    this._nextHelpRepairTimeStamp = e.TSL != -1 ? p.CachedTimer.getCachedTimer() + (a.AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN * u.ClientConstTime.SEC_2_MILLISEC - e.TSL * u.ClientConstTime.SEC_2_MILLISEC) : e.TSL;
    this.dispatchUpdateEvent(i);
  };
  AllianceHelpRequestData.prototype.parse_AHD = function (e) {
    var t = l.int(e.LID);
    if (this.getRequestVOById(t)) {
      this._requests.splice(this._requests.indexOf(this.getRequestVOById(t)), 1);
      this.dispatchUpdateEvent();
    }
  };
  AllianceHelpRequestData.prototype.getStatusOfOwnRequestByID = function (e, t = null) {
    if (this._requests != null) {
      for (var i = 0, n = this._requests; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isOwnPlayer && o.requestTypeId == e && this.isSameRequest(o.optionalParams, t)) {
          return l.int(this.getStatusOfRequest(o));
        }
      }
    }
    return l.int(c.ClientConstAlliance.STATUS_REQUEST_POSSIBLE);
  };
  AllianceHelpRequestData.prototype.getOwnRequestVOByParams = function (e, t) {
    if (this._requests != null) {
      for (var i = 0, n = this._requests; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isOwnPlayer && o.requestTypeId == e && this.isSameRequest(o.optionalParams, t)) {
          return o;
        }
      }
    }
    return null;
  };
  AllianceHelpRequestData.prototype.isVisibleInList = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return e.progress != e.neededProgress && !e.alreadyConfirmed;
  };
  AllianceHelpRequestData.prototype.isClickAbleRequest = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return !e.isOwnPlayer;
  };
  AllianceHelpRequestData.prototype.parseHelpRequestEntry = function (e, t) {
    e.alreadyConfirmed = t.AC;
    e.listID = l.int(t.LID);
    e.playerName = t.PN;
    e.progress = l.int(t.P);
    e.playerID = l.int(t.PID);
    e.requestTypeId = l.int(t.TID);
    e.optionalParams = _.AllianceHelpRequestParamsFactory.parseParams(t.TID, t.OP);
    e.neededProgress = this.getNeededProgress(e.requestTypeId);
    e.isOwnPlayer = e.playerID == C.CastleModel.userData.playerID;
    e.remainingTime = t.RT > -1 ? t.RT * u.ClientConstTime.SEC_2_MILLISEC : -1;
    e.timeStamp = p.CachedTimer.getCachedTimer();
  };
  AllianceHelpRequestData.prototype.getStatusOfRequest = function (e) {
    if (e.progress == e.neededProgress) {
      return l.int(c.ClientConstAlliance.STATUS_REQUEST_CONFIRMED);
    } else {
      return l.int(c.ClientConstAlliance.STATUS_REQUEST_PROCESSING);
    }
  };
  AllianceHelpRequestData.prototype.isSameRequest = function (e, t) {
    return e == null && t == null || e.isSameAs(t);
  };
  AllianceHelpRequestData.prototype.getRequestVOById = function (e) {
    if (this._requests != null) {
      for (var t = 0, i = this._requests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.listID == e) {
          return n;
        }
      }
    }
    return null;
  };
  AllianceHelpRequestData.prototype.sortList = function (e, t) {
    if (e.isOwnPlayer) {
      return 1;
    } else if (t.isOwnPlayer) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceHelpRequestData.prototype.getNeededProgress = function (e) {
    return l.int(this._neededProgressValues.get(e));
  };
  AllianceHelpRequestData.prototype.dispatchUpdateEvent = function (e = null) {
    this.dispatchEvent(new d.CastleAllianceHelpRequestDataEvent(d.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, e));
  };
  AllianceHelpRequestData.prototype.getRemainingRepairHelpCooldown = function () {
    return l.int((this._nextHelpRepairTimeStamp - p.CachedTimer.getCachedTimer()) * u.ClientConstTime.MILLISEC_2_SEC);
  };
  Object.defineProperty(AllianceHelpRequestData.prototype, "unitHealTimeReduction", {
    get: function () {
      return this._unitHealTimeReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceHelpRequestData.prototype, "decreaseBuildingTimeAbsolute", {
    get: function () {
      return this._decreaseBuildingTimeAbsolute;
    },
    enumerable: true,
    configurable: true
  });
  AllianceHelpRequestData.prototype.isBuildHelpAvailable = function () {
    return C.CastleModel.areaData.activeAreaInfo.kingdomID != s.FactionConst.KINGDOM_ID && C.CastleModel.areaData.activeAreaInfo.mapID <= 0 && C.CastleModel.tutorialData.isTutorialFinished();
  };
  AllianceHelpRequestData.prototype.hasBuildHelpAbTestLevelRestriction = function () {
    if (C.CastleModel.userData.splitRunData.getBooleanParam(r.SplitRunConst.SKIP_GROUP_PARAM)) {
      return C.CastleModel.tutorialData.isTutorialActive;
    } else {
      return C.CastleModel.userData.userLevel < a.AllianceConst.ALLIANCE_HELP_BUILD_MINLEVEL;
    }
  };
  return AllianceHelpRequestData;
}(h.CastleBasicData);
exports.AllianceHelpRequestData = f;
var O = require("./17.js");
var E = require("./5345.js");
o.classImplementsInterfaces(f, "IUpdatable");