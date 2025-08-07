Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function SubscriptionProviderVO() {
    this._id = 0;
    this._minAmount = 0;
    this._maxAmount = 0;
  }
  SubscriptionProviderVO.prototype.parseServerObject = function (e) {
    this._id = n.int(e.id);
    this._countryCode = e.countryCode;
    this._minAmount = n.int(e.minAmount);
    this._maxAmount = n.int(e.maxAmount);
    this._type = e.type;
  };
  Object.defineProperty(SubscriptionProviderVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionProviderVO.prototype, "countryCode", {
    get: function () {
      return this._countryCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionProviderVO.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionProviderVO.prototype, "maxAmount", {
    get: function () {
      return this._maxAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionProviderVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  return SubscriptionProviderVO;
}();
exports.SubscriptionProviderVO = o;