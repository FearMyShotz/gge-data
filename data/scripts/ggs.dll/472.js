Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionCostC2(e = 0) {
    this._costC2 = 0;
    if (e != 0) {
      this._costC2 = e;
    }
  }
  Object.defineProperty(OfferDescriptionCostC2.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_COST_C2;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC2.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionCostC2.prototype.parseFromObjectParam = function (e) {
    this._costC2 = e;
  };
  Object.defineProperty(OfferDescriptionCostC2.prototype, "costC2", {
    get: function () {
      return this._costC2;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC2.prototype.dispose = function () {};
  return OfferDescriptionCostC2;
}();
exports.OfferDescriptionCostC2 = a;