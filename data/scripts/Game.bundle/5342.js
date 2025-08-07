Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = function () {
  function OfferQuestConditionBoughtOfferReward() {
    this._neededValue = 0;
    this._currentValue = 0;
    this.inclusive = false;
  }
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "registerName", {
    get: function () {
      return a.ClientConstOffer.QUEST_CONDITION_INTEGER_BOUGHT_OFFER_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionBoughtOfferReward.prototype.registerOfferCondition = function (e) {
    e.addEntry(this.registerName, this);
  };
  OfferQuestConditionBoughtOfferReward.prototype.parseFromObjectParam = function (e, t, i) {
    this._neededValue = t.value;
    this.inclusive = t.inclusive;
    this._publicID = i;
  };
  OfferQuestConditionBoughtOfferReward.prototype.parseProgress = function (e) {
    this._currentValue = o.int(e);
  };
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionPassed", {
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
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionTextReplacements", {
    get: function () {
      return [this._currentValue, this._neededValue];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionsProgressInPercent", {
    get: function () {
      return this._currentValue / (this.inclusive ? this._neededValue : this._neededValue + 1) * 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "publicID", {
    get: function () {
      return this._publicID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "currentValue", {
    get: function () {
      return this._currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "neededValue", {
    get: function () {
      return this._neededValue;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionBoughtOfferReward;
}();
exports.OfferQuestConditionBoughtOfferReward = s;
n.classImplementsInterfaces(s, "IOfferQuestCondition");