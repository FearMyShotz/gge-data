Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./778.js");
var c = require("./779.js");
var u = require("./30.js");
var d = require("./54.js");
var p = require("./176.js");
var h = require("./4.js");
var g = createjs.TimerEvent;
var C = function (e) {
  function CastleMercenaryData() {
    var t = this;
    t._currentMissionState = 0;
    t._timestampNextPackage = 0;
    t._newMissions = false;
    t._sortMissionsOnUpdate = false;
    t._waitingForServer = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._missions = [];
    t._sortMissionsOnUpdate = true;
    return t;
  }
  n.__extends(CastleMercenaryData, e);
  CastleMercenaryData.prototype.parse_MPE = function (e) {
    if (e) {
      var t;
      this._timestampNextPackage = u.CachedTimer.getCachedTimer() + (e.NM + CastleMercenaryData.NEXT_MISSIONS_TIMER_DELAY) * r.ClientConstTime.SEC_2_MILLISEC;
      if (this._nextMissionsTimer) {
        this._nextMissionsTimer.delay = this.remainingNextPackageTime;
        this._nextMissionsTimer.start();
      } else {
        this._nextMissionsTimer = new o.Timer(this.remainingNextPackageTime, 1);
        this._nextMissionsTimer.start();
      }
      this._nextMissionsTimer.addEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onNewMissions));
      this._missions = [];
      this._currentMissionState = CastleMercenaryData.MISSION_STATE_DEFAULT;
      if (this._currentMissionTimer) {
        this._currentMissionTimer.stop();
      }
      for (var i = 0, n = e.M; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined && ((t = new _.CastleMercenaryMissionItemVO()).fillFromParamObject(a), t.state < CastleMercenaryData.MISSION_STATE_COLLECTED && (this._missions.push(t), t.state > this._currentMissionState && (this._currentMissionState = t.state, t.state == CastleMercenaryData.MISSION_STATE_STARTED)))) {
          var l = s.int(t.remainingTime * r.ClientConstTime.SEC_2_MILLISEC);
          if (l > 0) {
            if (this._currentMissionTimer) {
              this._currentMissionTimer.delay = l;
            } else {
              this._currentMissionTimer = new o.Timer(l, 1);
            }
            this._currentMissionTimer.addEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onMissionFinished));
            this._currentMissionTimer.start();
          } else {
            this.onMissionFinished(null);
          }
        }
      }
      this.sortMissions();
      if (this._newMissions) {
        this._newMissions = false;
        this.dispatchEvent(new c.CastleMercenaryDataEvent(c.CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED));
      }
      this.dispatchEvent(new c.CastleMercenaryDataEvent(c.CastleMercenaryDataEvent.DATA_CHANGED));
      this.waitingForServer = false;
    }
  };
  CastleMercenaryData.prototype.sortMissions = function () {
    var e;
    if (this._sortMissionsOnUpdate) {
      this._missions.sort(this.bindFunction(this.sortMissionsByQualityAndState));
      var t = [];
      for (var i = 0, n = this._missions; i < n.length; i++) {
        e = n[i];
        t.push(e.missionID);
      }
      this._sortOrder = t;
      this._sortMissionsOnUpdate = false;
    } else {
      var o = [];
      for (var a = 0; a < this._sortOrder.length; a++) {
        if (e = this.getMissionByID(this._sortOrder[a])) {
          o.push(e);
        }
      }
      this._missions = o;
    }
  };
  CastleMercenaryData.prototype.getMissionByID = function (e) {
    if (this._missions != null) {
      for (var t = 0, i = this._missions; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.missionID == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleMercenaryData.prototype.onMissionFinished = function (e) {
    if (p.CastleDataHolder.instance.gbdParsed) {
      this._currentMissionTimer.removeEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onMissionFinished));
      if (this.activeMission) {
        this.changeMissionState(this.activeMission.missionID, CastleMercenaryData.MISSION_STATE_COLLECTABLE);
      }
    }
  };
  CastleMercenaryData.prototype.onNewMissions = function (e) {
    if (p.CastleDataHolder.instance.gbdParsed && !h.CastleModel.tutorialData.isTutorialActive) {
      h.CastleModel.smartfoxClient.sendCommandVO(new l.C2SMercenaryPackageVO(-1));
      this._newMissions = true;
      this._sortMissionsOnUpdate = true;
    }
  };
  CastleMercenaryData.prototype.sortMissionsByQualityAndState = function (e, t) {
    if (e.state > t.state) {
      return -1;
    } else if (e.state < t.state) {
      return 1;
    } else if (e.isFreeMission() && !t.isFreeMission()) {
      return -1;
    } else if (!e.isFreeMission() && t.isFreeMission()) {
      return 1;
    } else if (e.quality > t.quality) {
      return -1;
    } else if (e.quality < t.quality) {
      return 1;
    } else if (e.missionID > t.missionID) {
      return -1;
    } else if (e.missionID < t.missionID) {
      return 1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleMercenaryData.prototype, "currentMissionState", {
    get: function () {
      return this._currentMissionState;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryData.prototype.changeMissionState = function (e, t) {
    if (this._missions != null) {
      for (var i = 0, n = this._missions; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e == o.missionID) {
          o.state = t;
          this._currentMissionState = t;
          this.dispatchEvent(new c.CastleMercenaryDataEvent(c.CastleMercenaryDataEvent.DATA_CHANGED));
        }
      }
    }
  };
  Object.defineProperty(CastleMercenaryData.prototype, "activeMission", {
    get: function () {
      if (this.missions != null) {
        for (var e = 0, t = this.missions; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && i.state == CastleMercenaryData.MISSION_STATE_STARTED) {
            return i;
          }
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "missions", {
    get: function () {
      return this._missions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "missionCount", {
    get: function () {
      return this._missions.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "readyMissionsCount", {
    get: function () {
      if (this._currentMissionState > CastleMercenaryData.MISSION_STATE_DEFAULT) {
        return this._missions.length - 1;
      } else {
        return this._missions.length;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "remainingNextPackageTime", {
    get: function () {
      return Math.max(0, this._timestampNextPackage - u.CachedTimer.getCachedTimer());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "waitingForServer", {
    get: function () {
      return this._waitingForServer;
    },
    set: function (e) {
      this._waitingForServer = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryData.prototype.reset = function () {
    if (this._nextMissionsTimer) {
      this._nextMissionsTimer.removeEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onNewMissions));
    }
    if (this._currentMissionTimer) {
      this._currentMissionTimer.removeEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onMissionFinished));
    }
  };
  Object.defineProperty(CastleMercenaryData.prototype, "sortMissionsOnUpdate", {
    get: function () {
      return this._sortMissionsOnUpdate;
    },
    set: function (e) {
      this._sortMissionsOnUpdate = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryData.MISSION_STATE_DEFAULT = 0;
  CastleMercenaryData.MISSION_STATE_STARTED = 1;
  CastleMercenaryData.MISSION_STATE_COLLECTABLE = 2;
  CastleMercenaryData.MISSION_STATE_COLLECTED = 3;
  CastleMercenaryData.NEXT_MISSIONS_TIMER_DELAY = 1;
  return CastleMercenaryData;
}(d.CastleBasicData);
exports.CastleMercenaryData = C;
var _ = require("./2772.js");
a.classImplementsInterfaces(C, "IUpdatable");