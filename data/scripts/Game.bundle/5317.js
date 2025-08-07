Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionVisualEuroAmount() {
    this._euroAmount = 0;
  }
  Object.defineProperty(OfferDescriptionVisualEuroAmount.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_EURO_AMOUNT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualEuroAmount.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualEuroAmount.prototype.execute = function (e) {
    return true;
  };
  OfferDescriptionVisualEuroAmount.prototype.toExecuteInState = function (e) {
    return false;
  };
  Object.defineProperty(OfferDescriptionVisualEuroAmount.prototype, "euroAmount", {
    get: function () {
      return this._euroAmount;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualEuroAmount.prototype.parseFromObjectParam = function (e) {
    this._euroAmount = e.A[0];
  };
  return OfferDescriptionVisualEuroAmount;
}();
exports.OfferDescriptionVisualEuroAmount = a;
n.classImplementsInterfaces(a, "IOfferDescriptionVisualParameter");