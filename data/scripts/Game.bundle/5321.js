Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferQuestConditionInteger() {
    this._currentProgressValue = 0;
  }
  Object.defineProperty(OfferQuestConditionInteger.prototype, "registerName", {
    get: function () {
      return o.ClientConstOffer.QUEST_CONDITION_INTEGER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionInteger.prototype.registerOfferCondition = function (e) {
    e.addEntry(this.registerName + o.ClientConstOffer.TYPE_MIN, this);
    e.addEntry(this.registerName + o.ClientConstOffer.TYPE_MAX, this);
    e.addEntry(this.registerName + o.ClientConstOffer.TYPE_EQUALS, this);
    e.addEntry(this.registerName + o.ClientConstOffer.TYPE_BETWEEN, this);
  };
  OfferQuestConditionInteger.prototype.parseFromObjectParam = function (e, t, i) {
    this._id = e;
    this._params = t;
    this._currentProgressValue = 0;
    this._publicId = i;
  };
  OfferQuestConditionInteger.prototype.parseProgress = function (e) {
    this._currentProgressValue = e;
  };
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionPassed", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case o.ClientConstOffer.TYPE_BETWEEN:
          var e = false;
          e = this._params.minInclusive == null || this._params.minInclusive == 1 ? this._currentProgressValue >= parseInt(this._params.min) : this._currentProgressValue > parseInt(this._params.min);
          var t = false;
          t = this._params.maxInclusive == null || this._params.maxInclusive == 1 ? this._currentProgressValue <= parseInt(this._params.max) : this._currentProgressValue < parseInt(this._params.max);
          return e && t;
        case o.ClientConstOffer.TYPE_MAX:
          if (this._params.inclusive) {
            return this._currentProgressValue <= parseInt(this._params.value);
          } else {
            return this._currentProgressValue < parseInt(this._params.value);
          }
        case o.ClientConstOffer.TYPE_MIN:
          if (this._params.inclusive) {
            return this._currentProgressValue >= parseInt(this._params.value);
          } else {
            return this._currentProgressValue > parseInt(this._params.value);
          }
        case o.ClientConstOffer.TYPE_EQUALS:
          return this._currentProgressValue == parseInt(this._params.value);
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionTextId", {
    get: function () {
      return "offer_questcondition_" + this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionTextReplacements", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case o.ClientConstOffer.TYPE_BETWEEN:
          return [parseInt(this._params.min), parseInt(this._params.max), this._currentProgressValue];
        case o.ClientConstOffer.TYPE_MAX:
          if (this._params.inclusive) {
            return [parseInt(this._params.value) + 1, this._currentProgressValue];
          } else {
            return [parseInt(this._params.value), this._currentProgressValue];
          }
        case o.ClientConstOffer.TYPE_MIN:
          if (this._params.inclusive) {
            return [parseInt(this._params.value), this._currentProgressValue];
          } else {
            return [parseInt(this._params.value) + 1, this._currentProgressValue];
          }
        case o.ClientConstOffer.TYPE_EQUALS:
          return [parseInt(this._params.value), this._currentProgressValue];
        default:
          return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionsProgressInPercent", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case o.ClientConstOffer.TYPE_BETWEEN:
          var e = this._currentProgressValue - parseInt(this._params.max);
          var t = parseInt(this._params.min) - this._currentProgressValue;
          if (e <= 0 && t <= 0) {
            return 100;
          } else if (e > 0) {
            return this._currentProgressValue / parseInt(this._params.max) * 100 % 100;
          } else {
            return this._currentProgressValue / parseInt(this._params.min) * 100;
          }
        case o.ClientConstOffer.TYPE_MAX:
          if (this._params.inclusive) {
            if (this._currentProgressValue > parseInt(this._params.value) + 1) {
              return 0;
            } else {
              return 100;
            }
          } else if (this._currentProgressValue > parseInt(this._params.value)) {
            return 0;
          } else {
            return 100;
          }
        case o.ClientConstOffer.TYPE_MIN:
          if (this._params.inclusive) {
            if (parseInt(this._params.value) < this._currentProgressValue) {
              return 0;
            } else {
              return 100;
            }
          } else if (parseInt(this._params.value) + 1 < this._currentProgressValue) {
            return 0;
          } else {
            return 100;
          }
        case o.ClientConstOffer.TYPE_EQUALS:
          if (parseInt(this._params.value) == this._currentProgressValue) {
            return 100;
          } else {
            return 0;
          }
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "publicID", {
    get: function () {
      return this._publicId;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionInteger;
}();
exports.OfferQuestConditionInteger = a;
n.classImplementsInterfaces(a, "IOfferQuestCondition");