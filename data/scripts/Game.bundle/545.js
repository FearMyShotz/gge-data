Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./51.js");
var u = require("./3343.js");
var d = require("./277.js");
var p = require("./261.js");
var h = require("./44.js");
var g = require("./54.js");
var C = require("./4.js");
var _ = require("./1637.js");
var m = function (e) {
  function CastleQuestData(t) {
    var i = this;
    i._activeQuests = [];
    i._activeQuestsByCategory = new Map();
    i._isFirstQuestAfterStarter = false;
    i.mainQuestsList = new _.CastleQuestBookMainQuestListVO();
    i._activeQuestCount = 0;
    i.illegalQuestConditions = [];
    i._currentSearchEnemyCounter = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).generateQuestXMLList(t);
    i.createQuestPrototypes();
    return i;
  }
  n.__extends(CastleQuestData, e);
  CastleQuestData.prototype.reset = function () {
    this._activeQuests = [];
    this._activeQuestsByCategory = new Map();
  };
  CastleQuestData.prototype.generateQuestXMLList = function (e) {
    this._questxMLList = new Map();
    this._questSeriesXMLList = new Map();
    var t = e.quests;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = parseInt(o.questID || "");
          this._questxMLList.set(a, o);
          var s = parseInt(o.questSeriesID || "");
          if (!this._questSeriesXMLList.get(s)) {
            this._questSeriesXMLList.set(s, []);
          }
          this._questSeriesXMLList.get(s).push(o);
        }
      }
    }
  };
  CastleQuestData.prototype.createQuestPrototypes = function () {
    this._questPrototypes = [];
    if (this._questxMLList != null) {
      for (var e = 0, t = Array.from(this._questxMLList.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = new E.CastleQuestVO();
          n.fillFromParamXML(i);
          n.completed = true;
          this._questPrototypes.push(n);
        }
      }
    }
  };
  CastleQuestData.prototype.createQuest = function (e) {
    if (!this._questxMLList.get(e)) {
      throw new Error("Unable to create quest with ID " + e + ": This quest is not defined in the XML.Make sure you versionized the newest Items.ggs.");
    }
    var t = new E.CastleQuestVO();
    t.fillFromParamXML(this._questxMLList.get(e));
    return t;
  };
  CastleQuestData.prototype.createQuestSeries = function (e) {
    var t = e.questSeriesID;
    var i = [];
    for (var n = 0, o = this._questSeriesXMLList.get(t); n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        var s = new E.CastleQuestVO();
        s.fillFromParamXML(a);
        if (!s.isStarterQuest && !s.hidden && !!s.compareLevelRequirements(e)) {
          i.push(s);
        }
      }
    }
    return i.sort(f.ClientConstSort.sortByQuestSeriesNumber);
  };
  CastleQuestData.prototype.validateEpicQuests = function () {
    var e = new Map();
    var t = this.getQuestListByCategory(CastleQuestData.CATEGORY_EPIC);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = e.get(o.questSeriesID);
          if (!a || a && a.questSeriesNumber < o.questSeriesNumber) {
            if (a) {
              this.removeQuest(a.questID);
            }
            e.set(o.questSeriesID, o);
          } else {
            this.removeQuest(a.questID);
          }
        }
      }
    }
  };
  CastleQuestData.prototype.createEpicQuestSeriesByQuest = function (e) {
    for (var t = this.createQuestSeries(e), i = 0; i < t.length; i++) {
      var n = t[i];
      if (n.questSeriesNumber < e.questSeriesNumber) {
        n.completed = true;
      } else if (n.questID == e.questID) {
        t[i] = e;
      } else {
        n.isLocked = true;
      }
      t[i].setVisualNumbersForEpicQuest([i + 1, t.length]);
    }
    return t;
  };
  CastleQuestData.prototype.startQuest = function (e) {
    this._activeQuests ||= [];
    var t = this.createQuest(e);
    this._activeQuests.push(t);
    this.updateActiveQuests();
    this.dispatchEvent(new p.CastleQuestDataEvent(p.CastleQuestDataEvent.QUEST_START, t));
  };
  CastleQuestData.prototype.updateActiveQuests = function () {
    this.updateIllegalQuestConditions();
    a.VectorSortHelper.sort(this._activeQuests, f.ClientConstSort.sortByQuestId);
    this.updateCategoryDictionary();
  };
  CastleQuestData.prototype.updateCategoryDictionary = function () {
    this._activeQuestsByCategory = new Map();
    this._activeQuestCount = 0;
    for (var e = 0; e <= CastleQuestData.CATEGORY_EPIC; e++) {
      var t = this.groupAndFilterAndSortQuests(e);
      this._activeQuestsByCategory.set(e, t);
      this._activeQuestCount += l.int(t.length);
    }
  };
  CastleQuestData.prototype.parseQuestProgress = function (e) {
    if (e) {
      var t = l.int(e.shift());
      var i = this.getActiveQuestByID(t);
      if (i) {
        this.dispatchEvent(new p.CastleQuestDataEvent(p.CastleQuestDataEvent.QUEST_PROGRESS, i));
      }
    }
  };
  CastleQuestData.prototype.finishQuest = function (e) {
    var t = this.isQuestActive(e);
    this.removeQuest(e);
    if (t) {
      this.dispatchEvent(new p.CastleQuestDataEvent(p.CastleQuestDataEvent.QUEST_FINISHED, this.getQuestPrototype(e)));
    }
  };
  CastleQuestData.prototype.parseActiveQuestList = function (e) {
    this._activeQuests = [];
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this.createQuest(n.QID);
          if (o) {
            o.fillFromParams(n);
            this._activeQuests.push(o);
          }
        }
      }
    }
    this.updateActiveQuests();
    this.dispatchEvent(new p.CastleQuestDataEvent(p.CastleQuestDataEvent.GET_QUESTLIST));
  };
  CastleQuestData.prototype.getQuestPrototype = function (e) {
    var t = this.createQuest(e);
    t.completed = true;
    if (t.isEpicQuest) {
      t = this.createEpicQuestSeriesByQuest(t).filter(function (t) {
        return t.questID == e;
      })[0];
    }
    return t;
  };
  CastleQuestData.prototype.getCurrentStarterQuestVO = function () {
    if (this._activeQuests != null) {
      for (var e = 0, t = this._activeQuests; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isStarterQuest && !i.hidden) {
          return i;
        }
      }
    }
    return null;
  };
  CastleQuestData.prototype.removeQuest = function (e) {
    for (var t = 0; t < this._activeQuests.length; t++) {
      if (this._activeQuests[t].questID == e) {
        this._activeQuests.splice(t, 1);
        this.updateActiveQuests();
        return;
      }
    }
  };
  CastleQuestData.prototype.getActiveQuestByID = function (e) {
    if (this._activeQuests != null) {
      for (var t = 0, i = this._activeQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.questID == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleQuestData.prototype.getQuestListByCategory = function (e) {
    var t;
    if (this._activeQuestsByCategory.get(e)) {
      t = this._activeQuestsByCategory.get(e).filter(u.ClientConstFilter.filterActiveQuests);
    }
    return t || [];
  };
  CastleQuestData.prototype.groupAndFilterAndSortQuests = function (e) {
    var t = this._activeQuests.filter(u.ClientConstFilter.filterVisibleQuestsForCategory(e));
    var i = [];
    if (this._activeQuests != null) {
      for (var n = 0, o = this._activeQuests; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && i.indexOf(a.sortPriority) < 0) {
          i.push(a.sortPriority);
        }
      }
    }
    i.sort(f.ClientConstSort.sortByPriority);
    var s = [];
    if (i != null) {
      for (var r = 0, l = i; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          s = s.concat(this.filterAndSortQuests(t.filter(u.ClientConstFilter.filterByPriority(c))));
        }
      }
    }
    if (s.length > 1) {
      var d = s.filter(u.ClientConstFilter.filterQuestIsBuyRuby);
      var p = s.filter(u.ClientConstFilter.filterQuestIsNotBuyRuby);
      var h = [];
      if (p.length > 0) {
        h.push(p.shift());
      }
      return (h = h.concat(d)).concat(p);
    }
    return s;
  };
  CastleQuestData.prototype.filterAndSortQuests = function (e) {
    var t = e.filter(u.ClientConstFilter.filterEventQuests);
    t.sort(f.ClientConstSort.sortByEventId());
    t = this.checkTemporaryQuestsAndFilter(t);
    var i = e.filter(u.ClientConstFilter.filterXpQuests);
    i.sort(f.ClientConstSort.sortByXpReward);
    var n = e.filter(u.ClientConstFilter.filterC2Quests);
    n.sort(f.ClientConstSort.sortByC2Reward);
    var o = e.filter(u.ClientConstFilter.filterLeftOverQuests);
    var a = [];
    return a = (a = (a = (a = a.concat(t)).concat(i)).concat(n)).concat(o);
  };
  CastleQuestData.prototype.checkTemporaryQuestsAndFilter = function (e) {
    if (C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS) != null) {
      var t;
      for (var i = l.int(e.length - 1); i >= 0; i--) {
        if ((t = e[i]).isTemporaryQuest && this.hasStandardQuestWithCondition(t.conditions)) {
          e.splice(i, 1);
        }
      }
    }
    return e;
  };
  CastleQuestData.prototype.hasStandardQuestWithCondition = function (e) {
    if (this._activeQuests != null) {
      for (var t = 0, i = this._activeQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && !n.isTemporaryQuest && n.hasConditionIn(e)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleQuestData.prototype.getObjectiveListForMapId = function (e) {
    var t;
    var i = u.ClientConstFilter.filterVisibleObjectivesForTreasureMap(e);
    var n = new Map();
    for (var o = 0, a = this._activeQuests; o < a.length; o++) {
      if (i(t = a[o])) {
        n.add(t.questID, t);
      }
    }
    for (var s = 0, r = this._questPrototypes; s < r.length; s++) {
      if (i(t = r[s])) {
        if (!n.hasKey(t.questID)) {
          n.add(t.questID, t);
        }
      }
    }
    var l = n.toArray();
    l.sort(f.ClientConstSort.objectiveOrder);
    return l;
  };
  CastleQuestData.prototype.isQuestActive = function (e) {
    for (var t = 0; t < this._activeQuests.length; t++) {
      if (this._activeQuests[t].questID == e && !this._activeQuests[t].hidden) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleQuestData.prototype, "activeQuestCount", {
    get: function () {
      return this._activeQuestCount;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.getCurrentSingleQuest = function () {
    if (!this._activeQuests || this._activeQuests.length < 1) {
      return null;
    } else {
      return this._activeQuests[0];
    }
  };
  Object.defineProperty(CastleQuestData.prototype, "isFirstQuestAfterStarter", {
    get: function () {
      var e = this._isFirstQuestAfterStarter;
      this._isFirstQuestAfterStarter = false;
      return e;
    },
    set: function (e) {
      this._isFirstQuestAfterStarter = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.getQuestGiverSmallClassName = function (e, t) {
    if (e == c.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
      var i = "QuestGiverSmall_Hero_";
      if (C.CastleModel.userData.selectedHeroID > -1) {
        i += C.CastleModel.userData.selectedHeroID;
      } else {
        i += "801";
      }
      return i;
    }
    return "QuestGiverSmall_" + e;
  };
  Object.defineProperty(CastleQuestData.prototype, "questxMLList", {
    get: function () {
      return this._questxMLList;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.updateIllegalQuestConditions = function () {
    this.illegalQuestConditions = [];
    if (o.EnvGlobalsHandler.globals.loginIsKeyBased) {
      this.illegalQuestConditions.push(d.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND);
      this.illegalQuestConditions.push(d.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK);
    } else if (!O.CastleFacebookModule.available) {
      this.illegalQuestConditions.push(d.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK);
    }
    if (o.EnvGlobalsHandler.globals.loginIsKeyBased || o.EnvGlobalsHandler.globals.isOnSpecialServer || h.SpecialServerHelper.isOnKeyLoginToNormalLoginServer) {
      this.illegalQuestConditions.push(d.ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER);
    }
  };
  CastleQuestData.prototype.showQuestIDs = function () {
    return (o.EnvGlobalsHandler.globals.isTest || o.EnvGlobalsHandler.globals.suk.length > 0) && C.CastleModel.localData.readAddQuestIDs();
  };
  CastleQuestData.prototype.foundActiveQuestWithConditionType = function (e) {
    if (this._activeQuests != null) {
      for (var t = 0, i = this._activeQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.hasConditionOfType(e)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleQuestData.prototype.getActiveStarterQuestByEventID = function (e) {
    for (var t = 0, i = this._activeQuests; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.isStarterQuest && n.eventID == e) {
        return n;
      }
    }
    return null;
  };
  Object.defineProperty(CastleQuestData.prototype, "currentSearchEnemyCounter", {
    get: function () {
      return this._currentSearchEnemyCounter;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.increaseCurrentSearchEnemyCounter = function () {
    this._currentSearchEnemyCounter++;
  };
  CastleQuestData.prototype.resetCurrentSearchEnemyCounter = function () {
    this._currentSearchEnemyCounter = 0;
  };
  CastleQuestData.prototype.isQuestSeriesActive = function (e) {
    return this._activeQuests.some(function (t) {
      return t.questSeriesID == e;
    });
  };
  CastleQuestData.prototype.getActiveQuestFromSeries = function (e) {
    return this._activeQuests.find(function (t) {
      return t.questSeriesID == e;
    });
  };
  CastleQuestData.DAILY_QUEST_THRESHOLDS = [3, 6, 9, 12];
  CastleQuestData.CATEGORY_GREEN = 0;
  CastleQuestData.CATEGORY_ICE = 1;
  CastleQuestData.CATEGORY_DESSERT = 2;
  CastleQuestData.CATEGORY_VOLCANO = 3;
  CastleQuestData.CATEGORY_EVENTS = 4;
  CastleQuestData.CATEGORY_CAMPAIGN = 5;
  CastleQuestData.CATEGORY_EPIC = 6;
  return CastleQuestData;
}(g.CastleBasicData);
exports.CastleQuestData = m;
var f = require("./75.js");
var O = require("./193.js");
var E = require("./1638.js");
s.classImplementsInterfaces(m, "IUpdatable");