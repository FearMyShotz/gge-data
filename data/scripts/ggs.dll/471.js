Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionCostC1(e = 0) {
    this._costC1 = 0;
    if (e != 0) {
      this._costC1 = e;
    }
  }
  Object.defineProperty(OfferDescriptionCostC1.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_COST_C1;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC1.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionCostC1.prototype.parseFromObjectParam = function (e) {
    this._costC1 = e;
  };
  Object.defineProperty(OfferDescriptionCostC1.prototype, "costC1", {
    get: function () {
      return this._costC1;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC1.prototype.dispose = function () {};
  return OfferDescriptionCostC1;
}();
exports.OfferDescriptionCostC1 = a;