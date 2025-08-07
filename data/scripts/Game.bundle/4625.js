Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./221.js");
var a = function () {
  function SubscriptionPackageVO() {
    this._shopId = 0;
    this._price = 0;
    this._providerIds = [];
    this._isVisible = false;
    this._type = o.SubscriptionPackageEnum.UNKNOWN;
  }
  SubscriptionPackageVO.prototype.parseServerObject = function (e) {
    this._shopId = n.int(e.id);
    this._price = n.int(e.price);
    this._currencyCode = e.currencyCode;
    this._providerType = e.providerType;
    this._providerIds = [];
    for (var t = 0, i = e.providerIds; t < i.length; t++) {
      var a = i[t];
      if (a !== undefined) {
        this._providerIds.push(parseInt(a));
      }
    }
    this._isVisible = e.isVisible;
    if (e.gamePayout && e.gamePayout.length > 0) {
      this._type = o.SubscriptionPackageEnum.getTypeByShopId(e.gamePayout[0].type);
    }
  };
  SubscriptionPackageVO.prototype.getFirstProviderId = function () {
    return n.int(this._providerIds.length > 0 ? this._providerIds[0] : -1);
  };
  Object.defineProperty(SubscriptionPackageVO.prototype, "shopId", {
    get: function () {
      return this._shopId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageVO.prototype, "price", {
    get: function () {
      return this._price;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageVO.prototype, "currencyCode", {
    get: function () {
      return this._currencyCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageVO.prototype, "providerType", {
    get: function () {
      return this._providerType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageVO.prototype, "providerIds", {
    get: function () {
      return this._providerIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageVO.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  return SubscriptionPackageVO;
}();
exports.SubscriptionPackageVO = a;