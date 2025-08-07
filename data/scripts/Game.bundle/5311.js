Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionAdditionalClientTracking() {}
  Object.defineProperty(OfferDescriptionAdditionalClientTracking.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_CLIENT_TRACKING;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalClientTracking.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalClientTracking.prototype.parseFromObjectParam = function (e) {
    if (e.CTR) {
      this._trackingKey = e.CTR;
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalClientTracking.prototype, "trackingKey", {
    get: function () {
      return this._trackingKey;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalClientTracking;
}();
exports.OfferDescriptionAdditionalClientTracking = a;
n.classImplementsInterfaces(a, "IOfferDescriptionAdditionalParameter");