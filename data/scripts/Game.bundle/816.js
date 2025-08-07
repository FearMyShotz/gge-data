Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./275.js");
var l = require("./28.js");
var c = require("./43.js");
var u = require("./3607.js");
var d = require("./4.js");
var p = require("./295.js");
var h = require("./79.js");
var g = require("./3608.js");
var C = function (e) {
  function PaymentrewardEventVO() {
    var t = this;
    t._maxBuyCount = 0;
    t._boughtC2 = 0;
    t._specialOfferId = -1;
    t._skinID = 0;
    t._c2ForComplete = 0;
    t._startTimestamp = 0;
    t._isTimeless = false;
    t._isTimeDisplayedInPercentage = false;
    t._durationOfTimeless = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(PaymentrewardEventVO, e);
  PaymentrewardEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    var o = d.CastleModel.primeDayData.getPrimeDayXMLNodeByID(this._specialOfferId);
    if (o == null) {
      throw new Error("PaymentrewardEventVO.parseData() has been told to parse a PrimeDay from the XML that does not exist ID: " + this._specialOfferId);
    }
    var a = o.paymentRewardIDs;
    var r = 0;
    this._rewards = [];
    this._c2ForComplete = 0;
    if (a != null) {
      for (var l = 0, c = a; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined) {
          var p = d.CastleModel.primeDayData.getPrimeDayRewardXMLNodeByID(u);
          var h = _.CollectableManager.parser.s2cParamList.createList(n.RW[r++]);
          var C = new g.PaymentrewardRewardVO(p, h);
          this._c2ForComplete = s.int(Math.max(this._c2ForComplete, C.c2ForReward));
          this._rewards.push(C);
        }
      }
    }
    this._maxBuyCount = o.rewardCap;
  };
  PaymentrewardEventVO.prototype.parseParamObject = function (e) {
    this._specialOfferId = s.int(e.SEID);
    this._boughtC2 = s.int(e.BC2);
    this._skinID = s.int(e.SKN);
    this._realPrice = e.RP;
    this._isTimeless = !!e.TML;
    this._durationOfTimeless = s.int(e.TS);
    this._isTimeDisplayedInPercentage = false;
    if (e.RS && this._isTimeless) {
      this._isTimeDisplayedInPercentage = this._isTimeless;
    }
    this._startTimestamp = 0;
    if (e.RS && this._durationOfTimeless) {
      this._startTimestamp = this._endTimestamp - this._durationOfTimeless * l.ClientConstTime.SEC_2_MILLISEC;
    }
  };
  PaymentrewardEventVO.prototype.openDialog = function (e = true) {
    if (!d.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var t = s.int(e ? o.BasicDialogHandler.PRIORITY_TOP : o.BasicDialogHandler.PRIORITY_LOW);
      var i = new p.PaymentPopupDialogInfoVO(this.skinnedSpecialOfferDialogKey, new u.CastlePaymentRewardSpecialOfferDialogProperties(this), c.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_DAY, false, t);
      m.CastleDialogHandler.getInstance().registerDialogsWithType(i.dialogClass, i.properties, i.blockDialogs, i.priority, 0, i.type);
    }
  };
  Object.defineProperty(PaymentrewardEventVO.prototype, "skinnedSpecialOfferDialogKey", {
    get: function () {
      switch (this._skinID) {
        case r.ClientConstEvent.PRIMEDAY_DEFAULT:
          return v.CastlePaymentRewardSpecialOfferDialog;
        case r.ClientConstEvent.PRIMEDAY_USA:
          return N.CastlePaymentRewardSpecialOfferUSADialog;
        case r.ClientConstEvent.PRIMEDAY_SUPER:
          return B.CastlePaymentRewardSpecialOfferSuperDialog;
        case r.ClientConstEvent.PRIMEDAY_ALIEN:
          return f.CastlePaymentRewardSpecialOfferAlienDialog;
        case r.ClientConstEvent.PRIMEDAY_BERIMOND:
          return y.CastlePaymentRewardSpecialOfferBerimondDialog;
        case r.ClientConstEvent.PRIMEDAY_DEFENSE:
          return T.CastlePaymentRewardSpecialOfferDefenseDialog;
        case r.ClientConstEvent.PRIMEDAY_ATTACK:
          return E.CastlePaymentRewardSpecialOfferAttackDialog;
        case r.ClientConstEvent.PRIMEDAY_EASTER:
          return S.CastlePaymentRewardSpecialOfferEasterDialog;
        case r.ClientConstEvent.PRIMEDAY_SPRING_BUNNY:
          return V.CastlePaymentRewardSpecialOfferSpringBunnyDialog;
        case r.ClientConstEvent.PRIMEDAY_WHEEL_OF_FORTUNE:
          return k.CastlePaymentRewardSpecialOfferWheelOfFortuneDialog;
        case r.ClientConstEvent.PRIMEDAY_PARAGON_XP:
          return R.CastlePaymentRewardSpecialOfferParagonXPDialog;
        case r.ClientConstEvent.PRIMEDAY_SUNDAY:
          return w.CastlePaymentRewardSpecialOfferSundayDialog;
        case r.ClientConstEvent.PRIMEDAY_EVENING:
          return A.CastlePaymentRewardSpecialOfferEveningDialog;
        case r.ClientConstEvent.PRIMEDAY_UNDERWORLD:
          return F.CastlePaymentRewardSpecialOfferUnderworldDialog;
        case r.ClientConstEvent.PRIMEDAY_WISHING_WELL:
          return v.CastlePaymentRewardSpecialOfferDialog;
        case r.ClientConstEvent.PRIMEDAY_HALLOWEEN:
          return P.CastlePaymentRewardSpecialOfferHalloweenDialog;
        case r.ClientConstEvent.PRIMEDAY_BLACK_FRIDAY:
          return b.CastlePaymentRewardSpecialOfferBlackFridayDialog;
        case r.ClientConstEvent.PRIMEDAY_WINTER:
          return U.CastlePaymentRewardSpecialOfferWinterDialog;
        case r.ClientConstEvent.PRIMEDAY_MIDAS:
          return M.CastlePaymentRewardSpecialOfferMidasDialog;
        case r.ClientConstEvent.PRIMEDAY_FURYS_BLADE:
          return L.CastlePaymentRewardSpecialOfferFurysBladeDialog;
        case r.ClientConstEvent.PRIMEDAY_WORLD_CUP:
          return G.CastlePaymentRewardSpecialOfferWorldCupDialog;
        case r.ClientConstEvent.PRIMEDAY_BLOOD_CROW:
          return D.CastlePaymentRewardSpecialOfferBloodcrowDialog;
        case r.ClientConstEvent.PRIMEDAY_CHRISTMAS:
          return I.CastlePaymentRewardSpecialOfferChristmasDialog;
        case r.ClientConstEvent.PRIMEDAY_SUMMER:
          return x.CastlePaymentRewardSpecialOfferSummerDialog;
        case r.ClientConstEvent.PRIMEDAY_ANNIVERSARY:
          return O.CastlePaymentRewardSpecialOfferAnniversaryDialog;
        case r.ClientConstEvent.PRIMEDAY_DEFAULT_CURRENCY:
          return z.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog;
        case r.ClientConstEvent.PRIMEDAY_USA_CURRENCY:
          return te.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUSADialog;
        case r.ClientConstEvent.PRIMEDAY_ALIEN_CURRENCY:
          return H.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAlienDialog;
        case r.ClientConstEvent.PRIMEDAY_SUPER_CURRENCY:
          return $.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog;
        case r.ClientConstEvent.PRIMEDAY_BERIMOND_CURRENCY:
          return W.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBerimondDialog;
        case r.ClientConstEvent.PRIMEDAY_DEFENSE_CURRENCY:
          return K.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDefenseDialog;
        case r.ClientConstEvent.PRIMEDAY_ATTACK_CURRENCY:
          return j.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAttackDialog;
        case r.ClientConstEvent.PRIMEDAY_EASTER_CURRENCY:
          return q.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEasterDialog;
        case r.ClientConstEvent.PRIMEDAY_WHEEL_OF_FORTUNE_CURRENCY:
          return ie.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWheelOfFortuneDialog;
        case r.ClientConstEvent.PRIMEDAY_PARAGON_XP_CURRENCY:
          return J.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog;
        case r.ClientConstEvent.PRIMEDAY_SUNDAY_CURRENCY:
          return Z.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySundayDialog;
        case r.ClientConstEvent.PRIMEDAY_EVENING_CURRENCY:
          return X.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog;
        case r.ClientConstEvent.PRIMEDAY_UNDERWORLD_CURRENCY:
          return ee.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUnderworldDialog;
        case r.ClientConstEvent.PRIMEDAY_WISHING_WELL_CURRENCY:
          return z.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog;
        case r.ClientConstEvent.PRIMEDAY_HALLOWEEN_CURRENCY:
          return Q.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayHalloweenDialog;
        case r.ClientConstEvent.PRIMEDAY_BLACK_FRIDAY_CURRENCY:
          return Y.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBlackFridayDialog;
        case r.ClientConstEvent.PRIMEDAY_WINTER_CURRENCY:
          return ne.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWinterDialog;
        default:
          return v.CastlePaymentRewardSpecialOfferDialog;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "boughtC2", {
    get: function () {
      return this._boughtC2;
    },
    set: function (e) {
      this._boughtC2 = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "maxBuyCount", {
    get: function () {
      return this._maxBuyCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "firstReward", {
    get: function () {
      return this._rewards[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "boughtAllRewardsCount", {
    get: function () {
      return s.int(this._boughtC2 / this._c2ForComplete);
    },
    enumerable: true,
    configurable: true
  });
  PaymentrewardEventVO.prototype.getBoughtCount = function (e = 0) {
    return s.int(this.isBoughtInCurrentCycle(e) ? 1 : 0) + this.boughtAllRewardsCount;
  };
  PaymentrewardEventVO.prototype.isBoughtInCurrentCycle = function (e = 0) {
    return this.c2BoughtInCurrentCycle >= this.rewards[e].c2ForReward;
  };
  Object.defineProperty(PaymentrewardEventVO.prototype, "c2BoughtInCurrentCycle", {
    get: function () {
      return this.boughtC2 % this.c2ForComplete;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "nextRewardIndex", {
    get: function () {
      for (var e = 0; e < this.rewards.length; ++e) {
        if (!this.isBoughtInCurrentCycle(e)) {
          return e;
        }
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "isTimeDisplayedInPercentage", {
    get: function () {
      return this._isTimeDisplayedInPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "startTimestamp", {
    get: function () {
      return this._startTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "realPrice", {
    get: function () {
      return this._realPrice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "specialOfferId", {
    get: function () {
      return this._specialOfferId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "isTimeless", {
    get: function () {
      return this._isTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "durationOfTimeless", {
    get: function () {
      return this._durationOfTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "c2ForComplete", {
    get: function () {
      return this._c2ForComplete;
    },
    enumerable: true,
    configurable: true
  });
  PaymentrewardEventVO.__initialize_static_members = function () {
    PaymentrewardEventVO.REMAINING_TIME_ALERT = 180;
  };
  return PaymentrewardEventVO;
}(h.ASpecialEventVO);
exports.PaymentrewardEventVO = C;
var _ = require("./50.js");
var m = require("./9.js");
var f = require("./3609.js");
var O = require("./3610.js");
var E = require("./3611.js");
var y = require("./3612.js");
var b = require("./1736.js");
var D = require("./3613.js");
var I = require("./3614.js");
var T = require("./3615.js");
var v = require("./116.js");
var S = require("./3616.js");
var A = require("./3617.js");
var L = require("./3618.js");
var P = require("./1737.js");
var M = require("./3619.js");
var R = require("./3620.js");
var V = require("./3621.js");
var x = require("./3622.js");
var w = require("./3623.js");
var B = require("./3624.js");
var F = require("./3625.js");
var N = require("./3626.js");
var k = require("./3627.js");
var U = require("./1738.js");
var G = require("./3628.js");
var H = require("./3629.js");
var j = require("./3630.js");
var W = require("./3631.js");
var Y = require("./3632.js");
var K = require("./3633.js");
var z = require("./227.js");
var q = require("./3634.js");
var X = require("./3635.js");
var Q = require("./3636.js");
var J = require("./3637.js");
var Z = require("./3638.js");
var $ = require("./3639.js");
var ee = require("./3640.js");
var te = require("./3641.js");
var ie = require("./3642.js");
var ne = require("./3643.js");
a.classImplementsInterfaces(C, "IEventOverviewable");
C.__initialize_static_members();