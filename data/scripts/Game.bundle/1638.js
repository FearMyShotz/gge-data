Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./51.js");
var d = require("./277.js");
var p = require("./22.js");
var h = require("./30.js");
var g = require("./44.js");
var C = require("./4.js");
var _ = function () {
  function CastleQuestVO() {
    this._questID = 0;
    this._questSeriesID = 0;
    this._requiredLevel = 0;
    this._requiredLegendLevel = 0;
    this._requiredQuestID = 0;
    this._questGiverID = 0;
    this._eventID = 0;
    this._autoShow = false;
    this._isGenericQuest = false;
    this._genericQuestType = 0;
    this._genericNameID = 0;
    this._genericInfoID = 0;
    this._genericTipID = 0;
    this._genericFinishID = 0;
    this._questSeriesNumber = 0;
    this._numberOfQuestsInSeries = 0;
    this._shownKingdomID = 0;
    this._triggerKingdomID = 0;
    this._xmlTriggerKingdomID = 0;
    this._maxLevelForXP = 0;
    this._hidden = false;
    this._mapID = 0;
    this._isHeroQuest = false;
    this._duration = 0;
    this._objectiveType = 0;
    this._remainingSeconds = -1;
    this._timeWhenDataReceived = 0;
    this._isFailed = false;
    this._isCompleted = false;
    this._isBuyRubyQuest = false;
    this._registered = false;
    this._sortPriority = -1;
    this._questCategory = 0;
    this._isLocked = false;
    this._c2Cost = 0;
    this._questbookTabID = 0;
    this._campaignQuestID = 0;
    this._campaignQuestTimeStamp = c.int(Number.MAX_VALUE);
    this._campaignSortOrder = 0;
    CastleQuestVO.REWARD_SORT_ORDER = [f.CollectableEnum.XP, f.CollectableEnum.C2, f.CollectableEnum.C1];
  }
  CastleQuestVO.prototype.fillFromParamXML = function (e) {
    try {
      this._questID = parseInt(p.CastleXMLUtils.getValueOrDefault("questID", e, "-1", true));
      this._questSeriesID = parseInt(p.CastleXMLUtils.getValueOrDefault("questSeriesID", e, "-1", false));
      this._shownKingdomID = parseInt(p.CastleXMLUtils.getValueOrDefault("shownKingdomID", e, "0"));
      this._xmlTriggerKingdomID = parseInt(p.CastleXMLUtils.getValueOrDefault("triggerKingdomID", e, "0"));
      this._triggerKingdomID = c.int(Math.max(this._xmlTriggerKingdomID, 0));
      this._hidden = parseInt(p.CastleXMLUtils.getValueOrDefault("hidden", e, "0")) == 1;
      this._shownKingdomID = this._shownKingdomID < 0 ? 0 : this._shownKingdomID;
      this._mapID = parseInt(p.CastleXMLUtils.getValueOrDefault("mapID", e, "-1"));
      this._rewards = m.CollectableManager.sorter.sortListByTypes(m.CollectableManager.parser.x2cRewards.createList(e), CastleQuestVO.REWARD_SORT_ORDER);
      this._requiredLevel = parseInt(p.CastleXMLUtils.getValueOrDefault("requiredLevel", e, "0"));
      this._requiredLegendLevel = parseInt(p.CastleXMLUtils.getValueOrDefault("requiredLegendLevel", e, "0"));
      this._requiredQuestID = parseInt(p.CastleXMLUtils.getValueOrDefault("requiredQuestID", e, "-1"));
      this._questGiverID = parseInt(p.CastleXMLUtils.getValueOrDefault("questGiverID", e, "0"));
      this._eventID = parseInt(p.CastleXMLUtils.getValueOrDefault("eventID", e, "0"));
      var t = p.CastleXMLUtils.getValueOrDefault("genericQuestID", e, "0");
      this._isGenericQuest = t != "0";
      if (this._isGenericQuest) {
        this._genericQuestType = parseInt(t.charAt(0));
        this._genericNameID = parseInt(t.charAt(1));
        this._genericInfoID = parseInt(t.charAt(2));
        this._genericTipID = parseInt(t.charAt(3));
        this._genericFinishID = parseInt(t.charAt(4));
      }
      this._questSeriesNumber = parseInt(p.CastleXMLUtils.getValueOrDefault("questSeriesNumber", e, "1"));
      this._numberOfQuestsInSeries = parseInt(p.CastleXMLUtils.getValueOrDefault("numberOfQuestsInSeries", e, "0"));
      this._maxLevelForXP = c.int(p.CastleXMLUtils.getValueOrDefault("maxLevelForXP", e, Number.MAX_VALUE.toString()));
      this.parseConditions(p.CastleXMLUtils.getValueOrDefault("conditions", e, "", true));
      this._isHeroQuest = this._questGiverID == u.ClientConstCharacter.CHAR_ID_SELECTED_HERO;
      this._duration = parseInt(p.CastleXMLUtils.getValueOrDefault("duration", e, "-1"));
      this._objectiveType = parseInt(p.CastleXMLUtils.getValueOrDefault("objectiveType", e, "0"));
      this._autoShow = parseInt(p.CastleXMLUtils.getValueOrDefault("autoShow", e, "0")) == 1;
      this._sortPriority = e.sortPriority !== undefined ? c.int(e.sortPriority) : Number.MAX_VALUE;
      this._c2Cost = parseInt(p.CastleXMLUtils.getValueOrDefault("c2Cost", e, "0"));
      this._c2Reductions = p.CastleXMLUtils.getValueOrDefault("c2Reduction", e, "").split(",");
      this._questbookTabID = parseInt(p.CastleXMLUtils.getValueOrDefault("questbookTabID", e, "-1"));
      this.setQuestCategory();
    } catch (e) {
      console.warn("At quest " + this._questID + ": " + e.stack);
    }
  };
  CastleQuestVO.prototype.setQuestCategory = function () {
    if (this._questbookTabID > 0) {
      this._questCategory = this._questbookTabID;
    } else if (this._eventID > 0) {
      if (this.isTemporaryQuest) {
        this._questCategory = c.int(O.CastleQuestData.CATEGORY_GREEN);
      } else {
        this._questCategory = c.int(O.CastleQuestData.CATEGORY_EVENTS);
      }
    } else if (this._shownKingdomID >= 0) {
      if (this._shownKingdomID == s.WorldIsland.KINGDOM_ID) {
        this._questCategory = c.int(O.CastleQuestData.CATEGORY_EVENTS);
      } else {
        this._questCategory = this._shownKingdomID;
      }
    }
  };
  CastleQuestVO.prototype.getActualRewardList = function () {
    var e = this._rewards.clone();
    if (!this.isGettingXpFromThisQuest) {
      for (var t = e.getFilteredListByType(f.CollectableEnum.XP), i = 0; i < t.length; ++i) {
        e.removeByItem(t.getItemByIndex(i));
      }
    }
    return e;
  };
  CastleQuestVO.prototype.fillFromParams = function (e) {
    if (e.P) {
      for (var t = 0; t < this._conditions.length; t++) {
        this._conditions[t].conditionCounter = e.P[t];
      }
    }
    if (e.hasOwnProperty("RS")) {
      this._remainingSeconds = c.int(e.RS);
      this._timeWhenDataReceived = c.int(h.CachedTimer.getCachedTimer() / 1000);
    } else {
      this._remainingSeconds = -1;
    }
    if (e.hasOwnProperty("S")) {
      this._isCompleted = e.S == 1;
      this._isFailed = e.S == 0;
    } else if (e.hasOwnProperty("QCS")) {
      this._isCompleted = e.QCS == "C";
      this._isFailed = e.QCS == "F";
      this._isLocked = e.QCS == "N";
    } else {
      this._isCompleted = false;
      this._isFailed = false;
    }
    if (e.hasOwnProperty("CQID")) {
      this._campaignQuestID = c.int(e.CQID);
    }
    if (e.hasOwnProperty("ST")) {
      this._campaignQuestTimeStamp = c.int(e.ST);
    }
  };
  CastleQuestVO.prototype.parseConditions = function (e) {
    this._conditions = [];
    if (e) {
      var t = e.split("#");
      this._isBuyRubyQuest = false;
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            var a = o.split("+");
            var s = new E.CastleQuestConditionVO();
            s.loadFromParamArray(a);
            s.questID = this._questID;
            if (s.conditionType == d.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES) {
              this._isBuyRubyQuest = true;
            }
            this._conditions.push(s);
          }
        }
      }
    } else {
      console.warn("Quest " + this.questID + "has no conditions.");
    }
  };
  Object.defineProperty(CastleQuestVO.prototype, "isStarterQuest", {
    get: function () {
      if (this._conditions != null) {
        for (var e = 0, t = this._conditions; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && i.conditionType == d.ClientConstQuestCondition.QUESTTYPE_STARTER) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.getQuestSeriesText = function () {
    if (this._isGenericQuest) {
      if (C.CastleModel.questData.showQuestIDs()) {
        return "(" + this._questID + ")" + l.Localize.text(g.SpecialServerHelper.checkTextIDForSkinText("genQuest_" + this._genericQuestType + "_name_" + this._genericNameID));
      } else {
        return l.Localize.text(g.SpecialServerHelper.checkTextIDForSkinText("genQuest_" + this._genericQuestType + "_name_" + this._genericNameID));
      }
    }
    var e = "";
    if (this.questGiverID == u.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
      e = "_hero" + C.CastleModel.userData.selectedHeroID;
    }
    if (C.CastleModel.questData.showQuestIDs()) {
      return "(" + this._questID + ")" + l.Localize.text("questSeriesID_" + this._questSeriesID + e);
    } else {
      if (this.questGiverID == u.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
        e = "_hero" + C.CastleModel.userData.selectedHeroID;
      }
      return l.Localize.text("questSeriesID_" + this._questSeriesID + e);
    }
  };
  CastleQuestVO.prototype.getQuestSeriesTextWithNumbers = function () {
    var e;
    var t = this.getQuestSeriesText();
    if (!!this.isEpicQuest && !this.isStarterQuest && !this._epicQuestVisualNumbers) {
      this._epicQuestVisualNumbers = C.CastleModel.questData.getQuestPrototype(this.questID).visualNumbersForEpicQuests;
    }
    e = this.isEpicQuest && this._epicQuestVisualNumbers ? l.Localize.text(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, this._epicQuestVisualNumbers) : this.isStarterQuest ? "" : l.Localize.text(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.questSeriesNumber - 1, this.numberOfQuestsInSeries - 1]);
    var i = l.Localize.text(a.GenericTextIds.VALUE_SIMPLE_COMP, [t, e]);
    if (this.questSeriesNumber > 1 && this.numberOfQuestsInSeries > 2) {
      return i;
    } else {
      return t;
    }
  };
  CastleQuestVO.prototype.getQuestName = function () {
    if (this.isCampaignQuest) {
      var e = y.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
      if (e) {
        if (C.CastleModel.questData.showQuestIDs()) {
          return "(" + this.questID + ")" + l.Localize.text("dialog_questbook_campaignQuestName", [this._campaignSortOrder, e.campaignQuests.length]);
        } else {
          return l.Localize.text("dialog_questbook_campaignQuestName", [this._campaignSortOrder, e.campaignQuests.length]);
        }
      } else {
        return "";
      }
    }
    return this.getQuestSeriesTextWithNumbers();
  };
  CastleQuestVO.prototype.getQuestInfoTextId = function () {
    if (this._isGenericQuest) {
      return g.SpecialServerHelper.checkTextIDForSkinText("genQuest_" + this._genericQuestType + "_info_" + this._genericInfoID);
    }
    var e = "";
    if (this.questGiverID == u.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
      e = "_hero" + C.CastleModel.userData.selectedHeroID;
    }
    return g.SpecialServerHelper.checkTextIDForSkinText("questID_" + this._questID + "_info" + e);
  };
  CastleQuestVO.prototype.hasConditionIn = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this._conditions != null) {
          for (var o = 0, a = this._conditions; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && s.hasConditionType(n.conditionType)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  CastleQuestVO.prototype.hasConditionOfType = function (e) {
    if (this._conditions != null) {
      for (var t = 0, i = this._conditions; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.conditionType == e) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastleQuestVO.prototype, "questID", {
    get: function () {
      return this._questID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questGiverID", {
    get: function () {
      return this._questGiverID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "conditions", {
    get: function () {
      return this._conditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questSeriesNumber", {
    get: function () {
      return this._questSeriesNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "numberOfQuestsInSeries", {
    get: function () {
      return this._numberOfQuestsInSeries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isGettingXpFromThisQuest", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(f.CollectableEnum.XP) > 0 && C.CastleModel.userData.userLevel <= this._maxLevelForXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "xpReward", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(f.CollectableEnum.XP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "c2Reward", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(f.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isBuyRubyQuest", {
    get: function () {
      return this._isBuyRubyQuest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isC2RewardQuest", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(f.CollectableEnum.C2) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isTemporaryQuest", {
    get: function () {
      return this._eventID == r.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "shownKingdomID", {
    get: function () {
      return this._shownKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "triggerKingdomID", {
    get: function () {
      return this._triggerKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questSeriesID", {
    get: function () {
      return this._questSeriesID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "hidden", {
    get: function () {
      if (this.hasConditionOfType(d.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND)) {
        return this.env.urlVariables.nativeStore == o.BasicConstants.NATIVE_STORE_MICROSOFT;
      } else {
        return this._hidden;
      }
    },
    set: function (e) {
      this._hidden = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isHeroQuest", {
    get: function () {
      return this._isHeroQuest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isGenericQuest", {
    get: function () {
      return this._isGenericQuest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericQuestType", {
    get: function () {
      return this._genericQuestType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericNameID", {
    get: function () {
      return this._genericNameID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericInfoID", {
    get: function () {
      return this._genericInfoID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericTipID", {
    get: function () {
      return this._genericTipID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericFinishID", {
    get: function () {
      return this._genericFinishID;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.isFreeOfIllegalConditionTypes = function () {
    for (var e = 0, t = C.CastleModel.questData.illegalQuestConditions; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && this.hasConditionOfType(i)) {
        return false;
      }
    }
    return true;
  };
  CastleQuestVO.prototype.isLegal = function () {
    if (!this.isFreeOfIllegalConditionTypes()) {
      return false;
    }
    if (this.questID == 3001) {
      var e = y.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (e && !e.isActive) {
        return false;
      }
    }
    return true;
  };
  Object.defineProperty(CastleQuestVO.prototype, "duration", {
    get: function () {
      if (this._eventID != r.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS) {
        return this._duration;
      }
      var e = y.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS), "TemporaryQuestEventVO");
      if (e) {
        return e.remainingEventTimeInSeconds;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isObjective", {
    get: function () {
      return this._objectiveType > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isMainObjective", {
    get: function () {
      return this._objectiveType == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isChallengeObjective", {
    get: function () {
      return this._objectiveType == 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isFailed", {
    get: function () {
      return this._isFailed || !this.remainingSeconds && !this._isCompleted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isCompleted", {
    get: function () {
      var e = false;
      if (this._conditions && this._conditions.length > 0 && (e = true, this._conditions != null)) {
        for (var t = 0, i = this._conditions; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (!n.isDone()) {
              e = false;
            }
          }
        }
      }
      return this._isCompleted || e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "remainingSeconds", {
    get: function () {
      if (this.isCampaignQuest) {
        var e = y.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT), "TimeLimitedCampaignQuestEventEventVO");
        if (e && e.questIDs.indexOf(this._questID) > -1) {
          return e.remainingEventTimeInSeconds;
        }
      } else if (this._remainingSeconds >= 0) {
        return Math.max(0, this._remainingSeconds - h.CachedTimer.getCachedTimer() / 1000 + this._timeWhenDataReceived);
      }
      return -1;
    },
    set: function (e) {
      this._remainingSeconds = e;
      this._timeWhenDataReceived = c.int(h.CachedTimer.getCachedTimer() / 1000);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "completed", {
    set: function (e) {
      this._isCompleted = e;
      if (this._conditions && this._conditions.length > 0 && this._conditions != null) {
        for (var t = 0, i = this._conditions; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.conditionCounter = -1;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "registered", {
    get: function () {
      return this._registered;
    },
    set: function (e) {
      this._registered = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "sortPriority", {
    get: function () {
      return this._sortPriority;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "requiredLevel", {
    get: function () {
      return this._requiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.isInProgress = function () {
    if (this.questCategory == O.CastleQuestData.CATEGORY_CAMPAIGN || this.questCategory == O.CastleQuestData.CATEGORY_EPIC) {
      return true;
    }
    if (this._conditions != null) {
      for (var e = 0, t = this._conditions; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && (i.isDone() || i.isInProgress())) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastleQuestVO.prototype, "isCampaignQuest", {
    get: function () {
      return this._questCategory == O.CastleQuestData.CATEGORY_CAMPAIGN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isEpicQuest", {
    get: function () {
      return this._questCategory == O.CastleQuestData.CATEGORY_EPIC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questCategory", {
    get: function () {
      return this._questCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    set: function (e) {
      this._isLocked = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "buyCost", {
    get: function () {
      var e = this._c2Cost;
      for (var t = 0; t < this._conditions.length; t++) {
        if (this._conditions[t].isDone()) {
          e -= c.int(this._c2Reductions[t]);
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "campaignQuestID", {
    get: function () {
      return this._campaignQuestID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "campaignQuestTimeStamp", {
    get: function () {
      return this._campaignQuestTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "campaignSortOrder", {
    get: function () {
      return this._campaignSortOrder;
    },
    set: function (e) {
      this._campaignSortOrder = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "xmlTriggerKingdomID", {
    get: function () {
      return this._xmlTriggerKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "requiredLegendLevel", {
    get: function () {
      return this._requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.compareLevelRequirements = function (e) {
    return !this.requiredLevel && !this.requiredLegendLevel || !e.requiredLevel && !e.requiredLegendLevel || this.requiredLevel == e.requiredLevel && this.requiredLegendLevel == e.requiredLegendLevel;
  };
  CastleQuestVO.__initialize_static_members = function () {
    CastleQuestVO.REWARD_SORT_ORDER = [f.CollectableEnum.XP, f.CollectableEnum.C2, f.CollectableEnum.C1];
  };
  CastleQuestVO.prototype.setVisualNumbersForEpicQuest = function (e) {
    this._epicQuestVisualNumbers = e;
  };
  Object.defineProperty(CastleQuestVO.prototype, "visualNumbersForEpicQuests", {
    get: function () {
      return this._epicQuestVisualNumbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "requiredQuestID", {
    get: function () {
      return this._requiredQuestID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleQuestVO;
}();
exports.CastleQuestVO = _;
n.classImplementsInterfaces(_, "IShowMeQuestVO");
var m = require("./50.js");
var f = require("./12.js");
var O = require("./545.js");
var E = require("./1639.js");
var y = require("./1.js");