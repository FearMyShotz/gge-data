Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function OfferQuestConditionInteger(e, t) {
    this._currentProgressValue = 0;
    this._id = e;
    this._params = t;
    this._currentProgressValue = 0;
  }
  Object.defineProperty(OfferQuestConditionInteger.prototype, "registerName", {
    get: function () {
      return "OfferQuestConditionInteger";
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionInteger.prototype.parseFromObjectParam = function (e, t) {
    this._id = e;
    this._params = t;
    this._currentProgressValue = 0;
  };
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionPassed", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case OfferQuestConditionInteger.TYPE_BETWEEN:
          var e = false;
          e = this._params.minInclusive == null || this._params.minInclusive == 1 ? this._currentProgressValue >= parseInt(this._params.min) : this._currentProgressValue > parseInt(this._params.min);
          var t = false;
          t = this._params.maxInclusive == null || this._params.maxInclusive == 1 ? this._currentProgressValue <= parseInt(this._params.max) : this._currentProgressValue < parseInt(this._params.max);
          return e && t;
        case OfferQuestConditionInteger.TYPE_MAX:
          if (this._params.inclusive) {
            return this._currentProgressValue <= parseInt(this._params.value);
          } else {
            return this._currentProgressValue < parseInt(this._params.value);
          }
        case OfferQuestConditionInteger.TYPE_MIN:
          if (this._params.inclusive) {
            return this._currentProgressValue >= parseInt(this._params.value);
          } else {
            return this._currentProgressValue > parseInt(this._params.value);
          }
        case OfferQuestConditionInteger.TYPE_EQUALS:
          return this._currentProgressValue == parseInt(this._params.value);
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "currentProgressValue", {
    get: function () {
      return this._currentProgressValue;
    },
    set: function (e) {
      this._currentProgressValue = e;
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
        case OfferQuestConditionInteger.TYPE_BETWEEN:
          return [parseInt(this._params.min), parseInt(this._params.max), this._currentProgressValue];
        case OfferQuestConditionInteger.TYPE_MAX:
          if (this._params.inclusive) {
            return [parseInt(this._params.value) + 1, this._currentProgressValue];
          } else {
            return [parseInt(this._params.value), this._currentProgressValue];
          }
        case OfferQuestConditionInteger.TYPE_MIN:
          if (this._params.inclusive) {
            return [parseInt(this._params.value), this._currentProgressValue];
          } else {
            return [parseInt(this._params.value) + 1, this._currentProgressValue];
          }
        case OfferQuestConditionInteger.TYPE_EQUALS:
          return [parseInt(this._params.value), this._currentProgressValue];
        default:
          return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionInteger.prototype.dispose = function () {
    this._params = null;
    this._id = null;
  };
  OfferQuestConditionInteger.TYPE_BETWEEN = "Between";
  OfferQuestConditionInteger.TYPE_MAX = "Max";
  OfferQuestConditionInteger.TYPE_MIN = "Min";
  OfferQuestConditionInteger.TYPE_EQUALS = "Equals";
  return OfferQuestConditionInteger;
}();
exports.OfferQuestConditionInteger = i;