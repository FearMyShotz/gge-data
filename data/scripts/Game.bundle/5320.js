Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = function () {
  function OfferQuestConditionPaymentMinWithUpdate() {
    this._neededValue = 0;
    this._currentValue = 0;
    this.inclusive = false;
  }
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "registerName", {
    get: function () {
      return a.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionPaymentMinWithUpdate.prototype.registerOfferCondition = function (e) {
    e.addEntry(this.registerName, this);
  };
  OfferQuestConditionPaymentMinWithUpdate.prototype.parseFromObjectParam = function (e, t, i) {
    this._neededValue = t.value;
    this.inclusive = t.inclusive;
    this._publicID = i;
  };
  OfferQuestConditionPaymentMinWithUpdate.prototype.parseProgress = function (e) {
    this._currentValue = o.int(e);
  };
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "conditionPassed", {
    get: function () {
      if (this.inclusive) {
        return this._currentValue >= this._neededValue;
      } else {
        return this._currentValue > this._neededValue;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "conditionTextReplacements", {
    get: function () {
      return [this._currentValue, this._neededValue];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "conditionsProgressInPercent", {
    get: function () {
      return this._currentValue / (this.inclusive ? this._neededValue : this._neededValue + 1) * 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "publicID", {
    get: function () {
      return this._publicID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "currentValue", {
    get: function () {
      return this._currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPaymentMinWithUpdate.prototype, "neededValue", {
    get: function () {
      return this._neededValue;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionPaymentMinWithUpdate;
}();
exports.OfferQuestConditionPaymentMinWithUpdate = s;
n.classImplementsInterfaces(s, "IOfferQuestCondition");