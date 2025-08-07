Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./22.js");
var u = require("./26.js");
var d = require("./72.js");
var p = require("./4.js");
var h = require("./52.js");
var g = createjs.Event;
var C = function (e) {
  function LuckyWheelData(t) {
    var i = e.call(this) || this;
    i.SGN_LUCKY_CATEGORY_RECEIVED = new o.NoneValueSignal();
    i._rewardSets = new Map();
    i._normalPreviewSets = new Map();
    i._proModePreviewSets = new Map();
    i._neededSpinsForNextClass = new Map();
    i._c2CostsPerSpinByWinClass = new Map();
    i._winClassesAmount = 0;
    i._isProMode = false;
    i._currentJackpotSet = 0;
    i._nextJackpotSet = 0;
    i._nextJackpotSpinJackpotSet = 0;
    i._winningCategory = NaN;
    i._hasVisitedProMode = false;
    i._hasFreeSpin = false;
    i._currentWinClass = Number.NaN;
    i._hasLevelUp = false;
    i._winClassProgress = NaN;
    i._showGuaranteedJackpotDialog = true;
    i._showIncreaseWinClassDialog = true;
    i._winningCategoryReceived = false;
    i.parseXml(t);
    return i;
  }
  n.__extends(LuckyWheelData, e);
  LuckyWheelData.prototype.parseLWM = function (e) {
    this._isProMode = !this._isProMode;
    this._nextJackpotSpinJackpotSet = l.int(e.JHID);
    this._nextJackpotSet = l.int(e.JSID);
    this.dispatchEvent(new u.CastleSpecialEventEvent(u.CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED, this.eventVO));
  };
  LuckyWheelData.prototype.parseLWJ = function (e) {
    this.parseLWS(e);
    this.dispatchEvent(new u.CastleSpecialEventEvent(u.CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT, this.eventVO));
  };
  LuckyWheelData.prototype.parseLWS = function (e) {
    this.parseBasics(e);
    this._winningCategory = e.WC;
    var t = _.CollectableManager.parser.s2cParamList.createList(e.R);
    if (t.length > 0) {
      this._rewardedItem = t.getItemByIndex(0);
    }
    this.eventVO.scoreEventVO.setRankAndPoints(e.OR, e.OP, null);
    this.dispatchEvent(new u.CastleSpecialEventEvent(u.CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED, this.eventVO));
  };
  LuckyWheelData.prototype.parseLWC = function (e) {
    this.parseBasics(e);
    this.dispatchEvent(new u.CastleSpecialEventEvent(u.CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED, this.eventVO));
  };
  LuckyWheelData.prototype.parseBasics = function (e) {
    this._hasVisitedProMode = !!e.HVPM;
    this._hasFreeSpin = !!e.HFS;
    this._isProMode = !!e.PMA;
    this._hasLevelUp = !isNaN(this.currentWinClass) && this.currentWinClass != e.CWC;
    this._currentWinClass = e.CWC;
    this._winClassProgress = e.WCP;
    this._nextJackpotSet = l.int(e.JSID);
    this._nextJackpotSpinJackpotSet = l.int(e.JHID);
  };
  LuckyWheelData.prototype.parseXml = function (e) {
    this._rewardSets = this.createRewardItemsMappedToSetID(e, "luckywheelrewardsets", "luckywheelrewardset", "luckyWheelRewardSetID", "rewardIDs");
    this._normalPreviewSets = this.createRewardItemsMappedToSetID(e, "luckywheelclasses", "luckywheelclass", "luckyWheelClassID", "normalPreview");
    this._proModePreviewSets = this.createRewardItemsMappedToSetID(e, "luckywheelclasses", "luckywheelclass", "luckyWheelClassID", "hardcorePreview");
    this._pointThresholds = this.getActivityRewardThresholds(e);
    this._winClassesAmount = e.luckywheelclasses.length;
    var t = 0;
    this._sumOfSpinsWithinThresholds = new Array();
    for (var i = 0; i < this._winClassesAmount; i++) {
      var n = e.luckywheelclasses[i];
      var o = parseInt(c.CastleXMLUtils.getValueOrDefault("luckyWheelClassID", n, "0"));
      var a = parseInt(c.CastleXMLUtils.getValueOrDefault("neededSpinsForNextClass", n, "0"));
      this._c2CostsPerSpinByWinClass.set(o, Number(c.CastleXMLUtils.getValueOrDefault("C2PerSkippedSpin", n, "0")));
      this._neededSpinsForNextClass.set(o, a);
      if (o >= this._pointThresholds[t] || o == 1) {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(o));
        t++;
      } else {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(o - 1) + this._neededSpinsForNextClass.get(o));
      }
    }
  };
  LuckyWheelData.prototype.getActivityRewardThresholds = function (e) {
    var t = new Array();
    for (var i = l.int(e.luckywheelclasses.length), n = 0; n < i; n++) {
      if ((e.luckywheelclasses[n].activityRewardThreshold || "") != "") {
        t.push(l.int(e.luckywheelclasses[n].luckyWheelClassID || ""));
      }
    }
    return t;
  };
  LuckyWheelData.prototype.createRewardItemsMappedToSetID = function (e, t, i, n, o) {
    var a;
    var s = e[t];
    s.length;
    var r = 0;
    var c = new Map();
    for (var u = 0, d = s; u < d.length; u++) {
      var p = d[u];
      a = p[o];
      r = l.int(p[n]);
      c.set(r, _.CollectableManager.parser.createListFromRewardIdsString(a));
    }
    return c;
  };
  Object.defineProperty(LuckyWheelData.prototype, "levelLabels", {
    get: function () {
      var e = [];
      (e = e.concat(this._pointThresholds)).push(r.Localize.text("Ranking_TopX", [this.eventVO.scoreEventVO.topX]));
      e.push(r.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "nextWinClassProgress", {
    get: function () {
      if (this.isMaxIncreaseWinClass) {
        return 1;
      } else {
        return (this._winClassProgress + (this.isProMode ? s.LuckyWheelConst.WINNING_CLASS_PROGRESS_PROMODE : s.LuckyWheelConst.WINNING_CLASS_PROGRESS_NORMAL)) / this.getNeededSpinsForClass(this.currentWinClass);
      }
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelData.prototype.doJackpotSpin = function () {
    this._currentJackpotSet = this._nextJackpotSpinJackpotSet;
  };
  LuckyWheelData.prototype.doNormalSpin = function () {
    this._currentJackpotSet = this._nextJackpotSet;
  };
  LuckyWheelData.prototype.getNeededSpinsForClass = function (e) {
    return this._neededSpinsForNextClass.get(e);
  };
  LuckyWheelData.prototype.getTotalNeededSpinsForClass = function (e) {
    var t = 0;
    for (var i = 2; i <= e; i++) {
      t += l.int(this.getNeededSpinsForClass(i - 1));
    }
    return t;
  };
  LuckyWheelData.prototype.getPreviewSets = function (e) {
    if (this.isProMode) {
      return this._proModePreviewSets.get(e);
    } else {
      return this._normalPreviewSets.get(e);
    }
  };
  Object.defineProperty(LuckyWheelData.prototype, "currentJackpotSet", {
    get: function () {
      return this._rewardSets.get(this._currentJackpotSet);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winningCategory", {
    get: function () {
      return this._winningCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "rewardedItem", {
    get: function () {
      return this._rewardedItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "rewardIsTickets", {
    get: function () {
      return !!this.rewardedItem && f.CollectableHelper.hasTypeAndId(this.rewardedItem, m.CollectableEnum.GENERIC_CURRENCY, this.currencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "currentWinClass", {
    get: function () {
      return this._currentWinClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "isProMode", {
    get: function () {
      return this._isProMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasFreeSpin", {
    get: function () {
      return this._hasFreeSpin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasVisitedProMode", {
    get: function () {
      return this._hasVisitedProMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasLevelUp", {
    get: function () {
      return this._hasLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winClassesAmount", {
    get: function () {
      return this._winClassesAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winClassProgress", {
    get: function () {
      return this._winClassProgress;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "isFirstVisitToLuckyWheel", {
    get: function () {
      return this.currentWinClass == 1 && this.winClassProgress == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "showIncreaseWinClassDialog", {
    get: function () {
      if (this.isMaxIncreaseWinClass) {
        this._showIncreaseWinClassDialog = false;
      }
      return this._showIncreaseWinClassDialog;
    },
    set: function (e) {
      this._showIncreaseWinClassDialog = e;
      this.dispatchEvent(new g(LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE, true, false));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "increaseWinClassC2", {
    get: function () {
      return s.LuckyWheelConst.calculateC2CostForIncreasingPrizeClass(this.getNeededSpinsForClass(this.currentWinClass) - this.winClassProgress, this.c2PricePerSpin);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "c2PricePerSpin", {
    get: function () {
      return this._c2CostsPerSpinByWinClass.get(this.currentWinClass);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "isMaxIncreaseWinClass", {
    get: function () {
      return this.currentWinClass == this.winClassesAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "showGuaranteedJackpotDialog", {
    get: function () {
      return this._showGuaranteedJackpotDialog;
    },
    set: function (e) {
      this._showGuaranteedJackpotDialog = e;
      this.dispatchEvent(new g(LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE, true, false));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "jackpotTicketPrice", {
    get: function () {
      if (this.isProMode) {
        return s.LuckyWheelConst.SPIN_TICKET_COST_PROMODE;
      } else {
        return s.LuckyWheelConst.SPIN_TICKET_COST_NORMAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "jackpotC2Price", {
    get: function () {
      if (this.isProMode) {
        return s.LuckyWheelConst.JACKPOT_C2_COST_PROMODE;
      } else {
        return s.LuckyWheelConst.JACKPOT_C2_COST_NORMAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasEnoughTicketsToBuyJackpot", {
    get: function () {
      return p.CastleModel.currencyData.getAmountById(this.currencyID) >= this.jackpotTicketPrice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasEnoughRubiesToBuyJackpot", {
    get: function () {
      return p.CastleModel.currencyData.c2Amount >= this.jackpotC2Price;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "eventVO", {
    get: function () {
      return p.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "pointThresholds", {
    get: function () {
      return this._pointThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "rewardsIncreaseWinClass", {
    get: function () {
      if (this.isMaxIncreaseWinClass) {
        return this.getPreviewSets(this.currentWinClass);
      } else {
        return this.getPreviewSets(this.currentWinClass + 1);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "sumOfSpinsWithinThresholds", {
    get: function () {
      return this._sumOfSpinsWithinThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winningCategoryReceived", {
    get: function () {
      return this._winningCategoryReceived;
    },
    set: function (e) {
      this._winningCategoryReceived = e;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelData.prototype.onWinningCategoryReceived = function () {
    this._winningCategoryReceived = true;
    this.SGN_LUCKY_CATEGORY_RECEIVED.dispatch();
  };
  LuckyWheelData.prototype.resetWinningCategory = function () {
    this._winningCategory = -1;
    this._winningCategoryReceived = false;
  };
  Object.defineProperty(LuckyWheelData.prototype, "currencyID", {
    get: function () {
      return h.ClientConstCurrency.ID_LUCKY_WHEEL_TICKET;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "eventID", {
    get: function () {
      return a.EventConst.EVENTTYPE_LUCKYWHEEL;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN = 10;
  LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE = "SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE";
  LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE = "SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE";
  return LuckyWheelData;
}(d.CastleEventDispatcher);
exports.LuckyWheelData = C;
var _ = require("./50.js");
var m = require("./12.js");
var f = require("./45.js");