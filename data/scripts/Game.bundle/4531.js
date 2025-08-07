Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./28.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./79.js");
var p = require("./386.js");
var h = require("./167.js");
var g = require("./244.js");
var C = function (e) {
  function TempServerEventVO() {
    var t = this;
    t._dailyResetTimeStamp = 0;
    t._castleBought = false;
    t.ownOverallRank = 0;
    t.ownOverallPoints = 0;
    t.ownDailyRank = 0;
    t.ownDailyPoints = 0;
    t._isCrossPlay = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TempServerEventVO, e);
  TempServerEventVO.prototype.parseParamObject = function (e) {
    if (e.RD) {
      this._dailyResetTimeStamp = c.CachedTimer.getCachedTimer() + e.RD * l.ClientConstTime.SEC_2_MILLISEC;
    }
    if (e.TSID) {
      this.settingVO = u.CastleModel.tempServerData.getConfigVOByID(e.TSID);
    }
    if (e.IPS != null) {
      this._castleBought = e.IPS == 1;
    } else {
      this._castleBought = true;
    }
    if (e[s.CommKeys.IS_CROSSPLAY_SERVER_EVENT]) {
      this._isCrossPlay = e[s.CommKeys.IS_CROSSPLAY_SERVER_EVENT] == 1;
    }
  };
  TempServerEventVO.prototype.parseOwnRanks = function (e) {
    this.ownDailyPoints = r.int(e.DHS);
    this.ownDailyRank = r.int(Math.max(0, e.DR));
    this.ownOverallPoints = r.int(e.HS);
    this.ownOverallRank = r.int(Math.max(0, e.R));
    b.CastleBasicController.getInstance().dispatchEvent(new y.CastleHighscoreEvent(y.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE));
  };
  TempServerEventVO.prototype.openDialog = function (e = true) {
    var t = this.getEventTeaserMessageVO();
    if (t && !t.read) {
      O.CommandController.instance.executeCommand(f.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, t);
    } else {
      _.CastleDialogHandler.getInstance().registerDialogs(m.CastleTemporaryServerEventDialog);
    }
  };
  TempServerEventVO.prototype.getMerchantProperties = function () {
    var e = new g.MerchantScrollItemVO();
    e.eventPackageVO = u.CastleModel.eventPackageData.getEventPackageByID(this.settingVO.boosterCurrencyPackageID);
    e.specialEventVO = u.CastleModel.specialEventData.getActiveEventByEventId(E.EventConst.EVENTTYPE_ARMORER);
    var t = new h.CastleGenericBuyDialogProperties();
    t.parseDataFromScrollItem(e);
    return t;
  };
  TempServerEventVO.prototype.getEventTeaserMessageVO = function () {
    for (var e = 0, t = u.CastleModel.messageData.incomingMails; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && o.instanceOfClass(i, "MessageSpecialEventVO")) {
        var n = i;
        if (n && n.subtypeEvent == E.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && n.additionalInformation[0] == E.EventConst.EVENTTYPE_TEMPSERVER) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(TempServerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_TempServer";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TempServerEventVO.prototype.getRewardList = function () {
    this._rewardList ||= u.CastleModel.tempServerData.getRewardsByRewardSetID(this.settingVO.rewardSetID);
    this._rewardList.sort(this.bindFunction(this.sortRewards));
    return this._rewardList;
  };
  TempServerEventVO.prototype.sortRewards = function (e, t) {
    if (e.usePoints && !t.usePoints) {
      return -1;
    } else if (!e.usePoints && t.usePoints) {
      return 1;
    } else {
      return t.rank - e.rank;
    }
  };
  Object.defineProperty(TempServerEventVO.prototype, "remainingTimeInSecondsUntilDailyReset", {
    get: function () {
      return Math.max(0, (this._dailyResetTimeStamp - c.CachedTimer.getCachedTimer()) * l.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "castleBought", {
    get: function () {
      return this._castleBought;
    },
    set: function (e) {
      this._castleBought = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isRankSwapScoring", {
    get: function () {
      return this.settingVO.scoringSystem == p.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isMightScoring", {
    get: function () {
      return this.settingVO.scoringSystem == p.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isCollectorScoring", {
    get: function () {
      return this.settingVO.scoringSystem == p.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isCrossPlay", {
    get: function () {
      return this._isCrossPlay;
    },
    enumerable: true,
    configurable: true
  });
  return TempServerEventVO;
}(d.ASpecialEventVO);
exports.TempServerEventVO = C;
var _ = require("./9.js");
var m = require("./1148.js");
var f = require("./29.js");
var O = require("./2.js");
var E = require("./5.js");
var y = require("./172.js");
var b = require("./15.js");
a.classImplementsInterfaces(C, "IEventOverviewable");