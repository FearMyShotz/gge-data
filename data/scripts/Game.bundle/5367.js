Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./261.js");
var r = function (e) {
  function CastleDailyQuestData(t) {
    var i = this;
    i._xmlQuestDic = new Map();
    i._currentQuests = [];
    i._thresholdRewards = [];
    i._playerQuestLevel = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).xmlData = t;
    i._xmlQuestDic = i.createXmlQuestDic();
    return i;
  }
  n.__extends(CastleDailyQuestData, e);
  CastleDailyQuestData.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._currentQuests = [];
    this._thresholdRewards = [];
    this._playerQuestLevel = 0;
    if (this._xmlQuestDic != null) {
      for (var t = 0, i = Array.from(this._xmlQuestDic.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.reset();
        }
      }
    }
  };
  CastleDailyQuestData.prototype.parse_DQL = function (e) {
    if (e) {
      this.createXmlQuestDic();
      this.parseThresholdRewardList(e.RS);
      this._playerQuestLevel = a.int(e.PQL);
      this._currentQuests = [];
      this.parse_FDQ(e.FDQ);
      this.parse_RDQ(e.RDQ);
      this._currentQuests.sort(l.ClientConstSort.sortByDailyQuestID);
      this.dispatchEvent(new s.CastleQuestDataEvent(s.CastleQuestDataEvent.DAILYQUEST_REFRESHED));
    }
  };
  CastleDailyQuestData.prototype.parse_RDQ = function (e) {
    if (e && e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this._xmlQuestDic.get(n.QID)) {
          var o = this._xmlQuestDic.get(n.QID);
          o.setProgress(n.P);
          this._currentQuests.push(o);
        }
      }
    }
  };
  CastleDailyQuestData.prototype.parse_FDQ = function (e) {
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = a.int(e[t]);
        if (this._xmlQuestDic.get(i)) {
          var n = this._xmlQuestDic.get(i);
          n.setFinished();
          this._currentQuests.push(n);
        }
      }
    }
  };
  CastleDailyQuestData.prototype.parseThresholdRewardList = function (e) {
    if (e) {
      this._thresholdRewards = [];
      for (var t = 0; t < e.length; t++) {
        this._thresholdRewards.push(c.CollectableManager.parser.s2cParamList.createList(e[t]));
      }
    }
  };
  CastleDailyQuestData.prototype.createXmlQuestDic = function () {
    var e = new Map();
    var t = this.xmlData.dailyactivities;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new u.DailyQuestVO();
          a.fillFromParamXML(o);
          e.set(a.questID, a);
        }
      }
    }
    return e;
  };
  CastleDailyQuestData.prototype.getFinishedQuests = function () {
    var e = [];
    if (this._currentQuests != null) {
      for (var t = 0, i = this._currentQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isFinished && !n.isTempServerQuest) {
          e.push(n);
        }
      }
    }
    return e;
  };
  CastleDailyQuestData.prototype.getRunningQuestCount = function () {
    var e = 0;
    if (this._currentQuests != null) {
      for (var t = 0, i = this._currentQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (!n.isFinished && !n.isTempServerQuest) {
            e++;
          }
        }
      }
    }
    return e;
  };
  CastleDailyQuestData.prototype.getTempServerQuests = function () {
    var e = [];
    if (this._currentQuests != null) {
      for (var t = 0, i = this._currentQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isTempServerQuest) {
          e.push(n);
        }
      }
    }
    return e;
  };
  Object.defineProperty(CastleDailyQuestData.prototype, "thresholdRewards", {
    get: function () {
      return this._thresholdRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDailyQuestData.prototype, "playerQuestLevel", {
    get: function () {
      return this._playerQuestLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDailyQuestData.prototype, "currentQuests", {
    get: function () {
      return this._currentQuests;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDailyQuestData;
}(require("./54.js").CastleBasicData);
exports.CastleDailyQuestData = r;
var l = require("./75.js");
var c = require("./50.js");
var u = require("./5368.js");
o.classImplementsInterfaces(r, "IUpdatable");