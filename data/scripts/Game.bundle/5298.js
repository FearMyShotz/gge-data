Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = function () {
  function OfferDescriptionCostC1() {
    this._costC1 = 0;
  }
  Object.defineProperty(OfferDescriptionCostC1.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_COST_C1;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC1.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionCostC1.prototype.parseFromObjectParam = function (e) {
    this._costC1 = o.int(e);
  };
  Object.defineProperty(OfferDescriptionCostC1.prototype, "costC1", {
    get: function () {
      return this._costC1;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionCostC1;
}();
exports.OfferDescriptionCostC1 = s;
n.classImplementsInterfaces(s, "IOfferDescription");