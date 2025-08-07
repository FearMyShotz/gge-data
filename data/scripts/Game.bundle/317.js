Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./296.js");
var c = require("./21.js");
var u = require("./102.js");
var d = require("./54.js");
var p = require("./4.js");
var h = require("./2138.js");
var g = require("./1229.js");
var C = require("./2139.js");
var _ = function (e) {
  function CastleAllianceData(t) {
    var i = this;
    i._refreshTime = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._allianceInfo = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleAllianceData, e);
  CastleAllianceData.prototype.parseXML = function (e) {
    var t = e.alliancerankrights;
    this._rankRights = new Map();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._rankRights.set(parseInt(o.rankRightID || "").toString(), parseInt(o.neededMemberRank || ""));
        }
      }
    }
    var a = e.allianceranks;
    this._allianceRanks = new Map();
    if (a != null) {
      for (var s = 0, r = a; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          this._allianceRanks.set(parseInt(l.rankID || "").toString(), parseInt(l.rerankRight || ""));
        }
      }
    }
  };
  CastleAllianceData.prototype.mayRerank = function (e, t) {
    var i = -1;
    if (this._allianceRanks.has(t.toString())) {
      i = r.int(this._allianceRanks.get(t.toString()));
    }
    return this.hasRight(e, i);
  };
  CastleAllianceData.prototype.hasRight = function (e, t) {
    return !!this._rankRights.has(t.toString()) && this._rankRights.get(t.toString()) >= e;
  };
  CastleAllianceData.prototype.parse_AIN = function (e) {
    if (e) {
      this.parseAllianceInfo(e.A);
    }
  };
  CastleAllianceData.prototype.parse_ABL = function (e) {
    if (e) {
      this.myAllianceVO.parseABL(e);
      p.CastleModel.allianceData.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, null));
      p.CastleModel.allianceData.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.myAllianceVO));
    }
  };
  CastleAllianceData.prototype.parse_BAI = function (e) {
    if (e) {
      var t = this.parseAllianceInfo(e.A);
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCE_INVITATION, t));
    }
  };
  CastleAllianceData.prototype.parse_ALL = function (e) {
    if (e) {
      var t = this.getAllianceInfoVOByID(e.AID);
      t.parseActionList(e.AL);
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, t));
    }
  };
  CastleAllianceData.prototype.onAllianceDataRefreshTimer = function (e) {
    if (this._refreshTime > 0 && (this._refreshTime--, this._refreshTime <= 0)) {
      p.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onAllianceDataRefreshTimer));
      var t = this.myAllianceVO;
      if (t) {
        p.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAllianceInfoVO(t.allianceId));
      }
    }
  };
  CastleAllianceData.prototype.parse_SAL = function (e) {
    if (e) {
      var t = [];
      for (var i = 0, n = e.AL; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new g.SearchListAllianceItemVO();
          a.parseItem(o);
          t.push(a);
        }
      }
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCE_SEARCH_ALLIANCE_LIST_UPDATED, this.myAllianceVO, [t]));
    }
  };
  CastleAllianceData.prototype.parse_SML = function (e) {
    if (e) {
      var t = [];
      for (var i = 0, n = e.PL; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          var s = new C.SearchMemberListItemVO();
          s.parseItem(a);
          t.push(s);
        }
      }
      o.VectorSortHelper.sort(t, this.bindFunction(this.sortByDistance));
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCE_SEARCH_MEMBER_LIST_UPDATED, this.myAllianceVO, [t]));
    }
  };
  CastleAllianceData.prototype.parse_AEE = function (e) {
    this.parseAllianceCrestForAlliance(this._myAllianceVO, e);
    this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this._myAllianceVO));
  };
  CastleAllianceData.prototype.parseAllianceCrestForAlliance = function (e, t) {
    e.parseFallbackCrest(t.ACFB);
    e.allianceCrestVO.fillWithData(t.ACCA);
  };
  CastleAllianceData.prototype.parse_AAL = function (e) {
    if (e) {
      var t = [];
      for (var i = 0, n = e.AL; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          var s = new h.AllianceApplicationListItemVO();
          s.parseItem(a);
          t.push(s);
        }
      }
      o.VectorSortHelper.sort(t, this.bindFunction(this.sortByDistance));
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.myAllianceVO, [t]));
    }
  };
  CastleAllianceData.prototype.parseSLL = function (e) {
    this.myAllianceVO.landmarksList.parseSLL(e);
  };
  CastleAllianceData.prototype.sortByDistance = function (e, t) {
    if (e.distance < t.distance) {
      return -1;
    } else if (e.distance > t.distance) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleAllianceData.prototype.parseAllianceInfoArray = function (e) {
    if (e && e.length != 0 && e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.parseAllianceInfo(n);
        }
      }
    }
  };
  CastleAllianceData.prototype.parseAllianceInfo = function (e) {
    if (!e || e.AID == null) {
      return null;
    }
    var t = r.int(e.AID);
    var i = this.getAllianceInfoVOByID(t);
    if (!i) {
      i = new m.AllianceInfoVO();
      this._allianceInfo.set(t, i);
    }
    i.fillFromParamObject(e);
    this._allianceInfo.set(i.allianceId, i);
    if (e.aee) {
      this.parseAllianceCrestForAlliance(i, e.aee);
    }
    var n = r.int(p.CastleModel.userData.allianceID);
    if (i.allianceId == n) {
      this._myAllianceVO = i;
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, i));
    } else {
      this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, i));
    }
    if (e.RT > 0) {
      this._refreshTime = r.int(e.RT);
      p.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onAllianceDataRefreshTimer));
    }
    return i;
  };
  CastleAllianceData.prototype.getAllianceInfoVOByID = function (e) {
    return this._allianceInfo.get(e);
  };
  CastleAllianceData.prototype.hasReachedMightPointThreshold = function (e) {
    return !!this.myAllianceVO && this._myAllianceVO.allianceMightPointsHighestReached >= e;
  };
  CastleAllianceData.prototype.getStatusByAlliance = function (e) {
    if (this.myAllianceVO) {
      return this._myAllianceVO.getStatusByAlliance(e);
    } else {
      return r.int(s.AllianceConst.DIPLOMACY_NEUTRAL);
    }
  };
  Object.defineProperty(CastleAllianceData.prototype, "myAllianceVO", {
    get: function () {
      if (!this._myAllianceVO && p.CastleModel.userData.isInAlliance) {
        this._myAllianceVO = this.getAllianceInfoVOByID(p.CastleModel.userData.allianceID);
      }
      return this._myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceData.prototype, "userCanDonateToAlliance", {
    get: function () {
      return !!s.AllianceConst.mayDonateC2(p.CastleModel.userData.userLevel, p.CastleModel.userData.isPayUser);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceData.prototype, "allyForgeLevel", {
    get: function () {
      return this._myAllianceVO.getBoostLevel(s.AllianceConst.TYPE_FORGE_UPGRADE);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceData.getTextIDForRank = function (e) {
    if (e >= 0 && e <= CastleAllianceData.TEXT_IDS_FOR_RANK_IDS.length) {
      return r.int(CastleAllianceData.TEXT_IDS_FOR_RANK_IDS[e]);
    } else {
      return -1;
    }
  };
  CastleAllianceData.prototype.resetMyAlliance = function () {
    this._myAllianceVO = null;
    p.CastleModel.allianceHelpRequestData.cleanRequests();
    this.dispatchEvent(new u.CastleAllianceDataEvent(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, null));
  };
  CastleAllianceData.prototype.reset = function () {
    p.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onAllianceDataRefreshTimer));
  };
  CastleAllianceData.prototype.validateAllianceLanguage = function () {
    if (!E.ABGHelper.isOnABGServer && p.CastleModel.userData.isInAlliance && p.CastleModel.userData.isAllianceLeader && !this.myAllianceVO.allianceLanguage) {
      p.CastleModel.smartfoxClient.sendCommandVO(new f.C2SChangeAllianceLanguageVO(O.EnvGlobalsHandler.globals.currentCountryLanguageCode));
    }
  };
  CastleAllianceData.__initialize_static_members = function () {
    var e;
    (e = [])[s.AllianceConst.RANK_LEADER] = 0;
    e[s.AllianceConst.RANK_COLEADER] = 4;
    e[s.AllianceConst.RANK_MARSHAL] = 5;
    e[s.AllianceConst.RANK_TREASURER] = 6;
    e[s.AllianceConst.RANK_DIPLOMAT] = 7;
    e[s.AllianceConst.RANK_RECRUITER] = 8;
    e[s.AllianceConst.RANK_APPLICANT] = 9;
    e[s.AllianceConst.RANK_GENERAL] = 1;
    e[s.AllianceConst.RANK_SERGEANT] = 2;
    e[s.AllianceConst.RANK_MEMBER] = 3;
    CastleAllianceData.TEXT_IDS_FOR_RANK_IDS = e;
  };
  return CastleAllianceData;
}(d.CastleBasicData);
exports.CastleAllianceData = _;
var m = require("./704.js");
var f = require("./1230.js");
var O = require("./2.js");
var E = require("./53.js");
a.classImplementsInterfaces(_, "IUpdatable");
_.__initialize_static_members();