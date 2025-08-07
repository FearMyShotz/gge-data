Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferQuestConditionVoucherCode() {}
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "registerName", {
    get: function () {
      return o.ClientConstOffer.QUEST_CONDITION_VOUCHER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionVoucherCode.prototype.registerOfferCondition = function (e) {
    e.addEntry(this.registerName, this);
  };
  OfferQuestConditionVoucherCode.prototype.parseFromObjectParam = function (e, t, i) {
    this._voucherCodes = t.value;
    this._publicID = i;
  };
  OfferQuestConditionVoucherCode.prototype.parseProgress = function (e) {};
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionPassed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionsProgressInPercent", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionTextReplacements", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "publicID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "voucherCodes", {
    get: function () {
      return this._voucherCodes;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionVoucherCode;
}();
exports.OfferQuestConditionVoucherCode = a;
n.classImplementsInterfaces(a, "IOfferQuestCondition");