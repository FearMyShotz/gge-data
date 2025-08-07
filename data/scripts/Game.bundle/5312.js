Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionAdditionalIsInviteeConversionOffer() {
    this._isInvitation = false;
  }
  Object.defineProperty(OfferDescriptionAdditionalIsInviteeConversionOffer.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_IS_INVITATION;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalIsInviteeConversionOffer.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalIsInviteeConversionOffer.prototype.parseFromObjectParam = function (e) {
    if (e.ICO) {
      this._isInvitation = !!e.ICO;
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalIsInviteeConversionOffer.prototype, "isInvitation", {
    get: function () {
      return this._isInvitation;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalIsInviteeConversionOffer;
}();
exports.OfferDescriptionAdditionalIsInviteeConversionOffer = a;
n.classImplementsInterfaces(a, "IOfferDescriptionAdditionalParameter");