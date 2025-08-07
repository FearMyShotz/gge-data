Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function GlobalOfferVO(e, t, i, n = null, o = true, a = false, s = 0) {
    this._offerType = 0;
    this._offerEndTimeStamp = 0;
    this._offerStartTimeStamp = 0;
    this._hasPopup = false;
    this._isTimeless = false;
    this._offerType = e;
    this._offerStartTimeStamp = s;
    this._offerEndTimeStamp = t;
    this._offerScope = i;
    this._additionalParams = n;
    this._hasPopup = o;
    this._isTimeless = a;
    this._offerStartTimeStamp = this.offerStartTimeStamp;
  }
  Object.defineProperty(GlobalOfferVO.prototype, "offerType", {
    get: function () {
      return this._offerType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "offerStartTimeStamp", {
    get: function () {
      return this._offerStartTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "offerEndTimeStamp", {
    get: function () {
      return this._offerEndTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  GlobalOfferVO.prototype.isOfferExpired = function (e) {
    return e > this._offerEndTimeStamp;
  };
  GlobalOfferVO.prototype.remainingDuration = function (e) {
    return (this._offerEndTimeStamp - e) * o.ClientConstTime.MILLISEC_2_SEC;
  };
  Object.defineProperty(GlobalOfferVO.prototype, "offerScope", {
    get: function () {
      return this._offerScope;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "hasPopup", {
    get: function () {
      return this._hasPopup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "isTimeless", {
    get: function () {
      return this._isTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "cashDiscount", {
    get: function () {
      return this._additionalParams.cashDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "goldDiscount", {
    get: function () {
      return this._additionalParams.goldDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "typeID", {
    get: function () {
      return this._additionalParams.typeID;
    },
    enumerable: true,
    configurable: true
  });
  return GlobalOfferVO;
}();
exports.GlobalOfferVO = n;
var o = require("./28.js");