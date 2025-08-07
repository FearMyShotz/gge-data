Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PaymentrewardRewardVO(e, t) {
    this._xmlNode = e;
    this._rewardList = t;
  }
  Object.defineProperty(PaymentrewardRewardVO.prototype, "c2ForReward", {
    get: function () {
      return this._xmlNode.c2ForReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "shownOfferBonus", {
    get: function () {
      return this._xmlNode.shownOfferBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "shownValue", {
    get: function () {
      var e = 1;
      if (this._xmlNode.displayType == PaymentrewardRewardVO.DISPLAY_TYPE_REAL_CURRENCY || this._xmlNode.displayType == PaymentrewardRewardVO.DISPLAY_TYPE_UNDEFINED) {
        e = o.CastleHardCurrencyHelper.currencyFactor;
      }
      return this._xmlNode.shownCurrencyValue * e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "displayTypeTextID", {
    get: function () {
      switch (this._xmlNode.displayType) {
        case PaymentrewardRewardVO.DISPLAY_TYPE_PERCENT:
          return "value_percentage";
        case PaymentrewardRewardVO.DISPLAY_TYPE_RUBIES:
          return "dialog_primeday_paymentTier_worth_rubies";
        case PaymentrewardRewardVO.DISPLAY_TYPE_REAL_CURRENCY:
          return "amountCurrency";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  PaymentrewardRewardVO.__initialize_static_members = function () {
    PaymentrewardRewardVO.DISPLAY_TYPE_PERCENT = 0;
    PaymentrewardRewardVO.DISPLAY_TYPE_RUBIES = 1;
    PaymentrewardRewardVO.DISPLAY_TYPE_REAL_CURRENCY = 2;
  };
  PaymentrewardRewardVO.DISPLAY_TYPE_UNDEFINED = -1;
  return PaymentrewardRewardVO;
}();
exports.PaymentrewardRewardVO = n;
var o = require("./666.js");
n.__initialize_static_members();