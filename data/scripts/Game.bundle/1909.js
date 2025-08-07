Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./26.js");
var r = require("./1144.js");
var l = require("./4.js");
var c = require("./52.js");
var u = require("./184.js");
var d = function (e) {
  function LuckyWheelEventVO() {
    var t = this;
    t._willShowDialogAgain = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._scoreEventVO = new C.LuckyWheelPointEventTypeScoreEventVO();
    t.buyPackagesEventVO = new u.BuyPackagesEventVO();
    t.eventOverviewConfig.eventOverviewDetails = p.EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT;
    return t;
  }
  n.__extends(LuckyWheelEventVO, e);
  LuckyWheelEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this._scoreEventVO.parseData(t, i, n);
    this.buyPackagesEventVO.parseData(t, i, n);
    this._scoreEventVO.pointThresholds = this.luckyWheelData.pointThresholds;
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "isAtMaxClass", {
    get: function () {
      return this.luckyWheelData.isMaxIncreaseWinClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "winClassesAmount", {
    get: function () {
      return this.luckyWheelData.winClassesAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "numSpinsDoneInCurrentClass", {
    get: function () {
      return this.luckyWheelData.winClassProgress;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.getNeededSpinsForClass = function (e) {
    return this.luckyWheelData.getNeededSpinsForClass(e);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "winClassProgress", {
    get: function () {
      return this.luckyWheelData.winClassProgress / this.luckyWheelData.getNeededSpinsForClass(this.luckyWheelData.currentWinClass);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "nextWinClassProgress", {
    get: function () {
      return this.luckyWheelData.nextWinClassProgress;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.parseParamObject = function (e) {
    this.luckyWheelData.parseBasics(e);
    l.CastleModel.specialEventData.dispatchEvent(new s.CastleSpecialEventEvent(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this));
  };
  LuckyWheelEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this._scoreEventVO.setRankAndPoints([e[0]], [t[0]], null);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return LuckyWheelEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_LuckyWheel";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_LUCKY_WHEEL_CARNY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, h.CastleLuckyWheelDialog, new r.CastleLuckyWheelDialogProperties(this));
  };
  LuckyWheelEventVO.prototype.openMerchantDialog = function (e, t) {
    this.openDialog(e);
    this.executeOpenDialog(e, g.CastleLuckyWheelTicketBuyDialog);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "isProMode", {
    get: function () {
      return this.luckyWheelData.isProMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "currentWinClass", {
    get: function () {
      return this.luckyWheelData.currentWinClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "isFirstVisitToLuckyWheel", {
    get: function () {
      return this.luckyWheelData.isFirstVisitToLuckyWheel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasFreeSpin", {
    get: function () {
      return this.luckyWheelData.hasFreeSpin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasVisitedProMode", {
    get: function () {
      return this.luckyWheelData.hasVisitedProMode;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.getPreviewSet = function (e) {
    return this.luckyWheelData.getPreviewSets(e);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "rewardIsTickets", {
    get: function () {
      return this.luckyWheelData.rewardIsTickets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "levelLabels", {
    get: function () {
      return this.luckyWheelData.levelLabels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasLevelUp", {
    get: function () {
      return this.luckyWheelData.hasLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "scoreEventVO", {
    get: function () {
      return this._scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventPackagesVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_luckyWheel_description";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "primesaleDescriptionTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "primesaleSaveRubiesTextID", {
    get: function () {
      return this.buyPackagesEventVO.primesaleSaveRubiesTextID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "primesaleSaveRubiesTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.getVisiblePackages = function (e, t, i) {
    return this.buyPackagesEventVO.getVisiblePackages(e, t, i);
  };
  LuckyWheelEventVO.prototype.containsEventPackage = function (e) {
    return this.buyPackagesEventVO.containsEventPackage(e);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "luckyWheelData", {
    get: function () {
      return l.CastleModel.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasEnoughRubiesToBuyJackpot", {
    get: function () {
      return this.luckyWheelData.hasEnoughRubiesToBuyJackpot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasEnoughTicketsToBuyJackpot", {
    get: function () {
      return this.luckyWheelData.hasEnoughTicketsToBuyJackpot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "willShowDialogAgain", {
    get: function () {
      return this._willShowDialogAgain;
    },
    set: function (e) {
      this._willShowDialogAgain = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "ticketCost", {
    get: function () {
      if (this.isProMode) {
        return _.LuckyWheelConst.SPIN_TICKET_COST_PROMODE;
      } else if (this.hasFreeSpin) {
        return 0;
      } else {
        return _.LuckyWheelConst.SPIN_TICKET_COST_NORMAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "currencyID", {
    get: function () {
      return c.ClientConstCurrency.ID_LUCKY_WHEEL_TICKET;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "textIDString", {
    get: function () {
      return "luckyWheel";
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.EVENT_BUILDING_WOD = 48;
  return LuckyWheelEventVO;
}(u.BuyPackagesEventVO);
exports.LuckyWheelEventVO = d;
var p = require("./570.js");
var h = require("./4456.js");
var g = require("./1916.js");
var C = require("./4476.js");
var _ = require("./5.js");
o.classImplementsInterfaces(d, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO", "IScoreUpdatable");