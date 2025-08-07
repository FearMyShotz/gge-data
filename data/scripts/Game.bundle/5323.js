Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferQuestConditionPayUser() {
    this._isPayUserGoal = false;
    this._isPayUserCurrent = false;
  }
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "registerName", {
    get: function () {
      return o.ClientConstOffer.QUEST_CONDITION_IS_PAYUSER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionPayUser.prototype.registerOfferCondition = function (e) {
    e.addEntry(this.registerName, this);
  };
  OfferQuestConditionPayUser.prototype.parseFromObjectParam = function (e, t, i) {
    this._isPayUserGoal = !!t.value;
    this._publicID = i;
  };
  OfferQuestConditionPayUser.prototype.parseProgress = function (e) {
    this._isPayUserCurrent = e == 1;
  };
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionPassed", {
    get: function () {
      return this._isPayUserCurrent == this._isPayUserGoal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionsProgressInPercent", {
    get: function () {
      if (this.conditionPassed) {
        return 100;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionTextReplacements", {
    get: function () {
      return [this._isPayUserCurrent, this._isPayUserGoal];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "publicID", {
    get: function () {
      return this._publicID;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionPayUser;
}();
exports.OfferQuestConditionPayUser = a;
n.classImplementsInterfaces(a, "IOfferQuestCondition");