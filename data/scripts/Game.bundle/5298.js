Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionEuroAmount() {
    this._euroAmount = 0;
  }
  Object.defineProperty(OfferDescriptionEuroAmount.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_EURO_AMOUNT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionEuroAmount.prototype, "euroAmount", {
    get: function () {
      return this._euroAmount;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionEuroAmount.prototype.parseFromObjectParam = function (e) {};
  OfferDescriptionEuroAmount.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  return OfferDescriptionEuroAmount;
}();
exports.OfferDescriptionEuroAmount = a;
n.classImplementsInterfaces(a, "IOfferDescription");