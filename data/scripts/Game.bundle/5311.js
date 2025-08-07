Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionAdditionalIsOneTimeOffer() {
    this._isOneTimeOffer = false;
  }
  Object.defineProperty(OfferDescriptionAdditionalIsOneTimeOffer.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_IS_ONE_TIME_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalIsOneTimeOffer.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalIsOneTimeOffer.prototype.parseFromObjectParam = function (e) {
    if (e.OTO) {
      this._isOneTimeOffer = !!e.OTO;
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalIsOneTimeOffer.prototype, "isOneTimeOffer", {
    get: function () {
      return this._isOneTimeOffer;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalIsOneTimeOffer;
}();
exports.OfferDescriptionAdditionalIsOneTimeOffer = a;
n.classImplementsInterfaces(a, "IOfferDescriptionAdditionalParameter");