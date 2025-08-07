Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = function () {
  function OfferDescriptionAdditionalIsTimeless() {
    this._isTimeless = false;
    this._totalSeconds = 0;
  }
  Object.defineProperty(OfferDescriptionAdditionalIsTimeless.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_ADDITIONAL_IS_TIMELESS;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalIsTimeless.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalIsTimeless.prototype.parseFromObjectParam = function (e) {
    if (e.TML) {
      this._isTimeless = !!e.TML;
    }
    if (e.TS) {
      this._totalSeconds = o.int(e.TS);
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalIsTimeless.prototype, "isTimeless", {
    get: function () {
      return this._isTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionAdditionalIsTimeless.prototype, "totalSeconds", {
    get: function () {
      return this._totalSeconds;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalIsTimeless;
}();
exports.OfferDescriptionAdditionalIsTimeless = s;
n.classImplementsInterfaces(s, "IOfferDescriptionAdditionalParameter");