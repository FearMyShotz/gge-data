Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./172.js");
var p = require("./30.js");
var h = require("./15.js");
var g = require("./29.js");
var C = require("./9.js");
var _ = require("./167.js");
var m = require("./244.js");
var f = require("./249.js");
var O = require("./4.js");
var E = require("./1893.js");
var y = require("./184.js");
var b = function (e) {
  function AllianceBattleGroundEventVO() {
    var t = this;
    t._dailyResetTimeStamp = 0;
    t._timeToJoinTimeStamp = 0;
    t._castleBought = false;
    t.ownAllianceRank = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AllianceBattleGroundEventVO, e);
  AllianceBattleGroundEventVO.prototype.parseParamObject = function (e) {
    if (e.RD) {
      this._dailyResetTimeStamp = p.CachedTimer.getCachedTimer() + e.RD * u.ClientConstTime.SEC_2_MILLISEC;
    }
    if (e[l.CommKeys.REMAINING_JOIN_TIME]) {
      this._timeToJoinTimeStamp = p.CachedTimer.getCachedTimer() + e[l.CommKeys.REMAINING_JOIN_TIME] * u.ClientConstTime.SEC_2_MILLISEC;
    }
    if (e.TSID != null) {
      this.settingVO = O.CastleModel.allianceBattlegroundData.getConfigVOByID(e.TSID);
    } else {
      this.settingVO = O.CastleModel.allianceBattlegroundData.getConfigVOByID(2);
    }
    if (e.IPS != null) {
      this._castleBought = e.IPS == 1;
    } else {
      this._castleBought = true;
    }
    if (e.MAS) {
      this.settingVO.maxAllianceSize = c.int(e.MAS);
    }
  };
  AllianceBattleGroundEventVO.prototype.parseOwnRanks = function (e) {
    this.ownAllianceRank = c.int(e.R);
    h.CastleBasicController.getInstance().dispatchEvent(new d.CastleHighscoreEvent(d.CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE));
  };
  AllianceBattleGroundEventVO.prototype.openDialog = function (e = true) {
    var t = this.getEventTeaserMessageVO();
    if (t && !t.read) {
      o.CommandController.instance.executeCommand(g.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, t);
    } else {
      C.CastleDialogHandler.getInstance().registerDialogs(f.CastleAllianceBattleGroundEventDialog);
    }
  };
  AllianceBattleGroundEventVO.prototype.getEventTeaserMessageVO = function () {
    for (var e = 0, t = O.CastleModel.messageData.incomingMails; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && D.instanceOfClass(i, "MessageSpecialEventVO")) {
        var n = i;
        if (n && n.subtypeEvent == s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && n.additionalInformation[0] == r.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_AllianceBattleGround";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundEventVO.prototype.getAllianceRewardList = function () {
    this._allianceRewardList ||= O.CastleModel.allianceBattlegroundData.getRewardsByRewardSetID(this.settingVO.allianceRewardSetID);
    this._allianceRewardList.sort(this.bindFunction(this.sortRewards));
    this.allianceRankRanges = this.updateRankRanges(this._allianceRewardList);
    return this._allianceRewardList;
  };
  AllianceBattleGroundEventVO.prototype.getIndividualRewardList = function () {
    this._individualRewardList ||= O.CastleModel.allianceBattlegroundData.getRewardsByRewardSetID(this.settingVO.playerRewardSetID);
    this._individualRewardList.sort(this.bindFunction(this.sortRewards));
    this.individualRankRanges = this.updateRankRanges(this._individualRewardList);
    return this._individualRewardList;
  };
  AllianceBattleGroundEventVO.prototype.updateRankRanges = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      var n = new E.TempServerRankRangeVO();
      n.minRank = c.int(e[i].rank);
      n.maxRank = i - 1 >= 0 ? c.int(e[i - 1].rank + 1) : n.minRank;
      t.push(n);
    }
    return t;
  };
  AllianceBattleGroundEventVO.prototype.getRankRangeByRank = function (e, t) {
    for (var i = 0, n = t ? this.allianceRankRanges : this.individualRankRanges; i < n.length; i++) {
      var o = n[i];
      if (e <= o.minRank && e >= o.maxRank) {
        return o;
      }
    }
    return null;
  };
  AllianceBattleGroundEventVO.prototype.sortRewards = function (e, t) {
    if (e.usePoints && !t.usePoints) {
      return 1;
    } else if (!e.usePoints && t.usePoints) {
      return -1;
    } else {
      return e.rank - t.rank;
    }
  };
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "remainingTimeInSecondsUntilDailyReset", {
    get: function () {
      return Math.max(0, (this._dailyResetTimeStamp - p.CachedTimer.getCachedTimer()) * u.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "remainingTimeInSecondsUntilJoinBlock", {
    get: function () {
      return Math.max(0, (this._timeToJoinTimeStamp - p.CachedTimer.getCachedTimer()) * u.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "castleBought", {
    get: function () {
      return this._castleBought;
    },
    set: function (e) {
      this._castleBought = e;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundEventVO.prototype.getMerchantProperties = function () {
    var e = new m.MerchantScrollItemVO();
    e.eventPackageVO = O.CastleModel.eventPackageData.getEventPackageByID(this.settingVO.boosterCurrencyPackageID);
    e.specialEventVO = O.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_ARMORER);
    var t = new _.CastleGenericBuyDialogProperties();
    t.parseDataFromScrollItem(e);
    return t;
  };
  return AllianceBattleGroundEventVO;
}(y.BuyPackagesEventVO);
exports.AllianceBattleGroundEventVO = b;
a.classImplementsInterfaces(b, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
var D = require("./1.js");